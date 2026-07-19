import re
import copy

from ..utils.text_normalize import sanitize_location_text
from ..utils.type_data_parser import sanitize_by_type_data
from ..utils.reverse_map import get_section

_NUMBER_TOKEN_WORDS = set()

VOICE_PATTERN_META = set("()|?+*[]")

STOP_TOKENS = set(get_section("location_stop_words"))

def find_node_by_uuid(nodes, node_uuid):
    for node in nodes:
        if node.get("uuid") == node_uuid:
            return node

    return None


def find_node_by_id(nodes, node_id):
    for node in nodes or []:
        if str(node.get("id")) == str(node_id):
            return node

    return None


def find_node_by_type(nodes, node_type):
    for node in nodes or []:
        if str(node.get("actionType")) == str(node_type):
            return node

    return None


def has_voice_pattern_syntax(value):
    return any(char in str(value or "") for char in VOICE_PATTERN_META)


def strip_voice_pattern_syntax(value):
    text = str(value or "").lower()
    text = re.sub(r"\([^)]*\)\?", "", text)
    text = re.sub(r"\([^)]*\)", " ", text)
    text = re.sub(r"[\[\]\|\?\+\*]", " ", text)
    return text


def voice_command_matches(command_pattern, text, partial=False):
    command_pattern = str(command_pattern or "").strip().lower()
    text = str(text or "").strip().lower()

    if not command_pattern or not text or "${" in command_pattern:
        return False

    if has_voice_pattern_syntax(command_pattern):
        try:
            if partial:
                return re.search(command_pattern, text, flags=re.IGNORECASE) is not None
            return re.fullmatch(command_pattern, text, flags=re.IGNORECASE) is not None
        except re.error:
            pass

    if partial:
        return command_pattern in text
    return command_pattern == text


def normalize_command_text(value):
    normalized_value = strip_voice_pattern_syntax(value)
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s]", " ", normalized_value)).strip()


def tokenize_command_text(value):
    return [token for token in normalize_command_text(value).split(" ") if token]


def tokenize_text(value):
    normalized = re.sub(r"[^\w\s]", " ", str(value or "").lower())
    return [token for token in normalized.split() if token]


def tokenize_template(value):
    if value is None:
        return []

    tokens = []
    raw_parts = re.split(r"(\$\{[^}]+\})", str(value).lower())
    for part in raw_parts:
        if not part:
            continue
        if part.startswith("${") and part.endswith("}"):
            tokens.append(part)
            continue

        for chunk in re.split(r"\s+", part.strip()):
            if not chunk:
                continue
            if has_voice_pattern_syntax(chunk):
                tokens.append(chunk)
            else:
                tokens.extend([token for token in normalize_command_text(chunk).split(" ") if token])
    return tokens


def content_tokens(value):
    return [token for token in tokenize_command_text(value) if token not in STOP_TOKENS]


def normalize_direct_control_text(value):
    return sanitize_location_text(value).strip().lower()


def normalize_direct_control_commands(raw_value):
    if isinstance(raw_value, list):
        values = raw_value
    else:
        values = (raw_value or "").split(";")

    return [
        normalized
        for normalized in (normalize_direct_control_text(value) for value in values)
        if normalized
    ]


def count_soft_token_matches(source_tokens, target_tokens):
    matched = 0
    remaining_targets = list(target_tokens)

    for source_token in source_tokens:
        for idx, target_token in enumerate(remaining_targets):
            if match_tokens_soft(source_token, target_token):
                matched += 1
                remaining_targets.pop(idx)
                break

    return matched


def score_command_variant(query_text, command_text):
    query_tokens = tokenize_command_text(query_text)
    command_tokens = tokenize_command_text(command_text)

    if not query_tokens or not command_tokens:
        return float("-inf")

    if query_tokens == command_tokens:
        return 100.0

    score = 0.0
    command_index = 0
    matched_tokens = 0

    for query_token in query_tokens:
        found_index = -1

        for idx in range(command_index, len(command_tokens)):
            command_token = command_tokens[idx]
            if command_token == query_token:
                found_index = idx
                score += 5.0
                break
            if min(len(command_token), len(query_token)) >= 3 and (
                command_token.startswith(query_token) or query_token.startswith(command_token)
            ):
                found_index = idx
                score += 2.0
                break

        if found_index == -1:
            score -= 4.0
            continue

        matched_tokens += 1
        if found_index == command_index:
            score += 1.0
        else:
            score -= (found_index - command_index) * 1.5
        command_index = found_index + 1

    extra_tokens = max(0, len(command_tokens) - matched_tokens)
    score -= extra_tokens * 2.0

    if matched_tokens == len(query_tokens):
        score += 3.0

    if query_tokens and command_tokens and query_tokens[0] == command_tokens[0]:
        score += 2.0

    if ("не" in query_tokens) != ("не" in command_tokens):
        score -= 5.0

    return score


def normalize(text):
    return (text or "").replace(" ", "").lower()


def similarity(a, b):
    if not a or not b:
        return 0

    # ❗ критический штраф
    if a[:3] != b[:3]:
        return 0  # или сильно уменьшить

    min_len = min(len(a), len(b))
    matches = sum(1 for i in range(min_len) if a[i] == b[i])

    return matches / max(len(a), len(b))


import re


def tokenize(text):
    return re.findall(r"[a-zа-яё0-9]+", (text or "").lower())


def get_ranked_ai_nodes(query_text, nodes):
    ranked_nodes = []

    q = normalize(query_text)
    q_words = tokenize(query_text)

    for node in nodes or []:
        voice_commands = node.get("voiceCommands", [])
        if not isinstance(voice_commands, list):
            voice_commands = [voice_commands]

        best_score = 0
        best_command = None

        word_coverage = {w: 0 for w in q_words}
        cmd_matches = {}

        for cmd in voice_commands:
            if not cmd or "${" in str(cmd):
                continue

            c = normalize(cmd)
            c_words = tokenize(cmd)

            # ❗ ТВОЯ similarity (НЕ ТРОГАЕМ)
            score = similarity(q, c)

            # ----------------------------
            # слова совпадения
            # ----------------------------
            matches = []
            for w in q_words:
                for cw in c_words:
                    if words_similar(w, cw):
                        word_coverage[w] += 1
                        matches.append(w)
                        break

            cmd_matches[cmd] = matches

            matched_count = len(matches)
            total_words = len(q_words)

            # ----------------------------
            # 🔥 ШТРАФ ЗА МУСОР
            # ----------------------------
            penalty = 0

            # 0 совпадений → почти бесполезно
            if matched_count == 0:
                penalty = 1.0

            # 1 слово совпало, остальное мусор
            elif matched_count == 1 and total_words > 1:
                penalty = 0.6

            # есть "лишние" слова (сзади и т.д.)
            bad_words = total_words - matched_count
            if bad_words > 0:
                penalty += bad_words * 0.2

            effective_score = score - penalty
            if effective_score < 0:
                effective_score = 0

            # ----------------------------
            # BEST выбираем по effective_score
            # ----------------------------
            if effective_score > best_score:
                best_score = effective_score
                best_command = cmd

        if best_command is None:
            continue

        outliers = [w for w, cnt in word_coverage.items() if cnt == 0]

        ranked_nodes.append({
            "id": node.get("id"),
            "voiceCommands": voice_commands,
            "bestVoiceCommand": best_command,
            "_score": similarity(q, normalize(best_command)),
            "wordCoverage": word_coverage,
            "outlierWords": outliers,
            "commandWordMatches": cmd_matches
        })

    ranked_nodes.sort(key=lambda x: x["_score"], reverse=True)
    return ranked_nodes


def words_similar(a, b):
    a = normalize(a)
    b = normalize(b)

    if not a or not b:
        return False

    # первые 4 символа совпадают
    if a[:4] == b[:4]:
        return True

    # одно слово внутри другого
    if a in b or b in a:
        return True

    return False


def match_tokens_soft(source_token, target_token):
    return (
        source_token == target_token
        or source_token.startswith(target_token)
        or target_token.startswith(source_token)
    )


def build_child_candidates(node, sub_command, error_branch=False):
    target_components = {"children_error", "chidren_error"} if error_branch else {"children"}
    children_ids = []
    for item in node.get("nextAction", []):
        if item.get("actionTypeComponent") not in target_components:
            continue
        child_ref = item.get("uuid") or item.get("id")
        if child_ref:
            children_ids.append(child_ref)

    children_list = []
    for child in sub_command:
        if child.get("id") in children_ids or child.get("uuid") in children_ids:
            children_list.append(child)

    return children_list



def build_custom_next_action_candidates(node, sub_command, action_type=None):
    custom_refs = []
    action_type = str(action_type or "").strip()

    for item in node.get("nextAction", []) or []:
        if item.get("actionTypeComponent") != "custom":
            continue

        item_action_type = str(item.get("actionType") or "").strip()
        if action_type and item_action_type != action_type:
            continue

        child_ref = item.get("uuid") or item.get("id")
        if child_ref:
            custom_refs.append(child_ref)

    candidates = []
    for child in sub_command or []:
        if child.get("id") in custom_refs or child.get("uuid") in custom_refs:
            candidates.append(child)

    return candidates


def find_matching_node_by_voice_command(nodes, client_text):
    nodes = [node for node in (nodes or []) if isinstance(node, dict)]
    has_forward_text = any(node.get("forwardText") for node in nodes)

    for node in nodes:
        if node.get("forwardText"):
            continue
        voice_commands = node.get("voiceCommands", [])
        if not isinstance(voice_commands, list):
            voice_commands = [voice_commands]
        if any(voice_command_matches(voice_command, client_text) for voice_command in voice_commands):
            return node, False, None

    for node in nodes:
        if node.get("forwardText"):
            continue
        voice_commands = node.get("voiceCommands", [])
        if not isinstance(voice_commands, list):
            voice_commands = [voice_commands]
        template_vars = match_template_command(
            voice_commands,
            client_text,
            require_fixed_start=has_forward_text,
            keep_stopword_vars=collect_all_type_template_vars(node),
        )
        if template_vars:
            return node, False, template_vars

    if not has_forward_text:
        for node in nodes:
            if node.get("forwardText"):
                continue
            voice_commands = node.get("voiceCommands", [])
            if not isinstance(voice_commands, list):
                voice_commands = [voice_commands]
            template_vars = find_weighted_template_match(
                voice_commands,
                client_text,
                min_score=0.5,
                keep_stopword_vars=collect_all_type_template_vars(node),
            )
            if template_vars:
                return node, False, template_vars

        weighted_node = find_weighted_command_node(
            client_text,
            [node for node in nodes if not node.get("forwardText")],
        )
        if weighted_node:
            return weighted_node, False, None

    if has_forward_text:
        for node in nodes:
            if node.get("forwardText"):
                return node, True, None

    return None, False, None


def find_matching_custom_next_action(node, client_text, sub_command, action_type=None):
    custom_candidates = build_custom_next_action_candidates(
        node,
        sub_command,
        action_type=action_type,
    )
    return find_matching_node_by_voice_command(custom_candidates, client_text)

def find_weighted_command_node(query_text, nodes, min_score=6):
    ranked_nodes = get_ranked_ai_nodes(query_text, nodes)
    if not ranked_nodes:
        return None

    best_node = ranked_nodes[0]
    if best_node.get("_score", float("-inf")) < min_score:
        return None

    query_content_count = best_node.get("_query_content_count", 0)
    query_content_matches = best_node.get("_query_content_matches", 0)
    command_content_count = best_node.get("_command_content_count", 0)
    command_content_matches = best_node.get("_command_content_matches", 0)

    if query_content_count >= 2 and query_content_matches < 2:
        return None
    if command_content_count >= 2 and command_content_matches < 2:
        return None

    return find_node_by_id(nodes, best_node.get("id"))


def template_to_fixed_tokens(template_text):
    parts = re.split(r"\$\{[^}]+\}", template_text or "")
    fixed_tokens = []
    for part in parts:
        fixed_tokens.extend(tokenize_command_text(part))
    return fixed_tokens


def split_template_parts(template_text):
    raw_parts = re.split(r"(\$\{[^}]+\})", template_text or "")
    parts = []

    for part in raw_parts:
        if not part:
            continue
        if part.startswith("${") and part.endswith("}"):
            parts.append(("value", part[2:-1].strip() or "value"))
            continue

        fixed_tokens = tokenize_command_text(part)
        if fixed_tokens:
            parts.append(("fixed", fixed_tokens))

    return parts


def score_template_fixed_tokens(query_text, template_text):
    query_tokens = tokenize_command_text(query_text)
    fixed_tokens = template_to_fixed_tokens(template_text)

    if not query_tokens or not fixed_tokens:
        return float("-inf")

    score = 0.0
    query_index = 0

    for fixed_token in fixed_tokens:
        matched_index = None

        for idx in range(query_index, len(query_tokens)):
            query_token = query_tokens[idx]
            if query_token == fixed_token:
                matched_index = idx
                score += 4.0
                break
            if query_token.startswith(fixed_token) or fixed_token.startswith(query_token):
                matched_index = idx
                score += 3.0
                break

        if matched_index is None:
            score -= 3.0
            continue

        if matched_index == query_index:
            score += 0.75

        query_index = matched_index + 1

    return score


def extract_template_variables(template_text, client_text, keep_stopword_vars=None):
    parts = split_template_parts(template_text)
    if not parts or not any(kind == "value" for kind, _ in parts):
        return None

    query_tokens = tokenize_command_text(client_text)
    if not query_tokens:
        return None
    keep_stopword_vars = {
        str(name or "").strip().lower()
        for name in (keep_stopword_vars or set())
        if str(name or "").strip()
    }

    def clean_span(tokens):
        cleaned = [token for token in tokens if token not in STOP_TOKENS]
        return cleaned

    def allocate_span(placeholders, span_tokens):
        if not placeholders:
            return {}

        keep_raw_tokens = (
            len(placeholders) == 1
            and str(placeholders[0] or "").strip().lower() in keep_stopword_vars
        )
        cleaned_tokens = list(span_tokens) if keep_raw_tokens else clean_span(span_tokens)
        if not cleaned_tokens:
            return None

        if len(placeholders) == 1:
            if keep_raw_tokens:
                value = " ".join(cleaned_tokens).strip()
            else:
                value = sanitize_location_text(" ".join(cleaned_tokens).strip())
            return {placeholders[0]: value} if value else None

        if len(cleaned_tokens) < len(placeholders):
            return None

        assigned = {}
        tokens_left = list(cleaned_tokens)
        for idx, placeholder_name in enumerate(placeholders):
            remaining_placeholders = len(placeholders) - idx - 1
            if remaining_placeholders == 0:
                chunk = tokens_left
            else:
                take_count = len(tokens_left) - remaining_placeholders
                if take_count < 1:
                    return None
                chunk = tokens_left[:take_count]
                tokens_left = tokens_left[take_count:]

            value = sanitize_location_text(" ".join(chunk).strip())
            if not value:
                return None
            assigned[placeholder_name] = value

        return assigned

    def is_count_like_variable_name(name):
        normalized = str(name or "").lower()
        return any(hint in normalized for hint in ("count", "колич", "раз"))

    def is_count_like_value(value):
        tokens = tokenize_command_text(value)
        if not tokens:
            return False
        return all(token.isdigit() or token in _NUMBER_TOKEN_WORDS for token in tokens)

    def repair_count_variables(values):
        var_order = [value for kind, value in parts if kind == "value"]
        if not var_order:
            return values

        count_like_names = [name for name in var_order if is_count_like_variable_name(name)]
        if not count_like_names:
            return values

        count_suffix_tokens = {"раз", "раза", "разов"}

        def split_count_suffix(raw_value):
            tokens = tokenize_command_text(raw_value)
            if not tokens:
                return None, raw_value

            work_tokens = list(tokens)
            if work_tokens and work_tokens[-1] in count_suffix_tokens:
                work_tokens = work_tokens[:-1]

            if not work_tokens:
                return None, raw_value

            idx = len(work_tokens) - 1
            while idx >= 0 and (work_tokens[idx].isdigit() or work_tokens[idx] in _NUMBER_TOKEN_WORDS):
                idx -= 1

            count_tokens = work_tokens[idx + 1:]
            if not count_tokens:
                return None, raw_value

            value_tokens = work_tokens[:idx + 1]
            count_value = sanitize_location_text(" ".join(count_tokens).strip())
            value_text = sanitize_location_text(" ".join(value_tokens).strip())
            return count_value, value_text

        for count_name in count_like_names:
            current_count = values.get(count_name)
            if current_count and is_count_like_value(current_count):
                continue

            count_idx = var_order.index(count_name)
            if count_idx <= 0:
                continue

            donor_name = var_order[count_idx - 1]
            donor_value = values.get(donor_name)
            if not donor_value:
                continue

            extracted_count, donor_trimmed = split_count_suffix(donor_value)
            if extracted_count:
                values[count_name] = extracted_count
                if donor_trimmed:
                    values[donor_name] = donor_trimmed
            else:
                # Если не удалось извлечь число, добавляем значение count к предыдущей переменной
                # и удаляем переменную count
                values[donor_name] = f"{donor_value} {current_count}".strip()
                del values[count_name]

        return values

    result = {}
    pending_placeholders = []
    search_from = 0

    idx = 0
    while idx < len(parts):
        kind, value = parts[idx]
        if kind == "value":
            pending_placeholders.append(value)
            idx += 1
            continue

        fixed_tokens = value
        matched_index = None
        max_start = len(query_tokens) - len(fixed_tokens)
        for pos in range(search_from, max_start + 1):
            if all(
                match_tokens_soft(query_tokens[pos + offset], fixed_tokens[offset])
                for offset in range(len(fixed_tokens))
            ):
                matched_index = pos + len(fixed_tokens) - 1
                break

        if matched_index is None:
            return None

        if pending_placeholders:
            span = query_tokens[search_from:matched_index - len(fixed_tokens) + 1]
            assigned = allocate_span(pending_placeholders, span)
            if assigned is None:
                return None
            result.update(assigned)
            pending_placeholders = []

        search_from = matched_index + 1
        idx += 1

    if pending_placeholders:
        assigned = allocate_span(pending_placeholders, query_tokens[search_from:])
        if assigned is None:
            return None
        result.update(assigned)

    if not result:
        return None

    result = repair_count_variables(result)
    result = {key: value for key, value in result.items() if value is not None}
    return result or None


def find_weighted_template_match(voice_commands, client_text, min_score=3.5, keep_stopword_vars=None):
    best_template = None
    best_score = float("-inf")

    for template_text in voice_commands or []:
        if not template_text or "${" not in str(template_text):
            continue

        current_score = score_template_fixed_tokens(client_text, str(template_text))
        if current_score > best_score:
            best_score = current_score
            best_template = str(template_text)

    if not best_template or best_score < min_score:
        return None

    return extract_template_variables(
        best_template,
        client_text,
        keep_stopword_vars=keep_stopword_vars,
    )


def collect_all_type_template_vars(node):
    result = set()
    direct_items = (node or {}).get("direct") or []
    for direct_item in direct_items:
        if not isinstance(direct_item, dict):
            continue
        type_data = str(direct_item.get("valueType") or "").strip().lower()
        if type_data != "all":
            continue
        direct_type = str(direct_item.get("mappingType") or "").strip()
        if not direct_type:
            continue
        result.add(direct_type.lower())
        result.add(_direct_type_to_var_name(direct_type).lower())
    return result


def find_matching_subcommand(node, client_text, sub_command, error_branch=False):
    children_list = build_child_candidates(node, sub_command, error_branch=error_branch)
    return find_matching_node_by_voice_command(children_list, client_text)


def match_template_command(voice_commands, client_text, require_fixed_start=False, keep_stopword_vars=None):
    # Сортируем шаблоны по специфичности: сначала более специфичные (со множеством фиксированных частей)
    def get_template_specificity(cmd):
        if not cmd or "${" not in str(cmd):
            return (0, 0)  # Без переменных - не специфичные
        parts = split_template_parts(str(cmd))
        # Считаем количество фиксированных токенов - чем больше, тем более специфичный
        fixed_token_count = sum(len(value) if kind == "fixed" else 0 for kind, value in parts)
        var_count = sum(1 for kind, _ in parts if kind == "value")
        return (fixed_token_count, var_count)
    
    # Сортируем: сначала по количеству фиксированных токенов (убывание), потом по количеству переменных (убывание)
    sorted_commands = sorted(voice_commands or [], key=lambda cmd: get_template_specificity(cmd), reverse=True)
    
    for raw in sorted_commands:
        raw = (raw or "").lower()
        if "${" not in raw:
            continue

        template_vars = extract_template_variables(raw, client_text, keep_stopword_vars=keep_stopword_vars)
        if template_vars is None:
            continue

        if client_text:
            fixed_tokens = template_to_fixed_tokens(raw)
            if fixed_tokens:
                query_tokens = tokenize_command_text(client_text)
                search_from = 0
                matched = True
                first_match_index = None
                for fixed_token in fixed_tokens:
                    matched_index = None
                    for idx in range(search_from, len(query_tokens)):
                        if match_tokens_soft(query_tokens[idx], fixed_token):
                            matched_index = idx
                            break
                    if matched_index is None:
                        matched = False
                        break
                    if first_match_index is None:
                        first_match_index = matched_index
                    search_from = matched_index + 1
                if not matched:
                    continue
                if require_fixed_start and (first_match_index is None or first_match_index > 0):
                    continue

        return template_vars

    return None


def _direct_tokens_match(source_token, target_token):
    if source_token == target_token:
        return True

    min_len = min(len(source_token), len(target_token))
    if min_len >= 3 and (
        source_token.startswith(target_token)
        or target_token.startswith(source_token)
    ):
        return True

    min_len = min(len(source_token), len(target_token))
    if min_len >= 4 and source_token[:4] == target_token[:4]:
        return True

    return False


def matches_direct_command(value_text, command_text):
    value_text = normalize_direct_control_text(value_text)
    command_text = normalize_direct_control_text(command_text)
    if not value_text or not command_text:
        return False

    if voice_command_matches(command_text, value_text, partial=False):
        return True

    value_tokens = tokenize_command_text(value_text)
    command_tokens = tokenize_command_text(command_text)
    if not value_tokens or not command_tokens:
        return False

    for start_idx in range(len(value_tokens)):
        matched = True
        for offset, command_token in enumerate(command_tokens):
            source_idx = start_idx + offset
            if source_idx >= len(value_tokens):
                matched = False
                break
            if not _direct_tokens_match(value_tokens[source_idx], command_token):
                matched = False
                break
        if matched:
            return True

    return False


def find_direct_match(direct_list, value_text):
    if not value_text:
        return []

    value_text = normalize_direct_control_text(value_text)
    matched = []
    for item in direct_list or []:
        commands = normalize_direct_control_commands(item)
        if any(matches_direct_command(value_text, cmd) for cmd in commands):
            matched.append(item)

    return matched


def find_sub_direct_match(sub_list, value_text, main_list=None):
    if not value_text:
        return []

    value_text = normalize_direct_control_text(value_text)
    matched = []

    for item in sub_list or []:
        commands = normalize_direct_control_commands(item.get('subVoiceCommands'))

        # формируем полные фразы
        if main_list:
            phrases = [f"{m} {c}" for m in main_list for c in commands]
        else:
            phrases = commands

        if any(matches_direct_command(value_text, phrase) for phrase in phrases):
            matched.append(item)

    return matched


def _direct_type_to_var_name(direct_type):
    value = str(direct_type or "").strip().lower()
    value = value.lstrip("_")
    value = re.sub(r"[^a-zа-я0-9]+", "_", value)
    return value.strip("_") or "value"


def resolve_direct_types(direct_items, direct_value, source_name=None):
    direct_children_types = []
    direct_entry = {}

    for direct_item in direct_items or []:
        direct_mapping_type = direct_item.get("mappingType")
        direct_value_type = direct_item.get("valueType")
        sub_mapping_type = None

        if(direct_mapping_type and source_name != direct_mapping_type):
            continue

        sanitized_direct_value = sanitize_by_type_data(direct_value, direct_item.get("valueType"))
        if sanitized_direct_value is None:
                    continue 

        if direct_value_type == 'command':
            main_list = direct_item.get("voiceCommands")
            sub_list = direct_item.get("subDirectControl")

            if main_list and not sub_list:
                item = find_direct_match(main_list, direct_value)
                if not item:
                    continue

            if sub_list:
                #возвращает совпадение
                sub_items = find_sub_direct_match(sub_list, direct_value, main_list)
                if not sub_items:
                    continue
                sub_types = []
                for sub_item in sub_items:
                    sub_type = sub_item.get("subMappingType") or sub_item.get("mappingType")
                    if not sub_type:
                        continue
                    if isinstance(sub_type, list):
                        direct_children_types.extend(sub_type)
                        sub_types.extend(sub_type)
                    else:
                        direct_children_types.append(sub_type)
                        sub_types.append(sub_type)
                if sub_types:
                    sub_mapping_type = list(dict.fromkeys(sub_types))

        direct_entry = {
                "valueType": direct_value_type,
                "mapping_type": direct_mapping_type,
                "value": sanitized_direct_value,
                **({"sub_mapping_type": sub_mapping_type} if sub_mapping_type is not None else {})
            }
         
    return direct_entry


def attach_direct_controls(nodes, sub_direct_by_uuid):
    for node in nodes:
        next_direct = node.get("nextDirectControl") or []
        if not next_direct:
            continue

        direct_items = []
        for link in next_direct:
            link_uuid = link.get("uuid")
            if not link_uuid:
                continue
            direct_item = sub_direct_by_uuid.get(link_uuid)
            if direct_item:
                direct_items.append(direct_item)

        if direct_items:
            node["direct"] = direct_items


def is_slot(t):
    return t.startswith("${") and t.endswith("}")


def slot_name(t):
    return t[2:-1]


def is_regex(t):
    return bool(re.search(r"[()|?*]", t))


def regex_match(p, w):
    return re.fullmatch(p, w) is not None


def starts_new_command(word, all_cmds):
    for cmd in all_cmds:
        if not cmd:
            continue
        first = cmd[0]
        if is_regex(first):
            if regex_match(first, word):
                return True
        else:
            if first == word:
                return True
    return False


def flatten_commands(nodes):
    cmds = []
    for node in nodes:
        for cmd in node.get("voiceCommands", []):
            for v in str(cmd).split(";"):
                tokens = tokenize_template(v)
                if tokens:
                    cmds.append(tokens)
    return cmds

def match_token(token, current_word):
    if is_regex(token):
        return regex_match(token, current_word)
        
    if len(current_word) <= 3:
        return token == current_word
    else:
        return token.startswith(current_word)

def match_stream(template_tokens, text_tokens, all_cmds):
    # Precompute first tokens for efficient checking
    first_tokens = set()
    regex_firsts = []

    for cmd in all_cmds:
        if cmd:
            first = cmd[0]
            if is_regex(first):
                regex_firsts.append(first)
            else:
                first_tokens.add(first)

    def looks_like_command(start_index):
        """
        Проверяем:
        является ли текст начиная с start_index
        полноценной командой, а не просто словом
        """
        remaining = text_tokens[start_index:]

        for cmd in all_cmds:
            ci = 0
            si2 = 0
            started2 = False

            while ci < len(cmd) and si2 < len(remaining):
                cmd_token = cmd[ci]
                text_token = remaining[si2]

                if is_slot(cmd_token):
                    # слот считаем за матч одного слова
                    ci += 1
                    si2 += 1
                    started2 = True
                    continue

                if is_regex(cmd_token):
                    if regex_match(cmd_token, text_token):
                        ci += 1
                        si2 += 1
                        started2 = True
                        continue

                    if not started2:
                        break

                    break

                if match_token(cmd_token, text_token):
                    ci += 1
                    si2 += 1
                    started2 = True
                    continue

                break

            # ВАЖНО:
            # считаем команду валидной
            # только если сматчили ВСЕ фиксированные токены
            if ci == len(cmd):
                return True

        return False


    ti = 0
    si = 0
    vars_list = []
    remaining_tokens = []
    started = False

    while ti < len(template_tokens):
        if si >= len(text_tokens) and not is_slot(template_tokens[ti]):
            return None

        token = template_tokens[ti]

        if is_slot(token):
            placeholder_name = slot_name(token)
            vars_list.append(placeholder_name)

            next_fixed = None

            for k in range(ti + 1, len(template_tokens)):
                if not is_slot(template_tokens[k]):
                    next_fixed = template_tokens[k]
                    break

            # слот в конце шаблона
            if next_fixed is None:
                tail_tokens = []

                while si < len(text_tokens):
                    current = text_tokens[si]

                    is_candidate = (
                        current in first_tokens or
                        any(regex_match(r, current) for r in regex_firsts)
                    )

                    # если это потенциальная команда —
                    # проверяем реально ли она матчится
                    if is_candidate and looks_like_command(si):
                        break

                    tail_tokens.append(current)
                    si += 1

                remaining_tokens.extend(tail_tokens)

                ti += 1
                continue

            span_tokens = []
            first_pass = True

            while si < len(text_tokens):
                current = text_tokens[si]

                if first_pass:
                    first_pass = False

                elif is_regex(next_fixed):
                    if regex_match(next_fixed, current):
                        break

                else:
                    if current == next_fixed:
                        break

                span_tokens.append(current)
                si += 1

            if si >= len(text_tokens):
                return None

            remaining_tokens.extend(span_tokens)

            ti += 1
            continue

        current_word = text_tokens[si]

        match = match_token(token, current_word)

        if is_regex(token):
            if regex_match(token, current_word):
                started = True
                ti += 1
                si += 1
                continue

            if not started:
                si += 1
                continue

            return None

        if match:
            started = True
            ti += 1
            si += 1
            continue

        if not started:
            si += 1
            continue

        return None

    return {
        "vars": vars_list,
        "remaining": remaining_tokens
    }

def normalize_text_tokens(text_tokens, template_tokens):
    template_has_stop_tokens = any(
        token in STOP_TOKENS for token in template_tokens
    )

    if template_has_stop_tokens:
        return text_tokens

    return [t for t in text_tokens if t not in STOP_TOKENS]

def find_top_level_candidates(top_level_nodes, client_text):
    # Разбиваем клиентский текст на массив слов для поиска команд
    # Пример: "насыпь 20 грамм еды и запусти пылесос" -> ["насыпь", "20", "грамм", "еды", "и", "запусти", "пылесос"]
    text_tokens = tokenize_text(client_text)
    all_cmds = flatten_commands(top_level_nodes)
    results = []

    for node in top_level_nodes:
        node_copy = copy.deepcopy(node)
        all_matches = []  # List of (score, match_dict)
        best_score = float("-inf")

        for cmd in node_copy.get("voiceCommands", []) or []:
            for variant in [variant.strip() for variant in str(cmd).split(";") if variant.strip()]:
                template_tokens = tokenize_template(variant)
                new_text_tokens = normalize_text_tokens(text_tokens, template_tokens)
                match = match_stream(template_tokens, new_text_tokens, all_cmds)
                if match is None:
                    continue

                # Important: if vars is not empty but remaining is empty, skip this variant
                if match.get("vars") and not match.get("remaining"):
                    continue

                fixed = sum(1 for token in template_tokens if not is_slot(token) and not is_regex(token))
                regex = sum(1 for token in template_tokens if is_regex(token))
                slots = sum(1 for token in template_tokens if is_slot(token))
                score = fixed * 10 + regex * 20 + slots * 5

                all_matches.append((score, match))
                if score > best_score:
                    best_score = score

        if all_matches:
            # Find all matches with the best score
            best_matches = [m for s, m in all_matches if s == best_score]
            
            if best_matches:
                # Sort by remaining count (descending) to pick the one with most remaining
                best_matches.sort(key=lambda m: len(m.get("remaining", [])), reverse=True)
                best_primary = best_matches[0]
                best_remaining = tuple(best_primary.get("remaining", []))
                
                # Combine all vars from matches with same score and same remaining
                combined_vars = []
                for match in best_matches:
                    if tuple(match.get("remaining", [])) == best_remaining:
                        combined_vars.extend(match.get("vars", []))
                
                # Remove duplicates while preserving order
                seen = set()
                combined_vars = [v for v in combined_vars if not (v in seen or seen.add(v))]
                
                best_vars = {
                    "vars": combined_vars,
                    "remaining": list(best_remaining)
                }
                
                clean_vars = {k: v for k, v in best_vars.items() if v not in (None, "")}
                templateVar = True if clean_vars.get('vars') else False
                
                if templateVar:
                    direct_entries = search_direct_entries(node_copy, clean_vars)
                    if direct_entries :
                        node_copy["direct_entries"] = direct_entries
                        node_copy["template_var"] = templateVar
                results.append(node_copy)

    return apply_main_command(results)

def search_direct_entries(node, vars):
    result = []
    var = vars.get("vars", [])
    remaining = " ".join(vars.get("remaining", []))
    node_direct = node.get("direct", [])
    for i in var:
        direct_entries = resolve_direct_types(node_direct, remaining, i)
        if direct_entries:
            result.append(direct_entries)

    return result


def _is_external_service_answer_type(answer_type):
    return str(answer_type or "").strip().lower() in {"ha_storage", "ha", "external", "redis"}


def apply_main_command(nodes):
    if not nodes:
        return nodes

    # =========================
    # 1. PRIORITY 0: default + nextAction
    # =========================
    def is_high_priority_default(n):
        return (
            n.get("answerType") == "default"
            and bool(n.get("nextAction"))
            and not n.get('template_var')
        )

    default_priority_nodes = [
        n for n in nodes if is_high_priority_default(n)
    ]

    if default_priority_nodes:
        # первый default + nextAction = главный
        for n in nodes:
            n["execution_command"] = False

        default_priority_nodes[0]["execution_command"] = True
        return nodes

    # =========================
    # 2. ищем внешнюю HA-обработку
    # =========================
    external_nodes = [n for n in nodes if _is_external_service_answer_type(n.get("answerType"))]

    # =========================
    # 3. если внешней HA-обработки НЕТ → первый = main
    # =========================
    if not external_nodes:
        for n in nodes:
            n["execution_command"] = False

        nodes[0]["execution_command"] = True
        return nodes

    # =========================
    # 4. выбираем лучшую внешнюю HA-обработку
    # =========================
    def external_priority(n):
        template_var = n.get("template_var") or False

        # 🥇 внешняя обработка без templateVar
        if not template_var:
            return 2
        return 1

    best_node = None
    best_priority = -1

    for node in external_nodes:
        priority = external_priority(node)

        if priority > best_priority:
            best_priority = priority
            best_node = node

    # =========================
    # 5. назначаем execution_command
    # =========================
    for n in nodes:
        n["execution_command"] = False

    if best_node:
        best_node["execution_command"] = True

    return nodes
