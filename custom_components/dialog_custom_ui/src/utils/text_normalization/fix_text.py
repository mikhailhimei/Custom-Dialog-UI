import re

from num2words import num2words

from .dates import date_to_text, day_month_to_text, day_number_to_text, time_to_text, year_to_text
from .inflections import num_with_word
from .numbers import fix_marked_words


def _mark_time(match: re.Match) -> str:
    if match.group(1):
        return f"__TIME__{match.group(1)}|{match.group(2)}:{match.group(3)}__"

    return f"__TIME__|{match.group(4)}:{match.group(5)}__"


def _replace_date(match: re.Match) -> str:
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


def _restore_time(match: re.Match) -> str:
    prefix = match.group(1) or ""
    hour, minute = map(int, match.group(2).split(":"))
    result = time_to_text(hour, minute, prefix)

    if prefix:
        return f"{prefix} {result}"

    return result


def fix_text(text: str) -> str:
    text = re.sub(
        r"(?<!\w)(с|в|до|к)\s+(\d{1,2}):(\d{2})\b"
        r"|"
        r"(?<!\w)(\d{1,2}):(\d{2})\b",
        _mark_time,
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"(?m)^\s*([1-9]\d*)\.(?!\d)",
        lambda m: f"Номер {num2words(int(m.group(1)), lang='ru')}",
        text,
    )

    text = re.sub(
        r"(\d+)\s+минут[аы]?",
        lambda m: num_with_word(int(m.group(1)), "минута"),
        text,
    )

    text = re.sub(
        r"(\d+)\s+секунд[аы]?",
        lambda m: num_with_word(int(m.group(1)), "секунда"),
        text,
    )

    text = re.sub(
        r"(\d+)\s+час(а|ов)?",
        lambda m: num_with_word(int(m.group(1)), "час"),
        text,
    )

    text = re.sub(
        r"\b(\d{1,2})\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\b",
        lambda m: day_month_to_text(int(m.group(1)), m.group(2)),
        text,
    )

    text = re.sub(
        r"(?P<y1>\d{4})-(?P<m1>\d{1,2})-(?P<d1>\d{1,2})"
        r"|"
        r"(?P<d2>\d{1,2})\.(?P<m2>\d{1,2})\.(?P<y2>\d{4})"
        r"|"
        r"(?P<d3>\d{1,2})\.(?P<m3>\d{1,2})(?!\.\d)",
        _replace_date,
        text,
    )

    text = re.sub(
        r"\b(20\d{2})\b",
        lambda m: year_to_text(int(m.group(1))),
        text,
    )

    text = re.sub(
        r"__TIME__(с|в|до|к)?\|(\d{1,2}:\d{2})__",
        _restore_time,
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"\b(\d{1,2})\s+число\b",
        lambda m: day_number_to_text(int(m.group(1))),
        text,
    )

    text = fix_marked_words(text)

    text = re.sub(
        r"(?<![\w:./-])(-?\d+)(?![\w:./-])",
        lambda m: num2words(int(m.group(1)), lang="ru"),
        text,
    )

    return text
