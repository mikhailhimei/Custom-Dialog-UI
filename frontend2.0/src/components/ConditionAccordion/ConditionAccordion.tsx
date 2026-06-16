import React, { useState } from 'react';
import { Accordion } from '../Accordion/Accordion';
import { Condition } from '../../types/scripts';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';

interface Props {
  condition: Condition;
  index: number;
  defaultOpen?: boolean;
  onChange: (value: Condition) => void;
}

export const ConditionAccordion = ({
  condition,
  index,
  defaultOpen,
  onChange,
}: Props) => {
  const [showChildrenType, setShowChildrenType] = useState(
    Boolean(condition.children_type)
  );

  const [showChildrenDirectType, setShowChildrenDirectType] =
    useState(Boolean(condition.children_direct_type));

  return (
    <Accordion
      title={`Условие ${index + 1}`}
      defaultOpen={defaultOpen}
    >
      <div>
        <Input
          label="Parent_type"
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
          <Button onClick={() => setShowChildrenType(true)}>
            Добавить children_type
          </Button>
        )}

        {showChildrenType && (
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
        )}
      </div>

      <div>
        {!showChildrenDirectType && (
          <Button onClick={() => setShowChildrenDirectType(true)}>
            Добавить children_direct_type
          </Button>
        )}

        {showChildrenDirectType && (
          <Input
            label="children_direct_type"
            value={condition.children_direct_type || ''}
            onChange={(e) =>
              onChange({
                ...condition,
                children_direct_type: e.target.value,
              })
            }
          />
        )}
      </div>
    </Accordion>
  );
};