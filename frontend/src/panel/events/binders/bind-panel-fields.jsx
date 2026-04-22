export const bindPanelFields = (ctx, root, on) => {
  root.querySelectorAll('input, select, textarea').forEach((element) => {
    ['click', 'focusin'].forEach((eventName) => {
      on(element, eventName, (event) => ctx._swallowUiEvent(event));
    });
  });

  root.querySelectorAll('[data-config-field]').forEach((element) => {
    on(element, 'input', (event) => {
      ctx._updateConfigField(event.currentTarget.dataset.configField, event.currentTarget.value, false);
    });
    on(element, 'change', (event) => {
      ctx._updateConfigField(event.currentTarget.dataset.configField, event.currentTarget.value, false);
    });
  });

  root.querySelectorAll('[data-timer-device-index]').forEach((element) => {
    const index = Number(element.dataset.timerDeviceIndex);
    on(element, 'input', (event) => {
      ctx._updateTimerAlarmDeviceId(index, event.currentTarget.value);
    });
    on(element, 'change', (event) => {
      ctx._updateTimerAlarmDeviceId(index, event.currentTarget.value);
      ctx._render();
    });
  });

  root.querySelectorAll('[data-scenario-id][data-scenario-field]').forEach((element) => {
    const field = element.dataset.scenarioField;
    const id = element.dataset.scenarioId;
    if (element.tagName === 'SELECT') {
      on(element, 'change', (event) => {
        ctx._updateScenario(id, field, event.currentTarget.value, true);
      });
    } else {
      on(element, 'input', (event) => {
        ctx._updateScenario(id, field, event.currentTarget.value, false);
      });
      on(element, 'change', (event) => {
        ctx._updateScenario(id, field, event.currentTarget.value, true);
      });
    }
  });

  root.querySelectorAll('[data-scenario-id][data-condition-id][data-condition-field]').forEach((element) => {
    const scenarioId = element.dataset.scenarioId;
    const conditionId = element.dataset.conditionId;
    const field = element.dataset.conditionField;
    on(element, 'input', (event) => {
      ctx._updateCondition(scenarioId, conditionId, field, event.currentTarget.value, false);
    });
    on(element, 'change', (event) => {
      ctx._updateCondition(scenarioId, conditionId, field, event.currentTarget.value, true);
    });
  });
};
