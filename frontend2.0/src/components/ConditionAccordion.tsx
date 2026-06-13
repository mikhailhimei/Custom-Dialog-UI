import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Button, Stack, TextField, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

export function ConditionAccordion({ condition, index, onChange, onDelete }: any) {
  const [showChildrenType, setShowChildrenType] = useState(!!condition.children_type);
  const [showChildrenDirectType, setShowChildrenDirectType] = useState(!!condition.children_direct_type);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Условие {index + 1}
      </AccordionSummary>

      <AccordionDetails>
        <Stack spacing={2}>
          <TextField
            label="Parent Type"
            value={condition.parent_type}
            onChange={(e) => onChange({ ...condition, parent_type: e.target.value })}
          />

          <Button variant="outlined" onClick={() => setShowChildrenType(true)}>
            Добавить Children Type
          </Button>

          {showChildrenType && (
            <TextField
              label="Children Type"
              value={condition.children_type || ""}
              onChange={(e) => onChange({ ...condition, children_type: e.target.value })}
            />
          )}

          <Button variant="outlined" onClick={() => setShowChildrenDirectType(true)}>
            Добавить Children Direct Type
          </Button>

          {showChildrenDirectType && (
            <TextField
              label="Children Direct Type"
              value={condition.children_direct_type || ""}
              onChange={(e) => onChange({ ...condition, children_direct_type: e.target.value })}
            />
          )}

          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}