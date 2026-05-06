export const DEFAULT_CONFIG = {
  base_url: 'http://127.0.0.1:8000',
  allow_non_admin_panel: true,
  client_id: '',
  command_receive_mode: 'http',
  redis_url: 'redis://127.0.0.1:6379/0',
  redis_channel: 'dialog_commands',
  redis_username: '',
  redis_password: '',
  timer_alarm_token: '',
  yandex_tts_api_key: '',
  yandex_tts_folder_id: '',
  yandex_tts_lang: 'ru-RU',
  yandex_tts_codec: 'oggopus',
  yandex_tts_voice: 'oksana',
  yandex_tts_emotion: 'good',
  yandex_tts_speed: 1.1,
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
