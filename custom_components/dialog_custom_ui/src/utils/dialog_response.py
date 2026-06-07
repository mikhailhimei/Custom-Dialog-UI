from utils.message_mapper import map_message_template


def find_dialog_setting(settings, setting_type):
    for item in settings or []:
        if item.get("actionType") != setting_type:
            continue
        return dict(item)
    return None


def build_dialog_response(
    settings,
    setting_type,
    variables=None,
    fallback_message=""
):
    normalized_variables = variables or {}

    text_result = find_dialog_setting(settings, setting_type)

    if not text_result:
        if fallback_message:
            return {"message": fallback_message}
        return {}

    text_result = map_message_template(text_result, normalized_variables)

    if "message" not in text_result or not text_result["message"]:
        if fallback_message:
            text_result["message"] = fallback_message
        else:
            text_result.pop("message", None)

    text_result['data'] = normalized_variables

    return text_result
