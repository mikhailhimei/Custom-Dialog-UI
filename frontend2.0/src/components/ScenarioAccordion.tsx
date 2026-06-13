import React from "react";
import {
  Accordion, AccordionSummary, AccordionDetails, TextField,
  Button, Stack, MenuItem, Typography, IconButton, Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConditionAccordion } from "./ConditionAccordion";

const scripts = ["script.food_cat", "script.water_cat", "script.light_on"];

export function ScenarioAccordion({ scenario, index, onDelete, onChange }: any) {
  const addCondition = () => {
    onChange({
      ...scenario,
      conditions: [...scenario.conditions, { id: crypto.randomUUID(), parent_type: "" }],
    });
  };

  const deleteCondition = (conditionId: string) => {
    onChange({
      ...scenario,
      conditions: scenario.conditions.filter((c: any) => c.id !== conditionId),
    });
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Box>
            <Typography fontWeight={600}>Сценарий {index + 1}</Typography>
            <Typography variant="body2">{scenario.name || "Без названия"}</Typography>
          </Box>

          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </AccordionSummary>

      <AccordionDetails>
        <Stack spacing={2}>
          <TextField
            label="ID"
            value={scenario.id}
            onChange={(e) => onChange({ ...scenario, id: e.target.value })}
          />

          <TextField
            label="Наименование"
            value={scenario.name}
            onChange={(e) => onChange({ ...scenario, name: e.target.value })}
          />

          <TextField
            select
            label="Скрипт Home Assistant"
            value={scenario.script_entity_id}
            onChange={(e) => onChange({ ...scenario, script_entity_id: e.target.value })}
          >
            {scripts.map((s) => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </TextField>

          <Button variant="outlined" onClick={addCondition}>
            Добавить условие
          </Button>

          {scenario.conditions.map((condition: any, idx: number) => (
            <ConditionAccordion
              key={condition.id ?? idx}
              condition={condition}
              index={idx}
              onChange={(updated: any) => {
                onChange({
                  ...scenario,
                  conditions: scenario.conditions.map((c: any) =>
                    c.id === updated.id ? updated : c
                  ),
                });
              }}
              onDelete={() => deleteCondition(condition.id)}
            />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}