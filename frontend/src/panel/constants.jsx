export const DEFAULT_CONFIG = {
  base_url: 'http://127.0.0.1:8000',
  client_id: '',
  timer_alarm_token: '',
  timer_alarm_device_ids: [''],
  theme: 'light',
  timeout: 10,
  scenarios: [],
};

export const EXAMPLE_PAYLOAD = `{
  "children_type": "some_subcommand",
  "children_direct_type": [
    {
      "mapping_type": "some_direct_subcommand",
      "value": {
        "some_direct_subcommand": "example"
      }
    }
  ],
  "parent_type": "weather_metno",
  "value": {"commands": "москва"},
  "client_id": "...",
  "device_id": "..."
}`;

export const LOG_POLL_INTERVAL_MS = 2000;
const MODULE_VERSION = new URL(import.meta.url).searchParams.get('v') || '';
const IS_LOCAL_DEV = ['localhost', '127.0.0.1'].includes(globalThis.location?.hostname ?? '');

export const TIMER_ALARM_MODULE_URL = MODULE_VERSION
  ? (IS_LOCAL_DEV
      ? `/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(MODULE_VERSION)}`
      : `/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(MODULE_VERSION)}`)
  : (IS_LOCAL_DEV ? '/src/dialog-custom-ui-timer-alarm.jsx' : '/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js');
