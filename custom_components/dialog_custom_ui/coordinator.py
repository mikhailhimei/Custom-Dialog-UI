import logging
from datetime import datetime

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, HomeAssistant, callback

from .utils import _get_options, _normalize_value
from .normalize import unwrap_payload, normalize_payload
from .scenario_engine import match_scenario
from .script_runner import run_script
from .timer_alarm.timer_alarm_manager_wrapper import DialogTimerAlarmManager
from .const import (
    CONF_REDIS_PASSWORD,
    CONF_REDIS_URL,
    DEFAULT_REDIS_URL,
    DOMAIN,
    EVENT_ACTIVE_COMMAND,
    EVENT_DIALOG_MESSAGE,
)

_LOGGER = logging.getLogger(__name__)


class DialogCommandCoordinator:
    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self.hass = hass
        self.entry = entry
        self._unsub_active_command = None
        
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

    async def async_stop(self):
        if self._unsub_active_command:
            _LOGGER.info("Stopping DialogCommandCoordinator for entry %s", self.entry.entry_id)
            self._append_log("info", "coordinator stopping")
            self._unsub_active_command()
            self._unsub_active_command = None
        await self.timer_alarm_manager.async_stop()

    @callback
    def _handle_active_command_event(self, event: Event) -> None:
        data = event.data or {}
        options = _get_options(self.entry)
        event_client_id = _normalize_value(data.get("client_id"))
        configured_client_id = _normalize_value(options.get("client_id"))

        if configured_client_id and event_client_id != configured_client_id:
            return

        self.hass.async_create_task(
            self._handle_payload(data.get("command_data")),
        )

    async def _handle_payload(self, raw):
        _LOGGER.debug("Received raw payload for entry %s: %s", self.entry.entry_id, raw)
        raw = unwrap_payload(raw)
        _LOGGER.debug("Unwrapped payload for entry %s: %s", self.entry.entry_id, raw)
        payloads = normalize_payload(raw)
        _LOGGER.debug("Normalized payloads for entry %s: %s", self.entry.entry_id, payloads)

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
