"""Conversation agent bridged into Dialog Custom UI options."""

from __future__ import annotations

import logging
import uuid
from typing import Any

import aiohttp

from homeassistant.components.conversation import (
    AbstractConversationAgent,
    ConversationInput,
    ConversationResult,
)
from homeassistant.helpers import intent

_LOGGER = logging.getLogger(__name__)


class DialogCustomUiVoiceAgent(AbstractConversationAgent):
    """Minimal compatible voice agent moved from custom_voice_agent."""

    def __init__(
        self,
        hass,
        ip_address: str,
        user_id: str,
        fallback_application_id: str,
        authorization_token: str = "",
    ) -> None:
        self.hass = hass
        self._ip_address = ip_address
        self._user_id = user_id
        self._fallback_application_id = fallback_application_id
        self._authorization_token = authorization_token

    @property
    def supported_languages(self) -> list[str]:
        return ["ru"]

    async def async_process(self, user_input: ConversationInput) -> ConversationResult:
        session_id = user_input.conversation_id or str(uuid.uuid4())
        application_id = getattr(user_input, "device_id", None) or self._fallback_application_id
        url = self._build_commands_url(self._ip_address)
        headers: dict[str, str] = {}
        if self._authorization_token:
            headers["Authorization"] = self._authorization_token

        data: dict[str, Any] = {}
        try:
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    url,
                    json={
                        "request": {"command": user_input.text},
                        "session": {
                            "user": {"user_id": self._user_id},
                            "application": {"application_id": application_id},
                            "session_id": session_id,
                            "new": user_input.conversation_id is None,
                        },
                        "version": "1.0",
                    },
                    headers=headers,
                    timeout=60,
                ) as resp:
                    data = await resp.json(content_type=None)
        except (aiohttp.ClientError, TimeoutError, ValueError) as err:
            _LOGGER.error("Voice agent request failed: %s", err)

        response_payload = data.get("response", {}) if isinstance(data, dict) else {}
        text = str(response_payload.get("text") or "Нет ответа")
        should_continue = not bool(response_payload.get("end_session", True))

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
