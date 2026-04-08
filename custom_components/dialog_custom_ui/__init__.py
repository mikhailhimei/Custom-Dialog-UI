"""Dialog Custom UI integration."""

from __future__ import annotations

from collections import deque

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .api import async_register_websockets
from .const import DOMAIN, MAX_LOG_ENTRIES
from .coordinator import DialogCommandCoordinator
from .timer_alarm import TimerAlarmCoordinator, async_register_timer_alarm_websockets
from .panel import async_register_panel


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the integration domain."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    async_register_websockets(hass)
    async_register_timer_alarm_websockets(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Dialog Custom UI from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    await async_register_panel(hass)
    coordinator = DialogCommandCoordinator(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = coordinator
    await coordinator.async_start()
    timer_alarm_coordinator = TimerAlarmCoordinator(hass, entry)
    hass.data[DOMAIN][f"{entry.entry_id}:timer_alarm"] = timer_alarm_coordinator
    await timer_alarm_coordinator.async_start()
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    coordinator: DialogCommandCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
    await coordinator.async_stop()
    timer_alarm_coordinator = hass.data[DOMAIN].pop(f"{entry.entry_id}:timer_alarm", None)
    if timer_alarm_coordinator is not None:
        await timer_alarm_coordinator.async_stop()
    return True
