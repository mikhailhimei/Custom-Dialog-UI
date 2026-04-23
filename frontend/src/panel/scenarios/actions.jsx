import { newCondition, newScenario } from '../utils.jsx';

export const toggleScenario = (ctx, id) => {
  if (ctx._expandedScenarios.has(id)) {
    ctx._expandedScenarios.delete(id);
  } else {
    ctx._expandedScenarios.add(id);
  }
  ctx._render();
};

export const toggleCondition = (ctx, id) => {
  if (ctx._expandedConditions.has(id)) {
    ctx._expandedConditions.delete(id);
  } else {
    ctx._expandedConditions.add(id);
  }
  ctx._render();
};

export const updateConfigField = (ctx, field, value, rerender = false) => {
  ctx._config = { ...ctx._config, [field]: value };
  if (field === 'theme') {
    ctx._applyTheme();
  }
  ctx._status = '';
  ctx._error = '';
  if (rerender) {
    ctx._render();
  }
};

export const toggleDeviceAccordion = (ctx) => {
  ctx._deviceAccordionOpen = !ctx._deviceAccordionOpen;
  ctx._render();
};

export const addTimerAlarmDeviceId = (ctx) => {
  const deviceIds = Array.isArray(ctx._config.timer_alarm_device_ids)
    ? [...ctx._config.timer_alarm_device_ids]
    : [];
  deviceIds.push('');
  ctx._config = { ...ctx._config, timer_alarm_device_ids: deviceIds };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const updateTimerAlarmDeviceId = (ctx, index, value) => {
  const deviceIds = Array.isArray(ctx._config.timer_alarm_device_ids)
    ? [...ctx._config.timer_alarm_device_ids]
    : [''];
  deviceIds[index] = value;
  ctx._config = {
    ...ctx._config,
    timer_alarm_device_ids: ctx._normalizeTimerAlarmDeviceIdsForUi(deviceIds),
  };
  ctx._status = '';
  ctx._error = '';
};

export const removeTimerAlarmDeviceId = (ctx, index) => {
  const deviceIds = Array.isArray(ctx._config.timer_alarm_device_ids)
    ? [...ctx._config.timer_alarm_device_ids]
    : [''];
  const nextDeviceIds = deviceIds.filter((_, currentIndex) => currentIndex !== index);
  ctx._config = {
    ...ctx._config,
    timer_alarm_device_ids: ctx._normalizeTimerAlarmDeviceIdsForUi(nextDeviceIds),
  };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const updateScenario = (ctx, id, field, value, rerender = false) => {
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) =>
      scenario.id === id ? { ...scenario, [field]: value } : scenario
    ),
  };
  ctx._status = '';
  ctx._error = '';
  if (rerender) {
    ctx._render();
  }
};

export const updateCondition = (ctx, scenarioId, conditionId, field, value, rerender = false) => {
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) => (
      scenario.id === scenarioId
        ? {
          ...scenario,
          conditions: scenario.conditions.map((condition) => (
            condition.id === conditionId ? { ...condition, [field]: value } : condition
          )),
        }
        : scenario
    )),
  };
  ctx._status = '';
  ctx._error = '';
  if (rerender) {
    ctx._render();
  }
};

export const enableConditionChildrenType = (ctx, scenarioId, conditionId) => {
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) => (
      scenario.id === scenarioId
        ? {
          ...scenario,
          conditions: scenario.conditions.map((condition) => (
            condition.id === conditionId
              ? { ...condition, children_type_enabled: true, children_type: condition.children_type ?? '' }
              : condition
          )),
        }
        : scenario
    )),
  };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const disableConditionChildrenType = (ctx, scenarioId, conditionId) => {
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) => (
      scenario.id === scenarioId
        ? {
          ...scenario,
          conditions: scenario.conditions.map((condition) => (
            condition.id === conditionId
              ? { ...condition, children_type_enabled: false, children_type: '' }
              : condition
          )),
        }
        : scenario
    )),
  };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const enableConditionChildrenDirectType = (ctx, scenarioId, conditionId) => {
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) => (
      scenario.id === scenarioId
        ? {
          ...scenario,
          conditions: scenario.conditions.map((condition) => (
            condition.id === conditionId
              ? {
                ...condition,
                children_direct_type_enabled: true,
                children_direct_type: condition.children_direct_type ?? '',
              }
              : condition
          )),
        }
        : scenario
    )),
  };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const disableConditionChildrenDirectType = (ctx, scenarioId, conditionId) => {
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) => (
      scenario.id === scenarioId
        ? {
          ...scenario,
          conditions: scenario.conditions.map((condition) => (
            condition.id === conditionId
              ? { ...condition, children_direct_type_enabled: false, children_direct_type: '' }
              : condition
          )),
        }
        : scenario
    )),
  };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const addCondition = (ctx, scenarioId) => {
  const condition = newCondition();
  ctx._expandedConditions.add(condition.id);
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) => (
      scenario.id === scenarioId
        ? { ...scenario, conditions: [...scenario.conditions, condition] }
        : scenario
    )),
  };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const removeCondition = (ctx, scenarioId, conditionId) => {
  ctx._expandedConditions.delete(conditionId);
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.map((scenario) => {
      if (scenario.id !== scenarioId) return scenario;
      const nextConditions = scenario.conditions.filter((condition) => condition.id !== conditionId);
      return { ...scenario, conditions: nextConditions.length ? nextConditions : [newCondition()] };
    }),
  };
  ctx._status = '';
  ctx._error = '';
  ctx._render();
};

export const addScenario = (ctx) => {
  const now = Date.now();
  if (now < ctx._addScenarioLockUntil) {
    return;
  }
  ctx._addScenarioLockUntil = now + 300;

  const scenario = newScenario();
  ctx._expandedScenarios.add(scenario.id);
  ctx._config = {
    ...ctx._config,
    scenarios: [scenario, ...ctx._config.scenarios],
  };
  ctx._status = '';
  ctx._render();
  window.requestAnimationFrame(() => ctx._scrollScenarioIntoView(scenario.id));
};

export const scrollScenarioIntoView = (ctx, id) => {
  const selectorId = globalThis.CSS?.escape ? globalThis.CSS.escape(id) : id;
  const element = ctx.shadowRoot.querySelector(`[data-scenario-card-id="${selectorId}"]`);
  element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export const removeScenario = (ctx, id) => {
  ctx._expandedScenarios.delete(id);
  ctx._config = {
    ...ctx._config,
    scenarios: ctx._config.scenarios.filter((scenario) => scenario.id !== id),
  };
  ctx._status = '';
  ctx._render();
};
