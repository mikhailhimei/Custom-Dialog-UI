import asyncio
import json
import re
import time
import logging

from homeassistant.core import callback
from ..config import CURRENT_NODE_KEY, ERR_BRANCH_KEY, MISS_COUNT_KEY
from ...const import DOMAIN, EVENT_ACTIVE_COMMAND, EVENT_DIALOG_MESSAGE
from ..handler.commands_mapper import generate_ai_response
from ..utils.dialog_response import build_dialog_response
from ..utils.text_normalize import fix_text

logger = logging.getLogger(__name__)
# Latest hass instance to avoid stale references
CURRENT_HASS = None


def set_current_hass(hass):
    """Store the most recent Home Assistant instance and return it."""
    global CURRENT_HASS
    if hass is not None:
        CURRENT_HASS = hass
    return CURRENT_HASS


def get_current_hass(hass=None):
    """Return a fresh Home Assistant instance, preferring the explicit value."""
    return set_current_hass(hass) if hass is not None else CURRENT_HASS


def _get_dialog_state_store(hass=None):
    hass = get_current_hass(hass)
    if hass is None:
        return {}
    return hass.data.setdefault(DOMAIN, {}).setdefault("dialog_state", {})


def _dialog_state_key(key: str, client_id: str, device_id: str) -> str:
    return f"{key}:{client_id}:{device_id}"


def get_dialog_state_value(key: str, client_id: str, device_id: str):
    store = _get_dialog_state_store()
    entry = store.get(_dialog_state_key(key, client_id, device_id))
    if not entry:
        return None
    expires = entry.get("expires")
    if expires is not None and time.time() > expires:
        store.pop(_dialog_state_key(key, client_id, device_id), None)
        return None
    return entry.get("value")


def set_dialog_state_value(key: str, client_id: str, device_id: str, value, ttl: int | None = None):
    store = _get_dialog_state_store()
    entry = {"value": value}
    if ttl is not None:
        entry["expires"] = time.time() + ttl
    store[_dialog_state_key(key, client_id, device_id)] = entry


def delete_dialog_state_value(key: str, client_id: str, device_id: str):
    store = _get_dialog_state_store()
    store.pop(_dialog_state_key(key, client_id, device_id), None)


RESPONSE_TEMPLATE_PATTERN = re.compile(r"\$\{([^{}]+)\}")
VOICE_RESPONSE_TYPE_ALIASES = {
    "default": "default",
    "default": "default",
    "direct": "default",
    "default_direct": "default",
    "default_next_step": "default_next_step",
    "miss": "miss",
    "error": "error",
    "next": "default",
}
VOICE_RESPONSE_TYPES = {"default", "default_next_step", "miss", "error"}
NEXT_ACTION_COMPONENT_ALIASES = {
    "default": {"children"},
    "default_next_step": {"children"},
    "error": {"children_error", "chidren_error"},
    "miss": set(),
}

EXTERNAL_SERVICE_ANSWER_TYPES = {"ha_storage", "ha", "external", "redis"}


def is_external_service_answer(answer_type):
    return str(answer_type or "").strip().lower() in EXTERNAL_SERVICE_ANSWER_TYPES



def _is_feature_enabled(value, default=False):
    if value is None:
        return default
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return value != 0
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"1", "true", "yes", "on", "enabled"}:
            return True
        if normalized in {"0", "false", "no", "off", "disabled", ""}:
            return False
    return bool(value)


def clear_dialog_state(client_id, device_id):
    delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    delete_dialog_state_value(MISS_COUNT_KEY, client_id, device_id)
    delete_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id)


def encode_current_node_state(uuid, parent_type=""):
    uuid = uuid or ""
    parent_type = parent_type or ""
    return f"{uuid}|{parent_type}"


def decode_current_node_state(value):
    raw_value = value.decode() if isinstance(value, bytes) else str(value or "")
    if not raw_value:
        return "", ""
    if "|" not in raw_value:
        return raw_value, ""
    uuid, parent_type = raw_value.split("|", 1)
    return uuid, parent_type


def set_current_node_state(client_id, uuid, device_id, error_branch=False, custom="", parent_type = ""):
    command = {
        "uuid": uuid,
        "parent_type": parent_type,
        "custom": custom or ""
    }
    set_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id, json.dumps(command), ttl=120)
    set_dialog_state_value(MISS_COUNT_KEY, client_id, device_id, 0, ttl=120)
    if error_branch:
        set_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id, "1", ttl=120)


def build_command_data(
    command_type,
    parent_type,
    data,
    client_id,
    device_id,
    children_direct_type,
    execution_command
):
    return {
        "children_type": command_type,
        "parent_type": parent_type,
        "data": data,
        "client_id": client_id,
        "device_id": device_id,
        "children_direct_type": children_direct_type,
        "execution_command": execution_command
    }

def store_command_data(hass, client_id, command_data):
    hass = get_current_hass(hass)
    if hass is None:
        return

    hass.bus.async_fire(
        EVENT_ACTIVE_COMMAND,
        {
            "client_id": client_id,
            "command_data": command_data,
        },
    )


def should_store_current_node(has_children, end_status, uuid=None):
    return (has_children and not end_status) or (uuid and not end_status)


async def dialogs_wait(hass, client_id, device_id, timeout=8):
    interval = 1

    for _ in range(timeout):
        # Refresh hass every second so the listener is attached to the latest bus.
        eff_hass = get_current_hass() or hass
        if eff_hass is None:
            await asyncio.sleep(interval)
            continue

        loop = getattr(eff_hass, "loop", None) or asyncio.get_running_loop()
        future = loop.create_future()

        @callback
        def listener(event):
            data = event.data

            logger.debug("dialogs_wait listener got event data: %s", data)

            if (
                data.get("client_id") == client_id
                and data.get("device_id") == device_id
            ):
                if not future.done():
                    future.set_result(data)

        unsub = eff_hass.bus.async_listen(
            EVENT_DIALOG_MESSAGE,
            listener,
        )

        try:
            return await asyncio.wait_for(future, timeout=interval)
        except asyncio.TimeoutError:
            continue
        finally:
            try:
                unsub()
            except Exception:
                pass

    return None

async def get_service_response(hass, answer_type, command_data, client_id, device_id):
    if is_external_service_answer(answer_type):
        # update module-level hass and start waiting before emitting
        hass = get_current_hass(hass)
        if hass is None:
            return None

        wait_task = asyncio.create_task(dialogs_wait(hass, client_id, device_id))
        await asyncio.sleep(0)
        store_command_data(hass, client_id, command_data)
        return await wait_task
    return None


def find_nested_value(payload, target_key):
    if isinstance(payload, dict):
        if target_key in payload and payload[target_key] is not None:
            return payload[target_key]

        for value in payload.values():
            nested = find_nested_value(value, target_key)
            if nested is not None:
                return nested

    elif isinstance(payload, list):
        for item in payload:
            nested = find_nested_value(item, target_key)
            if nested is not None:
                return nested

    return None


def resolve_response_text(response_text, *sources):
    response_text = response_text or ''
    if "${" not in response_text:
        return response_text

    def replace_placeholder(match):
        key = match.group(1).strip()
        for source in sources:
            value = find_nested_value(source, key)
            if value is not None:
                if isinstance(value, (dict, list)):
                    return json.dumps(value, ensure_ascii=False)
                return str(value)
        return ''

    return RESPONSE_TEMPLATE_PATTERN.sub(replace_placeholder, response_text)


def has_custom_next_action(next_action, response_type):
    canonical_type = canonical_voice_response_type(response_type, fallback=None)
    if not canonical_type:
        return False

    for item in next_action or []:
        if item.get("actionTypeComponent") != "custom":
            continue

        action_type = canonical_voice_response_type(item.get("actionType"), fallback=None)
        if action_type == canonical_type and item.get("uuid"):
            return True

    return False


def resolve_node_end_status(node, response_type=None, fallback=None):
    end_status = node.get("endStatus", False) if fallback is None else fallback
    if has_custom_next_action(node.get("nextAction", []), response_type):
        return False
    return end_status


def normalize_voice_response_type(response_type, fallback="default"):
    normalized = VOICE_RESPONSE_TYPE_ALIASES.get(str(response_type or "").strip().lower())
    if normalized in VOICE_RESPONSE_TYPES:
        return normalized
    return fallback


def canonical_voice_response_type(response_type, fallback="default"):
    raw_type = str(response_type or "").strip().lower()
    if not raw_type:
        return fallback

    normalized = VOICE_RESPONSE_TYPE_ALIASES.get(raw_type)
    if normalized in VOICE_RESPONSE_TYPES:
        return normalized

    return raw_type


def resolve_default_response_type(node, prefer_next_step=False):
    node = node or {}
    if prefer_next_step:
        return "default_next_step"
    return "default"


def get_voice_response_payload(node, response_type="default", *sources):
    node = node or {}
    voice_responses = {}
    for item in node.get("voiceResponseArray") or []:
        if not isinstance(item, dict):
            continue

        canonical_type = canonical_voice_response_type(item.get("actionType"), fallback=None)
        if not canonical_type:
            continue

        response_text = item.get("voiceResponse")
        if response_text in (None, ""):
            continue

        voice_responses[canonical_type] = dict(item)

    canonical_type = canonical_voice_response_type(response_type)
    candidate_types = [canonical_type]
    if canonical_type == "default_next_step":
        candidate_types.append("default")

    for candidate_type in candidate_types:
        voice_response_item = voice_responses.get(candidate_type)
        if not voice_response_item:
            continue

        response_text = resolve_response_text(voice_response_item.get("voiceResponse"), *sources)
        if response_text in (None, ""):
            continue

        llm_enabled = _is_feature_enabled(
            voice_response_item.get("llm", voice_response_item.get("LLM")),
            default=False,
        )
        if llm_enabled:
            llm_system = voice_response_item.get("system")
            llm_model = voice_response_item.get("model", "llama3")
            response_text = generate_ai_response(response_text, llm_system, llm_model)
        return response_text, resolve_node_end_status(node, candidate_type)

    return "", None


def get_voice_response(node, response_type="default", *sources):
    response_text, _ = get_voice_response_payload(node, response_type, *sources)
    return response_text


def resolve_service_voice_type(service, fallback="default"):
    for key in ("typeVoice", "actionType"):
        raw_type = service.get(key)
        canonical_type = canonical_voice_response_type(raw_type, fallback=None)
        if canonical_type:
            return canonical_type

    return fallback


def has_next_action_branch(next_action, response_type="default"):
    component_types = NEXT_ACTION_COMPONENT_ALIASES.get(
        normalize_voice_response_type(response_type),
        set(),
    )
    if not component_types:
        return False

    return any(item.get("actionTypeComponent") in component_types for item in (next_action or []))


def resolve_next_action_uuid(next_action, response_type, fallback_uuid=""):
    canonical_type = canonical_voice_response_type(response_type, fallback=None)

    if canonical_type == 'default_next_step':
        return fallback_uuid

    for item in next_action or []:
        if item.get("actionTypeComponent") == "custom":
            action_type = canonical_voice_response_type(item.get("actionType"), fallback=None)
            if action_type == canonical_type and item.get("uuid"):
                return item.get("uuid")
        
    return None


def resolve_service_response_text(node, service, default_response_type="default", *sources):
    use_declension = service.get('useDeclension', True)
    response_type = resolve_service_voice_type(service, fallback=default_response_type)
    response_text, response_end_status = get_voice_response_payload(
        node,
        response_type,
        *sources,
        service.get("data"),
        service,
    )
    if response_text not in (None, ""):
        return response_text, response_end_status, response_type, use_declension

    error_response_text, error_end_status = get_voice_response_payload(
        node,
        "error",
        *sources,
        service.get("data"),
        service,
    )
    if error_response_text not in (None, "") or has_next_action_branch(node.get("nextAction", []), "error"):
        return error_response_text, error_end_status, "error", use_declension

    return response_text, response_end_status, response_type, use_declension


def apply_service_payload(service, node, end_status, default_response_type="default", *sources):
    if service is None:
        return get_voice_response(node, default_response_type, *sources), end_status, default_response_type

    response_text, response_end_status, response_type, use_declension = resolve_service_response_text(
        node,
        service,
        default_response_type,
        *sources,
    )
    return response_text, response_end_status if response_end_status is not None else end_status, response_type, use_declension


def build_text_response(response_text, end_status, use_declension= True):
    if use_declension:
        response_text = fix_text(response_text) or ''
    
    return {"end_session": end_status, "text": re.sub(r'<.*?>', '', response_text), "tts": response_text}

def miss_commands(client_id, device_id, response_text, dialog_settings):
    miss = int(get_dialog_state_value(MISS_COUNT_KEY, client_id, device_id) or 0) + 1
    set_dialog_state_value(MISS_COUNT_KEY, client_id, device_id, miss, ttl=120)

    if miss >= 3:
        delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
        delete_dialog_state_value(MISS_COUNT_KEY, client_id, device_id)
        dialog_cms_response = build_dialog_response(dialog_settings, "finish_miss")
        return build_text_response(
            dialog_cms_response.get("message", "Диалог завершен."),
            dialog_cms_response.get("endStatus", True),
        )

    if not response_text:
        not_understand_response = build_dialog_response(dialog_settings, "not_understand")
        response_text = not_understand_response.get("message", "Не удалось распознать команду.")
    return build_text_response(response_text, False)
