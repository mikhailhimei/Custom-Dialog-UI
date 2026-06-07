import json
from pathlib import Path
from functools import lru_cache

_WORDS_PATH = Path(__file__).resolve().parents[1] / "data" / "text_normalize_words.json"


@lru_cache(maxsize=1)
def load_words():
    with _WORDS_PATH.open(encoding="utf-8") as f:
        return json.load(f)


def get_section(name: str):
    data = load_words()

    if name not in data:
        raise KeyError(f"Unknown section: {name}")

    return data[name]

def get_subsection(section: str, key: str):
    """
    Получить вложенный ключ (2 уровня максимум)
    """
    data = load_words()

    if section not in data:
        raise KeyError(f"Unknown section: {section}")

    sub = data[section]

    if not isinstance(sub, dict):
        raise TypeError(f"Section '{section}' is not a dict")

    if key not in sub:
        raise KeyError(f"Unknown key '{key}' in section '{section}'")

    return sub[key]