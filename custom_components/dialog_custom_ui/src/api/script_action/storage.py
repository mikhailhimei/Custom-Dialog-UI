"""Storage helpers for dialog custom UI script actions."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_script_actions"
_SCRIPT_ACTIONS_KEY = "script_actions"


def _get_store(hass: HomeAssistant) -> Store:
    """Return the Home Assistant store for script actions."""
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_script_actions(value: Any) -> list[dict[str, Any]]:
    """Normalize persisted script actions to a list of dictionaries."""
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]


async def async_load_script_actions(hass: HomeAssistant) -> list[dict[str, Any]]:
    """Load script actions from the dedicated Home Assistant storage file."""
    store = _get_store(hass)
    loaded = await store.async_load()

    if not isinstance(loaded, dict):
        return []

    return _normalize_script_actions(loaded.get(_SCRIPT_ACTIONS_KEY))


async def async_save_script_actions(
    hass: HomeAssistant,
    script_actions: list[dict[str, Any]],
) -> None:
    """Save script actions to the dedicated Home Assistant storage file."""
    store = _get_store(hass)
    await store.async_save(
        {_SCRIPT_ACTIONS_KEY: _normalize_script_actions(script_actions)}
    )
