from typing import Any
from .utils import _normalize_value
from .normalize import (
    _normalize_condition,
    _normalize_legacy_conditions,
)
from .matches import _matches_expected_value
from .const import (
    ATTR_PARENT_TYPE,
    ATTR_CHILDREN_TYPE,
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_SCRIPT_ENTITY_ID,
)

def match_scenario(payload: dict[str, Any], scenarios: list[dict[str, Any]]) -> dict | None:
    for scenario in scenarios:
        if _scenario_matches(payload, scenario):
            return scenario
    return None


def _scenario_matches(payload: dict, scenario: dict) -> bool:
    conditions = _get_conditions(scenario)
    if not conditions:
        return False

    for cond in conditions:
        if _match_condition(payload, cond):
            return True

    return False


def _get_conditions(scenario: dict) -> list[dict]:
    raw = scenario.get("conditions")
    if isinstance(raw, list):
        return [condition for x in raw if isinstance(x, dict) if (condition := _normalize_condition(x))] or []

    return _normalize_legacy_conditions(scenario)


def _match_condition(payload: dict, cond: dict) -> bool:
    parent = _normalize_value(cond.get(ATTR_PARENT_TYPE))
    child = _normalize_value(cond.get(ATTR_CHILDREN_TYPE))
    direct = _normalize_value(cond.get(ATTR_CHILDREN_DIRECT_TYPE))

    if parent and not _matches_expected_value(parent, payload.get("parent_type")):
        return False

    if child and not _matches_expected_value(child, payload.get("children_type")):
        return False

    if direct:
        from .normalize import _normalize_children_direct_type_values
        vals = _normalize_children_direct_type_values(payload.get(ATTR_CHILDREN_DIRECT_TYPE))
        if not any(_matches_expected_value(direct, value) for value in vals):
            return False

    return True