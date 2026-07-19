import { useCallback, useEffect, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";

import { ApiResponse, MusicOption, RemoteSettings, Settings, TimerAlarmSettings, YandexTTS } from "../../types/scripts";

export function useSettings() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);

  const [settings, setSettings] =
    useState<Settings | null>(null);
  const [musicOptions, setMusicOptions] = useState<MusicOption[]>([]);

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
    // Run once on mount. `api` is provided by DialogProvider and is stable
    // for the lifetime of the mounted app, so avoid re-running when `api`
    // identity changes to prevent polling loops.
    loadScripts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const loadMusicOptions = useCallback(async () => {
    const options = await api.getLocalMusicOptions();

    setMusicOptions(options);
  }, [api]);

  useEffect(() => {
    void loadMusicOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveSettings = async (data: Omit<Partial<Settings>, "remout" | "timer_alarm" | "yandex_tts"> & { remout?: Partial<RemoteSettings>; timer_alarm?: Partial<TimerAlarmSettings>; yandex_tts?: Partial<YandexTTS> }) => {
    await api._save(data, "save_settings")
  }

  return {
    loading,
    settings,
    musicOptions,

    saveSettings,
    loadScripts,

  };
}