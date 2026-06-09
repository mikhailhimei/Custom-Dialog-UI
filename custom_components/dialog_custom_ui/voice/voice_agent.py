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
        base_url = _normalize_value(options.get(CONF_BASE_URL))
        client_id = _normalize_value(options.get(CONF_CLIENT_ID))
        authorization_token = _normalize_value(options.get(CONF_TIMER_ALARM_TOKEN))

        
        application_id = getattr(user_input, "device_id", None) or self._fallback_application_id
        url = self._build_commands_url(base_url)
        headers: dict[str, str] = {}
        if authorization_token:
            headers["Authorization"] = authorization_token

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
            _LOGGER.error(data)
            # async with aiohttp.ClientSession() as session:
                # async with session.post(
                #     url,
                #     json={
                #         "request": {"command": user_input.text},
                #         "session": {
                #             "user": {"user_id": clinet_id},
                #             "application": {"application_id": application_id},
                #             "session_id": session_id,
                #             "new": user_input.conversation_id is None,
                #         },
                #         "version": "1.0",
                #     },
                #     headers=headers,
                #     timeout=60,
                # ) as resp:
                #     data = await resp.json(content_type=None)
        except (aiohttp.ClientError, TimeoutError, ValueError) as err:
            _LOGGER.error("Voice agent request failed: %s", err)

        text = str(data.get("text") or "")
        should_continue = not bool(data.get("end_session", True))

        if not text:
            device = application_id
            audio_url = "media-source://media_source/local/notification-all-tasks-completed.mp3"
            if device:
                target = _resolve_media_player_entity_id(self._hass, device)
                _LOGGER.info(
                    "Voice fallback playback: device=%s target=%s audio=%s",
                    device,
                    target,
                    audio_url,
                )
                if target:
                    try:
                        await self._hass.services.async_call(
                            "media_player",
                            "turn_on",
                            target={"entity_id": target},
                            blocking=False,
                        )
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
                    except Exception as err:
                        _LOGGER.error("Failed to play media on %s: %s", target, err)
                else:
                    _LOGGER.error("No media_player entity found for device_id: %s", device)
            else:
                _LOGGER.error("No device_id provided for fallback playback")

            response = intent.IntentResponse(language=user_input.language)
            response.async_set_speech("")
        else:
            response = intent.IntentResponse(language=user_input.language)
            response.async_set_speech(text)

        return ConversationResult(
            response=response,
            conversation_id=session_id if should_continue else None,
            continue_conversation=should_continue,
        )

    @staticmethod
    def _build_commands_url(ip_address: str) -> str:
        base = str(ip_address or "").strip().rstrip("/")
        if not base:
            return ""
        if not base.startswith(("http://", "https://")):
            base = f"http://{base}"
        return f"{base}/api/dialog/commands"
