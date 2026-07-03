import { useCallback, useEffect, useRef, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";

import {
  ScriptActionDetails,
  ScriptsResponse,
} from "../../types/scripts";

const normalizeScriptsResponse = (response: any): ScriptsResponse => ({
  script_actions: Array.isArray(response?.script_actions)
    ? response.script_actions
    : Array.isArray(response?.data)
      ? response.data
      : [],
  page: response?.page ?? 1,
  page_size: response?.page_size ?? 10,
  total_pages: response?.total_pages ?? 1,
  total_items: response?.total_items ?? 0,
});

export function useApiScripts() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);
  const [scripts, setScripts] =
    useState<ScriptsResponse | null>(null);
  const hasLoadedRef = useRef(false);

  const loadScripts = useCallback(async (page = 1) => {
    setLoading(true);

    try {
      const response = await api._getShort(
        "get_script_actions_short",
        page
      );

      setScripts(normalizeScriptsResponse(response));
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    if (hasLoadedRef.current) {
      return;
    }

    hasLoadedRef.current = true;
    void loadScripts();
  }, [loadScripts]);

  const getScriptAction = async (
    uuid: string
  ): Promise<ScriptActionDetails> => {
    const response = await api._getDetail(
      uuid,
      "get_script_action"
    );

    return response.data;
  };

  const deleteScriptAction = async (uuid: string) => {
    await api._delete(uuid, "delete_script_action");

    await loadScripts(scripts?.page ?? 1);
  };

  const saveScript = async (data: any) => {
    await api._save(data, "save_script_action");
    await loadScripts(scripts?.page ?? 1);
  };

  const updateScript = async (uuid: string, data: any) => {
    await api._update(uuid, "update_script_action", data);
    await loadScripts(scripts?.page ?? 1);
  };

  const scriptData = () => {
    const result = api.getScripts();
    return result;
  };

  return {
    loading,
    scripts,

    loadScripts,

    scriptData,

    saveScript,
    updateScript,

    getScriptAction,
    deleteScriptAction,
  };
}
