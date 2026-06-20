"""Persistent storage for time widget presets."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from ..normalize import _normalize_value

_STORAGE_KEY = "dialog_custom_ui_time_widgets"
_STORAGE_VERSION = 1


def _normalize_times(value: Any) -> list[str]:
    if isinstance(value, str):
        value = [value]
    if not isinstance(value, list):
        return []
    return [_normalize_value(item) for item in value if _normalize_value(item)]


def _normalize_time_widgets(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    result: list[dict[str, Any]] = []
    for item in value:
        if not isinstance(item, dict):
            continue
        uuid_value = _normalize_value(item.get("uuid"))
        if not uuid_value:
            continue
        result.append(
            {
                "uuid": uuid_value,
                "times": _normalize_times(item.get("times")),
            }
        )
    return result


async def async_load_time_widgets(hass: HomeAssistant) -> list[dict[str, Any]]:
    """Load time widgets from Home Assistant storage."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    loaded = await store.async_load()
    return _normalize_time_widgets(loaded)


async def async_save_time_widgets(
    hass: HomeAssistant,
    time_widgets: list[dict[str, Any]],
) -> None:
    """Save time widgets to Home Assistant storage."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    await store.async_save(_normalize_time_widgets(time_widgets))
