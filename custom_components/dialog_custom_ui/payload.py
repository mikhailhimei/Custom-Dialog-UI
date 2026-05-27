from typing import Any

def unwrap_payload(raw: Any) -> Any | None:
    if isinstance(raw, dict) and raw.get("status") is False:
        return None
    return raw


def normalize_payload(raw: Any) -> list[dict]:
    if isinstance(raw, list):
        return [x for x in raw if isinstance(x, dict)]
    if isinstance(raw, dict):
        return [raw]
    return []