"""Shared search helpers for assistant commands websocket APIs."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant

from ....normalize import _normalize_value
from ....storage.assistant_commands_storage import async_load_assistant_commands
from ....storage.assistant_sub_commands_storage import async_load_assistant_sub_commands


def _matches_query(item: dict[str, Any], query: str) -> bool:
    return (
        query in _normalize_value(item.get("title")).lower()
        or query in _normalize_value(item.get("uuid")).lower()
    )


async def async_search_assistant_commands(
    hass: HomeAssistant,
    query_value: Any,
) -> list[dict[str, str]]:
    """Search assistant commands and sub commands by title or uuid."""
    query = _normalize_value(query_value).lower()
    assistant_commands = await async_load_assistant_commands(hass)
    assistant_sub_commands = await async_load_assistant_sub_commands(hass)

    return [
        {
            "title": _normalize_value(item.get("title")),
            "uuid": _normalize_value(item.get("uuid")),
        }
        for item in [*assistant_commands, *assistant_sub_commands]
        if _matches_query(item, query)
    ]
