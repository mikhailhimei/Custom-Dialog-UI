"""Storage helpers for dialog custom UI assistant sub direct control samples."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .cms_cache import update_cms_cache_collection

_STORAGE_VERSION = 1
_STORAGE_KEY = "dialog_custom_ui_assistant_sub_direct_controls_sample"


def _get_store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _normalize_assistant_sub_direct_control_samples(value: Any) -> list[dict[str, Any]]:
    if not isinstance(value, list):
        return []

    return [dict(item) for item in value if isinstance(item, dict)]


async def async_load_assistant_sub_direct_control_samples(
    hass: HomeAssistant,
) -> list[dict[str, Any]]:
    store = _get_store(hass)
    loaded = await store.async_load()

    return _normalize_assistant_sub_direct_control_samples(loaded)


async def async_save_assistant_sub_direct_control_samples(
    hass: HomeAssistant,
    assistant_sub_direct_control_samples: list[dict[str, Any]],
) -> None:
    store = _get_store(hass)
    normalized = _normalize_assistant_sub_direct_control_samples(
        assistant_sub_direct_control_samples,
    )
    await store.async_save(normalized)
    update_cms_cache_collection(hass, "sub-direct-controls-sample", normalized)
