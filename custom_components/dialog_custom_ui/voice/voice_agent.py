import asyncio
import logging
import uuid
from typing import Any

import aiohttp

from homeassistant.components.conversation import (
    AbstractConversationAgent,
    ConversationInput,
    ConversationResult,
    HomeAssistantError
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import intent
from ..src.service import dialog_service
from ..src.service.dialog_runtime import set_current_hass
from ..timer_alarm.timer_alarm_utils import _resolve_media_player_entity_id

from ..utils import _get_options

from ..normalize import _normalize_value
from ..const import (
    CONF_BASE_URL,
    CONF_CLIENT_ID,
    CONF_TIMER_ALARM_TOKEN
)

_LOGGER = logging.getLogger(__name__)

class DialogCustomUiVoiceAgent(AbstractConversationAgent):
    """Minimal compatible voice agent moved from custom_voice_agent."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        fallback_application_id: str,
    ) -> None:
        self._hass = hass
        self._entry = entry
        self._fallback_application_id = fallback_application_id
     
    @property
    def supported_languages(self) -> list[str]:
        return ["ru"]
    
    async def async_process(self, user_input: ConversationInput) -> ConversationResult:
        session_id = user_input.conversation_id or str(uuid.uuid4())
        if self._entry is None:
            raise HomeAssistantError("Dialog Custom UI integration entry not found")

        options = _get_options(self._entry)
        
        client_id = _normalize_value(options.get(CONF_CLIENT_ID))
        
        application_id = getattr(user_input, "device_id", None) or self._fallback_application_id
        
        data: dict[str, Any] = {}
        
        try:
            json={
                        "request": {"command": user_input.text},
                        "session": {
                            "user": {"user_id": client_id},
                            "application": {"application_id": application_id},
                            "session_id": session_id,
                            "new": user_input.conversation_id is None,
                        },
                        "version": "1.0",
                    }
            
            data = await dialog_service.words_scripts(json)
            
        except (aiohttp.ClientError, TimeoutError, ValueError) as err:
            _LOGGER.error("Voice agent request failed: %s", err)

        text = str(data.get("text") or "")
        should_continue = not bool(data.get("end_session", True))

        if not text:
            audio_url = "media-source://media_source/local/notification-all-tasks-completed.mp3"
            if application_id:
                target = _resolve_media_player_entity_id(self._hass, application_id)
                
                if target:
                    old_volume = None
                    state = self._hass.states.get(target)
                    if state is not None:
                        old_volume = state.attributes.get("volume_level")
                    try:
                        await self._hass.services.async_call(
                            "media_player",
                            "volume_set",
                            {
                                "volume_level": 1.0,
                            },
                            target={"entity_id": target},
                            blocking=False,
                        )
                    except Exception as err:
                        _LOGGER.error("Failed to set volume on %s: %s", target, err)
                    try:
                        await self._hass.services.async_call(
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
                            self._hass.async_create_task(
                                self._async_restore_volume(target, old_volume),
                            )
                    except Exception as err:
                        _LOGGER.error("Failed to play media on %s: %s", target, err)
                else:
                    _LOGGER.error("No media_player entity found for application_id: %s", application_id)
            else:
                _LOGGER.error("No application_id provided for fallback playback")

        response = intent.IntentResponse(language=user_input.language)
        response.async_set_speech(text)

        return ConversationResult(
            response=response,
            conversation_id=session_id if should_continue else None,
            continue_conversation=should_continue,
        )

    async def _async_restore_volume(self, target: str, old_volume: Any) -> None:
        try:
            await asyncio.sleep(2)
            await self._hass.services.async_call(
                "media_player",
                "volume_set",
                {"volume_level": float(old_volume)},
                target={"entity_id": target},
                blocking=False,
            )
        except Exception as err:
            _LOGGER.error("Failed to restore volume on %s: %s", target, err)

    @staticmethod
    def _build_commands_url(ip_address: str) -> str:
        base = str(ip_address or "").strip().rstrip("/")
        if not base:
            return ""
        if not base.startswith(("http://", "https://")):
            base = f"http://{base}"
        return f"{base}/api/dialog/commands"
