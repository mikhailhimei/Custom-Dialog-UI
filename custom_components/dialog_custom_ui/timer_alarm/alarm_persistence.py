"""Persistent storage for timer/alarm runtime state using Home Assistant storage."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from ..const import DOMAIN
from ..normalize import _normalize_value


def _normalize_repeat_type(value: Any) -> str:
    normalized = _normalize_value(value).lower() or "once"
    aliases = {
        "one_time": "once",
        "single": "once",
        "once": "once",
        "daily": "daily",
        "everyday": "daily",
        "weekdays": "weekdays",
        "workdays": "weekdays",
        "weekends": "weekends",
        "custom": "custom",
    }
    return aliases.get(normalized, "once")


def _normalize_repeat_days(value: Any) -> list[str]:
    if isinstance(value, str):
        value = [part.strip() for part in value.split(",")]
    if not isinstance(value, list):
        return []
    aliases = {
        "monday": "mon", "mon": "mon", "пн": "mon",
        "tuesday": "tue", "tue": "tue", "вт": "tue",
        "wednesday": "wed", "wed": "wed", "ср": "wed",
        "thursday": "thu", "thu": "thu", "чт": "thu",
        "friday": "fri", "fri": "fri", "пт": "fri",
        "saturday": "sat", "sat": "sat", "сб": "sat",
        "sunday": "sun", "sun": "sun", "вс": "sun",
    }
    result: list[str] = []
    for item in value:
        day = aliases.get(_normalize_value(item).lower())
        if day and day not in result:
            result.append(day)
    return result

_LOGGER = logging.getLogger(__name__)
_STORAGE_VERSION = 1
_STORAGE_KEY_PREFIX = f"{DOMAIN}.timer_alarm"


class AlarmPersistence:
    """Persist alarm runtime data in Home Assistant's storage helper."""

    def __init__(self, hass: HomeAssistant, storage_key_suffix: str = "global") -> None:
        safe_suffix = _normalize_value(storage_key_suffix) or "global"
        self._store = Store(hass, _STORAGE_VERSION, f"{_STORAGE_KEY_PREFIX}.{safe_suffix}")
        self._data: dict[str, Any] | None = None

    async def connect(self) -> None:
        """Load existing persisted data.

        Kept for compatibility with the manager lifecycle; Home Assistant storage
        does not require an external connection.
        """
        await self._async_load_data()

    async def disconnect(self) -> None:
        """No-op for Home Assistant storage compatibility."""

    async def save_alarms(self, alarms: dict[str, Any], client_id: str | None = None) -> bool:
        """Save alarms to Home Assistant storage."""
        try:
            data = await self._async_load_data()
            data["alarms"] = self._normalize_alarms(alarms)
            await self._store.async_save(data)
            _LOGGER.debug("Saved %d alarms to Home Assistant storage", len(data["alarms"]))
            return True
        except Exception as err:
            _LOGGER.warning("Failed to save alarms to Home Assistant storage: %s", err)
            return False

    async def load_alarms(self, client_id: str | None = None) -> dict[str, Any] | None:
        """Load alarms from Home Assistant storage."""
        try:
            data = await self._async_load_data()
            alarms = data.get("alarms")
            if not isinstance(alarms, dict) or not alarms:
                _LOGGER.debug("No saved alarms found in Home Assistant storage")
                return None
            normalized = self._normalize_alarms(alarms)
            _LOGGER.debug("Loaded %d alarms from Home Assistant storage", len(normalized))
            return normalized if normalized else None
        except Exception as err:
            _LOGGER.warning("Failed to load alarms from Home Assistant storage: %s", err)
            return None

    async def clear_alarms(self, client_id: str | None = None) -> bool:
        """Clear saved alarms from Home Assistant storage."""
        try:
            data = await self._async_load_data()
            data["alarms"] = {}
            await self._store.async_save(data)
            _LOGGER.debug("Cleared alarms from Home Assistant storage")
            return True
        except Exception as err:
            _LOGGER.warning("Failed to clear alarms from Home Assistant storage: %s", err)
            return False

    async def save_alarm_presets(self, presets: set[str], client_id: str | None = None) -> bool:
        """Save alarm presets to Home Assistant storage."""
        try:
            normalized_presets = {_normalize_value(preset) for preset in presets if _normalize_value(preset)}
            data = await self._async_load_data()
            data["presets"] = sorted(normalized_presets)
            await self._store.async_save(data)
            _LOGGER.debug("Saved %d alarm presets to Home Assistant storage", len(normalized_presets))
            return True
        except Exception as err:
            _LOGGER.warning("Failed to save alarm presets to Home Assistant storage: %s", err)
            return False

    async def load_alarm_presets(self, client_id: str | None = None) -> set[str] | None:
        """Load alarm presets from Home Assistant storage."""
        try:
            data = await self._async_load_data()
            raw_presets = data.get("presets")
            if not isinstance(raw_presets, list):
                return None

            presets = {_normalize_value(preset) for preset in raw_presets if _normalize_value(preset)}
            _LOGGER.debug("Loaded %d alarm presets from Home Assistant storage", len(presets))
            return presets if presets else None
        except Exception as err:
            _LOGGER.warning("Failed to load alarm presets from Home Assistant storage: %s", err)
            return None

    async def _async_load_data(self) -> dict[str, Any]:
        if self._data is not None:
            return self._data

        loaded = await self._store.async_load()
        if not isinstance(loaded, dict):
            loaded = {}

        self._data = {
            "alarms": self._normalize_alarms(loaded.get("alarms", {})),
            "presets": self._normalize_presets(loaded.get("presets", [])),
        }
        return self._data

    def _normalize_alarms(self, alarms: Any) -> dict[str, dict[str, Any]]:
        if isinstance(alarms, list):
            alarm_values = alarms
        elif isinstance(alarms, dict):
            alarm_values = alarms.values()
        else:
            return {}

        normalized: dict[str, dict[str, Any]] = {}
        for alarm in alarm_values:
            if not isinstance(alarm, dict):
                continue
            alarm_id = _normalize_value(alarm.get("id"))
            if not alarm_id:
                continue
            normalized[alarm_id] = dict(
                alarm,
                id=alarm_id,
                repeat_type=_normalize_repeat_type(alarm.get("repeat_type", alarm.get("repeat"))),
                repeat_days=_normalize_repeat_days(alarm.get("repeat_days", alarm.get("week_days", alarm.get("days")))),
            )
        return normalized

    def _normalize_presets(self, presets: Any) -> list[str]:
        if isinstance(presets, str):
            presets = [presets]
        if not isinstance(presets, list):
            return []
        return sorted({_normalize_value(preset) for preset in presets if _normalize_value(preset)})
