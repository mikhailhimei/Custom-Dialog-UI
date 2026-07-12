"""Shared search helpers for assistant commands websocket APIs."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant

from ....normalize import _normalize_value
from ....storage.assistant_commands_storage import async_load_assistant_commands
from ....storage.assistant_sub_commands_storage import async_load_assistant_sub_commands


def _get_action_type(item: dict[str, Any]) -> str:
    component = item.get("componentDialog")
    if not isinstance(component, dict):
        component = item.get("subComponentDialog")
    if not isinstance(component, dict):
        return _normalize_value(item.get("actionType"))
    return _normalize_value(component.get("actionType"))


def _matches_query(item: dict[str, Any], query: str) -> bool:
    return (
        query in _normalize_value(item.get("title")).lower()
        or query in _normalize_value(item.get("uuid")).lower()
    )


async def async_search_assistant_commands(
    hass: HomeAssistant,
    query_value: Any,
    type_value: Any = None,
) -> list[dict[str, str]]:
    """Search assistant commands and sub commands by title or uuid."""
    query = _normalize_value(query_value).lower()

    if type_value in "search_assistant_commands":
        items = await async_load_assistant_commands(hass)
    elif type_value in "search_assistant_sub_commands":
        items = await async_load_assistant_sub_commands(hass)
    else:
        items = []

    return [
        {
            "title": _normalize_value(item.get("title")),
            "uuid": _normalize_value(item.get("uuid")),
            "actionType": _get_action_type(item),
        }
        for item in items
        if _matches_query(item, query)
    ]
