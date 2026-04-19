import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './dialog-custom-ui-create-scenario.jsx';
import {
  DEFAULT_CONFIG,
  EXAMPLE_PAYLOAD,
  LOG_POLL_INTERVAL_MS,
  TIMER_ALARM_MODULE_URL,
} from './panel/constants.jsx';
import { PANEL_STYLES } from './panel/styles.jsx';
import { escapeHtml, generateConditionId, newCondition, newScenario } from './panel/utils.jsx';

const ShadowMarkup = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);
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
    this._addScenarioLockUntil = 0;
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

  _setActiveTab(tab) {
    this._activeTab = tab;
    this._status = '';
    this._error = '';
    this._render();
    if (tab === 'logs') {
      this._startLogsPolling();
    } else {
      this._stopLogsPolling();
      if (tab === 'timer-alarm') {
        this._ensureTimerAlarmModule();
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
    const now = Date.now();
    if (now < this._addScenarioLockUntil) {
      return;
    }
    this._addScenarioLockUntil = now + 300;

    const scenario = newScenario();
    this._expandedScenarios.add(scenario.id);
    this._config = {
      ...this._config,
      scenarios: [scenario, ...this._config.scenarios],
    };
    this._status = '';
    this._render();
    window.requestAnimationFrame(() => this._scrollScenarioIntoView(scenario.id));
  }

  _scrollScenarioIntoView(id) {
    const selectorId = globalThis.CSS?.escape ? globalThis.CSS.escape(id) : id;
    const element = this.shadowRoot.querySelector(`[data-scenario-card-id="${selectorId}"]`);
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
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
      await this._hass.callWS({
        type: 'dialog_custom_ui/save_config',
        ...payload,
      });
      const refreshed = await this._hass.callWS({ type: 'dialog_custom_ui/get_config' });
      this._config = {
        ...DEFAULT_CONFIG,
        ...refreshed,
        timer_alarm_device_ids: this._normalizeTimerAlarmDeviceIdsForUi(
          refreshed.timer_alarm_device_ids ?? []
        ),
        scenarios: Array.isArray(refreshed.scenarios)
          ? refreshed.scenarios.map((scenario) => this._normalizeScenarioForUi(scenario))
          : [],
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
    const addScenarioButton = root.querySelector('[data-action="add-scenario"]');
    if (addScenarioButton) {
      addScenarioButton.onclick = () => this._addScenario();
    }
    root.querySelector('[data-action="refresh-logs"]')?.addEventListener('click', () => this._loadLogs());
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

    root.querySelectorAll('input, select, textarea').forEach((element) => {
      ['click', 'focusin'].forEach((eventName) => {
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

  _renderCreateScenario() {
    return `
      <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
    `;
  }

  _renderActiveTopLevelPage() {
    if (this._activeTab === 'logs') {
      return this._renderLogs();
    }
    if (this._activeTab === 'scenarios') {
      return this._renderScenarios();
    }
    if (this._activeTab === 'create-scenario') {
      return this._renderCreateScenario();
    }
    if (this._activeTab === 'timer-alarm') {
      return this._renderTimerAlarm();
    }
    if (this._activeTab === 'json') {
      return this._renderJsonTools();
    }
    return this._renderSettings();
  }

  _render() {
    const content = this._renderActiveTopLevelPage();

    const markup = `
      ${PANEL_STYLES}
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




