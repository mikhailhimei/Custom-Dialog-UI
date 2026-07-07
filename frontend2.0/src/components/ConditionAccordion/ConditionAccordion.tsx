import React, { useState } from 'react';

import { Accordion } from '../ui/Accordion/Accordion';
import { Condition } from '@/types/scripts';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';

import styles from './ConditionAccordion.module.scss';


interface Props {
  condition: Condition;
  index: number;
  defaultOpen?: boolean;
  onChange: (value: Condition) => void;
  onDelete: () => void;
  totalCount: number;
}


export const ConditionAccordion = ({
  condition,
  index,
  defaultOpen,
  onChange,
  onDelete,
  totalCount,
}: Props) => {

  const [showChildrenType, setShowChildrenType] =
    useState(Boolean(condition.children_type));

  const [showChildrenDirectType, setShowChildrenDirectType] =
    useState(Boolean(condition.children_direct_type));


  const hideChildrenType = () => {
    setShowChildrenType(false);

    onChange({
      ...condition,
      children_type: undefined,
    });
  };


  const hideChildrenDirectType = () => {
    setShowChildrenDirectType(false);

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
          value={condition.parent_type}
          onChange={(e) =>
            onChange({
              ...condition,
              parent_type: e.target.value,
            })
          }
        />
      </div>


      <div className={styles.field}>

        {!showChildrenType && (
          <Button
            onClick={() =>
              setShowChildrenType(true)
            }
          >
            🞢 Добавить children_type
          </Button>
        )}


        {showChildrenType && (
          <div className={styles.row}>

            <div className={styles.inputWrapper}>
              <Input
                label="children_type"
                value={condition.children_type || ''}
                onChange={(e) =>
                  onChange({
                    ...condition,
                    children_type: e.target.value,
                  })
                }
              />
            </div>


            <Button onClick={hideChildrenType}>
              ×
            </Button>

          </div>
        )}

      </div>


      <div className={styles.field}>

        {!showChildrenDirectType && (
          <Button
            onClick={() =>
              setShowChildrenDirectType(true)
            }
          >
            🞢 Добавить children_direct_type
          </Button>
        )}


        {showChildrenDirectType && (
          <div className={styles.row}>

            <div className={styles.inputWrapper}>
              <Input
                label="children_direct_type"
                value={
                  condition.children_direct_type || ''
                }
                onChange={(e) =>
                  onChange({
                    ...condition,
                    children_direct_type:
                      e.target.value,
                  })
                }
              />
            </div>


            <Button onClick={hideChildrenDirectType}>
              ×
            </Button>

          </div>
        )}

      </div>


      {totalCount > 1 && (
        <Button
          onClick={onDelete}
          className={styles.deleteButton}
        >
          🗑 Удалить условие
        </Button>
      )}

    </Accordion>
  );
};