"""Dialog Custom UI integration."""

from __future__ import annotations

from collections import deque

from homeassistant.components import conversation
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_IP_ADDRESS
from homeassistant.core import HomeAssistant

from .api import async_register_websockets
from .const import (
    CONF_VOICE_AGENT_IP,
    CONF_VOICE_AGENT_USER_ID,
    DOMAIN,
    MAX_LOG_ENTRIES,
)
from .coordinator import DialogCommandCoordinator
from .timer_alarm import TimerAlarmCoordinator, async_register_timer_alarm_websockets
from .panel import async_register_panel
from .voice_agent import DialogCustomUiVoiceAgent


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
    await _async_migrate_legacy_voice_agent_options(hass, entry)
    await async_register_panel(hass)
    coordinator = DialogCommandCoordinator(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = coordinator
    await coordinator.async_start()
    timer_alarm_coordinator = TimerAlarmCoordinator(hass, entry)
    hass.data[DOMAIN][f"{entry.entry_id}:timer_alarm"] = timer_alarm_coordinator
    await timer_alarm_coordinator.async_start()
    voice_agent_ip = str(entry.options.get(CONF_VOICE_AGENT_IP, "")).strip()
    voice_agent_user_id = str(entry.options.get(CONF_VOICE_AGENT_USER_ID, "")).strip()
    if voice_agent_ip and voice_agent_user_id:
        conversation.async_set_agent(
            hass,
            entry,
            DialogCustomUiVoiceAgent(hass, voice_agent_ip, voice_agent_user_id, entry.entry_id),
        )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    coordinator: DialogCommandCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
    await coordinator.async_stop()
    timer_alarm_coordinator = hass.data[DOMAIN].pop(f"{entry.entry_id}:timer_alarm", None)
    if timer_alarm_coordinator is not None:
        await timer_alarm_coordinator.async_stop()
    return True


async def _async_migrate_legacy_voice_agent_options(
    hass: HomeAssistant,
    entry: ConfigEntry,
) -> None:
    options = dict(entry.options)
    if options.get(CONF_VOICE_AGENT_IP) and options.get(CONF_VOICE_AGENT_USER_ID):
        return

    legacy_entries = hass.config_entries.async_entries("custom_voice_agent")
    if not legacy_entries:
        return

    legacy = legacy_entries[0]
    migrated_ip = str(legacy.data.get(CONF_IP_ADDRESS, "")).strip()
    migrated_user_id = str(legacy.data.get("user_id", "")).strip()
    if not migrated_ip or not migrated_user_id:
        return

    options[CONF_VOICE_AGENT_IP] = migrated_ip
    options[CONF_VOICE_AGENT_USER_ID] = migrated_user_id
    hass.config_entries.async_update_entry(entry, options=options)
