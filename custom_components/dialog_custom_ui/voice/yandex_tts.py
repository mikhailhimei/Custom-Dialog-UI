"""Yandex SpeechKit TTS helpers and service registration."""

from __future__ import annotations

import logging
from datetime import datetime
from pathlib import Path
from typing import Any
import uuid

import aiohttp
import async_timeout
import voluptuous as vol

from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.aiohttp_client import async_get_clientsession
import homeassistant.helpers.config_validation as cv

from ..audio_notification import audio_notification

from ..const import DOMAIN

from ..normalize import (
    _normalize_value
)
from ..storage.settings_storage import async_get_cached_settings

_LOGGER = logging.getLogger(__name__)
YANDEX_TTS_API_KEY = "yandex_tts_api_key"
YANDEX_TTS_FOLDER_ID = "yandex_tts_folder_id"
YANDEX_TTS_LANG = "yandex_tts_lang"
YANDEX_TTS_CODEC = "yandex_tts_codec"
YANDEX_TTS_VOICE = "yandex_tts_voice"
YANDEX_TTS_EMOTION = "yandex_tts_emotion"
YANDEX_TTS_SPEED = "yandex_tts_speed"

YANDEX_TTS_FALLBACK_LANG = "ru-RU"
YANDEX_TTS_FALLBACK_CODEC = "oggopus"
YANDEX_TTS_FALLBACK_VOICE = "oksana"
YANDEX_TTS_FALLBACK_EMOTION = "good"
YANDEX_TTS_FALLBACK_SPEED = 1.1

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
        vol.Optional("device_id"): vol.Any(cv.entity_id, [cv.entity_id]),
        vol.Optional("end_status"): vol.Any(bool, cv.string),
        vol.Optional(YANDEX_TTS_LANG): cv.string,
        vol.Optional(YANDEX_TTS_CODEC): cv.string,
        vol.Optional(YANDEX_TTS_VOICE): cv.string,
        vol.Optional(YANDEX_TTS_EMOTION): cv.string,
        vol.Optional(YANDEX_TTS_SPEED): vol.Any(int, float),
        vol.Optional("volume_level"): vol.All(vol.Coerce(float), vol.Range(min=0, max=1)),
    }
)

def _is_end_status_true(value: Any) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        return value.strip().lower() in {"true", "1", "yes", "on"}
    return bool(value)


def _normalize_speed(value: Any) -> float:
    try:
        speed = float(value)
    except (TypeError, ValueError):
        speed = YANDEX_TTS_FALLBACK_SPEED
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


async def _async_tts_options_from_storage(hass: HomeAssistant) -> dict[str, Any]:
    settings = await async_get_cached_settings(hass)
    yandex = settings.get("yandex_tts") if isinstance(settings.get("yandex_tts"), dict) else {}
    return {
        YANDEX_TTS_API_KEY: _normalize_value(yandex.get("api_key")),
        YANDEX_TTS_FOLDER_ID: _normalize_value(yandex.get("folderId") or yandex.get("folder_id")),
        YANDEX_TTS_LANG: _normalize_value(yandex.get("language") or YANDEX_TTS_FALLBACK_LANG),
        YANDEX_TTS_CODEC: _normalize_value(yandex.get("codec") or YANDEX_TTS_FALLBACK_CODEC),
        YANDEX_TTS_VOICE: _normalize_value(yandex.get("voice") or YANDEX_TTS_FALLBACK_VOICE),
        YANDEX_TTS_EMOTION: _normalize_value(yandex.get("emotion") or YANDEX_TTS_FALLBACK_EMOTION),
        YANDEX_TTS_SPEED: _normalize_speed(yandex.get("speed", YANDEX_TTS_FALLBACK_SPEED)),
    }


async def _async_synthesize(hass: HomeAssistant, text: str, options: dict[str, Any]) -> tuple[str, bytes]:
    api_key = _normalize_value(options.get(YANDEX_TTS_API_KEY))
    folder_id = _normalize_value(options.get(YANDEX_TTS_FOLDER_ID))
    if not api_key or not folder_id:
        raise HomeAssistantError("Заполните yandex_tts_api_key и yandex_tts_folder_id в Settings.")

    language = _normalize_value(options.get(YANDEX_TTS_LANG) or YANDEX_TTS_FALLBACK_LANG)
    codec = _normalize_value(options.get(YANDEX_TTS_CODEC) or YANDEX_TTS_FALLBACK_CODEC)
    voice = _normalize_value(options.get(YANDEX_TTS_VOICE) or YANDEX_TTS_FALLBACK_VOICE)
    emotion = _normalize_value(options.get(YANDEX_TTS_EMOTION) or YANDEX_TTS_FALLBACK_EMOTION)
    speed = _normalize_speed(options.get(YANDEX_TTS_SPEED, YANDEX_TTS_FALLBACK_SPEED))

    if language not in SUPPORTED_LANGUAGES:
        language = YANDEX_TTS_FALLBACK_LANG
    if codec not in SUPPORTED_CODECS:
        codec = YANDEX_TTS_FALLBACK_CODEC
    if voice not in SUPPORTED_VOICES:
        voice = YANDEX_TTS_FALLBACK_VOICE
    if emotion not in SUPPORTED_EMOTIONS:
        emotion = YANDEX_TTS_FALLBACK_EMOTION

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
        text = _normalize_value(call.data.get("text") or call.data.get("tts"))
        if not text:
            raise HomeAssistantError("Поле text обязательно.")

        options = await _async_tts_options_from_storage(hass)
        for key in (
            YANDEX_TTS_LANG,
            YANDEX_TTS_CODEC,
            YANDEX_TTS_VOICE,
            YANDEX_TTS_EMOTION,
            YANDEX_TTS_SPEED,
        ):
            if key in call.data:
                options[key] = call.data[key]

        extension, audio = await _async_synthesize(hass, text, options)
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"tts_{ts}_{uuid.uuid4().hex[:6]}.{extension}"
        rel_dir = Path("www") / "dialog_custom_ui_tts"
        abs_path = Path(hass.config.path(str(rel_dir / filename)))
        await hass.async_add_executor_job(_write_audio_file, abs_path, audio)

        media_url = f"dialog_custom_ui_tts/{filename}"
        devices = call.data.get("device_id")
        end_status = call.data.get("end_status")
        volume_level = call.data.get("volume_level") 

        _LOGGER.error(
            "info: %s, %s, devices: %s, end_status: %s, volume_level: %s",
            text,
            media_url,
            devices,
            end_status,
            volume_level,
        )

        volume_level = volume_level if volume_level is not None else 1.0

        end_status_finished = _is_end_status_true(end_status)

        if devices:
            await audio_notification(
                hass,
                devices,
                media_url,
                volume_level=volume_level,
                wait_until_finished=not end_status_finished,
            )

        if not end_status_finished:
            await audio_notification(hass, devices, "water-single-short-drop.mp3", volume_level=volume_level)

        _LOGGER.info("Yandex TTS audio generated: %s", media_url)

    hass.services.async_register(
        DOMAIN,
        SERVICE_SPEAK,
        _async_handle_speak,
        schema=SERVICE_SCHEMA,
    )
