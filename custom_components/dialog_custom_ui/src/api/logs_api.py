"""Websocket API for logs."""

from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from ...const import DOMAIN, WS_GET_LOGS


def async_register_logs_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_logs)


@websocket_api.websocket_command({vol.Required("type"): WS_GET_LOGS})
@websocket_api.async_response
async def _ws_get_logs(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    logs = list(hass.data.get(DOMAIN, {}).get("logs", []))
    connection.send_result(msg["id"], {"logs": logs})
