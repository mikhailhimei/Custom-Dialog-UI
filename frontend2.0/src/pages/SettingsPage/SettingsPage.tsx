import React, { useEffect, useState } from "react";

import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { Accordion } from "../../components/ui/Accordion/Accordion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader"
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation"
import { Button } from "../../components/ui/Button/Button";
import {
  GeneralSettingsForm,
  RemoteSettingsForm,
  SettingsForm,
  TimerAlarmSettingsForm,
} from "../../components/SettingsForm/SettingsForm";

import styles from "./SettingsPage.module.scss";

import { RemoteSettings, Settings, TimerAlarmSettings, YandexTTS } from "../../types/scripts";
import { useSettings } from "../../hooks/settings/useSettings";

const EMPTY_YANDEX_TTS: YandexTTS = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: undefined,
  language: "",
  codec: undefined,
  emotion: undefined,
};

const EMPTY_REMOUT: RemoteSettings = {
  base_url: "",
  token: "",
};

const EMPTY_TIMER_ALARM: TimerAlarmSettings = {
  global_music_timer: "",
  global_music_alarm: "",
};

const EMPTY_SETTINGS: Settings = {
  yandex_tts: EMPTY_YANDEX_TTS,
  remout: EMPTY_REMOUT,
  timer_alarm: EMPTY_TIMER_ALARM,
  theme: "dark",
  is_admin: false,
  active_remout: false,
  client_id: "",
  api_commands_enabled: false,
  api_commands_token: "",
};

const normalizeTTS = (tts?: Partial<YandexTTS>): YandexTTS => ({
  api_key: tts?.api_key ?? "",
  folderId: tts?.folderId ?? "",
  voice: tts?.voice ?? "",
  speed: tts?.speed ?? undefined,
  language: tts?.language ?? "",
  codec: tts?.codec ?? undefined,
  emotion: tts?.emotion ?? undefined,
});

const normalizeRemout = (remout?: Partial<RemoteSettings>): RemoteSettings => ({
  base_url: remout?.base_url ?? "",
  token: remout?.token ?? "",
});

const normalizeTimerAlarm = (timerAlarm?: Partial<TimerAlarmSettings>): TimerAlarmSettings => ({
  global_music_timer: timerAlarm?.global_music_timer ?? "",
  global_music_alarm: timerAlarm?.global_music_alarm ?? "",
});

const normalizeSettings = (settings?: Partial<Settings> | null): Settings => ({
  yandex_tts: normalizeTTS(settings?.yandex_tts),
  remout: normalizeRemout(settings?.remout),
  timer_alarm: normalizeTimerAlarm(settings?.timer_alarm),
  theme: settings?.theme ?? "dark",
  is_admin: Boolean(settings?.is_admin),
  active_remout: Boolean(settings?.active_remout),
  client_id: settings?.client_id ?? "",
  api_commands_enabled: Boolean(settings?.api_commands_enabled),
  api_commands_token: settings?.api_commands_token ?? "",
});

const getObjectDiff = <T extends Record<string, any>>(current: T, initial: T) => {
  const diff: Partial<T> = {};

  Object.keys(current).forEach((key) => {
    const typedKey = key as keyof T;

    if (current[typedKey] !== initial[typedKey]) {
      diff[typedKey] = current[typedKey];
    }
  });

  return diff;
};

type SettingsSavePayload = Omit<Partial<Settings>, "remout" | "timer_alarm" | "yandex_tts"> & {
  remout?: Partial<RemoteSettings>;
  timer_alarm?: Partial<TimerAlarmSettings>;
  yandex_tts?: Partial<YandexTTS>;
};

const getDiff = (current: Settings, initial: Settings): SettingsSavePayload => {
  const result: SettingsSavePayload = {};
  const yandexDiff = getObjectDiff(current.yandex_tts, initial.yandex_tts);
  const timerAlarmDiff = getObjectDiff(current.timer_alarm, initial.timer_alarm);

  if (Object.keys(yandexDiff).length > 0) result.yandex_tts = yandexDiff;
  if (Object.keys(timerAlarmDiff).length > 0) result.timer_alarm = timerAlarmDiff;

  if (current.theme !== initial.theme) result.theme = current.theme;
  if (current.is_admin !== initial.is_admin) result.is_admin = current.is_admin;
  if (current.active_remout !== initial.active_remout) result.active_remout = current.active_remout;
  if (current.client_id !== initial.client_id) result.client_id = current.client_id;
  if (current.api_commands_enabled !== initial.api_commands_enabled) result.api_commands_enabled = current.api_commands_enabled;
  if (current.api_commands_token !== initial.api_commands_token) result.api_commands_token = current.api_commands_token;

  if (current.active_remout) {
    const remoutDiff = getObjectDiff(current.remout ?? EMPTY_REMOUT, initial.remout ?? EMPTY_REMOUT);

    if (Object.keys(remoutDiff).length > 0) result.remout = remoutDiff;
  }

  return result;
};

export const SettingsPage = () => {
  const isMobile = useIsMobile();
  const [settingsData, setSettingsData] = useState<Settings>(EMPTY_SETTINGS);
  const [initialData, setInitialData] = useState<Settings>(EMPTY_SETTINGS);

  const { settings, saveSettings } = useSettings();

  useEffect(() => {
    if (!settings) return;

    const normalized = normalizeSettings(settings);

    setSettingsData(normalized);
    setInitialData(normalized);
  }, [settings]);

  const handleSave = () => {
    const payload = getDiff(settingsData, initialData);

    saveSettings(payload);
  };

  return (
    <>
      <MobileHeader />

      <NavigationTabs />

      <div className={styles.page}>

        <h1>Настройки</h1>

        <Accordion title="Общие" defaultOpen>
          <GeneralSettingsForm
            data={{
              active_remout: settingsData.active_remout,
              is_admin: settingsData.is_admin,
              theme: settingsData.theme,
              client_id: settingsData.client_id,
              api_commands_enabled: settingsData.api_commands_enabled,
              api_commands_token: settingsData.api_commands_token,
            }}
            onChange={(generalData) => setSettingsData({ ...settingsData, ...generalData })}
          />
        </Accordion>

        <Accordion title="Яндекс TTS">
          <SettingsForm
            data={settingsData.yandex_tts}
            onChange={(yandex_tts) => setSettingsData({ ...settingsData, yandex_tts })}
          />
        </Accordion>

        {settingsData.active_remout && (
          <Accordion title="Remote">
            <RemoteSettingsForm
              data={settingsData.remout ?? EMPTY_REMOUT}
              onChange={(remout) => setSettingsData({ ...settingsData, remout })}
            />
          </Accordion>
        )}

        <Accordion title="Timer / Alarm">
          <TimerAlarmSettingsForm
            data={settingsData.timer_alarm}
            onChange={(timer_alarm) => setSettingsData({ ...settingsData, timer_alarm })}
          />
        </Accordion>

        <Button onClick={handleSave}>Сохранить</Button>
      </div>

      <MobileNavigation />
    </>
  );
};
