import re

from num2words import num2words
from words2numsrus import NumberExtractor

from ..reverse_map import get_section
from .common import normalize_token
from .inflections import inflect_number_text, inflect_word, num_with_word, num_with_word_range

extractor = NumberExtractor()

_UNITS = get_section("units")
_TEENS = get_section("teens")
_TENS = get_section("tens")
_HUNDREDS = get_section("hundreds")
_THOUSANDS = get_section("thousands")
_LOCATION_STOP_WORDS = get_section("location_stop_words")
_SPECIAL_CHARACTERS = get_section("special_characters")

_NUMBER_WORDS = (
    set(_UNITS)
    | set(_TEENS)
    | set(_TENS)
    | set(_HUNDREDS)
    | set(_THOUSANDS)
)


def parse_number_words(tokens: list[str], start: int) -> tuple[int, int] | None:
    total = 0
    current = 0
    i = start
    consumed = 0

    while i < len(tokens):
        token = normalize_token(tokens[i])

        if token not in _NUMBER_WORDS:
            break

        if token in _THOUSANDS:
            if current == 0:
                current = 1
            total += current * 1000
            current = 0
        elif token in _HUNDREDS:
            current += _HUNDREDS[token]
        elif token in _TENS:
            current += _TENS[token]
        elif token in _TEENS:
            current += _TEENS[token]
        elif token in _UNITS:
            current += _UNITS[token]

        consumed += 1
        i += 1

    if consumed == 0:
        return None

    return total + current, consumed


def normalize_numbers(text: str) -> str:
    if not text:
        return text

    text = re.sub(r"(?<!\d)\.|\.(?!\d)", "", text)

    for char, replacement in _SPECIAL_CHARACTERS.items():
        text = text.replace(char, f" {replacement}")

    tokens = text.split()
    out: list[str] = []
    i = 0

    while i < len(tokens):
        token = normalize_token(tokens[i])

        if token.isdigit():
            out.append(token)
            i += 1
            continue

        if token in _NUMBER_WORDS:
            next_token = normalize_token(tokens[i + 1]) if i + 1 < len(tokens) else ""
            if token in _TEENS and next_token in _TENS:
                out.append(str(_TEENS[token]))
                i += 1
                continue

            parsed = parse_number_words(tokens, i)
            if parsed:
                value, consumed = parsed
                out.append(str(value))
                i += consumed
                continue

        out.append(tokens[i])
        i += 1

    return extractor.replace_groups(" ".join(out))


def sanitize_location_text(value: str) -> str:
    text = " ".join((value or "").strip().split())
    if not text:
        return text

    tokens = text.split(" ")

    while tokens:
        token = normalize_token(tokens[0])
        if token not in _LOCATION_STOP_WORDS:
            break
        tokens.pop(0)

    while tokens:
        token = normalize_token(tokens[-1])
        if token not in _LOCATION_STOP_WORDS:
            break
        tokens.pop()

    return " ".join(tokens).strip()


def _unit_rate_text(word: str) -> str:
    return f"в {inflect_word(word, {'sing', 'accs'})}"


def fix_marked_words(text: str) -> str:
    text = re.sub(
        r"(-?\d+)\s+<<([^<>]+)>>\s+<<([^<>]+)>>",
        lambda m: f"{num_with_word(int(m.group(1)), m.group(2))} {_unit_rate_text(m.group(3))}",
        text,
    )

    text = re.sub(
        r"\bот\s+(-?\d+)\s+до\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda m: (
            f"от {inflect_number_text(num2words(int(m.group(1)), lang='ru'), 'gent')} "
            f"до {num_with_word_range(int(m.group(2)), m.group(3))}"
        ),
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"\bдо\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda m: f"до {num_with_word_range(int(m.group(1)), m.group(2))}",
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"\bот\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda m: f"от {num_with_word_range(int(m.group(1)), m.group(2))}",
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"(-?\d+)\s+<<([^<>]+)>>",
        lambda m: num_with_word(int(m.group(1)), m.group(2)),
        text,
    )

    return text
