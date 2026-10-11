"""Expose runtime timer progress to ESPHome without reading storage files."""

from __future__ import annotations

import json
import time
from datetime import timedelta

from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers import device_registry as dr, entity_registry as er

from .const import DOMAIN
from .timer_alarm.timer_display import latest_device_timers

SCAN_INTERVAL = timedelta(seconds=1)


async def async_setup_entry(hass, entry, async_add_entities):
    async_add_entities([DialogTimersSensor(hass, entry)], update_before_add=True)


class DialogTimersSensor(SensorEntity):
    _attr_name = "Dialog Custom UI Timers"
    _attr_icon = "mdi:timer-outline"

    def __init__(self, hass, entry):
        self.hass = hass
        self._entry = entry
        # Keep the existing ID so upgrades reuse the entity registry entry.
        self._attr_unique_id = f"{entry.entry_id}_voice_timers"

    async def async_update(self):
        coordinator = self.hass.data.get(DOMAIN, {}).get(self._entry.entry_id)
        self._attr_available = coordinator is not None
        if coordinator is None:
            return
        timers = latest_device_timers(coordinator.timer_alarm_manager.get_timer_items())
        devices = dr.async_get(self.hass)
        entities = er.async_get(self.hass)
        groups = {}
        refs = {}
        for device_ref, timer in timers.items():
            entity = entities.async_get(device_ref)
            device_id = entity.device_id if entity else device_ref
            device = devices.async_get(device_id) if device_id else None
            # Entity IDs and registry device IDs can refer to the same column.
            key = device.id if device else device_ref
            refs[device_ref] = key
            previous = groups.get(key)
            if previous is None or previous["created_at"] <= timer["created_at"]:
                groups[key] = timer

        # Preserve the original deviceId for manual firmware subscriptions.
        payload = {ref: groups[key] for ref, key in refs.items() if ref != "_updated_at"}
        aliases = {}
        # Check ownership even for columns without timers: duplicate names
        # must never make both columns subscribe to one column's progress.
        for config_entry in self.hass.config_entries.async_entries("esphome"):
            linked = dr.async_entries_for_config_entry(devices, config_entry.entry_id)
            node_name = config_entry.data.get("device_name")
            if node_name and node_name != "_updated_at":
                aliases.setdefault(node_name, set()).update(device.id for device in linked)
        for node_name, owners in aliases.items():
            if len(owners) == 1 and node_name not in payload:
                key = next(iter(owners))
                if key in groups:
                    payload[node_name] = groups[key]
        payload["_updated_at"] = int(time.time())
        self._attr_native_value = len(groups)
        self._attr_extra_state_attributes = {
            "payload": json.dumps(payload, ensure_ascii=False, separators=(",", ":")),
        }
