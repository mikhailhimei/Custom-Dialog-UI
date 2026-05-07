"""Polling coordinator for Dialog Custom UI."""

from __future__ import annotations

import asyncio
import json
import logging
from datetime import datetime
from typing import Any

import aiohttp
import async_timeout
import redis.asyncio as redis

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import aiohttp_client

from .const import (
    ATTR_CHILDREN_DIRECT_TYPE,
    ATTR_CHILDREN_TYPE,
    ATTR_PARENT_TYPE,
    ATTR_SCRIPT_ENTITY_ID,
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_COMMAND_RECEIVE_MODE,
    CONF_REDIS_CHANNEL,
    CONF_REDIS_PASSWORD,
    CONF_REDIS_URL,
    CONF_REDIS_USERNAME,
    CONF_SCENARIOS,
    CONF_TIMEOUT,
    CONF_TIMER_ALARM_ITEMS,
    CONF_TIMER_ALARM_PRESETS,
    CONF_TIMER_ALARM_TOKEN,
    DEFAULT_BASE_URL,
    DEFAULT_COMMAND_RECEIVE_MODE,
    DEFAULT_REDIS_CHANNEL,
    DEFAULT_REDIS_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    UPDATE_INTERVAL_SECONDS,
)
from .timer_alarm_manager import DialogTimerAlarmManager

_LOGGER = logging.getLogger(__name__)


class DialogCommandCoordinator:
    """Background poller that dispatches payloads into HA scripts."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry) -> None:
        self.hass = hass
        self.entry = entry
        self._task: asyncio.Task | None = None
        self._session = aiohttp_client.async_get_clientsession(hass)
        self.timer_alarm_manager = DialogTimerAlarmManager(
            hass,
            self._append_log,
            self._async_post_save_commands,
        )

    async def async_start(self) -> None:
        if self._task and not self._task.done():
            return
        await self.timer_alarm_manager.async_restore_from_options(_get_options(self.entry))
        self._task = self.hass.async_create_task(self._run())

    async def async_stop(self) -> None:
        if self._task:
            self._task.cancel()
            try:
                await self._task
            except asyncio.CancelledError:
                pass
            self._task = None
        await self.timer_alarm_manager.async_stop()

    async def async_reload(self) -> None:
        await self.async_stop()
        await self.async_start()
        self._append_log("info", "Configuration reloaded")

    async def _run(self) -> None:
        while True:
            try:
                options = _get_options(self.entry)
                await self._async_subscribe_redis(options)
            except asyncio.CancelledError:
                raise
            except Exception as err:
                self._append_log("error", f"Command receiver error: {err}")
                _LOGGER.exception("Unexpected error while receiving dialog command")
            await asyncio.sleep(UPDATE_INTERVAL_SECONDS)

    async def _async_subscribe_redis(self, options: dict[str, Any]) -> None:
        redis_url = _normalize_value(options.get(CONF_REDIS_URL)) or DEFAULT_REDIS_URL
        client_id = _normalize_value(options.get(CONF_CLIENT_ID))
        if not client_id:
            self._append_log("error", "client_id is required for Redis subscribe")
            await asyncio.sleep(UPDATE_INTERVAL_SECONDS)
            return
        channel = f"ACTIVE_COMMAND:{client_id}"
        timeout = max(1, int(options.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)))
        redis_password = _normalize_value(options.get(CONF_REDIS_PASSWORD))
        client = redis.Redis.from_url(
            redis_url,
            decode_responses=True,
            password=redis_password or None,
        )
        pubsub = client.pubsub()
        self._append_log("request", f"SUBSCRIBE {channel}")
        try:
            async with async_timeout.timeout(timeout):
                await pubsub.subscribe(channel)
            while True:
                current_options = _get_options(self.entry)
                if (
                    _normalize_value(current_options.get(CONF_REDIS_URL)) != redis_url
                    or _normalize_value(current_options.get(CONF_CLIENT_ID)) != client_id
                    or _normalize_value(current_options.get(CONF_REDIS_PASSWORD)) != redis_password
                ):
                    return

                message = await pubsub.get_message(ignore_subscribe_messages=True, timeout=UPDATE_INTERVAL_SECONDS)
                if not message:
                    continue

                raw_data = message.get("data")
                if raw_data in (None, ""):
                    continue
                try:
                    raw_payload = json.loads(raw_data) if isinstance(raw_data, str) else raw_data
                except (TypeError, json.JSONDecodeError) as err:
                    self._append_log("error", "Redis message contained invalid JSON")
                    _LOGGER.warning("Redis message contained invalid JSON: %s; data=%r", err, raw_data)
                    continue

                await self._async_handle_raw_payload(raw_payload, current_options, "Redis")
        except (redis.RedisError, TimeoutError) as err:
            self._append_log("error", f"Redis subscribe failed: {err}")
            _LOGGER.warning("Redis subscribe failed: %s", err)
        finally:
            try:
                await pubsub.unsubscribe(channel)
            except redis.RedisError:
                pass
            close_pubsub = getattr(pubsub, "aclose", None) or getattr(pubsub, "close", None)
            if close_pubsub:
                result = close_pubsub()
                if hasattr(result, "__await__"):
                    await result
            close_client = getattr(client, "aclose", None) or getattr(client, "close", None)
            if close_client:
                result = close_client()
                if hasattr(result, "__await__"):
                    await result

    async def _async_handle_raw_payload(
        self,
        raw_payload: Any,
        options: dict[str, Any],
        source_label: str,
    ) -> None:
        payloads = _extract_payload(raw_payload)
        if not payloads:
            self._append_log("idle", f"{source_label} returned empty payload")
            return

        for payload in payloads:
            if not isinstance(payload, dict) or not payload:
                self._append_log("idle", f"{source_label} returned empty payload")
                return

            scenario = _match_scenario(payload, options[CONF_SCENARIOS])
            if not scenario:
                self._append_log(
                    "idle",
                    (
                        "No match for "
                        f"children_type={_describe_payload_type(payload.get('children_type') or payload.get('actionType'))} "
                        f"children_direct_type={_describe_payload_type(payload.get(ATTR_CHILDREN_DIRECT_TYPE))} "
                        f"parent_type={_normalize_value(payload.get('parent_type')) or '<empty>'}"
                    ),
                )
                return

            self._append_log("match", f"Matched -> {scenario[ATTR_SCRIPT_ENTITY_ID]}")
            await self.timer_alarm_manager.async_handle_builtin(scenario, payload, options)
            await self._async_run_script(scenario[ATTR_SCRIPT_ENTITY_ID], payload)

    async def _async_run_script(self, script_entity_id: str, payload: dict[str, Any]) -> None:
        if not self.hass.states.get(script_entity_id):
            self._append_log("error", f"Script not found: {script_entity_id}")
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
        self._append_log("success", f"Started {script_entity_id}")

    async def _async_post_save_commands(self, options: dict[str, Any], body: dict[str, Any]) -> None:
        # HTTP save-commands path removed in Redis-only mode.
        return

    def get_ha_timer_ids(self) -> set[str]:
        return self.timer_alarm_manager.get_ha_timer_ids()

    def get_ha_timer_items(self) -> list[dict[str, Any]]:
        return self.timer_alarm_manager.get_ha_timer_items()

    async def async_cancel_ha_timer(self, timer_id: str) -> bool:
        return await self.timer_alarm_manager.async_cancel_ha_timer(timer_id)

    def _append_log(self, level: str, message: str) -> None:
        logs = self.hass.data[DOMAIN].setdefault("logs", [])
        logs.appendleft({"ts": datetime.now().strftime("%H:%M:%S"), "level": level, "message": message})


def _extract_payload(raw_payload: Any) -> list[dict[str, Any]] | None:
    if raw_payload is None:
        return None

    # CASE 1: wrapped response
    if isinstance(raw_payload, dict):
        if raw_payload.get("status") is False:
            return None

        body = raw_payload.get("body")

        if isinstance(body, list):
            return body

        if isinstance(body, dict):
            return [body]

        # Redis SUBSCRIBE commonly publishes the command payload directly.
        # Accept raw dict payloads too, while still honoring status=false wrappers.
        return [raw_payload]

    # CASE 2: raw list response
    if isinstance(raw_payload, list):
        return raw_payload

    return None


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
    return [normalized for normalized in (_normalize_value(item) for item in values) if normalized]


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
    allowed_values = [part.strip() for part in expected_value.split(";") if part.strip()]
    if not allowed_values:
        return not _normalize_values(incoming_value)
    return any(value in allowed_values for value in _normalize_values(incoming_value))


def _matches_children_type(expected_value: str, incoming_value: Any) -> bool:
    allowed_values = [part.strip().lower() for part in expected_value.split(";") if part.strip()]
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


def _matches_children_direct_type(expected_value: str, incoming_value: Any) -> bool:
    allowed_values = [part.strip().lower() for part in expected_value.split(";") if part.strip()]
    if not allowed_values:
        return not _normalize_children_direct_type_values(incoming_value)
    if "all" in allowed_values:
        return bool(_normalize_children_direct_type_values(incoming_value))
    return any(value.lower() in allowed_values for value in _normalize_children_direct_type_values(incoming_value))


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
    if expected_children_direct_type and not _matches_children_direct_type(expected_children_direct_type, incoming_children_direct_type):
        return False
    return True


def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, ""),
        CONF_REDIS_URL: stored.get(CONF_REDIS_URL, DEFAULT_REDIS_URL),
        CONF_TIMER_ALARM_TOKEN: stored.get(CONF_TIMER_ALARM_TOKEN, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        CONF_SCENARIOS: list(stored.get(CONF_SCENARIOS, [])),
        CONF_TIMER_ALARM_ITEMS: list(stored.get(CONF_TIMER_ALARM_ITEMS, [])),
        CONF_TIMER_ALARM_PRESETS: list(stored.get(CONF_TIMER_ALARM_PRESETS, [])),
    }
