import asyncio
import logging
from datetime import datetime

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .utils import _get_options
from .payload import unwrap_payload, normalize_payload
from .scenario_engine import match_scenario
from .script_runner import run_script
from .redis_transport import RedisTransport
from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


class DialogCommandCoordinator:
    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self.hass = hass
        self.entry = entry
        self._task = None
        self.redis = RedisTransport(self._append_log)
        _LOGGER.debug("DialogCommandCoordinator initialized for entry %s", self.entry.entry_id)

    async def async_start(self):
        if self._task:
            _LOGGER.debug("Coordinator already started for entry %s", self.entry.entry_id)
            return
        _LOGGER.info("Starting DialogCommandCoordinator for entry %s", self.entry.entry_id)
        self._append_log("info", "coordinator started")
        self._task = self.hass.async_create_task(self._run())

    async def async_stop(self):
        if self._task:
            _LOGGER.info("Stopping DialogCommandCoordinator for entry %s", self.entry.entry_id)
            self._append_log("info", "coordinator stopping")
            self._task.cancel()
            self._task = None

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
            scenario = match_scenario(payload, _get_options(self.entry)["scenarios"])

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
                await run_script(
                    self.hass,
                    scenario["script_entity_id"],
                    payload,
                )
            except Exception as e:
                _LOGGER.exception(
                    "Failed to run script %s for scenario %s",
                    scenario.get("script_entity_id"),
                    scenario_name,
                )
                self._append_log("error", f"script run failed: {e}")

    def _append_log(self, level: str, message: str):
        logs = self.hass.data[DOMAIN].setdefault("logs", [])
        logs.append({"ts": datetime.now().strftime("%H:%M:%S"), "level": level, "message": message})