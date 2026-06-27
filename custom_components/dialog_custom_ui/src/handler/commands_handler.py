import copy
import logging
import requests
from ..service.dialog_matching import attach_direct_controls
from ..service.cms_service import *
_LOGGER = logging.getLogger(__name__)

EMPTY_COMMANDS_BODY = {
    "componentDialog": [],
    "subComponentDialog": [],
    "subDirectControl": [],
}


def _empty_commands_body():
    return copy.deepcopy(EMPTY_COMMANDS_BODY)

# ---------------------------
# Собрать все страницы
# ---------------------------
def fetch_all(endpoint: str):
    page_size = 100

    first = get_list(endpoint, 1, page_size)
    
    all_items = first.get("data", [])

    pagination = first.get("meta", {}).get("pagination", {})
    page_count = pagination.get("pageCount", 1)

    for page in range(2, page_count + 1):
        more = get_list(endpoint, page, page_size)
    
        all_items.extend(more.get("data", []))

    return all_items


# ---------------------------
# Приведение объекта к формату
# ---------------------------
def normalize(item, attributes):
    attr = item.get(attributes) or {}
    
    if(not item.get('uuid') and not item.get('status')):
        return None
    
    raw_voice = attr.get("voiceCommands")
    if isinstance(raw_voice, list):
        voice_commands = raw_voice
    elif isinstance(raw_voice, str):
        voice_commands = raw_voice.split(';')
    else:
        voice_commands = []

    raw_voice_responses = attr.get("voiceResponseArray") or []
    voice_response_array = []
    for voice_item in raw_voice_responses:
        if not isinstance(voice_item, dict):
            continue

        normalized_voice_item = dict(voice_item)
        normalized_voice_item.pop("endStatus", None)
        voice_response_array.append(normalized_voice_item)

    return {
        "id": item.get("_id"),
        "endStatus": attr.get("endStatus"),
        "actionType": attr.get("actionType"),
        "voiceCommands": voice_commands,
        "nextDirectControl": attr.get('nextDirectControl'),
        "answerType": attr.get("answerType"),
        "forwardText": attr.get("forwardText"),
        "nextAction": attr.get("nextAction"),
        "voiceResponseArray": voice_response_array,
        "uuid": item.get("uuid")
    }

def normalizeDirectControl(item, attributes):
    attr = item.get(attributes) or {}
    
    if(not item.get('uuid') and not item.get('status')):
        return None

    subDirectControl = []
    type_data = attr.get("valueType")

    subDirectControl = attr.get('subDirectControl')
    
    if(not attr.get("manual")):

        # Mongo variant: relation may come as UUID string.
        if isinstance(subDirectControl, str) and subDirectControl.strip():
            subDirectControl = get_one_by_uuid("sub-direct-controls-sample", subDirectControl.strip())

        if isinstance(subDirectControl, dict):
            if type_data is None:
                type_data = subDirectControl.get("valueType")
            subDirectControl = subDirectControl.get('subDirectControl')
        elif isinstance(subDirectControl, list) and len(subDirectControl) != 0:
            first_item = subDirectControl[0] or {}
            if isinstance(first_item, str) and first_item.strip():
                first_item = get_one_by_uuid("sub-direct-controls-sample", first_item.strip()) or {}
            if type_data is None:
                type_data = first_item.get("valueType")
            subDirectControl = first_item.get('subDirectControl')
    
    return {
        "_id": item.get("_id"),
        "mappingType": attr.get("mappingType"),
        "valueType": type_data if type_data is not None else item.get("valueType"),
        "voiceCommands": attr.get('voiceCommands'),
        "uuid": item.get("uuid"),
        "subDirectControl": subDirectControl
    }

# ---------------------------
# Главная функция
# ---------------------------
def get_commands():
    def fetch_and_normalize(collection, schema_name):
        raw = fetch_all(collection)
        if collection == "sub-direct-controls":
            return [
                normalized
                for item in raw
                if (normalized := normalizeDirectControl(item, schema_name))
            ]
        else:
            return [
                normalized 
                for item in raw
                if (normalized := normalize(item, schema_name))
            ]

    try:
        componentDialog = fetch_and_normalize("commands", "componentDialog")
        subComponentDialog = fetch_and_normalize("sub-commands", "subComponentDialog")
        subDirectControl = fetch_and_normalize("sub-direct-controls", "directControl")

        sub_direct_by_uuid = {item.get("uuid"): item for item in subDirectControl if item.get("uuid")}

        attach_direct_controls(componentDialog, sub_direct_by_uuid)
        attach_direct_controls(subComponentDialog, sub_direct_by_uuid)

        data = {
            "componentDialog": componentDialog,
            "subComponentDialog": subComponentDialog,
            "subDirectControl": subDirectControl,
        }

        return {"source": "ha_storage", "body": data}

    except Exception as e:
        _LOGGER.exception("Failed to load dialog commands")
        return {"source": "error", "body": _empty_commands_body(), "detail": str(e)}

def get_dialog_settings():
    allowed_keys = {"actionType", "title", "message", "endStatus", "system", "LLM"}

    def normalize_dialog_setting(item):
        normalized = {}

        for key in allowed_keys:
            value = item.get(key)
            if value is None:
                continue
            if isinstance(value, str) and value == "":
                continue
            normalized[key] = value

        return normalized

    def fetch_all_dialog_settings():
        page = 1
        page_size = 100
        all_items = []

        while True:
            response = get_list("settings-dialog", page, page_size)
            items = response.get("data", [])

            if not items:
                break

            all_items.extend(items)
            page += 1

        return all_items

    try:
        dialog_settings = [
            normalized
            for item in fetch_all_dialog_settings()
            if (normalized := normalize_dialog_setting(item))
        ]

        return {
            "source": "ha_storage",
            "body": {
                "dialogSettings": dialog_settings,
            }
        }
    except Exception as e:
        _LOGGER.exception("Failed to load dialog settings")
        return {"source": "error", "body": {"dialogSettings": []}, "detail": str(e)}
