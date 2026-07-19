export interface ScriptAction {
  uuid: string;
  title: string;
}

export interface ScriptsResponse {
  script_actions: ScriptAction[];
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
}

export interface Condition {
  parent_type: string;
  children_type?: string;
  children_direct_type?: string;
}

export interface ScriptActionDetails {
  uuid: string;
  name: string;
  script_entity_id: string;
  conditions: Condition[];
}

export interface Settings {
  yandex_tts: YandexTTS;
  remout?: RemoteSettings;
  timer_alarm: TimerAlarmSettings;
  theme: string;
  is_admin: boolean;
  active_remout: boolean;
  client_id?: string;
  api_commands_enabled: boolean;
  api_commands_token?: string;
}

export interface RemoteSettings {
  base_url?: string;
  client_id?: string;
  token?: string;
}

export interface TimerAlarmSettings {
  global_music_timer?: string;
  global_music_alarm?: string;
}

export interface MusicOption {
  value: string;
  label: string;
}

export interface YandexTTS {
  api_key?: string;
  folderId?: string;
  voice?: string;
  speed?: number;
  language?: string;
  codec?: "oggopus" | "wav" | "lpcm";
  emotion?: "good" | "neutral" | "evil"
}

export interface ApiResponse<T> {
  id: number;

  type: string;

  success: boolean;

  result: T;
}