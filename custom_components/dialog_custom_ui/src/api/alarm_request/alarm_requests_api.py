"""Websocket API for alarm request storage operations."""

from __future__ import annotations

import uuid
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ....normalize import _normalize_value
from ....storage.alarm_requests_storage import (
    async_load_alarm_requests,
    async_save_alarm_requests,
)
from .schemas import (
    DELETE_ALARM_REQUEST_SCHEMA,
    GET_ALARM_REQUEST_SCHEMA,
    GET_ALARM_REQUESTS_SHORT_SCHEMA,
    SAVE_ALARM_REQUEST_SCHEMA,
    UPDATE_ALARM_REQUEST_SCHEMA,
)


def async_register_alarm_requests_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_alarm_requests_short)
    websocket_api.async_register_command(hass, _ws_get_alarm_request)
    websocket_api.async_register_command(hass, _ws_save_alarm_request)
    websocket_api.async_register_command(hass, _ws_update_alarm_request)
    websocket_api.async_register_command(hass, _ws_delete_alarm_request)


def _ws_error(connection, msg, code: str, message: str) -> None:
    connection.send_error(msg["id"], code, message)


def _build_short(alarm_requests: list[dict[str, Any]], page: int, page_size: int):
    total = len(alarm_requests)
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
            for item in alarm_requests[start:end]
        ],
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages,
        "total_items": total,
    }


def _find(alarm_requests, uuid_value: str):
    uuid_value = _normalize_value(uuid_value)

    for item in alarm_requests:
        if _normalize_value(item.get("uuid")) == uuid_value:
            return item

    return None


def _normalize_alarm_request_payload(data: dict[str, Any], uuid_value: str | None = None) -> dict[str, Any]:
    return {
        "uuid": _normalize_value(uuid_value or data.get("uuid")),
        "name": _normalize_value(data.get("name")),
        "action_type": _normalize_value(data.get("action_type")),
        "device_id": _normalize_value(data.get("device_id")),
        "status": _normalize_value(data.get("status")),
        "time": _normalize_value(data.get("time")),
    }


async def _save(hass, alarm_requests, connection, msg) -> bool:
    try:
        await async_save_alarm_requests(hass, alarm_requests)
    except Exception:
        _ws_error(connection, msg, "save_failed", "Failed to save alarm requests")
        return False

    return True


# =========================
# GET LIST
# =========================

@websocket_api.websocket_command(GET_ALARM_REQUESTS_SHORT_SCHEMA)
@websocket_api.async_response
async def _ws_get_alarm_requests_short(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    page = msg.get("page", 1)
    page_size = msg.get("page_size", 10)

    connection.send_result(
        msg["id"],
        _build_short(alarm_requests, page, page_size),
    )


# =========================
# GET SINGLE
# =========================

@websocket_api.websocket_command(GET_ALARM_REQUEST_SCHEMA)
@websocket_api.async_response
async def _ws_get_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    item = _find(alarm_requests, msg["uuid"])

    if item is None:
        _ws_error(connection, msg, "not_found", "Alarm request not found")
        return

    connection.send_result(msg["id"], {"data": item})


# =========================
# CREATE
# =========================

@websocket_api.websocket_command(SAVE_ALARM_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    alarm_request = _normalize_alarm_request_payload(msg["data"], str(uuid.uuid4()))

    alarm_requests.append(alarm_request)

    if not await _save(hass, alarm_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"saved": True, "data": alarm_request},
    )


# =========================
# UPDATE
# =========================

@websocket_api.websocket_command(UPDATE_ALARM_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_update_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    existing = _find(alarm_requests, msg["uuid"])

    if existing is None:
        _ws_error(connection, msg, "not_found", "Alarm request not found")
        return

    merged = {**existing, **msg["data"]}
    updated = _normalize_alarm_request_payload(merged, msg["uuid"])
    uuid_norm = _normalize_value(msg["uuid"])

    alarm_requests = [
        updated if _normalize_value(i.get("uuid")) == uuid_norm else i
        for i in alarm_requests
    ]

    if not await _save(hass, alarm_requests, connection, msg):
        return

    connection.send_result(
        msg["id"],
        {"updated": True, "data": updated},
    )


# =========================
# DELETE
# =========================

@websocket_api.websocket_command(DELETE_ALARM_REQUEST_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_delete_alarm_request(hass, connection, msg):
    alarm_requests = await async_load_alarm_requests(hass)

    uuid_value = _normalize_value(msg["uuid"])

    if not _find(alarm_requests, uuid_value):
        _ws_error(connection, msg, "not_found", "Alarm request not found")
        return

    alarm_requests = [
        i for i in alarm_requests
        if _normalize_value(i.get("uuid")) != uuid_value
    ]

    if not await _save(hass, alarm_requests, connection, msg):
        return

    connection.send_result(msg["id"], {"deleted": True})
