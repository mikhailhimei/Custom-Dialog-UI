import React from "react";

import { Accordion } from "../ui/Accordion/Accordion";
import { Condition } from "@/types/scripts";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";

import styles from "./ConditionAccordion.module.scss";

type ConditionErrors = {
  parent_type?: string;
  children_type?: string;
  children_direct_type?: string;
};

interface Props {
  condition: Condition;
  index: number;
  defaultOpen?: boolean;

  onChange: (value: Condition) => void;
  onDelete: () => void;

  totalCount: number;

  errors?: ConditionErrors;
}

export const ConditionAccordion = ({
  condition,
  index,
  defaultOpen,
  onChange,
  onDelete,
  totalCount,
  errors,
}: Props) => {
  const showChildrenType =
    condition.children_type !== undefined;

  const showChildrenDirectType =
    condition.children_direct_type !== undefined;

  const hideChildrenType = () => {
    onChange({
      ...condition,
      children_type: undefined,
    });
  };

  const hideChildrenDirectType = () => {
    onChange({
      ...condition,
      children_direct_type: undefined,
    });
  };

  return (
    <Accordion
      title={`Условие ${index + 1}`}
      defaultOpen={defaultOpen}
    >
      <div className={styles.field}>
        <Input
          label="parent_type"
          value={condition.parent_type ?? ""}
          error={errors?.parent_type}
          onChange={(e) =>
            onChange({
              ...condition,
              parent_type: e.target.value,
            })
          }
        />
      </div>

      <div className={styles.field}>
        {!showChildrenType ? (
          <Button
            type="button"
            style={{ "width": "100%" }}
            onClick={() =>
              onChange({
                ...condition,
                children_type: "",
              })
            }
          >
            🞢 Добавить children_type
          </Button>
        ) : (
          <div
            className={styles.row}
            style={errors?.children_type ? { alignItems: "center" } : {}}
          >            <div className={styles.inputWrapper}>
              <Input
                label="children_type"
                value={condition.children_type ?? ""}
                error={errors?.children_type}
                onChange={(e) =>
                  onChange({
                    ...condition,
                    children_type: e.target.value,
                  })
                }
              />
            </div>

            <Button
              type="button"
              variant="ghost"
              onClick={hideChildrenType}
            >
              ×
            </Button>
          </div>
        )}
      </div>

      <div className={styles.field}>
        {!showChildrenDirectType ? (
          <Button
            type="button"
            style={{ "width": "100%" }}
            onClick={() =>
              onChange({
                ...condition,
                children_direct_type: "",
              })
            }
          >
            🞢 Добавить children_direct_type
          </Button>
        ) : (
          <div
            className={styles.row}
            style={errors?.children_direct_type ? { alignItems: "center" } : {}}
          >
            <div className={styles.inputWrapper}>
              <Input
                label="children_direct_type"
                value={
                  condition.children_direct_type ?? ""
                }
                error={errors?.children_direct_type}
                onChange={(e) =>
                  onChange({
                    ...condition,
                    children_direct_type:
                      e.target.value,
                  })
                }
              />
            </div>

            <Button
              type="button"
              variant="ghost"
              onClick={hideChildrenDirectType}
            >
              ×
            </Button>
          </div>
        )}
      </div>

      {totalCount > 1 && (
        <Button
          type="button"
          variant="ghost"
          className={styles.deleteButton}
          onClick={onDelete}
        >
          🗑 Удалить условие
        </Button>
      )}
    </Accordion>
  );
};