import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { PageHeader } from "../../components/PageHeader";
import { ScenarioTabs } from "../../components/ScenarioTabs";
import { ScenarioAccordion } from "../../components/ScenarioAccordion";
import { useScenarios } from "../hooks/useScenarios";


export default function ScenarioPage() {
  const [tab, setTab] = useState(0);

  const {
    loading,
    scenarios,
    setScenarios,
    save,
  } = useScenarios();

  const [scenarios2, setScenarios2] = useState([{
    id: crypto.randomUUID(),
    name: "Насыпать еды",
    script_entity_id: "script.food_cat",
    conditions: [
      { id: crypto.randomUUID(), parent_type: "sprinkle_food", children_type: "all" },
      { id: crypto.randomUUID(), parent_type: "sprinkle_food", children_direct_type: "count" },
    ],
  }]);

  const updateScenario = (updated: any) =>
    setScenarios((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));

  return (
    <Box p={3}>
      <PageHeader title="Сценарии" subtitle="Настройка сценариев Home Assistant" />
      <ScenarioTabs value={tab} onChange={setTab} />

      <Stack direction="row" spacing={2} mb={3}>
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

        <Button variant="outlined" onClick={() => console.log(scenarios)}>
          Сохранить
        </Button>
      </Stack>

      <Stack spacing={2}>
        {scenarios.map((scenario, index) => (
          <ScenarioAccordion
            key={scenario.id}
            scenario={scenario}
            index={index}
            onDelete={() =>
              setScenarios((prev) => prev.filter((s) => s.id !== scenario.id))
            }
            onChange={updateScenario}
          />
        ))}
      </Stack>
    </Box>
  );
}