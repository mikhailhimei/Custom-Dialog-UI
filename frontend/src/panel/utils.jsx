export const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

export const generateScenarioId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `scenario_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`;
};

export const generateConditionId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `condition_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`;
};

export const newCondition = () => ({
  id: generateConditionId(),
  parent_type: '',
  children_type: '',
  children_type_enabled: false,
  children_direct_type: '',
  children_direct_type_enabled: false,
});

export const newScenario = () => ({
  id: generateScenarioId(),
  name: '',
  script_entity_id: '',
  conditions: [newCondition()],
});
