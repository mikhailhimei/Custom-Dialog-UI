import React from "react";
import { Typography } from "@mui/material";

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <Typography variant="h4" mb={1}>{title}</Typography>
      <Typography color="text.secondary" mb={3}>{subtitle}</Typography>
    </>
  );
}