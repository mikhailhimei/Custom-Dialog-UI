"""Yandex SpeechKit TTS helpers and service registration."""

from __future__ import annotations

import asyncio
import logging
import re
from datetime import datetime
from pathlib import Path
from typing import Any
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
_SOUND_TAG_RE = re.compile(r"<([^>]+)>")

SERVICE_SCHEMA = vol.Schema(
    {
        vol.Required("tts"): cv.string,
        vol.Optional("text"): cv.string,
        vol.Optional("entity_id"): vol.Any(cv.entity_id, [cv.entity_id]),
        vol.Optional(CONF_YANDEX_TTS_LANG): cv.string,
        vol.Optional(CONF_YANDEX_TTS_CODEC): cv.string,
        vol.Optional(CONF_YANDEX_TTS_VOICE): cv.string,
        vol.Optional(CONF_YANDEX_TTS_EMOTION): cv.string,
        vol.Optional(CONF_YANDEX_TTS_SPEED): vol.Any(int, float),
        vol.Optional("volume_level"): vol.All(vol.Coerce(float), vol.Range(min=0, max=1)),
    }
)


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


def _format_media_source_tag(tag: str) -> str:
    normalized = _normalize_value(tag)
    if not normalized:
        return ""
    if normalized.startswith("media-source://"):
        return normalized
    if normalized.startswith("/"):
        return f"media-source://media_source/local{normalized}"
    return f"media-source://media_source/local/{normalized}"


def _split_text_and_sounds(text: str) -> list[tuple[str, str]]:
    segments: list[tuple[str, str]] = []
    last_end = 0
    for match in _SOUND_TAG_RE.finditer(text):
        if match.start() > last_end:
            segments.append(("text", text[last_end:match.start()]))
        segments.append(("sound", match.group(1)))
        last_end = match.end()
    if last_end < len(text):
        segments.append(("text", text[last_end:]))
    return segments


def _estimate_duration_seconds(audio: bytes, extension: str) -> float:
    # approximate audio duration: use bytes / bitrate conversion
    if extension == "wav":
        # WAV bitrate roughly 16kHz mono 16bit => 32000 bytes/sec
        rate = 32000
    else:
        # OGG/OPUS has lower bitrate
        rate = 24000
    return max(0.5, len(audio) / rate)


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
        tts_text = _normalize_value(call.data.get("tts") or call.data.get("text"))
        if not tts_text:
            raise HomeAssistantError("Поле tts обязательно.")

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

        targets = _entity_ids(call.data.get("entity_id"))
        volume_level = call.data.get("volume_level")
        segments = _split_text_and_sounds(tts_text)

        if volume_level is not None and targets:
            await hass.services.async_call(
                "media_player",
                "volume_set",
                {"entity_id": targets, "volume_level": float(volume_level)},
                blocking=True,
            )

        for segment_type, segment_value in segments:
            if segment_type == "text":
                segment_text = segment_value.strip()
                if not segment_text:
                    continue

                extension, audio = await _async_synthesize(hass, segment_text, options)
                ts = datetime.now().strftime("%Y%m%d_%H%M%S")
                filename = f"tts_{ts}_{uuid.uuid4().hex[:6]}.{extension}"
                rel_dir = Path("www") / "dialog_custom_ui_tts"
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
                    await asyncio.sleep(_estimate_duration_seconds(audio, extension))
                _LOGGER.info("Yandex TTS audio generated: %s", media_url)
            else:
                media_path = _format_media_source_tag(segment_value)
                if targets:
                    await hass.services.async_call(
                        "media_player",
                        "play_media",
                        {
                            "entity_id": targets,
                            "media_content_id": media_path,
                            "media_content_type": "music",
                        },
                        blocking=False,
                    )
                    await asyncio.sleep(1.0)
                _LOGGER.info("Yandex sound tag played: %s", media_path)

    hass.services.async_register(
        DOMAIN,
        SERVICE_SPEAK,
        _async_handle_speak,
        schema=SERVICE_SCHEMA,
    )
