"""Storage helpers for dialog custom UI assistant settings."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .cms_cache import update_cms_cache_collection

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_assistant_settings"
_DEFAULT_ASSISTANT_SETTINGS: list[dict[str, Any]] = [
    {
        "actionType": "default",
        "endStatus": False,
        "title": "Если ничего не нашел",
        "voiceResponse": "Извините я вас не поняла",
    },
]


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_assistant_settings(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]


def _copy_default_assistant_settings() -> list[dict[str, Any]]:
    return [dict(item) for item in _DEFAULT_ASSISTANT_SETTINGS]


async def _async_load_or_create_assistant_settings(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    if loaded is None:
        defaults = _copy_default_assistant_settings()
        await store.async_save(defaults)
        update_cms_cache_collection(hass, "settings-dialog", defaults)
        return defaults

    return _normalize_assistant_settings(loaded)


async def async_load_assistant_settings(hass: HomeAssistant) -> list[dict[str, Any]]:
    return await _async_load_or_create_assistant_settings(hass)


async def async_save_assistant_settings(
    hass: HomeAssistant,
    assistant_settings: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    normalized = _normalize_assistant_settings(assistant_settings)
    await store.async_save(normalized)
    update_cms_cache_collection(hass, "settings-dialog", normalized)
