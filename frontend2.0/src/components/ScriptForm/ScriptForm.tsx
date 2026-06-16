import React, { useState } from 'react';

import {
  Condition,
  ScriptActionDetails,
} from '../../types/scripts';

import { ConditionAccordion } from '../ConditionAccordion/ConditionAccordion';

import { Dropdown } from '../Dropdown/Dropdown'

import { Input } from '../ui/Input/Input';

import { Button } from '../ui/Button/Button';

import styles from "./ScriptForm.module.scss";

interface Props {
  initialData?: ScriptActionDetails;
  
  isOptionData: any;

  isEdit?: boolean;

  onChange?: (
    data: ScriptActionDetails
  ) => void;
}

export const ScriptForm = ({
  initialData,
  isOptionData,
  isEdit,

  onChange,
}: Props) => {
  const [form, setForm] =
    useState<ScriptActionDetails>({
      uuid: initialData?.uuid || '',

      name: initialData?.name || '',

      script_entity_id:
        initialData?.script_entity_id || '',

      conditions:
        initialData?.conditions || [
          {
            parent_type: '',
          },
        ],
    });

  const updateForm = (
    data: ScriptActionDetails
  ) => {
    setForm(data);

    onChange?.(data);
  };

  const addCondition = () => {
    updateForm({
      ...form,

      conditions: [
        ...form.conditions,

        {
          parent_type: '',
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

  return (
    <div className={styles.form}>
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
        options={isOptionData.map((item: any) => ({
          label: item.name,
          value: item.entity_id,
        }))}

        value={form.script_entity_id}

        onSelect={(value) =>
          updateForm({
            ...form,
            script_entity_id: value,
          })
        }
      />

      {form.conditions.map(
        (condition, index) => (
          <ConditionAccordion
            key={index}

            index={index}

            condition={condition}

            defaultOpen={!isEdit}

            onChange={(value) =>
              updateCondition(index, value)
            }
          />
        )
      )}

      <Button
        type="button"
        className={styles.addCondition}
        onClick={addCondition}
      >
        + Добавить условие
      </Button>

    </div>
  );
};