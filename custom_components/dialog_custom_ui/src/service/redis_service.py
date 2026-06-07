# redis_reset.py
from ..utils.redis_init import get_redis
from ..config import COMMANDS_KEY

r = get_redis()

def reset_cache():
    """Удаляет кэшированный ответ CMS из Redis."""
    r.delete(f'{COMMANDS_KEY}:c')
    r.delete(f'{COMMANDS_KEY}:sc')
    r.delete(f'{COMMANDS_KEY}:sdc')
    r.delete(f'{COMMANDS_KEY}:settings')
    return "Redis cache cleared."
