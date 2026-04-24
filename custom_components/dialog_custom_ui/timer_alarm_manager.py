"""Timer and alarm runtime manager plus websocket API."""

from __future__ import annotations

import asyncio
import logging
import re
import uuid
from collections.abc import Awaitable, Callable, Iterable
from datetime import datetime, timedelta
from typing import Any
from zoneinfo import ZoneInfo

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util

from .const import (
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_TIMEOUT,
    CONF_TIMER_ALARM_DEVICE_IDS,
    CONF_TIMER_ALARM_ITEMS,
    DEFAULT_BASE_URL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    WS_GET_TIMER_ALARM_CONFIG,
    WS_SAVE_TIMER_ALARM_CONFIG,
)

_LOGGER = logging.getLogger(__name__)
_DEFAULT_TIMER_MEDIA_CONTENT_ID = "media-source://media_source/local/morning-meadow-birdsongs-looping_zyb7nhnu.mp3"
_TIMER_PREFIX = "ha_timer:"
_ALARM_PREFIX = "ha_alarm:"


class DialogTimerAlarmManager:
    """In-memory timer/alarm manager owned by command coordinator."""

    def __init__(
        self,
        hass: HomeAssistant,
        append_log: Callable[[str, str], None],
        post_save_commands: Callable[[dict[str, Any], dict[str, Any]], Awaitable[None]],
    ) -> None:
        self.hass = hass
        self._append_log = append_log
        self._post_save_commands = post_save_commands

        self._timers: dict[str, dict[str, Any]] = {}
        self._alarms: dict[str, dict[str, Any]] = {}
        self._alarm_presets: set[str] = set()
        self._triggered_alarm_keys: set[str] = set()

        self._alarm_tick_task: asyncio.Task | None = None
        self._last_updated: str | None = None
        self._restored = False
        self._runtime_state_key = f"timer_alarm_runtime:{id(self)}"

    async def async_restore_from_options(self, options: dict[str, Any]) -> None:
        if self._restored:
            return
        shared_client_id = _normalize_value(options.get(CONF_CLIENT_ID))
        raw_items = options.get(CONF_TIMER_ALARM_ITEMS)
        items = [item for item in raw_items if isinstance(item, dict)] if isinstance(raw_items, list) else []
        await self.async_apply_ui_items(items, shared_client_id)
        self._restored = True

    async def async_stop(self) -> None:
        for entry in list(self._timers.values()):
            task = entry.get("task")
            if isinstance(task, asyncio.Task):
                task.cancel()
        self._timers.clear()

        if self._alarm_tick_task is not None:
            self._alarm_tick_task.cancel()
            try:
                await self._alarm_tick_task
            except asyncio.CancelledError:
                pass
            self._alarm_tick_task = None
        self._remove_runtime_state()

    async def async_handle_builtin(
        self,
        scenario: dict[str, Any],
        payload: dict[str, Any],
        options: dict[str, Any],
    ) -> bool:
        script_entity_id = _normalize_value(scenario.get("script_entity_id")).lower()
        if script_entity_id not in {"timer", "alarm"}:
            return False

        parent_type = _normalize_value(payload.get("parent_type")).lower()
        if script_entity_id == "timer":
            parent_type = _resolve_timer_parent_type(payload, parent_type)
            if parent_type == "timer_start":
                await self.async_handle_timer_start(payload, options)
                return True
            if parent_type == "timer_stop":
                await self.async_handle_timer_stop(payload, options)
                return True
            if parent_type == "timer_info":
                await self.async_handle_timer_info(payload, options)
                return True
            if parent_type == "timer_pause":
                await self.async_handle_timer_pause(payload, options)
                return True
            if parent_type == "timer_resume":
                await self.async_handle_timer_resume(payload, options)
                return True
            return False

        parent_type = _resolve_alarm_parent_type(payload, parent_type)
        if parent_type == "alarm_start":
            await self.async_handle_alarm_start(payload, options)
            return True
        if parent_type == "alarm_stop":
            await self.async_handle_alarm_stop(payload, options)
            return True
        if parent_type in {"alarm_info", "alarm_count"}:
            await self.async_handle_alarm_info(payload, options)
            return True
        return False

    async def async_handle_timer_start(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        device_id = _normalize_value(payload.get("device_id") or payload.get("deviceId"))
        if not client_id:
            self._append_log("error", "Timer start skipped: client_id is empty")
            return

        timer_parts = _extract_timer_parts(payload)
        total_seconds = max(1, timer_parts["hour"] * 3600 + timer_parts["minut"] * 60 + timer_parts["second"])
        commands_text = _extract_commands_text(payload)
        timer_id = f"{_TIMER_PREFIX}{client_id}:{uuid.uuid4().hex[:8]}"

        self._create_timer(
            timer_id=timer_id,
            client_id=client_id,
            device_id=device_id,
            total_seconds=total_seconds,
            commands_text=commands_text,
            paused=False,
        )
        await self._post_save_commands(
            options,
            {
                "children_type": "",
                "parent_type": "timer_start",
                "data": {"commands": commands_text},
                "client_id": client_id,
                "device_id": device_id,
                "children_direct_type": [{"mapping_type": "timer", "value": {"timer": timer_parts}}],
            },
        )
        self._append_log("success", f"Timer started: {timer_parts['hour']:02d}:{timer_parts['minut']:02d}:{timer_parts['second']:02d}")

    async def async_handle_timer_stop(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        if not client_id:
            return

        timers = self._timers_for_client(client_id)
        if not timers:
            return

        target_count = _extract_count(payload)
        if target_count is None and len(timers) > 1:
            await self._post_save_commands(
                options,
                {
                    "clientId": client_id,
                    "activeType": "timer_count",
                    "data": {"timer": [self._timer_info_for_response(item) for item in timers]},
                },
            )
            return

        selected_index = max(0, (target_count or 1) - 1)
        selected_index = min(selected_index, len(timers) - 1)
        timer_id = _normalize_value(timers[selected_index].get("id"))
        timer_entry = self._timers.pop(timer_id, None)
        if timer_entry is None:
            return
        self._cancel_timer_task(timer_entry)
        self._mark_updated()

    async def async_handle_timer_pause(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        timers = self._timers_for_client(client_id)
        if not timers:
            return
        target_count = _extract_count(payload) or 1
        index = min(max(target_count - 1, 0), len(timers) - 1)
        await self._pause_timer(_normalize_value(timers[index].get("id")))

    async def async_handle_timer_resume(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        timers = self._timers_for_client(client_id)
        if not timers:
            return
        target_count = _extract_count(payload) or 1
        index = min(max(target_count - 1, 0), len(timers) - 1)
        await self._resume_timer(_normalize_value(timers[index].get("id")))

    async def async_handle_timer_info(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        if not client_id:
            return
        timers = self._timers_for_client(client_id)
        await self._post_save_commands(options, {"clientId": client_id, "data": {"timer": [self._timer_info_for_response(item) for item in timers]}})

    async def async_handle_alarm_start(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        device_id = _normalize_value(payload.get("device_id") or payload.get("deviceId"))
        if not client_id:
            return
        alarm_time = _extract_alarm_time(payload)
        alarm_id = f"{_ALARM_PREFIX}{client_id}:{uuid.uuid4().hex[:8]}"
        self._alarms[alarm_id] = {
            "id": alarm_id,
            "client_id": client_id,
            "device_id": device_id,
            "status": "on",
            "time": alarm_time,
            "created_at": datetime.now().timestamp(),
        }
        self._alarm_presets.add(alarm_time)
        self._ensure_alarm_tick_task()
        self._mark_updated()

    async def async_handle_alarm_stop(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        alarms = self._alarms_for_client(client_id)
        if not alarms:
            return
        target_count = _extract_count(payload) or 1
        index = min(max(target_count - 1, 0), len(alarms) - 1)
        alarm_id = _normalize_value(alarms[index].get("id"))
        self._alarms.pop(alarm_id, None)
        self._mark_updated()

    async def async_handle_alarm_info(self, payload: dict[str, Any], options: dict[str, Any]) -> None:
        client_id = _normalize_value(payload.get("client_id") or payload.get("clientId") or options.get(CONF_CLIENT_ID))
        alarms = self._alarms_for_client(client_id)
        await self._post_save_commands(
            options,
            {
                "clientId": client_id,
                "data": {
                    "alarm": [
                        {
                            "id": _normalize_value(item.get("id")),
                            "device_id": _normalize_value(item.get("device_id")),
                            "alarm": {"time": _normalize_value(item.get("time") or "08:00")},
                        }
                        for item in alarms
                    ]
                },
            },
        )

    def get_ha_timer_ids(self) -> set[str]:
        return set(self._timers.keys())

    def get_ha_timer_items(self) -> list[dict[str, Any]]:
        return [item for item in self.get_items() if _normalize_value(item.get("type")) == "timer"]

    async def async_cancel_ha_timer(self, timer_id: str) -> bool:
        timer_key = _normalize_value(timer_id)
        timer_entry = self._timers.pop(timer_key, None)
        if timer_entry is None:
            return False
        self._cancel_timer_task(timer_entry)
        self._mark_updated()
        return True

    async def async_apply_ui_items(self, items: list[dict[str, Any]], shared_client_id: str) -> list[dict[str, Any]]:
        normalized_items = [self._normalize_ui_item(item, shared_client_id) for item in items if isinstance(item, dict)]
        incoming_timers = {
            _normalize_value(item.get("id")): item
            for item in normalized_items
            if _normalize_value(item.get("type")) == "timer"
        }
        incoming_alarms = {
            _normalize_value(item.get("id")): item
            for item in normalized_items
            if _normalize_value(item.get("type")) == "alarm"
        }

        for timer_id in list(self._timers.keys()):
            if timer_id not in incoming_timers:
                entry = self._timers.pop(timer_id)
                self._cancel_timer_task(entry)

        for timer_id, item in incoming_timers.items():
            status = _normalize_value(item.get("status")).lower() or "on"
            timer_entry = self._timers.get(timer_id)
            duration_seconds = self._duration_seconds_from_item(item)
            client_id = _normalize_value(item.get("clientId") or item.get("userId") or shared_client_id)
            device_id = _normalize_value(item.get("deviceId") or item.get("device_id"))

            if status == "off":
                if timer_entry is not None:
                    self._cancel_timer_task(timer_entry)
                    self._timers.pop(timer_id, None)
                continue

            if timer_entry is None:
                self._create_timer(timer_id, client_id, device_id, duration_seconds, "", status == "paused")
                continue

            timer_entry["client_id"] = client_id
            timer_entry["device_id"] = device_id
            total_changed = _safe_int(timer_entry.get("total_seconds")) != duration_seconds
            timer_entry["total_seconds"] = duration_seconds

            if status == "paused":
                await self._pause_timer(timer_id)
                continue

            if total_changed:
                self._cancel_timer_task(timer_entry)
                timer_entry["remaining_seconds"] = duration_seconds
                timer_entry["paused"] = False
                self._schedule_timer(timer_entry)
                self._mark_updated()
                continue

            if bool(timer_entry.get("paused")):
                await self._resume_timer(timer_id)

        for alarm_id in list(self._alarms.keys()):
            if alarm_id not in incoming_alarms:
                self._alarms.pop(alarm_id, None)

        for alarm_id, item in incoming_alarms.items():
            client_id = _normalize_value(item.get("clientId") or item.get("userId") or shared_client_id)
            device_id = _normalize_value(item.get("deviceId") or item.get("device_id"))
            status = _normalize_value(item.get("status")).lower() or "on"
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            alarm_time = _normalize_alarm_clock(_normalize_value(time_data.get("time") or "08:00"))
            self._alarms[alarm_id] = {
                "id": alarm_id,
                "client_id": client_id,
                "device_id": device_id,
                "status": "off" if status == "off" else "on",
                "time": alarm_time,
                "created_at": float(self._alarms.get(alarm_id, {}).get("created_at") or datetime.now().timestamp()),
            }
            self._alarm_presets.add(alarm_time)

        if self._alarms:
            self._ensure_alarm_tick_task()
        self._mark_updated()
        return self.get_items()

    def get_items(self) -> list[dict[str, Any]]:
        now_ts = datetime.now().timestamp()
        timezone_name = _default_timezone_name()
        items: list[dict[str, Any]] = []

        for timer_id, entry in self._timers.items():
            total_seconds = _safe_int(entry.get("total_seconds"))
            remaining_seconds = _safe_int(entry.get("remaining_seconds"))
            paused = bool(entry.get("paused"))
            ends_at = float(entry.get("ends_at") or (now_ts + remaining_seconds))
            remaining_view = remaining_seconds if paused else max(0, int(ends_at - now_ts))
            items.append(
                {
                    "id": timer_id,
                    "type": "timer",
                    "status": "paused" if paused else "on",
                    "clientId": _normalize_value(entry.get("client_id")),
                    "userId": _normalize_value(entry.get("client_id")),
                    "deviceId": _normalize_value(entry.get("device_id")),
                    "ha_managed": True,
                    "time": {
                        "count_timer": _seconds_to_duration(max(1, total_seconds)),
                        "date_end": _format_datetime(ends_at, timezone_name),
                        "timezone": timezone_name,
                        "time_zone": timezone_name,
                        "remaining_seconds": remaining_view,
                        "total_seconds": total_seconds,
                    },
                }
            )

        for alarm_id, entry in self._alarms.items():
            items.append(
                {
                    "id": alarm_id,
                    "type": "alarm",
                    "status": "off" if _normalize_value(entry.get("status")).lower() == "off" else "on",
                    "clientId": _normalize_value(entry.get("client_id")),
                    "userId": _normalize_value(entry.get("client_id")),
                    "deviceId": _normalize_value(entry.get("device_id")),
                    "ha_managed": True,
                    "time": {"time": _normalize_value(entry.get("time") or "08:00")},
                }
            )

        items.sort(key=self._sort_item_key)
        return items

    def get_active_items(self) -> list[dict[str, Any]]:
        return [item for item in self.get_items() if _normalize_value(item.get("status")).lower() in {"on", "paused"}]

    def get_alarm_presets(self) -> list[str]:
        return sorted(self._alarm_presets)

    def serialize_persisted_items(self) -> list[dict[str, Any]]:
        result: list[dict[str, Any]] = []
        for item in self.get_items():
            item_type = _normalize_value(item.get("type"))
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            if item_type == "timer":
                paused_remaining = _safe_int(time_data.get("remaining_seconds"))
                paused_duration = _seconds_to_duration(paused_remaining) if paused_remaining > 0 else ""
                result.append(
                    {
                        "id": _normalize_value(item.get("id")),
                        "type": "timer",
                        "clientId": _normalize_value(item.get("clientId") or item.get("userId")),
                        "deviceId": _normalize_value(item.get("deviceId")),
                        "status": _normalize_value(item.get("status")) or "on",
                        "time": {"count_timer": paused_duration or _normalize_value(time_data.get("count_timer")) or "00:30:00"},
                    }
                )
            elif item_type == "alarm":
                result.append(
                    {
                        "id": _normalize_value(item.get("id")),
                        "type": "alarm",
                        "clientId": _normalize_value(item.get("clientId") or item.get("userId")),
                        "deviceId": _normalize_value(item.get("deviceId")),
                        "status": _normalize_value(item.get("status")) or "on",
                        "time": {"time": _normalize_value(time_data.get("time")) or "08:00"},
                    }
                )
        return result

    @property
    def last_updated(self) -> str | None:
        return self._last_updated

    def _normalize_ui_item(self, item: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
        item_type = _normalize_value(item.get("type")).lower()
        item_id = _normalize_value(item.get("id"))
        if not item_id:
            prefix = _TIMER_PREFIX if item_type == "timer" else _ALARM_PREFIX
            item_id = f"{prefix}{uuid.uuid4().hex[:10]}"
        return {
            "id": item_id,
            "type": "timer" if item_type == "timer" else "alarm",
            "status": _normalize_value(item.get("status")) or "on",
            "clientId": _normalize_value(item.get("clientId") or item.get("userId") or shared_client_id),
            "userId": _normalize_value(item.get("userId") or item.get("clientId") or shared_client_id),
            "deviceId": _normalize_value(item.get("deviceId") or item.get("device_id")),
            "time": item.get("time") if isinstance(item.get("time"), dict) else {},
        }

    def _duration_seconds_from_item(self, item: dict[str, Any]) -> int:
        time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
        duration = _normalize_value(time_data.get("count_timer") or time_data.get("duration"))
        if duration:
            parsed = _duration_to_seconds(duration)
            if parsed > 0:
                return parsed
        end_value = _normalize_value(time_data.get("date_end") or time_data.get("end_at"))
        end_dt = _parse_datetime(end_value, _normalize_value(time_data.get("timezone") or time_data.get("time_zone")))
        if end_dt is not None:
            return max(1, int(end_dt.timestamp() - datetime.now().timestamp()))
        return 30 * 60

    def _create_timer(self, timer_id: str, client_id: str, device_id: str, total_seconds: int, commands_text: str, paused: bool) -> None:
        entry: dict[str, Any] = {
            "id": timer_id,
            "client_id": client_id,
            "device_id": device_id,
            "commands": commands_text,
            "created_at": datetime.now().timestamp(),
            "total_seconds": max(1, total_seconds),
            "remaining_seconds": max(1, total_seconds),
            "paused": bool(paused),
            "task": None,
            "ends_at": datetime.now().timestamp() + max(1, total_seconds),
        }
        self._timers[timer_id] = entry
        if not paused:
            self._schedule_timer(entry)
        self._mark_updated()

    def _schedule_timer(self, entry: dict[str, Any]) -> None:
        self._cancel_timer_task(entry)
        remaining = max(1, _safe_int(entry.get("remaining_seconds")))
        entry["remaining_seconds"] = remaining
        entry["ends_at"] = datetime.now().timestamp() + remaining
        entry["paused"] = False
        timer_id = _normalize_value(entry.get("id"))
        entry["task"] = self.hass.async_create_task(self._async_wait_and_fire_timer(timer_id))

    async def _pause_timer(self, timer_id: str) -> None:
        entry = self._timers.get(_normalize_value(timer_id))
        if entry is None or bool(entry.get("paused")):
            return
        ends_at = float(entry.get("ends_at") or datetime.now().timestamp())
        entry["remaining_seconds"] = max(1, int(ends_at - datetime.now().timestamp()))
        entry["paused"] = True
        self._cancel_timer_task(entry)
        self._mark_updated()

    async def _resume_timer(self, timer_id: str) -> None:
        entry = self._timers.get(_normalize_value(timer_id))
        if entry is None or not bool(entry.get("paused")):
            return
        self._schedule_timer(entry)
        self._mark_updated()

    def _cancel_timer_task(self, entry: dict[str, Any]) -> None:
        task = entry.get("task")
        if isinstance(task, asyncio.Task):
            task.cancel()
        entry["task"] = None

    async def _async_wait_and_fire_timer(self, timer_id: str) -> None:
        timer_entry = self._timers.get(timer_id)
        if timer_entry is None:
            return
        try:
            await asyncio.sleep(max(1, _safe_int(timer_entry.get("remaining_seconds"))))
            timer_entry = self._timers.get(timer_id)
            if timer_entry is None:
                return
            media_player_entity_id = _resolve_media_player_entity_id(self.hass, _normalize_value(timer_entry.get("device_id")))
            if not media_player_entity_id:
                return
            await self.hass.services.async_call("media_player", "turn_on", target={"entity_id": media_player_entity_id}, blocking=False)
            await self.hass.services.async_call(
                "media_player",
                "play_media",
                {"media_content_id": _DEFAULT_TIMER_MEDIA_CONTENT_ID, "media_content_type": "music", "enqueue": "replace"},
                target={"entity_id": media_player_entity_id},
                blocking=False,
            )
        except asyncio.CancelledError:
            raise
        finally:
            self._timers.pop(timer_id, None)
            self._mark_updated()

    def _ensure_alarm_tick_task(self) -> None:
        if self._alarm_tick_task is not None and not self._alarm_tick_task.done():
            return
        self._alarm_tick_task = self.hass.async_create_task(self._alarm_tick_loop())

    async def _alarm_tick_loop(self) -> None:
        while True:
            try:
                await self._alarm_tick_once()
            except asyncio.CancelledError:
                raise
            except Exception as err:  # pragma: no cover
                _LOGGER.debug("Alarm tick failed: %s", err)
            await asyncio.sleep(1)

    async def _alarm_tick_once(self) -> None:
        now = dt_util.now()
        date_key = now.date().isoformat()
        for alarm in list(self._alarms.values()):
            if _normalize_value(alarm.get("status")).lower() == "off":
                continue
            alarm_time = _normalize_alarm_clock(_normalize_value(alarm.get("time") or "08:00"))
            try:
                hour, minute = [int(part) for part in alarm_time.split(":", 1)]
            except (TypeError, ValueError):
                continue
            if now.hour != hour or now.minute != minute:
                continue
            alarm_id = _normalize_value(alarm.get("id"))
            trigger_key = f"{alarm_id}:{date_key}:{alarm_time}"
            if trigger_key in self._triggered_alarm_keys:
                continue
            self._triggered_alarm_keys.add(trigger_key)
            await self._run_alarm_action(alarm)

    async def _run_alarm_action(self, alarm: dict[str, Any]) -> None:
        device_ref = _normalize_value(alarm.get("device_id"))
        media_player_entity_id = _resolve_media_player_entity_id(self.hass, device_ref)
        if not media_player_entity_id:
            return
        await self.hass.services.async_call("media_player", "turn_on", target={"entity_id": media_player_entity_id}, blocking=False)
        await self.hass.services.async_call(
            "media_player",
            "play_media",
            {"media_content_id": _DEFAULT_TIMER_MEDIA_CONTENT_ID, "media_content_type": "music", "enqueue": "replace"},
            target={"entity_id": media_player_entity_id},
            blocking=False,
        )

    def _timers_for_client(self, client_id: str) -> list[dict[str, Any]]:
        normalized_client = _normalize_value(client_id)
        items = [entry for entry in self._timers.values() if _normalize_value(entry.get("client_id")) == normalized_client]
        items.sort(key=lambda item: float(item.get("created_at") or 0.0))
        return items

    def _alarms_for_client(self, client_id: str) -> list[dict[str, Any]]:
        normalized_client = _normalize_value(client_id)
        items = [entry for entry in self._alarms.values() if _normalize_value(entry.get("client_id")) == normalized_client]
        items.sort(key=lambda item: float(item.get("created_at") or 0.0))
        return items

    def _timer_info_for_response(self, item: dict[str, Any]) -> dict[str, Any]:
        total = max(1, _safe_int(item.get("total_seconds")))
        remaining = max(0, _safe_int(item.get("remaining_seconds")))
        if not bool(item.get("paused")):
            ends_at = float(item.get("ends_at") or datetime.now().timestamp())
            remaining = max(0, int(ends_at - datetime.now().timestamp()))
        return {
            "id": _normalize_value(item.get("id")),
            "device_id": _normalize_value(item.get("device_id")),
            "timer": {
                "hour": total // 3600,
                "minut": (total % 3600) // 60,
                "second": total % 60,
                "remaining": remaining,
                "status": "paused" if bool(item.get("paused")) else "on",
            },
            "commands": _normalize_value(item.get("commands")),
        }

    def _sort_item_key(self, item: dict[str, Any]) -> tuple[int, str, str]:
        item_type = _normalize_value(item.get("type"))
        now = dt_util.now()
        if item_type == "timer":
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            end_dt = _parse_datetime(_normalize_value(time_data.get("date_end")), _normalize_value(time_data.get("timezone") or time_data.get("time_zone")))
            ts = int(end_dt.timestamp()) if end_dt is not None else 10**18
        else:
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            alarm_time = _normalize_alarm_clock(_normalize_value(time_data.get("time") or "08:00"))
            try:
                h, m = [int(part) for part in alarm_time.split(":", 1)]
                candidate = now.replace(hour=h, minute=m, second=0, microsecond=0)
                if candidate < now:
                    candidate = candidate + timedelta(days=1)
                ts = int(candidate.timestamp())
            except Exception:
                ts = 10**18
        return (ts, item_type, _normalize_value(item.get("id")))

    def _mark_updated(self) -> None:
        self._last_updated = dt_util.now().isoformat()
        self._publish_runtime_state()

    def _publish_runtime_state(self) -> None:
        domain_data = self.hass.data.setdefault(DOMAIN, {})
        runtime = domain_data.setdefault("timer_alarm_runtime", {})
        runtime[self._runtime_state_key] = {
            "items": self.get_items(),
            "active_items": self.get_active_items(),
            "alarm_presets": self.get_alarm_presets(),
            "last_updated": self._last_updated,
        }

    def _remove_runtime_state(self) -> None:
        domain_data = self.hass.data.get(DOMAIN, {})
        runtime = domain_data.get("timer_alarm_runtime")
        if isinstance(runtime, dict):
            runtime.pop(self._runtime_state_key, None)


def async_register_timer_alarm_websockets(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, _ws_get_timer_alarm_config)
    websocket_api.async_register_command(hass, _ws_save_timer_alarm_config)


@websocket_api.websocket_command({vol.Required("type"): WS_GET_TIMER_ALARM_CONFIG})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_get_timer_alarm_config(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return
    manager = _get_manager(hass, entry)
    managers = _iter_managers(hass)
    if manager is None and not managers:
        connection.send_error(msg["id"], "not_ready", "Main coordinator not found")
        return
    options = _get_options(entry)
    all_items: dict[str, dict[str, Any]] = {}
    all_active: dict[str, dict[str, Any]] = {}
    all_presets: set[str] = set()
    last_updated: str | None = None
    for current in managers:
        for item in current.get_items():
            item_id = _normalize_value(item.get("id"))
            if item_id:
                all_items[item_id] = item
        for item in current.get_active_items():
            item_id = _normalize_value(item.get("id"))
            if item_id:
                all_active[item_id] = item
        all_presets.update(current.get_alarm_presets())
        if current.last_updated and (last_updated is None or current.last_updated > last_updated):
            last_updated = current.last_updated

    runtime_snapshots = hass.data.get(DOMAIN, {}).get("timer_alarm_runtime", {})
    if isinstance(runtime_snapshots, dict):
        for snapshot in runtime_snapshots.values():
            if not isinstance(snapshot, dict):
                continue
            raw_items = snapshot.get("items")
            if isinstance(raw_items, list):
                for item in raw_items:
                    if not isinstance(item, dict):
                        continue
                    item_id = _normalize_value(item.get("id"))
                    if item_id and item_id not in all_items:
                        all_items[item_id] = item
            raw_active_items = snapshot.get("active_items")
            if isinstance(raw_active_items, list):
                for item in raw_active_items:
                    if not isinstance(item, dict):
                        continue
                    item_id = _normalize_value(item.get("id"))
                    if item_id and item_id not in all_active:
                        all_active[item_id] = item
            raw_presets = snapshot.get("alarm_presets")
            if isinstance(raw_presets, list):
                for preset in raw_presets:
                    normalized = _normalize_value(preset)
                    if normalized:
                        all_presets.add(normalized)
            snapshot_updated = _normalize_value(snapshot.get("last_updated"))
            if snapshot_updated and (last_updated is None or snapshot_updated > last_updated):
                last_updated = snapshot_updated

    items = list(all_items.values()) if all_items else (manager.get_items() if manager is not None else [])
    active_items = list(all_active.values()) if all_active else (manager.get_active_items() if manager is not None else [])
    alarm_presets = sorted(all_presets) if all_presets else (manager.get_alarm_presets() if manager is not None else [])
    if last_updated is None and manager is not None:
        last_updated = manager.last_updated
    connection.send_result(
        msg["id"],
        {
            "base_url": options[CONF_BASE_URL],
            "client_id": options[CONF_CLIENT_ID],
            "interval": options[CONF_TIMEOUT],
            "device_ids": options[CONF_TIMER_ALARM_DEVICE_IDS],
            "items": items,
            "active_items": active_items,
            "alarm_presets": alarm_presets,
            "last_updated": last_updated,
        },
    )


@websocket_api.websocket_command({vol.Required("type"): WS_SAVE_TIMER_ALARM_CONFIG, vol.Optional(CONF_TIMER_ALARM_ITEMS, default=[]): [dict]})
@websocket_api.require_admin
@websocket_api.async_response
async def _ws_save_timer_alarm_config(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return
    manager = _get_manager(hass, entry)
    managers = _iter_managers(hass)
    if manager is None and not managers:
        connection.send_error(msg["id"], "not_ready", "Main coordinator not found")
        return

    options = dict(entry.options)
    shared_client_id = _normalize_value(options.get(CONF_CLIENT_ID))
    requested_items = [item for item in msg.get(CONF_TIMER_ALARM_ITEMS, []) if isinstance(item, dict)]
    target_manager = _select_manager(managers or ([manager] if manager is not None else []), requested_items, shared_client_id) or manager
    if target_manager is None:
        connection.send_error(msg["id"], "not_ready", "Timer/alarm manager not found")
        return
    await target_manager.async_apply_ui_items(requested_items, shared_client_id)
    options[CONF_TIMER_ALARM_ITEMS] = target_manager.serialize_persisted_items()
    hass.config_entries.async_update_entry(entry, options=options)
    connection.send_result(msg["id"], {"saved": True})


def _get_entry(hass: HomeAssistant) -> ConfigEntry | None:
    entries = hass.config_entries.async_entries(DOMAIN)
    return entries[0] if entries else None


def _get_manager(hass: HomeAssistant, entry: ConfigEntry) -> DialogTimerAlarmManager | None:
    coordinator = hass.data.get(DOMAIN, {}).get(entry.entry_id)
    manager = getattr(coordinator, "timer_alarm_manager", None)
    return manager if isinstance(manager, DialogTimerAlarmManager) else None


def _iter_managers(hass: HomeAssistant) -> list[DialogTimerAlarmManager]:
    managers: list[DialogTimerAlarmManager] = []
    for value in hass.data.get(DOMAIN, {}).values():
        manager = getattr(value, "timer_alarm_manager", None)
        if isinstance(manager, DialogTimerAlarmManager):
            managers.append(manager)
    return managers


def _select_manager(
    managers: list[DialogTimerAlarmManager],
    requested_items: list[dict[str, Any]],
    shared_client_id: str,
) -> DialogTimerAlarmManager | None:
    if not managers:
        return None
    requested_ids = {_normalize_value(item.get("id")) for item in requested_items if _normalize_value(item.get("id"))}
    best_manager: DialogTimerAlarmManager | None = None
    best_score = -1
    for manager in managers:
        score = 0
        items = manager.get_items()
        item_ids = {_normalize_value(item.get("id")) for item in items}
        if requested_ids:
            score += len(item_ids.intersection(requested_ids))
        if shared_client_id:
            score += sum(1 for item in items if _normalize_value(item.get("clientId") or item.get("userId")) == shared_client_id)
        if score > best_score:
            best_score = score
            best_manager = manager
    return best_manager or managers[0]


def _get_options(entry: ConfigEntry) -> dict[str, Any]:
    stored = dict(entry.options)
    return {
        CONF_BASE_URL: stored.get(CONF_BASE_URL, DEFAULT_BASE_URL),
        CONF_CLIENT_ID: stored.get(CONF_CLIENT_ID, ""),
        CONF_TIMEOUT: int(stored.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)),
        CONF_TIMER_ALARM_DEVICE_IDS: _normalize_device_ids(stored.get(CONF_TIMER_ALARM_DEVICE_IDS, [])),
        CONF_TIMER_ALARM_ITEMS: list(stored.get(CONF_TIMER_ALARM_ITEMS, [])),
    }


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


def _extract_commands_text(payload: dict[str, Any]) -> str:
    value = payload.get("data") if isinstance(payload.get("data"), dict) else payload.get("value")
    if isinstance(value, dict):
        command = _normalize_value(value.get("commands") or value.get("command"))
        if command:
            return command
    return _normalize_value(payload.get("commands"))


def _extract_timer_parts(payload: dict[str, Any]) -> dict[str, int]:
    defaults = {"hour": 0, "minut": 1, "second": 0}
    direct_values = payload.get("children_direct_type")
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
    minutes = _extract_first_int(_extract_commands_text(payload))
    if minutes is not None:
        return {"hour": minutes // 60, "minut": minutes % 60, "second": 0}
    return defaults


def _extract_alarm_time(payload: dict[str, Any]) -> str:
    direct_values = payload.get("children_direct_type")
    if isinstance(direct_values, dict):
        direct_values = [direct_values]
    if isinstance(direct_values, (list, tuple)):
        for item in direct_values:
            if not isinstance(item, dict):
                continue
            mapping_type = _normalize_value(item.get("mapping_type") or item.get("mappingType") or item.get("type")).lower()
            if mapping_type not in {"alarm", "time"}:
                continue
            value = item.get("value") if isinstance(item.get("value"), dict) else {}
            if isinstance(value.get("alarm"), dict):
                value = value.get("alarm")
            clock = _normalize_value(value.get("time") or value.get("alarm_time"))
            if clock:
                return _normalize_alarm_clock(clock)
    match = re.search(r"(\d{1,2})[:\.](\d{1,2})", _extract_commands_text(payload))
    if match:
        return _normalize_alarm_clock(f"{match.group(1)}:{match.group(2)}")
    return "08:00"


def _extract_count(payload: dict[str, Any]) -> int | None:
    direct_values = payload.get("children_direct_type")
    if isinstance(direct_values, dict):
        direct_values = [direct_values]
    if isinstance(direct_values, (list, tuple)):
        for item in direct_values:
            if not isinstance(item, dict):
                continue
            mapping_type = _normalize_value(item.get("mapping_type") or item.get("mappingType") or item.get("type")).lower()
            if mapping_type not in {"count", "timer_count", "alarm_count"}:
                continue
            value = item.get("value") if isinstance(item.get("value"), dict) else {}
            count = _safe_int(value.get("count"))
            if count > 0:
                return count
    guess = _extract_first_int(_extract_commands_text(payload))
    if guess and guess > 0:
        return guess
    return None


def _resolve_timer_parent_type(payload: dict[str, Any], parent_type: str) -> str:
    if parent_type in {"timer_start", "timer_stop", "timer_info", "timer_pause", "timer_resume"}:
        return parent_type

    text = _extract_commands_text(payload).lower()
    if any(token in text for token in ("пауз", "pause")):
        return "timer_pause"
    if any(token in text for token in ("возобн", "resume", "продолж")):
        return "timer_resume"
    if any(token in text for token in ("стоп", "отмен", "удал", "выключ", "stop")):
        return "timer_stop"
    if any(token in text for token in ("сколько", "остал", "info", "инфо")):
        return "timer_info"
    return "timer_start"


def _resolve_alarm_parent_type(payload: dict[str, Any], parent_type: str) -> str:
    if parent_type in {"alarm_start", "alarm_stop", "alarm_info", "alarm_count"}:
        return parent_type

    text = _extract_commands_text(payload).lower()
    if any(token in text for token in ("стоп", "отмен", "удал", "выключ", "stop")):
        return "alarm_stop"
    if any(token in text for token in ("сколько", "какие", "info", "инфо")):
        return "alarm_info"
    return "alarm_start"


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


def _seconds_to_duration(total_seconds: int) -> str:
    safe_total = max(0, _safe_int(total_seconds))
    hours = safe_total // 3600
    minutes = (safe_total % 3600) // 60
    seconds = safe_total % 60
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"


def _duration_to_seconds(value: str) -> int:
    parts = [part.strip() for part in _normalize_value(value).split(":") if part.strip()]
    if not parts:
        return 0
    try:
        numbers = [int(part) for part in parts]
    except ValueError:
        return 0
    if len(numbers) == 3:
        return max(0, numbers[0] * 3600 + numbers[1] * 60 + numbers[2])
    if len(numbers) == 2:
        return max(0, numbers[0] * 60 + numbers[1])
    if len(numbers) == 1:
        return max(0, numbers[0] * 60)
    return 0


def _normalize_alarm_clock(value: str) -> str:
    normalized = _normalize_value(value)
    try:
        hour_str, minute_str = normalized.split(":", 1)
        hour = min(23, max(0, int(hour_str)))
        minute = min(59, max(0, int(minute_str)))
        return f"{hour:02d}:{minute:02d}"
    except (TypeError, ValueError):
        return "08:00"


def _default_timezone_name() -> str:
    local_dt = datetime.now().astimezone()
    return getattr(local_dt.tzinfo, "key", None) or str(local_dt.tzinfo or "")


def _format_datetime(timestamp_value: float, timezone_name: str) -> str:
    tz_name = _normalize_value(timezone_name) or _default_timezone_name()
    tz = datetime.now().astimezone().tzinfo
    if tz_name:
        try:
            tz = ZoneInfo(tz_name)
        except Exception:
            tz = datetime.now().astimezone().tzinfo
    dt_value = datetime.fromtimestamp(float(timestamp_value), tz=tz)
    return dt_value.strftime("%Y-%m-%d %H:%M:%S")


def _parse_datetime(value: str, timezone_name: str) -> datetime | None:
    normalized = _normalize_value(value)
    if not normalized:
        return None
    parsed = dt_util.parse_datetime(normalized)
    if parsed is None:
        try:
            parsed = datetime.fromisoformat(normalized.replace(" ", "T"))
        except ValueError:
            return None
    if parsed.tzinfo is None:
        tz = datetime.now().astimezone().tzinfo
        if timezone_name:
            try:
                tz = ZoneInfo(timezone_name)
            except Exception:
                pass
        parsed = parsed.replace(tzinfo=tz)
    return dt_util.as_local(parsed)


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
