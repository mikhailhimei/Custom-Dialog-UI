import json
import async_timeout
import redis.asyncio as redis
from typing import Any
from .utils import _normalize_value
from .const import DEFAULT_REDIS_URL, DEFAULT_TIMEOUT, CONF_TIMEOUT


class RedisTransport:
    def __init__(self, logger):
        self._logger = logger

    async def subscribe(self, options: dict, handler):
        url = _normalize_value(options.get("redis_url")) or DEFAULT_REDIS_URL
        client_id = _normalize_value(options.get("client_id"))
        password = _normalize_value(options.get("redis_password"))

        if not client_id:
            self._logger("error", "client_id missing")
            return

        channel = f"ACTIVE_COMMAND:{client_id}"
        timeout = max(1, int(options.get(CONF_TIMEOUT, DEFAULT_TIMEOUT)))

        client = redis.Redis.from_url(url, decode_responses=True, password=password or None)
        pubsub = client.pubsub()

        try:
            await pubsub.subscribe(channel)

            while True:
                msg = await pubsub.get_message(ignore_subscribe_messages=True, timeout=1)
                if not msg:
                    continue

                raw = msg.get("data")
                if not raw:
                    continue

                try:
                    payload = json.loads(raw)
                except Exception:
                    continue

                await handler(payload)

        finally:
            await pubsub.close()
            await client.close()