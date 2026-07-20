from datetime import datetime

from num2words import num2words

from ..reverse_map import get_subsection
from .inflections import inflect_number_text

_MONTHS_MAP = get_subsection("genitive_day", "months_map")
MONTHS_REV = {v: k for k, v in _MONTHS_MAP.items()}


def year_to_text(year: int) -> str:
    words = num2words(year, lang="ru", to="ordinal")

    words = (
        words.replace("ый", "ого")
        .replace("ой", "ого")
        .replace("ий", "его")
    )

    return f"{words} года"


def day_month_to_text(day: int, month_word: str) -> str:
    month = _MONTHS_MAP[month_word]
    day_text = num2words(day, lang="ru", to="ordinal", gender="neuter")

    return f"{day_text} {MONTHS_REV[month]}"


def date_to_text(day: int, month: int, year: int, current_year: int | None = None) -> str:
    current_year = current_year or datetime.now().year
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
