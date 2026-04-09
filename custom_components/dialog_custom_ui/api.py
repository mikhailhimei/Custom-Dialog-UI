"""Websocket API for Dialog Custom UI."""

from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import (
    ATTR_CHILDREN_TYPE,
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCENARIO_ID,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_SCENARIOS,
    CONF_TIMEOUT,
    CONF_TIMER_ALARM_TOKEN,
    DEFAULT_BASE_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    WS_GET_CONFIG,
    WS_GET_LOGS,
    WS_SAVE_CONFIG,
)


def async_register_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_config)
    websocket_api.async_register_command(hass, _ws_save_config)
    websocket_api.async_register_command(hass, _ws_get_logs)


@websocket_api.websocket_command({vol.Required("type"): WS_GET_CONFIG})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_get_config(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    connection.send_result(
        msg["id"],
        {
            "base_url": entry.options.get(CONF_BASE_URL, DEFAULT_BASE_URL),
            "client_id": entry.options.get(CONF_CLIENT_ID, ""),
            "timer_alarm_token": entry.options.get(CONF_TIMER_ALARM_TOKEN, ""),
            "timeout": int(entry.options.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
            "scenarios": list(entry.options.get(CONF_SCENARIOS, [])),
        },
    )


@websocket_api.websocket_command({vol.Required("type"): WS_GET_LOGS})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_get_logs(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    logs = list(hass.data.get(DOMAIN, {}).get("logs", []))
    connection.send_result(msg["id"], {"logs": logs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SAVE_CONFIG,
        vol.Required(CONF_BASE_URL): str,
        vol.Required(CONF_CLIENT_ID): str,
        vol.Optional(CONF_TIMER_ALARM_TOKEN, default=""): str,
        vol.Required(CONF_TIMEOUT): vol.Any(int, float),
        vol.Required(CONF_SCENARIOS): [
            {
                vol.Required(ATTR_SCENARIO_ID): str,
                vol.Required("name"): str,
                vol.Optional("conditions"): [
                    {
                        vol.Optional(ATTR_PARENT_TYPE, default=""): str,
                        vol.Optional(ATTR_CHILDREN_TYPE, default=""): str,
                        vol.Optional(ATTR_CHILDREN_DIRECT_TYPE, default=""): str,
                    }
                ],
                vol.Optional(ATTR_CHILDREN_TYPE, default=""): str,
                vol.Optional(ATTR_CHILDREN_DIRECT_TYPE, default=""): str,
                vol.Optional(ATTR_PARENT_TYPE, default=""): str,
                vol.Required(ATTR_SCRIPT_ENTITY_ID): str,
            }
        ],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_config(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    scenarios = [_normalize_scenario(item) for item in msg[CONF_SCENARIOS]]
    options = {
        CONF_BASE_URL: msg[CONF_BASE_URL].strip(),
        CONF_CLIENT_ID: msg[CONF_CLIENT_ID].strip(),
        CONF_TIMER_ALARM_TOKEN: msg[CONF_TIMER_ALARM_TOKEN].strip(),
        CONF_TIMEOUT: max(1, int(msg[CONF_TIMEOUT])),
        CONF_SCENARIOS: scenarios,
    }

    hass.config_entries.async_update_entry(entry, options=options)
    coordinator = hass.data[DOMAIN][entry.entry_id]
    await coordinator.async_reload()
    connection.send_result(msg["id"], {"saved": True})


def _normalize_scenario(item: dict[str, Any]) -> dict[str, Any]:
    scenario = {
        ATTR_SCENARIO_ID: item[ATTR_SCENARIO_ID].strip(),
        "name": item["name"].strip(),
        ATTR_SCRIPT_ENTITY_ID: item[ATTR_SCRIPT_ENTITY_ID].strip(),
    }

    conditions = [
        normalized
        for condition in item.get("conditions", [])
        if isinstance(condition, dict)
        if (normalized := _normalize_condition(condition))
    ]

    if not conditions:
        conditions = _normalize_legacy_conditions(item)

    if conditions:
        scenario["conditions"] = conditions

    return scenario


def _normalize_condition(item: dict[str, Any]) -> dict[str, str] | None:
    parent_type = item.get(ATTR_PARENT_TYPE, "").strip()
    children_type = item.get(ATTR_CHILDREN_TYPE, item.get("type", "")).strip()
    children_direct_type = item.get(ATTR_CHILDREN_DIRECT_TYPE, "").strip()

    if not parent_type and not children_type and not children_direct_type:
        return None

    condition = {
        ATTR_PARENT_TYPE: parent_type,
    }
    if children_type:
        condition[ATTR_CHILDREN_TYPE] = children_type
    if children_direct_type:
        condition[ATTR_CHILDREN_DIRECT_TYPE] = children_direct_type

    return condition


def _normalize_legacy_conditions(item: dict[str, Any]) -> list[dict[str, str]]:
    parent_values = [part.strip() for part in item.get(ATTR_PARENT_TYPE, "").split(";")]
    children_values = [
        part.strip()
        for part in item.get(ATTR_CHILDREN_TYPE, item.get("type", "")).split(";")
    ]
    direct_values = [
        part.strip()
        for part in item.get(ATTR_CHILDREN_DIRECT_TYPE, "").split(";")
    ]
    max_length = max(len(parent_values), len(children_values), len(direct_values), 1)
    conditions: list[dict[str, str]] = []

    for index in range(max_length):
        condition = _normalize_condition(
            {
                ATTR_PARENT_TYPE: parent_values[index] if index < len(parent_values) else "",
                ATTR_CHILDREN_TYPE: (
                    children_values[index] if index < len(children_values) else ""
                ),
                ATTR_CHILDREN_DIRECT_TYPE: (
                    direct_values[index] if index < len(direct_values) else ""
                ),
            }
        )
        if condition:
            conditions.append(condition)

    return conditions


def _get_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None
