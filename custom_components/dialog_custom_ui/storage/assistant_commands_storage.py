"""Storage helpers for dialog custom UI assistant commands."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .cms_cache import update_cms_cache_collection

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_assistant_commands"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_assistant_commands(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]


async def async_load_assistant_commands(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return _normalize_assistant_commands(loaded)


async def async_save_assistant_commands(
    hass: HomeAssistant,
    assistant_commands: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    normalized = _normalize_assistant_commands(assistant_commands)
    await store.async_save(normalized)
    update_cms_cache_collection(hass, "commands", normalized)
