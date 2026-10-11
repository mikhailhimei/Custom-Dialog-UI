"""Full integration loading, polling and restart on a local Home Assistant core."""
import asyncio
import json
import socket
from pathlib import Path
from unittest.mock import AsyncMock, patch

import pytest
from homeassistant import loader
from homeassistant.bootstrap import async_from_config_dict
from homeassistant.config_entries import ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er

from custom_components.dialog_custom_ui.const import DOMAIN
from test_timer_runtime import config_entry

CONFIG = {"homeassistant": {"name": "Timer tests", "latitude": 0, "longitude": 0,
          "elevation": 0, "unit_system": "metric", "time_zone": "UTC"},
          "http": {"server_host": "127.0.0.1", "server_port": 18123}, "frontend": {}}
ENTITY = "sensor.dialog_custom_ui_timers"


async def boot(config_dir):
    hass = HomeAssistant(str(config_dir))
    loader.async_setup(hass)
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        port = sock.getsockname()[1]
    config = {**CONFIG, "http": {**CONFIG["http"], "server_port": port}}
    assert await async_from_config_dict(config, hass) is hass
    await hass.async_start()
    return hass


@pytest.mark.asyncio
async def test_full_setup_service_poll_unload_and_restart(tmp_path):
    (tmp_path / "custom_components").symlink_to(Path(__file__).resolve().parents[1] / "custom_components", target_is_directory=True)
    hass = await boot(tmp_path)
    try:
        entry = config_entry()
        # Setup failure must clean runtime state and remain retryable.
        with patch.object(hass.config_entries, "async_forward_entry_setups", new_callable=AsyncMock, side_effect=RuntimeError("forward failed")):
            await hass.config_entries.async_add(entry)
        assert entry.state is ConfigEntryState.SETUP_ERROR
        assert entry.entry_id not in hass.data[DOMAIN]
        assert "coordinator" not in hass.data[DOMAIN]
        assert await hass.config_entries.async_reload(entry.entry_id)
        assert entry.state is ConfigEntryState.LOADED
        state = hass.states.get(ENTITY)
        assert state is not None and state.state == "0"
        assert isinstance(state.attributes["payload"], str)
        before = json.loads(state.attributes["payload"])["_updated_at"]
        await asyncio.sleep(2.2)
        assert json.loads(hass.states.get(ENTITY).attributes["payload"])["_updated_at"] > before
        await hass.services.async_call(DOMAIN, "timer_create", {"clientId": "test", "deviceId": "voice", "ss": 120}, blocking=True)
        manager = hass.data[DOMAIN][entry.entry_id].timer_alarm_manager.timer_manager
        timer_id = next(iter(manager._timers))
        await asyncio.sleep(2.2)
        payload = json.loads(hass.states.get(ENTITY).attributes["payload"])
        assert 115 <= payload["voice"]["remaining_seconds"] < 120
        await manager._pause_timer(timer_id)
        await asyncio.sleep(2.2)
        payload = json.loads(hass.states.get(ENTITY).attributes["payload"])
        expected = payload["voice"]
        assert expected["paused"]
        before = payload["_updated_at"]
        await asyncio.sleep(1.2)
        payload = json.loads(hass.states.get(ENTITY).attributes["payload"])
        assert payload["_updated_at"] > before
        assert payload["voice"] == expected
        await hass.async_block_till_done()
        registry_id = er.async_get(hass).async_get_entity_id("sensor", DOMAIN, f"{entry.entry_id}_voice_timers")
        assert registry_id == ENTITY
        # A refused unload leaves the manager intact.
        with patch.object(hass.config_entries, "async_unload_platforms", new_callable=AsyncMock, return_value=False):
            assert not await hass.config_entries.async_unload(entry.entry_id)
        assert hass.data[DOMAIN][entry.entry_id].timer_alarm_manager.timer_manager is manager
        assert await hass.config_entries.async_unload(entry.entry_id)
        assert entry.entry_id not in hass.data[DOMAIN]
        assert hass.states.get(ENTITY).state == "unavailable"
        await hass.async_block_till_done()
    finally:
        await hass.async_stop()
    # New core reads the actual .storage and entity registry from disk.
    hass = await boot(tmp_path)
    try:
        await asyncio.sleep(1.2)
        entries = hass.config_entries.async_entries(DOMAIN)
        assert len(entries) == 1 and entries[0].state is ConfigEntryState.LOADED
        assert hass.states.get(ENTITY).state == "1"
        payload = json.loads(hass.states.get(ENTITY).attributes["payload"])
        assert payload["voice"] == expected
        assert len([s for s in hass.states.async_all("sensor") if s.entity_id.startswith(ENTITY)]) == 1
    finally:
        await hass.async_stop()
