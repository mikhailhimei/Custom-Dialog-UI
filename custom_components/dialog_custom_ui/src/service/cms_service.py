from ..db.mongo import get_collection
from bson import ObjectId
from fastapi.encoders import jsonable_encoder


# ---------------------------
# COLLECTION MAP
# ---------------------------
COLLECTION_MAP = {
    "commands": "componentDialog",
    "sub-commands": "subComponentDialog",
    "sub-direct-controls": "subDirectControl",
    "sub-direct-controls-sample": "subDirectControlSample",
    "settings-dialog": "settingsDialog"
}


def get_collection_name(api_name: str) -> str:
    if api_name not in COLLECTION_MAP:
        raise Exception(f"Invalid collection: {api_name}")
    return COLLECTION_MAP[api_name]


# ---------------------------
# SERIALIZE (FIX ObjectId)
# ---------------------------
def serialize(doc):
    return jsonable_encoder(doc, custom_encoder={ObjectId: str})


# ---------------------------
# NORMALIZE
# ---------------------------
def normalize(data: dict):
    if "subComponentDialog" in data:
        sub = data["subComponentDialog"]
    elif "componentDialog" in data:
        sub = data["componentDialog"]
    else:
        sub = {}

    # cleanup meta fields
    for k in ["documentId", "createdAt", "updatedAt", "publishedAt"]:
        data.pop(k, None)

    return data


# ---------------------------
# CREATE (BULK)
# ---------------------------
def create(collection_name: str, data: list):
    collection_name = get_collection_name(collection_name)
    col = get_collection(collection_name)

    data = [normalize(item) for item in data]

    result = col.insert_many(data)

    inserted = list(col.find({"_id": {"$in": result.inserted_ids}}))

    return {
        "data": [serialize(i) for i in inserted]
    }


# ---------------------------
# GET LIST
# ---------------------------
def get_list(collection_name: str, page: int, page_size: int, x_user: str = None):
    collection_name = get_collection_name(collection_name)
    col = get_collection(collection_name)

    if page < 1:
        page = 1

    skip = (page - 1) * page_size

    query = {}
    if x_user and x_user.strip():
        query["account"] = x_user.strip()

    items = list(col.find(query).skip(skip).limit(page_size))
    total = col.count_documents(query)
    page_count = (total + page_size - 1) // page_size

    return {
        "data": serialize(items),
        "meta": {
            "pagination": {
                "page": page,
                "pageSize": page_size,
                "pageCount": page_count,
                "totalPages": page_count,
                "total": total
            }
        }
    }


# ---------------------------
# SEARCH
# ---------------------------
def search(collection_names: list, type_names: list = None, text: str = '', uuid = '', x_user: str = None):
    if not collection_names:
        return []

    query = {}
    if type_names:
        query["actionType"] = {"$in": type_names} if len(type_names) > 1 else type_names[0]

    if text:
        # Search in text fields and uuid
        text_query = {
            "$or": [
                {"title": {"$regex": text, "$options": "i"}},
                {"uuid": {"$regex": text, "$options": "i"}},
                {"uuidDialog": {"$regex": text, "$options": "i"}},
                {"uuid": {"$regex": text, "$options": "i"}}
            ]
        }
        if query:
            query = {"$and": [query, text_query]}
        else:
            query = text_query

    if x_user and x_user.strip():
        account_query = {"account": x_user.strip()}
        if query:
            query = {"$and": [query, account_query]}
        else:
            query = account_query

    result = []
    for api_collection_name in collection_names:
        db_collection_name = get_collection_name(api_collection_name)
        col = get_collection(db_collection_name)
        items = list(col.find(query, {"title": 1, "uuid": 1, "uuidDialog": 1, "uuid": 1, "_id": 1, "directControl.mappingType": 1}))
        for item in items:
            item["type_db_collection"] = db_collection_name
            # Use uuidDialog or uuid as uuid if they exist
            if "uuid" in item and item["uuid"]:
                item["uuid"] = item.pop("uuid")
            elif "uuid" in item and item["uuid"]:
                item["uuid"] = item.pop("uuid")
            
            mapping_type = item.get("directControl", {}).get("mappingType")
            if mapping_type:
                item["mappingType"] = mapping_type
                
            result.append(serialize(item))

    return result


# ---------------------------
# GET ONE
# ---------------------------
def get_one(collection_name: str, _id: str, x_user: str = None):
    collection_name = get_collection_name(collection_name)
    col = get_collection(collection_name)

    query = {"_id": _id}
    if x_user and x_user.strip():
        query["account"] = x_user.strip()

    item = col.find_one(query)

    if not item:
        return None

    return serialize(item)


def get_one_by_uuid(collection_name: str, uuid: str):
    collection_name = get_collection_name(collection_name)
    col = get_collection(collection_name)

    item = col.find_one({"uuid": uuid})

    if not item:
        return None

    return serialize(item)


# ---------------------------
# UPDATE
# ---------------------------
def update(collection_name: str, _id: str, data: dict):
    collection_name = get_collection_name(collection_name)
    col = get_collection(collection_name)

    data = normalize(data)

    result = col.update_one(
        {"_id": ObjectId(_id)},
        {"$set": data}
    )

    return {
        "matched": result.matched_count,
        "modified": result.modified_count
    }


# ---------------------------
# DELETE
# ---------------------------
def delete(collection_name: str, _id: str):
    collection_name = get_collection_name(collection_name)
    col = get_collection(collection_name)

    result = col.delete_one({"_id": ObjectId(_id)})

    return {
        "deleted": result.deleted_count
    }
