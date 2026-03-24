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
    ATTR_PARENT_TYPE,
    ATTR_SCRIPT_ENTITY_ID,
    ATTR_TYPE,
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
                f"Нет совпадения для type={_normalize_value(payload.get('type')) or '<empty>'} parent_type={_normalize_value(payload.get('parent_type')) or '<empty>'}",
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
                "dialog_type": payload.get("type"),
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
    incoming_type = _normalize_value(payload.get("type"))
    incoming_parent_type = _normalize_value(payload.get("parent_type"))

    for scenario in scenarios:
        expected_type = _normalize_value(scenario.get(ATTR_TYPE))
        expected_parent = _normalize_value(scenario.get(ATTR_PARENT_TYPE))

        if not expected_type and not expected_parent:
            continue
        if expected_type and not _matches_expected_value(expected_type, incoming_type):
            continue
        if expected_parent and not _matches_expected_value(expected_parent, incoming_parent_type):
            continue
        if not _normalize_value(scenario.get(ATTR_SCRIPT_ENTITY_ID)):
            continue

        return scenario

    return None


def _normalize_value(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()


def _matches_expected_value(expected_value: str, incoming_value: str) -> bool:
    if not expected_value:
        return True

    allowed_values = [
        part.strip()
        for part in expected_value.split(";")
        if part.strip()
    ]
    if not allowed_values:
        return not incoming_value

    return incoming_value in allowed_values


def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        CONF_SCENARIOS: list(stored.get(CONF_SCENARIOS, [])),
    }
