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
from ..audio_notification import audio_notification

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
            await audio_notification(self._hass, application_id, "completed.mp3", 1.0)

        response = intent.IntentResponse(language=user_input.language)
        response.async_set_speech(text)

        if text and should_continue:
            self._hass.async_create_task(
                self._async_play_drop_after_speech(application_id, text, should_continue),
            )

        return ConversationResult(
            response=response,
            conversation_id=session_id if should_continue else None,
            continue_conversation=should_continue,
        )

    async def _async_play_drop_after_speech(self, application_id: str, text: str, should_continue) -> None:
        speech_delay = self._estimate_speech_duration(text)
        await asyncio.sleep(speech_delay)
        await audio_notification(self._hass, application_id, "listen.mp3", 1.0, should_continue)

    @staticmethod
    def _estimate_speech_duration(text: str) -> float:
        words_count = len(text.split())
        chars_count = len(text)
        
        estimated_seconds = max(words_count / 2.4, chars_count / 14)
        return min(max(estimated_seconds + 0.5, 1.0), 12.0)

    @staticmethod
    def _build_commands_url(ip_address: str) -> str:
        base = str(ip_address or "").strip().rstrip("/")
        if not base:
            return ""
        if not base.startswith(("http://", "https://")):
            base = f"http://{base}"
        return f"{base}/api/dialog/commands"
