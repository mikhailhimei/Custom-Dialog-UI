"""Storage helpers for dialog custom UI alarm requests and time widgets."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_alarm_requests"
_ALARM_REQUESTS_KEY = "alarm_requests"
_ALARM_TIME_WIDGETS_KEY = "alarm_time_widgets"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_items(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]


def _normalize_storage(value: Any) -> dict[str, list[dict[str, Any]]]:
    if isinstance(value, list):
        return {
            _ALARM_REQUESTS_KEY: _normalize_items(value),
            _ALARM_TIME_WIDGETS_KEY: [],
        }

    if not isinstance(value, dict):
        return {_ALARM_REQUESTS_KEY: [], _ALARM_TIME_WIDGETS_KEY: []}

    return {
        _ALARM_REQUESTS_KEY: _normalize_items(value.get(_ALARM_REQUESTS_KEY)),
        _ALARM_TIME_WIDGETS_KEY: _normalize_items(value.get(_ALARM_TIME_WIDGETS_KEY)),
    }


async def _async_load_storage(hass: HomeAssistant) -> dict[str, list[dict[str, Any]]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return _normalize_storage(loaded)


async def _async_save_storage(
    hass: HomeAssistant,
    data: dict[str, list[dict[str, Any]]],
) -> None:
    store = _get_store(hass)
    await store.async_save(_normalize_storage(data))


async def async_load_alarm_requests(hass: HomeAssistant) -> list[dict[str, Any]]:
    data = await _async_load_storage(hass)

    return data[_ALARM_REQUESTS_KEY]


async def async_save_alarm_requests(
    hass: HomeAssistant,
    alarm_requests: list[dict[str, Any]],
) -> None:
    data = await _async_load_storage(hass)
    data[_ALARM_REQUESTS_KEY] = _normalize_items(alarm_requests)
    await _async_save_storage(hass, data)


async def async_load_alarm_time_widgets(hass: HomeAssistant) -> list[dict[str, Any]]:
    data = await _async_load_storage(hass)

    return data[_ALARM_TIME_WIDGETS_KEY]


async def async_save_alarm_time_widgets(
    hass: HomeAssistant,
    alarm_time_widgets: list[dict[str, Any]],
) -> None:
    data = await _async_load_storage(hass)
    data[_ALARM_TIME_WIDGETS_KEY] = _normalize_items(alarm_time_widgets)
    await _async_save_storage(hass, data)
