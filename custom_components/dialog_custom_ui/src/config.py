import os
from pathlib import Path
from urllib.parse import quote


def _load_dotenv() -> None:
    env_path = Path.cwd() / ".env"
    if not env_path.exists():
        return

    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip("\"'"))


_load_dotenv()


def _env_int(name: str, default: int) -> int:
    raw_value = os.getenv(name)
    if raw_value in (None, ""):
        return default
    try:
        return int(raw_value)
    except (TypeError, ValueError):
        return default


def _redis_url(host: str, port: int, password: str) -> str:
    if password:
        return f"redis://:{quote(password, safe='')}@{host}:{port}/0"
    return f"redis://{host}:{port}/0"


MONGODB_HOST = os.getenv("MONGODB_HOST", "192.168.31.83")
MONGODB_PORT = _env_int("MONGODB_PORT", 27017)
MONGODB_DB = os.getenv("MONGODB_DB", "dialogs")
MONGODB_URL = os.getenv("MONGODB_URL") or f"mongodb://{MONGODB_HOST}:{MONGODB_PORT}/"

LLM_HOST = os.getenv("LLM_HOST", "192.168.31.83")
LLM_PORT = _env_int("LLM_PORT", 11434)
LLM_BASE_URL = (os.getenv("LLM_BASE_URL") or f"http://{LLM_HOST}:{LLM_PORT}").rstrip("/")

REDIS_HOST = os.getenv("REDIS_HOST", "192.168.31.83")
REDIS_PORT = _env_int("REDIS_PORT", 6980)
REDIS_PASSWD = os.getenv("REDIS_PASSWD", "132143154D")
REDIS_URL = os.getenv("REDIS_URL") or _redis_url(REDIS_HOST, REDIS_PORT, REDIS_PASSWD)

COMMANDS_KEY = "COMMANDS_CMS"
DIALOG_MESSAGE_KEY = "DIALOG_MESSAGE"
CURRENT_NODE_KEY = "CURRENT_NODE"
ERR_BRANCH_KEY = "ERR_BRANCH"
MISS_COUNT_KEY = "MISS_COUNT"

API_TOKEN = os.getenv("YANDEX_SEARCH_API_KEY", "06fb14a8de9d2d5f3ef09c303851034a700ab489d40f93d791f45ffa8104742037c5417daadee800582de9f049dd86df861213ea5d666dba692ca150f5254497bce4168a8e7864c3229a23c7e97072953cedb52e627f9bc7b09d4c456dc8c55bc159946a62ea053cc276d3573e097471734040332399b78ffd34c679d822b99a")
YANDEX_API_KEY = os.getenv("YANDEX_API_KEY", "AQVNyUkOGXXmE6xpSf8HEfw3deYPl_PoyZD23Ix6")
FOLDER_ID = os.getenv("YANDEX_FOLDER_ID", "b1gp059vb0ukreogbt0g")
