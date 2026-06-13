import React, { useState } from 'react';
import {
  Condition,
  ScriptActionDetails,
} from '../../types/scripts';
import { ConditionAccordion } from './ConditionAccordion';

import styles from "./ScriptForm.module.scss";

interface Props {
  initialData?: ScriptActionDetails;
  isEdit?: boolean;
  onDelete?: () => void;
  onSave?: (data: ScriptActionDetails) => void;
}

export const ScriptForm = ({
  initialData,
  isEdit,
  onDelete,
  onSave,
}: Props) => {
  const [form, setForm] = useState<ScriptActionDetails>({
    uuid: initialData?.uuid || '',
    name: initialData?.name || '',
    script_entity_id: initialData?.script_entity_id || '',
    conditions: initialData?.conditions || [
      {
        parent_type: '',
      },
    ],
  });

  const addCondition = () => {
    setForm((prev) => ({
      ...prev,
      conditions: [
        ...prev.conditions,
        {
          parent_type: '',
        },
      ],
    }));
  };

  const updateCondition = (
    index: number,
    value: Condition
  ) => {
    const updated = [...form.conditions];

    updated[index] = value;

    setForm((prev) => ({
      ...prev,
      conditions: updated,
    }));
  };

  return (
    <div className={styles.form}>
      <h2>
        {isEdit ? 'Редактирование сценария' : 'Создание сценария'}
      </h2>

      {form.conditions.map((condition, index) => (
        <ConditionAccordion
          key={index}
          index={index}
          condition={condition}
          defaultOpen={!isEdit}
          onChange={(value) =>
            updateCondition(index, value)
          }
        />
      ))}

      <button onClick={addCondition}>
        Создать ещё один аккордеон
      </button>

      <button onClick={() => onSave?.(form)}>
        Сохранить
      </button>

      {isEdit && (
        <button onClick={onDelete}>
          Удалить
        </button>
      )}
    </div>
  );
};