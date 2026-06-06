"""Websocket API for scenario-specific config operations."""

from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ...const import (
    CONF_ALLOW_NON_ADMIN_PANEL,
    CONF_SCENARIOS,
    DOMAIN,
    WS_GET_SCENARIOS,
    WS_SAVE_SCENARIOS,
)
from ...normalize import _normalize_scenario
from ...utils import _get_entry, _clean_string

LOGGER = logging.getLogger(__name__)

SAVE_SCENARIOS_SCHEMA = {
    vol.Required("type"): WS_SAVE_SCENARIOS,
    vol.Required(CONF_SCENARIOS): [
        {
            vol.Required("id"): str,
            vol.Required("name"): str,
            vol.Required("script_entity_id"): str,
            vol.Optional("conditions", default=[]): [
                {
                    vol.Optional("parent_type", default=""): str,
                    vol.Optional("children_type", default=""): str,
                    vol.Optional("children_direct_type", default=""): str,
                }
            ],
            vol.Optional("parent_type", default=""): str,
            vol.Optional("children_type", default=""): str,
            vol.Optional("children_direct_type", default=""): str,
        }
    ],
}


def async_register_scenarios_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_scenarios)
    websocket_api.async_register_command(hass, _ws_save_scenarios)


def _ws_error(
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    code: str,
    message: str,
) -> None:
    connection.send_error(msg["id"], code, message)


def _build_scenarios_response(entry) -> dict[str, Any]:
    return {
        "scenarios": list(entry.options.get(CONF_SCENARIOS, [])),
    }


def _build_scenarios_options(
    msg: dict[str, Any],
    previous: dict[str, Any],
) -> dict[str, Any]:
    options = dict(previous)
    options[CONF_SCENARIOS] = [
        _normalize_scenario(item)
        for item in msg[CONF_SCENARIOS]
    ]
    return options


@websocket_api.websocket_command({vol.Required("type"): WS_GET_SCENARIOS})
@websocket_api.async_response
async def _ws_get_scenarios(
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

    connection.send_result(msg["id"], _build_scenarios_response(entry))


@websocket_api.websocket_command(SAVE_SCENARIOS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_scenarios(
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
        options = _build_scenarios_options(msg, previous_options)
    except Exception as err:
        LOGGER.exception("Failed to build scenarios options")
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
            "Scenarios saved but reload failed",
        )
        return

    connection.send_result(msg["id"], {"saved": True})