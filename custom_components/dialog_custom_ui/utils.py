from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.components import websocket_api


from .const import DOMAIN
from .normalize import (
    _normalize_value,
    _normalize_device_ids
)

_FALLBACK_TIMER_MEDIA_CONTENT_ID = "timer-alarm.mp3"


def _get_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None


def _get_manager(hass: HomeAssistant, entry: ConfigEntry) -> Any | None:
    """Попытаться извлечь объект менеджера таймеров/будильников из координатора.

    Проверяет наличие необходимых методов и возвращает менеджер только
    если он удовлетворяет интерфейсу.
    """
    coordinator = hass.data.get(DOMAIN, {}).get(entry.entry_id)
    manager = getattr(coordinator, "timer_alarm_manager", None)
    if manager is None:
        return None
    required_attrs = (
        "get_items",
        "get_active_items",
        "get_alarm_presets",
        "async_apply_ui_items",
        "serialize_persisted_items",
    )
    return manager if all(hasattr(manager, attr) for attr in required_attrs) else None

def _get_options(entry: ConfigEntry, settings: dict[str, Any] | None = None) -> dict[str, Any]:
    stored = dict(entry.options)
    settings = settings or {}
    remote = settings.get("remout") if isinstance(settings.get("remout"), dict) else {}
    timer_alarm = settings.get("timer_alarm") if isinstance(settings.get("timer_alarm"), dict) else {}
    active_remote = bool(settings.get("active_remout"))
    timer_music = _normalize_value(timer_alarm.get("global_music_timer"))
    alarm_music = _normalize_value(timer_alarm.get("global_music_alarm"))
    default_music = timer_music or alarm_music or _FALLBACK_TIMER_MEDIA_CONTENT_ID

    return {
        "base_url": _normalize_value(remote.get("base_url")) if active_remote else "",
        "client_id": _normalize_value(settings.get("client_id")),
        "external_event_bridge_enabled": active_remote,
        "remote_active_search_enabled": active_remote,
        "remote_token": _normalize_value(remote.get("token")),
        "api_commands_enabled": bool(settings.get("api_commands_enabled")),
        "api_commands_token": _normalize_value(settings.get("api_commands_token")),
        "timeout": 10,
        "timer_alarm_items": list(stored.get("timer_alarm_items", [])),
        "timer_alarm_presets": list(stored.get("timer_alarm_presets", [])),
        "timer_alarm_device_ids": _normalize_device_ids(stored.get("timer_alarm_device_ids", [])),
        "timer_alarm_media_content_id": default_music,
        "timer_music": timer_music or default_music,
        "alarm_music": alarm_music or default_music,
    }

def _safe_float(value: Any, default: float) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return default
    
def _get_str(
    data: dict,
    key: str,
    fallback: str = "",
) -> str:
    return str(data.get(key, fallback)).strip()


def _clean_string(value: Any, default: str = "") -> str:
    return str(value or "").strip() or default

def _extract_count(payload: dict[str, Any]) -> int | None:
    """Попытаться извлечь числовой счётчик (count) из `children_direct_type`.

    Возвращает целое >0 или None.
    """
    direct_values = payload.get("children_direct_type")
    if isinstance(direct_values, dict):
        direct_values = [direct_values]
    if isinstance(direct_values, (list, tuple)):
        for item in direct_values:
            if not isinstance(item, dict):
                continue
            mapping_type = _normalize_value(item.get("mapping_type")).lower()
            if mapping_type not in {"count"}:
                continue
            value = item.get("value")
            if value > 0:
                return value
    return None

def _get_authorized_entry(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> ConfigEntry | None:
    entry = _get_entry(hass)

    if entry is None:
        connection.send_error(
            msg["id"],
            "not_configured",
            "Integration entry not found",
        )
        return None

    is_admin = bool(getattr(connection.user, "is_admin", False))

    if (
        not is_admin
        and not entry.options.get("allow_non_admin_panel", True)
    ):
        connection.send_error(
            msg["id"],
            "unauthorized",
            "Access denied",
        )
        return None

    return entry