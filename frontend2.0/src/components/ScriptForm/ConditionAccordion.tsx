import React, { useState } from 'react';
import { Accordion } from '../Accordion/Accordion';
import { Condition } from '../../types/scripts';

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
        <label>parent_type *</label>

        <input
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
          <button onClick={() => setShowChildrenType(true)}>
            Добавить children_type
          </button>
        )}

        {showChildrenType && (
          <input
            placeholder="children_type"
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
          <button
            onClick={() => setShowChildrenDirectType(true)}
          >
            Добавить children_direct_type
          </button>
        )}

        {showChildrenDirectType && (
          <input
            placeholder="children_direct_type"
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