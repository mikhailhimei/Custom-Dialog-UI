"""Polling coordinator for Dialog Custom UI."""

from __future__ import annotations

import asyncio
import logging
from datetime import datetime
from typing import Any

import aiohttp
import async_timeout

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import aiohttp_client

from .const import (
    ATTR_CHILDREN_TYPE,
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_SCENARIOS,
    CONF_TIMEOUT,
    DEFAULT_BASE_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    UPDATE_INTERVAL_SECONDS,
)

_LOGGER = logging.getLogger(__name__)
_COMMAND_CHECK_PATH = "/api/dialog/command-check"


class DialogCommandCoordinator:
    """Background poller that dispatches payloads into HA scripts."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry) -> None:
        self.hass = hass
        self.entry = entry
        self._task: asyncio.Task | None = None
        self._session = aiohttp_client.async_get_clientsession(hass)

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
            async with async_timeout.timeout(timeout):
                response = await self._session.post(
                    url,
                    json={"clientId": client_id},
                    headers={"Accept": "application/json"},
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
                    f"children_type={_describe_payload_type(payload.get('children_type') or payload.get('type'))} "
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
                "dialog_children_type": payload.get("children_type") or payload.get("type"),
                "dialog_type": payload.get("children_type") or payload.get("type"),
                "dialog_children_direct_type": payload.get(ATTR_CHILDREN_DIRECT_TYPE),
                "dialog_parent_type": payload.get("parent_type"),
                "dialog_value": payload.get("value"),
                "dialog_client_id": payload.get("client_id") or payload.get("clientId"),
                "dialog_device_id": payload.get("device_id") or payload.get("deviceId"),
            },
        }
        await self.hass.services.async_call("script", "turn_on", service_data, blocking=False)
        self._append_log("success", f"Запущен {script_entity_id}")

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
    incoming_children_type = payload.get("children_type") or payload.get("type")
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
        values: list[Any] = [value.get("type", "")]
    elif isinstance(value, (list, tuple, set)):
        values = list(value)
    else:
        values = [value]

    normalized_values: list[str] = []
    for item in values:
        if isinstance(item, dict):
            normalized = _normalize_value(item.get("type"))
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


def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        CONF_SCENARIOS: list(stored.get(CONF_SCENARIOS, [])),
    }
