"""Home Assistant services for Dialog Custom UI."""

from __future__ import annotations

import json
from datetime import datetime
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse
from homeassistant.exceptions import HomeAssistantError
from .storage.settings_storage import get_cached_settings

from .utils import (
    _get_entry,
    _get_options,
    _get_manager
)

from .normalize import (
    _normalize_value
)

from .const import (
    DOMAIN,
    EVENT_DIALOG_MESSAGE,
)

SERVICE_SEND_COMMAND = "send_command"
SERVICE_ALARM_SCRIPT = "alarm_script"
SERVICE_TIMER_SCRIPT = "timer_script"

ATTR_CLIENT_ID = "clientId"
ATTR_DEVICE_ID = "deviceId"
ATTR_ACTION_TYPE = "actionType"
ATTR_VARIABLES = "variables"
ATTR_USE_DECLENSION = "useDeclension"
ATTR_ACTION = "action"
ATTR_HH = "hh"
ATTR_MM = "mm"
ATTR_SS = "ss"
ATTR_REPEAT_TYPE = "repeat_type"
ATTR_REPEAT_DAYS = "repeat_days"
ATTR_CONVERT_DAY_PERIOD = "convert_day_period"
ATTR_RESPONSE_VARIABLE = "response_variable"
ATTR_TARGET = "target"

_SEND_COMMAND_SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_CLIENT_ID): vol.Coerce(str),
        vol.Required(ATTR_DEVICE_ID): vol.Coerce(str),
        vol.Required(ATTR_ACTION_TYPE): vol.Coerce(str),
        vol.Optional(ATTR_VARIABLES, default={}): vol.Any(str, dict),
        vol.Optional(ATTR_USE_DECLENSION, default=True): vol.Boolean(),
    }
)


def async_register_services(hass: HomeAssistant) -> None:
    """Register Dialog Custom UI services for scripts and automations."""
    async def async_handle_send_command(call: ServiceCall) -> None:
        await _async_handle_send_command(hass, call)

    async def async_handle_alarm_script(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_script(hass, "alarm", call)

    async def async_handle_timer_script(call: ServiceCall) -> dict[str, Any]:
        return await _async_handle_timer_alarm_script(hass, "timer", call)

    if not hass.services.has_service(DOMAIN, SERVICE_SEND_COMMAND):
        hass.services.async_register(
            DOMAIN,
            SERVICE_SEND_COMMAND,
            async_handle_send_command,
            schema=_SEND_COMMAND_SCHEMA,
        )
    if not hass.services.has_service(DOMAIN, SERVICE_ALARM_SCRIPT):
        hass.services.async_register(
            DOMAIN,
            SERVICE_ALARM_SCRIPT,
            async_handle_alarm_script,
            schema=_ALARM_SCRIPT_SCHEMA,
            supports_response=SupportsResponse.OPTIONAL,
        )
    if not hass.services.has_service(DOMAIN, SERVICE_TIMER_SCRIPT):
        hass.services.async_register(
            DOMAIN,
            SERVICE_TIMER_SCRIPT,
            async_handle_timer_script,
            schema=_TIMER_SCRIPT_SCHEMA,
            supports_response=SupportsResponse.OPTIONAL,
        )


def async_unregister_services(hass: HomeAssistant) -> None:
    """Unregister Dialog Custom UI services."""
    if hass.services.has_service(DOMAIN, SERVICE_SEND_COMMAND):
        hass.services.async_remove(DOMAIN, SERVICE_SEND_COMMAND)
    if hass.services.has_service(DOMAIN, SERVICE_ALARM_SCRIPT):
        hass.services.async_remove(DOMAIN, SERVICE_ALARM_SCRIPT)
    if hass.services.has_service(DOMAIN, SERVICE_TIMER_SCRIPT):
        hass.services.async_remove(DOMAIN, SERVICE_TIMER_SCRIPT)


async def _async_handle_send_command(hass: HomeAssistant, call: ServiceCall) -> None:
    """Send a command payload through the Home Assistant event bus."""
    entry = _get_entry(hass)
    if entry is None:
        raise HomeAssistantError("Dialog Custom UI integration entry not found")

    options = _get_options(entry, get_cached_settings(hass))
    variables = _parse_variables(call.data.get(ATTR_VARIABLES))
    payload = {
        ATTR_CLIENT_ID: _normalize_value(call.data.get(ATTR_CLIENT_ID)) or _normalize_value(options.get("client_id")),
        ATTR_DEVICE_ID: _normalize_value(call.data.get(ATTR_DEVICE_ID)),
        ATTR_ACTION_TYPE: _normalize_value(call.data.get(ATTR_ACTION_TYPE)),
        ATTR_VARIABLES: variables,
        ATTR_USE_DECLENSION: call.data.get(ATTR_USE_DECLENSION, True),
    }

    hass.bus.async_fire(
        EVENT_DIALOG_MESSAGE,
        {
            "client_id": payload[ATTR_CLIENT_ID],
            "device_id": payload[ATTR_DEVICE_ID],
            ATTR_ACTION_TYPE: payload[ATTR_ACTION_TYPE],
            ATTR_VARIABLES: payload[ATTR_VARIABLES],
            ATTR_USE_DECLENSION: payload[ATTR_USE_DECLENSION],
        },
    )



async def _async_handle_timer_alarm_script(hass: HomeAssistant, kind: str, call: ServiceCall) -> dict[str, Any]:
    entry = _get_entry(hass)
    if entry is None:
        raise HomeAssistantError("Dialog Custom UI integration entry not found")

    manager = _get_manager(hass, entry)
    if manager is None:
        raise HomeAssistantError("Dialog timer/alarm manager not found")

    options = _get_options(entry, get_cached_settings(hass))
    client_id = _normalize_value(call.data.get(ATTR_CLIENT_ID)) or _normalize_value(options.get("client_id"))
    device_id = _normalize_value(call.data.get(ATTR_DEVICE_ID))
    config = dict(call.data)
    if kind == "alarm":
        config["target"] = call.data.get(ATTR_TARGET)
    else:
        config["target"] = _normalize_value(call.data.get(ATTR_TARGET))
    return await manager.async_handle_yaml_script_action(kind, config, client_id, device_id)

def _parse_variables(value: Any) -> dict[str, Any]:
    if value in (None, ""):
        return {}
    if isinstance(value, dict):
        return value
    if isinstance(value, str):
        try:
            parsed = json.loads(value)
        except json.JSONDecodeError as err:
            raise HomeAssistantError(f"variables must be valid JSON: {err.msg}") from err
        if isinstance(parsed, dict):
            return parsed
    raise HomeAssistantError("variables must be a JSON object")


def _append_log(hass: HomeAssistant, level: str, message: str) -> None:
    logs = hass.data.setdefault(DOMAIN, {}).setdefault("logs", [])
    logs.appendleft({"ts": datetime.now().strftime("%H:%M:%S"), "level": level, "message": message})


_ACTION_SCHEMA = vol.In(["create", "info", "delete"])
_REPEAT_SCHEMA = vol.In(["once", "daily", "weekdays", "weekends", "custom"])

_ALARM_SCRIPT_SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_ACTION): _ACTION_SCHEMA,
        vol.Optional(ATTR_CLIENT_ID): vol.Coerce(str),
        vol.Optional(ATTR_DEVICE_ID): vol.Coerce(str),
        vol.Optional(ATTR_HH, default=0): vol.Coerce(int),
        vol.Optional(ATTR_MM, default=0): vol.Coerce(int),
        vol.Optional(ATTR_REPEAT_TYPE, default="once"): _REPEAT_SCHEMA,
        vol.Optional(ATTR_REPEAT_DAYS, default=""): vol.Any(str, [str]),
        vol.Optional(ATTR_CONVERT_DAY_PERIOD, default=False): vol.Boolean(),
        vol.Optional(ATTR_TARGET, default=""): vol.Any(str, int),
        vol.Optional(ATTR_RESPONSE_VARIABLE, default=""): vol.Coerce(str),
    }
)

_TIMER_SCRIPT_SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_ACTION): _ACTION_SCHEMA,
        vol.Optional(ATTR_CLIENT_ID): vol.Coerce(str),
        vol.Optional(ATTR_DEVICE_ID): vol.Coerce(str),
        vol.Optional(ATTR_HH, default=0): vol.Coerce(int),
        vol.Optional(ATTR_MM, default=0): vol.Coerce(int),
        vol.Optional(ATTR_SS, default=0): vol.Coerce(int),
        vol.Optional(ATTR_TARGET, default=""): vol.Coerce(str),
        vol.Optional(ATTR_RESPONSE_VARIABLE, default=""): vol.Coerce(str),
    }
)
