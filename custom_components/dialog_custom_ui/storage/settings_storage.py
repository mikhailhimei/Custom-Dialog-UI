"""Storage helpers for Dialog Custom UI settings."""

from __future__ import annotations

from copy import deepcopy
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from ..const import DOMAIN

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_settings"
_CACHE_KEY = "settings_cache"

SETTINGS_FALLBACKS: dict[str, Any] = {
    "yandex_tts": {
        "api_key": "",
        "folderId": "",
        "language": "ru-RU",
        "codec": "oggopus",
        "voice": "oksana",
        "emotion": "good",
        "speed": 1.1,
    },
    "remout": {
        "base_url": "",
        "token": "",
    },
    "timer_alarm": {
        "global_music_timer": "timer-alarm.mp3",
        "global_music_alarm": "timer-alarm.mp3",
    },
    "client_id": "",
    "theme": "light",
    "is_admin": False,
    "active_remout": False,
    "api_commands_enabled": False,
    "api_commands_token": "",
}


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _deep_merge(base: dict[str, Any], override: dict[str, Any]) -> dict[str, Any]:
    result = deepcopy(base)
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = _deep_merge(result[key], value)
        else:
            result[key] = value
    return result


def normalize_settings(value: Any) -> dict[str, Any]:
    return _deep_merge(SETTINGS_FALLBACKS, value if isinstance(value, dict) else {})


async def async_load_settings(hass: HomeAssistant) -> dict[str, Any]:
    store = _get_store(hass)
    loaded = await store.async_load()
    return normalize_settings(loaded)


async def async_get_cached_settings(hass: HomeAssistant) -> dict[str, Any]:
    domain_data = hass.data.setdefault(DOMAIN, {})
    cached = domain_data.get(_CACHE_KEY)
    if not isinstance(cached, dict):
        cached = await async_load_settings(hass)
        domain_data[_CACHE_KEY] = cached
    return deepcopy(cached)


def get_cached_settings(hass: HomeAssistant) -> dict[str, Any]:
    cached = hass.data.get(DOMAIN, {}).get(_CACHE_KEY)
    if isinstance(cached, dict):
        return deepcopy(normalize_settings(cached))
    return deepcopy(SETTINGS_FALLBACKS)


async def async_save_settings(hass: HomeAssistant, settings: dict[str, Any]) -> None:
    normalized = normalize_settings(settings)
    store = _get_store(hass)
    await store.async_save(normalized)
    hass.data.setdefault(DOMAIN, {})[_CACHE_KEY] = normalized
