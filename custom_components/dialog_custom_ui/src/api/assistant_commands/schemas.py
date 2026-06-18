import voluptuous as vol

from ....const import (
    WS_DELETE_ASSISTANT_COMMAND,
    WS_GET_ASSISTANT_COMMAND,
    WS_GET_ASSISTANT_COMMANDS_SHORT,
    WS_SAVE_ASSISTANT_COMMAND,
    WS_SEARCH_ASSISTANT_COMMANDS,
    WS_UPDATE_ASSISTANT_COMMAND,
)

SAVE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_SAVE_ASSISTANT_COMMAND,
    vol.Required("data"): dict,
}

UPDATE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
    vol.Required("data"): dict,
}

GET_ASSISTANT_COMMANDS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_COMMANDS_SHORT,
    vol.Optional("page", default=1): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size", default=10): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}

GET_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
}

DELETE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_DELETE_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
}

SEARCH_ASSISTANT_COMMANDS_SCHEMA = {
    vol.Required("type"): WS_SEARCH_ASSISTANT_COMMANDS,
    vol.Required("query"): str,
}
