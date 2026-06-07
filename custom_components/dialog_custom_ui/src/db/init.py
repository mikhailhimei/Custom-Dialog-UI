from pymongo import MongoClient
from ..config import MONGODB_HOST, MONGODB_PORT

_client = None
_db = None


def init_mongo(uri: str = f"mongodb://{MONGODB_HOST}:{MONGODB_PORT}/", db_name: str = "dialogs"):
    global _client, _db

    if _client is None:
        _client = MongoClient(uri)
        _db = _client[db_name]

    return _db


def get_db():
    if _db is None:
        raise Exception("MongoDB is not initialized. Call init_mongo() first.")
    return _db