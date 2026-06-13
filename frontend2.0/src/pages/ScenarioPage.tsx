import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { PageHeader } from "../components/PageHeader";
import { ScenarioTabs } from "../components/ScenarioTabs";
import { ScenarioAccordion } from "../components/ScenarioAccordion";
import { useScenarios } from "../hooks/useScenarios";


export default function ScenarioPage() {
  const [tab, setTab] = useState(0);

  const {
    loading,
    scenarios,
    setScenarios,
    save,
    deleteScenario
  } = useScenarios();

  console.log("scenarios", scenarios);

  const [saving, setSaving] = useState(false);

  const [idForTest, setIdForTest] = useState("unique_id");

  const updateScenario = (updated: any) =>
    setScenarios((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));

  return (
    <Box p={3}>
      <PageHeader title="Сценарии" subtitle="Настройка сценариев Home Assistant" />
      <ScenarioTabs value={tab} onChange={setTab} />

      <Stack direction="row" spacing={2} mb={3} alignItems="center">
        <TextField
          label="ID для теста"
          value={idForTest}
          onChange={(e) => setIdForTest(e.target.value)}
          size="small"
        />

        <Button
          variant="contained"
          onClick={() =>
            setScenarios((prev) => [
              ...prev,
              { id: crypto.randomUUID(), name: "", script_entity_id: "", conditions: [] },
            ])
          }
        >
          Добавить сценарий
        </Button>

        <Button
          variant="outlined"
          onClick={async () => {
            setSaving(true);
            try {
              await save(idForTest);
            } finally {
              setSaving(false);
            }
          }}
          disabled={saving}
        >
          {saving ? "Сохранение..." : "Сохранить"}
        </Button>

        <Button
          color="error"
          variant="outlined"
          onClick={() => deleteScenario(idForTest)}
        >
          Удалить все
        </Button>
      </Stack>

      <Stack spacing={2}>
        {scenarios ? scenarios.map((scenario, index) => (
          <ScenarioAccordion
            key={scenario.id}
            scenario={scenario}
            index={index}
            onDelete={() =>
              deleteScenario(scenario.id)
            }
            onChange={updateScenario}
          />
        )) : "Нет сценариев"}
      </Stack>
    </Box>
  );
}