import re
import json

from ..utils.dialog_response import build_dialog_response
from ..utils.type_data_parser import sanitize_by_type_data

from ..config import CURRENT_NODE_KEY, ERR_BRANCH_KEY
from ..service.dialog_matching import (
    build_child_candidates,
    collect_all_type_template_vars,
    find_matching_subcommand,
    find_node_by_type,
    find_node_by_uuid,
    match_template_command,
    resolve_direct_types,
)
from ..service.dialog_runtime import (
    apply_service_payload,
    build_command_data,
    build_text_response,
    clear_dialog_state,
    delete_dialog_state_value,
    get_dialog_state_value,
    get_service_response,
    store_command_data,
    get_voice_response,
    has_next_action_branch,
    miss_commands,
    resolve_next_action_uuid,
    resolve_default_response_type,
    set_current_node_state,
    set_dialog_state_value,
    should_store_current_node,
)


def _collect_direct_values(client_text, template_vars=None):
    values = []

    if isinstance(template_vars, dict):
        for key, value in template_vars.items():
            if isinstance(value, (list, tuple, set)):
                for item in value:
                    if item is not None and str(item).strip():
                        values.append({
                            "source_name": str(key),
                            "source_kind": "template_var",
                            "value": item,
                        })
            elif value is not None and str(value).strip():
                values.append({
                    "source_name": str(key),
                    "source_kind": "template_var",
                    "value": value,
                })

    if client_text and not template_vars:
        values.append({
            "source_name": "commands",
            "source_kind": "client_text",
            "value": client_text,
        })

    deduped = []
    seen = set()
    for item in values:
        raw_value = item.get("value")
        normalized = str(raw_value if raw_value is not None else "").strip()
        signature = (
            item.get("source_kind"),
            item.get("source_name"),
            type(raw_value).__name__,
            normalized,
        )
        if not normalized or signature in seen:
            continue
        seen.add(signature)
        deduped.append({
            "source_name": item.get("source_name"),
            "source_kind": item.get("source_kind"),
            "value": raw_value,
        })

    return deduped


def _make_hashable(value):
    if isinstance(value, dict):
        return tuple(sorted((str(key), _make_hashable(item)) for key, item in value.items()))
    if isinstance(value, list):
        return tuple(_make_hashable(item) for item in value)
    if isinstance(value, tuple):
        return tuple(_make_hashable(item) for item in value)
    if isinstance(value, set):
        return tuple(sorted(_make_hashable(item) for item in value))
    return value

def _normalize_control_commands(raw_value):
    if isinstance(raw_value, list):
        values = raw_value
    else:
        values = str(raw_value or "").split(";")
    return [str(value or "").strip() for value in values if str(value or "").strip()]

def _has_unmatched_strict_subdirect(direct_items, resolved_entries):
    matched_types = {
        str(entry.get("mappingType"))
        for entry in (resolved_entries or [])
        if isinstance(entry, dict) and entry.get("mappingType")
    }

    matched_types_data = {
        str(entry.get("valueType"))
        for entry in (resolved_entries or [])
        if isinstance(entry, dict) and entry.get("valueType")
    }

    if matched_types_data != 'command':
        return False


    for direct_item in direct_items or []:
        direct_type = str(direct_item.get("mappingType") or "").strip()
        if not direct_type:
            continue

        direct_commands = _normalize_control_commands(
            direct_item.get("voiceCommands")
            if direct_item.get("voiceCommands") is not None
            else direct_item.get("voiceCommands")
        )
        if direct_commands:
            continue

        sub_list = direct_item.get("subDirectContol") or direct_item.get("subDirectControl")
        has_sub_commands = False
        for sub_item in sub_list or []:
            sub_commands = _normalize_control_commands(
                sub_item.get("subVoiceCommands")
                if sub_item.get("subVoiceCommands") is not None
                else sub_item.get("subVoiceCommands")
            )
            if sub_commands:
                has_sub_commands = True
                break

        if has_sub_commands and direct_type not in matched_types:
            return True

    return False


def _direct_items_require_int(direct_items):
    for direct_item in direct_items or []:
        if str(direct_item.get("valueType") or "").strip().lower() == "int":
            return True
    return False


def _client_text_has_digits(client_text):
    return bool(re.search(r"\d", str(client_text or "")))


def _build_missing_number_response(node, dialog_settings):
    default_main_response = build_dialog_response(dialog_settings, "default_main")
    response_text = (
        get_voice_response(node, "error")
        or get_voice_response(node, "miss")
        or default_main_response.get("message", "Не хватает данных для выполнения команды.")
    )
    return build_text_response(response_text, False)


def _compose_direct_source_node(primary_node):
    if isinstance(primary_node, dict) and primary_node.get("direct"):
        direct_items = primary_node.get("direct") or []
        return direct_items

    return []


def resolve_next_active_direct_types(direct_items, client_text, template_vars=None):

    if not direct_items:
        return []

    aggregated_entries = []
    direct_sources = _collect_direct_values(client_text, template_vars)
    template_sources = [source for source in direct_sources if source.get("source_kind") == "template_var"]

    direct_entries = []

    for source in template_sources:

        direct_entries = resolve_direct_types(
            direct_items,
            source.get("value"),
            source.get("source_name")
        )

        if not direct_entries:
            continue

        aggregated_entries.append(direct_entries)

    return aggregated_entries

async def execute_top_level_command(hass, node, client_id, device_id, client_text, command_data):
    clear_dialog_state(client_id, device_id)

    next_action = node.get("nextAction", [])
    uuid = node.get("uuid")
    has_children = has_next_action_branch(next_action, "default")
    has_children_error = has_next_action_branch(next_action, "error")
    default_response_type = resolve_default_response_type(node, prefer_next_step=True)
    response_text = get_voice_response(node, default_response_type, {"commands": client_text, "client_id": client_id})
    end_status = node.get("endStatus", False)
    answer_type = node.get("answerType", 'default')
    use_declension = True

    if answer_type != 'default':
        service = await get_service_response(hass, answer_type, command_data, client_id, device_id)

        if service is not None:
            response_text, end_status, response_type, use_declension = apply_service_payload(
                service,
                node,
                end_status,
                default_response_type,
            )
            if response_type == 'error' and has_children_error:
                end_status = False
            uuid = resolve_next_action_uuid(next_action, response_type, fallback_uuid=uuid)
            if not uuid:
                end_status = True
            if response_type == 'error':
                if has_children_error and not end_status and uuid:
                    set_current_node_state(client_id, node.get('uuid'), device_id, error_branch=True, parent_type=node.get('actionType'))
            elif response_type != 'miss' and uuid and not end_status:
                set_current_node_state(client_id, uuid, device_id, parent_type=node.get('actionType'))
        else:
            if answer_type == 'redis':
                response_text = get_voice_response(node, 'error', {"commands": client_text, "client_id": client_id}) or response_text
                uuid = resolve_next_action_uuid(next_action, 'error', fallback_uuid=uuid)

                if not uuid:
                    end_status = True

                if has_children_error:
                    end_status = False
                    set_current_node_state(client_id, node.get('uuid'), device_id, error_branch=True, parent_type=node.get('actionType'))
                else:
                    end_status = True
            elif has_children_error:
                end_status = False
                set_current_node_state(client_id, node.get('uuid'), device_id, error_branch=True, parent_type=node.get('actionType'))
            else:
                response_text = get_voice_response(node, 'miss', {"commands": client_text, "client_id": client_id})
                end_status = True
    else:
        store_command_data(hass, client_id, command_data)

        if has_children and not end_status and uuid:
            set_current_node_state(client_id, uuid, device_id, parent_type=node.get('actionType'))

    return build_text_response(response_text, end_status, use_declension)


async def execute_top_level_template(
    hass,
    node,
    client_id,
    device_id,
    command_data,
    client_text=None
):
    clear_dialog_state(client_id, device_id)

    uuid = node.get("uuid")
    end_status = True
    answer_type = node.get("answerType", 'default')
    
    response_text = get_voice_response(node, "default", {"commands": client_text, "client_id": client_id, "device_id": device_id})
    default_response_type = resolve_default_response_type(node, prefer_next_step=False)
    next_action = node.get("nextAction", [])
    has_children_error = has_next_action_branch(next_action, "error")
    use_declension = True

    if answer_type != 'default':
        service = await get_service_response(hass, answer_type, command_data, client_id, device_id)
        if service:
            response_text, end_status, response_type, use_declension = apply_service_payload(
                service,
                node,
                end_status,
                default_response_type
            )
            if response_type == 'error' and has_children_error:
                end_status = False
            uuid = resolve_next_action_uuid(next_action, response_type, fallback_uuid=uuid)
            if uuid and not end_status:
                if response_type == 'error':
                    if has_children_error:
                        set_current_node_state(client_id, node.get('uuid'), device_id, error_branch=True, parent_type=node.get('actionType'))
                else:
                    set_current_node_state(client_id, uuid, device_id, parent_type=node.get('actionType'))
        elif answer_type == 'redis':
            response_text = get_voice_response(node, 'error', {"commands": client_text, "client_id": client_id}) or response_text
            uuid = resolve_next_action_uuid(next_action, 'error')
            if not uuid:
                end_status = True
            
            if has_children_error:
                end_status = False
                set_current_node_state(client_id, node.get('uuid'), device_id, error_branch=True, parent_type=node.get('actionType'))
    else:
        store_command_data(hass, client_id, command_data)

    return build_text_response(response_text, end_status, use_declension)


async def execute_active_node(hass, sub_level_nodes, client_new_dialog, client_text, client_id, device_id, dialog_settings):
    current_node_state = get_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    error_branch = get_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id)

    if not current_node_state or client_new_dialog:
        return None

    current_node_state = json.loads(current_node_state)

    current_node_uuid = current_node_state.get("uuid")
    
    stored_parent_type = current_node_state.get("parent_type")
    
    active_node = find_node_by_uuid(sub_level_nodes, current_node_uuid)

    if not active_node:
        return None

    template_vars = None
    found, _, template_vars = find_matching_subcommand(
        active_node,
        client_text,
        sub_level_nodes,
        error_branch=bool(error_branch),
    )
    
    if not found and active_node.get("forwardText"):
        found = active_node
    if not found:
        active_template_vars = match_template_command(
            active_node.get("voiceCommands", []),
            client_text,
            keep_stopword_vars=collect_all_type_template_vars(active_node),
        )
        if active_template_vars is not None:
            found = active_node
            template_vars = active_template_vars
    if not found:
        return miss_commands(client_id, device_id, get_voice_response(active_node, 'miss', {"commands": client_text, "client_id": client_id}),  dialog_settings)
    if not template_vars:
        template_vars = match_template_command(
            found.get("voiceCommands", []),
            client_text,
            keep_stopword_vars=collect_all_type_template_vars(found),
        )

    direct_items = _compose_direct_source_node(found)
    resolved_direct_entries = resolve_next_active_direct_types(
        direct_items,
        client_text,
        template_vars=template_vars
    )

    if (
        not resolved_direct_entries
        and template_vars
        and _direct_items_require_int(direct_items)
        and not _client_text_has_digits(client_text)
    ):
        return miss_commands(client_id, device_id, get_voice_response(active_node, 'miss', {"commands": client_text, "client_id": client_id}),  dialog_settings)
    
    if _has_unmatched_strict_subdirect(direct_items, resolved_direct_entries):
        forward_child = next(
            (
                child
                for child in build_child_candidates(active_node, sub_level_nodes, error_branch=bool(error_branch))
                if child.get("forwardText")
            ),
            None,
        )
        if forward_child:
            found = forward_child
            template_vars = None
            direct_items = _compose_direct_source_node(found)
            resolved_direct_entries = resolve_next_active_direct_types(
                direct_items,
                client_text,
                template_vars=template_vars,
            )
        else:
            response_text = get_voice_response(
                active_node,
                "miss",
                {"commands": client_text, "client_id": client_id},
            )
            return miss_commands(client_id, device_id, response_text, dialog_settings)

    end_status = found.get("endStatus", False)
    next_action = found.get("nextAction", [])
    uuid = found.get("uuid")

    has_children = has_next_action_branch(next_action, "default")
    has_children_error = has_next_action_branch(next_action, "error")

    default_response_type = resolve_default_response_type(found, prefer_next_step=not template_vars)
    response_text = get_voice_response(found, default_response_type, {"commands": client_text, "client_id": client_id})

    answer_type = found.get("answerType", 'default')
    if resolved_direct_entries and answer_type == 'default':
        end_status = True

    children_type = found.get('actionType') or active_node.get('actionType')
    parent_type = stored_parent_type or active_node.get('actionType')

    if found is active_node and active_node.get("forwardText"):
        children_type = active_node.get('actionType')

    command_data = [build_command_data(
        children_type,
        parent_type,
        {"commands": client_text},
        client_id,
        device_id,
        resolved_direct_entries,
        True
    )]

    answer_type = found.get("answerType", 'default')
    use_declension = True
    if answer_type != 'default':
        service = await get_service_response(hass, answer_type, command_data, client_id, device_id)
        if service is not None:
            response_text, end_status, response_type, use_declension = apply_service_payload(
                service,
                found,
                end_status,
                default_response_type,
            )
            if response_type == 'error' and has_children_error:
                end_status = False
            uuid = resolve_next_action_uuid(next_action, response_type, fallback_uuid=uuid)

            if not uuid:
                end_status = True

            if response_type == 'miss':
                response_text = (
                    get_voice_response(found, 'miss', service.get('data'), service, {"commands": client_text, "client_id": client_id})
                    or get_voice_response(active_node, 'miss', service.get('data'), service, {"commands": client_text, "client_id": client_id})
                    or response_text
                )
                return miss_commands(client_id, device_id, response_text, dialog_settings)
            if response_type == 'error':
                if has_children_error:
                    set_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id, '1', ttl=120)
                else:
                    delete_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id)

            if (
                (response_type == 'error' and has_children_error and not end_status)
                or (response_type not in {'error', 'miss'} and should_store_current_node(has_children or bool(uuid), end_status, uuid))
            ):
                next_parent_type = found.get('actionType') if found is not active_node else parent_type
                next_uuid = found.get('uuid') if response_type == 'error' and has_children_error else uuid
                set_current_node_state(client_id, next_uuid, device_id, error_branch=(response_type == 'error'), parent_type=next_parent_type)
            else:
                delete_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id)
                delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
        else:
            if answer_type == 'redis':
                response_text = (
                    get_voice_response(found, 'error', {"commands": client_text, "client_id": client_id})
                    or get_voice_response(active_node, 'error', {"commands": client_text, "client_id": client_id})
                    or response_text
                )
                uuid = resolve_next_action_uuid(next_action, 'error', fallback_uuid=uuid)
                if not uuid:
                    end_status = True

                if has_children_error:
                    end_status = False
                    next_parent_type = found.get('actionType') if found is not active_node else parent_type
                    set_current_node_state(client_id, found.get('uuid'), device_id, error_branch=True, parent_type=next_parent_type)
                else:
                    delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
                    delete_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id)
                    end_status = True
            elif has_children_error:
                end_status = False
                set_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id, "1", ttl=120)
            else:
                delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
                delete_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id)
                response_text = get_voice_response(active_node, 'miss', {"commands": client_text, "client_id": client_id})
                end_status = True
    else:
        store_command_data(hass, client_id, command_data)
        delete_dialog_state_value(ERR_BRANCH_KEY, client_id, device_id)
        if has_children and not end_status:
            set_current_node_state(client_id, uuid, device_id, parent_type=found.get('actionType'))
        elif not end_status and found.get('nextAction'):
            # Переход к узлу по nextAction
            next_active_node = find_node_by_type(sub_level_nodes, found.get('nextAction'))
            if next_active_node:
                set_current_node_state(client_id, next_active_node.get('uuid'), device_id, parent_type=found.get('actionType'))
        if end_status or not has_children:
            delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)

    return build_text_response(response_text, end_status, use_declension)
