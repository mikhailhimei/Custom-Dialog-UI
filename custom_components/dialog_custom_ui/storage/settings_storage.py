"""Storage helpers for dialog custom UI script actions."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_settings"


def _get_store(hass: HomeAssistant) -> Store:
    """Return Home Assistant store."""
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


async def async_load_settings(hass: HomeAssistant) -> dict[str, Any]:
    """Load settings from storage."""
    store = _get_store(hass)
    loaded = await store.async_load()

    if not isinstance(loaded, dict):
        return {}

    return loaded


async def async_save_settings(
    hass: HomeAssistant,
    settings: dict[str, Any],
) -> None:
    """Save settings to storage."""
    store = _get_store(hass)

    await store.async_save(settings)