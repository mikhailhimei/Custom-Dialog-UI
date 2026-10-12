import asyncio
import logging
from typing import Any
from homeassistant.helpers import device_registry as dr, entity_registry as er

_LOGGER = logging.getLogger(__name__)


def _resolve_media_player_entity_id(hass, device_ref, *, log_warnings=True) -> str:
    """Resolve only the specified device; never fall back to another speaker."""
    device_ref = str(device_ref or "").strip()
    registry = er.async_get(hass)

    def warning(*args):
        if log_warnings:
            _LOGGER.warning(*args)

    def playable(entity_id):
        entry = registry.async_get(entity_id)
        state = hass.states.get(entity_id)
        return (
            (entry is None or not entry.disabled)
            and state is not None
            and state.state not in {"unavailable", "unknown"}
        )

    if device_ref.startswith("media_player."):
        if playable(device_ref):
            return device_ref
        warning("Playback entity %s is missing, disabled or unavailable", device_ref)
        return ""

    # A timer can reference a registry device ID or any entity of that device
    # (for example an assist_satellite). A non-player entity is never a target.
    reference = registry.async_get(device_ref)
    device_id = reference.device_id if reference is not None else device_ref
    device = dr.async_get(hass).async_get(device_id) if device_id else None
    if device is None:
        warning("Playback reference %s does not resolve to a Home Assistant device", device_ref)
        return ""
    players = [entry for entry in er.async_entries_for_device(registry, device.id)
               if entry.entity_id.startswith("media_player.")]
    available = [entry.entity_id for entry in players if playable(entry.entity_id)]
    if len(available) == 1:
        return available[0]
    if len(available) > 1:
        warning("Device %s has multiple available media players: %s; specify a media_player entity_id",
                        device.id, available)
    elif players:
        warning("Device %s has no available media player (entity, disabled, state): %s",
                        device.id, [(entry.entity_id, entry.disabled,
                                     hass.states.get(entry.entity_id).state if hass.states.get(entry.entity_id) else "missing")
                                    for entry in players])
    else:
        warning("Device %s (%s) has no registered media_player entity",
                        device.id, device.name_by_user or device.name or "unnamed")
    return ""


async def _async_restore_volume(hass, target: str, old_volume: Any) -> None:
    try:
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

            state = hass.states.get(target)

            if state is None:
                break

            if state.state in ("idle", "off", "paused"):
                break

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

async def _async_wait_until_finished(
    hass,
    target: str,
    check_interval: float = 0.1,
    start_timeout: float = 5.0,
) -> None:
    """Wait until media player starts and then stops playing."""
    try:
        elapsed = 0.0
        seen_playback = False

        while True:
            await asyncio.sleep(check_interval)
            elapsed += check_interval

            state = hass.states.get(target)

            if state is None:
                break

            if state.state == "playing":
                seen_playback = True
                continue

            if state.state in ("idle", "off", "paused", "unavailable", "unknown") and (
                seen_playback or elapsed >= start_timeout
            ):
                break

    except Exception as err:
        _LOGGER.error("Failed while waiting for playback to finish on %s: %s", target, err)


async def _async_restore_volume_after_playback(hass, target: str, old_volume: Any) -> None:
    """Keep the notification audible until playback finishes."""
    await _async_wait_until_finished(hass, target)
    await _async_restore_volume(hass, target, old_volume)


async def audio_notification(
    hass, device_id, audio_file, volume_level=None, wait_until_finished=False
):
    audio_file = str(audio_file or "").strip()
    if not audio_file:
        _LOGGER.error("No audio file provided for notification playback")
        return
    audio_url = (
        audio_file
        if audio_file.startswith(("media-source://", "https://", "http://"))
        else f"media-source://media_source/local/{audio_file}"
    )
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

            old_volume = (
                state.attributes.get("volume_level")
                if state is not None
                else None
            )

            if not is_range:
                volume = volume_level if volume_level is not None else old_volume

            # set initial volume before playback: for ranges set to lower bound, otherwise set requested value or old
            if volume is not None:
                try:
                    await hass.services.async_call(
                        "media_player",
                        "volume_set",
                        {"volume_level": float(volume)},
                        target={"entity_id": target},
                        blocking=True,
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
                    blocking=True,
                )

                # start ramp in background if needed
                if is_range:
                    try:
                        hass.async_create_task(
                                _async_ramp_volume(hass, target, float(range_start), float(range_end), 10.0)
                            )
                    except Exception as err:
                        _LOGGER.error("Failed to start ramp task for %s: %s", target, err)

                if wait_until_finished:
                    await _async_wait_until_finished(hass, target)

                # Restore the previous volume after notification playback finishes.
                if old_volume is not None and volume_level is not None:
                    try:
                        if wait_until_finished:
                            await _async_restore_volume(hass, target, old_volume)
                        else:
                            hass.async_create_task(
                                _async_restore_volume_after_playback(hass, target, old_volume),
                            )
                    except Exception as err:
                        _LOGGER.error("Failed to schedule restore for %s: %s", target, err)
            except Exception as err:
                _LOGGER.error("Failed to play notification %s on %s (device reference %s): %s", audio_url, target, device_id, err)
        else:
            _LOGGER.error("Cannot play notification for device_id/entity_id: %s (see resolution warning)", device_id)
    else:
        _LOGGER.error("No device_id/entity_id provided for notification playback")
