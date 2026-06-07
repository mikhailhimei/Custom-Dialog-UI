from pymongo import MongoClient
from ..config import MONGODB_DB, MONGODB_URL

_client = None
_db = None


def init_mongo(uri: str | None = None, db_name: str | None = None):
    global _client, _db

    if _client is None:
        _client = MongoClient(uri or MONGODB_URL)
        _db = _client[db_name or MONGODB_DB]

    return _db


def get_db():
    if _db is None:
        return init_mongo()
    return _db
