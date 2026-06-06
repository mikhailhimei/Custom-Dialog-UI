import React from "react";
import { Tabs, Tab } from "@mui/material";

export function ScenarioTabs({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <Tabs value={value} onChange={(_, v) => onChange(v)} sx={{ mb: 3 }}>
      <Tab label="Сценарии" />
      <Tab label="История" />
      <Tab label="Настройки" />
    </Tabs>
  );
}