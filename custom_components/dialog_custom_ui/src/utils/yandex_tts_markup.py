"""Helpers for Yandex Dialog TTS sound markup."""

from __future__ import annotations

import html
import re

_SOUND_TAG_RE = re.compile(r"<([^<>]+)>")
_AUDIO_EXTENSIONS = (".mp3", ".ogg", ".opus", ".wav", ".m4a")


def _is_speaker_tag(value: str) -> bool:
    return value.strip().lower().startswith("speaker ")


def _is_audio_reference(value: str) -> bool:
    normalized = value.strip().strip('"\'')
    lowered = normalized.lower()
    return (
        lowered.startswith("alice-")
        or lowered.startswith("dialogs-upload/")
        or lowered.endswith(_AUDIO_EXTENSIONS)
    )


def _audio_tag(value: str) -> str:
    normalized = value.strip().strip('"\'')
    return f'<speaker audio="{html.escape(normalized, quote=True)}">'


def build_yandex_tts_text(response_text: str) -> str:
    """Convert shorthand sound tags to Yandex Dialog ``<speaker audio>`` tags.

    Scenario authors commonly write local sound cues as ``<ding.mp3>``. Alice
    does not treat that shorthand as an audio tag and may pronounce the file
    name. Yandex Dialogs expect ``<speaker audio="...">`` in the ``tts`` field,
    so audio-looking shorthand tags are converted while existing ``speaker``
    tags are preserved.
    """
    if not isinstance(response_text, str) or not response_text:
        return ""

    def replace(match: re.Match[str]) -> str:
        value = match.group(1).strip()
        if not value:
            return ""
        if _is_speaker_tag(value):
            return match.group(0)
        if _is_audio_reference(value):
            return _audio_tag(value)
        return value

    return _SOUND_TAG_RE.sub(replace, response_text)


def build_yandex_display_text(response_text: str) -> str:
    """Remove Yandex TTS-only sound tags from the user-visible text field."""
    if not isinstance(response_text, str) or not response_text:
        return ""

    def replace(match: re.Match[str]) -> str:
        value = match.group(1).strip()
        if not value:
            return ""
        if _is_speaker_tag(value) or _is_audio_reference(value):
            return ""
        return value

    return " ".join(_SOUND_TAG_RE.sub(replace, response_text).split())
