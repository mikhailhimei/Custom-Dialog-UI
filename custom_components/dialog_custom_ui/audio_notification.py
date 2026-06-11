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
            curr = min(curr + 0.1, end)

            await hass.services.async_call(
                "media_player",
                "volume_set",
                {"volume_level": curr},
                target={"entity_id": target},
                blocking=False,
            )

            if curr >= end:
                break

            await asyncio.sleep(interval)

    except Exception as err:
        _LOGGER.error("Volume ramp task failed for %s: %s", target, err)


async def audio_notification(hass, device_id, audio_file, volume_level=None):
    audio_url = f"media-source://media_source/local/{audio_file}"
    if device_id:
                target = _resolve_media_player_entity_id(hass, device_id)
                
                if target:
                    old_volume = None
                    state = hass.states.get(target)
                    if state is not None and volume_level is not None:
                        old_volume = state.attributes.get("volume_level")

                    # support range string like "0.5-1.0"
                    is_range = False
                    range_start = None
                    range_end = None
                    if isinstance(volume_level, str) and "-" in volume_level:
                        try:
                            parts = volume_level.split("-", 1)
                            range_start = float(parts[0])
                            range_end = float(parts[1])
                            is_range = True
                        except Exception:
                            is_range = False

                    if is_range:
                        # start at lower bound, ramp to upper bound
                        volume = range_start
                    else:
                        volume = volume_level if volume_level is not None else old_volume

                    # Only ramp when a range string was provided. Numeric single values do not trigger interval ramping.
                    ramp_condition = False
                    if is_range:
                        ramp_condition = old_volume is not None and float(range_end) > float(old_volume)

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
                        if ramp_condition:
                            try:
                                if is_range:
                                    hass.async_create_task(
                                        _async_ramp_volume(hass, target, float(range_start), float(range_end), 5.0)
                                    )
                                else:
                                    hass.async_create_task(
                                        _async_ramp_volume(hass, target, float(old_volume), float(volume_level), 5.0)
                                    )
                            except Exception as err:
                                _LOGGER.error("Failed to start ramp task for %s: %s", target, err)

                        # restore old volume after a delay; if we ramp, postpone restore until ramp finishes
                        if old_volume is not None and volume_level is not None:
                            try:
                                if ramp_condition:
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
