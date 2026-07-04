import { useCallback, useEffect, useRef, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";

import { ShortResponse, ShortCommand } from "../../../types"

import {
  ScriptActionDetails,
  ScriptsResponse,
} from "../../types/scripts";

const normalizeShortResponse = (response: any): ShortResponse => ({
  data: Array.isArray(response?.data) ? response.data : [],
  page: response?.page ?? 1,
  page_size: response?.page_size ?? 10,
  total_pages: response?.total_pages ?? 1,
  total_items: response?.total_items ?? 0,
});

export function useApiCommands(activeConfig) {
  const api = useDialogApi();

  const [commands, setCommands] = useState<ShortResponse | null>(null);
    
  const [loading, setLoading] = useState(true);

  const hasLoadedRef = useRef(false);

  const loadCommands = async (activeConfig, page = 1, append = false) => {
    setLoading(true);

    try {
      const response = normalizeShortResponse(await api._getShort(`${activeConfig}`, page));
      setCommands(prev => {
        if (!append || !prev) {
          return response;
        }

        return {
          ...response,
          data: [
            ...prev.data,
            ...response.data,
          ],
        };
      });
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
    if (hasLoadedRef.current) {
      return;
    }

    hasLoadedRef.current = true;
    void loadCommands(activeConfig);
  }, [loadCommands]);

  const enableCommand = async (activeConfig, command: ShortCommand) => {
    const response = await api._update(command.uuid, activeConfig.updateType, { status: true });
    return response
  };

    const saveCommand = async (activeConfig) => {
    let result = []
    if (isEdit && formData.uuid) {
        const { uuid, ...payload } = formData;
        result = await api._update(uuid, activeConfig.updateType, payload);
    } else {
        result = await api._save(formData, activeConfig.saveType);
    }

    return result
  };

  const deleteCommand = async (activeConfig, uuid: string) => {
    const result = await api._delete(uuid, activeConfig.deleteType);
    return result
  };

  const detailCommand = async (activeConfig, uuid: string) => {
    const response: any = await api._getDetail(uuid, activeConfig.detailType);
    return response
  }



  return {
    loading,
    commands,

    loadCommands,
    enableCommand,
    saveCommand,
    deleteCommand,
    detailCommand
  };
}
