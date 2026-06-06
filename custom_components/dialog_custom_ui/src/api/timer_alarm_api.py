"""Websocket API for timer-alarm-specific config operations."""

from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ...const import (
    CONF_ALLOW_NON_ADMIN_PANEL,
    CONF_TIMER_ALARM_DEVICE_IDS,
    CONF_TIMER_ALARM_TOKEN,
    DOMAIN,
    WS_GET_TIMER_ALARM_CONFIG,
    WS_SAVE_TIMER_ALARM_CONFIG,
)
from ...normalize import _normalize_device_ids
from ...utils import _get_entry, _clean_string

LOGGER = logging.getLogger(__name__)


SAVE_TIMER_ALARM_SCHEMA = {
    vol.Required("type"): WS_SAVE_TIMER_ALARM_CONFIG,
    vol.Optional(CONF_TIMER_ALARM_TOKEN, default=""): str,
    vol.Optional(CONF_TIMER_ALARM_DEVICE_IDS, default=[]): [str],
}


def async_register_timer_alarm_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_timer_alarm_config)
    websocket_api.async_register_command(hass, _ws_save_timer_alarm_config)


def _ws_error(
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    code: str,
    message: str,
) -> None:
    connection.send_error(msg["id"], code, message)


def _build_timer_alarm_response(entry) -> dict[str, Any]:
    return {
        "timer_alarm_token": entry.options.get(CONF_TIMER_ALARM_TOKEN, ""),
        "timer_alarm_device_ids": _normalize_device_ids(
            entry.options.get(CONF_TIMER_ALARM_DEVICE_IDS, [])
        ),
    }


@websocket_api.websocket_command({vol.Required("type"): WS_GET_TIMER_ALARM_CONFIG})
@websocket_api.async_response
async def _ws_get_timer_alarm_config(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_entry(hass)

    if entry is None:
        _ws_error(
            connection,
            msg,
            "not_configured",
            "Integration entry not found",
        )
        return

    is_admin = bool(getattr(connection.user, "is_admin", False))

    if not is_admin and not entry.options.get(CONF_ALLOW_NON_ADMIN_PANEL, True):
        _ws_error(
            connection,
            msg,
            "unauthorized",
            "Access denied",
        )
        return

    connection.send_result(msg["id"], _build_timer_alarm_response(entry))


@websocket_api.websocket_command(SAVE_TIMER_ALARM_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_timer_alarm_config(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_entry(hass)

    if entry is None:
        _ws_error(
            connection,
            msg,
            "not_configured",
            "Integration entry not found",
        )
        return

    previous_options = dict(entry.options)

    try:
        options = dict(previous_options)
        options[CONF_TIMER_ALARM_TOKEN] = _clean_string(
            msg.get(CONF_TIMER_ALARM_TOKEN)
        )
        options[CONF_TIMER_ALARM_DEVICE_IDS] = _normalize_device_ids(
            msg.get(CONF_TIMER_ALARM_DEVICE_IDS, [])
        )

    except Exception as err:
        LOGGER.exception("Failed to build timer alarm options")
        _ws_error(
            connection,
            msg,
            "invalid_config",
            str(err),
        )
        return

    hass.config_entries.async_update_entry(entry, options=options)

    coordinator = hass.data[DOMAIN][entry.entry_id]

    try:
        await coordinator.async_reload()
    except Exception:
        LOGGER.exception("Failed to reload integration")
        _ws_error(
            connection,
            msg,
            "reload_failed",
            "Config saved but reload failed",
        )
        return

    connection.send_result(msg["id"], {"saved": True})
