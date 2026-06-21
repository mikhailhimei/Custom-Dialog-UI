import { useCallback, useEffect, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";
import {
  AssistantCommandDetails,
  AssistantCommandsResponse,
} from "../../types/assistantCommands";

export function useAssistantCommands() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);
  const [commands, setCommands] =
    useState<AssistantCommandsResponse | null>(null);

  const loadCommands = useCallback(async () => {
    setLoading(true);

    try {
      const response: any = await api._getShort(
        "get_assistant_commands_short"
      );

      setCommands(response);
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    loadCommands();
  }, [loadCommands]);

  const getCommand = async (
    uuid: string
  ): Promise<AssistantCommandDetails> => {
    const response: any = await api._getDetail(
      uuid,
      "get_assistant_command"
    );

    return response.data;
  };

  const saveCommand = async (
    data: AssistantCommandDetails
  ) => {
    await api._save(data, "save_assistant_command");
    await loadCommands();
  };

  const updateCommand = async (
    uuid: string,
    data: AssistantCommandDetails | Partial<AssistantCommandDetails>
  ) => {
    await api._update(
      uuid,
      "update_assistant_command",
      data
    );
    await loadCommands();
  };

  const deleteCommand = async (uuid: string) => {
    await api._delete(uuid, "delete_assistant_command");
    await loadCommands();
  };

  const enableCommand = async (uuid: string) => {
    await updateCommand(uuid, { status: true });
  };

  return {
    loading,
    commands,
    loadCommands,
    getCommand,
    saveCommand,
    updateCommand,
    deleteCommand,
    enableCommand,
  };
}
