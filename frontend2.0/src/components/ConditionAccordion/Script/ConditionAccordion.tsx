import React, { useState } from 'react';
import { Accordion } from '../../ui/Accordion/Accordion';
import { Condition } from '../../../types/scripts';
import { Input } from '../../ui/Input/Input';
import { Button } from '../../ui/Button/Button';

interface Props {
  condition: Condition;
  index: number;
  defaultOpen?: boolean;
  onChange: (value: Condition) => void;
  onDelete: () => void;
  totalCount: number
}

export const ConditionAccordion = ({
  condition,
  index,
  defaultOpen,
  onChange,
  onDelete,
  totalCount,
}: Props) => {

  const [showChildrenType, setShowChildrenType] = useState(
    Boolean(condition.children_type)
  );

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
      <div>
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


      <div>
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
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 8,
            }}
          >
            <div style={{ flex: 1 }}>
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


      <div>
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
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 8,
            }}
          >
            <div style={{ flex: 1 }}>
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

      {totalCount > 1 ?
        <Button
          onClick={onDelete}
          style={{
            width: '100%',
            marginBottom: 12,
          }}
        >
          🗑 Удалить условие
        </Button>
        : <></>}

    </Accordion>
  );
};