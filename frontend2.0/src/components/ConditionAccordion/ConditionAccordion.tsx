import React from "react";

import { Accordion } from "../ui/Accordion/Accordion";
import { Condition } from "@/types/scripts";
import { SearchInput } from "@/components/SearchInput/SearchInput";
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
        <SearchInput
          label="parent_type"
          value={condition.parent_type ?? ""}
          searchSource="search_assistant_commands"
          minQueryLength={3}
          error={errors?.parent_type}
          onChange={(value) =>
            onChange({
              ...condition,
              parent_type: value,
            })
          }
          getSelectedValue={(option) => option.actionType ?? option.uuid}
          onSelect={(option) =>
            onChange({
              ...condition,
              parent_type: option.actionType ?? option.uuid,
            })
          }
        />
      </div>

      <div className={styles.field}>
        {!showChildrenType ? (
          <Button
            type="button"
            style={{ width: "100%" }}
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
          >
            <div className={styles.inputWrapper}>
              <SearchInput
                label="children_type"
                value={condition.children_type ?? ""}
                searchSource="search_assistant_sub_commands"
                minQueryLength={3}
                error={errors?.children_type}
                onChange={(value) =>
                  onChange({
                    ...condition,
                    children_type: value,
                  })
                }
                getSelectedValue={(option) => option.actionType ?? option.uuid}
                onSelect={(option) =>
                  onChange({
                    ...condition,
                    children_type: option.actionType ?? option.uuid,
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
            style={{ width: "100%" }}
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
              <SearchInput
                label="children_direct_type"
                value={condition.children_direct_type ?? ""}
                searchSource="search_assistant_sub_direct_controls"
                minQueryLength={3}
                error={errors?.children_direct_type}
                onChange={(value) =>
                  onChange({
                    ...condition,
                    children_direct_type: value,
                  })
                }
                getSelectedValue={(option) => option.mappingType ?? option.uuid}
                onSelect={(option) =>
                  onChange({
                    ...condition,
                    children_direct_type: option.mappingType ?? option.uuid,
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