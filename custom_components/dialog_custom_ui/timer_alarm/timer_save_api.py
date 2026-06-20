"""Websocket API for timer create/delete save operations."""

from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ..const import CONF_CLIENT_ID, WS_CREATE_TIMER, WS_DELETE_TIMER
from ..normalize import _normalize_value
from ..utils import _get_entry, _get_manager
from .timer_alarm_utils import _duration_to_seconds, _safe_int, _seconds_to_duration

CREATE_TIMER_SCHEMA = {
    vol.Required("type"): WS_CREATE_TIMER,
    vol.Required("data"): {
        vol.Required("device_id"): str,
        vol.Required("time"): vol.Any(str, dict),
        vol.Optional("client_id", default=""): str,
    },
}

DELETE_TIMER_SCHEMA = {
    vol.Required("type"): WS_DELETE_TIMER,
    vol.Required("data"): {
        vol.Optional("timer_id", default=""): str,
        vol.Optional("device_id", default=""): str,
        vol.Optional("client_id", default=""): str,
        vol.Optional("count", default=None): vol.Any(None, vol.Coerce(int)),
    },
}


def async_register_timer_save_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_create_timer)
    websocket_api.async_register_command(hass, _ws_delete_timer)


@websocket_api.websocket_command(CREATE_TIMER_SCHEMA)
@websocket_api.async_response
async def _ws_create_timer(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    manager = _get_manager(hass, entry)
    if manager is None:
        connection.send_error(msg["id"], "not_ready", "Timer/alarm manager not found")
        return

    data = msg["data"]
    timer = _coerce_timer_request_time(data.get("time"))
    if timer is None:
        connection.send_error(
            msg["id"],
            "invalid_time",
            "Timer time must be HH:MM:SS, MM:SS, minutes, or {hour,minut,second}",
        )
        return

    client_id = _normalize_value(data.get("client_id") or entry.options.get(CONF_CLIENT_ID))
    device_id = _normalize_value(data.get("device_id"))
    before_ids = {_normalize_value(item.get("id")) for item in manager.get_timer_items()}
    commands = await manager.timer_manager.async_handle_timer_start(
        timer,
        client_id,
        device_id,
        False,
    )
    after_items = manager.get_timer_items()
    created = next(
        (item for item in after_items if _normalize_value(item.get("id")) not in before_ids),
        None,
    )

    if commands and _normalize_value(commands.get("actionType")) == "error":
        connection.send_error(
            msg["id"],
            "create_failed",
            _normalize_value(commands.get("message")) or "Failed to create timer",
        )
        return

    connection.send_result(msg["id"], {"created": True, "data": created})


@websocket_api.websocket_command(DELETE_TIMER_SCHEMA)
@websocket_api.async_response
async def _ws_delete_timer(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    manager = _get_manager(hass, entry)
    if manager is None:
        connection.send_error(msg["id"], "not_ready", "Timer/alarm manager not found")
        return

    data = msg["data"]
    timer_id = _normalize_value(data.get("timer_id"))
    client_id = _normalize_value(data.get("client_id") or entry.options.get(CONF_CLIENT_ID))
    device_id = _normalize_value(data.get("device_id"))

    if timer_id:
        timer_entry = manager.timer_manager._timers.pop(timer_id, None)
        if timer_entry is None:
            connection.send_error(msg["id"], "not_found", "Timer not found")
            return
        manager.timer_manager._cancel_timer_task(timer_entry)
        manager._mark_updated()
        connection.send_result(msg["id"], {"deleted": True, "timer_id": timer_id})
        return

    before_ids = {_normalize_value(item.get("id")) for item in manager.get_timer_items()}
    await manager.timer_manager.async_handle_timer_stop(
        client_id,
        device_id,
        data.get("count"),
        False,
    )
    after_ids = {_normalize_value(item.get("id")) for item in manager.get_timer_items()}
    deleted_ids = sorted(before_ids - after_ids)

    if not deleted_ids:
        connection.send_error(msg["id"], "not_found", "Timer not found")
        return

    connection.send_result(msg["id"], {"deleted": True, "timer_ids": deleted_ids})


def _coerce_timer_request_time(value: Any) -> dict[str, int] | None:
    if isinstance(value, dict):
        total_seconds = (
            _safe_int(value.get("hour")) * 3600
            + _safe_int(value.get("minut") or value.get("minute")) * 60
            + _safe_int(value.get("second"))
        )
    else:
        total_seconds = _duration_to_seconds(_normalize_value(value))
    if total_seconds <= 0:
        return None
    duration = _seconds_to_duration(total_seconds)
    hour, minute, second = (int(part) for part in duration.split(":"))
    return {"hour": hour, "minut": minute, "second": second}
