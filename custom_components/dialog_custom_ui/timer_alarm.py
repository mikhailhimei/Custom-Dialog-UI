"""Timer and alarm polling plus websocket API for Dialog Custom UI."""

from __future__ import annotations

import asyncio
import logging
from collections.abc import Iterable
from datetime import datetime, timedelta, tzinfo
from typing import Any
from zoneinfo import ZoneInfo

import aiohttp
import async_timeout
import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import aiohttp_client
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util

from .const import (
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_TIMEOUT,
    CONF_TIMER_ALARM_DEVICE_IDS,
    CONF_TIMER_ALARM_BASE_URL,
    CONF_TIMER_ALARM_CLIENT_ID,
    CONF_TIMER_ALARM_ITEMS,
    CONF_TIMER_ALARM_TOKEN,
    DEFAULT_BASE_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    WS_GET_TIMER_ALARM_CONFIG,
    WS_SAVE_TIMER_ALARM_CONFIG,
)

_LOGGER = logging.getLogger(__name__)
_TIMER_ALARM_PATH = "/api/timer-alarm/info"
_TIMER_ALARM_ADD_PATH = "/api/timer-alarm/add"
_TIMER_ALARM_DELETE_PATH = "/api/timer-alarm/delete"
_COORDINATOR_SUFFIX = ":timer_alarm"
_DEFAULT_TIMER_MEDIA_CONTENT_ID = "media-source://media_source/local/morning-meadow-birdsongs-looping_zyb7nhnu.mp3"
_DEFAULT_TIMER_MEDIA_CONTENT_TYPE = "music"


def async_register_timer_alarm_websockets(hass: HomeAssistant) -> None:
    """Register websocket commands for timer/alarm state."""
    websocket_api.async_register_command(hass, _ws_get_timer_alarm_config)
    websocket_api.async_register_command(hass, _ws_save_timer_alarm_config)


class TimerAlarmCoordinator:
    """Poll the timer/alarm endpoint and trigger local actions."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry) -> None:
        self.hass = hass
        self.entry = entry
        self._task: asyncio.Task | None = None
        self._session = aiohttp_client.async_get_clientsession(hass)
        domain_data = self.hass.data.setdefault(DOMAIN, {})
        self._triggered_alarm_keys = domain_data.setdefault("timer_alarm_triggered_alarm_keys", set())
        self._triggered_timer_keys = domain_data.setdefault("timer_alarm_triggered_timer_keys", set())

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
        self._append_log("info", "Timer/alarm configuration reloaded")

    async def _run(self) -> None:
        while True:
            try:
                await self._async_poll_once()
            except asyncio.CancelledError:
                raise
            except Exception as err:  # pragma: no cover - defensive logging
                self._append_log("error", f"Timer/alarm polling failed: {err}")
                _LOGGER.exception("Unexpected error while polling timer/alarm")

            await asyncio.sleep(1)

    async def _async_poll_once(self) -> None:
        options = _get_options(self.entry)
        base_url = options[CONF_BASE_URL].rstrip("/")
        client_id = options[CONF_CLIENT_ID].strip()
        device_ids = _normalize_device_ids(options[CONF_TIMER_ALARM_DEVICE_IDS])

        if not client_id:
            saved_items = [
                _normalize_item({**item, "userId": _normalize_value(item.get("userId") or client_id)})
                for item in options[CONF_TIMER_ALARM_ITEMS]
            ]
            self._store_state(
                {
                    "base_url": options[CONF_BASE_URL],
                    "client_id": client_id,
                    "items": saved_items,
                    "active_items": [item for item in saved_items if _is_on(item)],
                    "last_updated": None,
                }
            )
            return

        url = f"{base_url}{_TIMER_ALARM_PATH}"
        self._append_log(
            "request",
            f"POST {url} clientId={client_id} deviceIds={device_ids or []}",
        )
        headers = _timer_alarm_headers(options[CONF_TIMER_ALARM_TOKEN])

        request_timeout = max(1, int(options[CONF_TIMEOUT]))

        try:
            async with async_timeout.timeout(request_timeout):
                response = await self._session.post(
                    url,
                    json={"clientId": client_id, "device_id": device_ids},
                    headers=headers,
                )
        except (aiohttp.ClientError, TimeoutError) as err:
            self._append_log("error", f"Timer/alarm request failed: {err}")
            _LOGGER.debug("Timer/alarm poll failed for %s: %s", url, err)
            return

        if response.status == 204:
            saved_items = [
                _normalize_item({**item, "userId": _normalize_value(item.get("userId") or client_id)})
                for item in options[CONF_TIMER_ALARM_ITEMS]
            ]
            self._store_state(
                {
                    "base_url": options[CONF_BASE_URL],
                    "client_id": client_id,
                    "items": saved_items,
                    "active_items": [item for item in saved_items if _is_on(item)],
                    "last_updated": dt_util.now().isoformat(),
                }
            )
            self._append_log("idle", "Timer/alarm endpoint returned 204")
            return

        if response.status >= 400:
            body = await response.text()
            self._append_log("error", f"Timer/alarm endpoint returned {response.status}")
            _LOGGER.warning(
                "Timer/alarm endpoint returned %s: %s",
                response.status,
                body[:300],
            )
            return

        try:
            raw_payload = await response.json(content_type=None)
        except (aiohttp.ContentTypeError, ValueError) as err:
            body = await response.text()
            self._append_log("error", "Timer/alarm endpoint returned invalid JSON")
            _LOGGER.warning(
                "Timer/alarm endpoint returned invalid JSON: %s; body=%s",
                err,
                body[:300],
            )
            return

        items = _extract_items(raw_payload)
        merged_items = _merge_saved_items(items, options[CONF_TIMER_ALARM_ITEMS])
        normalized_items = [_normalize_item(item) for item in merged_items]
        active_items = sorted(
            (item for item in normalized_items if _is_on(item)),
            key=_sort_key,
        )

        state = {
            "base_url": options[CONF_BASE_URL],
            "client_id": client_id,
            "items": normalized_items,
            "active_items": active_items,
            "last_updated": dt_util.now().isoformat(),
        }
        self._store_state(state)

        if not active_items:
            self._append_log("idle", "Timer/alarm endpoint returned no active items")
            return

        self._append_log(
            "info",
            f"Active items: {', '.join(str(item.get('id') or item.get('name') or 'unknown') for item in active_items)}",
        )
        await self._evaluate_active_items(active_items)

    async def _evaluate_active_items(self, items: list[dict[str, Any]]) -> None:
        now = dt_util.now()
        for item in items:
            item_type = _normalize_value(item.get("type")).lower()
            if item_type == "timer":
                if _timer_is_due(item, now):
                    await self._trigger_timer(item)
            else:
                if _alarm_is_due(item, now):
                    await self._trigger_alarm(item)

    async def _trigger_alarm(self, item: dict[str, Any]) -> None:
        item_id = _normalize_value(item.get("id"))
        alarm_key = _alarm_trigger_key(item, dt_util.now())
        if not item_id or alarm_key in self._triggered_alarm_keys:
            return

        self._triggered_alarm_keys.add(alarm_key)
        self._append_log("match", f"Alarm due: {item_id}")
        await self._run_alarm_actions(item)

    async def _trigger_timer(self, item: dict[str, Any]) -> None:
        item_id = _normalize_value(item.get("id"))
        timer_key = _timer_trigger_key(item)
        if not item_id or timer_key in self._triggered_timer_keys:
            return

        self._triggered_timer_keys.add(timer_key)
        self._append_log("match", f"Timer due: {item_id}")
        await self._run_timer_actions(item)

    async def _run_alarm_actions(self, item: dict[str, Any]) -> None:
        device_ref = _normalize_value(item.get("deviceId") or item.get("device_id"))
        media_player_entity_id = _resolve_media_player_entity_id(self.hass, device_ref)
        if not media_player_entity_id:
            self._append_log("error", f"Alarm device not found: {device_ref or '<empty>'}")
            return

        await self.hass.services.async_call(
            "media_player",
            "media_play",
            {"entity_id": media_player_entity_id},
            blocking=False,
        )
        await self.hass.services.async_call(
            "media_player",
            "volume_set",
            {"entity_id": media_player_entity_id, "volume_level": 0.10},
            blocking=False,
        )
        self.hass.async_create_task(_ramp_volume(self.hass, media_player_entity_id, 0.10, 0.50, 5, 5))
        self._append_log("success", f"Alarm started on {media_player_entity_id}")

    async def _run_timer_actions(self, item: dict[str, Any]) -> None:
        device_ref = _normalize_value(item.get("deviceId") or item.get("device_id"))
        media_player_entity_id = _resolve_media_player_entity_id(self.hass, device_ref)
        if not media_player_entity_id:
            self._append_log("error", f"Timer device not found: {device_ref or '<empty>'}")
        else:
            media_content_id = _normalize_value(
                item.get("media_content_id")
                or item.get("mediaContentId")
                or _DEFAULT_TIMER_MEDIA_CONTENT_ID
            )
            media_title = media_content_id.rsplit("/", 1)[-1] or "timer"
            media_content_type = _normalize_value(
                item.get("media_content_type")
                or item.get("mediaContentType")
                or _DEFAULT_TIMER_MEDIA_CONTENT_TYPE
            ) or _DEFAULT_TIMER_MEDIA_CONTENT_TYPE

            await self.hass.services.async_call(
                "media_player",
                "turn_on",
                target={"entity_id": media_player_entity_id},
                blocking=False,
            )
            await self.hass.services.async_call(
                "media_player",
                "volume_set",
                {"volume_level": 0.40},
                target={"entity_id": media_player_entity_id},
                blocking=False,
            )
            await self.hass.services.async_call(
                "media_player",
                "play_media",
                {
                    "media_content_id": media_content_id,
                    "media_content_type": "music",
                    "enqueue": "replace",
                    "extra": {
                        "title": media_title,
                        "metadata": {
                            "title": media_title,
                            "media_class": "music",
                        },
                    },
                },
                target={"entity_id": media_player_entity_id},
                blocking=False,
            )
            self._append_log("success", f"Timer started on {media_player_entity_id}")

        await self._async_delete_timer(item)

    async def _async_delete_timer(self, item: dict[str, Any]) -> None:
        options = _get_options(self.entry)
        client_id = _normalize_value(item.get("userId") or item.get("user_id") or options[CONF_CLIENT_ID])
        item_id = _normalize_value(item.get("id"))
        if not client_id or not item_id:
            self._append_log("error", "Timer delete skipped because client_id or id is empty")
            return

        url = f"{options[CONF_BASE_URL].rstrip('/')}{_TIMER_ALARM_DELETE_PATH}"
        request_timeout = max(1, int(options[CONF_TIMEOUT]))
        headers = _timer_alarm_headers(options[CONF_TIMER_ALARM_TOKEN])

        try:
            async with async_timeout.timeout(request_timeout):
                response = await self._session.post(
                    url,
                    json={"client_id": client_id, "id": item_id},
                    headers=headers,
                )
        except (aiohttp.ClientError, TimeoutError) as err:
            self._append_log("error", f"Timer delete request failed: {err}")
            _LOGGER.debug("Timer delete failed for %s: %s", item_id, err)
            return

        if response.status >= 400:
            body = await response.text()
            self._append_log("error", f"Timer delete endpoint returned {response.status}")
            _LOGGER.warning("Timer delete endpoint returned %s: %s", response.status, body[:300])
            return

        self._append_log("success", f"Timer deleted on server: {item_id}")

    async def _async_add_timer(self, item: dict[str, Any], shared_client_id: str) -> dict[str, Any] | None:
        options = _get_options(self.entry)
        client_id = _normalize_value(item.get("userId") or item.get("user_id") or shared_client_id or options[CONF_CLIENT_ID])
        if not client_id:
            self._append_log("error", "Timer add skipped because client_id is empty")
            return None

        url = f"{options[CONF_BASE_URL].rstrip('/')}{_TIMER_ALARM_ADD_PATH}"
        request_timeout = max(1, int(options[CONF_TIMEOUT]))
        headers = _timer_alarm_headers(options[CONF_TIMER_ALARM_TOKEN])
        payload = _timer_add_payload(item, client_id)

        try:
            async with async_timeout.timeout(request_timeout):
                response = await self._session.post(
                    url,
                    json=payload,
                    headers=headers,
                )
        except (aiohttp.ClientError, TimeoutError) as err:
            self._append_log("error", f"Timer add request failed: {err}")
            _LOGGER.debug("Timer add failed for %s: %s", client_id, err)
            return None

        if response.status >= 400:
            body = await response.text()
            self._append_log("error", f"Timer add endpoint returned {response.status}")
            _LOGGER.warning("Timer add endpoint returned %s: %s", response.status, body[:300])
            return None

        if response.status == 204:
            self._append_log("success", f"Timer added on server for {client_id}")
            return None

        try:
            raw_payload = await response.json(content_type=None)
        except (aiohttp.ContentTypeError, ValueError) as err:
            body = await response.text()
            self._append_log("error", "Timer add endpoint returned invalid JSON")
            _LOGGER.warning(
                "Timer add endpoint returned invalid JSON: %s; body=%s",
                err,
                body[:300],
            )
            return None

        created_item = _extract_timer_item(raw_payload)
        if created_item is None:
            self._append_log("success", f"Timer added on server for {client_id}")
            return None

        normalized_created_item = _normalize_item(created_item)
        created_item_id = _normalize_value(normalized_created_item.get("id"))
        if not created_item_id:
            self._append_log("success", f"Timer added on server for {client_id}")
            return None

        self._append_log("success", f"Timer added on server: {created_item_id}")
        return normalized_created_item

    async def async_sync_timer_alarm_items(
        self,
        previous_items: list[dict[str, Any]],
        next_items: list[dict[str, Any]],
        shared_client_id: str,
    ) -> list[dict[str, Any]]:
        previous_timers = {
            _normalize_value(item.get("id")): item
            for item in previous_items
            if _normalize_value(item.get("type")).lower() == "timer" and _normalize_value(item.get("id"))
        }
        synced_items = list(next_items)
        seen_timer_ids: set[str] = set()

        for index, item in enumerate(next_items):
            if _normalize_value(item.get("type")).lower() != "timer":
                continue

            item_id = _normalize_value(item.get("id"))
            if not item_id:
                continue
            seen_timer_ids.add(item_id)

            previous_item = previous_timers.get(item_id)
            if previous_item is None:
                if _is_on(item):
                    created_item = await self._async_add_timer(item, shared_client_id)
                    if created_item is not None:
                        synced_items[index] = created_item
                continue

            if _timer_items_equal(previous_item, item, shared_client_id):
                continue

            await self._async_delete_timer(previous_item)
            if _is_on(item):
                created_item = await self._async_add_timer(item, shared_client_id)
                if created_item is not None:
                    synced_items[index] = created_item

        for previous_id, previous_item in previous_timers.items():
            if previous_id not in seen_timer_ids:
                await self._async_delete_timer(previous_item)

        return synced_items

    def _store_state(self, state: dict[str, Any]) -> None:
        domain_data = self.hass.data.setdefault(DOMAIN, {})
        domain_data["timer_alarm_state"] = state

    def _append_log(self, level: str, message: str) -> None:
        logs = self.hass.data[DOMAIN].setdefault("logs", [])
        logs.appendleft(
            {
                "ts": dt_util.now().strftime("%H:%M:%S"),
                "level": level,
                "message": message,
            }
        )


@websocket_api.websocket_command({vol.Required("type"): WS_GET_TIMER_ALARM_CONFIG})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_get_timer_alarm_config(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    state = dict(hass.data.get(DOMAIN, {}).get("timer_alarm_state", {}))
    options = _get_options(entry)
    connection.send_result(
        msg["id"],
        {
            "base_url": options[CONF_BASE_URL],
            "client_id": options[CONF_CLIENT_ID],
            "interval": options[CONF_TIMEOUT],
            "device_ids": options[CONF_TIMER_ALARM_DEVICE_IDS],
            "items": state.get("items", list(options[CONF_TIMER_ALARM_ITEMS])),
            "active_items": state.get("active_items", []),
            "last_updated": state.get("last_updated"),
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SAVE_TIMER_ALARM_CONFIG,
        vol.Optional(CONF_TIMER_ALARM_ITEMS, default=[]): [dict],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_timer_alarm_config(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return

    options = dict(entry.options)
    shared_client_id = _normalize_value(options.get(CONF_CLIENT_ID) or options.get(CONF_TIMER_ALARM_CLIENT_ID))
    previous_items = [item for item in options.get(CONF_TIMER_ALARM_ITEMS, []) if isinstance(item, dict)]
    timer_alarm_items = [
        _normalize_item({**item, "userId": _normalize_value(item.get("userId") or shared_client_id)})
        for item in msg[CONF_TIMER_ALARM_ITEMS]
    ]
    coordinator = hass.data[DOMAIN].get(_coordinator_key(entry))
    if coordinator is not None:
        timer_alarm_items = await coordinator.async_sync_timer_alarm_items(
            previous_items,
            timer_alarm_items,
            shared_client_id,
        )
    options[CONF_TIMER_ALARM_ITEMS] = timer_alarm_items

    hass.config_entries.async_update_entry(entry, options=options)
    if coordinator is not None:
        await coordinator.async_reload()

    connection.send_result(msg["id"], {"saved": True})


def _get_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None


def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, stored.get(CONF_TIMER_ALARM_BASE_URL, DEFAULT_BASE_URL)),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, stored.get(CONF_TIMER_ALARM_CLIENT_ID, "")),
        CONF_TIMER_ALARM_TOKEN: stored.get(CONF_TIMER_ALARM_TOKEN, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        CONF_TIMER_ALARM_DEVICE_IDS: _normalize_device_ids(
            stored.get(CONF_TIMER_ALARM_DEVICE_IDS, [])
        ),
        CONF_TIMER_ALARM_ITEMS: list(stored.get(CONF_TIMER_ALARM_ITEMS, [])),
    }


def _timer_alarm_headers(token: Any) -> dict[str, str]:
    headers = {"Accept": "application/json"}
    authorization = _normalize_value(token)
    if authorization:
        headers["Authorization"] = authorization
    return headers


def _timer_add_payload(item: dict[str, Any], client_id: str) -> dict[str, Any]:
    normalized = _normalize_item(item)
    time_data = normalized.get("time") if isinstance(normalized.get("time"), dict) else {}
    date_end = _normalize_value(
        time_data.get("date_end")
        or time_data.get("end_at")
        or time_data.get("finish_at")
        or item.get("date_end")
        or item.get("end_at")
        or item.get("finish_at")
    )
    count_timer = _normalize_value(time_data.get("count_timer") or time_data.get("duration") or "00:30:00") or "00:30:00"
    timezone = _normalize_value(
        time_data.get("timezone")
        or time_data.get("time_zone")
        or item.get("timezone")
        or item.get("time_zone")
        or _default_timezone_name()
    ) or _default_timezone_name()

    return {
        "userId": client_id,
        "type": "timer",
        "time": {
            "date_end": date_end,
            "count_timer": count_timer,
            "timezone": timezone,
        },
        "status": "on" if _is_on(item) else "off",
        "deviceId": _normalize_value(normalized.get("deviceId") or normalized.get("device_id")),
    }


def _timer_items_equal(left: dict[str, Any], right: dict[str, Any], shared_client_id: str) -> bool:
    return _timer_add_payload(left, _normalize_value(left.get("userId") or left.get("clientId") or shared_client_id)) == _timer_add_payload(
        right,
        _normalize_value(right.get("userId") or right.get("clientId") or shared_client_id),
    )


def _timer_item_fingerprint(item: dict[str, Any]) -> tuple[Any, ...]:
    payload = _timer_add_payload(item, _normalize_value(item.get("userId") or item.get("clientId") or item.get("client_id")))
    return (
        payload.get("userId", ""),
        payload.get("type", ""),
        payload.get("status", ""),
        payload.get("deviceId", ""),
        payload.get("time", {}).get("date_end", ""),
        payload.get("time", {}).get("count_timer", ""),
        payload.get("time", {}).get("timezone", ""),
    )


def _extract_timer_item(raw_payload: Any) -> dict[str, Any] | None:
    if isinstance(raw_payload, dict):
        body = raw_payload.get("body")
        if isinstance(body, dict):
            if isinstance(body.get("item"), dict):
                return body["item"]
            if isinstance(body.get("data"), dict):
                return body["data"]
            return body
        if isinstance(raw_payload.get("item"), dict):
            return raw_payload["item"]
        if isinstance(raw_payload.get("data"), dict):
            return raw_payload["data"]
        return raw_payload

    if isinstance(raw_payload, list) and len(raw_payload) == 1 and isinstance(raw_payload[0], dict):
        return raw_payload[0]

    return None


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


def _coordinator_key(entry: ConfigEntry) -> str:
    return f"{entry.entry_id}{_COORDINATOR_SUFFIX}"


def _normalize_value(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()


def _normalize_device_ids(values: Any) -> list[str]:
    if isinstance(values, str):
        values = [values]
    if not isinstance(values, Iterable):
        return []
    return [device_id for device_id in (_normalize_value(value) for value in values) if device_id]


def _normalize_item(item: dict[str, Any]) -> dict[str, Any]:
    normalized: dict[str, Any] = {
        "id": _normalize_value(item.get("id")) or _generate_id(),
        "name": _normalize_value(item.get("name")),
        "type": _normalize_value(item.get("type")).lower() or "alarm",
        "clientId": _normalize_value(
            item.get("clientId")
            or item.get("client_id")
            or item.get("userId")
            or item.get("user_id")
        ),
        "userId": _normalize_value(item.get("userId") or item.get("user_id") or item.get("client_id")),
        "deviceId": _normalize_value(item.get("deviceId") or item.get("device_id")),
        "status": "on" if _is_on(item) else "off",
    }

    time_value = item.get("time")
    if isinstance(time_value, dict):
        normalized["time"] = {
            key: value
            for key, value in time_value.items()
            if value is not None and value != ""
        }
    elif isinstance(time_value, str):
        normalized["time"] = time_value.strip()
    else:
        normalized["time"] = {}

    if normalized["type"] == "alarm":
        normalized["time"] = _normalize_alarm_time(item, normalized["time"])
    else:
        normalized["time"] = _normalize_timer_time(item, normalized["time"])

    return normalized


def _normalize_alarm_time(item: dict[str, Any], value: Any) -> dict[str, Any]:
    if isinstance(value, dict):
        alarm_time = _normalize_value(value.get("time") or value.get("alarm_time") or item.get("alarm_time"))
        days = value.get("days") or value.get("days_of_week") or item.get("days") or []
        repeat_mode = _normalize_value(value.get("repeat_mode") or item.get("repeat_mode")).lower()
    else:
        alarm_time = _normalize_value(value or item.get("alarm_time"))
        days = item.get("days") or []
        repeat_mode = _normalize_value(item.get("repeat_mode")).lower()

    if not alarm_time:
        alarm_time = "08:00"

    if repeat_mode not in {"every_day", "once", "custom"}:
        repeat_mode = "every_day" if _looks_like_every_day(days) else "once"

    normalized_days = _normalize_days(days)
    if repeat_mode == "every_day":
        normalized_days = [1, 2, 3, 4, 5, 6, 7]
    elif repeat_mode == "once":
        normalized_days = []

    return {
        "time": alarm_time,
        "repeat_mode": repeat_mode,
        "days": normalized_days,
    }


def _normalize_timer_time(item: dict[str, Any], value: Any) -> dict[str, Any]:
    if isinstance(value, dict):
        count_timer = _normalize_value(
            value.get("count_timer")
            or value.get("duration")
            or item.get("count_timer")
            or item.get("duration")
        )
        date_end = _normalize_value(
            value.get("date_end")
            or value.get("end_at")
            or value.get("finish_at")
            or item.get("date_end")
            or item.get("end_at")
        )
        time_zone = _normalize_value(
            value.get("time_zone")
            or value.get("timezone")
            or item.get("time_zone")
            or item.get("timezone")
        )
    else:
        count_timer = _normalize_value(item.get("count_timer") or item.get("duration"))
        date_end = _normalize_value(item.get("date_end") or item.get("end_at"))
        time_zone = _normalize_value(item.get("time_zone") or item.get("timezone"))

    if not count_timer:
        count_timer = "00:30:00"
    if not time_zone:
        time_zone = _default_timezone_name()

    return {
        "count_timer": count_timer,
        "date_end": date_end,
        "timezone": time_zone,
        "time_zone": time_zone,
    }


def _merge_saved_items(remote_items: list[dict[str, Any]], saved_items: Iterable[dict[str, Any]]) -> list[dict[str, Any]]:
    merged: dict[str, dict[str, Any]] = {}
    timer_fingerprints: dict[str, str] = {}

    for item in remote_items:
        normalized = _normalize_item(item)
        merged[normalized["id"]] = normalized
        if normalized["type"] == "timer":
            timer_fingerprints[_timer_item_fingerprint(normalized)] = normalized["id"]

    for item in saved_items:
        if not isinstance(item, dict):
            continue
        normalized = _normalize_item(item)
        if normalized["type"] == "timer":
            fingerprint = _timer_item_fingerprint(normalized)
            existing_id = timer_fingerprints.get(fingerprint)
            if existing_id:
                merged[existing_id] = {**merged.get(existing_id, {}), **normalized, "id": existing_id}
                continue
            timer_fingerprints[fingerprint] = normalized["id"]
        merged[normalized["id"]] = normalized

    return list(merged.values())


def _extract_items(raw_payload: Any) -> list[dict[str, Any]]:
    if isinstance(raw_payload, list):
        return [item for item in raw_payload if isinstance(item, dict)]
    if isinstance(raw_payload, dict):
        if isinstance(raw_payload.get("body"), list):
            return [item for item in raw_payload["body"] if isinstance(item, dict)]
        if isinstance(raw_payload.get("body"), dict):
            body = raw_payload["body"]
            if isinstance(body.get("items"), list):
                return [item for item in body["items"] if isinstance(item, dict)]
        if isinstance(raw_payload.get("items"), list):
            return [item for item in raw_payload["items"] if isinstance(item, dict)]
    return []


def _is_on(item: dict[str, Any]) -> bool:
    status = item.get("status")
    if isinstance(status, bool):
        return status
    return _normalize_value(status).lower() == "on"


def _sort_key(item: dict[str, Any]) -> tuple[int, str, str]:
    due = _next_due_timestamp(item)
    return (due if due is not None else 10**18, _normalize_value(item.get("type")), _normalize_value(item.get("id")))


def _next_due_timestamp(item: dict[str, Any]) -> int | None:
    now = dt_util.now()
    item_type = _normalize_value(item.get("type")).lower()
    if item_type == "timer":
        end_at = _parse_datetime_from_item(item)
        if end_at is None:
            return None
        return int(end_at.timestamp())

    alarm_dt = _next_alarm_datetime(item, now)
    return int(alarm_dt.timestamp()) if alarm_dt else None


def _alarm_is_due(item: dict[str, Any], now: datetime) -> bool:
    alarm_dt = _next_alarm_datetime(item, now)
    if alarm_dt is None:
        return False

    return now >= alarm_dt


def _timer_is_due(item: dict[str, Any], now: datetime) -> bool:
    end_at = _parse_datetime_from_item(item)
    if end_at is None:
        return False
    return now >= end_at


def _next_alarm_datetime(item: dict[str, Any], now: datetime) -> datetime | None:
    time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
    alarm_time = _normalize_value(time_data.get("time") or item.get("alarm_time"))
    if not alarm_time:
        return None

    try:
        hour_str, minute_str = alarm_time.split(":", 1)
        hour = int(hour_str)
        minute = int(minute_str)
    except (ValueError, TypeError):
        return None

    base = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
    repeat_mode = _normalize_value(time_data.get("repeat_mode") or item.get("repeat_mode")).lower()
    days = _normalize_days(time_data.get("days") or item.get("days") or [])

    if repeat_mode == "once":
        return base

    if repeat_mode == "every_day" or not days:
        if now <= base:
            return base
        return base + timedelta(days=1)

    today = now.isoweekday()
    allowed_days = days
    for offset in range(0, 8):
        candidate = now + timedelta(days=offset)
        if candidate.isoweekday() not in allowed_days:
            continue
        candidate_dt = candidate.replace(hour=hour, minute=minute, second=0, microsecond=0)
        if candidate_dt >= now:
            return candidate_dt

    # Fallback to the next matching day if everything for this week has passed.
    for offset in range(1, 8):
        candidate = now + timedelta(days=offset)
        if candidate.isoweekday() in allowed_days:
            return candidate.replace(hour=hour, minute=minute, second=0, microsecond=0)

    return base


def _parse_datetime_from_item(item: dict[str, Any]) -> datetime | None:
    time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
    end_at = _normalize_value(
        time_data.get("date_end")
        or time_data.get("end_at")
        or time_data.get("finish_at")
        or item.get("date_end")
        or item.get("end_at")
    )
    if not end_at:
        return None
    parsed = dt_util.parse_datetime(end_at)
    if parsed is None:
        parsed = _parse_naive_datetime(end_at, time_data.get("time_zone") or time_data.get("timezone") or item.get("time_zone") or item.get("timezone"))
        if parsed is None:
            return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=_get_zoneinfo(time_data.get("time_zone") or time_data.get("timezone") or item.get("time_zone") or item.get("timezone")))
    return dt_util.as_local(parsed)


def _normalize_days(days: Any) -> list[int]:
    if isinstance(days, str):
        raw_values = [part.strip() for part in days.split(",")]
    elif isinstance(days, Iterable):
        raw_values = list(days)
    else:
        raw_values = []

    normalized: list[int] = []
    for value in raw_values:
        try:
            day = int(value)
        except (TypeError, ValueError):
            continue
        if 1 <= day <= 7 and day not in normalized:
            normalized.append(day)
    return normalized


def _looks_like_every_day(days: Any) -> bool:
    normalized = _normalize_days(days)
    return normalized == [1, 2, 3, 4, 5, 6, 7]


def _alarm_trigger_key(item: dict[str, Any], now: datetime) -> str:
    repeat_mode = _normalize_value(
        item.get("time", {}).get("repeat_mode") if isinstance(item.get("time"), dict) else item.get("repeat_mode")
    ).lower()
    if repeat_mode == "once":
        return f"{_normalize_value(item.get('id'))}:once"
    return f"{_normalize_value(item.get('id'))}:{now.date().isoformat()}"


def _timer_trigger_key(item: dict[str, Any]) -> str:
    end_at = _parse_datetime_from_item(item)
    if end_at is None:
        return f"{_normalize_value(item.get('id'))}:unknown"
    return f"{_normalize_value(item.get('id'))}:{int(end_at.timestamp())}"


def _generate_id() -> str:
    return f"timer_alarm_{int(dt_util.now().timestamp() * 1000)}"


def _default_timezone_name() -> str:
    tzinfo = dt_util.now().tzinfo
    return getattr(tzinfo, "key", None) or str(tzinfo or "")


def _get_zoneinfo(value: Any) -> ZoneInfo | tzinfo | None:
    tz_name = _normalize_value(value)
    if tz_name:
        try:
            return ZoneInfo(tz_name)
        except Exception:
            pass
    return dt_util.now().tzinfo


def _parse_naive_datetime(value: str, timezone: Any) -> datetime | None:
    try:
        parsed = datetime.fromisoformat(value.replace(" ", "T"))
    except ValueError:
        return None

    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=_get_zoneinfo(timezone))
    return parsed


async def _ramp_volume(
    hass: HomeAssistant,
    entity_id: str,
    start_volume: float,
    target_volume: float,
    step: float,
    interval_seconds: int,
) -> None:
    """Ramp media_player volume in small steps."""
    volume = start_volume
    while volume < target_volume:
        await asyncio.sleep(interval_seconds)
        volume = min(target_volume, volume + step)
        await hass.services.async_call(
            "media_player",
            "volume_set",
            {"entity_id": entity_id, "volume_level": round(volume, 2)},
            blocking=False,
        )
