from .init import get_db


def get_collection(name: str):
    return get_db()[name]


COLLECTIONS = {
    "componentDialog": "componentDialog",
    "subComponentDialog": "subComponentDialog",
    "subDirectControl": "subDirectControl",
    "settingsDialog": "settingsDialog",
    "subDirectControlSample": "subDirectControlSample",    
}