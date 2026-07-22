import re

from num2words import num2words

from .dates import (
    day_month_to_text,
    day_number_to_text,
    mark_time,
    replace_date_match,
    restore_time,
    year_to_text,
)
from .inflections import num_with_word
from .numbers import fix_marked_words


def fix_text(text: str) -> str:
    text = re.sub(
        r"(?<!\w)(с|в|до|к)\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\b"
        r"|"
        r"(?<!\w)(\d{1,2}):(\d{2})(?::(\d{2}))?\b",
        mark_time,
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"(?:(?<=^)|(?<=\s))([1-9]\d*)\.(?!\d)",
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
        replace_date_match,
        text,
    )

    text = re.sub(
        r"\b(20\d{2})\b",
        lambda m: year_to_text(int(m.group(1))),
        text,
    )

    text = re.sub(
        r"__TIME__(с|в|до|к)?\|(\d{1,2}:\d{2}:\d{2})__",
        restore_time,
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
