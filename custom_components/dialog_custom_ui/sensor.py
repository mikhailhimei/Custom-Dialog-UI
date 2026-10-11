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
        self._attr_unique_id = f"{entry.entry_id}_voice_timers"

    async def async_update(self):
        coordinator = self.hass.data[DOMAIN].get(self._entry.entry_id)
        self._attr_available = coordinator is not None
        if coordinator is None:
            return
        timers = latest_device_timers(coordinator.timer_alarm_manager.get_timer_items())
        payload = dict(timers)
        payload["_updated_at"] = int(time.time())
        devices = dr.async_get(self.hass)
        entities = er.async_get(self.hass)
        # Alias device IDs with the ESPHome node name, so a normal Voice PE YAML
        # works without hard-coding Home Assistant's generated device ID.
        for device_ref, timer in timers.items():
            entity = entities.async_get(device_ref)
            device_id = entity.device_id if entity else device_ref
            device = devices.async_get(device_id)
            if device is None:
                continue
            for config_entry_id in device.config_entries:
                config_entry = self.hass.config_entries.async_get_entry(config_entry_id)
                if config_entry and config_entry.domain == "esphome":
                    node_name = config_entry.data.get("device_name")
                    if node_name:
                        previous = payload.get(node_name)
                        if previous is None or previous["created_at"] <= timer["created_at"]:
                            payload[node_name] = timer
        self._attr_native_value = len(timers)
        self._attr_extra_state_attributes = {
            "payload": json.dumps(payload, ensure_ascii=False, separators=(",", ":")),
        }
