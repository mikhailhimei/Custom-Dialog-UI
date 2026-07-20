import re
import pymorphy3
from words2numsrus import NumberExtractor
from datetime import datetime
from num2words import num2words
from .reverse_map import get_section, get_subsection

morph = pymorphy3.MorphAnalyzer()
extractor = NumberExtractor()

_UNITS = get_section("units")
_TEENS = get_section("teens")
_TENS = get_section("tens")
_HUNDREDS = get_section("hundreds")
_THOUSANDS = get_section("thousands")
_LOCATION_STOP_WORDS = get_section("location_stop_words")
_SPECIAL_CHARACTERS = get_section('special_characters')

_MONTHS_MAP = get_subsection("genitive_day",'months_map')

_NUMBER_WORDS = (
    set(_UNITS)
    | set(_TEENS)
    | set(_TENS)
    | set(_HUNDREDS)
    | set(_THOUSANDS)
)


def _normalize_token(token: str) -> str:
    return re.sub(r"^[^\w-]+|[^\w-]+$", "", token.lower(), flags=re.UNICODE)

def _parse_number_words(tokens: list[str], start: int) -> tuple[int, int] | None:
    total = 0
    current = 0
    i = start
    consumed = 0

    while i < len(tokens):
        token = _normalize_token(tokens[i])

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

    text = re.sub(r'(?<!\d)\.|\.(?!\d)', '', text)
    
    for char, replacement in _SPECIAL_CHARACTERS.items():
        text = text.replace(char, f" {replacement}")

    tokens = text.split()
    out: list[str] = []
    i = 0

    while i < len(tokens):
        token = _normalize_token(tokens[i])

        if token.isdigit():
            out.append(token)
            i += 1
            continue

        if token in _NUMBER_WORDS:
            next_token = _normalize_token(tokens[i + 1]) if i + 1 < len(tokens) else ""
            # Для времени вида "семнадцать пятьдесят пять" нужно получить "17 55", а не "72".
            if token in _TEENS and next_token in _TENS:
                out.append(str(_TEENS[token]))
                i += 1
                continue

            parsed = _parse_number_words(tokens, i)
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
        token = _normalize_token(tokens[0])
        if token not in _LOCATION_STOP_WORDS:
            break
        tokens.pop(0)

    while tokens:
        token = _normalize_token(tokens[-1])
        if token not in _LOCATION_STOP_WORDS:
            break
        tokens.pop()

    return " ".join(tokens).strip()

# -------------------------
# ЧИСЛО + СЛОВО
# -------------------------
def _number_noun_form(n: int) -> set[str]:
    n = abs(n)

    if n % 10 == 1 and n % 100 != 11:
        return {'sing', 'nomn'}
    if 2 <= n % 10 <= 4 and not (12 <= n % 100 <= 14):
        return {'sing', 'gent'}
    return {'plur', 'gent'}


def _inflect_number_text(number_text: str, case: str) -> str:
    result = []

    for word in number_text.split():
        parsed = morph.parse(word)[0]
        inflected = parsed.inflect({case})
        result.append(inflected.word if inflected else word)

    return " ".join(result)


def num_with_word(n, word, number_case=None):
    parsed = morph.parse(word)[0]

    gender_map = {
        'masc': 'm',
        'femn': 'f',
        'neut': 'n'
    }

    gender = gender_map.get(parsed.tag.gender, 'm')

    number_text = num2words(n, lang='ru', gender=gender)
    if number_case:
        number_text = _inflect_number_text(number_text, number_case)

    inflected = parsed.inflect(_number_noun_form(n))
    word_form = inflected.word if inflected else word

    return f"{number_text} {word_form}"


# -------------------------
# ГОД (100% стабильный)
# -------------------------
def year_to_text(year):
    words = num2words(year, lang='ru', to='ordinal')

    words = (
        words.replace("ый", "ого")
             .replace("ой", "ого")
             .replace("ий", "его")
    )

    return f"{words} года"

def num_with_word_range(n, word):
    parsed = morph.parse(word)[0]

    gender_map = {
        "masc": "m",
        "femn": "f",
        "neut": "n"
    }

    gender = gender_map.get(parsed.tag.gender, "m")

    # число в родительном
    number_text = _inflect_number_text(
        num2words(n, lang="ru", gender=gender),
        "gent"
    )

    # существительное ВСЕГДА во множественном родительном
    noun = parsed.inflect({"plur", "gent"})
    word_form = noun.word if noun else word

    return f"{number_text} {word_form}"

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
        hour_text = _inflect_number_text(hour_text, case)

    result = f"{hour_text} {hour_word}"

    if minute != 0:
        minute_text = num2words(minute, lang="ru")

        if case:
            minute_text = _inflect_number_text(minute_text, case)

        result += f" {minute_text} {minute_word}"

    return result

def fix_marked_words(text):
    # от X до Y <<слово>>
    text = re.sub(
        r"\bот\s+(-?\d+)\s+до\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda m:
            f"от {_inflect_number_text(num2words(int(m.group(1)), lang='ru'), 'gent')} "
            f"до {num_with_word_range(int(m.group(2)), m.group(3))}",
        text,
        flags=re.IGNORECASE,
    )

    # до X <<слово>>
    text = re.sub(
        r"\bдо\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda m:
            f"до {num_with_word_range(int(m.group(1)), m.group(2))}",
        text,
        flags=re.IGNORECASE,
    )

    # от X <<слово>>
    text = re.sub(
        r"\bот\s+(-?\d+)\s+<<([^<>]+)>>",
        lambda m:
            f"от {num_with_word_range(int(m.group(1)), m.group(2))}",
        text,
        flags=re.IGNORECASE,
    )

    # обычный случай
    text = re.sub(
        r"(-?\d+)\s+<<([^<>]+)>>",
        lambda m: num_with_word(int(m.group(1)), m.group(2)),
        text,
    )

    return text
# -------------------------
# ОСНОВНАЯ ФУНКЦИЯ
# -------------------------
def fix_text(text):

    # =========================
    # 1. ВРЕМЯ HH:MM
    # =========================
    time_blocks = []

    def mark_time(m):
        time_blocks.append(m.span())

        prefix = m.group(1) or ""

        return f"__TIME__{prefix}|{m.group(2)}:{m.group(3)}__"


    text = re.sub(
        r'(?<!\w)(с|в|до|к)\s+(\d{1,2}):(\d{2})\b'
        r'|'
        r'(?<!\w)(\d{1,2}):(\d{2})\b',
        lambda m: (
            f"__TIME__{m.group(1)}|{m.group(2)}:{m.group(3)}__"
            if m.group(1)
            else f"__TIME__|{m.group(4)}:{m.group(5)}__"
        ),
        text,
        flags=re.IGNORECASE
    )

    # =========================
    # 2. НОМЕРА
    # =========================
    text = re.sub(
        r'(?m)^\s*([1-9]\d*)\.(?!\d)',
        lambda m: f"Номер {num2words(int(m.group(1)), lang='ru')}",
        text
    )

    # =========================
    # 3. МИНУТЫ (с защитой от времени)
    # =========================
    def in_time(pos):
        return any(s <= pos < e for s, e in time_blocks)

    def replace_minutes(m):
        if in_time(m.start()):
            return m.group(0)
        return num_with_word(int(m.group(1)), "минута")

    text = re.sub(r'(\d+)\s+минут[аы]?', replace_minutes, text)

    # =========================
    # 4. СЕКУНДЫ
    # =========================
    text = re.sub(
        r'(\d+)\s+секунд[аы]?',
        lambda m: num_with_word(int(m.group(1)), "секунда"),
        text
    )

    # =========================
    # 5. ЧАСЫ
    # =========================
    text = re.sub(
        r'(\d+)\s+час(а|ов)?',
        lambda m: num_with_word(int(m.group(1)), "час"),
        text
    )

    MONTHS_REV = {v: k for k, v in _MONTHS_MAP.items()}

    def replace_day_month(m):
        day = int(m.group(1))
        month_word = m.group(2)

        month = _MONTHS_MAP[month_word]
        day_text = num2words(day, lang='ru', to='ordinal', gender='neuter')

        return f"{day_text} {MONTHS_REV[month]}"

    text = re.sub(
        r'\b(\d{1,2})\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\b',
        replace_day_month,
        text
    )

    # =========================
    # 8. ДАТЫ YYYY-MM-DD / DD.MM.YYYY
    # =========================
    def replace_date(m):

        CURRENT_YEAR = datetime.now().year

        if m.group("y1"):
            year = int(m.group("y1"))

            result = f"{num2words(int(m.group('d1')), lang='ru', to='ordinal', gender='neuter')} " \
                    f"{MONTHS_REV[int(m.group('m1'))]}"

            if year != CURRENT_YEAR:
                result += f" {year_to_text(year)}"

            return result

        if m.group("d2"):
            year = int(m.group("y2"))

            result = f"{num2words(int(m.group('d2')), lang='ru', to='ordinal', gender='neuter')} " \
                    f"{MONTHS_REV[int(m.group('m2'))]}"

            if year != CURRENT_YEAR:
                result += f" {year_to_text(year)}"

            return result

        return m.group(0)

    text = re.sub(
        r'(?P<y1>\d{4})-(?P<m1>\d{1,2})-(?P<d1>\d{1,2})'
        r'|'
        r'(?P<d2>\d{1,2})\.(?P<m2>\d{1,2})\.(?P<y2>\d{4})',
        replace_date,
        text
    )

    # =========================
    # 9. ГОДЫ (если стоят отдельно)
    # =========================
    text = re.sub(
        r'\b(20\d{2})\b',
        lambda m: year_to_text(int(m.group(1))),
        text
    )

    # =========================
    # 10. ВОССТАНОВЛЕНИЕ ВРЕМЕНИ
    # =========================
    def restore_time(m):
        prefix = m.group(1) or ""

        h, mm = map(int, m.group(2).split(":"))

        result = time_to_text(
            h,
            mm,
            prefix
        )

        if prefix:
            return f"{prefix} {result}"

        return result


    text = re.sub(
        r'__TIME__(с|в|до|к)?\|(\d{1,2}:\d{2})__',
        restore_time,
        text,
        flags=re.IGNORECASE
    )

    def replace_day_only(m):
        day = int(m.group(1))
        return f"{num2words(day, lang='ru', to='ordinal', gender='neuter')} число"

    text = re.sub(
        r'\b(\d{1,2})\s+число\b',
        replace_day_only,
        text
    )

    text = fix_marked_words(text)

    # =========================
    # ОСТАВШИЕСЯ ЦЕЛЫЕ ЧИСЛА
    # =========================
    text = re.sub(
        r'(?<![\w:./-])(-?\d+)(?![\w:./-])',
        lambda m: num2words(int(m.group(1)), lang='ru'),
        text,
    )

    return text