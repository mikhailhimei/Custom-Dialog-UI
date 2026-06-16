import { useCallback, useEffect, useState } from "react";

import { useDialogApi } from "../context/DialogContext";

import {
  ApiResponse,
  ScriptActionDetails,
  ScriptsResponse,
} from "../types/scripts";

export function useApiScripts() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);

  const [scripts, setScripts] =
    useState<ScriptsResponse | null>(null);

  const loadScripts = useCallback(async () => {
    setLoading(true);

    try {
      const response: ApiResponse<ScriptsResponse> =
        await api.getScriptsAction();

      setScripts(response);
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
    const response = await api.getDetailedScriptAction(
      uuid
    );

    return response;
  };

  const deleteScriptAction = async (uuid: string) => {
    await api.deleteScriptAction(uuid);

    await loadScripts();
  };

  const saveScript = async (data: any) => {
    await api.saveScriptAction(data)
  }

  const updateScript = async (uuid: string, data: any) => {
    await api.updateScriptAction(uuid, data)
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