import redis
from redis.asyncio import Redis as AsyncRedis
from ..config import REDIS_HOST, REDIS_PORT, REDIS_PASSWD

def get_redis():
    return redis.StrictRedis(
        host=REDIS_HOST,
        port=REDIS_PORT,
        db=0,
        decode_responses=True,
        password = REDIS_PASSWD
    )


def get_redis_async():
    return AsyncRedis(
        host=REDIS_HOST,
        port=REDIS_PORT,
        db=0,
        decode_responses=True,
        password = REDIS_PASSWD
    )
