import React from "react";

import { MusicOption, RemoteSettings, Settings, TimerAlarmSettings, YandexTTS } from "../../types/scripts";
import { Input } from "../ui/Input/Input";
import { ToggleSwitch } from "../ui/ToggleSwitch";

import styles from "./SettingsForm.module.scss";

interface YandexProps {
  data: YandexTTS;
  onChange: (data: YandexTTS) => void;
}

interface RemoteProps {
  data: RemoteSettings;
  onChange: (data: RemoteSettings) => void;
}

interface TimerAlarmProps {
  data: TimerAlarmSettings;
  musicOptions: MusicOption[];
  onChange: (data: TimerAlarmSettings) => void;
}

interface GeneralProps {
  data: Pick<Settings, "active_remout" | "is_admin" | "theme" | "client_id" | "api_commands_enabled" | "api_commands_token">;
  onChange: (data: Pick<Settings, "active_remout" | "is_admin" | "theme" | "client_id" | "api_commands_enabled" | "api_commands_token">) => void;
}

export const SettingsForm = ({ data, onChange }: YandexProps) => {
  const updateField = (key: keyof YandexTTS, value: any) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className={styles.form}>
      <Input label="API Key" value={data.api_key ?? ""} onChange={(e) => updateField("api_key", e.target.value)} />
      <Input label="Folder ID" value={data.folderId ?? ""} onChange={(e) => updateField("folderId", e.target.value)} />
      <Input label="Language" value={data.language ?? ""} placeholder="ru-RU" onChange={(e) => updateField("language", e.target.value)} />
      <Input label="Voice" value={data.voice ?? ""} onChange={(e) => updateField("voice", e.target.value)} />

      <label className={styles.field}>
        <span className={styles.label}>Codec</span>
        <select className={styles.input} value={data.codec ?? ""} onChange={(e) => updateField("codec", e.target.value || undefined)}>
          <option value="">Не выбрано</option>
          <option value="oggopus">oggopus</option>
          <option value="wav">wav</option>
          <option value="lpcm">lpcm</option>
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Emotion</span>
        <select className={styles.input} value={data.emotion ?? ""} onChange={(e) => updateField("emotion", e.target.value || undefined)}>
          <option value="">Не выбрано</option>
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="evil">evil</option>
        </select>
      </label>

      <Input label="Speed" type="number" step="0.1" min="0.1" value={data.speed ?? ""} onChange={(e) => updateField("speed", e.target.value === "" ? undefined : Number(e.target.value))} />
    </div>
  );
};

export const RemoteSettingsForm = ({ data, onChange }: RemoteProps) => {
  const updateField = (key: keyof RemoteSettings, value: string) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className={styles.form}>
      <Input label="Base URL" value={data.base_url ?? ""} placeholder="http://192.168.31.83:9379" onChange={(e) => updateField("base_url", e.target.value)} />
      <Input label="Token" value={data.token ?? ""} placeholder="Bearer ..." onChange={(e) => updateField("token", e.target.value)} />
    </div>
  );
};

export const TimerAlarmSettingsForm = ({ data, musicOptions, onChange }: TimerAlarmProps) => {
  const updateField = (key: keyof TimerAlarmSettings, value: string) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const renderMusicSelect = (
    label: string,
    key: keyof TimerAlarmSettings,
    value = "",
  ) => {
    const hasCurrentOption = musicOptions.some((option) => option.value === value);

    return (
      <label className={styles.field}>
        <span className={styles.label}>{label}</span>
        <select
          className={styles.input}
          value={value}
          onChange={(event) => updateField(key, event.target.value)}
        >
          <option value="">Не выбрано</option>
          {value && !hasCurrentOption && (
            <option value={value}>{value}</option>
          )}
          {musicOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return (
    <div className={styles.form}>
      {renderMusicSelect(
        "Global music timer",
        "global_music_timer",
        data.global_music_timer,
      )}
      {renderMusicSelect(
        "Global music alarm",
        "global_music_alarm",
        data.global_music_alarm,
      )}
      {musicOptions.length === 0 && (
        <span className={styles.help}>Музыка на сервере не найдена.</span>
      )}
    </div>
  );
};

export const GeneralSettingsForm = ({ data, onChange }: GeneralProps) => {
  const updateField = <K extends keyof GeneralProps["data"]>(key: K, value: GeneralProps["data"][K]) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className={styles.form}>
      <Input 
        label="Client ID" 
        value={data.client_id ?? ""} 
        onChange={(e) => updateField("client_id", e.target.value)} 
        placeholder="Уникальный идентификатор клиента"
      />

      <label className={styles.field}>
        <span className={styles.label}>Theme</span>
        <select className={styles.input} value={data.theme ?? "dark"} onChange={(e) => updateField("theme", e.target.value)}>
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
      </label>

      <ToggleSwitch label="Is admin" checked={Boolean(data.is_admin)} onChange={(e) => updateField("is_admin", e.target.checked)} />

      <ToggleSwitch label="Active remout" checked={Boolean(data.active_remout)} onChange={(e) => updateField("active_remout", e.target.checked)} />

      <ToggleSwitch label="Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)" checked={Boolean(data.api_commands_enabled)} onChange={(e) => updateField("api_commands_enabled", e.target.checked)} />

      {data.api_commands_enabled && (
        <Input 
          label="API Commands Token" 
          value={data.api_commands_token ?? ""} 
          onChange={(e) => updateField("api_commands_token", e.target.value)}
          placeholder="Ключ доступа для API endpoints"
          type="password"
        />
      )}
    </div>
  );
};
