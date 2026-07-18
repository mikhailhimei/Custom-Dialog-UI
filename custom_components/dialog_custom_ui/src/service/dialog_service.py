import asyncio
import json
import re

from collections import Counter
from ..config import CURRENT_NODE_KEY
from ..handler import commands_handler
from ..handler.commands_mapper import generate_ai_response, get_search_llm
from ..handler.commands_handler import get_dialog_settings
from ..service.dialog_execution import execute_active_node, execute_top_level_command, execute_top_level_template, resolve_next_active_direct_types, _compose_direct_source_node, _build_missing_number_response
from ..service.dialog_matching import (
    attach_direct_controls,
    find_weighted_command_node,
    find_top_level_candidates,
    find_node_by_id,
    get_ranked_ai_nodes,
    voice_command_matches,
)
from ..service.dialog_runtime import (
    build_text_response,
    build_command_data,
    delete_dialog_state_value,
    get_current_hass,
    get_voice_response,
    store_command_data,
    get_service_response
)
from ..utils.dialog_response import build_dialog_response
from ..utils.text_normalize import normalize_numbers


def _format_voice_commands(node):
    voice_commands = node.get("voiceCommands", [])
    if not isinstance(voice_commands, list):
        voice_commands = [voice_commands]
    normalized = [str(command or "").strip() for command in voice_commands if str(command or "").strip()]
    return normalized


def _build_default_main_llm_context_prompt(client_text, top_level_nodes):
    scenario_lines = []
    for node in top_level_nodes or []:
        node_id = node.get("id")
        node_type = str(node.get("actionType") or "").strip()

        if not node_id or node_type in {"default", "stop", "tts_next"}:
            continue

        commands = _format_voice_commands(node)
        if not commands:
            continue

        direct_nodes = node.get("direct") or []
        if not isinstance(direct_nodes, list):
            direct_nodes = []

        direct_map = []

        for d in direct_nodes:
            if not isinstance(d, dict):
                continue

            mapping_type = d.get("mappingType")
            voice_cmds = d.get("voiceCommands") or []

            if isinstance(voice_cmds, str):
                voice_cmds = [voice_cmds]
            if not isinstance(voice_cmds, list):
                voice_cmds = []

            sub_controls = d.get("subDirectControl") or []
            if not isinstance(sub_controls, list):
                sub_controls = []

            sub_parts = []

            for sd in sub_controls:
                if not isinstance(sd, dict):
                    continue

                sub_type = sd.get("subMappingType")
                sub_cmds = sd.get("subVoiceCommands")

                if isinstance(sub_cmds, list):
                    sub_cmds = ",".join([str(x) for x in sub_cmds if x])
                elif isinstance(sub_cmds, str):
                    sub_cmds = sub_cmds
                else:
                    sub_cmds = ""

                if sub_type:
                    if sub_cmds:
                        sub_parts.append(f"{sub_type}:{sub_cmds}")
                    else:
                        sub_parts.append(str(sub_type))

            if sub_parts:
                direct_map.append(
                        f"{','.join(sub_parts)}"
                    )

        scenario_lines.append(
            f'id={node_id}; '
            f'commands="{" | ".join(commands)}"; '
            f'direct_map="{" | ".join(direct_map)}"'
        )

    scenarios_text = "\n".join(scenario_lines) if scenario_lines else "no_scenarios"
    normalized_client_text = str(client_text or "").strip()
    return (
        f"Пользователь: {normalized_client_text}\n\n"
        "Список сценариев (commands):\n"
        f"{scenarios_text}"
    )


def extract_json(text: str):
    start = None
    depth = 0

    for i, ch in enumerate(text):
        if ch == '{':
            if start is None:
                start = i
            depth += 1

        elif ch == '}':
            depth -= 1

            if start is not None and depth == 0:
                json_str = text[start:i+1]

                try:
                    return json.loads(json_str)
                except json.JSONDecodeError:
                    return None

import re


def resolve_mapping(variables, mappings):
    if not variables:
        return None

    result = {}

    for variable in variables:
        sub_type_value = variable.get("subMappingType")
        matched_word = variable.get("matchedPattern")

        if not sub_type_value or not matched_word:
            continue

        # 🔥 чистим regex мусор
        matched_word = re.sub(r"\(.*?\)", "", matched_word)
        matched_word = re.sub(r"[\?\|\+\*\[\]]", "", matched_word)
        matched_word = matched_word.strip()

        for m in mappings:
            sub_controls = m.get("subDirectControl") or []

            if not isinstance(sub_controls, list):
                continue

            mapping_type = m.get("mappingType")

            for sub in sub_controls:
                sub_type = sub.get("subMappingType")

                if sub_type == sub_type_value:
                    result[mapping_type] = matched_word

    return result or None


def _ensure_list(value):
    return value if isinstance(value, list) else []


def prepare_dialog_nodes():
    commands_result = commands_handler.get_commands() or {}
    level_nodes = commands_result.get("body") if isinstance(commands_result, dict) else {}
    if not isinstance(level_nodes, dict):
        level_nodes = {}

    top_level_nodes = _ensure_list(level_nodes.get("componentDialog"))
    sub_level_nodes = _ensure_list(level_nodes.get("subComponentDialog")) + top_level_nodes
    sub_direct_control = _ensure_list(level_nodes.get("subDirectControl"))

    return top_level_nodes, sub_level_nodes, sub_direct_control


def get_dialog_settings_list():
    settings_text = get_dialog_settings()
    return (settings_text.get("body") or {}).get("dialogSettings", [])


def handle_stop_command(hass, top_level_nodes, client_text, client_id, device_id):
    stop_node = next((node for node in top_level_nodes if node.get("actionType") == "stop"), None)
    if not stop_node or not any(command.lower() in client_text.lower() for command in stop_node.get("voiceCommands", [])):
        return None

    delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    store_command_data(hass, client_id, {"parent_type": "stop", "client_id": client_id, "device_id": device_id})
    return build_text_response(get_voice_response(stop_node, "default", {"commands": client_text, "client_id": client_id}), True)

def handle_new_session(top_level_nodes, client_new_dialog, client_text, client_id, device_id):
    if not client_new_dialog or client_text != "":
        return None

    default_node = next((node for node in top_level_nodes if node.get("actionType") == "default"), None)
    if not default_node:
        return None

    delete_dialog_state_value(CURRENT_NODE_KEY, client_id, device_id)
    return build_text_response(
        get_voice_response(default_node, "default", {"commands": client_text, "client_id": client_id}),
        default_node.get("endStatus", False),
    )


# ----------------------------
# NORMALIZATION
# ----------------------------

def normalize(text):
    return (text or "").lower().replace(" ", "")


# ----------------------------
# BUILD GLOBAL FREQUENCY (optional but важно)
# ----------------------------

def build_letter_freq(patterns):
    freq = Counter()

    for p in patterns:
        p = normalize(p)
        seen = set(p)

        for c in seen:
            freq[c] += 1

    return freq


# ----------------------------
# CORE SCORING (ТВОЯ ЛОГИКА + контроль шума)
# ----------------------------

def letter_score(text, pattern, freq):
    text = normalize(text)
    pattern = normalize(pattern)

    if not text or not pattern:
        return 0.0

    set_t = set(text)
    set_p = set(pattern)

    inter = set_t & set_p

    if len(inter) < 2:
        return 0.0

    # 🔥 базовый балл за пересечение
    score = len(inter)

    # 🔥 усиление за "2+ совпадения"
    if len(inter) >= 2:
        score += 2.0

    # 🔥 штраф за частотные буквы (чтобы "за" не рулило везде)
    for c in inter:
        score -= freq.get(c, 0) * 0.05

    return max(score, 0.0)


# ----------------------------
# RESOLVER
# ----------------------------

def resolve_sub_direct(outlier_words, direct_blocks):

    if not outlier_words:
        return []

    results = []

    # -----------------------------------
    # ищем по всем словам-outlier
    # -----------------------------------
    for word in outlier_words:
        w = normalize(word)

        for block in direct_blocks or []:
            sub_controls = block.get("subDirectControl") or []

            for sub in sub_controls:
                pattern = sub.get("subVoiceCommands")

                if not pattern:
                    continue

                variants = str(pattern).split(";")

                for variant in variants:
                    variant = variant.strip()

                    if not variant:
                        continue

                    # regex -> текст
                    cleaned = re.sub(r"[\(\)\?\|\+\*\[\]]", "", variant)
                    cleaned = normalize(cleaned)

                    # общие буквы
                    matched_chunks = []

                    for i in range(len(w) - 1):
                        chunk = w[i:i+2]

                        if chunk in cleaned:
                            matched_chunks.append(chunk)

                    # нет подряд совпавших букв
                    if not matched_chunks:
                        continue

                    # score = количество совпавших кусков
                    score = len(matched_chunks) * 2

                    results.append({
                        "subMappingType": sub.get("subMappingType"),
                        "confidence": score,
                        "matchType": "outlier_letter_match",
                        "matchedWord": word,
                        "matchedPattern": variant
                    })

    # сортировка по confidence
    results.sort(
        key=lambda x: x["confidence"],
        reverse=True
    )

    return results

async def handle_top_level_command(hass, top_level_nodes, client_text, client_id, device_id, dialog_settings):
    exact_candidates = find_top_level_candidates(
        top_level_nodes,
        client_text,
    )
    
    command_data = []
    
    for node in exact_candidates:
        template_var = node.get('template_var', False) or False
        direct_entries = node.get('direct_entries', []) or []
        
        main_command = node.get('execution_command')

        if template_var:
            if not direct_entries:
                if main_command:
                    return _build_missing_number_response(node, dialog_settings)
                continue

        command_data.append(build_command_data(
            '',
            node.get('actionType'),
            {"commands": client_text} if client_text else {},
            client_id,
            device_id,
            direct_entries,
            node.get('execution_command'),
        ))

        if node.get('execution_command'):
            continue

    main_node = next((n for n in exact_candidates if n.get('execution_command')), None)

    if main_node and main_node.get('template_var'):    
        return await execute_top_level_template(
                        hass,
                        main_node,
                        client_id,
                        device_id,
                        command_data,
                        client_text=client_text
                    )

    if main_node:
        return await execute_top_level_command(hass, main_node, client_id, device_id, client_text, command_data)

    dialog_cms_response = build_dialog_response(dialog_settings, "default_main")
    
    return build_text_response(
        dialog_cms_response.get("message", "Диалоговые сценарии временно недоступны."),
        dialog_cms_response.get("endStatus", True),
    )


async def words_scripts(client_command):
    hass = get_current_hass()

    client_text = normalize_numbers(client_command['request']['command'].strip().lower())
    client_new_dialog = client_command['session']['new']
    client_id = client_command['session']['user']['user_id']
    device_id = client_command['session']['application']['application_id']
    
    top_level_nodes, sub_level_nodes, sub_direct_control = prepare_dialog_nodes()

    dialog_settings = get_dialog_settings_list()

    stop_response = handle_stop_command(hass, top_level_nodes, client_text, client_id, device_id)
    if stop_response:
        return stop_response

    new_session_response = handle_new_session(top_level_nodes, client_new_dialog, client_text, client_id, device_id)
    if new_session_response:
        return new_session_response

    active_node_response = await execute_active_node(
        hass,
        sub_level_nodes,
        client_new_dialog,
        client_text,
        client_id,
        device_id,
        dialog_settings,
    )
    if active_node_response:
        return active_node_response

    return await handle_top_level_command(
        hass,
        top_level_nodes,
        client_text,
        client_id,
        device_id,
        dialog_settings
    )
