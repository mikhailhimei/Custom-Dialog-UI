import React, { useCallback } from 'react';
import { escapeHtml } from '../utils.jsx';

const ConditionCard = React.memo(({ condition, conditionIndex, scenarioId, isExpanded, onToggle, onUpdate, onEnableChildrenType, onDisableChildrenType, onEnableChildrenDirectType, onDisableChildrenDirectType, onRemove, canRemove }) => {
  const handleToggle = useCallback(() => {
    onToggle(condition.id);
  }, [onToggle, condition.id]);

  const handleFieldChange = useCallback((field, value) => {
    onUpdate(scenarioId, condition.id, field, value);
  }, [onUpdate, scenarioId, condition.id]);

  const handleEnableChildrenType = useCallback(() => {
    onEnableChildrenType(scenarioId, condition.id);
  }, [onEnableChildrenType, scenarioId, condition.id]);

  const handleDisableChildrenType = useCallback(() => {
    onDisableChildrenType(scenarioId, condition.id);
  }, [onDisableChildrenType, scenarioId, condition.id]);

  const handleEnableChildrenDirectType = useCallback(() => {
    onEnableChildrenDirectType(scenarioId, condition.id);
  }, [onEnableChildrenDirectType, scenarioId, condition.id]);

  const handleDisableChildrenDirectType = useCallback(() => {
    onDisableChildrenDirectType(scenarioId, condition.id);
  }, [onDisableChildrenDirectType, scenarioId, condition.id]);

  const handleRemove = useCallback(() => {
    onRemove(scenarioId, condition.id);
  }, [onRemove, scenarioId, condition.id]);

  const previewParts = [];
  if (condition.parent_type) {
    previewParts.push(`Parent: ${condition.parent_type}`);
  }
  if (condition.children_type_enabled && condition.children_type) {
    previewParts.push(`Children: ${condition.children_type}`);
  }
  if (condition.children_direct_type_enabled && condition.children_direct_type) {
    previewParts.push(`Children Direct: ${condition.children_direct_type}`);
  }
  const preview = previewParts.join(' • ') || 'Пустое условие';

  return (
    <div className={`condition-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button
        type="button"
        className="condition-header"
        onClick={handleToggle}
      >
        <span className="condition-heading">
          <span className="condition-title">Условие {conditionIndex + 1}</span>
          <span className="condition-preview">{preview}</span>
        </span>
        <span className="condition-header-side">
          <span className="condition-accordion-icon">{isExpanded ? '−' : '+'}</span>
        </span>
      </button>
      <div className={`condition-body ${isExpanded ? 'open' : 'hidden'}`}>
        <div className="condition-actions">
          {canRemove && (
            <button
              type="button"
              className="ghost remove-inline-button"
              onClick={handleRemove}
            >
              Удалить условие
            </button>
          )}
        </div>
        <div className="condition-grid">
          <div className="scenario-type-field">
            <div className="field-title-row">
              <span>Parent Type</span>
            </div>
            <input
              value={condition.parent_type || ''}
              placeholder="status_door"
              onChange={(e) => handleFieldChange('parent_type', e.target.value)}
            />
            <small>Обязателен только если не задан children_type в этом же условии.</small>
          </div>
          {condition.children_type_enabled ? (
            <div className="scenario-type-field">
              <div className="field-title-row">
                <span>Children Type</span>
                <button
                  type="button"
                  className="ghost remove-inline-button"
                  onClick={handleDisableChildrenType}
                >
                  Удалить
                </button>
              </div>
              <input
                value={condition.children_type || ''}
                placeholder="some_subcommand"
                onChange={(e) => handleFieldChange('children_type', e.target.value)}
              />
              <small>Необязателен. <code>all</code> означает любой непустой children_type именно для этого условия.</small>
            </div>
          ) : (
            <div className="scenario-type-field field-placeholder">
              <div className="field-title-row">
                <span>Children Type</span>
              </div>
              <button
                type="button"
                className="ghost add-inline-button"
                onClick={handleEnableChildrenType}
              >
                Добавить children_type
              </button>
              <small>Если не добавлять, условие будет проверяться только по parent_type.</small>
            </div>
          )}
          {condition.children_direct_type_enabled ? (
            <div className="scenario-type-field">
              <div className="field-title-row">
                <span>Children Direct Type</span>
                <button
                  type="button"
                  className="ghost remove-inline-button"
                  onClick={handleDisableChildrenDirectType}
                >
                  Удалить
                </button>
              </div>
              <input
                value={condition.children_direct_type || ''}
                placeholder="direct_subcommand | all_test"
                onChange={(e) => handleFieldChange('children_direct_type', e.target.value)}
              />
              <small>Необязателен. Если direct type не пришел во входящем payload, это условие просто не ограничивается по нему.</small>
            </div>
          ) : (
            <div className="scenario-type-field field-placeholder">
              <div className="field-title-row">
                <span>Children Direct Type</span>
              </div>
              <button
                type="button"
                className="ghost add-inline-button"
                onClick={handleEnableChildrenDirectType}
              >
                Добавить children_direct_type
              </button>
              <small>Если не добавлять, условие будет проверяться без учета direct type.</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default ConditionCard;