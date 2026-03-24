"""Constants for Dialog Custom UI."""

DOMAIN = "dialog_custom_ui"
PANEL_URL_PATH = "dialog-custom-ui"
PANEL_TITLE = "Диалог"
PANEL_ICON = "mdi:message-cog"
PANEL_COMPONENT_NAME = "dialog-custom-ui-panel"
PANEL_MODULE_PATH = "/dialog_custom_ui_static/dialog-custom-ui-panel.js"
UPDATE_INTERVAL_SECONDS = 1
MAX_LOG_ENTRIES = 10

DEFAULT_BASE_URL = "http://127.0.0.1:8000"
DEFAULT_TIMEOUT = 10

CONF_BASE_URL = "base_url"
CONF_CLIENT_ID = "client_id"
CONF_TIMEOUT = "timeout"
CONF_SCENARIOS = "scenarios"

ATTR_SCENARIO_ID = "id"
ATTR_SCENARIO_NAME = "name"
ATTR_CHILDREN_TYPE = "children_type"
ATTR_PARENT_TYPE = "parent_type"
ATTR_SCRIPT_ENTITY_ID = "script_entity_id"

WS_GET_CONFIG = "dialog_custom_ui/get_config"
WS_SAVE_CONFIG = "dialog_custom_ui/save_config"
WS_GET_LOGS = "dialog_custom_ui/get_logs"
