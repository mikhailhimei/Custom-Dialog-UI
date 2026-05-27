from collections.abc import Iterable
from typing import Any
from .const import (
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_CHILDREN_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_REDIS_PASSWORD,
    CONF_REDIS_URL,
    CONF_SCENARIOS,
    CONF_TIMEOUT,
    CONF_TIMER_ALARM_ITEMS,
    CONF_TIMER_ALARM_PRESETS,
    CONF_TIMER_ALARM_TOKEN,
    DEFAULT_BASE_URL,
    DEFAULT_REDIS_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    UPDATE_INTERVAL_SECONDS,
    ATTR_SCENARIO_ID
)

from .utils import (
    _clean_string
)


def _normalize_value(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()

def _normalize_values(value: Any) -> list[str]:
    if value is None:
        return []

    # если строка — НЕ считаем iterable
    if isinstance(value, str):
        value = [value]
    elif not isinstance(value, Iterable):
        value = [value]

    result: list[str] = []

    for item in value:
        if item is None:
            continue
        normalized = str(item).strip()
        if normalized:
            result.append(normalized)

    return result

def _normalize_str_list(value: Any) -> list[str]:
    if isinstance(value, list):
        values = value
    elif value is None:
        values = []
    else:
        values = [value]
    return [str(item).strip() for item in values if str(item).strip()]

def _normalize_children_direct_type_values(value: Any) -> list[str]:
    if value is None:
        return []
    if isinstance(value, dict):
        values: list[Any] = [value]
    elif isinstance(value, (list, tuple, set)):
        values = list(value)
    else:
        values = [value]

    normalized_values: list[str] = []
    for item in values:
        if isinstance(item, dict):
            candidates = [item.get("type"), item.get("mapping_type"), item.get("mappingType")]
            value_payload = item.get("value")
            if isinstance(value_payload, dict):
                candidates.extend(value_payload.keys())
            for candidate in candidates:
                normalized = _normalize_value(candidate)
                if normalized:
                    normalized_values.append(normalized)
        else:
            normalized = _normalize_value(item)
            if normalized:
                normalized_values.append(normalized)
    return normalized_values

def _describe_payload_type(value: Any) -> str:
    values = _normalize_values(value)
    if not values:
        return "<empty>"
    if len(values) == 1:
        return values[0]
    return "[" + ", ".join(values) + "]"


def _normalize_condition(condition: dict[str, Any]) -> dict[str, str] | None:
    parent_type = _normalize_value(condition.get(ATTR_PARENT_TYPE))
    children_type = _normalize_value(condition.get(ATTR_CHILDREN_TYPE) or condition.get("type"))
    children_direct_type = _normalize_value(condition.get(ATTR_CHILDREN_DIRECT_TYPE))
    if not parent_type and not children_type and not children_direct_type:
        return None
    normalized = {ATTR_PARENT_TYPE: parent_type}
    if children_type:
        normalized[ATTR_CHILDREN_TYPE] = children_type
    if children_direct_type:
        normalized[ATTR_CHILDREN_DIRECT_TYPE] = children_direct_type
    return normalized


def _normalize_legacy_conditions(scenario: dict[str, Any]) -> list[dict[str, str]]:
    parent_values = [part.strip() for part in _normalize_value(scenario.get(ATTR_PARENT_TYPE)).split(";")]
    children_values = [part.strip() for part in _normalize_value(scenario.get(ATTR_CHILDREN_TYPE) or scenario.get("type")).split(";")]
    direct_values = [part.strip() for part in _normalize_value(scenario.get(ATTR_CHILDREN_DIRECT_TYPE)).split(";")]
    max_length = max(len(parent_values), len(children_values), len(direct_values), 1)
    conditions: list[dict[str, str]] = []
    for index in range(max_length):
        condition = _normalize_condition(
            {
                ATTR_PARENT_TYPE: parent_values[index] if index < len(parent_values) else "",
                ATTR_CHILDREN_TYPE: children_values[index] if index < len(children_values) else "",
                ATTR_CHILDREN_DIRECT_TYPE: direct_values[index] if index < len(direct_values) else "",
            }
        )
        if condition:
            conditions.append(condition)
    return conditions


def _normalize_scenario(item: dict[str, Any]) -> dict[str, Any]:
    scenario = {
        ATTR_SCENARIO_ID: item[ATTR_SCENARIO_ID].strip(),
        "name": item["name"].strip(),
        ATTR_SCRIPT_ENTITY_ID: item[ATTR_SCRIPT_ENTITY_ID].strip(),
    }

    conditions = [
        normalized
        for condition in item.get("conditions", [])
        if isinstance(condition, dict)
        if (normalized := _normalize_condition(condition))
    ]

    if not conditions:
        conditions = _normalize_legacy_conditions(item)

    if conditions:
        scenario["conditions"] = conditions

    return scenario
    
def _normalize_device_ids(value: Any) -> list[str]:
    if isinstance(value, str):
        value = [value]
    if not isinstance(value, list):
        return []
    return [device_id.strip() for device_id in value if device_id.strip()]

def _normalize_theme(value: Any) -> str:
    return "dark" if _clean_string(value).lower() == "dark" else "light"
