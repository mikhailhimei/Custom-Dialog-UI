from typing import Any

from homeassistant.components import websocket_api
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util

from .const import (
       ATTR_CHILDREN_TYPE,
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCENARIO_ID,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_BASE_URL,
    CONF_ALLOW_NON_ADMIN_PANEL,
    CONF_CLIENT_ID,
    CONF_REDIS_PASSWORD,
    CONF_REDIS_URL,
    CONF_SCENARIOS,
    CONF_THEME,
    CONF_TIMER_ALARM_DEVICE_IDS,
    CONF_TIMER_ALARM_ITEMS,
    CONF_TIMER_ALARM_MEDIA_CONTENT_ID,
    CONF_TIMER_ALARM_PRESETS,
    CONF_TIMER_ALARM_TOKEN,
    CONF_VOICE_AGENT_IP,
    CONF_VOICE_AGENT_USER_ID,
    CONF_YANDEX_TTS_API_KEY,
    CONF_YANDEX_TTS_FOLDER_ID,
    CONF_YANDEX_TTS_LANG,
    CONF_YANDEX_TTS_CODEC,
    CONF_YANDEX_TTS_VOICE,
    CONF_YANDEX_TTS_EMOTION,
    CONF_YANDEX_TTS_SPEED,
    DEFAULT_BASE_URL,
    DEFAULT_REDIS_URL,
    DEFAULT_THEME,
    DEFAULT_YANDEX_TTS_LANG,
    DEFAULT_YANDEX_TTS_CODEC,
    DEFAULT_YANDEX_TTS_VOICE,
    DEFAULT_YANDEX_TTS_EMOTION,
    DEFAULT_YANDEX_TTS_SPEED,
    DOMAIN,
    WS_EXPORT_YANDEX_TTS_FILES,
    WS_GET_CONFIG,
    WS_GET_LOGS,
    WS_GET_YANDEX_SCENARIOS,
    WS_IMPORT_YANDEX_TTS_FILES,
    WS_SAVE_CONFIG,
    WS_SAVE_YANDEX_SCENARIOS,
    CONF_TIMEOUT,
    DEFAULT_TIMEOUT
)

from .normalize import (
    _normalize_value,
    _normalize_device_ids
)

_DEFAULT_TIMER_MEDIA_CONTENT_ID = "media-source://media_source/local/morning-meadow-birdsongs-looping_zyb7nhnu.mp3"


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

def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, ""),
        CONF_REDIS_URL: stored.get(CONF_REDIS_URL, DEFAULT_REDIS_URL),
        CONF_REDIS_PASSWORD: stored.get(CONF_REDIS_PASSWORD, ""),
        CONF_TIMER_ALARM_TOKEN: stored.get(CONF_TIMER_ALARM_TOKEN, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        CONF_SCENARIOS: list(stored.get(CONF_SCENARIOS, [])),
        CONF_TIMER_ALARM_ITEMS: list(stored.get(CONF_TIMER_ALARM_ITEMS, [])),
        CONF_TIMER_ALARM_PRESETS: list(stored.get(CONF_TIMER_ALARM_PRESETS, [])),
        CONF_TIMER_ALARM_DEVICE_IDS: _normalize_device_ids(stored.get(CONF_TIMER_ALARM_DEVICE_IDS, [])),
        CONF_TIMER_ALARM_MEDIA_CONTENT_ID: _normalize_value(
            stored.get(CONF_TIMER_ALARM_MEDIA_CONTENT_ID, _DEFAULT_TIMER_MEDIA_CONTENT_ID)
        )
        or _DEFAULT_TIMER_MEDIA_CONTENT_ID,
        
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

