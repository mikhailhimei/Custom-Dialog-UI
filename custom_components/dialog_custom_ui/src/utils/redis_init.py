import redis
from redis.asyncio import Redis as AsyncRedis
from ..config import REDIS_URL


def get_redis():
    return redis.StrictRedis.from_url(
        REDIS_URL,
        decode_responses=True,
    )


def get_redis_async():
    return AsyncRedis.from_url(
        REDIS_URL,
        decode_responses=True,
    )
