import pymorphy3
from num2words import num2words

morph = pymorphy3.MorphAnalyzer()


def number_noun_form(n: int) -> set[str]:
    n = abs(n)

    if n % 10 == 1 and n % 100 != 11:
        return {"sing", "nomn"}
    if 2 <= n % 10 <= 4 and not (12 <= n % 100 <= 14):
        return {"sing", "gent"}
    return {"plur", "gent"}


def inflect_number_text(number_text: str, case: str) -> str:
    result = []

    for word in number_text.split():
        parsed = morph.parse(word)[0]
        inflected = parsed.inflect({case})
        result.append(inflected.word if inflected else word)

    return " ".join(result)


def num_with_word(n: int, word: str, number_case: str | None = None) -> str:
    parsed = morph.parse(word)[0]

    gender_map = {
        "masc": "m",
        "femn": "f",
        "neut": "n",
    }

    gender = gender_map.get(parsed.tag.gender, "m")

    number_text = num2words(n, lang="ru", gender=gender)
    if number_case:
        number_text = inflect_number_text(number_text, number_case)

    inflected = parsed.inflect(number_noun_form(n))
    word_form = inflected.word if inflected else word

    return f"{number_text} {word_form}"


def num_with_word_range(n: int, word: str) -> str:
    parsed = morph.parse(word)[0]

    gender_map = {
        "masc": "m",
        "femn": "f",
        "neut": "n",
    }

    gender = gender_map.get(parsed.tag.gender, "m")

    number_text = inflect_number_text(
        num2words(n, lang="ru", gender=gender),
        "gent",
    )

    noun = parsed.inflect({"plur", "gent"})
    word_form = noun.word if noun else word

    return f"{number_text} {word_form}"
