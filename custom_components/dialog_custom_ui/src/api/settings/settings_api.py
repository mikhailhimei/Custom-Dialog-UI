"""Websocket API for script_action-specific config operations."""
from __future__ import annotations

import uuid

from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant


from ....const import (
    DOMAIN
)
from ....storage.settings_storage import async_load_settings, async_save_settings
from .schemas import (
    GET_SETTINGS_SCHEMA,
    SAVE_SETTINGS_SCHEMA,
)
def async_register_settings_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_settings)
    websocket_api.async_register_command(hass, _ws_save_settings)
    

@websocket_api.websocket_command(GET_SETTINGS_SCHEMA)
@websocket_api.async_response
async def _ws_get_settings(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    data = await async_load_settings(hass)

    connection.send_result(
        msg["id"],
        data,
    )


@websocket_api.websocket_command(SAVE_SETTINGS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_settings(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:

    current_settings = await async_load_settings(hass)
    new_settings = msg["data"]

    updated_settings = current_settings.copy()

    # обновляем только пришедшие поля
    for key, value in new_settings.items():

        # если вложенный dict -> обновляем только его поля
        if (
            isinstance(value, dict)
            and isinstance(updated_settings.get(key), dict)
        ):
            updated_settings[key].update(value)

        else:
            updated_settings[key] = value

    await async_save_settings(
        hass,
        updated_settings,
    )

    coordinator = hass.data[DOMAIN]["coordinator"]

    await coordinator.async_reload()

    connection.send_result(
        msg["id"],
        {
            "saved": True,
            "settings": updated_settings,
        },
    )