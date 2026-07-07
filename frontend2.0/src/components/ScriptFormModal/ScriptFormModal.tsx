import React, { useEffect, useState } from "react";

import {
  Condition,
  ScriptActionDetails,
} from "../../types/scripts";

import { Modal } from "../ui/Modal/Modal";
import { ConditionAccordion } from "../ConditionAccordion/Script/ConditionAccordion";
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
    const updated = [
      ...form.conditions,
    ];

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
            onChange={(e) =>
              updateForm({
                ...form,
                name: e.target.value,
              })
            }
          />


          <Dropdown
            label="скрипты"
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
              (condition, index, total) => (
                <ConditionAccordion
                  key={index}
                  index={index}
                  condition={condition}
                  defaultOpen={!isEdit}
                  onChange={(value) =>
                    updateCondition(
                      index,
                      value
                    )
                  }
                  onDelete={() =>
                    deleteCondition(index)
                  }
                  totalCount = {total.length}
                />
              )
            )}

          </div>



          <Button
            type="button"
            className={styles.addCondition}
            onClick={addCondition}
          >
            + Добавить условие
          </Button>


        </div>



        <div className={styles.footer}>

          <div className={styles.right}>

            <Button
              disabled={loading}
              onClick={() =>
                onSave?.(form)
              }
            >
              Сохранить
            </Button>

          </div>

        </div>


      </div>

    </Modal>
  );
};