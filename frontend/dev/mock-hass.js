const DEFAULT_CONFIG = {
  base_url: 'http://127.0.0.1:8000',
  client_id: 'local-dev-user',
  timer_alarm_token: '',
  timer_alarm_device_ids: ['media_player.local_speaker'],
  timeout: 10,
  scenarios: [
    {
      id: 'local-scenario-weather',
      name: 'Погода',
      script_entity_id: 'script.example_one',
      conditions: [
        {
          id: 'local-condition-weather-city',
          parent_type: 'weather_metno',
          children_type: 'city_weather',
          children_type_enabled: true,
          children_direct_type: '',
          children_direct_type_enabled: false,
        },
      ],
    },
    {
      id: 'local-scenario-smart-home',
      name: 'Управление домом',
      script_entity_id: 'script.example_two',
      conditions: [
        {
          id: 'local-condition-lights-on',
          parent_type: 'smart_home',
          children_type: 'lights_on',
          children_type_enabled: true,
          children_direct_type: '',
          children_direct_type_enabled: false,
        },
        {
          id: 'local-condition-direct-status',
          parent_type: 'smart_home',
          children_type: '',
          children_type_enabled: false,
          children_direct_type: 'status',
          children_direct_type_enabled: true,
        },
      ],
    },
  ],
};

const CONFIG_KEY = 'dialog-custom-ui-dev-config';
const LOGS_KEY = 'dialog-custom-ui-dev-logs';
const TIMER_ALARM_KEY = 'dialog-custom-ui-dev-timer-alarm';

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const nowIso = () => new Date().toISOString();

export const createMockHass = () => {
  const states = {
    'script.example_one': { entity_id: 'script.example_one', attributes: { friendly_name: 'Пример скрипт 1' } },
    'script.example_two': { entity_id: 'script.example_two', attributes: { friendly_name: 'Пример скрипт 2' } },
    'media_player.local_speaker': { entity_id: 'media_player.local_speaker', attributes: { friendly_name: 'Локальная колонка' } },
    'media_player.voice_room': { entity_id: 'media_player.voice_room', attributes: { friendly_name: 'Voice Room' } },
  };

  return {
    states,
    async callWS(message) {
      const type = String(message?.type ?? '');
      const logs = readJson(LOGS_KEY, []);
      const pushLog = (level, logMessage) => {
        const nextLogs = [
          { level, message: logMessage, ts: nowIso() },
          ...logs,
        ].slice(0, 20);
        writeJson(LOGS_KEY, nextLogs);
      };

      if (type === 'dialog_custom_ui/get_config') {
        return readJson(CONFIG_KEY, DEFAULT_CONFIG);
      }
      if (type === 'dialog_custom_ui/save_config') {
        const next = {
          ...DEFAULT_CONFIG,
          ...message,
          type: undefined,
        };
        delete next.type;
        writeJson(CONFIG_KEY, next);
        pushLog('success', 'Локально сохранен config через callWS.');
        return { ok: true };
      }
      if (type === 'dialog_custom_ui/get_logs') {
        return { logs: readJson(LOGS_KEY, []) };
      }
      if (type === 'dialog_custom_ui/get_timer_alarm_config') {
        return readJson(TIMER_ALARM_KEY, {
          base_url: 'http://127.0.0.1:8000',
          client_id: 'local-dev-user',
          interval: 1,
          items: [],
          active_items: [],
          last_updated: nowIso(),
        });
      }
      if (type === 'dialog_custom_ui/save_timer_alarm_config') {
        const current = readJson(TIMER_ALARM_KEY, {
          base_url: 'http://127.0.0.1:8000',
          client_id: 'local-dev-user',
          interval: 1,
        });
        const next = {
          ...current,
          items: Array.isArray(message?.items) ? message.items : [],
          active_items: Array.isArray(message?.items) ? message.items : [],
          last_updated: nowIso(),
        };
        writeJson(TIMER_ALARM_KEY, next);
        pushLog('success', 'Локально сохранен timer/alarm.');
        return { ok: true };
      }

      pushLog('error', `Неизвестный callWS type: ${type}`);
      throw new Error(`Unknown WS type in local dev: ${type}`);
    },
  };
};
