from __future__ import annotations

import asyncio
import uuid
from datetime import datetime
from typing import Any, Callable
import logging

from homeassistant.core import HomeAssistant

from ..normalize import _normalize_value
from .timer_alarm_utils import (
    _safe_int,
)
from ..audio_notification import audio_notification
from .alarm_persistence import AlarmPersistence

_LOGGER = logging.getLogger(__name__)


class DialogAlarmManager:
    def __init__(
        self,
        hass: HomeAssistant,
        mark_updated: Callable[[], None],
        default_media_content_id: Callable[[], str],
        persistence: AlarmPersistence | None = None,
    ) -> None:
        self.hass = hass
        self._mark_updated = mark_updated
        self._default_media_content_id = default_media_content_id
        self._persistence = persistence
        self._alarms: dict[str, dict[str, Any]] = {}
        self._alarm_presets: set[str] = set()
        self._triggered_alarm_keys: set[str] = set()
        self._alarm_tick_task: asyncio.Task | None = None

    async def async_stop(self) -> None:
        if self._alarm_tick_task is not None:
            self._alarm_tick_task.cancel()
            try:
                await self._alarm_tick_task
            except asyncio.CancelledError:
                pass
            self._alarm_tick_task = None
        # Save alarms before stopping
        if self._persistence:
            await self._save_alarms_to_persistence()
        self._alarms.clear()

    async def async_restore_from_persistence(self, client_id: str | None = None) -> None:
        """Restore alarms from Home Assistant storage if available.

        This is called when the coordinator starts to recover alarms that were
        active before a server restart.
        """
        if not self._persistence:
            return
        
        try:
            loaded_presets = await self._persistence.load_alarm_presets(client_id)
            if loaded_presets:
                self.load_alarm_presets(list(loaded_presets))

            loaded_alarms = await self._persistence.load_alarms(client_id)
            if loaded_alarms:
                _LOGGER.info("Restored %d alarms from Home Assistant storage", len(loaded_alarms))
                self._alarms.update(loaded_alarms)
                for alarm in loaded_alarms.values():
                    alarm_time = _normalize_value(alarm.get("time"))
                    if alarm_time:
                        self._remember_alarm_preset(alarm_time)
                # Ensure tick task is running for restored alarms
                for alarm in loaded_alarms.values():
                    if _normalize_value(alarm.get("status")).lower() == "on":
                        self._ensure_alarm_tick_task()
                        break
        except Exception as err:
            _LOGGER.warning("Failed to restore alarms from Home Assistant storage: %s", err)

    async def async_handle_alarm_start(
        self,
        alarm_time: str | None,
        client_id: str,
        device_id: str,
        execution_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id and execution_command:
            return {
                "clientId": client_id,
                "actionType": "error",
                "message": "Не удалось установить будильник: отсутствует client_id",
            }

        alarm_time = _normalize_value(alarm_time)
        if not alarm_time:
            if execution_command:
                return {
                    "clientId": client_id,
                    "actionType": "error",
                    "message": "Не удалось установить будильник: время не распознано",
                }
            return None

        for existing in self._alarms.values():
            existing_device_id = _normalize_value(existing.get("device_id"))
            if device_id and existing_device_id and existing_device_id != device_id:
                continue
            if _normalize_value(existing.get("time")) != alarm_time:
                continue
            if _normalize_value(existing.get("status")).lower() != "off":
                continue

            existing["status"] = "on"
            existing["time"] = alarm_time
            existing["device_id"] = device_id
            self._remember_alarm_preset(alarm_time)
            self._ensure_alarm_tick_task()
            self._mark_updated()
            if execution_command:
                return {
                    "actionType": "success",
                    "message": f"{alarm_time}",
                }
            
            return

        alarm_id = f"ha_alarm:{client_id}:{uuid.uuid4().hex[:8]}"
        self._alarms[alarm_id] = {
            "id": alarm_id,
            "client_id": client_id,
            "device_id": device_id,
            "status": "on",
            "time": alarm_time,
            "created_at": datetime.now().timestamp(),
        }
        self._remember_alarm_preset(alarm_time)
        self._ensure_alarm_tick_task()
        self._mark_updated()
        if execution_command:
            return {
                "clientId": client_id,
                "actionType": "success",
                "message": f"{alarm_time}",
            }

    async def async_handle_alarm_stop(
        self,
        client_id: str,
        count: int,
        execution_command: bool,
    ) -> dict[str, Any] | None:
        if not client_id and execution_command:
            return {
                "clientId": client_id,
                "actionType": "error",
                "message": "Не удалось установить будильник: отсутствует client_id",
            }

        alarms = self._alarms_for_client(client_id)
        if not alarms and execution_command:
            return {
                "clientId": client_id,
                "actionType": "not_alarm",
            }

        if count is None and execution_command and len(alarms) > 1:
            return {
                "clientId": client_id,
                "actionType": "several",
                "message": "\n".join(
                    f"{i+1}. на {_normalize_value(item.get('time'))}" for i, item in enumerate(alarms)
                ),
            }

        index = len(alarms) - 1 if count is None else min(max(count - 1, 0), len(alarms) - 1)
        alarm_id = _normalize_value(alarms[index].get("id"))
        self._alarms.pop(alarm_id, None)
        self._mark_updated()

        return {
            "clientId": client_id,
            "actionType": "several",
            "message": f"{alarms[index].get('time')}",
        }

    async def async_handle_alarm_info(
        self,
        client_id: str,
        count: int,
        execution_command: bool,
    ) -> dict[str, Any] | None:
        alarms = self._alarms_for_client(client_id)
        if len(alarms) == 1:
            count_type = "one"
            text_alarms = f"{_normalize_value(alarms[0].get('time'))}"
        else:
            count_type = "several"
            text_alarms = "\n".join(
                f"{i+1}. на {_normalize_value(item.get('time'))}"
                for i, item in enumerate(alarms)
            )

        if execution_command:
            return {
                "clientId": client_id,
                "actionType": count_type,
                "message": text_alarms,
            }

    def get_alarm_items(self) -> list[dict[str, Any]]:
        items: list[dict[str, Any]] = []
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
        items.sort(key=lambda item: _normalize_value(item.get("id")))
        return items

    def get_active_items(self) -> list[dict[str, Any]]:
        return [
            item
            for item in self.get_alarm_items()
            if _normalize_value(item.get("status")).lower() in {"on", "paused"}
        ]

    def load_alarm_presets(self, presets: list[str]) -> None:
        for preset in presets:
            self._remember_alarm_preset(preset)

    def get_alarm_presets(self) -> list[str]:
        normalized = {_normalize_value(preset) for preset in self._alarm_presets if _normalize_value(preset)}
        if len(normalized) != len(self._alarm_presets) or normalized != self._alarm_presets:
            self._alarm_presets.clear()
            self._alarm_presets.update(normalized)
        return sorted(normalized)

    def _remember_alarm_preset(self, alarm_time: Any) -> None:
        normalized = _normalize_value(alarm_time)
        if normalized:
            self._alarm_presets.add(normalized)

    def serialize_alarm_persisted_items(self) -> list[dict[str, Any]]:
        result: list[dict[str, Any]] = []
        for item in self.get_alarm_items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
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

    async def apply_ui_items(self, incoming_alarms: dict[str, dict[str, Any]]) -> None:
        existing_ids = set(self._alarms)
        requested_ids = set(incoming_alarms)
        for alarm_id in existing_ids - requested_ids:
            self._alarms.pop(alarm_id, None)

        changed = False
        for alarm_id, item in incoming_alarms.items():
            time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
            alarm_time = _normalize_value(time_data.get("time")) or "08:00"
            client_id = _normalize_value(item.get("clientId") or item.get("userId"))
            device_id = _normalize_value(item.get("deviceId"))
            status = _normalize_value(item.get("status")).lower()
            status = "off" if status == "off" else "on"

            if alarm_id in self._alarms:
                alarm = self._alarms[alarm_id]
                alarm["client_id"] = client_id
                alarm["device_id"] = device_id
                alarm["status"] = status
                alarm["time"] = alarm_time
                self._remember_alarm_preset(alarm_time)
                if status == "on":
                    self._ensure_alarm_tick_task()
                changed = True
                continue

            self._alarms[alarm_id] = {
                "id": alarm_id,
                "client_id": client_id,
                "device_id": device_id,
                "status": status,
                "time": alarm_time,
                "created_at": datetime.now().timestamp(),
            }
            self._remember_alarm_preset(alarm_time)
            if status == "on":
                self._ensure_alarm_tick_task()
            changed = True

        if changed:
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
            except Exception:
                pass
            await asyncio.sleep(1)

    async def _alarm_tick_once(self) -> None:
        now = datetime.now()
        date_key = now.date().isoformat()
        for alarm in list(self._alarms.values()):
            if _normalize_value(alarm.get("status")).lower() == "off":
                continue
            alarm_time = _normalize_value(alarm.get("time"))
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
        await audio_notification(self.hass, device_ref, self._default_media_content_id(), "0.3-1.0")
        alarm["status"] = "off"
        self._mark_updated()

    def _alarms_for_client(self, client_id: str) -> list[dict[str, Any]]:
        if client_id:
            items = [
                entry
                for entry in self._alarms.values()
                if _normalize_value(entry.get("client_id")) == client_id
            ]
            if not items:
                items = list(self._alarms.values())
        else:
            items = list(self._alarms.values())
        items.sort(key=lambda item: float(item.get("created_at") or 0.0))
        return items

    async def _save_alarms_to_persistence(self, client_id: str | None = None) -> None:
        """Save current alarms to Home Assistant storage."""
        if not self._persistence:
            return

        try:
            await self._persistence.save_alarms(self._alarms, client_id)
            await self._persistence.save_alarm_presets(set(self.get_alarm_presets()), client_id)
        except Exception as err:
            _LOGGER.warning("Failed to save alarms to persistence: %s", err)
