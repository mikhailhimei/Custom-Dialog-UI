"""Websocket API for script_action-specific config operations."""

from __future__ import annotations

import uuid
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....normalize import _merge_script_action_payload, _normalize_value
from ....const import DOMAIN
from ....storage.script_actions_storage import (
    async_load_script_actions,
    async_save_script_actions,
)
from .schemas import (
    GET_SCRIPT_ACTION_SCHEMA,
    GET_SCRIPT_ACTIONS_SHORT_SCHEMA,
    SAVE_SCRIPT_ACTION_SCHEMA,
    UPDATE_SCRIPT_ACTION_SCHEMA,
    DELETE_SCRIPT_ACTION_SCHEMA,
)


def async_register_script_actions_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_script_actions_short)
    websocket_api.async_register_command(hass, _ws_get_script_action)
    websocket_api.async_register_command(hass, _ws_save_script_action)
    websocket_api.async_register_command(hass, _ws_update_script_action)
    websocket_api.async_register_command(hass, _ws_delete_script_action)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(script_actions: list[dict[str, Any]], page: int, page_size: int):
    total = len(script_actions)
    total_pages = max(1, (total + page_size - 1) // page_size)

    start = (page - 1) * page_size
    end = start + page_size

    return {
        "script_actions": [
            {
                "uuid": item["uuid"],
                "title": item.get("name", ""),
            }
            for item in script_actions[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(script_actions, uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in script_actions:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


async def _save(hass, script_actions, connection, msg) -> bool:
    try:
        await async_save_script_actions(hass, script_actions)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save script actions")
        return False

    coordinator = hass.data[DOMAIN]

    try:
        await coordinator.async_reload()
    except Exception:
        _ws_error(
            connection,
            msg,
            "reload_failed",
            "Saved but reload failed",
        )
        return False

    return True


# =========================
# GET LIST
# =========================

@websocket_api.websocket_command(GET_SCRIPT_ACTIONS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_script_actions_short(hass, connection, msg):
    script_actions = await async_load_script_actions(hass)

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        _build_short(script_actions, page, page_size),
    )


# =========================
# GET SINGLE
# =========================

@websocket_api.websocket_command(GET_SCRIPT_ACTION_SCHEMA)
@websocket_api.async_response
async def _ws_get_script_action(hass, connection, msg):
    script_actions = await async_load_script_actions(hass)

    item = _find(script_actions, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Script action not found")
        return

    connection.send_result(msg["id"], {"script_action": item})


# =========================
# CREATE
# =========================

@websocket_api.websocket_command(SAVE_SCRIPT_ACTION_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_script_action(hass, connection, msg):
    script_actions = await async_load_script_actions(hass)

    script_action = msg["script_action"]
    script_action["uuid"] = str(uuid.uuid4())

    script_actions.append(script_action)

    if not await _save(hass, script_actions, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"saved": True, "script_action": script_action},
    )


# =========================
# UPDATE
# =========================

@websocket_api.websocket_command(UPDATE_SCRIPT_ACTION_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_update_script_action(hass, connection, msg):
    script_actions = await async_load_script_actions(hass)

    existing = _find(script_actions, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Script action not found")
        return

    updated = _merge_script_action_payload(msg, existing, msg["uuid"])
    uuid_norm = _normalize_value(msg["uuid"])

    script_actions = [
        updated if _normalize_value(i.get("uuid")) == uuid_norm else i
        for i in script_actions
    ]

    if not await _save(hass, script_actions, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"updated": True, "script_action": updated},
    )


# =========================
# DELETE
# =========================

@websocket_api.websocket_command(DELETE_SCRIPT_ACTION_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_delete_script_action(hass, connection, msg):
    script_actions = await async_load_script_actions(hass)

    uuid_value = _normalize_value(msg["uuid"])

    if not _find(script_actions, uuid_value):
        _ws_error(connection, msg, "not_found", "Script action not found")
        return

    script_actions = [
        i for i in script_actions
        if _normalize_value(i.get("uuid")) != uuid_value
    ]

    if not await _save(hass, script_actions, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})