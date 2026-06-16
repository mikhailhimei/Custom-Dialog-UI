import voluptuous as vol

from ....const import (
    WS_GET_SETTINGS,
    WS_SAVE_SETTINGS,
)

SAVE_SETTINGS_SCHEMA = {
    vol.Required("type"): WS_SAVE_SETTINGS,
    vol.Required("settings"): {
        vol.Required("result"): {
            vol.Required("base_url"): str,
            vol.Required("client_id"): str,
            vol.Required("authorization"): str,
        },
        vol.Optional("yandex_tts"): {
            vol.Required("api_key", default=""): str,
            vol.Required("folder_id", default=""): str,
            vol.Required("lang", default="ru-RU"): str,
            vol.Required("codec", default="oggopus"): str,
            vol.Required("voice", default="oksana"): str,
            vol.Required("emotion", default="good"): str,
            vol.Required("speed", default=1.1): float,
        },
        vol.Optional("theme", default="dark"): str,
        vol.Optional("isAdmin", default=False): bool,
    },
}


GET_SETTINGS_SCHEMA = {
    vol.Required("type"): WS_GET_SETTINGS,
    vol.Required("settings"): dict
}
