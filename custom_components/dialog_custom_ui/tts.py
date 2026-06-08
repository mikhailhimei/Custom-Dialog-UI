"""Yandex TTS provider platform for Home Assistant."""

from __future__ import annotations

import logging
from typing import Any

from homeassistant.components.tts import TextToSpeechEntity, TtsAudioType
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN
from .voice.yandex_tts import _async_synthesize, _tts_options_from_entry

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Yandex TTS from a config entry."""
    async_add_entities([YandexTTSProvider(hass, config_entry)])


class YandexTTSProvider(TextToSpeechEntity):
    """Yandex TTS provider entity."""

    _attr_name = "Yandex TTS"
    _attr_unique_id = f"{DOMAIN}_tts"

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        """Initialize Yandex TTS provider."""
        self.hass = hass
        self.config_entry = config_entry

    @property
    def default_language(self) -> str:
        """Return the default language."""
        return "ru-RU"

    @property
    def supported_languages(self) -> list[str]:
        """Return list of supported languages."""
        return ["ru-RU", "en-US", "tr-TR"]

    async def async_get_tts_audio(
        self, message: str, language: str, options: dict[str, Any] | None = None
    ) -> TtsAudioType:
        """Convert text to speech using Yandex API."""
        try:
            tts_options = _tts_options_from_entry(self.config_entry)
            extension, audio_bytes = await _async_synthesize(self.hass, message, tts_options)

            codec = extension
            if codec == "oggopus":
                codec = "ogg"
            elif codec == "lpcm":
                codec = "wav"

            return codec, audio_bytes
        except Exception as err:
            _LOGGER.error("Failed to synthesize speech: %s", err)
            raise HomeAssistantError(f"TTS synthesis failed: {err}") from err
