import asyncio
import json
import logging
from datetime import datetime

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .utils import _get_options, _normalize_value
from .normalize import unwrap_payload, normalize_payload
from .scenario_engine import match_scenario
from .script_runner import run_script
from .redis_transport import RedisTransport
from .timer_alarm.timer_alarm_manager_wrapper import DialogTimerAlarmManager
from .const import CONF_REDIS_PASSWORD, CONF_REDIS_URL, DEFAULT_REDIS_URL, DOMAIN
import redis.asyncio as redis

_LOGGER = logging.getLogger(__name__)


class DialogCommandCoordinator:
    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self.hass = hass
        self.entry = entry
        self._task = None
        self.redis = RedisTransport(self._append_log)
        
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
        if self._task:
            _LOGGER.debug("Coordinator already started for entry %s", self.entry.entry_id)
            return
        _LOGGER.info("Starting DialogCommandCoordinator for entry %s", self.entry.entry_id)
        options = _get_options(self.entry)
        await self.timer_alarm_manager.async_restore_from_options(options)
        self._append_log("info", "coordinator started")
        self._task = self.hass.async_create_task(self._run())

    async def async_stop(self):
        if self._task:
            _LOGGER.info("Stopping DialogCommandCoordinator for entry %s", self.entry.entry_id)
            self._append_log("info", "coordinator stopping")
            self._task.cancel()
            self._task = None
        await self.timer_alarm_manager.async_stop()

    async def _run(self):
        while True:
            try:
                options = _get_options(self.entry)
                _LOGGER.debug("Coordinator run loop options for entry %s: %s", self.entry.entry_id, options)

                await self.redis.subscribe(
                    options,
                    self._handle_payload,
                )

            except asyncio.CancelledError:
                _LOGGER.info("Coordinator task cancelled for entry %s", self.entry.entry_id)
                raise

            except Exception as e:
                _LOGGER.exception("DialogCommandCoordinator run loop error for entry %s", self.entry.entry_id)
                self._append_log("error", f"run error: {e}")

            await asyncio.sleep(5)

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

        channel = f"DIALOG_MESSAGE:{client_id}"
        redis_url = _normalize_value(options.get(CONF_REDIS_URL)) or DEFAULT_REDIS_URL
        redis_password = _normalize_value(options.get(CONF_REDIS_PASSWORD))
        message = {
            key: value
            for key, value in payload.items()
            if key not in {"clientId"}
        }
        client = redis.Redis.from_url(
            redis_url,
            decode_responses=True,
            password=redis_password or None,
        )
        try:
            self.hass.bus.async_fire(
                "dialog_message",
                {
                    "client_id": client_id,
                    "device_id": payload.get("deviceId"),
                    **message,
                },
            )
            return
            await client.publish(channel, json.dumps(message, ensure_ascii=False))
            self._append_log("request", f"PUBLISH {channel}")
        finally:
            close_client = getattr(client, "aclose", None) or getattr(client, "close", None)
            if close_client:
                result = close_client()
                if hasattr(result, "__await__"):
                    await result