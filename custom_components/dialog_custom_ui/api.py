"""Websocket API for Dialog Custom UI."""

from __future__ import annotations

from pathlib import Path
from typing import Any
import uuid

import voluptuous as vol
import yaml

from homeassistant.components import websocket_api
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import (
    ATTR_CHILDREN_TYPE,
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCENARIO_ID,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_BASE_URL,
    CONF_ALLOW_NON_ADMIN_PANEL,
    CONF_CLIENT_ID,
    CONF_SCENARIOS,
    CONF_THEME,
    CONF_TIMEOUT,
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
    DEFAULT_TIMEOUT,
    DEFAULT_THEME,
    DEFAULT_YANDEX_TTS_LANG,
    DEFAULT_YANDEX_TTS_CODEC,
    DEFAULT_YANDEX_TTS_VOICE,
    DEFAULT_YANDEX_TTS_EMOTION,
    DEFAULT_YANDEX_TTS_SPEED,
    DOMAIN,
    WS_GET_CONFIG,
    WS_GET_LOGS,
    WS_GET_YANDEX_SCENARIOS,
    WS_SAVE_CONFIG,
    WS_SAVE_YANDEX_SCENARIOS,
)

_YANDEX_INTENTS_PATH = Path("/homeassistant/yandex_intents.yaml")


def async_register_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_config)
    websocket_api.async_register_command(hass, _ws_save_config)
    websocket_api.async_register_command(hass, _ws_get_logs)
    websocket_api.async_register_command(hass, _ws_get_yandex_scenarios)
    websocket_api.async_register_command(hass, _ws_save_yandex_scenarios)


def _safe_float(value: Any, default: float) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


@websocket_api.websocket_command({vol.Required("type"): WS_GET_CONFIG})
@websocket_api.async_response
async def _ws_get_config(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    is_admin = bool(getattr(connection.user, "is_admin", False))
    result = {
        "base_url": entry.options.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        "allow_non_admin_panel": bool(entry.options.get(CONF_ALLOW_NON_ADMIN_PANEL, False)),
        "client_id": entry.options.get(CONF_CLIENT_ID, ""),
        "timer_alarm_token": entry.options.get(CONF_TIMER_ALARM_TOKEN, ""),
        "voice_agent_ip": entry.options.get(CONF_VOICE_AGENT_IP, ""),
        "voice_agent_user_id": entry.options.get(CONF_VOICE_AGENT_USER_ID, ""),
        "yandex_tts_api_key": entry.options.get(CONF_YANDEX_TTS_API_KEY, ""),
        "yandex_tts_folder_id": entry.options.get(CONF_YANDEX_TTS_FOLDER_ID, ""),
        "yandex_tts_lang": entry.options.get(CONF_YANDEX_TTS_LANG, DEFAULT_YANDEX_TTS_LANG),
        "yandex_tts_codec": entry.options.get(CONF_YANDEX_TTS_CODEC, DEFAULT_YANDEX_TTS_CODEC),
        "yandex_tts_voice": entry.options.get(CONF_YANDEX_TTS_VOICE, DEFAULT_YANDEX_TTS_VOICE),
        "yandex_tts_emotion": entry.options.get(CONF_YANDEX_TTS_EMOTION, DEFAULT_YANDEX_TTS_EMOTION),
        "yandex_tts_speed": _safe_float(
            entry.options.get(CONF_YANDEX_TTS_SPEED, DEFAULT_YANDEX_TTS_SPEED),
            DEFAULT_YANDEX_TTS_SPEED,
        ),
        "theme": _normalize_theme(entry.options.get(CONF_THEME, DEFAULT_THEME)),
        "timeout": int(entry.options.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        "timer_alarm_device_ids": _normalize_device_ids(
            entry.options.get(CONF_TIMER_ALARM_DEVICE_IDS, [])
        ),
        "scenarios": list(entry.options.get(CONF_SCENARIOS, [])),
    }

    allow_non_admin_panel = bool(result.get("allow_non_admin_panel", False))
    if not is_admin and not allow_non_admin_panel:
        connection.send_error(
            msg["id"],
            "unauthorized",
            "Access denied. Ask administrator to enable non-admin panel access in Settings.",
        )
        return

    connection.send_result(msg["id"], result)


@websocket_api.websocket_command({vol.Required("type"): WS_GET_LOGS})
@websocket_api.async_response
async def _ws_get_logs(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    logs = list(hass.data.get(DOMAIN, {}).get("logs", []))
    connection.send_result(msg["id"], {"logs": logs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SAVE_CONFIG,
        vol.Required(CONF_BASE_URL): str,
        vol.Required(CONF_CLIENT_ID): str,
        vol.Optional(CONF_ALLOW_NON_ADMIN_PANEL, default=False): bool,
        vol.Optional(CONF_TIMER_ALARM_TOKEN, default=""): str,
        vol.Optional(CONF_THEME, default=DEFAULT_THEME): str,
        vol.Optional(CONF_VOICE_AGENT_IP, default=""): str,
        vol.Optional(CONF_VOICE_AGENT_USER_ID, default=""): str,
        vol.Optional(CONF_YANDEX_TTS_API_KEY): str,
        vol.Optional(CONF_YANDEX_TTS_FOLDER_ID): str,
        vol.Optional(CONF_YANDEX_TTS_LANG): str,
        vol.Optional(CONF_YANDEX_TTS_CODEC): str,
        vol.Optional(CONF_YANDEX_TTS_VOICE): str,
        vol.Optional(CONF_YANDEX_TTS_EMOTION): str,
        vol.Optional(CONF_YANDEX_TTS_SPEED): vol.Any(int, float),
        vol.Required(CONF_TIMEOUT): vol.Any(int, float),
        vol.Optional(CONF_TIMER_ALARM_DEVICE_IDS, default=[]): [str],
        vol.Required(CONF_SCENARIOS): [
            {
                vol.Required(ATTR_SCENARIO_ID): str,
                vol.Required("name"): str,
                vol.Optional("conditions"): [
                    {
                        vol.Optional(ATTR_PARENT_TYPE, default=""): str,
                        vol.Optional(ATTR_CHILDREN_TYPE, default=""): str,
                        vol.Optional(ATTR_CHILDREN_DIRECT_TYPE, default=""): str,
                    }
                ],
                vol.Optional(ATTR_CHILDREN_TYPE, default=""): str,
                vol.Optional(ATTR_CHILDREN_DIRECT_TYPE, default=""): str,
                vol.Optional(ATTR_PARENT_TYPE, default=""): str,
                vol.Required(ATTR_SCRIPT_ENTITY_ID): str,
            }
        ],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_config(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    scenarios = [_normalize_scenario(item) for item in msg[CONF_SCENARIOS]]
    previous_options = dict(entry.options)
    voice_agent_ip = msg.get(CONF_VOICE_AGENT_IP, "").strip() or previous_options.get(CONF_VOICE_AGENT_IP, "")
    voice_agent_user_id = msg.get(CONF_VOICE_AGENT_USER_ID, "").strip() or previous_options.get(CONF_VOICE_AGENT_USER_ID, "")
    yandex_tts_lang = str(
        msg.get(CONF_YANDEX_TTS_LANG, previous_options.get(CONF_YANDEX_TTS_LANG, DEFAULT_YANDEX_TTS_LANG))
    ).strip() or DEFAULT_YANDEX_TTS_LANG
    yandex_tts_codec = str(
        msg.get(CONF_YANDEX_TTS_CODEC, previous_options.get(CONF_YANDEX_TTS_CODEC, DEFAULT_YANDEX_TTS_CODEC))
    ).strip() or DEFAULT_YANDEX_TTS_CODEC
    yandex_tts_voice = str(
        msg.get(CONF_YANDEX_TTS_VOICE, previous_options.get(CONF_YANDEX_TTS_VOICE, DEFAULT_YANDEX_TTS_VOICE))
    ).strip() or DEFAULT_YANDEX_TTS_VOICE
    yandex_tts_emotion = str(
        msg.get(CONF_YANDEX_TTS_EMOTION, previous_options.get(CONF_YANDEX_TTS_EMOTION, DEFAULT_YANDEX_TTS_EMOTION))
    ).strip() or DEFAULT_YANDEX_TTS_EMOTION
    try:
        yandex_tts_speed = float(
            msg.get(CONF_YANDEX_TTS_SPEED, previous_options.get(CONF_YANDEX_TTS_SPEED, DEFAULT_YANDEX_TTS_SPEED))
        )
    except (TypeError, ValueError):
        yandex_tts_speed = DEFAULT_YANDEX_TTS_SPEED
    yandex_tts_speed = max(0.1, min(3.0, yandex_tts_speed))
    options = {
        CONF_BASE_URL: msg[CONF_BASE_URL].strip(),
        CONF_CLIENT_ID: msg[CONF_CLIENT_ID].strip(),
        CONF_ALLOW_NON_ADMIN_PANEL: bool(msg.get(CONF_ALLOW_NON_ADMIN_PANEL, False)),
        CONF_TIMER_ALARM_TOKEN: msg[CONF_TIMER_ALARM_TOKEN].strip(),
        CONF_THEME: _normalize_theme(msg.get(CONF_THEME, DEFAULT_THEME)),
        CONF_VOICE_AGENT_IP: voice_agent_ip,
        CONF_VOICE_AGENT_USER_ID: voice_agent_user_id,
        CONF_YANDEX_TTS_API_KEY: str(
            msg.get(CONF_YANDEX_TTS_API_KEY, previous_options.get(CONF_YANDEX_TTS_API_KEY, ""))
        ).strip(),
        CONF_YANDEX_TTS_FOLDER_ID: str(
            msg.get(CONF_YANDEX_TTS_FOLDER_ID, previous_options.get(CONF_YANDEX_TTS_FOLDER_ID, ""))
        ).strip(),
        CONF_YANDEX_TTS_LANG: yandex_tts_lang,
        CONF_YANDEX_TTS_CODEC: yandex_tts_codec,
        CONF_YANDEX_TTS_VOICE: yandex_tts_voice,
        CONF_YANDEX_TTS_EMOTION: yandex_tts_emotion,
        CONF_YANDEX_TTS_SPEED: yandex_tts_speed,
        CONF_TIMEOUT: max(1, int(msg[CONF_TIMEOUT])),
        CONF_TIMER_ALARM_DEVICE_IDS: [
            device_id.strip()
            for device_id in msg[CONF_TIMER_ALARM_DEVICE_IDS]
            if device_id.strip()
        ],
        # Keep runtime timer/alarm state and learned presets when user saves main settings.
        CONF_TIMER_ALARM_ITEMS: list(previous_options.get(CONF_TIMER_ALARM_ITEMS, [])),
        CONF_TIMER_ALARM_PRESETS: list(previous_options.get(CONF_TIMER_ALARM_PRESETS, [])),
        CONF_TIMER_ALARM_MEDIA_CONTENT_ID: previous_options.get(CONF_TIMER_ALARM_MEDIA_CONTENT_ID, ""),
        CONF_SCENARIOS: scenarios,
    }

    hass.config_entries.async_update_entry(entry, options=options)
    coordinator = hass.data[DOMAIN][entry.entry_id]
    await coordinator.async_reload()
    connection.send_result(msg["id"], {"saved": True})


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
    return "dark" if str(value or "").strip().lower() == "dark" else "light"


def _normalize_condition(item: dict[str, Any]) -> dict[str, str] | None:
    parent_type = item.get(ATTR_PARENT_TYPE, "").strip()
    children_type = item.get(
        ATTR_CHILDREN_TYPE, item.get("actionType", item.get("type", ""))
    ).strip()
    children_direct_type = item.get(ATTR_CHILDREN_DIRECT_TYPE, "").strip()

    if not parent_type and not children_type and not children_direct_type:
        return None

    condition = {
        ATTR_PARENT_TYPE: parent_type,
    }
    if children_type:
        condition[ATTR_CHILDREN_TYPE] = children_type
    if children_direct_type:
        condition[ATTR_CHILDREN_DIRECT_TYPE] = children_direct_type

    return condition


def _normalize_legacy_conditions(item: dict[str, Any]) -> list[dict[str, str]]:
    parent_values = [part.strip() for part in item.get(ATTR_PARENT_TYPE, "").split(";")]
    children_values = [
        part.strip()
        for part in item.get(
            ATTR_CHILDREN_TYPE, item.get("actionType", item.get("type", ""))
        ).split(";")
    ]
    direct_values = [
        part.strip()
        for part in item.get(ATTR_CHILDREN_DIRECT_TYPE, "").split(";")
    ]
    max_length = max(len(parent_values), len(children_values), len(direct_values), 1)
    conditions: list[dict[str, str]] = []

    for index in range(max_length):
        condition = _normalize_condition(
            {
                ATTR_PARENT_TYPE: parent_values[index] if index < len(parent_values) else "",
                ATTR_CHILDREN_TYPE: (
                    children_values[index] if index < len(children_values) else ""
                ),
                ATTR_CHILDREN_DIRECT_TYPE: (
                    direct_values[index] if index < len(direct_values) else ""
                ),
            }
        )
        if condition:
            conditions.append(condition)

    return conditions


def _get_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None


@websocket_api.websocket_command({vol.Required("type"): WS_GET_YANDEX_SCENARIOS})
@websocket_api.async_response
async def _ws_get_yandex_scenarios(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    scenarios = await hass.async_add_executor_job(_read_yandex_scenarios, hass)
    connection.send_result(msg["id"], {"scenarios": scenarios})


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SAVE_YANDEX_SCENARIOS,
        vol.Required("scenarios"): [dict],
    }
)
@websocket_api.async_response
async def _ws_save_yandex_scenarios(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    scenarios = [item for item in msg.get("scenarios", []) if isinstance(item, dict)]
    validation_error = _validate_yandex_scenarios(scenarios)
    if validation_error:
        connection.send_error(msg["id"], "invalid_format", validation_error)
        return
    await hass.async_add_executor_job(_write_yandex_scenarios, hass, scenarios)
    refreshed = await hass.async_add_executor_job(_read_yandex_scenarios, hass)
    connection.send_result(msg["id"], {"saved": True, "scenarios": refreshed})


def _validate_yandex_scenarios(items: list[dict[str, Any]]) -> str:
    for index, item in enumerate(items, start=1):
        main = str(item.get("mainCommand", "")).strip()
        if not main:
            return f"mainCommand is required for scenario #{index}"
    return ""


def _read_yandex_scenarios(hass: HomeAssistant) -> list[dict[str, Any]]:
    path = _resolve_yandex_intents_path(hass)
    if not path.exists():
        return []

    loaded = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    if not isinstance(loaded, dict):
        return []

    result: list[dict[str, Any]] = []
    for main_command, raw in loaded.items():
        if not isinstance(raw, dict):
            raw = {}
        main_text = str(main_command or "").strip()
        if not main_text:
            continue
        sub_voice = _normalize_str_list(raw.get("extra_phrases"))
        sub_commands = _normalize_str_list(raw.get("execute_command"))
        accounts = _normalize_accounts(raw.get("accounts"))
        voice_response = str(
            raw.get("voice_response")
            or raw.get("voiceResponse")
            or raw.get("voice")
            or raw.get("response")
            or ""
        ).strip()
        result.append(
            {
                "id": f"yandex-{uuid.uuid4().hex[:8]}",
                "mainCommand": main_text,
                "voiceResponse": voice_response,
                "accounts": ";".join(accounts),
                "subVoice": [{"id": f"sv-{uuid.uuid4().hex[:8]}", "text": text} for text in sub_voice],
                "subCommands": [{"id": f"sc-{uuid.uuid4().hex[:8]}", "text": text} for text in sub_commands],
            }
        )
    return result


def _write_yandex_scenarios(hass: HomeAssistant, scenarios: list[dict[str, Any]]) -> None:
    path = _resolve_yandex_intents_path(hass)
    path.parent.mkdir(parents=True, exist_ok=True)
    payload: dict[str, Any] = {}

    for raw in scenarios:
        main_command = str(raw.get("mainCommand", "")).strip()
        if not main_command:
            continue
        voice_response = str(raw.get("voiceResponse", "")).strip()
        sub_voice = _normalize_sub_items(raw.get("subVoice"))
        sub_commands = _normalize_sub_items(raw.get("subCommands"))
        accounts = _normalize_accounts(raw.get("accounts"))

        item_payload: dict[str, Any] = {}
        if sub_voice:
            item_payload["extra_phrases"] = sub_voice
        if sub_commands:
            item_payload["execute_command"] = sub_commands
        if voice_response:
            item_payload["voice_response"] = voice_response
        if accounts:
            item_payload["accounts"] = _FlowStyleList(accounts)
        payload[main_command] = item_payload

    dumped = yaml.safe_dump(
        payload,
        allow_unicode=True,
        sort_keys=False,
        default_flow_style=False,
    )
    path.write_text(dumped, encoding="utf-8")


def _resolve_yandex_intents_path(hass: HomeAssistant) -> Path:
    config_path = Path(hass.config.path("yandex_intents.yaml"))
    # Prefer the active HA config path to avoid writing to a stale legacy location.
    if config_path.exists():
        return config_path
    if _YANDEX_INTENTS_PATH.exists():
        return _YANDEX_INTENTS_PATH
    return config_path


def _normalize_sub_items(value: Any) -> list[str]:
    if isinstance(value, list):
        entries = value
    elif value is None:
        entries = []
    else:
        entries = [value]
    result: list[str] = []
    for entry in entries:
        if isinstance(entry, dict):
            text = str(entry.get("text", "")).strip()
        else:
            text = str(entry or "").strip()
        if text:
            result.append(text)
    return result


def _normalize_str_list(value: Any) -> list[str]:
    if isinstance(value, list):
        values = value
    elif value is None:
        values = []
    else:
        values = [value]
    return [str(item).strip() for item in values if str(item).strip()]


def _normalize_accounts(value: Any) -> list[str]:
    if isinstance(value, list):
        values = value
    elif value is None:
        values = []
    else:
        values = str(value).split(";")
    normalized: list[str] = []
    for item in values:
        for part in str(item).split(";"):
            account = part.strip()
            if account:
                normalized.append(account)
    return normalized


class _FlowStyleList(list):
    """YAML helper to serialize lists in [] flow style."""


def _represent_flow_style_list(dumper: yaml.SafeDumper, value: _FlowStyleList) -> yaml.nodes.SequenceNode:
    return dumper.represent_sequence("tag:yaml.org,2002:seq", value, flow_style=True)


yaml.SafeDumper.add_representer(_FlowStyleList, _represent_flow_style_list)
