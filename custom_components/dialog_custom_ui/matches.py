from typing import Any

from .normalize import (
    _normalize_values
)

def _matches_expected_value(expected_value: str, incoming_value: Any) -> bool:
    if not expected_value:
        return True
    allowed_values = [part.strip() for part in expected_value.split(";") if part.strip()]
    if not allowed_values:
        return not _normalize_values(incoming_value)
    return any(value in allowed_values for value in _normalize_values(incoming_value))