import requests
import time
import base64
from ..config import YANDEX_API_KEY, FOLDER_ID, LLM_BASE_URL
import xml.etree.ElementTree as ET
import html
import re


def is_feature_enabled(value, default=False):
    if value is None:
        return default
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return value != 0
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"1", "true", "yes", "on", "enabled"}:
            return True
        if normalized in {"0", "false", "no", "off", "disabled", ""}:
            return False
    return bool(value)


def clean_text(text: str) -> str:
    if not text:
        return ""

    # HTML entities (&quot; и т.д.)
    text = html.unescape(text)

    # убираем <hlword> и другие теги
    # text = re.sub(r"<.*?>", "", text)

    # убираем лишние пробелы
    text = re.sub(r"\s+", " ", text).strip()

    return text


def extract_context(xml_string: str, max_docs: int = 5, max_chars: int = 3000) -> str:
    try:
        root = ET.fromstring(xml_string)
    except ET.ParseError:
        return ""

    results = []

    groups = root.findall(".//group")

    for group in groups[:max_docs]:
        doc = group.find(".//doc")
        if doc is None:
            continue

        parts = []

        title = doc.findtext("title")
        headline = doc.findtext("headline")

        passages = doc.findall(".//passage")

        if title:
            parts.append(f"Заголовок: {clean_text(title)}")

        if headline:
            parts.append(f"Описание: {clean_text(headline)}")

        for p in passages:
            if p.text:
                parts.append(f"Фрагмент: {clean_text(p.text)}")

        if parts:
            results.append("\n".join(parts))

    context = "\n\n".join(results)

    # ограничение длины (очень важно для Ollama)
    return context[:max_chars]

def generate_ai_response(prompt, system, model="llama3"):
    json = {
        "model": model,
        "system": system,
        "prompt": prompt,
        "stream": False
    }
    
    response = requests.post(
        f"{LLM_BASE_URL}/api/generate",
        json=json
    )

    response = response.json()
    return response["response"]


# =========================
# 🔎 Yandex Search
# =========================
def start_search(query):
    url = "https://searchapi.api.cloud.yandex.net/v2/web/searchAsync"

    headers = {
        "Authorization": f"Api-Key {YANDEX_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "query": {
            "searchType": "SEARCH_TYPE_RU",
            "queryText": query,
            "familyMode": "FAMILY_MODE_MODERATE",
            "page": 0,
            "fixTypoMode": "FIX_TYPO_MODE_ON"
        },
        "folderId": FOLDER_ID,
        "responseFormat": "FORMAT_XML"
    }

    res = requests.post(url, headers=headers, json=payload)
    return res.json().get("id")


def wait_result(op_id):
    url = f"https://operation.api.cloud.yandex.net/operations/{op_id}"

    headers = {
        "Authorization": f"Api-Key {YANDEX_API_KEY}"
    }

    while True:
        res = requests.get(url, headers=headers)

        if res.status_code != 200:
            time.sleep(2)
            continue

        try:
            data = res.json()
        except:
            time.sleep(2)
            continue

        if data.get("done"):
            raw = data["response"]["rawData"]
            xml = base64.b64decode(raw).decode("utf-8")
            return xml

        time.sleep(2)

# =========================
# 🚀 MAIN FUNCTION
# =========================
def get_search_llm(prompt, system, model="deepseek-chat", llm_enabled=True):
    print("🔎 searching...")

    op_id = start_search(prompt)
    if not op_id:
        return "Search failed"

    xml = wait_result(op_id)
    context = extract_context(xml)

    print("🧠 thinking (DeepSeek)...")

    print(f"Ответ из инета: {context} вопрос: {prompt} система: {system}")

    prompt = f"""Контекст:{context}
    Вопрос: {prompt}"""

    if not is_feature_enabled(llm_enabled, default=True):
        return context

    answer = generate_ai_response(prompt, system, model)

    return answer
