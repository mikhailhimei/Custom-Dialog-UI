"""Websocket API for script_action-specific config operations."""

from __future__ import annotations

from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant


from ....normalize import _merge_script_action_payload, _normalize_value
from ....utils import _get_authorized_entry
from ....const import (
    DOMAIN
)
from .schemas import (
    GET_SCRIPT_ACTION_SCHEMA,
    GET_SCRIPT_ACTIONS_SHORT_SCHEMA,
    SAVE_SCRIPT_ACTION_SCHEMA,
    UPDATE_SCRIPT_ACTION_SCHEMA,
    DELETE_SCRIPT_ACTION_SCHEMA
)

def async_register_script_actions_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_script_actions_short)
    websocket_api.async_register_command(hass, _ws_get_script_action)
    websocket_api.async_register_command(hass, _ws_save_script_action)
    websocket_api.async_register_command(hass, _ws_update_script_action)
    websocket_api.async_register_command(hass, _ws_delete_script_action)


def _ws_error(
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    code: str,
    message: str,
) -> None:
    connection.send_error(msg["id"], code, message)


def _build_script_actions_short_response(
    script_actions: list[dict[str, Any]],
    page: int,
    page_size: int,
) -> dict[str, Any]:
    total_items = len(script_actions)
    total_pages = max(1, (total_items + page_size - 1) // page_size)
    start = (page - 1) * page_size
    end = start + page_size
    return {
        "script_actions": [
            {
                "id": script_action["uuid"],
                "title": script_action.get("name", ""),
            }
            for script_action in script_actions[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total_items,
    }


def _find_script_action_by_uuid(
    script_actions: list[dict[str, Any]],
    script_action_uuid: str,
) -> dict[str, Any] | None:
    script_action_uuid = _normalize_value(script_action_uuid)
    for script_action in script_actions:
        if _normalize_value(script_action.get("uuid")) == script_action_uuid:
            return script_action
    return None


async def _save_script_actions_options(
    hass: HomeAssistant,
    entry: Any,
    script_actions: list[dict[str, Any]],
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> bool:
    
    options = dict(entry.options)
    options["script_actions"] = script_actions

    hass.config_entries.async_update_entry(entry, options=options)

    coordinator = hass.data[DOMAIN][entry.entry_id]

    try:
        await coordinator.async_reload()
    except Exception:
        _ws_error(
            connection,
            msg,
            "reload_failed",
            "Script action saved but reload failed",
        )
        return False

    return True


@websocket_api.websocket_command(GET_SCRIPT_ACTIONS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_script_actions_short(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_authorized_entry(hass, connection, msg)

    if entry is None:
        return

    script_actions = list(entry.options.get("script_actions", []))

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["uuid"],
        _build_script_actions_short_response(script_actions, page, page_size),
    )


@websocket_api.websocket_command(GET_SCRIPT_ACTION_SCHEMA)
@websocket_api.async_response
async def _ws_get_script_action(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_authorized_entry(hass, connection, msg)

    if entry is None:
        return
    
    script_actions = list(entry.options.get("script_actions", []))

    script_action = _find_script_action_by_uuid(script_actions, msg["uuid"])
   
    if script_action is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Script action not found",
        )
        return

    connection.send_result(msg["id"], {"script_action": script_action})


@websocket_api.websocket_command(SAVE_SCRIPT_ACTION_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_script_action(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_authorized_entry(hass, connection, msg)

    if entry is None:
        return

    script_actions = list(entry.options.get("script_actions", []))

    new_script_action = _merge_script_action_payload(msg)

    if _find_script_action_by_uuid(script_actions, new_script_action["uuid"]) is not None:
        _ws_error(
            connection,
            msg,
            "already_exists",
            "Script action with this id already exists",
        )
        return

    script_actions.append(new_script_action)

    if not await _save_script_actions_options(hass, entry, script_actions, connection, msg):
        return

    connection.send_result(msg["id"], {"saved": True, "script_action": new_script_action})


@websocket_api.websocket_command(UPDATE_SCRIPT_ACTION_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_update_script_action(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_authorized_entry(hass, connection, msg)
    
    if entry is None:
        return
    
    script_actions = list(entry.options.get("script_actions", []))
    script_action_uuid = msg["uuid"]
    existing = _find_script_action_by_uuid(script_actions, script_action_uuid)

    if existing is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Script action not found",
        )
        return
    
    normalized_script_action_id = _normalize_value(script_action_uuid)

    updated_script_action = _merge_script_action_payload(msg, existing, script_action_uuid)

    updated_list = [
        updated_script_action 
        if _normalize_value(item.get("uuid")) == normalized_script_action_id 
        else item for item in script_actions
        ]

    if not await _save_script_actions_options(hass, entry, updated_list, connection, msg):
        return

    connection.send_result(msg["id"], {"updated": True, "script_action": updated_script_action})


@websocket_api.websocket_command(DELETE_SCRIPT_ACTION_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_delete_script_action(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_authorized_entry(hass, connection, msg)

    if entry is None:
        return

    script_actions = list(entry.options.get("script_actions", []))

    script_action_uuid = msg["uuid"]
    target = _find_script_action_by_uuid(script_actions, script_action_uuid)

    if target is None:
        _ws_error(
            connection,
            msg,
            "not_found",
            "Script action not found",
        )
        return
    
    normalized_script_action_id = _normalize_value(script_action_uuid)

    updated_list = [
        item 
        for item in script_actions 
        if _normalize_value(item.get("uuid")) 
        != normalized_script_action_id
    ]

    if not await _save_script_actions_options(hass, entry, updated_list, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})
