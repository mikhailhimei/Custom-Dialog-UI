import voluptuous as vol

from ....const import (
    WS_DELETE_ASSISTANT_COMMAND,
    WS_GET_ASSISTANT_COMMAND,
    WS_GET_ASSISTANT_COMMANDS_SHORT,
    WS_SAVE_ASSISTANT_COMMAND,
    WS_UPDATE_ASSISTANT_COMMAND,
)

SAVE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_SAVE_ASSISTANT_COMMAND,
    vol.Required("assistant_command"): {
        vol.Required("uuid"): str,
        vol.Required("name"): str,
        vol.Required("assistant_entity_id"): str,
        vol.Optional("conditions", default=[]): [
            {
                vol.Optional("parent_type", default=""): str,
                vol.Optional("children_type", default=""): str,
                vol.Optional("children_direct_type", default=""): str,
            }
        ],
        vol.Optional("parent_type", default=""): str,
        vol.Optional("children_type", default=""): str,
        vol.Optional("children_direct_type", default=""): str,
    },
}

UPDATE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_UPDATE_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
    vol.Required("assistant_command"): dict,
}

GET_ASSISTANT_COMMANDS_SHORT_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_COMMANDS_SHORT,
    vol.Optional("page"): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("page_size"): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}

GET_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_GET_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
}

DELETE_ASSISTANT_COMMAND_SCHEMA = {
    vol.Required("type"): WS_DELETE_ASSISTANT_COMMAND,
    vol.Required("uuid"): str,
}
