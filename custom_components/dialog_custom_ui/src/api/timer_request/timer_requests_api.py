"""Websocket API for timer request storage operations."""

from __future__ import annotations

import uuid
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....normalize import _normalize_value
from ....storage.timer_requests_storage import (
    async_load_timer_requests,
    async_save_timer_requests,
)
from .schemas import (
    DELETE_TIMER_REQUEST_SCHEMA,
    GET_TIMER_REQUEST_SCHEMA,
    GET_TIMER_REQUESTS_SCHEMA,
    GET_TIMER_REQUESTS_SHORT_SCHEMA,
    SAVE_TIMER_REQUEST_SCHEMA,
    UPDATE_TIMER_REQUEST_SCHEMA,
)


def async_register_timer_requests_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_timer_requests)
    websocket_api.async_register_command(hass, _ws_get_timer_requests_short)
    websocket_api.async_register_command(hass, _ws_get_timer_request)
    websocket_api.async_register_command(hass, _ws_save_timer_request)
    websocket_api.async_register_command(hass, _ws_update_timer_request)
    websocket_api.async_register_command(hass, _ws_delete_timer_request)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(timer_requests: list[dict[str, Any]], page: int, page_size: int):
    total = len(timer_requests)
    total_pages = max(1, (total + page_size - 1) // page_size)

    start = (page - 1) * page_size
    end = start + page_size

    return {
        "data": [
            {
                "uuid": item["uuid"],
                "title": item.get("name", "") or item.get("action_type", ""),
                "action_type": item.get("action_type", ""),
            }
            for item in timer_requests[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(timer_requests, uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in timer_requests:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def _normalize_timer_request_payload(data: dict[str, Any], uuid_value: str | None = None) -> dict[str, Any]:
    action_type = _normalize_value(data.get("action_type"))
    timer_request = {
        "uuid": _normalize_value(uuid_value or data.get("uuid")),
        "name": _normalize_value(data.get("name")),
        "action_type": action_type,
        "device_id": _normalize_value(data.get("device_id")),
        "timer_time": data.get("timer_time") if action_type == "create_timer" else "",
    }

    if action_type == "delete_timer":
        timer_request["timer_time"] = ""

    return timer_request


async def _save(hass, timer_requests, connection, msg) -> bool:
    try:
        await async_save_timer_requests(hass, timer_requests)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save timer requests")
        return False

    return True


# =========================
# GET LIST
# =========================

@websocket_api.websocket_command(GET_TIMER_REQUESTS_SCHEMA)
@websocket_api.async_response
async def _ws_get_timer_requests(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    connection.send_result(msg["id"], {"data": timer_requests})


@websocket_api.websocket_command(GET_TIMER_REQUESTS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_timer_requests_short(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        _build_short(timer_requests, page, page_size),
    )


# =========================
# GET SINGLE
# =========================

@websocket_api.websocket_command(GET_TIMER_REQUEST_SCHEMA)
@websocket_api.async_response
async def _ws_get_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    item = _find(timer_requests, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Timer request not found")
        return

    connection.send_result(msg["id"], {"data": item})


# =========================
# CREATE
# =========================

@websocket_api.websocket_command(SAVE_TIMER_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    timer_request = _normalize_timer_request_payload(msg["data"], str(uuid.uuid4()))

    timer_requests.append(timer_request)

    if not await _save(hass, timer_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"saved": True, "data": timer_request},
    )


# =========================
# UPDATE
# =========================

@websocket_api.websocket_command(UPDATE_TIMER_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_update_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    existing = _find(timer_requests, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Timer request not found")
        return

    merged = {**existing, **msg["data"]}
    updated = _normalize_timer_request_payload(merged, msg["uuid"])
    uuid_norm = _normalize_value(msg["uuid"])

    timer_requests = [
        updated if _normalize_value(i.get("uuid")) == uuid_norm else i
        for i in timer_requests
    ]

    if not await _save(hass, timer_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"updated": True, "data": updated},
    )


# =========================
# DELETE
# =========================

@websocket_api.websocket_command(DELETE_TIMER_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_delete_timer_request(hass, connection, msg):
    timer_requests = await async_load_timer_requests(hass)

    uuid_value = _normalize_value(msg["uuid"])

    if not _find(timer_requests, uuid_value):
        _ws_error(connection, msg, "not_found", "Timer request not found")
        return

    timer_requests = [
        i for i in timer_requests
        if _normalize_value(i.get("uuid")) != uuid_value
    ]

    if not await _save(hass, timer_requests, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})
