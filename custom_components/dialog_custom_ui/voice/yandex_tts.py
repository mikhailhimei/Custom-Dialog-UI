"""Yandex SpeechKit TTS helpers and service registration."""

from __future__ import annotations

import logging
from datetime import datetime
from pathlib import Path
from typing import Any
import re
import asyncio
import shutil
import uuid

import aiohttp
import async_timeout
import voluptuous as vol

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.aiohttp_client import async_get_clientsession
import homeassistant.helpers.config_validation as cv

from ..const import (
    CONF_YANDEX_TTS_API_KEY,
    CONF_YANDEX_TTS_CODEC,
    CONF_YANDEX_TTS_EMOTION,
    CONF_YANDEX_TTS_FOLDER_ID,
    CONF_YANDEX_TTS_LANG,
    CONF_YANDEX_TTS_SPEED,
    CONF_YANDEX_TTS_VOICE,
    DEFAULT_YANDEX_TTS_CODEC,
    DEFAULT_YANDEX_TTS_EMOTION,
    DEFAULT_YANDEX_TTS_LANG,
    DEFAULT_YANDEX_TTS_SPEED,
    DEFAULT_YANDEX_TTS_VOICE,
    DOMAIN,
)

from ..normalize import (
    _normalize_value
)

_LOGGER = logging.getLogger(__name__)

YANDEX_API_URL = "https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize"

SUPPORTED_LANGUAGES = {"ru-RU", "en-US", "tr-TR"}
SUPPORTED_CODECS = {"lpcm", "oggopus", "wav"}
SUPPORTED_VOICES = {
    "oksana",
    "jane",
    "omazh",
    "zahar",
    "ermil",
    "silaerkan",
    "erkanyavas",
    "alyss",
    "nick",
    "alena",
    "filipp",
}
SUPPORTED_EMOTIONS = {"good", "evil", "neutral"}

SERVICE_SPEAK = "yandex_tts_speak"
_SYNTH_TIMEOUT_SECONDS = 20

SERVICE_SCHEMA = vol.Schema(
    {
        vol.Required("text"): cv.string,
        vol.Optional("entity_id"): vol.Any(cv.entity_id, [cv.entity_id]),
        vol.Optional(CONF_YANDEX_TTS_LANG): cv.string,
        vol.Optional(CONF_YANDEX_TTS_CODEC): cv.string,
        vol.Optional(CONF_YANDEX_TTS_VOICE): cv.string,
        vol.Optional(CONF_YANDEX_TTS_EMOTION): cv.string,
        vol.Optional(CONF_YANDEX_TTS_SPEED): vol.Any(int, float),
        vol.Optional("volume_level"): vol.All(vol.Coerce(float), vol.Range(min=0, max=1)),
    }
)


_SOUND_TAG_RE = re.compile(r"<([^>]+)>")


def _split_text_and_sounds(text: str) -> list[tuple[str, str]]:
    """Split text into a list of (kind, value) tuples.

    kind is either 'tts' or 'sound'. For example:
    "hello <ping.mp3> bye" -> [('tts','hello '), ('sound','ping.mp3'), ('tts',' bye')]
    """
    parts: list[tuple[str, str]] = []
    last = 0
    for m in _SOUND_TAG_RE.finditer(text):
        if m.start() > last:
            parts.append(("tts", text[last:m.start()]))
        parts.append(("sound", m.group(1).strip()))
        last = m.end()
    if last < len(text):
        parts.append(("tts", text[last:]))
    return parts


def _resolve_sound_file(hass: HomeAssistant, name: str) -> Path | None:
    """Try to find a sound file by name in several likely locations.

    Returns absolute Path or None if not found.
    """
    p = Path(name)
    # absolute or relative path provided by user
    if p.is_absolute() and p.exists():
        return p
    # relative to HA config/www
    www_path = Path(hass.config.path("www")) / name
    if www_path.exists():
        return www_path
    # relative to integration folder (custom_components/dialog_custom_ui/static or voice folder)
    base = Path(__file__).parent.parent
    cand = base / "static" / name
    if cand.exists():
        return cand
    # voice folder
    cand2 = Path(__file__).parent / name
    if cand2.exists():
        return cand2
    return None


def _estimate_duration_bytes(audio_bytes: bytes) -> float:
    """Rudimentary estimate of playback duration for an audio blob.

    This is a best-effort heuristic used to schedule sequential playback.
    """
    # fallback heuristic: assume ~32000 bytes per second
    return max(0.4, len(audio_bytes) / 32000.0)


def _normalize_speed(value: Any) -> float:
    try:
        speed = float(value)
    except (TypeError, ValueError):
        speed = DEFAULT_YANDEX_TTS_SPEED
    return max(0.1, min(3.0, speed))


def _entity_ids(value: Any) -> list[str]:
    if isinstance(value, str):
        return [value]
    if isinstance(value, list):
        return [item for item in value if isinstance(item, str) and item]
    return []


def _codec_extension(codec: str) -> str:
    if codec == "oggopus":
        return "ogg"
    if codec == "lpcm":
        return "wav"
    if codec == "wav":
        return "wav"
    return "ogg"


def _tts_options_from_entry(entry: ConfigEntry | None) -> dict[str, Any]:
    options = dict(entry.options) if entry else {}
    return {
        CONF_YANDEX_TTS_API_KEY: _normalize_value(options.get(CONF_YANDEX_TTS_API_KEY)),
        CONF_YANDEX_TTS_FOLDER_ID: _normalize_value(options.get(CONF_YANDEX_TTS_FOLDER_ID)),
        CONF_YANDEX_TTS_LANG: _normalize_value(options.get(CONF_YANDEX_TTS_LANG) or DEFAULT_YANDEX_TTS_LANG),
        CONF_YANDEX_TTS_CODEC: _normalize_value(options.get(CONF_YANDEX_TTS_CODEC) or DEFAULT_YANDEX_TTS_CODEC),
        CONF_YANDEX_TTS_VOICE: _normalize_value(options.get(CONF_YANDEX_TTS_VOICE) or DEFAULT_YANDEX_TTS_VOICE),
        CONF_YANDEX_TTS_EMOTION: _normalize_value(options.get(CONF_YANDEX_TTS_EMOTION) or DEFAULT_YANDEX_TTS_EMOTION),
        CONF_YANDEX_TTS_SPEED: _normalize_speed(options.get(CONF_YANDEX_TTS_SPEED, DEFAULT_YANDEX_TTS_SPEED)),
    }


def _current_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None


async def _async_synthesize(hass: HomeAssistant, text: str, options: dict[str, Any]) -> tuple[str, bytes]:
    api_key = _normalize_value(options.get(CONF_YANDEX_TTS_API_KEY))
    folder_id = _normalize_value(options.get(CONF_YANDEX_TTS_FOLDER_ID))
    if not api_key or not folder_id:
        raise HomeAssistantError("Заполните yandex_tts_api_key и yandex_tts_folder_id в Settings.")

    language = _normalize_value(options.get(CONF_YANDEX_TTS_LANG) or DEFAULT_YANDEX_TTS_LANG)
    codec = _normalize_value(options.get(CONF_YANDEX_TTS_CODEC) or DEFAULT_YANDEX_TTS_CODEC)
    voice = _normalize_value(options.get(CONF_YANDEX_TTS_VOICE) or DEFAULT_YANDEX_TTS_VOICE)
    emotion = _normalize_value(options.get(CONF_YANDEX_TTS_EMOTION) or DEFAULT_YANDEX_TTS_EMOTION)
    speed = _normalize_speed(options.get(CONF_YANDEX_TTS_SPEED, DEFAULT_YANDEX_TTS_SPEED))

    if language not in SUPPORTED_LANGUAGES:
        language = DEFAULT_YANDEX_TTS_LANG
    if codec not in SUPPORTED_CODECS:
        codec = DEFAULT_YANDEX_TTS_CODEC
    if voice not in SUPPORTED_VOICES:
        voice = DEFAULT_YANDEX_TTS_VOICE
    if emotion not in SUPPORTED_EMOTIONS:
        emotion = DEFAULT_YANDEX_TTS_EMOTION

    session = async_get_clientsession(hass)
    payload = {
        "text": text,
        "lang": language,
        "voice": voice,
        "format": codec,
        "emotion": emotion,
        "speed": str(speed),
        "folderId": folder_id,
    }
    headers = {"Authorization": f"Api-Key {api_key}"}

    try:
        async with async_timeout.timeout(_SYNTH_TIMEOUT_SECONDS):
            response = await session.post(YANDEX_API_URL, headers=headers, data=payload)
            if response.status != 200:
                body = await response.text()
                _LOGGER.warning("Yandex TTS failed (%s): %s", response.status, body[:300])
                raise HomeAssistantError(f"Yandex TTS returned HTTP {response.status}")
            data = await response.read()
    except (aiohttp.ClientError, TimeoutError) as err:
        raise HomeAssistantError(f"Yandex TTS request failed: {err}") from err

    return _codec_extension(codec), data


def _write_audio_file(path: Path, audio: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(audio)


async def async_register_tts_service(hass: HomeAssistant) -> None:
    """Register dialog_custom_ui.yandex_tts_speak service."""
    if hass.services.has_service(DOMAIN, SERVICE_SPEAK):
        return

    async def _async_handle_speak(call: ServiceCall) -> None:
        text = _normalize_value(call.data.get("text"))
        if not text:
            raise HomeAssistantError("Поле text обязательно.")

        options = _tts_options_from_entry(_current_entry(hass))
        for key in (
            CONF_YANDEX_TTS_LANG,
            CONF_YANDEX_TTS_CODEC,
            CONF_YANDEX_TTS_VOICE,
            CONF_YANDEX_TTS_EMOTION,
            CONF_YANDEX_TTS_SPEED,
        ):
            if key in call.data:
                options[key] = call.data[key]

        parts = _split_text_and_sounds(text)
        rel_dir = Path("www") / "dialog_custom_ui_tts"
        abs_dir = Path(hass.config.path(str(rel_dir)))
        abs_dir.mkdir(parents=True, exist_ok=True)

        targets = _entity_ids(call.data.get("entity_id"))
        volume_level = call.data.get("volume_level")

        # set volume once if requested
        if targets and volume_level is not None:
            await hass.services.async_call(
                "media_player",
                "volume_set",
                {"entity_id": targets, "volume_level": float(volume_level)},
                blocking=True,
            )

        for kind, value in parts:
            try:
                if kind == "tts":
                    tts_text = value.strip()
                    if not tts_text:
                        continue
                    extension, audio = await _async_synthesize(hass, tts_text, options)
                    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
                    filename = f"tts_{ts}_{uuid.uuid4().hex[:6]}.{extension}"
                    abs_path = Path(hass.config.path(str(rel_dir / filename)))
                    await hass.async_add_executor_job(_write_audio_file, abs_path, audio)
                    media_url = f"/local/dialog_custom_ui_tts/{filename}"

                    if targets:
                        await hass.services.async_call(
                            "media_player",
                            "play_media",
                            {
                                "entity_id": targets,
                                "media_content_id": media_url,
                                "media_content_type": "music",
                            },
                            blocking=False,
                        )
                        await asyncio.sleep(_estimate_duration_bytes(audio) + 0.15)

                elif kind == "sound":
                    name = value.strip()
                    if not name:
                        continue
                    src = _resolve_sound_file(hass, name)
                    if not src:
                        _LOGGER.warning("Sound file not found: %s", name)
                        continue

                    # destination in www folder
                    dest_path = abs_dir / Path(name).name
                    # if source already in www and same file, reuse
                    try:
                        www_root = Path(hass.config.path("www"))
                        if src.resolve().is_relative_to(www_root.resolve()):
                            dest_path = src
                        else:
                            # copy to www
                            await hass.async_add_executor_job(shutil.copyfile, str(src), str(dest_path))
                    except Exception:
                        # python <3.9 Path.is_relative_to not available; fallback to copy
                        if str(src).startswith(str(Path(hass.config.path("www")))):
                            dest_path = src
                        else:
                            await hass.async_add_executor_job(shutil.copyfile, str(src), str(dest_path))

                    media_url = f"/local/dialog_custom_ui_tts/{dest_path.name}"
                    if targets:
                        await hass.services.async_call(
                            "media_player",
                            "play_media",
                            {
                                "entity_id": targets,
                                "media_content_id": media_url,
                                "media_content_type": "music",
                            },
                            blocking=False,
                        )

                    # estimate duration from file size
                    try:
                        file_bytes = await hass.async_add_executor_job(dest_path.read_bytes)
                        await asyncio.sleep(_estimate_duration_bytes(file_bytes) + 0.05)
                    except Exception:
                        await asyncio.sleep(0.6)

            except Exception as err:  # continue on per-segment errors
                _LOGGER.exception("Error handling TTS/sound segment: %s", err)

        _LOGGER.info("Yandex TTS sequence completed for text: %s", text)

    hass.services.async_register(
        DOMAIN,
        SERVICE_SPEAK,
        _async_handle_speak,
        schema=SERVICE_SCHEMA,
    )
