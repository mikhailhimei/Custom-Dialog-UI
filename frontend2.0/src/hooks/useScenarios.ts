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

    api
      .getConfig()
      .then()
      .finally(() => setLoading(false))

    api
      .getLogs()
      .then()
      .finally(() => setLoading(false))
  }, []);

  const save = async () => {
    await api.saveScenarios(scenarios);
  };

  return {
    loading,
    scenarios,
    setScenarios,
    save,
  };
}