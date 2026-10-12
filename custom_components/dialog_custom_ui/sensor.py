"""Expose runtime timer progress to ESPHome without reading storage files."""

from __future__ import annotations

import json
import time
from datetime import timedelta

from homeassistant.components.sensor import SensorEntity
from homeassistant.core import callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers import entity_registry as er

from .const import DOMAIN, SIGNAL_TIMER_ALARM_UPDATED
from .audio_notification import _resolve_media_player_entity_id
from .timer_alarm.timer_display import latest_device_timers

SCAN_INTERVAL = timedelta(seconds=1)


async def async_setup_entry(hass, entry, async_add_entities):
    async_add_entities([DialogTimersSensor(hass, entry), DialogAlarmSensor(hass, entry)], update_before_add=True)


class DialogRuntimeSensor(SensorEntity):
    """Refresh after mutations; periodic polling remains a safety net."""

    def __init__(self, hass, entry):
        self.hass = hass
        self._entry = entry

    async def async_added_to_hass(self):
        await super().async_added_to_hass()
        self.async_on_remove(async_dispatcher_connect(
            self.hass, SIGNAL_TIMER_ALARM_UPDATED, self._runtime_updated,
        ))

    @callback
    def _runtime_updated(self):
        self.async_schedule_update_ha_state(force_refresh=True)


class DialogTimersSensor(DialogRuntimeSensor):
    _attr_name = "Dialog Custom UI Timers"
    _attr_icon = "mdi:timer-outline"

    def __init__(self, hass, entry):
        super().__init__(hass, entry)
        # Keep the existing ID so upgrades reuse the entity registry entry.
        self._attr_unique_id = f"{entry.entry_id}_voice_timers"

    async def async_update(self):
        coordinator = self.hass.data.get(DOMAIN, {}).get(self._entry.entry_id)
        self._attr_available = coordinator is not None
        if coordinator is None:
            return
        items = coordinator.timer_alarm_manager.get_timer_items()
        entities = er.async_get(self.hass)
        # Canonicalize references before choosing the latest timer so voice
        # device IDs and UI entity IDs share one record for the same device.
        normalized = []
        source_by_id = {}
        for item in items:
            ref = str(item.get("deviceId") or "").strip()
            if not ref:
                continue
            entity = entities.async_get(ref)
            device_id = entity.device_id if entity and entity.device_id else ref
            source_by_id[item["id"]] = item
            normalized.append({**item, "deviceId": device_id})
        selected = latest_device_timers(normalized)
        records = []
        for device_id, timer in selected.items():
            source = source_by_id[timer["id"]]
            ref = str(source.get("deviceId") or "").strip()
            records.append({
                "id": timer["id"],
                "media": _resolve_media_player_entity_id(self.hass, ref, log_warnings=False),
                "client_id": str(source.get("clientId") or source.get("userId") or ""),
                "device_id": device_id,
                "total_seconds": timer["total_seconds"],
                "remaining_seconds": timer["remaining_seconds"],
                "paused": timer["paused"],
            })
        self._attr_native_value = len(records)
        self._attr_extra_state_attributes = {
            "payload": records,
            "payload_json": json.dumps(records, ensure_ascii=False, separators=(",", ":")),
            "_updated_at": int(time.time()),
        }


class DialogAlarmSensor(DialogRuntimeSensor):
    """Report enabled scheduled alarms without starting or playing anything."""

    _attr_name = "Dialog Custom UI Alarm"
    _attr_icon = "mdi:alarm"

    def __init__(self, hass, entry):
        super().__init__(hass, entry)
        self._attr_unique_id = f"{entry.entry_id}_alarm_status"

    async def async_update(self):
        coordinator = self.hass.data.get(DOMAIN, {}).get(self._entry.entry_id)
        self._attr_available = coordinator is not None
        if coordinator is None:
            return
        alarms = coordinator.timer_alarm_manager.get_alarm_items()
        active_count = sum(item.get("status") == "on" for item in alarms)
        self._attr_native_value = "on" if active_count else "off"
        entities = er.async_get(self.hass)
        records = []
        for alarm in alarms:
            ref = str(alarm.get("deviceId") or "").strip()
            entity = entities.async_get(ref)
            device_id = entity.device_id if entity and entity.device_id else ref
            records.append({
                "id": alarm["id"],
                "media": _resolve_media_player_entity_id(self.hass, ref, log_warnings=False),
                "client_id": str(alarm.get("clientId") or alarm.get("userId") or ""),
                "device_id": device_id,
                "status": alarm["status"],
            })
        self._attr_extra_state_attributes = {
            "active_count": active_count,
            "payload": records,
            "payload_json": json.dumps(records, ensure_ascii=False, separators=(",", ":")),
        }
