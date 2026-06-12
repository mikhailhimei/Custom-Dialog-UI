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
    WS_DELETE_SCENARIO,
    WS_GET_SCENARIO,
    WS_GET_SCENARIOS,
    WS_GET_SCENARIOS_SHORT,
    WS_SAVE_SCENARIO,
    WS_SAVE_SCENARIOS,
    WS_UPDATE_SCENARIO,
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

SAVE_SCENARIO_SCHEMA = {
    vol.Required("type"): WS_SAVE_SCENARIO,
    vol.Required("scenario"): {
        vol.Required("scenario_id"): str,
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
    },
}

UPDATE_SCENARIO_SCHEMA = {
    vol.Required("type"): WS_UPDATE_SCENARIO,
    vol.Required("scenario_id"): str,
    vol.Required("scenario"): dict,
}

GET_SCENARIOS_SCHEMA = {
    vol.Required("type"): WS_GET_SCENARIOS,
    vol.Optional("page"): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size"): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}

GET_SCENARIOS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_SCENARIOS_SHORT,
    vol.Optional("page"): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size"): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}

GET_SCENARIO_SCHEMA = {
    vol.Required("type"): WS_GET_SCENARIO,
    vol.Required("scenario_id"): str,
}

DELETE_SCENARIO_SCHEMA = {
    vol.Required("type"): WS_DELETE_SCENARIO,
    vol.Required("scenario_id"): str,
}


def async_register_scenarios_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_scenarios_script)
    websocket_api.async_register_command(hass, _ws_get_scenarios_short)
    websocket_api.async_register_command(hass, _ws_get_scenario)
    websocket_api.async_register_command(hass, _ws_save_scenarios_script)
    websocket_api.async_register_command(hass, _ws_save_scenario)
    websocket_api.async_register_command(hass, _ws_update_scenario)
    websocket_api.async_register_command(hass, _ws_delete_scenario)


def _ws_error(
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    code: str,
    message: str,
) -> None:
    connection.send_error(msg["id"], code, message)


def _build_scenarios_response(
    scenarios: list[dict[str, Any]],
    page: int,
    page_size: int,
) -> dict[str, Any]:
    total_items = len(scenarios)
    total_pages = max(1, (total_items + page_size - 1) // page_size)
    start = (page - 1) * page_size
    end = start + page_size
    return {
        "scenarios": scenarios[start:end],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total_items,
    }


def _build_scenarios_short_response(
    scenarios: list[dict[str, Any]],
    page: int,
    page_size: int,
) -> dict[str, Any]:
    total_items = len(scenarios)
    total_pages = max(1, (total_items + page_size - 1) // page_size)
    start = (page - 1) * page_size
    end = start + page_size
    return {
        "scenarios": [
            {
                "id": scenario["scenario_id"],
                "title": scenario.get("name", ""),
            }
            for scenario in scenarios[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total_items,
    }


def _get_scenarios(entry: Any) -> list[dict[str, Any]]:
    return list(entry.options.get(CONF_SCENARIOS, []))


def _find_scenario_by_id(
    scenarios: list[dict[str, Any]],
    scenario_id: str,
) -> dict[str, Any] | None:
    scenario_id = _clean_string(scenario_id)
    for scenario in scenarios:
        if _clean_string(scenario.get("scenario_id")) == scenario_id:
            return scenario
    return None


def _normalize_scenario_payload(
    msg: dict[str, Any],
    existing: dict[str, Any] | None = None,
    scenario_id: str | None = None,
) -> dict[str, Any]:
    scenario_payload = msg.get("scenario")
    if not isinstance(scenario_payload, dict):
        raise ValueError("Scenario payload must be an object")

    if existing is not None:
        if "scenario_id" in scenario_payload and _clean_string(scenario_payload["scenario_id"]) != _clean_string(scenario_id or ""):
            raise ValueError("Scenario id mismatch")
        raw_scenario = dict(existing)
        raw_scenario.update(scenario_payload)
        if scenario_id:
            raw_scenario["scenario_id"] = _clean_string(scenario_id)
    else:
        raw_scenario = dict(scenario_payload)
        if scenario_id:
            raw_scenario["scenario_id"] = _clean_string(scenario_id)

    return _normalize_scenario(raw_scenario)


async def _save_scenarios_options(
    hass: HomeAssistant,
    entry: Any,
    scenarios: list[dict[str, Any]],
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> bool:
    previous_options = dict(entry.options)
    options = dict(previous_options)
    options[CONF_SCENARIOS] = scenarios

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
        return False

    return True


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


@websocket_api.websocket_command(GET_SCENARIOS_SCHEMA)
@websocket_api.async_response
async def _ws_get_scenarios_script(
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

    scenarios = list(entry.options.get(CONF_SCENARIOS, []))
    if "page" not in msg:
        page = 1
        page_size = len(scenarios)
    else:
        page = msg["page"]
        page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        _build_scenarios_response(scenarios, page, page_size),
    )


@websocket_api.websocket_command(GET_SCENARIOS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_scenarios_short(
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

    scenarios = _get_scenarios(entry)
    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        _build_scenarios_short_response(scenarios, page, page_size),
    )


@websocket_api.websocket_command(GET_SCENARIO_SCHEMA)
@websocket_api.async_response
async def _ws_get_scenario(
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

    scenario = _find_scenario_by_id(_get_scenarios(entry), msg["scenario_id"])
    if scenario is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Scenario not found",
        )
        return

    connection.send_result(msg["id"], {"scenario": scenario})


@websocket_api.websocket_command(SAVE_SCENARIO_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_scenario(
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

    scenarios = _get_scenarios(entry)
    new_scenario = _normalize_scenario_payload(msg)

    if _find_scenario_by_id(scenarios, new_scenario["scenario_id"]) is not None:
        _ws_error(
            connection,
            msg,
            "already_exists",
            "Scenario with this id already exists",
        )
        return

    scenarios.append(new_scenario)

    if not await _save_scenarios_options(hass, entry, scenarios, connection, msg):
        return

    connection.send_result(msg["id"], {"saved": True, "scenario": new_scenario})


@websocket_api.websocket_command(UPDATE_SCENARIO_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_update_scenario(
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

    scenarios = _get_scenarios(entry)
    scenario_id = msg["scenario_id"]
    existing = _find_scenario_by_id(scenarios, scenario_id)

    if existing is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Scenario not found",
        )
        return

    updated_scenario = _normalize_scenario_payload(msg, existing, scenario_id)
    updated_list = [updated_scenario if _clean_string(item.get("scenario_id")) == _clean_string(scenario_id) else item for item in scenarios]

    if not await _save_scenarios_options(hass, entry, updated_list, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "scenario": updated_scenario})


@websocket_api.websocket_command(DELETE_SCENARIO_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_delete_scenario(
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

    scenarios = _get_scenarios(entry)
    scenario_id = msg["scenario_id"]
    target = _find_scenario_by_id(scenarios, scenario_id)

    if target is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Scenario not found",
        )
        return

    updated_list = [item for item in scenarios if _clean_string(item.get("scenario_id")) != _clean_string(scenario_id)]

    if not await _save_scenarios_options(hass, entry, updated_list, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})


@websocket_api.websocket_command(SAVE_SCENARIOS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_scenarios_script(
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