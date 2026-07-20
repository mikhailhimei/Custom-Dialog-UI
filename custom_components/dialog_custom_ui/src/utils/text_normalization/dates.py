from datetime import datetime
import re

from num2words import num2words

from ..reverse_map import get_subsection
from .inflections import inflect_number_text

_MONTHS_MAP = get_subsection("genitive_day", "months_map")
_MONTH_MARKERS = get_subsection("genitive_day", "month_markers")
MONTHS_REV = {v: k for k, v in _MONTHS_MAP.items()}
MONTH_MARKERS = {**_MONTH_MARKERS, **_MONTHS_MAP}


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


def time_to_text(hour: int, minute: int, prefix: str = "") -> str:
    prefix = prefix.lower()

    if prefix in ("с", "до"):
        case = "gent"
        hour_word = "часов"
        minute_word = "минут"
    elif prefix == "к":
        case = "datv"
        hour_word = "часам"
        minute_word = "минутам"
    else:
        case = None
        hour_word = "часов"
        minute_word = "минут"

    hour_text = num2words(hour, lang="ru")

    if case:
        hour_text = inflect_number_text(hour_text, case)

    result = f"{hour_text} {hour_word}"

    if minute != 0:
        minute_text = num2words(minute, lang="ru")

        if case:
            minute_text = inflect_number_text(minute_text, case)

        result += f" {minute_text} {minute_word}"

    return result


def mark_time(match: re.Match) -> str:
    if match.group(1):
        return f"__TIME__{match.group(1)}|{match.group(2)}:{match.group(3)}__"

    return f"__TIME__|{match.group(4)}:{match.group(5)}__"


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
    hour, minute = map(int, match.group(2).split(":"))
    result = time_to_text(hour, minute, prefix)

    if prefix:
        return f"{prefix} {result}"

    return result
