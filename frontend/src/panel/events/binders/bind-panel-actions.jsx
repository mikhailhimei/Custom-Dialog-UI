export const bindPanelActions = (ctx, root, on) => {
  root.querySelectorAll('[data-tab]').forEach((element) => {
    on(element, 'click', () => ctx._setActiveTab(element.dataset.tab));
  });

  on(root.querySelector('[data-action="save"]'), 'click', () => ctx._save());
  on(root.querySelector('[data-action="refresh-logs"]'), 'click', () => ctx._loadLogs());
  on(root.querySelector('[data-action="download-json"]'), 'click', () => ctx._downloadJson());
  on(root.querySelector('[data-action="upload-json"]'), 'click', () => ctx._openJsonFilePicker());
  on(root.querySelector('[data-action="reset-commands-cache"]'), 'click', () => ctx._resetCommandsCache());
  on(root.querySelector('[data-action="reload-yandex-scenarios"]'), 'click', () => ctx._loadYandexScenarios());
  on(root.querySelector('[data-action="open-yandex-modal"]'), 'click', () => ctx._openYandexModal());
  on(root.querySelector('[data-action="save-yandex-scenario"]'), 'click', () => ctx._saveYandexScenarioFromModal());

  const addScenarioButton = root.querySelector('[data-action="add-scenario"]');
  if (addScenarioButton) {
    addScenarioButton.onclick = () => ctx._addScenario();
  }

  root.querySelectorAll('[data-action="close-yandex-modal"]').forEach((element) => {
    on(element, 'click', () => ctx._closeYandexModal());
  });
  root.querySelectorAll('[data-action="add-yandex-sub"]').forEach((element) => {
    on(element, 'click', () => ctx._addYandexDraftSubItem(element.dataset.subType));
  });
  root.querySelectorAll('[data-action="remove-yandex-sub"]').forEach((element) => {
    on(element, 'click', () => ctx._removeYandexDraftSubItem(
      element.dataset.subType,
      Number(element.dataset.subIndex),
    ));
  });

  on(root.querySelector('[data-action="import-json-input"]'), 'change', (event) => {
    const [file] = event.currentTarget.files || [];
    ctx._importJsonFile(file);
  });

  root.querySelectorAll('[data-action="add-condition"]').forEach((element) => {
    on(element, 'click', () => ctx._addCondition(element.dataset.scenarioId));
  });
  root.querySelectorAll('[data-action="enable-condition-children-type"]').forEach((element) => {
    on(element, 'click', () => ctx._enableConditionChildrenType(
      element.dataset.scenarioId,
      element.dataset.conditionId,
    ));
  });
  root.querySelectorAll('[data-action="disable-condition-children-type"]').forEach((element) => {
    on(element, 'click', () => ctx._disableConditionChildrenType(
      element.dataset.scenarioId,
      element.dataset.conditionId,
    ));
  });
  root.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach((element) => {
    on(element, 'click', () => ctx._enableConditionChildrenDirectType(
      element.dataset.scenarioId,
      element.dataset.conditionId,
    ));
  });
  root.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach((element) => {
    on(element, 'click', () => ctx._disableConditionChildrenDirectType(
      element.dataset.scenarioId,
      element.dataset.conditionId,
    ));
  });

  root.querySelectorAll('[data-toggle-scenario]').forEach((element) => {
    on(element, 'click', () => ctx._toggleScenario(element.dataset.toggleScenario));
  });
  root.querySelectorAll('[data-toggle-condition]').forEach((element) => {
    on(element, 'click', () => ctx._toggleCondition(element.dataset.toggleCondition));
  });

  root.querySelectorAll('[data-remove-id]').forEach((element) => {
    on(element, 'click', () => ctx._removeScenario(element.dataset.removeId));
  });
  root.querySelectorAll('[data-remove-condition-id]').forEach((element) => {
    on(element, 'click', () => ctx._removeCondition(
      element.dataset.scenarioId,
      element.dataset.removeConditionId,
    ));
  });

  const createScenarioElement = root.querySelector('dialog-custom-ui-create-scenario');
  if (createScenarioElement) {
    createScenarioElement.hass = ctx._hass;
    createScenarioElement.config = {
      base_url: ctx._config.base_url,
      timer_alarm_token: ctx._config.timer_alarm_token,
      theme: ctx._config.theme,
    };
  }
};
