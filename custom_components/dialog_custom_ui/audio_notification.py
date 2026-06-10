import asyncio
import logging
from typing import Any
from homeassistant.helpers import entity_registry as er

_LOGGER = logging.getLogger(__name__)


def _resolve_media_player_entity_id(hass, device_ref) -> str:
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

async def _async_restore_volume(hass, target: str, old_volume: Any) -> None:
    try:
        await asyncio.sleep(2)
        await hass.services.async_call(
            "media_player",
            "volume_set",
            {"volume_level": float(old_volume)},
            target={"entity_id": target},
            blocking=False,
        )
    except Exception as err:
        _LOGGER.error("Failed to restore volume on %s: %s", target, err)


async def audio_notification(hass, device_id, audio_file, volume_level=1.0):
    audio_url = f"media-source://media_source/local/{audio_file}"
    if device_id:
                target = _resolve_media_player_entity_id(hass, device_id)
                
                if target:
                    old_volume = None
                    state = hass.states.get(target)
                    if state is not None:
                        old_volume = state.attributes.get("volume_level")
                    try:
                        await hass.services.async_call(
                            "media_player",
                            "volume_set",
                            {
                                "volume_level": volume_level,
                            },
                            target={"entity_id": target},
                            blocking=False,
                        )
                    except Exception as err:
                        _LOGGER.error("Failed to set volume on %s: %s", target, err)
                    try:
                        await hass.services.async_call(
                            "media_player",
                            "play_media",
                            {
                                "media_content_id": audio_url,
                                "media_content_type": "music",
                                "enqueue": "replace",
                            },
                            target={"entity_id": target},
                            blocking=False,
                        )
                        if old_volume is not None:
                            hass.async_create_task(
                                _async_restore_volume(hass, target, old_volume),
                            )
                    except Exception as err:
                        _LOGGER.error("Failed to play media on %s: %s", target, err)
                else:
                    _LOGGER.error("No media_player entity found for application_id: %s", device_id)
    else:
        _LOGGER.error("No application_id provided for fallback playback")