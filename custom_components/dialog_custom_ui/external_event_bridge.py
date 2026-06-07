"""External active-command event bridge for Dialog Custom UI."""

from __future__ import annotations

import asyncio
import json
import logging
from typing import Any
from urllib.parse import urlencode

import aiohttp
import async_timeout

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import (
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_TIMER_ALARM_TOKEN,
    EVENT_ACTIVE_COMMAND,
    EVENT_DIALOG_MESSAGE,
)
from .normalize import _normalize_value
from .utils import _get_options

_LOGGER = logging.getLogger(__name__)

_RECONNECT_DELAY_SECONDS = 5
_STREAM_TIMEOUT_SECONDS = 60 * 60
_POST_TIMEOUT_SECONDS = 15
_ORIGIN_EXTERNAL_BRIDGE = "external_event_bridge"


def _normalize_base_url(value: Any) -> str:
    base_url = _normalize_value(value).rstrip("/")
    if not base_url:
        return ""
    if not base_url.startswith(("http://", "https://")):
        base_url = f"http://{base_url}"
    return base_url


def _append_query(url: str, params: dict[str, str]) -> str:
    clean_params = {key: value for key, value in params.items() if value}
    if not clean_params:
        return url
    separator = "&" if "?" in url else "?"
    return f"{url}{separator}{urlencode(clean_params)}"


def _build_stream_url(base_url: str, client_id: str) -> str:
    """Build stream URL from CONF_BASE_URL.

    If the configured URL already looks like a concrete endpoint, keep it as-is.
    Otherwise use the integration convention under /api/dialog/events.
    """
    if "/api/" in base_url or base_url.endswith(("/events", "/stream", "/sse")):
        return _append_query(base_url, {"clientId": client_id})
    return _append_query(f"{base_url}/api/dialog/events", {"clientId": client_id})


def _build_post_url(base_url: str) -> str:
    if "/api/" in base_url:
        return base_url
    return f"{base_url}/api/dialog/events"


def _json_or_raw(value: str) -> Any:
    value = value.strip()
    if not value:
        return None
    try:
        return json.loads(value)
    except ValueError:
        return {"data": value}


def _event_type(payload: dict[str, Any]) -> str:
    return _normalize_value(
        payload.get("event")
        or payload.get("event_type")
        or payload.get("type")
        or payload.get("name")
    ).lower()


def _normalize_event_data(data: dict[str, Any]) -> dict[str, Any]:
    normalized = dict(data)
    if "client_id" not in normalized and normalized.get("clientId") is not None:
        normalized["client_id"] = normalized.get("clientId")
    if "device_id" not in normalized and normalized.get("deviceId") is not None:
        normalized["device_id"] = normalized.get("deviceId")
    if "command_data" not in normalized and normalized.get("commandData") is not None:
        normalized["command_data"] = normalized.get("commandData")
    return normalized


def _extract_event_data(payload: Any) -> tuple[str, dict[str, Any]] | None:
    if not isinstance(payload, dict):
        return None

    event_type = _event_type(payload)
    data = payload.get("data")

    if isinstance(data, str):
        parsed = _json_or_raw(data)
        data = parsed if isinstance(parsed, dict) else {"data": parsed}
    elif not isinstance(data, dict):
        data = payload

    if not isinstance(data, dict):
        return None

    if event_type in {EVENT_ACTIVE_COMMAND, "active_command", "dialog_custom_ui_active_command"}:
        return EVENT_ACTIVE_COMMAND, data

    if event_type in {EVENT_DIALOG_MESSAGE, "dialog_message", "dialog_command"}:
        return EVENT_DIALOG_MESSAGE, data

    if "command_data" in data:
        return EVENT_ACTIVE_COMMAND, data

    if {"client_id", "device_id"}.issubset(data.keys()) or {"clientId", "deviceId"}.issubset(data.keys()):
        return EVENT_DIALOG_MESSAGE, data

    return None


class ExternalEventBridge:
    """Subscribe to external events and mirror HA dialog events over HTTP."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        append_log,
    ) -> None:
        self.hass = hass
        self.entry = entry
        self._append_log = append_log
        self._session: aiohttp.ClientSession | None = None
        self._listen_task: asyncio.Task | None = None
        self._unsubs: list[Any] = []
        self._stopping = False

    async def async_start(self) -> None:
        if self._listen_task:
            return

        options = _get_options(self.entry)
        base_url = _normalize_base_url(options.get(CONF_BASE_URL))
        if not base_url:
            self._append_log("error", "external bridge skipped: base_url is empty")
            return

        self._session = async_get_clientsession(self.hass)
        self._stopping = False
        self._unsubs = [
            self.hass.bus.async_listen(EVENT_DIALOG_MESSAGE, self._handle_outbound_event),
        ]
        self._listen_task = self.hass.async_create_task(self._listen_loop())
        self._append_log("info", "external bridge started")

    async def async_stop(self) -> None:
        had_state = bool(self._listen_task or self._unsubs)
        self._stopping = True
        for unsub in self._unsubs:
            try:
                unsub()
            except Exception:
                _LOGGER.debug("Failed to unsubscribe external bridge listener", exc_info=True)
        self._unsubs = []

        task = self._listen_task
        self._listen_task = None
        if task:
            task.cancel()
            try:
                await task
            except asyncio.CancelledError:
                pass
        if had_state:
            self._append_log("info", "external bridge stopped")

    async def _listen_loop(self) -> None:
        while not self._stopping:
            options = _get_options(self.entry)
            base_url = _normalize_base_url(options.get(CONF_BASE_URL))
            client_id = _normalize_value(options.get(CONF_CLIENT_ID))
            token = _normalize_value(options.get(CONF_TIMER_ALARM_TOKEN))

            if not base_url:
                await asyncio.sleep(_RECONNECT_DELAY_SECONDS)
                continue

            stream_url = _build_stream_url(base_url, client_id)
            headers = {"Accept": "text/event-stream, application/x-ndjson, application/json"}
            if token:
                headers["Authorization"] = token

            try:
                await self._consume_stream(stream_url, headers)
            except asyncio.CancelledError:
                raise
            except Exception as err:
                _LOGGER.warning("External event stream failed: %s", err)
                self._append_log("error", f"external stream failed: {err}")

            if not self._stopping:
                await asyncio.sleep(_RECONNECT_DELAY_SECONDS)

    async def _consume_stream(self, stream_url: str, headers: dict[str, str]) -> None:
        if self._session is None:
            return

        _LOGGER.debug("Subscribing to external event stream: %s", stream_url)
        self._append_log("request", f"LISTEN {stream_url}")

        async with async_timeout.timeout(_STREAM_TIMEOUT_SECONDS):
            async with self._session.get(stream_url, headers=headers) as response:
                response.raise_for_status()
                content_type = response.headers.get("Content-Type", "")
                if "application/json" in content_type and "stream" not in content_type:
                    payload = await response.json(content_type=None)
                    self._dispatch_external_payload(payload)
                    return

                event_name = ""
                data_lines: list[str] = []
                async for raw_line in response.content:
                    line = raw_line.decode("utf-8", errors="ignore").strip()
                    if not line:
                        self._flush_sse_event(event_name, data_lines)
                        event_name = ""
                        data_lines = []
                        continue
                    if line.startswith(":"):
                        continue
                    if line.startswith("event:"):
                        event_name = line[6:].strip()
                        continue
                    if line.startswith("data:"):
                        data_lines.append(line[5:].strip())
                        continue

                    payload = _json_or_raw(line)
                    self._dispatch_external_payload(payload)

                self._flush_sse_event(event_name, data_lines)

    def _flush_sse_event(self, event_name: str, data_lines: list[str]) -> None:
        if not data_lines:
            return
        payload = _json_or_raw("\n".join(data_lines))
        if event_name and isinstance(payload, dict) and "event" not in payload and "type" not in payload:
            payload = {"event": event_name, "data": payload}
        self._dispatch_external_payload(payload)

    def _dispatch_external_payload(self, payload: Any) -> None:
        extracted = _extract_event_data(payload)
        if extracted is None:
            _LOGGER.debug("Ignored external event payload: %s", payload)
            return

        event_type, data = extracted
        if data.get("origin") == _ORIGIN_EXTERNAL_BRIDGE:
            return

        event_data = _normalize_event_data(data)
        event_data["origin"] = _ORIGIN_EXTERNAL_BRIDGE
        self.hass.bus.async_fire(event_type, event_data)
        self._append_log("event", f"RECV {event_type}")

    @callback
    def _handle_outbound_event(self, event: Event) -> None:
        data = event.data or {}
        if data.get("origin") == _ORIGIN_EXTERNAL_BRIDGE:
            return
        self.hass.async_create_task(self._post_event(event.event_type, data))

    async def _post_event(self, event_type: str, data: dict[str, Any]) -> None:
        if self._session is None:
            return

        options = _get_options(self.entry)
        base_url = _normalize_base_url(options.get(CONF_BASE_URL))
        token = _normalize_value(options.get(CONF_TIMER_ALARM_TOKEN))
        if not base_url:
            return

        payload = {
            "event": event_type,
            "clientId": _normalize_value(options.get(CONF_CLIENT_ID)),
            "data": _normalize_event_data(data),
        }
        headers = {"Content-Type": "application/json"}
        if token:
            headers["Authorization"] = token

        post_url = _build_post_url(base_url)
        try:
            async with async_timeout.timeout(_POST_TIMEOUT_SECONDS):
                async with self._session.post(post_url, json=payload, headers=headers) as response:
                    if response.status >= 400:
                        body = await response.text()
                        raise aiohttp.ClientResponseError(
                            response.request_info,
                            response.history,
                            status=response.status,
                            message=body[:200],
                            headers=response.headers,
                        )
            self._append_log("request", f"POST {event_type}")
        except (aiohttp.ClientError, TimeoutError) as err:
            _LOGGER.warning("Failed to post external dialog event: %s", err)
            self._append_log("error", f"external post failed: {err}")
