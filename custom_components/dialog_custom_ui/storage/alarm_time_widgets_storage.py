"""Storage helpers for dialog custom UI alarm time widgets."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_alarm_time_widgets"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_alarm_time_widgets(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]


async def async_load_alarm_time_widgets(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return _normalize_alarm_time_widgets(loaded)


async def async_save_alarm_time_widgets(
    hass: HomeAssistant,
    alarm_time_widgets: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    await store.async_save(_normalize_alarm_time_widgets(alarm_time_widgets))
