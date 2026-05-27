from typing import Any
from homeassistant.core import HomeAssistant
from .const import ATTR_CHILDREN_DIRECT_TYPE

def build_service(script_entity_id: str, payload: dict) -> dict:
    return {
        "entity_id": script_entity_id,
        "variables": {
            "dialog_payload": payload,
            "dialog_children_type": payload.get("children_type") or payload.get("actionType"),
            "dialog_direct_type": payload.get(ATTR_CHILDREN_DIRECT_TYPE),
            "dialog_parent_type": payload.get("parent_type"),
            "dialog_value": payload.get("data", {}).get("commands", ""),
            "dialog_client_id": payload.get("client_id") or payload.get("clientId"),
            "dialog_device_id": payload.get("device_id") or payload.get("deviceId"),
        },
    }


async def run_script(hass: HomeAssistant, entity_id: str, payload: dict) -> None:
    if not hass.states.get(entity_id):
        return

    service_data = build_service(entity_id, payload)

    await hass.services.async_call(
        "script",
        "turn_on",
        service_data,
        blocking=False,
    )