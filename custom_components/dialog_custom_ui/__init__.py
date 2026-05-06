"""Dialog Custom UI integration."""

from __future__ import annotations

from collections import deque

from homeassistant.components import conversation
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_IP_ADDRESS
from homeassistant.core import HomeAssistant

from .api import async_register_websockets
from .const import (
    CONF_TIMER_ALARM_TOKEN,
    CONF_VOICE_AGENT_IP,
    CONF_VOICE_AGENT_USER_ID,
    DOMAIN,
    MAX_LOG_ENTRIES,
)
from .coordinator import DialogCommandCoordinator
from .timer_alarm_manager import async_register_timer_alarm_websockets
from .panel import async_register_panel
from .services import async_register_services, async_unregister_services
from .voice_agent import DialogCustomUiVoiceAgent
from .yandex_tts import SERVICE_SPEAK, async_register_tts_service


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the integration domain."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    async_register_websockets(hass)
    async_register_timer_alarm_websockets(hass)
    async_register_services(hass)
    await async_register_tts_service(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Dialog Custom UI from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    async_register_services(hass)
    await async_register_tts_service(hass)
    await _async_migrate_legacy_voice_agent_options(hass, entry)
    await async_register_panel(hass)
    coordinator = DialogCommandCoordinator(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = coordinator
    await coordinator.async_start()
    voice_agent_ip = str(entry.options.get(CONF_VOICE_AGENT_IP, "")).strip()
    voice_agent_user_id = str(entry.options.get(CONF_VOICE_AGENT_USER_ID, "")).strip()
    authorization_token = str(entry.options.get(CONF_TIMER_ALARM_TOKEN, "")).strip()
    if voice_agent_ip and voice_agent_user_id:
        conversation.async_set_agent(
            hass,
            entry,
            DialogCustomUiVoiceAgent(
                hass,
                voice_agent_ip,
                voice_agent_user_id,
                entry.entry_id,
                authorization_token,
            ),
        )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    coordinator: DialogCommandCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
    await coordinator.async_stop()
    if hass.services.has_service(DOMAIN, SERVICE_SPEAK):
        hass.services.async_remove(DOMAIN, SERVICE_SPEAK)
    if not hass.config_entries.async_entries(DOMAIN):
        async_unregister_services(hass)
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
