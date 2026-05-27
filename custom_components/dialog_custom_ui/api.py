"""Websocket API for Dialog Custom UI."""

from __future__ import annotations

import base64
import io
import logging
import uuid
import zipfile
from pathlib import Path
from typing import Any, TypedDict

import voluptuous as vol
import yaml

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from .const import (
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_CHILDREN_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCENARIO_ID,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_ALLOW_NON_ADMIN_PANEL,
    CONF_BASE_URL,
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
    CONF_YANDEX_TTS_CODEC,
    CONF_YANDEX_TTS_EMOTION,
    CONF_YANDEX_TTS_FOLDER_ID,
    CONF_YANDEX_TTS_LANG,
    CONF_YANDEX_TTS_SPEED,
    CONF_YANDEX_TTS_VOICE,
    DEFAULT_BASE_URL,
    DEFAULT_REDIS_URL,
    DEFAULT_THEME,
    DEFAULT_YANDEX_TTS_CODEC,
    DEFAULT_YANDEX_TTS_EMOTION,
    DEFAULT_YANDEX_TTS_LANG,
    DEFAULT_YANDEX_TTS_SPEED,
    DEFAULT_YANDEX_TTS_VOICE,
    DOMAIN,
    WS_EXPORT_YANDEX_TTS_FILES,
    WS_GET_CONFIG,
    WS_GET_LOGS,
    WS_GET_YANDEX_SCENARIOS,
    WS_IMPORT_YANDEX_TTS_FILES,
    WS_SAVE_CONFIG,
    WS_SAVE_YANDEX_SCENARIOS,
)

from .normalize import (
    _normalize_device_ids,
    _normalize_scenario,
    _normalize_str_list,
    _normalize_theme
)

from .utils import (
    _get_entry,
    _safe_float,
    _clean_string
)

LOGGER = logging.getLogger(__name__)

_YANDEX_INTENTS_PATH = Path("/homeassistant/yandex_intents.yaml")
_TTS_CACHE_PATH = Path("/homeassistant/tts")


class IntegrationOptions(TypedDict):
    base_url: str
    client_id: str
    redis_url: str
    redis_password: str
    allow_non_admin_panel: bool
    timer_alarm_token: str
    theme: str
    voice_agent_ip: str
    voice_agent_user_id: str
    yandex_tts_api_key: str
    yandex_tts_folder_id: str
    yandex_tts_lang: str
    yandex_tts_codec: str
    yandex_tts_voice: str
    yandex_tts_emotion: str
    yandex_tts_speed: float
    timer_alarm_device_ids: list[str]
    timer_alarm_items: list[Any]
    timer_alarm_presets: list[Any]
    timer_alarm_media_content_id: str
    scenarios: list[dict[str, Any]]


SAVE_CONFIG_SCHEMA = {
    vol.Required("type"): WS_SAVE_CONFIG,
    vol.Required(CONF_BASE_URL): str,
    vol.Required(CONF_CLIENT_ID): str,
    vol.Optional(CONF_REDIS_URL, default=DEFAULT_REDIS_URL): str,
    vol.Optional(CONF_REDIS_PASSWORD, default=""): vol.Any(str, None),
    vol.Optional(CONF_ALLOW_NON_ADMIN_PANEL, default=True): bool,
    vol.Optional(CONF_TIMER_ALARM_TOKEN, default=""): str,
    vol.Optional(CONF_THEME, default=DEFAULT_THEME): str,
    vol.Optional(CONF_VOICE_AGENT_IP, default=""): str,
    vol.Optional(CONF_VOICE_AGENT_USER_ID, default=""): str,
    vol.Optional(CONF_YANDEX_TTS_API_KEY, default=""): str,
    vol.Optional(CONF_YANDEX_TTS_FOLDER_ID, default=""): str,
    vol.Optional(CONF_YANDEX_TTS_LANG, default=DEFAULT_YANDEX_TTS_LANG): str,
    vol.Optional(CONF_YANDEX_TTS_CODEC, default=DEFAULT_YANDEX_TTS_CODEC): str,
    vol.Optional(CONF_YANDEX_TTS_VOICE, default=DEFAULT_YANDEX_TTS_VOICE): str,
    vol.Optional(CONF_YANDEX_TTS_EMOTION, default=DEFAULT_YANDEX_TTS_EMOTION): str,
    vol.Optional(CONF_YANDEX_TTS_SPEED, default=DEFAULT_YANDEX_TTS_SPEED): vol.Coerce(float),
    vol.Optional(CONF_TIMER_ALARM_DEVICE_IDS, default=[]): [str],
    vol.Required(CONF_SCENARIOS): [
        {
            vol.Required(ATTR_SCENARIO_ID): str,
            vol.Required("name"): str,
            vol.Required(ATTR_SCRIPT_ENTITY_ID): str,
            vol.Optional("conditions", default=[]): [
                {
                    vol.Optional(ATTR_PARENT_TYPE, default=""): str,
                    vol.Optional(ATTR_CHILDREN_TYPE, default=""): str,
                    vol.Optional(ATTR_CHILDREN_DIRECT_TYPE, default=""): str,
                }
            ],
            vol.Optional(ATTR_PARENT_TYPE, default=""): str,
            vol.Optional(ATTR_CHILDREN_TYPE, default=""): str,
            vol.Optional(ATTR_CHILDREN_DIRECT_TYPE, default=""): str,
        }
    ],
}


IMPORT_TTS_SCHEMA = {
    vol.Required("type"): WS_IMPORT_YANDEX_TTS_FILES,
    vol.Required("zip_base64"): str,
}


SAVE_YANDEX_SCENARIOS_SCHEMA = {
    vol.Required("type"): WS_SAVE_YANDEX_SCENARIOS,
    vol.Required("scenarios"): [dict],
}


def async_register_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_config)
    websocket_api.async_register_command(hass, _ws_save_config)
    websocket_api.async_register_command(hass, _ws_get_logs)
    websocket_api.async_register_command(hass, _ws_get_yandex_scenarios)
    websocket_api.async_register_command(hass, _ws_save_yandex_scenarios)
    websocket_api.async_register_command(hass, _ws_export_yandex_tts_files)
    websocket_api.async_register_command(hass, _ws_import_yandex_tts_files)


def _ws_error(
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    code: str,
    message: str,
) -> None:
    connection.send_error(msg["id"], code, message)


def _build_config_response(entry) -> dict[str, Any]:
    return {
        "base_url": entry.options.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        "allow_non_admin_panel": bool(
            entry.options.get(CONF_ALLOW_NON_ADMIN_PANEL, True)
        ),
        "client_id": entry.options.get(CONF_CLIENT_ID, ""),
        "redis_url": entry.options.get(CONF_REDIS_URL, DEFAULT_REDIS_URL),
        "redis_password": entry.options.get(CONF_REDIS_PASSWORD, ""),
        "timer_alarm_token": entry.options.get(CONF_TIMER_ALARM_TOKEN, ""),
        "voice_agent_ip": entry.options.get(CONF_VOICE_AGENT_IP, ""),
        "voice_agent_user_id": entry.options.get(CONF_VOICE_AGENT_USER_ID, ""),
        "yandex_tts_api_key": entry.options.get(CONF_YANDEX_TTS_API_KEY, ""),
        "yandex_tts_folder_id": entry.options.get(CONF_YANDEX_TTS_FOLDER_ID, ""),
        "yandex_tts_lang": entry.options.get(
            CONF_YANDEX_TTS_LANG,
            DEFAULT_YANDEX_TTS_LANG,
        ),
        "yandex_tts_codec": entry.options.get(
            CONF_YANDEX_TTS_CODEC,
            DEFAULT_YANDEX_TTS_CODEC,
        ),
        "yandex_tts_voice": entry.options.get(
            CONF_YANDEX_TTS_VOICE,
            DEFAULT_YANDEX_TTS_VOICE,
        ),
        "yandex_tts_emotion": entry.options.get(
            CONF_YANDEX_TTS_EMOTION,
            DEFAULT_YANDEX_TTS_EMOTION,
        ),
        "yandex_tts_speed": _safe_float(
            entry.options.get(
                CONF_YANDEX_TTS_SPEED,
                DEFAULT_YANDEX_TTS_SPEED,
            ),
            DEFAULT_YANDEX_TTS_SPEED,
        ),
        "theme": _normalize_theme(
            entry.options.get(CONF_THEME, DEFAULT_THEME)
        ),
        "timer_alarm_device_ids": _normalize_device_ids(
            entry.options.get(CONF_TIMER_ALARM_DEVICE_IDS, [])
        ),
        "scenarios": list(entry.options.get(CONF_SCENARIOS, [])),
    }


def _build_options(
    msg: dict[str, Any],
    previous: dict[str, Any],
) -> IntegrationOptions:
    scenarios = [
        _normalize_scenario(item)
        for item in msg[CONF_SCENARIOS]
    ]

    return {
        CONF_BASE_URL: _clean_string(
            msg.get(CONF_BASE_URL),
            DEFAULT_BASE_URL,
        ),
        CONF_CLIENT_ID: _clean_string(msg.get(CONF_CLIENT_ID)),
        CONF_REDIS_URL: _clean_string(
            msg.get(CONF_REDIS_URL),
            DEFAULT_REDIS_URL,
        ),
        CONF_REDIS_PASSWORD: _clean_string(
            msg.get(CONF_REDIS_PASSWORD)
        ),
        CONF_ALLOW_NON_ADMIN_PANEL: bool(
            msg.get(CONF_ALLOW_NON_ADMIN_PANEL, True)
        ),
        CONF_TIMER_ALARM_TOKEN: _clean_string(
            msg.get(CONF_TIMER_ALARM_TOKEN)
        ),
        CONF_THEME: _normalize_theme(
            msg.get(CONF_THEME, DEFAULT_THEME)
        ),
        CONF_VOICE_AGENT_IP: _clean_string(
            msg.get(CONF_VOICE_AGENT_IP),
            previous.get(CONF_VOICE_AGENT_IP, ""),
        ),
        CONF_VOICE_AGENT_USER_ID: _clean_string(
            msg.get(CONF_VOICE_AGENT_USER_ID),
            previous.get(CONF_VOICE_AGENT_USER_ID, ""),
        ),
        CONF_YANDEX_TTS_API_KEY: _clean_string(
            msg.get(CONF_YANDEX_TTS_API_KEY),
            previous.get(CONF_YANDEX_TTS_API_KEY, ""),
        ),
        CONF_YANDEX_TTS_FOLDER_ID: _clean_string(
            msg.get(CONF_YANDEX_TTS_FOLDER_ID),
            previous.get(CONF_YANDEX_TTS_FOLDER_ID, ""),
        ),
        CONF_YANDEX_TTS_LANG: _clean_string(
            msg.get(CONF_YANDEX_TTS_LANG),
            DEFAULT_YANDEX_TTS_LANG,
        ),
        CONF_YANDEX_TTS_CODEC: _clean_string(
            msg.get(CONF_YANDEX_TTS_CODEC),
            DEFAULT_YANDEX_TTS_CODEC,
        ),
        CONF_YANDEX_TTS_VOICE: _clean_string(
            msg.get(CONF_YANDEX_TTS_VOICE),
            DEFAULT_YANDEX_TTS_VOICE,
        ),
        CONF_YANDEX_TTS_EMOTION: _clean_string(
            msg.get(CONF_YANDEX_TTS_EMOTION),
            DEFAULT_YANDEX_TTS_EMOTION,
        ),
        CONF_YANDEX_TTS_SPEED: _safe_float(
            msg.get(CONF_YANDEX_TTS_SPEED),
            DEFAULT_YANDEX_TTS_SPEED,
        ),
        CONF_TIMER_ALARM_DEVICE_IDS: _normalize_device_ids(
            msg.get(CONF_TIMER_ALARM_DEVICE_IDS, [])
        ),
        CONF_TIMER_ALARM_ITEMS: list(
            previous.get(CONF_TIMER_ALARM_ITEMS, [])
        ),
        CONF_TIMER_ALARM_PRESETS: list(
            previous.get(CONF_TIMER_ALARM_PRESETS, [])
        ),
        CONF_TIMER_ALARM_MEDIA_CONTENT_ID: previous.get(
            CONF_TIMER_ALARM_MEDIA_CONTENT_ID,
            "",
        ),
        CONF_SCENARIOS: scenarios,
    }


@websocket_api.websocket_command({vol.Required("type"): WS_GET_CONFIG})
@websocket_api.async_response
async def _ws_get_config(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_entry(hass)

    if entry is None:
        _ws_error(
            connection,
            msg,
            "not_configured",
            "Integration entry not found",
        )
        return

    result = _build_config_response(entry)

    is_admin = bool(getattr(connection.user, "is_admin", False))

    if not is_admin and not result["allow_non_admin_panel"]:
        _ws_error(
            connection,
            msg,
            "unauthorized",
            "Access denied",
        )
        return

    connection.send_result(msg["id"], result)


@websocket_api.websocket_command({vol.Required("type"): WS_GET_LOGS})
@websocket_api.async_response
async def _ws_get_logs(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    logs = list(hass.data.get(DOMAIN, {}).get("logs", []))
    connection.send_result(msg["id"], {"logs": logs})


@websocket_api.websocket_command(SAVE_CONFIG_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_config(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    entry = _get_entry(hass)

    if entry is None:
        _ws_error(
            connection,
            msg,
            "not_configured",
            "Integration entry not found",
        )
        return

    previous_options = dict(entry.options)

    try:
        options = _build_options(msg, previous_options)

    except Exception as err:
        LOGGER.exception("Failed to build options")

        _ws_error(
            connection,
            msg,
            "invalid_config",
            str(err),
        )
        return

    hass.config_entries.async_update_entry(
        entry,
        options=options,
    )

    coordinator = hass.data[DOMAIN][entry.entry_id]

    try:
        await coordinator.async_reload()

    except Exception:
        LOGGER.exception("Failed to reload integration")

        _ws_error(
            connection,
            msg,
            "reload_failed",
            "Config saved but reload failed",
        )
        return

    connection.send_result(
        msg["id"],
        {
            "saved": True,
        },
    )


@websocket_api.websocket_command(
    {vol.Required("type"): WS_EXPORT_YANDEX_TTS_FILES}
)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_export_yandex_tts_files(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    archive = await hass.async_add_executor_job(
        _build_tts_archive,
        hass,
    )

    archive_b64 = base64.b64encode(archive).decode("ascii")

    connection.send_result(
        msg["id"],
        {
            "filename": "yandex-tts-files.zip",
            "zip_base64": archive_b64,
        },
    )


@websocket_api.websocket_command(IMPORT_TTS_SCHEMA)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_import_yandex_tts_files(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    zip_base64 = _clean_string(msg.get("zip_base64"))

    if not zip_base64:
        _ws_error(
            connection,
            msg,
            "invalid_format",
            "zip_base64 is required",
        )
        return

    try:
        archive = base64.b64decode(zip_base64, validate=True)

    except Exception:
        _ws_error(
            connection,
            msg,
            "invalid_format",
            "Invalid base64 payload",
        )
        return

    try:
        result = await hass.async_add_executor_job(
            _import_tts_archive,
            hass,
            archive,
        )

    except zipfile.BadZipFile:
        _ws_error(
            connection,
            msg,
            "invalid_format",
            "Invalid ZIP archive",
        )
        return

    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {vol.Required("type"): WS_GET_YANDEX_SCENARIOS}
)
@websocket_api.async_response
async def _ws_get_yandex_scenarios(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    scenarios = await hass.async_add_executor_job(
        _read_yandex_scenarios,
        hass,
    )

    connection.send_result(
        msg["id"],
        {
            "scenarios": scenarios,
        },
    )


@websocket_api.websocket_command(
    SAVE_YANDEX_SCENARIOS_SCHEMA
)
@websocket_api.async_response
async def _ws_save_yandex_scenarios(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    scenarios = [
        item
        for item in msg.get("scenarios", [])
        if isinstance(item, dict)
    ]

    validation_error = _validate_yandex_scenarios(scenarios)

    if validation_error:
        _ws_error(
            connection,
            msg,
            "invalid_format",
            validation_error,
        )
        return

    await hass.async_add_executor_job(
        _write_yandex_scenarios,
        hass,
        scenarios,
    )

    refreshed = await hass.async_add_executor_job(
        _read_yandex_scenarios,
        hass,
    )

    connection.send_result(
        msg["id"],
        {
            "saved": True,
            "scenarios": refreshed,
        },
    )


class _FlowStyleList(list):
    """Serialize YAML list in flow style."""


def _represent_flow_style_list(
    dumper: yaml.SafeDumper,
    value: _FlowStyleList,
):
    return dumper.represent_sequence(
        "tag:yaml.org,2002:seq",
        value,
        flow_style=True,
    )


yaml.SafeDumper.add_representer(
    _FlowStyleList,
    _represent_flow_style_list,
)


def _validate_yandex_scenarios(
    items: list[dict[str, Any]],
) -> str:
    for index, item in enumerate(items, start=1):
        main = _clean_string(item.get("mainCommand"))

        if not main:
            return f"mainCommand is required for scenario #{index}"

    return ""


def _resolve_yandex_intents_path(hass: HomeAssistant) -> Path:
    config_path = Path(hass.config.path("yandex_intents.yaml"))

    if config_path.exists():
        return config_path

    if _YANDEX_INTENTS_PATH.exists():
        return _YANDEX_INTENTS_PATH

    return config_path


def _read_yandex_scenarios(
    hass: HomeAssistant,
) -> list[dict[str, Any]]:
    path = _resolve_yandex_intents_path(hass)

    if not path.exists():
        return []

    loaded = yaml.safe_load(
        path.read_text(encoding="utf-8")
    ) or {}

    if not isinstance(loaded, dict):
        return []

    result: list[dict[str, Any]] = []

    for main_command, raw in loaded.items():
        if not isinstance(raw, dict):
            raw = {}

        main_text = _clean_string(main_command)

        if not main_text:
            continue

        result.append(
            {
                "id": f"yandex-{uuid.uuid4().hex[:8]}",
                "mainCommand": main_text,
                "voiceResponse": _clean_string(
                    raw.get("voice_response")
                    or raw.get("voiceResponse")
                    or raw.get("voice")
                    or raw.get("response")
                ),
                "accounts": ";".join(
                    _normalize_accounts(raw.get("accounts"))
                ),
                "subVoice": [
                    {
                        "id": f"sv-{uuid.uuid4().hex[:8]}",
                        "text": text,
                    }
                    for text in _normalize_str_list(
                        raw.get("extra_phrases")
                    )
                ],
                "subCommands": [
                    {
                        "id": f"sc-{uuid.uuid4().hex[:8]}",
                        "text": text,
                    }
                    for text in _normalize_str_list(
                        raw.get("execute_command")
                    )
                ],
            }
        )

    return result


def _write_yandex_scenarios(
    hass: HomeAssistant,
    scenarios: list[dict[str, Any]],
) -> None:
    path = _resolve_yandex_intents_path(hass)

    path.parent.mkdir(parents=True, exist_ok=True)

    payload: dict[str, Any] = {}

    for raw in scenarios:
        main_command = _clean_string(raw.get("mainCommand"))

        if not main_command:
            continue

        item_payload: dict[str, Any] = {}

        sub_voice = _normalize_sub_items(raw.get("subVoice"))
        sub_commands = _normalize_sub_items(raw.get("subCommands"))
        accounts = _normalize_accounts(raw.get("accounts"))
        voice_response = _clean_string(raw.get("voiceResponse"))

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


def _resolve_tts_path(hass: HomeAssistant) -> Path:
    config_tts_path = Path(hass.config.path("tts"))

    if config_tts_path.exists():
        return config_tts_path

    if _TTS_CACHE_PATH.exists():
        return _TTS_CACHE_PATH

    return config_tts_path


def _build_tts_archive(hass: HomeAssistant) -> bytes:
    tts_path = _resolve_tts_path(hass)

    buffer = io.BytesIO()

    with zipfile.ZipFile(
        buffer,
        mode="w",
        compression=zipfile.ZIP_DEFLATED,
    ) as archive:
        if not tts_path.exists():
            return buffer.getvalue()

        for file_path in sorted(tts_path.rglob("*")):
            if not file_path.is_file():
                continue

            archive.write(
                file_path,
                arcname=file_path.relative_to(tts_path).as_posix(),
            )

    return buffer.getvalue()


def _import_tts_archive(
    hass: HomeAssistant,
    archive_bytes: bytes,
) -> dict[str, Any]:
    tts_path = _resolve_tts_path(hass)

    tts_path.mkdir(parents=True, exist_ok=True)

    existing_lower_names = {
        path.name.lower()
        for path in tts_path.iterdir()
        if path.is_file()
    }

    processed_lower_names: set[str] = set()

    imported: list[str] = []
    skipped: list[str] = []

    with zipfile.ZipFile(io.BytesIO(archive_bytes), mode="r") as archive:
        for member in archive.infolist():
            if member.is_dir():
                continue

            file_name = Path(member.filename).name.strip()

            if not file_name:
                continue

            lower_name = file_name.lower()

            if (
                lower_name in existing_lower_names
                or lower_name in processed_lower_names
            ):
                skipped.append(file_name)
                continue

            content = archive.read(member)

            (tts_path / file_name).write_bytes(content)

            imported.append(file_name)

            processed_lower_names.add(lower_name)
            existing_lower_names.add(lower_name)

    return {
        "saved": True,
        "imported_count": len(imported),
        "skipped_count": len(skipped),
        "imported_files": imported,
        "skipped_files": skipped,
    }


def _normalize_sub_items(value: Any) -> list[str]:
    if isinstance(value, list):
        entries = value
    elif value is None:
        entries = []
    else:
        entries = [value]

    result: list[str] = []

    for entry in entries:
        text = (
            _clean_string(entry.get("text"))
            if isinstance(entry, dict)
            else _clean_string(entry)
        )

        if text:
            result.append(text)

    return result


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
