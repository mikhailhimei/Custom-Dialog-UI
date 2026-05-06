import React, { useCallback } from 'react';
import { escapeHtml } from '../utils.jsx';
import ConditionCard from './ConditionCard.jsx';

const ScenarioCard = React.memo(({
  scenario,
  index,
  startIndex,
  scripts,
  isExpanded,
  expandedConditions,
  onToggleScenario,
  onUpdateScenario,
  onRemoveScenario,
  onAddCondition,
  onRemoveCondition,
  onUpdateCondition,
  onEnableChildrenType,
  onDisableChildrenType,
  onEnableChildrenDirectType,
  onDisableChildrenDirectType,
  onToggleCondition
}) => {
  const handleToggle = useCallback(() => {
    onToggleScenario(scenario.id);
  }, [onToggleScenario, scenario.id]);

  const handleRemove = useCallback(() => {
    onRemoveScenario(scenario.id);
  }, [onRemoveScenario, scenario.id]);

  const handleScenarioFieldChange = useCallback((field, value) => {
    onUpdateScenario(scenario.id, field, value);
  }, [onUpdateScenario, scenario.id]);

  const handleAddCondition = useCallback(() => {
    onAddCondition(scenario.id);
  }, [onAddCondition, scenario.id]);

  return (
    <section className={`scenario-card ${isExpanded ? 'expanded' : 'collapsed'}`} data-scenario-card-id={scenario.id}>
      <div className="scenario-header">
        <button type="button" className="scenario-toggle" onClick={handleToggle}>
          <span className="scenario-toggle-icon">{isExpanded ? '−' : '+'}</span>
          <span>
            <span className="scenario-kicker">Сценарий {startIndex + index + 1}</span>
            <span className="scenario-title">{scenario.name || 'Без названия'}</span>
          </span>
        </button>
        <button type="button" className="ghost" onClick={handleRemove}>Удалить</button>
      </div>
      <div className={`scenario-body ${isExpanded ? 'open' : 'hidden'}`}>
        <div className="scenario-grid">
          <label className="field-span-2">
            <span>Название блока</span>
            <input
              value={scenario.name || ''}
              placeholder="Например: Проверить дверь"
              onChange={(e) => handleScenarioFieldChange('name', e.target.value)}
            />
          </label>
          <div className="field-span-2 conditions-block">
            <div className="conditions-toolbar">
              <div>
                <span className="section-label">Условия</span>
                <small>Через <code>+</code> можно добавить ещё пару <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. Если в <code>Parent Type</code> указать несколько значений через <code>;</code>, после сохранения они автоматически разложатся на отдельные условия.</small>
              </div>
              <button type="button" className="secondary compact-button" onClick={handleAddCondition}>+ Добавить условие</button>
            </div>
            <div className="conditions-list">
              {scenario.conditions.map((condition, conditionIndex) => (
                <ConditionCard
                  key={condition.id}
                  condition={condition}
                  conditionIndex={conditionIndex}
                  scenarioId={scenario.id}
                  isExpanded={expandedConditions.has(condition.id)}
                  onToggle={onToggleCondition}
                  onUpdate={onUpdateCondition}
                  onEnableChildrenType={onEnableChildrenType}
                  onDisableChildrenType={onDisableChildrenType}
                  onEnableChildrenDirectType={onEnableChildrenDirectType}
                  onDisableChildrenDirectType={onDisableChildrenDirectType}
                  onRemove={onRemoveCondition}
                  canRemove={scenario.conditions.length > 1}
                />
              ))}
            </div>
          </div>
          <label className="field-span-2">
            <span>Скрипт Home Assistant</span>
            <select
              value={scenario.script_entity_id || ''}
              onChange={(e) => handleScenarioFieldChange('script_entity_id', e.target.value)}
            >
              <option value="">Выберите script.*</option>
              {scripts.map((script) => {
                const label = script.attributes.friendly_name || script.entity_id;
                return (
                  <option key={script.entity_id} value={script.entity_id}>
                    {label} ({script.entity_id})
                  </option>
                );
              })}
              <option value="timer">Таймер (встроенная обработка)</option>
              <option value="alarm">Будильник (встроенная обработка)</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
});

export default ScenarioCard;