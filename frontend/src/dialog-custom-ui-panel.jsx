import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './dialog-custom-ui-create-scenario.jsx';

const ShadowMarkup = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);
const DEFAULT_CONFIG = {
  base_url: 'http://127.0.0.1:8000',
  client_id: '',
  timer_alarm_token: '',
  timer_alarm_device_ids: [''],
  timeout: 10,
  scenarios: [],
};

const EXAMPLE_PAYLOAD = `{
  "children_type": "some_subcommand",
  "children_direct_type": [{"type": "some_direct_subcommand"}],
  "parent_type": "weather_metno",
  "value": {"commands": "москва"},
  "client_id": "...",
  "device_id": "..."
}`;

const LOG_POLL_INTERVAL_MS = 2000;
const COMMANDS_PAGE_SIZE = 20;
const CREATE_SCENARIO_TABS = {
  primary: 'primary',
  secondary: 'secondary',
  direct: 'direct',
  defaults: 'defaults',
};
const MODULE_VERSION = new URL(import.meta.url).searchParams.get('v') || '';
const IS_LOCAL_DEV = ['localhost', '127.0.0.1'].includes(globalThis.location?.hostname ?? '');
const TIMER_ALARM_MODULE_URL = MODULE_VERSION
  ? (IS_LOCAL_DEV
      ? `/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(MODULE_VERSION)}`
      : `/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(MODULE_VERSION)}`)
  : (IS_LOCAL_DEV ? '/src/dialog-custom-ui-timer-alarm.jsx' : '/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js');

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const generateScenarioId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `scenario_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`;
};

const generateConditionId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `condition_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`;
};

const newCondition = () => ({
  id: generateConditionId(),
  parent_type: '',
  children_type: '',
  children_type_enabled: false,
  children_direct_type: '',
  children_direct_type_enabled: false,
});

const newScenario = () => ({
  id: generateScenarioId(),
  name: '',
  script_entity_id: '',
  conditions: [newCondition()],
});

class DialogCustomUiPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._reactRoot = null;
    this._hass = null;
    this._config = { ...DEFAULT_CONFIG };
    this._logs = [];
    this._activeTab = 'scenarios';
    this._expandedScenarios = new Set();
    this._expandedConditions = new Set();
    this._loaded = false;
    this._loading = false;
    this._saving = false;
    this._loadingLogs = false;
    this._error = '';
    this._status = '';
    this._logsTimer = null;
    this._timerAlarmLoaded = false;
    this._timerAlarmLoading = false;
    this._timerAlarmLoadPromise = null;
    this._deviceAccordionOpen = true;
    this._createScenarioTab = CREATE_SCENARIO_TABS.primary;
    this._commands = [];
    this._commandsPage = 1;
    this._commandsTotal = 0;
    this._commandsLoading = false;
    this._commandsError = '';
    this._commandsModalOpen = false;
    this._commandsModalMode = 'create';
    this._commandsModalSaving = false;
    this._commandsModalDraft = this._createCommandDraft();
    this._commandsEditingId = '';
  }

  set hass(hass) {
    const firstAttach = !this._hass;
    this._hass = hass;

    if (!this._loaded && !this._loading) {
      this._loadConfig();
      return;
    }

    if (firstAttach || !this.shadowRoot.innerHTML) {
      this._render();
    }
  }

  get hass() {
    return this._hass;
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) {
      this._render();
    }
  }

  disconnectedCallback() {
    this._stopLogsPolling();
    this._unmountReact();
  }

  _mountReact(markup) {
    if (!this._reactRoot) {
      this._reactRoot = createRoot(this.shadowRoot);
    }
    flushSync(() => {
      this._reactRoot.render(<ShadowMarkup html={markup} />);
    });
  }

  _unmountReact() {
    if (this._reactRoot) {
      this._reactRoot.unmount();
      this._reactRoot = null;
    }
  }

  async _ensureTimerAlarmModule() {
    if (this._timerAlarmLoaded) {
      return;
    }
    if (!this._timerAlarmLoadPromise) {
      this._timerAlarmLoading = true;
      this._timerAlarmLoadPromise = import(TIMER_ALARM_MODULE_URL)
        .then(() => {
          this._timerAlarmLoaded = true;
          this._error = '';
          this._status = '';
        })
        .catch((err) => {
          this._error = err?.message || 'Не удалось загрузить модуль timer/alarm.';
          this._timerAlarmLoaded = false;
        })
        .finally(() => {
          this._timerAlarmLoading = false;
          this._timerAlarmLoadPromise = null;
          this._render();
        });
    }

    return this._timerAlarmLoadPromise;
  }

  async _loadConfig() {
    this._loading = true;
    this._render();
    try {
      const result = await this._hass.callWS({ type: 'dialog_custom_ui/get_config' });
      this._config = {
        ...DEFAULT_CONFIG,
        ...result,
        timer_alarm_device_ids: this._normalizeTimerAlarmDeviceIdsForUi(
          result.timer_alarm_device_ids ?? []
        ),
        scenarios: Array.isArray(result.scenarios)
          ? result.scenarios.map((scenario) => this._normalizeScenarioForUi(scenario))
          : [],
      };
      this._expandedScenarios = new Set();
      this._error = '';
    } catch (err) {
      this._error = err?.message || 'Не удалось загрузить настройки. Сначала добавьте интеграцию Dialog Custom UI.';
    } finally {
      this._loaded = true;
      this._loading = false;
      this._render();
      if (this._activeTab === 'logs') {
        this._startLogsPolling();
      }
    }
  }

  async _loadLogs() {
    if (!this._hass || this._loadingLogs) {
      return;
    }

    this._loadingLogs = true;
    this._render();
    try {
      const result = await this._hass.callWS({ type: 'dialog_custom_ui/get_logs' });
      this._logs = Array.isArray(result.logs) ? result.logs : [];
    } catch (err) {
      this._error = err?.message || 'Не удалось загрузить logs.';
    } finally {
      this._loadingLogs = false;
      this._render();
    }
  }

  _startLogsPolling() {
    this._stopLogsPolling();
    this._loadLogs();
    this._logsTimer = window.setInterval(() => {
      if (this._activeTab === 'logs') {
        this._loadLogs();
      }
    }, LOG_POLL_INTERVAL_MS);
  }

  _stopLogsPolling() {
    if (this._logsTimer) {
      window.clearInterval(this._logsTimer);
      this._logsTimer = null;
    }
  }

  _scripts() {
    if (!this._hass) {
      return [];
    }

    return Object.values(this._hass.states)
      .filter((stateObj) => stateObj.entity_id.startsWith('script.'))
      .sort((left, right) => {
        const leftName = left.attributes.friendly_name || left.entity_id;
        const rightName = right.attributes.friendly_name || right.entity_id;
        return leftName.localeCompare(rightName, 'ru');
      });
  }

  _createCommandDraft(source = null) {
    const command = source ?? {};
    const componentDialog = typeof command.componentDialog === 'object' && command.componentDialog
      ? command.componentDialog
      : {};

    return {
      _id: String(command._id ?? ''),
      title: String(command.title ?? ''),
      uuidDialog: String(command.uuidDialog ?? ''),
      type: String(componentDialog.type ?? ''),
      endStatus: Boolean(componentDialog.endStatus),
      forwardText: Boolean(componentDialog.forwardText),
      answerType: String(componentDialog.answerType ?? 'default'),
      voiceCommands: componentDialog.voiceCommands == null
        ? ''
        : JSON.stringify(componentDialog.voiceCommands, null, 2),
      nextDirectControl: JSON.stringify(
        Array.isArray(componentDialog.nextDirectControl) ? componentDialog.nextDirectControl : [],
        null,
        2,
      ),
      voiceResponseArray: JSON.stringify(
        Array.isArray(componentDialog.voiceResponseArray) ? componentDialog.voiceResponseArray : [],
        null,
        2,
      ),
      nextAction: JSON.stringify(
        Array.isArray(componentDialog.nextAction) ? componentDialog.nextAction : [],
        null,
        2,
      ),
    };
  }

  _setCreateScenarioTab(tab) {
    this._createScenarioTab = tab;
    this._commandsError = '';
    if (tab === CREATE_SCENARIO_TABS.primary && !this._commands.length && !this._commandsLoading) {
      this._loadCommandsPage(1);
      return;
    }
    this._render();
  }

  _commandsApiUrl(page = this._commandsPage) {
    const baseUrl = String(this._config.base_url ?? '').trim().replace(/\/$/, '');
    if (!baseUrl) {
      return '';
    }
    return `${baseUrl}/api/cms/commands?page=${encodeURIComponent(page)}&pageSize=${COMMANDS_PAGE_SIZE}`;
  }

  _commandsApiHeaders(jsonBody = false) {
    const headers = {};
    if (jsonBody) {
      headers['Content-Type'] = 'application/json';
    }

    const token = String(this._config.timer_alarm_token ?? '').trim();
    if (token) {
      headers.Authorization = token;
    }
    return headers;
  }

  async _loadCommandsPage(page = 1) {
    const pageNumber = Math.max(1, Number(page) || 1);
    const url = this._commandsApiUrl(pageNumber);
    if (!url) {
      this._commandsError = 'Заполните Base URL во вкладке Settings.';
      this._commandsLoading = false;
      this._render();
      return;
    }

    this._commandsLoading = true;
    this._commandsError = '';
    this._render();
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: this._commandsApiHeaders(false),
      });
      if (!response.ok) {
        throw new Error(`Ошибка загрузки команд: HTTP ${response.status}`);
      }
      const result = await response.json();
      const items = Array.isArray(result.data) ? result.data : [];
      const total = Number(
        result.total
        ?? result.count
        ?? result.meta?.total
        ?? result.pagination?.total
        ?? 0,
      );

      this._commands = items;
      this._commandsPage = pageNumber;
      this._commandsTotal = Number.isFinite(total) && total > 0
        ? total
        : pageNumber * COMMANDS_PAGE_SIZE + (items.length === COMMANDS_PAGE_SIZE ? 1 : 0);
      this._status = `Команды загружены: ${items.length}.`;
    } catch (err) {
      this._commandsError = err?.message || 'Не удалось загрузить команды.';
      this._commands = [];
    } finally {
      this._commandsLoading = false;
      this._render();
    }
  }

  _openCreateCommandModal() {
    this._commandsModalOpen = true;
    this._commandsModalMode = 'create';
    this._commandsEditingId = '';
    this._commandsModalDraft = this._createCommandDraft();
    this._commandsError = '';
    this._render();
  }

  _openEditCommandModal(commandId) {
    const item = this._commands.find((command) => String(command._id ?? '') === String(commandId ?? ''));
    if (!item) {
      this._commandsError = 'Команда не найдена для редактирования.';
      this._render();
      return;
    }
    this._commandsModalOpen = true;
    this._commandsModalMode = 'edit';
    this._commandsEditingId = String(item._id ?? '');
    this._commandsModalDraft = this._createCommandDraft(item);
    this._commandsError = '';
    this._render();
  }

  _closeCommandModal() {
    if (this._commandsModalSaving) {
      return;
    }
    this._commandsModalOpen = false;
    this._commandsModalMode = 'create';
    this._commandsEditingId = '';
    this._commandsModalDraft = this._createCommandDraft();
    this._render();
  }

  _updateCommandDraft(field, value) {
    this._commandsModalDraft = {
      ...this._commandsModalDraft,
      [field]: value,
    };
  }

  _toArrayField(raw, fieldLabel) {
    const text = String(raw ?? '').trim();
    if (!text) {
      return [];
    }
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (error) {
      throw new Error(`Поле ${fieldLabel} должно быть валидным JSON-массивом.`);
    }
    if (!Array.isArray(parsed)) {
      throw new Error(`Поле ${fieldLabel} должно быть массивом.`);
    }
    return parsed;
  }

  _toNullableJson(raw, fieldLabel) {
    const text = String(raw ?? '').trim();
    if (!text) {
      return null;
    }
    try {
      return JSON.parse(text);
    } catch (error) {
      throw new Error(`Поле ${fieldLabel} должно быть валидным JSON.`);
    }
  }

  _buildCommandPayloadFromDraft() {
    const draft = this._commandsModalDraft;
    const title = String(draft.title ?? '').trim();
    const uuidDialog = String(draft.uuidDialog ?? '').trim();
    const type = String(draft.type ?? '').trim();

    if (!title) {
      throw new Error('Укажите title команды.');
    }
    if (!uuidDialog) {
      throw new Error('Укажите uuidDialog.');
    }
    if (!type) {
      throw new Error('Укажите componentDialog.type.');
    }

    return {
      title,
      uuidDialog,
      componentDialog: {
        endStatus: Boolean(draft.endStatus),
        type,
        forwardText: Boolean(draft.forwardText),
        answerType: String(draft.answerType ?? 'default') || 'default',
        voiceCommands: this._toNullableJson(draft.voiceCommands, 'voiceCommands'),
        nextDirectControl: this._toArrayField(draft.nextDirectControl, 'nextDirectControl'),
        voiceResponseArray: this._toArrayField(draft.voiceResponseArray, 'voiceResponseArray'),
        nextAction: this._toArrayField(draft.nextAction, 'nextAction'),
      },
    };
  }

  async _saveCommandModal() {
    const baseUrl = String(this._config.base_url ?? '').trim().replace(/\/$/, '');
    if (!baseUrl) {
      this._commandsError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

    let payload;
    try {
      payload = this._buildCommandPayloadFromDraft();
    } catch (error) {
      this._commandsError = error?.message || 'Ошибка валидации формы.';
      this._render();
      return;
    }

    const isEdit = this._commandsModalMode === 'edit' && this._commandsEditingId;
    const requestUrl = isEdit
      ? `${baseUrl}/api/cms/commands/${encodeURIComponent(this._commandsEditingId)}`
      : `${baseUrl}/api/cms/commands`;
    const requestMethod = isEdit ? 'PATCH' : 'POST';

    this._commandsModalSaving = true;
    this._commandsError = '';
    this._render();
    try {
      const response = await fetch(requestUrl, {
        method: requestMethod,
        headers: this._commandsApiHeaders(true),
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Ошибка сохранения: HTTP ${response.status}`);
      }
      this._status = isEdit ? 'Сценарий обновлен.' : 'Сценарий создан.';
      this._commandsModalOpen = false;
      this._commandsModalMode = 'create';
      this._commandsEditingId = '';
      this._commandsModalDraft = this._createCommandDraft();
      await this._loadCommandsPage(this._commandsPage);
    } catch (error) {
      this._commandsError = error?.message || 'Не удалось сохранить сценарий.';
      this._render();
    } finally {
      this._commandsModalSaving = false;
      this._render();
    }
  }

  _setActiveTab(tab) {
    this._activeTab = tab;
    this._status = '';
    this._error = '';
    if (tab !== 'create-scenario') {
      this._commandsModalOpen = false;
    }
    this._render();
    if (tab === 'logs') {
      this._startLogsPolling();
    } else {
      this._stopLogsPolling();
      if (tab === 'timer-alarm') {
        this._ensureTimerAlarmModule();
      }
      if (tab === 'create-scenario' && this._createScenarioTab === CREATE_SCENARIO_TABS.primary) {
        this._loadCommandsPage(this._commandsPage || 1);
      }
    }
  }

  _renderSettings() {
    const deviceIds = this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids);
    const isDeviceAccordionOpen = this._deviceAccordionOpen;
    const deviceRows = deviceIds.map((deviceId, index) => `
      <div class="device-row">
        <label class="field-grow">
          <span>device_id ${index + 1}</span>
          <input
            data-timer-device-index="${index}"
            value="${escapeHtml(deviceId)}"
            placeholder="media_player.living_room"
          />
        </label>
        <button
          type="button"
          class="ghost device-remove-button"
          data-action="remove-device-id"
          data-timer-device-index="${index}"
          ${deviceIds.length === 1 ? 'disabled' : ''}
        >Удалить</button>
      </div>
    `).join('');

    return `
      <section class="hero-card">
        <h1>Settings</h1>
        <p>Общие параметры подключения для сценариев и timer/alarm: IP, client_id, token, timeout и список device_id.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${escapeHtml(this._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>Интеграция отправляет POST на <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
        <label>
          <span>Client ID</span>
          <input data-config-field="client_id" value="${escapeHtml(this._config.client_id)}" placeholder="user-123" />
          <small>Поле вводится вручную и уходит в тело запроса как <code>{"clientId":"..."}</code>.</small>
        </label>
        <label>
          <span>Authorization token</span>
          <input data-config-field="timer_alarm_token" value="${escapeHtml(this._config.timer_alarm_token)}" placeholder="Bearer xxx" />
          <small>Значение отправляется в заголовке <code>Authorization</code> как есть.</small>
        </label>
        <label class="field-narrow">
          <span>Timeout, секунд</span>
          <input data-config-field="timeout" type="number" min="1" value="${escapeHtml(this._config.timeout)}" />
        </label>
        </div>
        <section class="settings-accordion">
          <button type="button" class="settings-accordion-header" data-action="toggle-device-accordion">
            <span>Device</span>
            <span class="settings-accordion-icon">${isDeviceAccordionOpen ? '−' : '+'}</span>
          </button>
          <div class="settings-accordion-body ${isDeviceAccordionOpen ? 'open' : 'hidden'}">
            <p class="settings-accordion-note">Добавьте один или несколько <code>device_id</code>. В запрос на timer/alarm они уйдут массивом.</p>
            <div class="device-list">
              ${deviceRows}
            </div>
            <button type="button" class="secondary add-inline-button" data-action="add-device-id">+ Добавить device_id</button>
          </div>
        </section>
        <div class="toolbar">
          <button type="button" class="primary" data-action="save" ${this._saving ? 'disabled' : ''}>${this._saving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
        ${this._error ? `<div class="status error">${escapeHtml(this._error)}</div>` : ''}
        ${this._status ? `<div class="status ok">${escapeHtml(this._status)}</div>` : ''}
      </section>
    `;
  }

  _toggleScenario(id) {
    if (this._expandedScenarios.has(id)) {
      this._expandedScenarios.delete(id);
    } else {
      this._expandedScenarios.add(id);
    }
    this._render();
  }

  _toggleCondition(id) {
    if (this._expandedConditions.has(id)) {
      this._expandedConditions.delete(id);
    } else {
      this._expandedConditions.add(id);
    }
    this._render();
  }

  _updateConfigField(field, value, rerender = false) {
    this._config = { ...this._config, [field]: value };
    this._status = '';
    this._error = '';
    if (rerender) {
      this._render();
    }
  }

  _normalizeTimerAlarmDeviceIdsForUi(deviceIds) {
    const source = Array.isArray(deviceIds)
      ? deviceIds
      : typeof deviceIds === 'string'
        ? [deviceIds]
        : [];
    const values = source.map((deviceId) => String(deviceId ?? '').trim());
    return values.length ? values : [''];
  }

  _timerAlarmDeviceIdsForSave() {
    return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids)
      .filter((deviceId) => deviceId);
  }

  _toggleDeviceAccordion() {
    this._deviceAccordionOpen = !this._deviceAccordionOpen;
    this._render();
  }

  _addTimerAlarmDeviceId() {
    const deviceIds = Array.isArray(this._config.timer_alarm_device_ids)
      ? [...this._config.timer_alarm_device_ids]
      : [];
    deviceIds.push('');
    this._config = { ...this._config, timer_alarm_device_ids: deviceIds };
    this._status = '';
    this._error = '';
    this._render();
  }

  _updateTimerAlarmDeviceId(index, value) {
    const deviceIds = Array.isArray(this._config.timer_alarm_device_ids)
      ? [...this._config.timer_alarm_device_ids]
      : [''];
    deviceIds[index] = value;
    this._config = {
      ...this._config,
      timer_alarm_device_ids: this._normalizeTimerAlarmDeviceIdsForUi(deviceIds),
    };
    this._status = '';
    this._error = '';
  }

  _removeTimerAlarmDeviceId(index) {
    const deviceIds = Array.isArray(this._config.timer_alarm_device_ids)
      ? [...this._config.timer_alarm_device_ids]
      : [''];
    const nextDeviceIds = deviceIds.filter((_, currentIndex) => currentIndex !== index);
    this._config = {
      ...this._config,
      timer_alarm_device_ids: this._normalizeTimerAlarmDeviceIdsForUi(nextDeviceIds),
    };
    this._status = '';
    this._error = '';
    this._render();
  }

  _updateScenario(id, field, value, rerender = false) {
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) =>
        scenario.id === id ? { ...scenario, [field]: value } : scenario
      ),
    };
    this._status = '';
    this._error = '';
    if (rerender) {
      this._render();
    }
  }

  _normalizeScenarioForUi(scenario) {
    const conditions = this._normalizeConditionsForUi(scenario);
    return {
      ...scenario,
      conditions,
    };
  }

  _serializeScenario(scenario) {
    const conditions = (Array.isArray(scenario.conditions) ? scenario.conditions : [])
      .flatMap((condition) => this._serializeCondition(condition))
      .filter(Boolean);
    const payload = {
      id: scenario.id,
      name: scenario.name,
      script_entity_id: scenario.script_entity_id,
      conditions,
    };

    if (conditions.length === 1) {
      payload.parent_type = conditions[0].parent_type ?? '';
      if (conditions[0].children_type) {
        payload.children_type = conditions[0].children_type;
      }
      if (conditions[0].children_direct_type) {
        payload.children_direct_type = conditions[0].children_direct_type;
      }
    }

    return payload;
  }

  _normalizeConditionsForUi(scenario) {
    if (Array.isArray(scenario.conditions) && scenario.conditions.length) {
      return scenario.conditions.map((condition) => this._normalizeConditionForUi(condition));
    }

    const parents = String(scenario.parent_type ?? '')
      .split(';')
      .map((value) => value.trim());
    const children = String(scenario.children_type ?? scenario.type ?? '')
      .split(';')
      .map((value) => value.trim());
    const directChildren = String(scenario.children_direct_type ?? '')
      .split(';')
      .map((value) => value.trim());
    const size = Math.max(parents.length, children.length, directChildren.length, 1);
    const conditions = [];

    for (let index = 0; index < size; index += 1) {
      const condition = this._normalizeConditionForUi({
        parent_type: parents[index] ?? '',
        children_type: children[index] ?? '',
        children_direct_type: directChildren[index] ?? '',
      });
      if (condition.parent_type || condition.children_type_enabled || condition.children_direct_type_enabled) {
        conditions.push(condition);
      }
    }

    return conditions.length ? conditions : [newCondition()];
  }

  _normalizeConditionForUi(condition) {
    const childrenType = String(condition.children_type ?? condition.type ?? '').trim();
    const childrenDirectType = String(condition.children_direct_type ?? '').trim();
    return {
      id: String(condition.id ?? generateConditionId()),
      parent_type: String(condition.parent_type ?? '').trim(),
      children_type: childrenType,
      children_type_enabled: childrenType !== '',
      children_direct_type: childrenDirectType,
      children_direct_type_enabled: childrenDirectType !== '',
    };
  }

  _serializeCondition(condition) {
    const parentType = String(condition.parent_type ?? '').trim();
    const childrenType = String(condition.children_type ?? '').trim();
    const childrenDirectType = String(condition.children_direct_type ?? '').trim();
    if (!parentType && !childrenType && !childrenDirectType) {
      return [];
    }

    const parentValues = parentType
      .split(';')
      .map((value) => value.trim());
    const childrenValues = childrenType
      .split(';')
      .map((value) => value.trim());
    const size = Math.max(parentValues.length, childrenValues.length, 1);
    const payloads = [];

    for (let index = 0; index < size; index += 1) {
      const nextParentType = parentValues[index] ?? '';
      const nextChildrenType = childrenValues[index] ?? '';
      if (!nextParentType && !nextChildrenType) {
        continue;
      }

      const payload = {
        parent_type: nextParentType,
      };

      if (condition.children_type_enabled && nextChildrenType) {
        payload.children_type = nextChildrenType;
      }
      if (condition.children_direct_type_enabled && childrenDirectType) {
        payload.children_direct_type = childrenDirectType;
      }

      payloads.push(payload);
    }

    return payloads;
  }

  _updateCondition(scenarioId, conditionId, field, value, rerender = false) {
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) => (
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
    this._status = '';
    this._error = '';
    if (rerender) {
      this._render();
    }
  }

  _enableConditionChildrenType(scenarioId, conditionId) {
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) => (
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
    this._status = '';
    this._error = '';
    this._render();
  }

  _disableConditionChildrenType(scenarioId, conditionId) {
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) => (
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
    this._status = '';
    this._error = '';
    this._render();
  }

  _enableConditionChildrenDirectType(scenarioId, conditionId) {
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) => (
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
    this._status = '';
    this._error = '';
    this._render();
  }

  _disableConditionChildrenDirectType(scenarioId, conditionId) {
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) => (
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
    this._status = '';
    this._error = '';
    this._render();
  }

  _addCondition(scenarioId) {
    const condition = newCondition();
    this._expandedConditions.add(condition.id);
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) => (
        scenario.id === scenarioId
          ? { ...scenario, conditions: [...scenario.conditions, condition] }
          : scenario
      )),
    };
    this._status = '';
    this._error = '';
    this._render();
  }

  _removeCondition(scenarioId, conditionId) {
    this._expandedConditions.delete(conditionId);
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.map((scenario) => {
        if (scenario.id !== scenarioId) {
          return scenario;
        }
        const nextConditions = scenario.conditions.filter((condition) => condition.id !== conditionId);
        return {
          ...scenario,
          conditions: nextConditions.length ? nextConditions : [newCondition()],
        };
      }),
    };
    this._status = '';
    this._error = '';
    this._render();
  }

  _addScenario() {
    const scenario = newScenario();
    this._expandedScenarios.add(scenario.id);
    this._config = {
      ...this._config,
      scenarios: [...this._config.scenarios, scenario],
    };
    this._status = '';
    this._render();
    window.requestAnimationFrame(() => this._scrollScenarioIntoView(scenario.id));
  }

  _scrollScenarioIntoView(id) {
    const selectorId = globalThis.CSS?.escape ? globalThis.CSS.escape(id) : id;
    const element = this.shadowRoot.querySelector(`[data-scenario-card-id="${selectorId}"]`);
    element?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  _removeScenario(id) {
    this._expandedScenarios.delete(id);
    this._config = {
      ...this._config,
      scenarios: this._config.scenarios.filter((scenario) => scenario.id !== id),
    };
    this._status = '';
    this._render();
  }

  _validate() {
    if (!this._config.base_url.trim()) {
      return 'Укажите base URL для опроса.';
    }
    if (!this._config.client_id.trim()) {
      return 'Укажите client_id.';
    }
    const invalidScenario = this._config.scenarios.find(
      (scenario) => {
        const conditions = Array.isArray(scenario.conditions) ? scenario.conditions : [];
        if (!conditions.length) {
          return true;
        }
        const invalidCondition = conditions.find((condition) => {
          const childrenType = String(condition.children_type ?? '').trim();
          const childrenDirectType = String(condition.children_direct_type ?? '').trim();
          const parentType = String(condition.parent_type ?? '').trim();

          if (!parentType && !childrenType && !childrenDirectType) {
            return true;
          }
          if (condition.children_type_enabled && !childrenType) {
            return true;
          }
          if (condition.children_direct_type_enabled && !childrenDirectType) {
            return true;
          }
          return false;
        });

        return Boolean(invalidCondition) || !String(scenario.script_entity_id ?? '').trim();
      }
    );
    if (invalidScenario) {
      return 'У каждого сценария должно быть хотя бы одно условие. В условии должен быть заполнен parent_type, children_type или children_direct_type. Если children_type или children_direct_type добавлены, они не могут быть пустыми. Также должен быть выбран script.';
    }
    return '';
  }

  _buildConfigPayload() {
    return {
      base_url: this._config.base_url,
      client_id: this._config.client_id,
      timer_alarm_token: this._config.timer_alarm_token,
      timer_alarm_device_ids: this._timerAlarmDeviceIdsForSave(),
      timeout: Number(this._config.timeout) || 10,
      scenarios: this._config.scenarios.map((scenario) => this._serializeScenario(scenario)),
    };
  }

  _downloadJson() {
    const payload = this._buildConfigPayload();
    const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dialog-custom-ui-config.json';
    link.click();
    URL.revokeObjectURL(url);
    this._status = 'JSON скачан.';
    this._error = '';
    this._render();
  }

  _openJsonFilePicker() {
    this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click();
  }

  async _importJsonFile(file) {
    if (!file) {
      return;
    }

    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw);
      const scenarios = Array.isArray(parsed.scenarios) ? parsed.scenarios : [];
      this._config = {
        ...DEFAULT_CONFIG,
        ...parsed,
        timeout: Number(parsed.timeout) || 10,
        timer_alarm_device_ids: this._normalizeTimerAlarmDeviceIdsForUi(
          parsed.timer_alarm_device_ids ?? []
        ),
        scenarios: scenarios.map((scenario) => this._normalizeScenarioForUi(scenario)),
      };
      this._expandedScenarios = new Set(this._config.scenarios.map((scenario) => scenario.id));
      this._status = 'JSON загружен в форму.';
      this._error = '';
    } catch (err) {
      this._error = err?.message || 'Не удалось загрузить JSON.';
      this._status = '';
    }

    const input = this.shadowRoot.querySelector('[data-action="import-json-input"]');
    if (input) {
      input.value = '';
    }
    this._render();
  }

  async _save() {
    const validationError = this._validate();
    if (validationError) {
      this._error = validationError;
      this._status = '';
      this._render();
      return;
    }

    this._saving = true;
    this._error = '';
    this._status = '';
    this._render();

    try {
      const payload = this._buildConfigPayload();
      const serializedScenarios = payload.scenarios;
      await this._hass.callWS({
        type: 'dialog_custom_ui/save_config',
        ...payload,
      });
      this._config = {
        ...this._config,
        timer_alarm_device_ids: this._normalizeTimerAlarmDeviceIdsForUi(
          payload.timer_alarm_device_ids
        ),
        scenarios: serializedScenarios.map((scenario) => this._normalizeScenarioForUi(scenario)),
      };
      this._status = 'Настройки сохранены.';
    } catch (err) {
      this._error = err?.message || 'Не удалось сохранить настройки.';
    } finally {
      this._saving = false;
      this._render();
    }
  }

  _swallowUiEvent(event) {
    event.stopPropagation();
  }

  _bindEvents() {
    const root = this.shadowRoot;

    root.querySelectorAll('[data-tab]').forEach((element) => {
      element.addEventListener('click', () => this._setActiveTab(element.dataset.tab));
    });

    root.querySelector('[data-action="save"]')?.addEventListener('click', () => this._save());
    root.querySelector('[data-action="add-scenario"]')?.addEventListener('click', () => this._addScenario());
    root.querySelector('[data-action="refresh-logs"]')?.addEventListener('click', () => this._loadLogs());
    root.querySelector('[data-action="refresh-commands"]')?.addEventListener('click', () => this._loadCommandsPage(this._commandsPage || 1));
    root.querySelector('[data-action="create-command"]')?.addEventListener('click', () => this._openCreateCommandModal());
    root.querySelector('[data-action="commands-prev-page"]')?.addEventListener('click', () => this._loadCommandsPage(this._commandsPage - 1));
    root.querySelector('[data-action="commands-next-page"]')?.addEventListener('click', () => this._loadCommandsPage(this._commandsPage + 1));
    root.querySelectorAll('[data-create-scenario-tab]').forEach((element) => {
      element.addEventListener('click', () => this._setCreateScenarioTab(element.dataset.createScenarioTab));
    });
    root.querySelectorAll('[data-action="edit-command"]').forEach((element) => {
      element.addEventListener('click', () => this._openEditCommandModal(element.dataset.commandId));
    });
    root.querySelectorAll('[data-action="close-command-modal"]').forEach((element) => {
      element.addEventListener('click', () => this._closeCommandModal());
    });
    root.querySelector('[data-action="save-command-modal"]')?.addEventListener('click', () => this._saveCommandModal());
    root.querySelector('[data-action="download-json"]')?.addEventListener('click', () => this._downloadJson());
    root.querySelector('[data-action="upload-json"]')?.addEventListener('click', () => this._openJsonFilePicker());
    root.querySelector('[data-action="import-json-input"]')?.addEventListener('change', (event) => {
      const [file] = event.currentTarget.files || [];
      this._importJsonFile(file);
    });
    root.querySelector('[data-action="toggle-device-accordion"]')?.addEventListener('click', () => this._toggleDeviceAccordion());
    root.querySelector('[data-action="add-device-id"]')?.addEventListener('click', () => this._addTimerAlarmDeviceId());
    root.querySelectorAll('[data-action="add-condition"]').forEach((element) => {
      element.addEventListener('click', () => this._addCondition(element.dataset.scenarioId));
    });
    root.querySelectorAll('[data-action="enable-condition-children-type"]').forEach((element) => {
      element.addEventListener('click', () => this._enableConditionChildrenType(
        element.dataset.scenarioId,
        element.dataset.conditionId,
      ));
    });
    root.querySelectorAll('[data-action="disable-condition-children-type"]').forEach((element) => {
      element.addEventListener('click', () => this._disableConditionChildrenType(
        element.dataset.scenarioId,
        element.dataset.conditionId,
      ));
    });
    root.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach((element) => {
      element.addEventListener('click', () => this._enableConditionChildrenDirectType(
        element.dataset.scenarioId,
        element.dataset.conditionId,
      ));
    });
    root.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach((element) => {
      element.addEventListener('click', () => this._disableConditionChildrenDirectType(
        element.dataset.scenarioId,
        element.dataset.conditionId,
      ));
    });

    root.querySelectorAll('[data-toggle-scenario]').forEach((element) => {
      element.addEventListener('click', () => this._toggleScenario(element.dataset.toggleScenario));
    });
    root.querySelectorAll('[data-toggle-condition]').forEach((element) => {
      element.addEventListener('click', () => this._toggleCondition(element.dataset.toggleCondition));
    });

    root.querySelectorAll('input, select, button, textarea').forEach((element) => {
      ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'focusin'].forEach((eventName) => {
        element.addEventListener(eventName, (event) => this._swallowUiEvent(event));
      });
    });

    root.querySelectorAll('[data-config-field]').forEach((element) => {
      element.addEventListener('input', (event) => {
        this._updateConfigField(event.currentTarget.dataset.configField, event.currentTarget.value, false);
      });
      element.addEventListener('change', (event) => {
        this._updateConfigField(event.currentTarget.dataset.configField, event.currentTarget.value, false);
      });
    });

    root.querySelectorAll('[data-timer-device-index]').forEach((element) => {
      const index = Number(element.dataset.timerDeviceIndex);
      element.addEventListener('input', (event) => {
        this._updateTimerAlarmDeviceId(index, event.currentTarget.value);
      });
      element.addEventListener('change', (event) => {
        this._updateTimerAlarmDeviceId(index, event.currentTarget.value);
        this._render();
      });
    });
    root.querySelectorAll('[data-action="remove-device-id"]').forEach((element) => {
      element.addEventListener('click', () => this._removeTimerAlarmDeviceId(Number(element.dataset.timerDeviceIndex)));
    });

    root.querySelectorAll('[data-scenario-id][data-scenario-field]').forEach((element) => {
      const field = element.dataset.scenarioField;
      const id = element.dataset.scenarioId;
      if (element.tagName === 'SELECT') {
        element.addEventListener('change', (event) => {
          this._updateScenario(id, field, event.currentTarget.value, true);
        });
      } else {
        element.addEventListener('input', (event) => {
          this._updateScenario(id, field, event.currentTarget.value, false);
        });
        element.addEventListener('change', (event) => {
          this._updateScenario(id, field, event.currentTarget.value, true);
        });
      }
    });

    root.querySelectorAll('[data-scenario-id][data-condition-id][data-condition-field]').forEach((element) => {
      const scenarioId = element.dataset.scenarioId;
      const conditionId = element.dataset.conditionId;
      const field = element.dataset.conditionField;
      element.addEventListener('input', (event) => {
        this._updateCondition(scenarioId, conditionId, field, event.currentTarget.value, false);
      });
      element.addEventListener('change', (event) => {
        this._updateCondition(scenarioId, conditionId, field, event.currentTarget.value, true);
      });
    });

    root.querySelectorAll('[data-remove-id]').forEach((element) => {
      element.addEventListener('click', () => this._removeScenario(element.dataset.removeId));
    });
    root.querySelectorAll('[data-remove-condition-id]').forEach((element) => {
      element.addEventListener('click', () => this._removeCondition(
        element.dataset.scenarioId,
        element.dataset.removeConditionId,
      ));
    });

    root.querySelectorAll('[data-command-draft-field]').forEach((element) => {
      const field = element.dataset.commandDraftField;
      const eventName = element.tagName === 'TEXTAREA' || element.tagName === 'INPUT'
        ? 'input'
        : 'change';
      element.addEventListener(eventName, (event) => {
        const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
        this._updateCommandDraft(field, value);
      });
      if (element.type === 'checkbox') {
        element.addEventListener('change', (event) => {
          this._updateCommandDraft(field, event.currentTarget.checked);
        });
      }
    });

    const createScenarioElement = root.querySelector('dialog-custom-ui-create-scenario');
    if (createScenarioElement) {
      createScenarioElement.hass = this._hass;
      createScenarioElement.config = {
        base_url: this._config.base_url,
        timer_alarm_token: this._config.timer_alarm_token,
      };
    }
  }

  _renderScenarios() {
    const scripts = this._scripts();
    const scenarioMarkup = this._config.scenarios.length
        ? this._config.scenarios.map((scenario, index) => {
          const isExpanded = this._expandedScenarios.has(scenario.id);
          const conditionsMarkup = scenario.conditions.map((condition, conditionIndex) => `
            ${(() => {
              const isConditionExpanded = this._expandedConditions.has(condition.id);
              const previewParts = [];
              if (condition.parent_type) {
                previewParts.push(`Parent: ${escapeHtml(condition.parent_type)}`);
              }
              if (condition.children_type_enabled && condition.children_type) {
                previewParts.push(`Children: ${escapeHtml(condition.children_type)}`);
              }
              if (condition.children_direct_type_enabled && condition.children_direct_type) {
                previewParts.push(`Children Direct: ${escapeHtml(condition.children_direct_type)}`);
              }
              const preview = previewParts.join(' • ') || 'Пустое условие';
              return `
            <div class="condition-card ${isConditionExpanded ? 'expanded' : 'collapsed'}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${escapeHtml(condition.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">Условие ${conditionIndex + 1}</span>
                  <span class="condition-preview">${preview}</span>
                </span>
                <span class="condition-header-side">
                  <span class="condition-accordion-icon">${isConditionExpanded ? '−' : '+'}</span>
                </span>
              </button>
              <div class="condition-body ${isConditionExpanded ? 'open' : 'hidden'}">
                <div class="condition-actions">
                  ${scenario.conditions.length > 1 ? `
                    <button
                      type="button"
                      class="ghost remove-inline-button"
                      data-scenario-id="${escapeHtml(scenario.id)}"
                      data-remove-condition-id="${escapeHtml(condition.id)}"
                    >Удалить условие</button>
                  ` : ''}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${escapeHtml(scenario.id)}"
                      data-condition-id="${escapeHtml(condition.id)}"
                      data-condition-field="parent_type"
                      value="${escapeHtml(condition.parent_type)}"
                      placeholder="status_door"
                    />
                    <small>Обязателен только если не задан children_type в этом же условии.</small>
                  </div>
                  ${condition.children_type_enabled ? `
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-type"
                          data-scenario-id="${escapeHtml(scenario.id)}"
                          data-condition-id="${escapeHtml(condition.id)}"
                        >Удалить</button>
                      </div>
                      <input
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                        data-condition-field="children_type"
                        value="${escapeHtml(condition.children_type ?? '')}"
                        placeholder="some_subcommand"
                      />
                      <small>Необязателен. <code>all</code> означает любой непустой children_type именно для этого условия.</small>
                    </div>
                  ` : `
                    <div class="scenario-type-field field-placeholder">
                      <div class="field-title-row">
                        <span>Children Type</span>
                      </div>
                      <button
                        type="button"
                        class="ghost add-inline-button"
                        data-action="enable-condition-children-type"
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                      >Добавить children_type</button>
                      <small>Если не добавлять, условие будет проверяться только по parent_type.</small>
                    </div>
                  `}
                  ${condition.children_direct_type_enabled ? `
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-direct-type"
                          data-scenario-id="${escapeHtml(scenario.id)}"
                          data-condition-id="${escapeHtml(condition.id)}"
                        >Удалить</button>
                      </div>
                      <input
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                        data-condition-field="children_direct_type"
                        value="${escapeHtml(condition.children_direct_type ?? '')}"
                        placeholder="direct_subcommand"
                      />
                      <small>Необязателен. Если direct type не пришел во входящем payload, это условие просто не ограничивается по нему.</small>
                    </div>
                  ` : `
                    <div class="scenario-type-field field-placeholder">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                      </div>
                      <button
                        type="button"
                        class="ghost add-inline-button"
                        data-action="enable-condition-children-direct-type"
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                      >Добавить children_direct_type</button>
                      <small>Если не добавлять, условие будет проверяться без учета direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `;
            })()}
          `).join('');
          return `
            <section class="scenario-card ${isExpanded ? 'expanded' : 'collapsed'}" data-scenario-card-id="${escapeHtml(scenario.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${escapeHtml(scenario.id)}">
                  <span class="scenario-toggle-icon">${isExpanded ? '−' : '+'}</span>
                  <span>
                    <span class="scenario-kicker">Сценарий ${index + 1}</span>
                    <span class="scenario-title">${escapeHtml(scenario.name || 'Без названия')}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${escapeHtml(scenario.id)}">Удалить</button>
              </div>
              <div class="scenario-body ${isExpanded ? 'open' : 'hidden'}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>Название блока</span>
                    <input data-scenario-id="${escapeHtml(scenario.id)}" data-scenario-field="name" value="${escapeHtml(scenario.name)}" placeholder="Например: Проверить дверь" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">Условия</span>
                        <small>Через <code>+</code> можно добавить ещё пару <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. Если в <code>Parent Type</code> указать несколько значений через <code>;</code>, после сохранения они автоматически разложатся на отдельные условия.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${escapeHtml(scenario.id)}">+ Добавить условие</button>
                    </div>
                    <div class="conditions-list">${conditionsMarkup}</div>
                  </div>
                  <label class="field-span-2">
                    <span>Скрипт Home Assistant</span>
                    <select data-scenario-id="${escapeHtml(scenario.id)}" data-scenario-field="script_entity_id">
                      <option value="">Выберите script.*</option>
                      ${scripts.map((script) => {
                        const selected = script.entity_id === scenario.script_entity_id ? 'selected' : '';
                        const label = script.attributes.friendly_name || script.entity_id;
                        return `<option value="${escapeHtml(script.entity_id)}" ${selected}>${escapeHtml(label)} (${escapeHtml(script.entity_id)})</option>`;
                      }).join('')}
                    </select>
                  </label>
                </div>
              </div>
            </section>
          `;
        }).join('')
      : '<div class="empty">Сценарии пока не добавлены. Нажмите плюс и создайте первое правило маршрутизации.</div>';

    return `
      <section class="hero-card">
        <h1>Scenarios</h1>
        <p>Здесь редактируются правила сценариев. Подключение вынесено во вкладку настроек.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="add-scenario">+ Добавить сценарий</button>
          <button type="button" class="primary" data-action="save" ${this._saving ? 'disabled' : ''}>${this._saving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
        ${this._error ? `<div class="status error">${escapeHtml(this._error)}</div>` : ''}
        ${this._status ? `<div class="status ok">${escapeHtml(this._status)}</div>` : ''}
      </section>
      <div class="scenario-list">${scenarioMarkup}</div>
      <section class="help-card">
        <div><strong>Внешний запрос</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check \
  -H "Content-Type: application/json" \
  -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>Что передается в скрипт</strong></div>
        <div>При совпадении правила вызывается выбранный <code>script.*</code> и получает переменные: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${escapeHtml(EXAMPLE_PAYLOAD)}</code></pre>
      </section>
    `;
  }

  _renderLogs() {
    const logMarkup = this._logs.length
      ? this._logs.map((item) => `
          <div class="log-item ${escapeHtml(item.level)}">
            <div class="log-meta">
              <span class="log-time">${escapeHtml(item.ts)}</span>
              <span class="log-level">${escapeHtml(item.level)}</span>
            </div>
            <div class="log-message">${escapeHtml(item.message)}</div>
          </div>
        `).join('')
      : '<div class="empty">Логов пока нет.</div>';

    return `
      <section class="hero-card">
        <h1>Logs</h1>
        <p>Показываются только последние 10 событий: отправка запроса, 204, ошибки, совпадение сценария и запуск скрипта.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="refresh-logs" ${this._loadingLogs ? 'disabled' : ''}>${this._loadingLogs ? 'Обновление...' : 'Обновить'}</button>
        </div>
      </section>
      <section class="help-card logs-card">
        ${logMarkup}
      </section>
    `;
  }

  _renderTimerAlarm() {
    if (!this._timerAlarmLoaded) {
      if (!this._timerAlarmLoading) {
        this._ensureTimerAlarmModule();
      }

      return `
        <section class="hero-card">
          <h1>Timer / Alarm</h1>
          <div class="status ok">Модуль timer/alarm загружается...</div>
        </section>
      `;
    }

    return `
      <section class="hero-card">
        <h1>Timer / Alarm</h1>
      </section>
      <dialog-custom-ui-timer-alarm></dialog-custom-ui-timer-alarm>
    `;
  }

  _renderJsonTools() {
    const payload = this._buildConfigPayload();

    return `
      <section class="hero-card">
        <h1>JSON</h1>
        <p>Можно скачать текущую конфигурацию в файл или загрузить свой JSON обратно в форму.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="download-json">Скачать JSON</button>
          <button type="button" class="primary" data-action="upload-json">Загрузить JSON</button>
          <input type="file" accept=".json,application/json" data-action="import-json-input" hidden />
        </div>
        ${this._error ? `<div class="status error">${escapeHtml(this._error)}</div>` : ''}
        ${this._status ? `<div class="status ok">${escapeHtml(this._status)}</div>` : ''}
      </section>
      <section class="help-card">
        <div><strong>Предпросмотр текущего JSON</strong></div>
        <pre><code>${escapeHtml(JSON.stringify(payload, null, 2))}</code></pre>
      </section>
    `;
  }

  _renderCreateScenarioPrimary() {
    const canGoPrev = this._commandsPage > 1 && !this._commandsLoading;
    const totalPages = Math.max(1, Math.ceil((this._commandsTotal || 1) / COMMANDS_PAGE_SIZE));
    const canGoNext = this._commandsPage < totalPages && !this._commandsLoading;
    const listMarkup = this._commandsLoading
      ? '<div class="empty">Загрузка команд...</div>'
      : this._commands.length
        ? this._commands.map((item) => `
            <button
              type="button"
              class="command-item"
              data-action="edit-command"
              data-command-id="${escapeHtml(item._id)}"
            >
              <span class="command-item-title">${escapeHtml(item.title || 'Без названия')}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.componentDialog?.type || 'type: -')}</span>
                <span>${escapeHtml(item.uuidDialog || 'uuid: -')}</span>
              </span>
            </button>
          `).join('')
        : '<div class="empty">Команд пока нет.</div>';

    return `
      <section class="hero-card">
        <h1>Создать сценарий</h1>
        <p>Основные команды: загрузка по 20 элементов с сервера и открытие модального окна для создания/редактирования.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="refresh-commands" ${this._commandsLoading ? 'disabled' : ''}>${this._commandsLoading ? 'Обновление...' : 'Обновить список'}</button>
          <button type="button" class="primary" data-action="create-command">+ Создать сценарий</button>
        </div>
        ${this._commandsError ? `<div class="status error">${escapeHtml(this._commandsError)}</div>` : ''}
        ${this._status ? `<div class="status ok">${escapeHtml(this._status)}</div>` : ''}
      </section>
      <section class="help-card command-list">
        ${listMarkup}
        <div class="command-pagination">
          <button type="button" class="ghost" data-action="commands-prev-page" ${canGoPrev ? '' : 'disabled'}>Назад</button>
          <span>Страница ${this._commandsPage} из ${totalPages}</span>
          <button type="button" class="ghost" data-action="commands-next-page" ${canGoNext ? '' : 'disabled'}>Вперед</button>
        </div>
      </section>
    `;
  }

  _renderCreateScenarioStub(title, description) {
    return `
      <section class="hero-card">
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
      </section>
      <section class="help-card">
        <div class="empty">Раздел подготовлен. Можно добавить логику и API для этого типа команд следующим шагом.</div>
      </section>
    `;
  }

  _renderCommandModal() {
    if (!this._commandsModalOpen) {
      return '';
    }
    const draft = this._commandsModalDraft;
    const title = this._commandsModalMode === 'edit' ? 'Редактировать сценарий' : 'Создать сценарий';

    return `
      <div class="command-modal-backdrop" data-action="close-command-modal"></div>
      <section class="command-modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
        <div class="command-modal-header">
          <h2>${escapeHtml(title)}</h2>
          <button type="button" class="ghost" data-action="close-command-modal" ${this._commandsModalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
        <div class="command-modal-body">
          <div class="command-modal-grid">
            <label>
              <span>Title</span>
              <input data-command-draft-field="title" value="${escapeHtml(draft.title)}" placeholder="Название сценария" />
            </label>
            <label>
              <span>uuidDialog</span>
              <input data-command-draft-field="uuidDialog" value="${escapeHtml(draft.uuidDialog)}" placeholder="xxxx-xxxx-xxxx-xxxx" />
            </label>
            <label>
              <span>componentDialog.type</span>
              <input data-command-draft-field="type" value="${escapeHtml(draft.type)}" placeholder="continue_cleaning" />
            </label>
            <label>
              <span>answerType</span>
              <input data-command-draft-field="answerType" value="${escapeHtml(draft.answerType)}" placeholder="default" />
            </label>
            <label class="checkbox-row">
              <input type="checkbox" data-command-draft-field="endStatus" ${draft.endStatus ? 'checked' : ''} />
              <span>endStatus</span>
            </label>
            <label class="checkbox-row">
              <input type="checkbox" data-command-draft-field="forwardText" ${draft.forwardText ? 'checked' : ''} />
              <span>forwardText</span>
            </label>
            <label class="field-span-2">
              <span>voiceCommands (JSON, nullable)</span>
              <textarea data-command-draft-field="voiceCommands" rows="3" placeholder="null или JSON">${escapeHtml(draft.voiceCommands)}</textarea>
            </label>
            <label class="field-span-2">
              <span>nextDirectControl (JSON array)</span>
              <textarea data-command-draft-field="nextDirectControl" rows="3">${escapeHtml(draft.nextDirectControl)}</textarea>
            </label>
            <label class="field-span-2">
              <span>voiceResponseArray (JSON array)</span>
              <textarea data-command-draft-field="voiceResponseArray" rows="3">${escapeHtml(draft.voiceResponseArray)}</textarea>
            </label>
            <label class="field-span-2">
              <span>nextAction (JSON array)</span>
              <textarea data-command-draft-field="nextAction" rows="3">${escapeHtml(draft.nextAction)}</textarea>
            </label>
          </div>
        </div>
        <div class="command-modal-footer">
          <button type="button" class="ghost" data-action="close-command-modal" ${this._commandsModalSaving ? 'disabled' : ''}>Отмена</button>
          <button type="button" class="primary" data-action="save-command-modal" ${this._commandsModalSaving ? 'disabled' : ''}>${this._commandsModalSaving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
    `;
  }

  _renderCreateScenario() {
    return `
      <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
    `;
  }

  _render() {
    const content = this._activeTab === 'logs'
      ? this._renderLogs()
      : this._activeTab === 'scenarios'
        ? this._renderScenarios()
      : this._activeTab === 'create-scenario'
        ? this._renderCreateScenario()
      : this._activeTab === 'timer-alarm'
        ? this._renderTimerAlarm()
      : this._activeTab === 'json'
        ? this._renderJsonTools()
        : this._renderSettings();

    const markup = `
      <style>
        :host {
          --panel-bg: linear-gradient(160deg, #f6efe7 0%, #eef3ff 100%);
          --card-bg: rgba(255, 255, 255, 0.9);
          --border: rgba(34, 45, 67, 0.14);
          --text: #1b2432;
          --muted: #5c667a;
          --accent: #a64b2a;
          --accent-2: #234f7d;
          display: block;
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          box-sizing: border-box;
          color: var(--text);
          background: var(--panel-bg);
          font-family: "Segoe UI", "Trebuchet MS", sans-serif;
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
          min-width: 0;
        }
        .page {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px;
          overflow-x: hidden;
        }
        .hero {
          display: grid;
          gap: 10px;
          margin-bottom: 20px;
        }
        .hero-card, .scenario-card, .help-card {
          background: var(--card-bg);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          border-radius: 20px;
          box-shadow: 0 18px 40px rgba(31, 41, 55, 0.08);
        }
        .hero-card {
          padding: 24px;
        }
        .hero h1 {
          margin: 0;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .hero p {
          margin: 0;
          color: var(--muted);
          max-width: 860px;
        }
        .tabs {
          display: flex;
          gap: 8px;
          width: 100%;
          flex-wrap: wrap;
          padding: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid var(--border);
        }
        .tab-button {
          border: none;
          border-radius: 999px;
          padding: 10px 16px;
          font: inherit;
          cursor: pointer;
          background: transparent;
          color: var(--muted);
        }
        .tab-button.active {
          color: white;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
        }
        .panel-shell {
          display: grid;
          gap: 8px;
          width: 100%;
          padding: 10px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid var(--border);
          box-shadow: 0 10px 24px rgba(31, 41, 55, 0.08);
        }
        .panel-shell .tabs {
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
        }
        .subtabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .subtab-button {
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          color: var(--muted);
          padding: 10px 14px;
          cursor: pointer;
        }
        .subtab-button.active {
          color: #fff;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          border-color: transparent;
        }
        .command-list {
          display: grid;
          gap: 10px;
        }
        .command-item {
          display: grid;
          gap: 8px;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.72);
          color: var(--text);
          padding: 14px;
          text-align: left;
        }
        .command-item-title {
          font-size: 16px;
          font-weight: 700;
        }
        .command-item-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          color: var(--muted);
          font-size: 13px;
        }
        .command-pagination {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 8px;
        }
        .command-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          z-index: 40;
        }
        .command-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(860px, calc(100vw - 32px));
          max-height: calc(100vh - 40px);
          overflow: auto;
          padding: 18px;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.98);
          z-index: 41;
          display: grid;
          gap: 14px;
        }
        .command-modal-header,
        .command-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .command-modal-header h2 {
          margin: 0;
          font-size: 24px;
        }
        .command-modal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        textarea {
          width: 100%;
          max-width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          font: inherit;
          color: var(--text);
          background: rgba(255, 255, 255, 0.9);
          resize: vertical;
        }
        .checkbox-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: end;
        }
        .checkbox-row input {
          width: auto;
        }
        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: 16px;
          margin-top: 20px;
          align-items: start;
        }
        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .field-span-2 {
          grid-column: 1 / -1;
        }
        .field-narrow {
          max-width: 220px;
        }
        .field-grow {
          flex: 1 1 auto;
        }
        .field-placeholder {
          display: grid;
          gap: 8px;
          min-width: 0;
          align-content: start;
        }
        .scenario-type-field {
          display: grid;
          gap: 8px;
          min-width: 0;
          align-content: start;
        }
        .settings-accordion {
          margin-top: 20px;
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.72);
          display: grid;
          gap: 14px;
        }
        .settings-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0;
          border: none;
          background: transparent;
          color: inherit;
          text-align: left;
          font: inherit;
          cursor: pointer;
        }
        .settings-accordion-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(35, 79, 125, 0.08);
          color: var(--accent-2);
          font-size: 18px;
          line-height: 1;
          flex: 0 0 auto;
        }
        .settings-accordion-body {
          display: grid;
          gap: 14px;
        }
        .settings-accordion-body.hidden {
          display: none;
        }
        .settings-accordion-note {
          margin: 0;
          color: var(--muted);
        }
        .device-list {
          display: grid;
          gap: 10px;
        }
        .device-row {
          display: flex;
          gap: 10px;
          align-items: end;
        }
        .device-remove-button {
          flex: 0 0 auto;
          align-self: end;
        }
        .conditions-block {
          display: grid;
          gap: 14px;
        }
        .conditions-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
          flex-wrap: wrap;
        }
        .conditions-list {
          display: grid;
          gap: 12px;
        }
        .condition-card {
          display: grid;
          gap: 12px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.72);
        }
        .condition-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 0;
          border: none;
          background: transparent;
          color: inherit;
          text-align: left;
        }
        .condition-heading {
          display: grid;
          gap: 4px;
          min-width: 0;
          flex: 1 1 auto;
        }
        .condition-header-side {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 0 0 auto;
        }
        .condition-preview {
          font-size: 13px;
          color: var(--muted);
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        .condition-accordion-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(35, 79, 125, 0.08);
          color: var(--accent-2);
          font-size: 18px;
          line-height: 1;
          flex: 0 0 auto;
        }
        .condition-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .condition-body.hidden {
          display: none;
        }
        .condition-body.open {
          display: grid;
          gap: 12px;
        }
        .condition-title,
        .section-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        .condition-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .field-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: nowrap;
          min-height: 24px;
        }
        .field-title-row > span {
          min-width: 0;
        }
        .add-inline-button {
          justify-self: start;
          max-width: 100%;
          white-space: normal;
          word-break: break-word;
        }
        .remove-inline-button {
          padding: 6px 12px;
          font-size: 12px;
          line-height: 1.2;
        }
        label {
          display: grid;
          gap: 8px;
          min-width: 0;
        }
        label span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        .field-title-row > span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        input, select {
          width: 100%;
          max-width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          font: inherit;
          color: var(--text);
          background: rgba(255, 255, 255, 0.9);
        }
        code, pre, small, .log-message, .scenario-title {
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        small {
          color: var(--muted);
          line-height: 1.35;
        }
        .toolbar {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        button {
          border: none;
          border-radius: 999px;
          padding: 12px 18px;
          font: inherit;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        button:hover {
          transform: translateY(-1px);
        }
        button.primary {
          color: white;
          background: linear-gradient(135deg, var(--accent), #d4743d);
        }
        button.secondary {
          color: white;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
        }
        button.compact-button {
          padding: 8px 14px;
          font-size: 13px;
        }
        button.ghost {
          background: rgba(34, 45, 67, 0.06);
          color: var(--text);
        }
        .scenario-toggle {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          flex: 1 1 auto;
          padding: 0;
          background: transparent;
          color: var(--text);
          text-align: left;
        }
        .scenario-toggle-icon {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          background: rgba(34, 45, 67, 0.08);
          font-size: 20px;
          line-height: 1;
          transform: translateY(-1px);
        }
        button:disabled {
          opacity: 0.5;
          cursor: progress;
          transform: none;
        }
        .status {
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          font-size: 14px;
        }
        .status.error {
          background: rgba(180, 43, 43, 0.1);
          color: #8a2323;
        }
        .status.ok {
          background: rgba(35, 111, 73, 0.1);
          color: #155c3a;
        }
        .scenario-list {
          display: grid;
          gap: 16px;
          width: 100%;
        }
        .scenario-card {
          padding: 18px;
          width: 100%;
          max-width: 100%;
        }
        .scenario-header {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 0;
        }
        .scenario-card.expanded .scenario-header {
          margin-bottom: 16px;
        }
        .scenario-kicker {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 4px;
        }
        .scenario-title {
          display: block;
          font-size: 20px;
          font-weight: 700;
        }
        .scenario-body.hidden {
          display: none;
        }
        .scenario-body.open {
          display: block;
        }
        .empty, .help-card {
          padding: 20px;
        }
        .help-card pre {
          margin: 10px 0 0;
          padding: 14px;
          max-width: 100%;
          overflow: auto;
          white-space: pre-wrap;
          border-radius: 14px;
          background: #17202b;
          color: #f5f7fb;
          font-size: 13px;
        }
        .help-card code {
          font-family: Consolas, monospace;
        }
        .logs-card {
          display: grid;
          gap: 12px;
        }
        .log-item {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.6);
        }
        .log-item.request { border-left: 4px solid #4c78a8; }
        .log-item.success { border-left: 4px solid #2f855a; }
        .log-item.error { border-left: 4px solid #c53030; }
        .log-item.match { border-left: 4px solid #805ad5; }
        .log-item.idle { border-left: 4px solid #718096; }
        .log-item.info { border-left: 4px solid #dd6b20; }
        .log-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 6px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
        }
        .log-message {
          font-size: 14px;
          line-height: 1.4;
        }
        @media (max-width: 900px) {
          .scenario-grid,
          .condition-grid,
          .command-modal-grid {
            grid-template-columns: 1fr;
          }
          .field-span-2 {
            grid-column: auto;
          }
          .field-narrow {
            max-width: none;
          }
          .device-row {
            flex-direction: column;
            align-items: stretch;
          }
        }
        @media (max-width: 700px) {
          .command-modal {
            inset: 0;
            transform: none;
            width: 100vw;
            height: 100vh;
            max-height: none;
            border-radius: 0;
            border: none;
            padding: 16px;
          }
        }
        @media (max-width: 800px) {
          .page {
            padding: 16px;
          }
          .hero h1 {
            font-size: 28px;
          }
        }
      </style>
      <div class="page">
        <div class="hero">
          <section class="panel-shell">
            <div class="tabs">
              <button type="button" class="tab-button ${this._activeTab === 'scenarios' ? 'active' : ''}" data-tab="scenarios">Scenarios</button>
              <button type="button" class="tab-button ${this._activeTab === 'create-scenario' ? 'active' : ''}" data-tab="create-scenario">Create Scenario</button>
              <button type="button" class="tab-button ${this._activeTab === 'timer-alarm' ? 'active' : ''}" data-tab="timer-alarm">Timer / Alarm</button>
              <button type="button" class="tab-button ${this._activeTab === 'json' ? 'active' : ''}" data-tab="json">JSON</button>
              <button type="button" class="tab-button ${this._activeTab === 'logs' ? 'active' : ''}" data-tab="logs">Logs</button>
              <button type="button" class="tab-button ${this._activeTab === 'settings' ? 'active' : ''}" data-tab="settings">Settings</button>
            </div>
            ${content}
          </section>
        </div>
      </div>
    `;
    this._mountReact(markup);
    this._bindEvents();
  }
}

if (!customElements.get('dialog-custom-ui-panel')) {
  customElements.define('dialog-custom-ui-panel', DialogCustomUiPanel);
}




