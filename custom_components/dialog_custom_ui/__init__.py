"""Dialog Custom UI integration."""

from __future__ import annotations

from collections import deque

from homeassistant.components import conversation
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_IP_ADDRESS
from homeassistant.core import HomeAssistant

from .src.api.config_api import async_register_websockets
from .const import (
    CONF_VOICE_AGENT_IP,
    CONF_VOICE_AGENT_USER_ID,
    DOMAIN,
    MAX_LOG_ENTRIES,
)
from .coordinator import DialogCommandCoordinator
from .dialog_http import async_register_dialog_http
from .src.api.scenarios_script_api import async_register_scenarios_websockets
from .timer_alarm.timer_alarm_manager_wrapper import async_register_timer_alarm_websockets
from .panel import async_register_panel
from .services import async_register_services, async_unregister_services
from .src.service.dialog_runtime import set_current_hass
from .voice.voice_agent import DialogCustomUiVoiceAgent
from .voice.yandex_tts import SERVICE_SPEAK, async_register_tts_service


PLATFORMS = ["tts"]

async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the integration domain."""
    set_current_hass(hass)
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    async_register_websockets(hass)
    async_register_scenarios_websockets(hass)
    async_register_timer_alarm_websockets(hass)
    async_register_dialog_http(hass)
    async_register_services(hass)
    await async_register_tts_service(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Dialog Custom UI from a config entry."""
    set_current_hass(hass)
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN].setdefault("logs", deque(maxlen=MAX_LOG_ENTRIES))
    async_register_dialog_http(hass)
    async_register_services(hass)
    await async_register_tts_service(hass)
    await _async_migrate_legacy_voice_agent_options(hass, entry)
    await async_register_panel(hass)
    coordinator = DialogCommandCoordinator(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = coordinator
    await coordinator.async_start()
 
    await hass.config_entries.async_forward_entry_setups(
        entry,
        PLATFORMS,
    )

    conversation.async_set_agent(
            hass,
            entry,
            DialogCustomUiVoiceAgent(
                hass,
                entry,
                entry.entry_id,
            ),
        )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    
    unload_ok = await hass.config_entries.async_unload_platforms(
        entry,
        PLATFORMS,
    )

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
