"""Storage helpers for dialog custom UI alarm requests."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_alarm_requests"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_alarm_requests(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]


async def async_load_alarm_requests(hass: HomeAssistant) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return _normalize_alarm_requests(loaded)


async def async_save_alarm_requests(
    hass: HomeAssistant,
    alarm_requests: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    await store.async_save(_normalize_alarm_requests(alarm_requests))
