"""Home Assistant services for Dialog Custom UI."""

from __future__ import annotations

import json
import logging
from datetime import datetime
from typing import Any

import aiohttp
import async_timeout
import voluptuous as vol
import redis.asyncio as redis

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import aiohttp_client

from .const import (
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_COMMAND_RECEIVE_MODE,
    CONF_REDIS_PASSWORD,
    CONF_REDIS_URL,
    CONF_REDIS_USERNAME,
    CONF_TIMEOUT,
    CONF_TIMER_ALARM_TOKEN,
    DEFAULT_BASE_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
)

_LOGGER = logging.getLogger(__name__)

SERVICE_SEND_COMMAND = "send_command"
_SAVE_COMMANDS_PATH = "/api/dialog/save-commands"

ATTR_CLIENT_ID = "clientId"
ATTR_DEVICE_ID = "deviceId"
ATTR_ACTION_TYPE = "actionType"
ATTR_VARIABLES = "variables"

_SEND_COMMAND_SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_CLIENT_ID): vol.Coerce(str),
        vol.Required(ATTR_DEVICE_ID): vol.Coerce(str),
        vol.Required(ATTR_ACTION_TYPE): vol.Coerce(str),
        vol.Optional(ATTR_VARIABLES, default={}): vol.Any(str, dict),
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
    """Send a command payload to /api/dialog/save-commands."""
    entry = _get_entry(hass)
    if entry is None:
        raise HomeAssistantError("Dialog Custom UI integration entry not found")

    options = _get_options(entry)
    base_url = _normalize_value(options.get(CONF_BASE_URL)).rstrip("/")
    if not base_url:
        raise HomeAssistantError("Dialog Custom UI Base URL is empty")

    variables = _parse_variables(call.data.get(ATTR_VARIABLES))
    payload = {
        ATTR_CLIENT_ID: _normalize_value(call.data.get(ATTR_CLIENT_ID)) or _normalize_value(options.get(CONF_CLIENT_ID)),
        ATTR_DEVICE_ID: _normalize_value(call.data.get(ATTR_DEVICE_ID)),
        ATTR_ACTION_TYPE: _normalize_value(call.data.get(ATTR_ACTION_TYPE)),
        ATTR_VARIABLES: variables,
    }


    if _normalize_value(options.get(CONF_COMMAND_RECEIVE_MODE)).lower() == "redis_subscribe":
        channel = f"DIALOG_MESSAGE:{payload[ATTR_CLIENT_ID]}:{payload[ATTR_DEVICE_ID]}"
        redis_url = _normalize_value(options.get(CONF_REDIS_URL)) or "redis://127.0.0.1:6379/0"
        redis_username = _normalize_value(options.get(CONF_REDIS_USERNAME))
        redis_password = _normalize_value(options.get(CONF_REDIS_PASSWORD))
        redis_payload = {
            ATTR_ACTION_TYPE: payload[ATTR_ACTION_TYPE],
            ATTR_VARIABLES: payload[ATTR_VARIABLES],
        }
        client = redis.Redis.from_url(
            redis_url,
            decode_responses=True,
            username=redis_username or None,
            password=redis_password or None,
        )
        timeout = max(1, int(options.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)))
        try:
            async with async_timeout.timeout(timeout):
                await client.publish(channel, json.dumps(redis_payload, ensure_ascii=False))
            _append_log(hass, "request", f"PUBLISH {channel}")
            return
        except (redis.RedisError, TimeoutError) as err:
            _append_log(hass, "error", f"send_command redis publish failed: {err}")
            raise HomeAssistantError(f"Failed to publish dialog command to Redis: {err}") from err
        finally:
            close_client = getattr(client, "aclose", None) or getattr(client, "close", None)
            if close_client:
                result = close_client()
                if hasattr(result, "__await__"):
                    await result

    url = f"{base_url}{_SAVE_COMMANDS_PATH}"
    headers = {"Accept": "application/json", "Content-Type": "application/json"}
    authorization = _normalize_value(options.get(CONF_TIMER_ALARM_TOKEN))
    if authorization:
        headers["Authorization"] = authorization

    session = aiohttp_client.async_get_clientsession(hass)
    timeout = max(1, int(options.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)))
    try:
        async with async_timeout.timeout(timeout):
            response = await session.post(url, json=payload, headers=headers)
        body = await response.text()
    except (aiohttp.ClientError, TimeoutError) as err:
        _append_log(hass, "error", f"send_command request failed: {err}")
        raise HomeAssistantError(f"Failed to send dialog command: {err}") from err

    if response.status >= 400:
        _append_log(hass, "error", f"send_command returned {response.status}")
        _LOGGER.warning("Dialog send_command returned %s: %s", response.status, body[:300])
        raise HomeAssistantError(f"Dialog endpoint returned HTTP {response.status}")

    _append_log(hass, "request", f"POST {_SAVE_COMMANDS_PATH} ({response.status})")


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


def _get_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None


def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, ""),
        CONF_COMMAND_RECEIVE_MODE: stored.get(CONF_COMMAND_RECEIVE_MODE, "http"),
        CONF_REDIS_URL: stored.get(CONF_REDIS_URL, "redis://127.0.0.1:6379/0"),
        CONF_REDIS_USERNAME: stored.get(CONF_REDIS_USERNAME, ""),
        CONF_REDIS_PASSWORD: stored.get(CONF_REDIS_PASSWORD, ""),
        CONF_TIMER_ALARM_TOKEN: stored.get(CONF_TIMER_ALARM_TOKEN, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
    }


def _normalize_value(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()


def _append_log(hass: HomeAssistant, level: str, message: str) -> None:
    logs = hass.data.setdefault(DOMAIN, {}).setdefault("logs", [])
    logs.appendleft({"ts": datetime.now().strftime("%H:%M:%S"), "level": level, "message": message})
