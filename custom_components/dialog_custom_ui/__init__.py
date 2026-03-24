"""Dialog Custom UI integration."""

from __future__ import annotations

from collections import deque

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .api import async_register_websockets
from .const import DOMAIN, MAX_LOG_ENTRIES
from .coordinator import DialogCommandCoordinator
from .panel import async_register_panel


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the integration domain."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    async_register_websockets(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Dialog Custom UI from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    await async_register_panel(hass)
    coordinator = DialogCommandCoordinator(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = coordinator
    await coordinator.async_start()
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    coordinator: DialogCommandCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
    await coordinator.async_stop()
    return True
