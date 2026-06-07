
import re
import pymorphy3
from words2numsrus import NumberExtractor
from datetime import datetime
from num2words import num2words
from utils.reverse_map import get_section, get_subsection

morph = pymorphy3.MorphAnalyzer()
extractor = NumberExtractor()

_UNITS = get_section("units")
_TEENS = get_section("teens")
_TENS = get_section("tens")
_HUNDREDS = get_section("hundreds")
_THOUSANDS = get_section("thousands")
_LOCATION_STOP_WORDS = get_section("location_stop_words")
_MEASUREMENT = get_section("measurement_units")
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
def num_with_word(n, word):
    parsed = morph.parse(word)[0]

    gender_map = {
        'masc': 'm',
        'femn': 'f',
        'neut': 'n'
    }

    gender = gender_map.get(parsed.tag.gender, 'm')

    number_text = num2words(n, lang='ru', gender=gender)

    if n % 10 == 1 and n % 100 != 11:
        form = {'sing', 'nomn'}
    elif 2 <= n % 10 <= 4 and not (12 <= n % 100 <= 14):
        form = {'sing', 'gent'}
    else:
        form = {'plur', 'gent'}

    inflected = parsed.inflect(form)
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

def number_to_ru_phrase(n):
        words = num2words(n, lang='ru')

        # разбиваем число на слова
        parts = words.split()

        inflected_parts = []

        for p in parts:
            parsed = morph.parse(p)[0]

            # если это числительное — склоняем
            if 'NUMR' in parsed.tag:
                inflected = parsed.inflect({'gent'})  # родительный (универсально для таких конструкций)
                inflected_parts.append(inflected.word if inflected else p)
            else:
                inflected_parts.append(p)

        return " ".join(inflected_parts)

# =========================
# ЧИСЛО → ТЕКСТ
# =========================
def number_to_text(n):
    return num2words(n, lang='ru')


# =========================
# СКЛОНЕНИЕ ЧИСЛИТЕЛЬНОГО
# =========================
def inflect_number_ru(text, case):
    words = text.split()
    result = []

    for w in words:
        parsed = morph.parse(w)[0]
        inf = parsed.inflect({case})
        result.append(inf.word if inf else w)

    return " ".join(result)


# =========================
# НОРМАЛИЗАЦИЯ ЕДИНИЦ
# =========================
def normalize_unit(u):
    u = u.lower().strip().strip(".")
    return _MEASUREMENT.get(u, u)


# =========================
# ЕДИНИЦА В НУЖНОМ ПАДЕЖЕ
# =========================
def get_unit(unit, case):
    parsed = morph.parse(unit)[0]

    if case == "loct":
        return parsed.inflect({"plur", "loct"}).word
    else:
        return parsed.inflect({"plur", "gent"}).word


# -------------------------
# ОСНОВНАЯ ФУНКЦИЯ
# -------------------------
def fix_text(text):

    # =========================
    # 1. ВРЕМЯ HH:MM (защита от конфликтов)
    # =========================
    time_blocks = []

    def mark_time(m):
        time_blocks.append(m.span())
        return f"__TIME__{m.group(1)}:{m.group(2)}__"

    text = re.sub(r'\b(\d{1,2}):(\d{2})\b', mark_time, text)

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

    # =========================
    # 6. ГРАДУСЫ
    # =========================
    text = re.sub(
        r'(\d+)\s+градус[ао]?\s+Цельсия',
        lambda m: num_with_word(int(m.group(1)), "градус") + " Цельсия",
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
        h, mm = m.group(1).split(":")
        return f"{num_with_word(int(h), 'час')} {num_with_word(int(mm), 'минута')}"

    text = re.sub(r'__TIME__(\d{1,2}:\d{2})__', restore_time, text)


    def replace_day_only(m):
        day = int(m.group(1))
        return f"{num2words(day, lang='ru', to='ordinal', gender='neuter')} число"

    text = re.sub(
        r'\b(\d{1,2})\s+число\b',
        replace_day_only,
        text
    )

    # =========================
    # СКОРОСТЬ: м/с (5 метр секунд)
    # =========================
    def replace_speed(m):
        n = int(m.group(1))
        return num_with_word(n, "метр") + " в секунду"

    text = re.sub(
        r'(\d+)\s+метр\s+секунд[аы]?',
        replace_speed,
        text
    )

    # =========================
    # БЕЗ ПРЕДЛОГА
    # =========================
    def replace_distance_plain(m):
        n = int(m.group(1))
        unit = normalize_unit(m.group(2))

        if unit not in ["километр", "метр"]:
            return m.group(0)

        number = number_to_text(n)
        noun = get_unit(unit, "gent")

        return f"{number} {noun}"


    # =========================
    # С ПРЕДЛОГОМ
    # =========================
    def replace_distance_with_preposition(m):
        prep = m.group(1)
        n = int(m.group(2))
        unit = normalize_unit(m.group(3))

        if unit not in ["километр", "метр"]:
            return m.group(0)

        number = number_to_text(n)
        number = inflect_number_ru(number, "loct")

        noun = get_unit(unit, "loct")

        return f"{prep} {number} {noun}"


    # =========================
    # 1. С ПРЕДЛОГОМ
    # =========================
    text = re.sub(
        r'\b(в|от|до)\s+(\d+)\s+(км|километр[аов]?|м|метр[аов]?)\b',
        replace_distance_with_preposition,
        text
    )

    # =========================
    # 2. БЕЗ ПРЕДЛОГА
    # =========================
    text = re.sub(
        r'\b(\d+)\s+(км|километр[аов]?|м|метр[аов]?)\b',
        replace_distance_plain,
        text
    )

    return text