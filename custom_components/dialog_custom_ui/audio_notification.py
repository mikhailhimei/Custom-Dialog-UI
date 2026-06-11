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

async def _async_restore_volume(hass, target: str, old_volume: Any, delay: float = 2.0) -> None:
    try:
        await asyncio.sleep(float(delay))
        await hass.services.async_call(
            "media_player",
            "volume_set",
            {"volume_level": float(old_volume)},
            target={"entity_id": target},
            blocking=False,
        )
    except Exception as err:
        _LOGGER.error("Failed to restore volume on %s: %s", target, err)

async def _async_ramp_volume(
    hass,
    target: str,
    start: float,
    end: float,
    interval: float = 15.0,
) -> None:
    try:
        curr = float(start)
        end = float(end)

        while curr < end:
            await asyncio.sleep(interval)

            curr = round(min(curr + 0.1, end), 1)

            await hass.services.async_call(
                "media_player",
                "volume_set",
                {"volume_level": curr},
                target={"entity_id": target},
                blocking=True,
            )

            await asyncio.sleep(0.5)

            if curr >= end:
                break

    except Exception as err:
        _LOGGER.error("Volume ramp task failed for %s: %s", target, err)


async def audio_notification(hass, device_id, audio_file, volume_level=None):
    audio_url = f"media-source://media_source/local/{audio_file}"
    if device_id:
                target = _resolve_media_player_entity_id(hass, device_id)
                
                if target:
                    is_range = False
                    old_volume = None
                    range_start = None
                    range_end = None
                    state = hass.states.get(target)

                    if isinstance(volume_level, str) and "-" in volume_level:
                        parts = volume_level.split("-", 1)
                        range_start = float(parts[0])
                        range_end = float(parts[1])
                        volume = range_start
                        is_range = True

                    elif state is not None and volume_level is not None and not is_range:
                        old_volume = state.attributes.get("volume_level")
                        volume = old_volume

                    elif volume_level: 
                        volume = volume_level

                    # set initial volume before playback: for ranges set to lower bound, otherwise set requested value or old
                    if volume is not None:
                        try:
                            await hass.services.async_call(
                                "media_player",
                                "volume_set",
                                {"volume_level": float(volume)},
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

                        # start ramp in background if needed
                        if is_range:
                            try:
                                hass.async_create_task(
                                        _async_ramp_volume(hass, target, float(range_start), float(range_end), 10.0)
                                    )
                            except Exception as err:
                                _LOGGER.error("Failed to start ramp task for %s: %s", target, err)

                        # restore old volume after a delay; if we ramp, postpone restore until ramp finishes
                        if old_volume is not None and volume_level is not None and not is_range:
                            try:
                                if is_range:
                                    # ramp duration 5s + small buffer
                                    hass.async_create_task(
                                        _async_restore_volume(hass, target, old_volume, delay=7.0),
                                    )
                                else:
                                    hass.async_create_task(
                                        _async_restore_volume(hass, target, old_volume),
                                    )
                            except Exception as err:
                                _LOGGER.error("Failed to schedule restore for %s: %s", target, err)
                    except Exception as err:
                        _LOGGER.error("Failed to play media on %s: %s", target, err)
                else:
                    _LOGGER.error("No media_player entity found for application_id: %s", device_id)
    else:
        _LOGGER.error("No application_id provided for fallback playback")
