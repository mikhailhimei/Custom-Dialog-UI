from __future__ import annotations

import uuid
import logging
from collections.abc import Awaitable, Callable, Iterable
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
from homeassistant.util import dt as dt_util

from .alarm_manager import DialogAlarmManager
from ..normalize import _normalize_value
from .timer_manager import DialogTimerManager
from ..utils import _get_entry, _get_manager, _get_options, _extract_count
from ..storage.alarm_requests_storage import async_load_alarm_requests, async_save_alarm_requests
from ..storage.settings_storage import get_cached_settings
from ..storage.timer_requests_storage import async_load_timer_requests, async_save_timer_requests
from ..const import DOMAIN, WS_GET_TIMER_ALARM_CONFIG, WS_SAVE_TIMER_ALARM_CONFIG
from .timer_alarm_utils import (
    _ALARM_PREFIX,
    _FALLBACK_TIMER_MEDIA_CONTENT_ID,
    _TIMER_PREFIX,
    _normalize_alarm_presets,
    _collect_device_labels,
    _coerce_items_from_runtime_holder,
    _extract_alarm_time,
    _extract_timer_parts,
    _sort_item_key,
)

_LOGGER = logging.getLogger(__name__)


def _build_voice_request_payload(payload: dict[str, Any]) -> dict[str, Any] | None:
    parent_type = _normalize_value(payload.get("parent_type")).lower()
    if parent_type == "timer_start":
        timer = _extract_timer_parts(payload.get("children_direct_type"))
        if timer is None:
            return None
        timer_time = f"{timer['hour']:02d}:{timer['minut']:02d}:{timer['second']:02d}"
        return {
            "uuid": str(uuid.uuid4()),
            "name": f"Таймер {timer_time}",
            "action_type": "create_timer",
            "device_id": _normalize_value(payload.get("device_id")),
            "timer_time": timer_time,
        }

    if parent_type == "alarm_start":
        alarm_time = _extract_alarm_time(payload.get("children_direct_type"))
        if not alarm_time:
            return None
        return {
            "uuid": str(uuid.uuid4()),
            "name": f"Будильник {alarm_time}",
            "action_type": "create_alarm",
            "device_id": _normalize_value(payload.get("device_id")),
            "status": "on",
            "time": alarm_time,
            "volume_start": 0.3,
        }

    return None


def _timer_request_to_runtime_item(timer_request: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
    return {
        "id": _normalize_value(timer_request.get("uuid")),
        "type": "timer",
        "status": "on",
        "clientId": shared_client_id,
        "userId": shared_client_id,
        "deviceId": _normalize_value(timer_request.get("device_id")),
        "time": (
            timer_request.get("timer_time")
            if isinstance(timer_request.get("timer_time"), dict)
            else {"count_timer": _normalize_value(timer_request.get("timer_time"))}
        ),
    }


def _alarm_request_to_runtime_item(alarm_request: dict[str, Any], shared_client_id: str) -> dict[str, Any]:
    return {
        "id": _normalize_value(alarm_request.get("uuid")),
        "type": "alarm",
        "status": _normalize_value(alarm_request.get("status")) or "on",
        "clientId": shared_client_id,
        "userId": shared_client_id,
        "deviceId": _normalize_value(alarm_request.get("device_id")),
        "time": {"time": _normalize_value(alarm_request.get("time")) or "08:00"},
        "volume_start": alarm_request.get("volume_start", 0.3),
    }


def _timer_item_to_request(item: dict[str, Any]) -> dict[str, Any]:
    time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
    timer_time = dict(time_data) if time_data else _normalize_value(item.get("timer_time"))
    timer_id = _normalize_value(item.get("id")) or str(uuid.uuid4())
    return {
        "uuid": timer_id,
        "name": _normalize_value(item.get("name")) or "Таймер",
        "action_type": "create_timer",
        "device_id": _normalize_value(item.get("deviceId") or item.get("device_id")),
        "timer_time": timer_time,
    }


def _alarm_item_to_request(item: dict[str, Any]) -> dict[str, Any]:
    time_data = item.get("time") if isinstance(item.get("time"), dict) else {}
    alarm_time = _normalize_value(time_data.get("time") or item.get("time")) or "08:00"
    alarm_id = _normalize_value(item.get("id")) or str(uuid.uuid4())
    return {
        "uuid": alarm_id,
        "name": _normalize_value(item.get("name")) or f"Будильник {alarm_time}",
        "action_type": "create_alarm",
        "device_id": _normalize_value(item.get("deviceId") or item.get("device_id")),
        "status": _normalize_value(item.get("status")) or "on",
        "time": alarm_time,
        "volume_start": item.get("volume_start", 0.3),
    }


class DialogTimerAlarmManager:
    """In-memory timer/alarm manager owned by command coordinator."""

    def __init__(
        self,
        hass: HomeAssistant,
        append_log: Callable[[str, str], None],
        post_save_commands: Callable[[dict[str, Any], dict[str, Any]], Awaitable[None]],
        storage_key_suffix: str = "global",
    ) -> None:
        self.hass = hass
        self._append_log = append_log
        self._post_save_commands = post_save_commands

        self.timer_manager = DialogTimerManager(
            hass,
            self._mark_updated,
            lambda: self._media_content_id_for("timer"),
        )
        self.alarm_manager = DialogAlarmManager(
            hass,
            self._mark_updated,
            lambda: self._media_content_id_for("alarm"),
            None,
        )

        self._timers = self.timer_manager._timers
        self._alarms = self.alarm_manager._alarms
        self._alarm_presets = self.alarm_manager._alarm_presets
        self._last_updated: str | None = None
        self._restored = False
        self._runtime_state_key = f"timer_alarm_runtime:{id(self)}"
        self._active_builtin_type = "timer"

    async def async_restore_from_options(self, options: dict[str, Any]) -> None:
        if self._restored:
            return
        
        shared_client_id = _normalize_value(options.get("client_id"))

        timer_requests = await async_load_timer_requests(self.hass)
        alarm_requests = await async_load_alarm_requests(self.hass)
        normalized_items = [
            *[_timer_request_to_runtime_item(item, shared_client_id) for item in timer_requests],
            *[_alarm_request_to_runtime_item(item, shared_client_id) for item in alarm_requests],
        ]
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

        await self.timer_manager.apply_ui_items(incoming_timers)
        await self.alarm_manager.apply_ui_items(incoming_alarms)
        self._restored = True

    async def async_stop(self) -> None:
        await self.timer_manager.async_stop()
        await self.alarm_manager.async_stop()
        self._remove_runtime_state()

    async def async_handle_builtin(
        self,
        payload: dict[str, Any],
        options: dict[str, Any],
    ) -> bool:
        parent_type = _normalize_value(payload.get("parent_type")).lower()
        device_id = _normalize_value(payload.get("device_id"))
        client_id = _normalize_value(payload.get('client_id'))
        count = _extract_count(payload)
        execution_command = payload.get("execution_command")

        commands = None
        if parent_type == "timer_start":
            self._active_builtin_type = "timer"
            timer = _extract_timer_parts(payload.get("children_direct_type"))
            commands = await self.timer_manager.async_handle_timer_start(timer, client_id, device_id, execution_command)
        elif parent_type == "timer_stop":
            commands = await self.timer_manager.async_handle_timer_stop(client_id, device_id, count, execution_command)
        elif parent_type == "timer_info":
            commands = await self.timer_manager.async_handle_timer_info(client_id, device_id, execution_command)
        elif parent_type == "timer_pause":
            commands = await self.timer_manager.async_handle_timer_pause(client_id, device_id, count, execution_command)
        elif parent_type == "timer_resume":
            commands = await self.timer_manager.async_handle_timer_resume(client_id, device_id, count)
        elif parent_type == "alarm_start":
            self._active_builtin_type = "alarm"
            alarm_time = _extract_alarm_time(payload.get("children_direct_type"))
            commands = await self.alarm_manager.async_handle_alarm_start(alarm_time, client_id, device_id, execution_command)
        elif parent_type == "alarm_stop":
            commands = await self.alarm_manager.async_handle_alarm_stop(client_id, device_id, count, execution_command)
        elif parent_type == "alarm_info":
            commands = await self.alarm_manager.async_handle_alarm_info(client_id, device_id, execution_command)

        if parent_type not in {"timer_start", "alarm_start"}:
            return False

        if isinstance(commands, dict) and _normalize_value(commands.get("actionType")).lower() == "error":
            return False

        await self._persist_voice_request(payload, commands)
        await self._post_save_commands(options, commands)
        return True

    async def _persist_voice_request(self, payload: dict[str, Any], commands: dict[str, Any] | None) -> None:
        if not isinstance(payload, dict):
            return

        if isinstance(commands, dict) and _normalize_value(commands.get("actionType")).lower() == "error":
            return

        request_payload = _build_voice_request_payload(payload)
        if request_payload is None:
            return

        if request_payload.get("action_type") == "create_timer":
            timer_requests = await async_load_timer_requests(self.hass)
            timer_requests.append(request_payload)
            await async_save_timer_requests(self.hass, timer_requests)
            return

        alarm_requests = await async_load_alarm_requests(self.hass)
        alarm_requests.append(request_payload)
        await async_save_alarm_requests(self.hass, alarm_requests)

    def get_timer_items(self) -> list[dict[str, Any]]:
        return self.timer_manager.get_timer_items()

    def get_alarm_items(self) -> list[dict[str, Any]]:
        return self.alarm_manager.get_alarm_items()

    def get_items(self) -> list[dict[str, Any]]:
        items = self.get_timer_items() + self.get_alarm_items()
        items.sort(key=_sort_item_key)
        return items

    def get_active_items(self) -> list[dict[str, Any]]:
        items = self.timer_manager.get_active_items() + self.alarm_manager.get_active_items()
        items.sort(key=_sort_item_key)
        return items

    def get_alarm_presets(self) -> list[str]:
        return self.alarm_manager.get_alarm_presets()

    def serialize_timer_persisted_items(self) -> list[dict[str, Any]]:
        return self.timer_manager.serialize_timer_persisted_items()

    def serialize_alarm_persisted_items(self) -> list[dict[str, Any]]:
        return self.alarm_manager.serialize_alarm_persisted_items()

    def serialize_persisted_items(self) -> list[dict[str, Any]]:
        return self.serialize_timer_persisted_items() + self.serialize_alarm_persisted_items()

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

        await self.timer_manager.apply_ui_items(incoming_timers)
        await self.alarm_manager.apply_ui_items(incoming_alarms)
        return self.get_items()

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
            "volume_start": item.get("volume_start", 0.3),
        }

    def _mark_updated(self) -> None:
        self._last_updated = dt_util.now().isoformat()
        self._persist_items_to_entry()
        self._publish_runtime_state()
        self.hass.async_create_task(self._async_save_to_request_storages())

    async def _async_save_to_request_storages(self) -> None:
        try:
            await async_save_timer_requests(
                self.hass,
                [_timer_item_to_request(item) for item in self.get_timer_items()],
            )
            await async_save_alarm_requests(
                self.hass,
                [_alarm_item_to_request(item) for item in self.get_alarm_items()],
            )
        except Exception as err:
            _LOGGER.warning("Failed to save timer/alarm requests to split storages: %s", err)

    def _default_media_content_id(self) -> str:
        return self._media_content_id_for(self._active_builtin_type)

    def _media_content_id_for(self, item_type: str) -> str:
        entry = _get_entry(self.hass)
        if entry is None:
            return _FALLBACK_TIMER_MEDIA_CONTENT_ID
        options = _get_options(entry, get_cached_settings(self.hass))
        key = "alarm_music" if item_type == "alarm" else "timer_music"
        configured = _normalize_value(options.get(key) or options.get("timer_alarm_media_content_id"))
        if configured.startswith("media-source://media_source/local/"):
            configured = configured.split("media-source://media_source/local/", 1)[1]
        return configured or _FALLBACK_TIMER_MEDIA_CONTENT_ID

    def _persist_items_to_entry(self) -> None:
        # Runtime state is persisted in split storages:
        # dialog_custom_ui_timer_requests and dialog_custom_ui_alarm_requests.
        return

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
@websocket_api.async_response
async def _ws_get_timer_alarm_config(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    entry = _get_entry(hass)
    if entry is None:
        connection.send_error(msg["id"], "not_configured", "Integration entry not found")
        return
    manager = _get_manager(hass, entry)
    managers = _iter_managers(hass)
    options = _get_options(entry, get_cached_settings(hass))
    all_items: dict[str, dict[str, Any]] = {}
    all_active: dict[str, dict[str, Any]] = {}
    all_presets: set[str] = set()
    last_updated: str | None = None
    all_presets.update(_normalize_alarm_presets(options.get("timer_alarm_presets", [])))
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

    for value in hass.data.get(DOMAIN, {}).values():
        for item in _coerce_items_from_runtime_holder(value):
            item_id = _normalize_value(item.get("id"))
            if not item_id:
                continue
            if item_id not in all_items:
                all_items[item_id] = item
            status = _normalize_value(item.get("status")).lower()
            if status in {"on", "paused"} and item_id not in all_active:
                all_active[item_id] = item

    items = list(all_items.values()) if all_items else (manager.get_items() if manager is not None else [])
    active_items = list(all_active.values()) if all_active else (manager.get_active_items() if manager is not None else [])
    alarm_presets = sorted(all_presets) if all_presets else (manager.get_alarm_presets() if manager is not None else [])
    if last_updated is None and manager is not None:
        last_updated = manager.last_updated

    connection.send_result(
        msg["id"],
        {
            "base_url": options["base_url"],
            "client_id": options["client_id"],
            "device_ids": options["timer_alarm_device_ids"],
            "default_media_content_id": options["timer_alarm_media_content_id"],
            "items": items,
            "active_items": active_items,
            "alarm_presets": alarm_presets,
            "device_labels": _collect_device_labels(hass, items, options.get("timer_alarm_device_ids", [])),
            "last_updated": last_updated,
            "debug_meta": {
                "managers_detected": len(managers),
                "runtime_snapshots_detected": len(runtime_snapshots) if isinstance(runtime_snapshots, dict) else 0,
                "all_items_count": len(items),
                "all_active_items_count": len(active_items),
            },
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SAVE_TIMER_ALARM_CONFIG,
        vol.Optional("timer_alarm_items", default=[]): [dict],
    }
)
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

    options = _get_options(entry, get_cached_settings(hass))
    shared_client_id = _normalize_value(options.get("client_id"))
    requested_items = [item for item in msg.get("timer_alarm_items", []) if isinstance(item, dict)]
    manager_targets = managers or ([manager] if manager is not None else [])
    target_manager = _select_manager(manager_targets, requested_items, shared_client_id) or manager
    if not manager_targets or target_manager is None:
        connection.send_error(msg["id"], "not_ready", "Timer/alarm manager not found")
        return

    applied = 0
    for runtime_manager in manager_targets:
        try:
            await runtime_manager.async_apply_ui_items(requested_items, shared_client_id)
            applied += 1
        except Exception as err:  # pragma: no cover - defensive path
            _LOGGER.warning("Failed to apply UI timer/alarm update to runtime manager: %s", err)

    await async_save_timer_requests(
        hass,
        [_timer_item_to_request(item) for item in target_manager.get_timer_items()],
    )
    await async_save_alarm_requests(
        hass,
        [_alarm_item_to_request(item) for item in target_manager.get_alarm_items()],
    )

    connection.send_result(msg["id"], {"saved": True})


def _iter_managers(hass: HomeAssistant) -> list[Any]:
    managers: list[Any] = []
    for value in hass.data.get(DOMAIN, {}).values():
        manager = getattr(value, "timer_alarm_manager", None)
        if manager is None:
            continue
        required_attrs = (
            "get_items",
            "get_active_items",
            "get_alarm_presets",
            "async_apply_ui_items",
            "serialize_persisted_items",
        )
        if all(hasattr(manager, attr) for attr in required_attrs):
            managers.append(manager)
    return managers


def _select_manager(
    managers: list[Any],
    requested_items: list[dict[str, Any]],
    shared_client_id: str,
) -> Any | None:
    if not managers:
        return None
    requested_ids = {_normalize_value(item.get("id")) for item in requested_items if _normalize_value(item.get("id"))}
    best_manager: Any | None = None
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
