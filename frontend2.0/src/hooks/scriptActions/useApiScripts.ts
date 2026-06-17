import { useCallback, useEffect, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";

import {
  ApiResponse,
  ScriptActionDetails,
  ScriptsResponse,
} from "../../types/scripts";

export function useApiScripts() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);

  const [scripts, setScripts] =
    useState<ScriptsResponse | null>(null);

  const loadScripts = useCallback(async () => {
    setLoading(true);

    try {
      const response: ApiResponse<ScriptsResponse> =
        await api._getShort("get_script_actions_short");

      console.log(response)

      setScripts(response.script_actions);
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    loadScripts();
  }, [loadScripts]);

  const getScriptAction = async (
    uuid: string
  ): Promise<ScriptActionDetails> => {
    const response = await api._getDetail(
      uuid,
      "get_script_action"
    );

    return response.script_action;
  };

  const deleteScriptAction = async (uuid: string) => {
    await api._delete(uuid, "delete_script_action");

    await loadScripts();
  };

  const saveScript = async (data: any) => {
    await api._save(data, "save_script_action")
  }

  const updateScript = async (uuid: string, data: any) => {
    await api._update(uuid, "update_script_action", data)
    await loadScripts();
  }

  const scriptData = () =>{
    const result = api.getScripts()
    return result
  }

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