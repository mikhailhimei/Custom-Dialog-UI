"""Polling coordinator for Dialog Custom UI."""

from __future__ import annotations

import asyncio
import logging
import re
import uuid
from datetime import datetime
from typing import Any

import aiohttp
import async_timeout

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import aiohttp_client
from homeassistant.helpers import entity_registry as er

from .const import (
    ATTR_CHILDREN_TYPE,
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_SCENARIOS,
    CONF_TIMER_ALARM_TOKEN,
    CONF_TIMEOUT,
    DEFAULT_BASE_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    UPDATE_INTERVAL_SECONDS,
)

_LOGGER = logging.getLogger(__name__)
_COMMAND_CHECK_PATH = "/api/dialog/command-check"
_SAVE_COMMANDS_PATH = "/api/dialog/save-commands"
_DEFAULT_TIMER_MEDIA_CONTENT_ID = "media-source://media_source/local/morning-meadow-birdsongs-looping_zyb7nhnu.mp3"


class DialogCommandCoordinator:
    """Background poller that dispatches payloads into HA scripts."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry) -> None:
        self.hass = hass
        self.entry = entry
        self._task: asyncio.Task | None = None
        self._session = aiohttp_client.async_get_clientsession(hass)
        self._ha_timer_tasks: dict[str, dict[str, Any]] = {}

    async def async_start(self) -> None:
        if self._task and not self._task.done():
            return
        self._task = self.hass.async_create_task(self._run())

    async def async_stop(self) -> None:
        if not self._task:
            return
        self._task.cancel()
        try:
            await self._task
        except asyncio.CancelledError:
            pass
        self._task = None
        for timer_entry in list(self._ha_timer_tasks.values()):
            task = timer_entry.get("task")
            if isinstance(task, asyncio.Task):
                task.cancel()
        self._ha_timer_tasks.clear()

    async def async_reload(self) -> None:
        await self.async_stop()
        await self.async_start()
        self._append_log("info", "Конфигурация обновлена, polling перезапущен")

    async def _run(self) -> None:
        while True:
            try:
                await self._async_poll_once()
            except asyncio.CancelledError:
                raise
            except Exception as err:
                self._append_log("error", f"Ошибка polling: {err}")
                _LOGGER.exception("Unexpected error while polling dialog command")

            await asyncio.sleep(UPDATE_INTERVAL_SECONDS)

    async def _async_poll_once(self) -> None:
        options = _get_options(self.entry)
        client_id = options[CONF_CLIENT_ID].strip()
        if not client_id:
            return

        url = f"{options[CONF_BASE_URL].rstrip('/')}{_COMMAND_CHECK_PATH}"
        timeout = options[CONF_TIMEOUT]
        self._append_log("request", f"POST {url} clientId={client_id}")

        try:
            headers = {"Accept": "application/json"}
            authorization = _normalize_value(options[CONF_TIMER_ALARM_TOKEN])
            if authorization:
                headers["Authorization"] = authorization

            async with async_timeout.timeout(timeout):
                response = await self._session.post(
                    url,
                    json={"clientId": client_id},
                    headers=headers,
                )
        except (aiohttp.ClientError, TimeoutError) as err:
            self._append_log("error", f"Запрос не выполнен: {err}")
            _LOGGER.debug("Dialog poll failed for %s: %s", url, err)
            return

        if response.status == 204:
            self._append_log("idle", "Команда не найдена (204)")
            return
        if response.status >= 400:
            body = await response.text()
            self._append_log("error", f"Endpoint вернул {response.status}")
            _LOGGER.warning("Dialog endpoint returned %s: %s", response.status, body[:300])
            return

        try:
            raw_payload = await response.json(content_type=None)
        except (aiohttp.ContentTypeError, ValueError) as err:
            body = await response.text()
            self._append_log("error", "Endpoint вернул невалидный JSON")
            _LOGGER.warning("Dialog endpoint returned invalid JSON: %s; body=%s", err, body[:300])
            return

        payload = _extract_payload(raw_payload)
        if not isinstance(payload, dict) or not payload:
            self._append_log("idle", "Endpoint вернул пустой payload")
            return

        scenario = _match_scenario(payload, options[CONF_SCENARIOS])
        if not scenario:
            self._append_log(
                "idle",
                (
                    "Нет совпадения для "
                    f"children_type={_describe_payload_type(payload.get('children_type') or payload.get('actionType'))} "
                    f"children_direct_type={_describe_payload_type(payload.get(ATTR_CHILDREN_DIRECT_TYPE))} "
                    f"parent_type={_normalize_value(payload.get('parent_type')) or '<empty>'}"
                ),
            )
            _LOGGER.debug("No scenario matched payload: %s", payload)
            return

        self._append_log(
            "match",
            f"Совпадение -> {scenario[ATTR_SCRIPT_ENTITY_ID]}",
        )
        if await self._async_handle_builtin_timer_alarm(scenario, payload, options):
            return
        await self._async_run_script(scenario[ATTR_SCRIPT_ENTITY_ID], payload)

    async def _async_run_script(self, script_entity_id: str, payload: dict[str, Any]) -> None:
        if not self.hass.states.get(script_entity_id):
            self._append_log("error", f"Скрипт не найден: {script_entity_id}")
            _LOGGER.warning("Configured script not found: %s", script_entity_id)
            return

        service_data = {
            "entity_id": script_entity_id,
            "variables": {
                "dialog_payload": payload,
                "dialog_children_type": payload.get("children_type") or payload.get("actionType"),
                "dialog_type": payload.get("children_type") or payload.get("actionType"),
                "dialog_children_direct_type": payload.get(ATTR_CHILDREN_DIRECT_TYPE),
                "dialog_parent_type": payload.get("parent_type"),
                "dialog_value": payload.get("value"),
                "dialog_client_id": payload.get("client_id") or payload.get("clientId"),
                "dialog_device_id": payload.get("device_id") or payload.get("deviceId"),
            },
        }
        await self.hass.services.async_call("script", "turn_on", service_data, blocking=False)
        self._append_log("success", f"Запущен {script_entity_id}")

    async def _async_handle_builtin_timer_alarm(
        self,
        scenario: dict[str, Any],
        payload: dict[str, Any],
        options: dict[str, Any],
    ) -> bool:
        script_entity_id = _normalize_value(scenario.get(ATTR_SCRIPT_ENTITY_ID)).lower()
        if script_entity_id not in {"timer", "alarm"}:
            return False

        parent_type = _normalize_value(payload.get("parent_type")).lower()
        if script_entity_id == "timer":
            if parent_type == "timer_start":
                await self._async_handle_timer_start(payload, options)
                return True
            if parent_type == "timer_stop":
                await self._async_handle_timer_stop(payload, options)
                return True
            if parent_type == "timer_info":
                await self._async_handle_timer_info(payload, options)
                return True

        # Alarm hooks are reserved for future extension.
        return False

    async def _async_handle_timer_start(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        device_id = _normalize_value(payload.get("device_id") or payload.get("deviceId"))
        if not client_id:
            self._append_log("error", "Timer start skipped: client_id is empty")
            return

        commands_text = _extract_commands_text(payload)
        timer_parts = _extract_timer_parts(payload)
        total_seconds = max(1, timer_parts["hour"] * 3600 + timer_parts["minut"] * 60 + timer_parts["second"])
        timer_id = f"{client_id}:{uuid.uuid4().hex[:8]}"

        task = self.hass.async_create_task(
            self._async_wait_and_fire_timer(timer_id, client_id, device_id, total_seconds)
        )
        self._ha_timer_tasks[timer_id] = {
            "task": task,
            "client_id": client_id,
            "device_id": device_id,
            "hour": timer_parts["hour"],
            "minut": timer_parts["minut"],
            "second": timer_parts["second"],
            "commands": commands_text,
            "created_at": datetime.now().timestamp(),
        }

        body = {
            "children_type": "",
            "parent_type": "timer_start",
            "data": {
                "commands": commands_text,
            },
            "client_id": client_id,
            "device_id": device_id,
            "children_direct_type": [
                {
                    "mapping_type": "timer",
                    "value": {
                        "timer": timer_parts,
                    },
                }
            ],
        }
        await self._async_post_save_commands(options, body)
        self._append_log("success", f"Timer started in HA: {timer_parts['hour']:02d}:{timer_parts['minut']:02d}:{timer_parts['second']:02d}")

    async def _async_handle_timer_stop(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        if not client_id:
            self._append_log("error", "Timer stop skipped: client_id is empty")
            return

        timers = _active_timers_for_client(self._ha_timer_tasks, client_id)
        if not timers:
            self._append_log("idle", "Timer stop requested but no active timers")
            return

        target_count = _extract_timer_count(payload)
        if target_count is None and len(timers) > 1:
            await self._async_post_save_commands(
                options,
                {
                    "clientId": client_id,
                    "activeType": "timer_count",
                    "data": {
                        "timer": [_timer_info_for_response(item) for item in timers],
                    },
                },
            )
            self._append_log("info", f"Timer stop needs clarification ({len(timers)} active)")
            return

        selected_index = max(0, (target_count or 1) - 1)
        if selected_index >= len(timers):
            selected_index = len(timers) - 1
        selected = timers[selected_index]
        timer_id = _normalize_value(selected.get("id"))
        timer_entry = self._ha_timer_tasks.get(timer_id)
        if timer_entry is None:
            return
        task = timer_entry.get("task")
        if isinstance(task, asyncio.Task):
            task.cancel()
        self._ha_timer_tasks.pop(timer_id, None)

        await self._async_post_save_commands(
            options,
            {
                "children_type": "",
                "parent_type": "timer_stop",
                "data": {
                    "commands": _extract_commands_text(payload),
                },
                "client_id": client_id,
                "device_id": _normalize_value(timer_entry.get("device_id")),
                "children_direct_type": [
                    {
                        "mapping_type": "count",
                        "value": {
                            "count": selected_index + 1,
                        },
                    }
                ],
            },
        )
        self._append_log("success", f"Timer stopped in HA: #{selected_index + 1}")

    async def _async_handle_timer_info(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        if not client_id:
            self._append_log("error", "Timer info skipped: client_id is empty")
            return
        timers = _active_timers_for_client(self._ha_timer_tasks, client_id)
        await self._async_post_save_commands(
            options,
            {
                "clientId": client_id,
                "data": {
                    "timer": [_timer_info_for_response(item) for item in timers],
                },
            },
        )
        self._append_log("info", f"Timer info sent: {len(timers)} active")

    async def _async_wait_and_fire_timer(
        self,
        timer_id: str,
        client_id: str,
        device_id: str,
        total_seconds: int,
    ) -> None:
        try:
            await asyncio.sleep(total_seconds)
            timer_entry = self._ha_timer_tasks.get(timer_id)
            if timer_entry is None:
                return
            media_player_entity_id = _resolve_media_player_entity_id(self.hass, device_id)
            if not media_player_entity_id:
                self._append_log("error", f"Timer finished but device not found: {device_id or '<empty>'}")
                return
            await self.hass.services.async_call(
                "media_player",
                "turn_on",
                target={"entity_id": media_player_entity_id},
                blocking=False,
            )
            await self.hass.services.async_call(
                "media_player",
                "play_media",
                {
                    "media_content_id": _DEFAULT_TIMER_MEDIA_CONTENT_ID,
                    "media_content_type": "music",
                    "enqueue": "replace",
                },
                target={"entity_id": media_player_entity_id},
                blocking=False,
            )
            self._append_log("success", f"Timer finished on {media_player_entity_id} ({client_id})")
        except asyncio.CancelledError:
            raise
        finally:
            self._ha_timer_tasks.pop(timer_id, None)

    async def _async_post_save_commands(self, options: dict[str, Any], body: dict[str, Any]) -> None:
        base_url = _normalize_value(options.get(CONF_BASE_URL)).rstrip("/")
        if not base_url:
            return
        url = f"{base_url}{_SAVE_COMMANDS_PATH}"
        timeout = max(1, int(options.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)))
        headers = {"Accept": "application/json", "Content-Type": "application/json"}
        authorization = _normalize_value(options.get(CONF_TIMER_ALARM_TOKEN))
        if authorization:
            headers["Authorization"] = authorization
        try:
            async with async_timeout.timeout(timeout):
                response = await self._session.post(url, json=body, headers=headers)
            if response.status >= 400:
                body_text = await response.text()
                self._append_log("error", f"save-commands returned {response.status}")
                _LOGGER.warning("save-commands returned %s: %s", response.status, body_text[:300])
                return
            self._append_log("request", f"POST {_SAVE_COMMANDS_PATH} ({response.status})")
        except (aiohttp.ClientError, TimeoutError) as err:
            self._append_log("error", f"save-commands request failed: {err}")

    def _append_log(self, level: str, message: str) -> None:
        logs = self.hass.data[DOMAIN].setdefault("logs", [])
        logs.appendleft(
            {
                "ts": datetime.now().strftime("%H:%M:%S"),
                "level": level,
                "message": message,
            }
        )


def _extract_payload(raw_payload: Any) -> dict[str, Any] | None:
    if not isinstance(raw_payload, dict):
        return None

    if isinstance(raw_payload.get("body"), dict):
        if raw_payload.get("status") is False:
            return None
        return raw_payload["body"]

    return raw_payload


def _match_scenario(payload: dict[str, Any], scenarios: list[dict[str, Any]]) -> dict[str, Any] | None:
    incoming_children_type = payload.get("children_type") or payload.get("actionType")
    incoming_children_direct_type = payload.get(ATTR_CHILDREN_DIRECT_TYPE)
    incoming_parent_type = payload.get("parent_type")

    for scenario in scenarios:
        conditions = _get_scenario_conditions(scenario)

        if not conditions:
            continue
        if not any(
            _matches_condition(
                condition,
                incoming_parent_type,
                incoming_children_type,
                incoming_children_direct_type,
            )
            for condition in conditions
        ):
            continue
        if not _normalize_value(scenario.get(ATTR_SCRIPT_ENTITY_ID)):
            continue

        return scenario

    return None


def _normalize_value(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()


def _normalize_values(value: Any) -> list[str]:
    if value is None:
        return []
    if isinstance(value, (list, tuple, set)):
        values = value
    else:
        values = [value]

    return [
        normalized
        for normalized in (_normalize_value(item) for item in values)
        if normalized
    ]


def _describe_payload_type(value: Any) -> str:
    values = _normalize_values(value)
    if not values:
        return "<empty>"
    if len(values) == 1:
        return values[0]
    return "[" + ", ".join(values) + "]"


def _matches_expected_value(expected_value: str, incoming_value: Any) -> bool:
    if not expected_value:
        return True

    allowed_values = [
        part.strip()
        for part in expected_value.split(";")
        if part.strip()
    ]
    if not allowed_values:
        return not _normalize_values(incoming_value)

    return any(value in allowed_values for value in _normalize_values(incoming_value))


def _matches_children_type(expected_value: str, incoming_value: Any) -> bool:
    allowed_values = [
        part.strip().lower()
        for part in expected_value.split(";")
        if part.strip()
    ]
    if not allowed_values:
        return not _normalize_values(incoming_value)

    if "all" in allowed_values:
        return bool(_normalize_values(incoming_value))

    return _matches_expected_value(expected_value, incoming_value)


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
            candidates = [
                item.get("type"),
                item.get("mapping_type"),
                item.get("mappingType"),
            ]
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


def _matches_children_direct_type(expected_value: str, incoming_value: Any) -> bool:
    allowed_values = [
        part.strip().lower()
        for part in expected_value.split(";")
        if part.strip()
    ]
    if not allowed_values:
        return not _normalize_children_direct_type_values(incoming_value)

    if "all" in allowed_values:
        return bool(_normalize_children_direct_type_values(incoming_value))

    return any(
        value.lower() in allowed_values
        for value in _normalize_children_direct_type_values(incoming_value)
    )


def _get_scenario_conditions(scenario: dict[str, Any]) -> list[dict[str, str]]:
    raw_conditions = scenario.get("conditions")
    if isinstance(raw_conditions, list):
        conditions = [
            normalized
            for item in raw_conditions
            if isinstance(item, dict)
            if (normalized := _normalize_condition(item))
        ]
        if conditions:
            return conditions

    return _normalize_legacy_conditions(scenario)


def _normalize_condition(condition: dict[str, Any]) -> dict[str, str] | None:
    parent_type = _normalize_value(condition.get(ATTR_PARENT_TYPE))
    children_type = _normalize_value(condition.get(ATTR_CHILDREN_TYPE) or condition.get("type"))
    children_direct_type = _normalize_value(condition.get(ATTR_CHILDREN_DIRECT_TYPE))

    if not parent_type and not children_type and not children_direct_type:
        return None

    normalized = {
        ATTR_PARENT_TYPE: parent_type,
    }
    if children_type:
        normalized[ATTR_CHILDREN_TYPE] = children_type
    if children_direct_type:
        normalized[ATTR_CHILDREN_DIRECT_TYPE] = children_direct_type

    return normalized


def _normalize_legacy_conditions(scenario: dict[str, Any]) -> list[dict[str, str]]:
    parent_values = [part.strip() for part in _normalize_value(scenario.get(ATTR_PARENT_TYPE)).split(";")]
    children_values = [
        part.strip()
        for part in _normalize_value(scenario.get(ATTR_CHILDREN_TYPE) or scenario.get("type")).split(";")
    ]
    direct_values = [
        part.strip()
        for part in _normalize_value(scenario.get(ATTR_CHILDREN_DIRECT_TYPE)).split(";")
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


def _matches_condition(
    condition: dict[str, str],
    incoming_parent_type: Any,
    incoming_children_type: Any,
    incoming_children_direct_type: Any,
) -> bool:
    expected_parent = _normalize_value(condition.get(ATTR_PARENT_TYPE))
    expected_children_type = _normalize_value(condition.get(ATTR_CHILDREN_TYPE))
    expected_children_direct_type = _normalize_value(condition.get(ATTR_CHILDREN_DIRECT_TYPE))

    if expected_parent and not _matches_expected_value(expected_parent, incoming_parent_type):
        return False
    if expected_children_type and not _matches_children_type(expected_children_type, incoming_children_type):
        return False
    if expected_children_direct_type and not _matches_children_direct_type(
        expected_children_direct_type,
        incoming_children_direct_type,
    ):
        return False

    return True


def _extract_commands_text(payload: dict[str, Any]) -> str:
    value = payload.get("data") if isinstance(payload.get("data"), dict) else payload.get("value")
    if isinstance(value, dict):
        command = _normalize_value(value.get("commands") or value.get("command"))
        if command:
            return command
    return _normalize_value(payload.get("commands"))


def _extract_timer_parts(payload: dict[str, Any]) -> dict[str, int]:
    defaults = {"hour": 0, "minut": 1, "second": 0}
    direct_values = payload.get(ATTR_CHILDREN_DIRECT_TYPE)
    if isinstance(direct_values, dict):
        direct_values = [direct_values]
    if isinstance(direct_values, (list, tuple)):
        for item in direct_values:
            if not isinstance(item, dict):
                continue
            mapping_type = _normalize_value(item.get("mapping_type") or item.get("mappingType") or item.get("type")).lower()
            value = item.get("value") if isinstance(item.get("value"), dict) else {}
            timer_data = value.get("timer") if isinstance(value.get("timer"), dict) else value
            if mapping_type == "timer" and isinstance(timer_data, dict):
                return {
                    "hour": _safe_int(timer_data.get("hour")),
                    "minut": _safe_int(timer_data.get("minut") or timer_data.get("minute")),
                    "second": _safe_int(timer_data.get("second")),
                }
    commands_text = _extract_commands_text(payload)
    minutes = _extract_first_int(commands_text)
    if minutes is not None:
        return {"hour": minutes // 60, "minut": minutes % 60, "second": 0}
    return defaults


def _extract_timer_count(payload: dict[str, Any]) -> int | None:
    direct_values = payload.get(ATTR_CHILDREN_DIRECT_TYPE)
    if isinstance(direct_values, dict):
        direct_values = [direct_values]
    if isinstance(direct_values, (list, tuple)):
        for item in direct_values:
            if not isinstance(item, dict):
                continue
            mapping_type = _normalize_value(item.get("mapping_type") or item.get("mappingType") or item.get("type")).lower()
            if mapping_type != "count":
                continue
            value = item.get("value") if isinstance(item.get("value"), dict) else {}
            count = _safe_int(value.get("count"))
            if count > 0:
                return count

    commands_text = _extract_commands_text(payload)
    guess = _extract_first_int(commands_text)
    if guess and guess > 0:
        return guess
    return None


def _extract_first_int(text: str) -> int | None:
    if not text:
        return None
    match = re.search(r"\d+", text)
    if not match:
        return None
    try:
        return int(match.group(0))
    except ValueError:
        return None


def _safe_int(value: Any) -> int:
    try:
        return max(0, int(value))
    except (TypeError, ValueError):
        return 0


def _active_timers_for_client(storage: dict[str, dict[str, Any]], client_id: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for timer_id, timer_entry in storage.items():
        if _normalize_value(timer_entry.get("client_id")) != client_id:
            continue
        items.append(
            {
                "id": timer_id,
                "client_id": client_id,
                "device_id": _normalize_value(timer_entry.get("device_id")),
                "hour": _safe_int(timer_entry.get("hour")),
                "minut": _safe_int(timer_entry.get("minut")),
                "second": _safe_int(timer_entry.get("second")),
                "commands": _normalize_value(timer_entry.get("commands")),
                "created_at": timer_entry.get("created_at"),
            }
        )
    items.sort(key=lambda item: float(item.get("created_at") or 0))
    return items


def _timer_info_for_response(item: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": _normalize_value(item.get("id")),
        "device_id": _normalize_value(item.get("device_id")),
        "timer": {
            "hour": _safe_int(item.get("hour")),
            "minut": _safe_int(item.get("minut")),
            "second": _safe_int(item.get("second")),
        },
        "commands": _normalize_value(item.get("commands")),
    }


def _resolve_media_player_entity_id(hass: HomeAssistant, device_ref: str) -> str:
    if not device_ref:
        return ""

    if hass.states.get(device_ref):
        state = hass.states.get(device_ref)
        if state is not None and state.entity_id.startswith("media_player."):
            return device_ref

    registry = er.async_get(hass)
    entities = er.async_entries_for_device(registry, device_ref)
    media_players = [entry.entity_id for entry in entities if entry.entity_id.startswith("media_player.")]
    if media_players:
        return media_players[0]

    if hass.states.get(device_ref):
        return device_ref

    return ""


def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, ""),
        CONF_TIMER_ALARM_TOKEN: stored.get(CONF_TIMER_ALARM_TOKEN, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        CONF_SCENARIOS: list(stored.get(CONF_SCENARIOS, [])),
    }
