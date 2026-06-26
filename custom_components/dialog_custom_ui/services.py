"""Home Assistant services for Dialog Custom UI."""

from __future__ import annotations

import json
from datetime import datetime
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import HomeAssistantError
from .utils import (
    _get_entry,
    _get_options
)

from .normalize import (
    _normalize_value
)

from .const import (
    DOMAIN,
    EVENT_DIALOG_MESSAGE,
)

SERVICE_SEND_COMMAND = "send_command"

ATTR_CLIENT_ID = "clientId"
ATTR_DEVICE_ID = "deviceId"
ATTR_ACTION_TYPE = "actionType"
ATTR_VARIABLES = "variables"
ATTR_USE_DECLENSION = "useDeclension"

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
    if hass.services.has_service(DOMAIN, SERVICE_SEND_COMMAND):
        return

    async def async_handle_send_command(call: ServiceCall) -> None:
        await _async_handle_send_command(hass, call)

    hass.services.async_register(
        DOMAIN,
        SERVICE_SEND_COMMAND,
        async_handle_send_command,
        schema=_SEND_COMMAND_SCHEMA,
    )


def async_unregister_services(hass: HomeAssistant) -> None:
    """Unregister Dialog Custom UI services."""
    if hass.services.has_service(DOMAIN, SERVICE_SEND_COMMAND):
        hass.services.async_remove(DOMAIN, SERVICE_SEND_COMMAND)


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
