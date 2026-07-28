from datetime import datetime
import re

from num2words import num2words

from ..reverse_map import get_section, get_subsection
from .inflections import inflect_number_text, num_with_word

_MONTHS_MAP = get_subsection("genitive_day", "months_map")
_MONTH_MARKERS = get_subsection("genitive_day", "month_markers")
MONTHS_REV = {v: k for k, v in _MONTHS_MAP.items()}
MONTH_MARKERS = {**_MONTH_MARKERS, **_MONTHS_MAP}
_TIME_PREFIXES = get_section("time_prefixes")
GENITIVE_TIME_PREFIXES = tuple(_TIME_PREFIXES.get("genitive", ()))
DATIVE_TIME_PREFIXES = tuple(_TIME_PREFIXES.get("dative", ()))
PLAIN_TIME_PREFIXES = tuple(_TIME_PREFIXES.get("plain", ()))
TIME_PREFIXES = tuple(dict.fromkeys((*GENITIVE_TIME_PREFIXES, *DATIVE_TIME_PREFIXES, *PLAIN_TIME_PREFIXES)))


def time_prefix_pattern() -> str:
    return "|".join(re.escape(prefix) for prefix in TIME_PREFIXES)


def year_to_text(year: int) -> str:
    words = num2words(year, lang="ru", to="ordinal")

    words = (
        words.replace("ый", "ого")
        .replace("ой", "ого")
        .replace("ий", "его")
    )

    return f"{words} года"


def day_month_to_text(day: int, month_word: str) -> str:
    month_word = MONTH_MARKERS.get(month_word, month_word)
    month = _MONTHS_MAP[month_word]
    day_text = num2words(day, lang="ru", to="ordinal", gender="neuter")

    return f"{day_text} {MONTHS_REV[month]}"


def date_to_text(day: int, month: int, year: int, current_year: int | None = None) -> str:
    current_year = datetime.now().year if current_year is None else current_year
    result = f"{num2words(day, lang='ru', to='ordinal', gender='neuter')} {MONTHS_REV[month]}"

    if year != current_year:
        result += f" {year_to_text(year)}"

    return result


def day_number_to_text(day: int) -> str:
    return f"{num2words(day, lang='ru', to='ordinal', gender='neuter')} число"


def time_to_text(hour: int, minute: int, second: int = 0, prefix: str = "") -> str:
    prefix = prefix.lower()

    if prefix in GENITIVE_TIME_PREFIXES:
        case = "gent"
        hour_word = "часов"
        minute_word = "минут"
        second_word = "секунд"
    elif prefix in DATIVE_TIME_PREFIXES:
        case = "datv"
        hour_word = "часам"
        minute_word = "минутам"
        second_word = "секундам"
    else:
        case = None
        hour_word = "час"
        minute_word = "минута"
        second_word = "секунда"

    parts = []

    if hour != 0:
        if case:
            hour_text = inflect_number_text(num2words(hour, lang="ru"), case)
            parts.append(f"{hour_text} {hour_word}")
        else:
            parts.append(num_with_word(hour, hour_word))

    if minute != 0:
        if case:
            minute_text = inflect_number_text(num2words(minute, lang="ru"), case)
            parts.append(f"{minute_text} {minute_word}")
        else:
            parts.append(num_with_word(minute, minute_word))

    if second != 0:
        if case:
            second_text = inflect_number_text(num2words(second, lang="ru"), case)
            parts.append(f"{second_text} {second_word}")
        else:
            parts.append(num_with_word(second, second_word))

    if not parts:
        parts.append(num_with_word(0, minute_word))

    return " ".join(parts)


def mark_time(match: re.Match) -> str:
    prefix = match.group("prefix") or ""
    hour = match.group("prefixed_hour") or match.group("hour")
    minute = match.group("prefixed_minute") or match.group("minute")
    seconds = match.group("prefixed_second") or match.group("second") or "00"

    return f"__TIME__{prefix}|{hour}:{minute}:{seconds}__"


def replace_date_match(match: re.Match) -> str:
    if match.group("y1"):
        return date_to_text(
            int(match.group("d1")),
            int(match.group("m1")),
            int(match.group("y1")),
        )

    if match.group("d2"):
        return date_to_text(
            int(match.group("d2")),
            int(match.group("m2")),
            int(match.group("y2")),
        )

    if match.group("d3"):
        return date_to_text(
            int(match.group("d3")),
            int(match.group("m3")),
            0,
            current_year=0,
        )

    return match.group(0)


def restore_time(match: re.Match) -> str:
    prefix = match.group(1) or ""
    hour, minute, second = map(int, match.group(2).split(":"))
    result = time_to_text(hour, minute, second, prefix)

    if prefix:
        return f"{prefix} {result}"

    return result
