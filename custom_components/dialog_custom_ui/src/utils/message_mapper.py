import re


PLACEHOLDER_PATTERN = re.compile(r"\{([^{}]+)\}")


def map_message_template(text_result, values):
    if not isinstance(text_result, dict):
        return text_result

    message = text_result.get("message")
    if not isinstance(message, str) or not message:
        return text_result

    mapping = {}

    if isinstance(values, dict):
        mapping.update(values)
    elif isinstance(values, list):
        for item in values:
            if isinstance(item, dict):
                mapping.update(item)

    def replace_placeholder(match):
        key = match.group(1).strip()
        value = mapping.get(key)
        if value is None:
            return match.group(0)
        return str(value)

    result = dict(text_result)
    result["message"] = PLACEHOLDER_PATTERN.sub(replace_placeholder, message)
    return result
