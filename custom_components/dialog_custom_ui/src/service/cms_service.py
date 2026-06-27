"""CMS-compatible accessors backed by Home Assistant storage."""

from __future__ import annotations

from copy import deepcopy
from typing import Any

from ...storage.assistant_commands_storage import async_load_assistant_commands
from ...storage.assistant_settings_storage import async_load_assistant_settings
from ...storage.assistant_sub_commands_storage import async_load_assistant_sub_commands
from ...storage.assistant_sub_direct_controls_sample_storage import (
    async_load_assistant_sub_direct_control_samples,
)
from ...storage.assistant_sub_direct_controls_storage import (
    async_load_assistant_sub_direct_controls,
)
from ...storage.cms_cache import read_cms_cache_collection, update_cms_cache_collection
from .dialog_runtime import get_current_hass

COLLECTION_MAP = {
    "commands": "commands",
    "sub-commands": "sub-commands",
    "sub-direct-controls": "sub-direct-controls",
    "sub-direct-controls-sample": "sub-direct-controls-sample",
    "settings-dialog": "settings-dialog",
}

_LOADERS = {
    "commands": async_load_assistant_commands,
    "sub-commands": async_load_assistant_sub_commands,
    "sub-direct-controls": async_load_assistant_sub_direct_controls,
    "sub-direct-controls-sample": async_load_assistant_sub_direct_control_samples,
    "settings-dialog": async_load_assistant_settings,
}


def get_collection_name(api_name: str) -> str:
    if api_name not in COLLECTION_MAP:
        raise Exception(f"Invalid collection: {api_name}")
    return COLLECTION_MAP[api_name]


async def async_load_cms_cache(hass) -> None:
    """Preload HA storage data for synchronous dialog runtime readers."""
    for collection_name, loader in _LOADERS.items():
        update_cms_cache_collection(hass, collection_name, await loader(hass))


def serialize(doc):
    return deepcopy(doc)


def normalize(data: dict):
    data = dict(data)
    for key in ["documentId", "createdAt", "updatedAt", "publishedAt"]:
        data.pop(key, None)
    return data


def _collection_items(collection_name: str) -> list[dict[str, Any]]:
    hass = get_current_hass()
    if hass is None:
        return []
    return read_cms_cache_collection(hass, get_collection_name(collection_name))


def _item_id(item: dict[str, Any]) -> str:
    return str(item.get("_id") or item.get("id") or item.get("uuid") or "")


def _matches_user(item: dict[str, Any], x_user: str | None) -> bool:
    return not x_user or not x_user.strip() or item.get("account") == x_user.strip()


def create(collection_name: str, data: list):
    raise NotImplementedError("CMS create is not available; use Home Assistant websocket storage APIs")


def get_list(collection_name: str, page: int, page_size: int, x_user: str = None):
    if page < 1:
        page = 1
    items = [item for item in _collection_items(collection_name) if _matches_user(item, x_user)]
    total = len(items)
    page_count = (total + page_size - 1) // page_size if page_size else 0
    start = (page - 1) * page_size
    end = start + page_size
    return {
        "data": serialize(items[start:end]),
        "meta": {"pagination": {"page": page, "pageSize": page_size, "pageCount": page_count, "totalPages": page_count, "total": total}},
    }


def _text_matches(item: dict[str, Any], text: str) -> bool:
    if not text:
        return True
    needle = text.casefold()
    return any(needle in str(item.get(key, "")).casefold() for key in ("title", "uuid", "uuidDialog"))


def search(collection_names: list, type_names: list = None, text: str = "", uuid="", x_user: str = None):
    result = []
    allowed_types = set(type_names or [])
    for api_collection_name in collection_names or []:
        for item in _collection_items(api_collection_name):
            if not _matches_user(item, x_user) or not _text_matches(item, text):
                continue
            action_type = item.get("actionType") or (item.get("componentDialog") or {}).get("actionType") or (item.get("directControl") or {}).get("mappingType")
            if allowed_types and action_type not in allowed_types:
                continue
            short = {key: item.get(key) for key in ("title", "uuid", "uuidDialog") if item.get(key) is not None}
            short["_id"] = _item_id(item)
            short["type_db_collection"] = get_collection_name(api_collection_name)
            mapping_type = (item.get("directControl") or {}).get("mappingType")
            if mapping_type:
                short["mappingType"] = mapping_type
            result.append(short)
    return serialize(result)


def get_one(collection_name: str, _id: str, x_user: str = None):
    for item in _collection_items(collection_name):
        if _item_id(item) == str(_id) and _matches_user(item, x_user):
            return serialize(item)
    return None


def get_one_by_uuid(collection_name: str, uuid: str):
    uuid = str(uuid or "")
    for item in _collection_items(collection_name):
        if str(item.get("uuid") or "") == uuid:
            return serialize(item)
    return None


def update(collection_name: str, _id: str, data: dict):
    raise NotImplementedError("CMS update is not available; use Home Assistant websocket storage APIs")


def delete(collection_name: str, _id: str):
    raise NotImplementedError("CMS delete is not available; use Home Assistant websocket storage APIs")
