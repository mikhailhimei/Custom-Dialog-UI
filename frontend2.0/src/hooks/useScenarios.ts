import { useCallback, useEffect, useState } from "react";

import { useDialogApi } from "../context/DialogContext";

import {
  ApiResponse,
  ScriptActionDetails,
  ScriptsResponse,
} from "../types/scripts";

export function useScenarios() {
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

    console.log("response2", response);

    return response;
  };

  const deleteScenario = async (id: string) => {
    await api.deleteScriptAction(id);

    await loadScripts();
  };

  return {
    loading,
    scripts,

    loadScripts,

    getScriptAction,
    deleteScenario,
  };
}