import React, { useEffect, useState } from "react";

import {
  Condition,
  ScriptActionDetails,
} from "../../types/scripts";

import { Modal } from "../ui/Modal/Modal";
import { ConditionAccordion } from "../ConditionAccordion/ConditionAccordion";
import { Dropdown } from "../ui/Dropdown/Dropdown";

import { Input } from "../ui/Input/Input";
import { Button } from "../ui/Button/Button";

import styles from "./ScriptFormModal.module.scss";

interface Props {
  open: boolean;

  initialData?: ScriptActionDetails;

  isOptionData: any[];

  isEdit?: boolean;

  loading?: boolean;

  onSave?: (
    data: ScriptActionDetails
  ) => void | Promise<void>;

  onCancel?: () => void;
}

type ConditionErrors = {
  parent_type?: string;
  children_type?: string;
  children_direct_type?: string;
};

type FormErrors = {
  name?: string;
  script_entity_id?: string;
  conditions: ConditionErrors[];
};

export const ScriptFormModal = ({
  open,
  initialData,
  isOptionData,

  isEdit = false,
  loading = false,

  onSave,
  onCancel,
}: Props) => {
  const [form, setForm] =
    useState<ScriptActionDetails>({
      uuid: "",
      name: "",
      script_entity_id: "",
      conditions: [
        {
          parent_type: "",
        },
      ],
    });

  const [errors, setErrors] =
    useState<FormErrors>({
      conditions: [],
    });

  useEffect(() => {
    setForm({
      uuid: initialData?.uuid || "",
      name: initialData?.name || "",
      script_entity_id:
        initialData?.script_entity_id || "",
      conditions:
        initialData?.conditions || [
          {
            parent_type: "",
          },
        ],
    });

    setErrors({
      conditions: [],
    });
  }, [initialData, open]);

  const updateForm = (
    data: ScriptActionDetails
  ) => {
    setForm(data);
  };

  const addCondition = () => {
    updateForm({
      ...form,
      conditions: [
        ...form.conditions,
        {
          parent_type: "",
        },
      ],
    });
  };

  const updateCondition = (
    index: number,
    value: Condition
  ) => {
    const updated = [...form.conditions];

    updated[index] = value;

    updateForm({
      ...form,
      conditions: updated,
    });
  };

  const deleteCondition = (
    index: number
  ) => {
    const updated =
      form.conditions.filter(
        (_, i) => i !== index
      );

    updateForm({
      ...form,
      conditions:
        updated.length > 0
          ? updated
          : [
              {
                parent_type: "",
              },
            ],
    });
  };

  const validate = () => {
    const nextErrors: FormErrors = {
      conditions: [],
    };

    if (!form.name.trim()) {
      nextErrors.name =
        "Обязательное поле";
    }

    if (!form.script_entity_id) {
      nextErrors.script_entity_id =
        "Обязательное поле";
    }

    form.conditions.forEach(
      (condition, index) => {
        const conditionErrors: ConditionErrors =
          {};

        if (
          !condition.parent_type.trim()
        ) {
          conditionErrors.parent_type =
            "Обязательное поле";
        }

        if (
          condition.children_type !==
            undefined &&
          !condition.children_type.trim()
        ) {
          conditionErrors.children_type =
            "Обязательное поле";
        }

        if (
          condition.children_direct_type !==
            undefined &&
          !condition.children_direct_type.trim()
        ) {
          conditionErrors.children_direct_type =
            "Обязательное поле";
        }

        nextErrors.conditions[index] =
          conditionErrors;
      }
    );

    setErrors(nextErrors);

    return (
      !nextErrors.name &&
      !nextErrors.script_entity_id &&
      nextErrors.conditions.every(
        (item) =>
          Object.keys(item).length === 0
      )
    );
  };

  return (
    <Modal
      open={open}
      onClose={onCancel}
      title={
        isEdit
          ? "Редактировать сценарий"
          : "Создать сценарий"
      }
    >
      <div className={styles.form}>
        <div className={styles.section}>
          <Input
            label="Название"
            value={form.name}
            error={errors.name}
            onChange={(e) =>
              updateForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <Dropdown
            label="Скрипт"
            error={errors.script_entity_id}
            options={isOptionData.map(
              (item) => ({
                label: item.name,
                value: item.entity_id,
              })
            )}
            value={form.script_entity_id}
            onSelect={(value) =>
              updateForm({
                ...form,
                script_entity_id: value,
              })
            }
          />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Условия
          </h3>

          <div className={styles.conditions}>
            {form.conditions.map(
              (
                condition,
                index,
                total
              ) => (
                <ConditionAccordion
                  key={index}
                  index={index}
                  condition={condition}
                  defaultOpen={!isEdit}
                  errors={
                    errors.conditions[index]
                  }
                  onChange={(value) =>
                    updateCondition(
                      index,
                      value
                    )
                  }
                  onDelete={() =>
                    deleteCondition(index)
                  }
                  totalCount={total.length}
                />
              )
            )}
          </div>

          <Button
            type="button"
            className={
              styles.addCondition
            }
            onClick={addCondition}
          >
            + Добавить условие
          </Button>
        </div>

        <div className={styles.footer}>
          <div className={styles.right}>
            <Button
              disabled={loading}
              onClick={() => {
                if (!validate()) {
                  return;
                }

                onSave?.(form);
              }}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};