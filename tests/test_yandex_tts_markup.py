import importlib.util
from pathlib import Path

MODULE_PATH = (
    Path(__file__).resolve().parents[1]
    / "custom_components"
    / "dialog_custom_ui"
    / "src"
    / "utils"
    / "yandex_tts_markup.py"
)
spec = importlib.util.spec_from_file_location("yandex_tts_markup", MODULE_PATH)
yandex_tts_markup = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(yandex_tts_markup)

build_yandex_display_text = yandex_tts_markup.build_yandex_display_text
build_yandex_tts_text = yandex_tts_markup.build_yandex_tts_text


def test_audio_shorthand_is_converted_for_tts_and_removed_from_display_text():
    text = "Привет <ksjsbwuil-apple-pay-success-sound-effect-481188.mp3> как дела?"

    assert build_yandex_tts_text(text) == (
        'Привет <speaker audio="ksjsbwuil-apple-pay-success-sound-effect-481188.mp3"> как дела?'
    )
    assert build_yandex_display_text(text) == "Привет как дела?"


def test_existing_speaker_audio_tag_is_preserved_only_for_tts():
    text = 'Готово <speaker audio="alice-sounds-game-win-1.opus"> получилось'

    assert build_yandex_tts_text(text) == text
    assert build_yandex_display_text(text) == "Готово получилось"


def test_non_audio_angle_text_is_not_lost():
    text = "Привет <name>"

    assert build_yandex_tts_text(text) == "Привет name"
    assert build_yandex_display_text(text) == "Привет name"
