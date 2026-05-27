import asyncio
from datetime import datetime

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .utils import _get_options
from .payload import unwrap_payload, normalize_payload
from .scenario_engine import match_scenario
from .script_runner import run_script
from .redis_transport import RedisTransport
from .const import DOMAIN


class DialogCommandCoordinator:
    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        self.hass = hass
        self.entry = entry
        self._task = None
        self.redis = RedisTransport(self._append_log)

    async def async_start(self):
        if self._task:
            return
        self._task = self.hass.async_create_task(self._run())

    async def async_stop(self):
        if self._task:
            self._task.cancel()
            self._task = None

    async def _run(self):
        while True:
            try:
                options = _get_options(self.entry)

                await self.redis.subscribe(
                    options,
                    self._handle_payload,
                )

            except Exception as e:
                self._append_log("error", str(e))

            await asyncio.sleep(5)

    async def _handle_payload(self, raw):
        raw = unwrap_payload(raw)
        payloads = normalize_payload(raw)

        for payload in payloads:
            scenario = match_scenario(payload, _get_options(self.entry)["scenarios"])

            if not scenario:
                self._append_log("idle", "no match")
                continue

            self._append_log("match", scenario["entity_id"])

            await run_script(
                self.hass,
                scenario["script_entity_id"],
                payload,
            )

    def _append_log(self, level: str, message: str):
        logs = self.hass.data[DOMAIN].setdefault("logs", [])
        logs.append({"ts": datetime.now().strftime("%H:%M:%S"), "level": level, "message": message})