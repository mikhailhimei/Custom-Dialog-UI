import logging
from datetime import datetime

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, HomeAssistant, callback

from .utils import _get_options, _normalize_value
from .normalize import unwrap_payload, normalize_payload
from .scenario_engine import match_scenario
from .script_runner import run_script
from .timer_alarm.timer_alarm_manager_wrapper import DialogTimerAlarmManager
from .external_event_bridge import ExternalEventBridge
from .const import (
    CONF_EXTERNAL_EVENT_BRIDGE_ENABLED,
    CONF_REMOTE_ACTIVE_SEARCH_ENABLED,
    CONF_REDIS_PASSWORD,
    CONF_REDIS_URL,
    CONF_TIMER_ALARM_DEVICE_IDS,
    DEFAULT_REDIS_URL,
    DOMAIN,
    EVENT_ACTIVE_COMMAND,
    EVENT_DIALOG_MESSAGE,
)

_LOGGER = logging.getLogger(__name__)


def _normalize_active_command_event_data(data: dict) -> dict:
    """Return active-command data from direct or wrapped event payloads."""
    if not isinstance(data, dict):
        return {}

    nested = data.get("data")
    if isinstance(nested, dict) and (
        "command_data" in nested
        or "commandData" in nested
        or "parent_type" in nested
        or "children_type" in nested
    ):
        normalized = dict(nested)
        for key, value in data.items():
            if key not in {"data", "event", "event_type", "type"} and key not in normalized:
                normalized[key] = value
    else:
        normalized = dict(data)

    if "client_id" not in normalized and normalized.get("clientId") is not None:
        normalized["client_id"] = normalized.get("clientId")
    if "device_id" not in normalized and normalized.get("deviceId") is not None:
        normalized["device_id"] = normalized.get("deviceId")
    if "command_data" not in normalized and normalized.get("commandData") is not None:
        normalized["command_data"] = normalized.get("commandData")

    if "command_data" not in normalized and (
        "parent_type" in normalized
        or "children_type" in normalized
        or "children_direct_type" in normalized
    ):
        normalized["command_data"] = dict(normalized)

    return normalized

def _extract_payload_device_ids(value) -> set[str]:
    if isinstance(value, dict):
        result = set()
        for key in ("device_id", "deviceId", "application_id", "applicationId"):
            device_id = _normalize_value(value.get(key))
            if device_id:
                result.add(device_id)
        for nested_key in ("command_data", "commandData", "data"):
            result.update(_extract_payload_device_ids(value.get(nested_key)))
        return result
    if isinstance(value, list):
        result = set()
        for item in value:
            result.update(_extract_payload_device_ids(item))
        return result
    return set()


class DialogCommandCoordinator:
    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self.hass = hass
        self.entry = entry
        self._unsub_active_command = None
        self.external_event_bridge = ExternalEventBridge(
            hass,
            entry,
            self._append_log,
        )
        
        # Get Redis configuration for alarm persistence
        options = _get_options(entry)
        redis_url = _normalize_value(options.get(CONF_REDIS_URL)) or DEFAULT_REDIS_URL
        redis_password = _normalize_value(options.get(CONF_REDIS_PASSWORD))
        
        self.timer_alarm_manager = DialogTimerAlarmManager(
            hass,
            self._append_log,
            self._post_save_commands,
            redis_url=redis_url,
            redis_password=redis_password,
        )
        _LOGGER.debug("DialogCommandCoordinator initialized for entry %s", self.entry.entry_id)

    def _append_log(self, level: str, message: str):
        logs = self.hass.data[DOMAIN].setdefault("logs", [])
        logs.append({"ts": datetime.now().strftime("%H:%M:%S"), "level": level, "message": message})

    async def async_reload(self):
        _LOGGER.info(
            "Reloading DialogCommandCoordinator for entry %s",
            self.entry.entry_id,
        )

        await self.async_stop()
        await self.async_start()

    async def async_start(self):
        if self._unsub_active_command:
            _LOGGER.debug("Coordinator already started for entry %s", self.entry.entry_id)
            return
        _LOGGER.info("Starting DialogCommandCoordinator for entry %s", self.entry.entry_id)
        options = _get_options(self.entry)
        await self.timer_alarm_manager.async_restore_from_options(options)
        self._append_log("info", "coordinator started")
        self._unsub_active_command = self.hass.bus.async_listen(
            EVENT_ACTIVE_COMMAND,
            self._handle_active_command_event,
        )
        remote_active_search_enabled = bool(
            options.get(CONF_REMOTE_ACTIVE_SEARCH_ENABLED)
            or options.get(CONF_EXTERNAL_EVENT_BRIDGE_ENABLED)
        )
        await self.external_event_bridge.async_start(
            listen_external_active_commands=remote_active_search_enabled,
            forward_dialog_messages=remote_active_search_enabled,
        )

    async def async_stop(self):
        if self._unsub_active_command:
            _LOGGER.info("Stopping DialogCommandCoordinator for entry %s", self.entry.entry_id)
            self._append_log("info", "coordinator stopping")
            self._unsub_active_command()
            self._unsub_active_command = None
        await self.external_event_bridge.async_stop()
        await self.timer_alarm_manager.async_stop()

    @callback
    def _handle_active_command_event(self, event: Event) -> None:
        data = _normalize_active_command_event_data(event.data or {})
        options = _get_options(self.entry)
        event_client_id = _normalize_value(data.get("client_id"))
        configured_client_id = _normalize_value(options.get("client_id"))

        if configured_client_id and event_client_id != configured_client_id:
            self._append_log("idle", f"active command skipped: client_id {event_client_id or '<empty>'}")
            return

        command_data = data.get("command_data")
        if command_data in (None, ""):
            self._append_log("error", "active command skipped: command_data missing")
            return

        configured_device_ids = {
            _normalize_value(device_id)
            for device_id in options.get(CONF_TIMER_ALARM_DEVICE_IDS, [])
            if _normalize_value(device_id)
        }
        event_device_ids = _extract_payload_device_ids(data)
        if configured_device_ids and event_device_ids and configured_device_ids.isdisjoint(event_device_ids):
            self._append_log("idle", "active command skipped: device_id mismatch")
            return

        self._append_log("request", f"RECV {EVENT_ACTIVE_COMMAND}:{event_client_id or '<empty>'}")
        self.hass.async_create_task(
            self._handle_payload(command_data),
        )

    async def _handle_payload(self, raw):
        _LOGGER.debug("Received raw payload for entry %s: %s", self.entry.entry_id, raw)
        raw = unwrap_payload(raw)
        _LOGGER.debug("Unwrapped payload for entry %s: %s", self.entry.entry_id, raw)
        payloads = normalize_payload(raw)
        _LOGGER.debug("Normalized payloads for entry %s: %s", self.entry.entry_id, payloads)
        if not payloads:
            self._append_log("idle", "active command empty")
            return

        for payload in payloads:
            options = _get_options(self.entry)
            scenario = match_scenario(payload, options["scenarios"])

            if not scenario:
                _LOGGER.debug("No scenario match for payload: %s", payload)
                self._append_log("idle", "no match")
                continue

            scenario_name = scenario.get("name") or scenario.get("entity_id") or "unknown"
            _LOGGER.info(
                "Matched scenario %s for payload %s: script=%s",
                scenario_name,
                payload,
                scenario.get("script_entity_id"),
            )
            self._append_log("match", scenario_name)

            try:
                script_entity_id = _normalize_value(scenario.get("script_entity_id"))
                if script_entity_id in {"timer", "alarm"}:
                    handled = await self.timer_alarm_manager.async_handle_builtin(payload, options)
                    if handled:
                        continue

                await run_script(
                    self.hass,
                    script_entity_id,
                    payload,
                )
            except Exception as e:
                _LOGGER.exception(
                    "Failed to run script %s for scenario %s",
                    scenario.get("script_entity_id"),
                    scenario_name,
                )
                self._append_log("error", f"script run failed: {e}")

    async def _post_save_commands(self, options: dict[str, str], payload: dict[str, str]) -> None:

        _LOGGER.debug(
            "TimerAlarmManager post-save payload for entry %s: %s",
            self.entry.entry_id,
            payload,
        )
        client_id = _normalize_value(payload.get("clientId"))

        if not client_id:
            self._append_log("error", "post-save skipped: client_id or device_id missing")
            return

        message = {
            key: value
            for key, value in payload.items()
            if key not in {"clientId"}
        }
        self.hass.bus.async_fire(
            EVENT_DIALOG_MESSAGE,
            {
                "client_id": client_id,
                "device_id": payload.get("deviceId"),
                **message,
            },
        )
        self._append_log("request", f"FIRE {EVENT_DIALOG_MESSAGE}:{client_id}:{payload.get('deviceId')}")
