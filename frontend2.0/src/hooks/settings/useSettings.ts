import { useCallback, useEffect, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";

import { ApiResponse, RemoteSettings, Settings, TimerAlarmSettings, YandexTTS } from "../../types/scripts";

export function useSettings() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);

  const [settings, setSettings] =
    useState<Settings | null>(null);

  const loadScripts = useCallback(async () => {
    setLoading(true);

    try {
      const response: ApiResponse<any> =
        await api._getShort("get_settings");

      console.log(response)

      setSettings(response?.result ?? response);

    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    loadScripts();
  }, [loadScripts]);


  const saveSettings = async (data: Omit<Partial<Settings>, "remout" | "timer_alarm" | "yandex_tts"> & { remout?: Partial<RemoteSettings>; timer_alarm?: Partial<TimerAlarmSettings>; yandex_tts?: Partial<YandexTTS> }) => {
    await api._save(data, "save_settings")
  }

  return {
    loading,
    settings,

    saveSettings,
    loadScripts,

  };
}