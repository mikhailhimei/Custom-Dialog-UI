from __future__ import annotations

import asyncio
import uuid
from datetime import datetime
from typing import Any, Callable

from homeassistant.core import HomeAssistant

from ..normalize import _normalize_value
from .timer_alarm_utils import (
    _default_timezone_name,
    _duration_to_seconds,
    _format_datetime,
    _parse_datetime,
    _safe_int,
    _seconds_to_duration,
    _seconds_to_minute_phrase,
    _TIMER_PREFIX,
)
from ..audio_notification import audio_notification

class DialogTimerManager:
    def __init__(
        self,
        hass: HomeAssistant,
        mark_updated: Callable[[], None],
        default_media_content_id: Callable[[], str],
    ) -> None:
        self.hass = hass
        self._mark_updated = mark_updated
        self._default_media_content_id = default_media_content_id
        self._timers: dict[str, dict[str, Any]] = {}

    async def async_stop(self) -> None:
        for entry in list(self._timers.values()):
            task = entry.get("task")
            if isinstance(task, asyncio.Task):
                task.cancel()
        self._timers.clear()

    async def async_handle_timer_start(
        self,
        timer: dict[str, int] | None,
        client_id: str,
        device_id: str,
        execution_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id and execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "error",
                "message": "Не удалось установить таймер: отсутствует client_id",
            }

        if timer is None:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "error",
                "message": "Не удалось установить таймер: некорректный формат времени",
            }

        total_seconds = max(1, timer["hour"] * 3600 + timer["minut"] * 60 + timer["second"])
        timer_id = f"{_TIMER_PREFIX}{client_id}:{uuid.uuid4().hex[:8]}"

        self._create_timer(
            timer_id=timer_id,
            client_id=client_id,
            device_id=device_id,
            total_seconds=total_seconds,
            paused=False,
        )

        if execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "success",
                "message": f"на {_seconds_to_minute_phrase(total_seconds)}",
            }

    async def async_handle_timer_stop(
        self,
        client_id: str,
        device_id: str,
        count: int,
        execution_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id and execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "error",
                "message": "Не удалось установить таймер: отсутствует client_id",
            }

        timers = self._timers_for_client(client_id)
        if not timers and execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "not_timers",
            }

        if count is None and len(timers) > 1 and execution_command:
            _, text_timer = self._timer_count_message(timers)
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "several",
                "message": text_timer,
            }

        selected_index = len(timers) - 1 if count is None else max(0, count - 1)
        selected_index = min(selected_index, len(timers) - 1)

        timer_id = _normalize_value(timers[selected_index].get("id"))
        timer_entry = self._timers.pop(timer_id, None)
        if timer_entry is None:
            return

        self._cancel_timer_task(timer_entry)
        self._mark_updated()

        if execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "success",
            }

    async def async_handle_timer_pause(
        self,
        client_id: str,
        device_id: str,
        count: int,
        execution_command: bool,
    ) -> dict[str, Any] | None:
        timers = self._timers_for_client(client_id)
        if not timers and execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "not_timers",
            }

        index = len(timers) - 1 if count is None else min(max(count - 1, 0), len(timers) - 1)
        await self._pause_timer(_normalize_value(timers[index].get("id")))

        if execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "success",
            }

    async def async_handle_timer_resume(self, client_id: str, device_id: str, count: int) -> None:
        timers = self._timers_for_client(client_id)
        if not timers:
            return
        index = len(timers) - 1 if count is None else min(max(count - 1, 0), len(timers) - 1)
        await self._resume_timer(_normalize_value(timers[index].get("id")))

    async def async_handle_timer_info(
        self,
        client_id: str,
        device_id: str,
        execution_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id:
            return
        timers = self._timers_for_client(client_id)
        count_timer, text_timer = self._timer_count_message(timers)
        if execution_command:
            return {
                "client_id": client_id,
                "device_id": device_id,
                "actionType": "several" if count_timer else "one",
                "message": text_timer,
            }

    def get_timer_items(self) -> list[dict[str, Any]]:
        now_ts = datetime.now().timestamp()
        timezone_name = _default_timezone_name()
        items: list[dict[str, Any]] = []
        for timer_id, entry in self._timers.items():
            total_seconds = _safe_int(entry.get("total_seconds"))
            remaining_seconds = _safe_int(entry.get("remaining_seconds"))
            paused = bool(entry.get("paused"))
            ends_at = float(entry.get("ends_at") or (now_ts + remaining_seconds))
            if not paused:
                remaining_seconds = max(0, int(ends_at - now_ts))
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
                        "remaining_timer": _seconds_to_duration(max(0, remaining_seconds)),
                        "total_seconds": max(1, total_seconds),
                        "remaining_seconds": max(0, remaining_seconds),
                        "date_end": _format_datetime(ends_at, timezone_name),
                    },
                }
            )
        items.sort(key=lambda item: _normalize_value(item.get("id")))
        return items

    def get_active_items(self) -> list[dict[str, Any]]:
        return [
            item
            for item in self.get_timer_items()
            if _normalize_value(item.get("status")).lower() in {"on", "paused"}
        ]

    def serialize_timer_persisted_items(self) -> list[dict[str, Any]]:
        result: list[dict[str, Any]] = []
        for item in self.get_timer_items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            paused_remaining = _safe_int(time_data.get("remaining_seconds"))
            paused_duration = _seconds_to_duration(paused_remaining) if paused_remaining > 0 else ""
            result.append(
                {
                    "id": _normalize_value(item.get("id")),
                    "type": "timer",
                    "clientId": _normalize_value(item.get("clientId") or item.get("userId")),
                    "deviceId": _normalize_value(item.get("deviceId")),
                    "status": _normalize_value(item.get("status")) or "on",
                    "time": {
                        "count_timer": paused_duration
                        or _normalize_value(time_data.get("count_timer"))
                        or "00:30:00",
                    },
                }
            )
        return result

    async def apply_ui_items(self, incoming_timers: dict[str, dict[str, Any]]) -> None:
        existing_ids = set(self._timers)
        requested_ids = set(incoming_timers)
        for timer_id in existing_ids - requested_ids:
            entry = self._timers.pop(timer_id, None)
            if entry is not None:
                self._cancel_timer_task(entry)

        changed = False
        for timer_id, item in incoming_timers.items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            duration = _duration_to_seconds(_normalize_value(time_data.get("count_timer")))
            date_end = _normalize_value(time_data.get("date_end"))
            if date_end:
                end_dt = _parse_datetime(date_end, "")
                if end_dt is not None:
                    duration = max(0, int(end_dt.timestamp() - datetime.now().timestamp()))
            if duration <= 0:
                duration = _safe_int(time_data.get("remaining_seconds")) or _safe_int(time_data.get("total_seconds"))
            if duration <= 0:
                continue

            client_id = _normalize_value(item.get("clientId") or item.get("userId"))
            device_id = _normalize_value(item.get("deviceId"))
            status = _normalize_value(item.get("status")).lower()
            paused = status == "paused"

            if timer_id in self._timers:
                entry = self._timers[timer_id]
                entry["client_id"] = client_id
                entry["device_id"] = device_id
                entry["total_seconds"] = max(1, duration)
                entry["remaining_seconds"] = max(1, duration)
                entry["paused"] = paused
                if paused:
                    self._cancel_timer_task(entry)
                else:
                    self._schedule_timer(entry)
                changed = True
                continue

            self._create_timer(
                timer_id=timer_id,
                client_id=client_id,
                device_id=device_id,
                total_seconds=duration,
                paused=paused,
            )
            changed = True

        if changed:
            self._mark_updated()

    def _create_timer(
        self,
        timer_id: str,
        client_id: str,
        device_id: str,
        total_seconds: int,
        paused: bool,
    ) -> None:
        entry: dict[str, Any] = {
            "id": timer_id,
            "client_id": client_id,
            "device_id": device_id,
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
        expired = False
        try:
            await asyncio.sleep(max(1, _safe_int(timer_entry.get("remaining_seconds"))))
            expired = True
            timer_entry = self._timers.get(timer_id)
            if timer_entry is None:
                return
            device_ref = timer_entry.get("device_id")
            await audio_notification(self.hass, device_ref, self._default_media_content_id(), "0.3-0.7")
            
        except asyncio.CancelledError:
            return
        finally:
            current_entry = self._timers.get(timer_id)
            current_task = asyncio.current_task()
            if current_entry is not None and current_entry.get("task") is current_task:
                current_entry["task"] = None
            if expired:
                self._timers.pop(timer_id, None)
                self._mark_updated()

    def _timers_for_client(self, client_id: str) -> list[dict[str, Any]]:
        if client_id:
            items = [
                entry
                for entry in self._timers.values()
                if _normalize_value(entry.get("client_id")) == client_id
            ]
            if not items:
                items = list(self._timers.values())
        else:
            items = list(self._timers.values())
        items.sort(key=lambda item: float(item.get("created_at") or 0.0))
        return items

    def _timer_count_message(self, timers: list[dict[str, Any]]) -> tuple[bool, str]:
        if not timers:
            return False, "Активных таймеров нет."
        lines: list[str] = []
        now_ts = datetime.now().timestamp()
        count = len(timers) != 1
        for index, item in enumerate(timers, start=1):
            total_seconds = max(1, _safe_int(item.get("total_seconds")))
            remaining = max(0, _safe_int(item.get("remaining_seconds")))
            if not bool(item.get("paused")):
                ends_at = float(item.get("ends_at") or now_ts)
                remaining = max(0, int(ends_at - now_ts))
            number = f"{index}. на {_seconds_to_minute_phrase(total_seconds)} осталось"
            lines.append(f"{number if count else ''} {_seconds_to_minute_phrase(max(1, remaining))}")
        return count, "\n".join(lines)
