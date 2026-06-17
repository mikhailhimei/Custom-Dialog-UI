import { useCallback, useEffect, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";

import {
  ApiResponse,
  ScriptActionDetails,
  ScriptsResponse,
} from "../../types/scripts";

export function useSettings() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);

  const [settings, setSettings] =
    useState<ScriptsResponse | null>(null);

  const loadScripts = useCallback(async () => {
    setLoading(true);

    try {
      const response: ApiResponse<any> =
        await api._getShort("get_settings");

      console.log(response)

      setSettings(response);

      saveSettings()
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    loadScripts();
  }, [loadScripts]);


  const saveSettings = async () => {
    await api._save({"yandex_tts":{"api_key":123}}, "save_settings")
  }

  return {
    loading,
    settings,

    loadScripts,

  };
}