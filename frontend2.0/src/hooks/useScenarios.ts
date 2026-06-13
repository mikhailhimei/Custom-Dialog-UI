import React, { useEffect, useState } from "react";
import { useDialogApi } from "../context/DialogContext";

export function useScenarios() {
  const api = useDialogApi();

  const [loading, setLoading] = useState(true);

  const [scenarios, setScenarios] = useState<any[]>(
    []
  );

  useEffect(() => {
    api
      .getScenarios()
      .then(setScenarios)
      .finally(() => setLoading(false));

  

    // api
    //   .getConfig()
    //   .then()
    //   .finally(() => setLoading(false))

    // api
    //   .getLogs()
    //   .then()
    //   .finally(() => setLoading(false))
  }, []);

  const save = async (idForTest: string) => {
    const script_action = {
      uuid: idForTest || "unique_id",
      name: "Название",
      script_entity_id: "script.my_script",
      conditions: [
        {
          parent_type: "some_parent",
          children_type: "some_child",
          children_direct_type: "some_direct",
        },
      ],
      parent_type: "some_parent",
      children_type: "some_child",
      children_direct_type: "some_direct",
    };

    await api.saveScriptAction(script_action);
  };

  const deleteScenario = async (id: string) => {
    console.log("Deleting scenario with id:", id);
    await api.deleteScriptAction(id);
  };

  return {
    loading,
    scenarios,
    setScenarios,
    save,
    deleteScenario
  };
}