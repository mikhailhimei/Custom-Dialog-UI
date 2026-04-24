"""Constants for Dialog Custom UI."""

DOMAIN = "dialog_custom_ui"
PANEL_URL_PATH = "dialog-custom-ui"
PANEL_TITLE = "Диалог"
PANEL_ICON = "mdi:message-cog"
PANEL_COMPONENT_NAME = "dialog-custom-ui-panel"
PANEL_MODULE_BASENAME = "dialog-custom-ui-panel.js"
PANEL_MODULE_PATH = f"/dialog_custom_ui_static/{PANEL_MODULE_BASENAME}"
UPDATE_INTERVAL_SECONDS = 1
MAX_LOG_ENTRIES = 10

DEFAULT_BASE_URL = "http://127.0.0.1:8000"
DEFAULT_TIMEOUT = 10
DEFAULT_THEME = "light"
DEFAULT_TIMER_ALARM_BASE_URL = "http://127.0.0.1:8000"
DEFAULT_TIMER_ALARM_CLIENT_ID = ""
DEFAULT_TIMER_ALARM_INTERVAL_SECONDS = 1

CONF_BASE_URL = "base_url"
CONF_CLIENT_ID = "client_id"
CONF_TIMEOUT = "timeout"
CONF_SCENARIOS = "scenarios"
CONF_THEME = "theme"
CONF_TIMER_ALARM_BASE_URL = "timer_alarm_base_url"
CONF_TIMER_ALARM_CLIENT_ID = "timer_alarm_client_id"
CONF_TIMER_ALARM_TOKEN = "timer_alarm_token"
CONF_TIMER_ALARM_INTERVAL_SECONDS = "timer_alarm_interval_seconds"
CONF_TIMER_ALARM_ITEMS = "timer_alarm_items"
CONF_TIMER_ALARM_DEVICE_IDS = "timer_alarm_device_ids"
CONF_TIMER_ALARM_PRESETS = "timer_alarm_presets"
CONF_VOICE_AGENT_IP = "voice_agent_ip"
CONF_VOICE_AGENT_USER_ID = "voice_agent_user_id"

ATTR_SCENARIO_ID = "id"
ATTR_SCENARIO_NAME = "name"
ATTR_CHILDREN_TYPE = "children_type"
ATTR_CHILDREN_DIRECT_TYPE = "children_direct_type"
ATTR_PARENT_TYPE = "parent_type"
ATTR_SCRIPT_ENTITY_ID = "script_entity_id"

WS_GET_CONFIG = "dialog_custom_ui/get_config"
WS_SAVE_CONFIG = "dialog_custom_ui/save_config"
WS_GET_LOGS = "dialog_custom_ui/get_logs"
WS_GET_TIMER_ALARM_CONFIG = "dialog_custom_ui/get_timer_alarm_config"
WS_SAVE_TIMER_ALARM_CONFIG = "dialog_custom_ui/save_timer_alarm_config"
