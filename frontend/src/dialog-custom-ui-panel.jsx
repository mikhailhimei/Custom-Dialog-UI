import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './dialog-custom-ui-create-scenario.jsx';
import {
  DEFAULT_CONFIG,
  LOG_POLL_INTERVAL_MS,
  TIMER_ALARM_MODULE_URL,
} from './panel/constants.jsx';
import { createEventBinder } from './panel/events/shared/bind-helpers.jsx';
import { bindPanelActions } from './panel/events/binders/bind-panel-actions.jsx';
import { bindPanelFields } from './panel/events/binders/bind-panel-fields.jsx';
import { renderActiveTopLevelPage } from './panel/render/render-active-top-level-page.jsx';
import { renderCreateScenario } from './panel/render/render-create-scenario.jsx';
import { renderJsonTools } from './panel/render/render-json-tools.jsx';
import { renderLogs } from './panel/render/render-logs.jsx';
import { renderScenarios } from './panel/render/render-scenarios.jsx';
import { renderSettings } from './panel/render/render-settings.jsx';
import { renderTimerAlarm } from './panel/render/render-timer-alarm.jsx';
import { renderYandexScenarios } from './panel/render/render-yandex-scenarios.jsx';
import {
  addCondition,
  addScenario,
  addTimerAlarmDeviceId,
  disableConditionChildrenDirectType,
  disableConditionChildrenType,
  enableConditionChildrenDirectType,
  enableConditionChildrenType,
  removeCondition,
  removeScenario,
  removeTimerAlarmDeviceId,
  scrollScenarioIntoView,
  toggleCondition,
  toggleDeviceAccordion,
  toggleScenario,
  updateCondition,
  updateConfigField,
  updateScenario,
  updateTimerAlarmDeviceId,
} from './panel/scenarios/actions.jsx';
import { initializePanelState } from './panel/state/init-state.jsx';
import { PANEL_STYLES } from './panel/styles.jsx';
import { generateConditionId, newCondition } from './panel/utils.jsx';

const ShadowMarkup = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);
class DialogCustomUiPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    initializePanelState(this, DEFAULT_CONFIG);
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
    this._applyTheme();
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
      const cacheBustedTimerAlarmUrl = `${TIMER_ALARM_MODULE_URL}${TIMER_ALARM_MODULE_URL.includes('?') ? '&' : '?'}ts=${Date.now()}`;
      this._timerAlarmLoadPromise = import(/* @vite-ignore */ cacheBustedTimerAlarmUrl)
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
      this._applyTheme();
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
      if (tab === 'yandex-scenarios') {
        this._loadYandexScenarios();
      }
    }
  }

  _newYandexSubItem() {
    return {
      id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `yandex_sub_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
      text: '',
    };
  }

  _newYandexDraft() {
    return {
      mainCommand: '',
      voiceResponse: '',
      accounts: '',
      subVoice: [],
      subCommands: [],
    };
  }

  _normalizeYandexScenarioForUi(item) {
    const toItems = (value) => (
      Array.isArray(value)
        ? value.map((entry) => ({
          id: String(entry?.id ?? (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `yandex_sub_${Date.now()}`)),
          text: String(entry?.text ?? '').trim(),
        })).filter((entry) => entry.text)
        : []
    );
    return {
      id: String(item?.id ?? (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `yandex_${Date.now()}`)),
      mainCommand: String(item?.mainCommand ?? '').trim(),
      voiceResponse: String(item?.voiceResponse ?? '').trim(),
      accounts: String(item?.accounts ?? '').trim(),
      subVoice: toItems(item?.subVoice),
      subCommands: toItems(item?.subCommands),
    };
  }

  async _loadYandexScenarios() {
    if (!this._hass || this._yandexLoading) {
      return;
    }
    this._yandexLoading = true;
    this._yandexError = '';
    if (!this._yandexLoaded) {
      this._yandexStatus = '';
    }
    this._render();
    try {
      const result = await this._hass.callWS({ type: 'dialog_custom_ui/get_yandex_scenarios' });
      const scenarios = Array.isArray(result?.scenarios) ? result.scenarios : [];
      this._yandexScenarios = scenarios.map((item) => this._normalizeYandexScenarioForUi(item));
      this._yandexLoaded = true;
      this._yandexStatus = 'Сценарии обновлены.';
      this._yandexError = '';
    } catch (err) {
      this._yandexError = err?.message || 'Не удалось прочитать yandex_intents.yaml.';
      this._yandexStatus = '';
    } finally {
      this._yandexLoading = false;
      this._render();
    }
  }

  _openYandexModal() {
    this._yandexDraft = this._newYandexDraft();
    this._yandexModalOpen = true;
    this._yandexError = '';
    this._render();
  }

  _closeYandexModal() {
    this._yandexModalOpen = false;
    this._yandexDraft = null;
    this._render();
  }

  _updateYandexDraftField(field, value, rerender = false) {
    if (!this._yandexDraft) {
      this._yandexDraft = this._newYandexDraft();
    }
    this._yandexDraft = { ...this._yandexDraft, [field]: value };
    this._yandexError = '';
    if (rerender) {
      this._render();
    }
  }

  _addYandexDraftSubItem(type) {
    if (!this._yandexDraft) {
      this._yandexDraft = this._newYandexDraft();
    }
    const key = type === 'subVoice' ? 'subVoice' : 'subCommands';
    const list = Array.isArray(this._yandexDraft[key]) ? [...this._yandexDraft[key]] : [];
    if (key === 'subVoice' && list.length >= 3) {
      return;
    }
    list.push(this._newYandexSubItem());
    this._yandexDraft = { ...this._yandexDraft, [key]: list };
    this._yandexError = '';
    this._render();
  }

  _removeYandexDraftSubItem(type, index) {
    if (!this._yandexDraft) {
      return;
    }
    const key = type === 'subVoice' ? 'subVoice' : 'subCommands';
    const list = Array.isArray(this._yandexDraft[key]) ? [...this._yandexDraft[key]] : [];
    const next = list.filter((_, currentIndex) => currentIndex !== index);
    this._yandexDraft = { ...this._yandexDraft, [key]: next };
    this._yandexError = '';
    this._render();
  }

  _updateYandexDraftSubItem(type, index, field, value, rerender = false) {
    if (!this._yandexDraft) {
      return;
    }
    const key = type === 'subVoice' ? 'subVoice' : 'subCommands';
    const list = Array.isArray(this._yandexDraft[key]) ? [...this._yandexDraft[key]] : [];
    this._yandexDraft = {
      ...this._yandexDraft,
      [key]: list.map((entry, currentIndex) => (
        currentIndex === index ? { ...entry, [field]: value } : entry
      )),
    };
    this._yandexError = '';
    if (rerender) {
      this._render();
    }
  }

  _serializeYandexScenarioDraft() {
    const draft = this._yandexDraft || this._newYandexDraft();
    const normalizeItems = (items) => (
      (Array.isArray(items) ? items : [])
        .map((item) => ({ text: String(item?.text ?? '').trim() }))
        .filter((item) => item.text)
    );
    return {
      mainCommand: String(draft.mainCommand ?? '').trim(),
      voiceResponse: String(draft.voiceResponse ?? '').trim(),
      accounts: String(draft.accounts ?? '').trim(),
      subVoice: normalizeItems(draft.subVoice),
      subCommands: normalizeItems(draft.subCommands),
    };
  }

  async _saveYandexScenarioFromModal() {
    const item = this._serializeYandexScenarioDraft();
    if (!item.mainCommand) {
      this._yandexError = 'Поле mainCommand обязательно.';
      this._render();
      return;
    }
    this._yandexSaving = true;
    this._yandexError = '';
    this._render();
    try {
      const payload = [...this._yandexScenarios, item];
      const result = await this._hass.callWS({
        type: 'dialog_custom_ui/save_yandex_scenarios',
        scenarios: payload,
      });
      const scenarios = Array.isArray(result?.scenarios) ? result.scenarios : [];
      this._yandexScenarios = scenarios.map((entry) => this._normalizeYandexScenarioForUi(entry));
      this._yandexStatus = 'Сценарий сохранен и файл обновлен.';
      this._yandexLoaded = true;
      this._yandexModalOpen = false;
      this._yandexDraft = null;
    } catch (err) {
      this._yandexError = err?.message || 'Не удалось сохранить yandex_intents.yaml.';
    } finally {
      this._yandexSaving = false;
      this._render();
    }
  }

  _applyTheme() {
    const theme = String(this._config?.theme ?? 'light').toLowerCase() === 'dark' ? 'dark' : 'light';
    this._config = { ...this._config, theme };
    this.setAttribute('data-theme', theme);
  }

  _renderSettings() {
    return renderSettings(this);
  }

  _toggleScenario(id) {
    return toggleScenario(this, id);
  }

  _toggleCondition(id) {
    return toggleCondition(this, id);
  }

  _updateConfigField(field, value, rerender = false) {
    return updateConfigField(this, field, value, rerender);
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
    return toggleDeviceAccordion(this);
  }

  _addTimerAlarmDeviceId() {
    return addTimerAlarmDeviceId(this);
  }

  _updateTimerAlarmDeviceId(index, value) {
    return updateTimerAlarmDeviceId(this, index, value);
  }

  _removeTimerAlarmDeviceId(index) {
    return removeTimerAlarmDeviceId(this, index);
  }

  _updateScenario(id, field, value, rerender = false) {
    return updateScenario(this, id, field, value, rerender);
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
    const directChildren = this._normalizeChildrenDirectTypeForUi(scenario.children_direct_type);
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
    const childrenDirectType = this._normalizeChildrenDirectTypeForUi(condition.children_direct_type).join(';');
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
    return updateCondition(this, scenarioId, conditionId, field, value, rerender);
  }

  _normalizeChildrenDirectTypeForUi(value) {
    if (Array.isArray(value)) {
      return value
        .map((item) => {
          if (typeof item === 'string') {
            return item.trim();
          }
          if (item && typeof item === 'object') {
            return String(item.mapping_type ?? item.mappingType ?? item.type ?? '').trim();
          }
          return '';
        })
        .filter(Boolean);
    }
    if (value && typeof value === 'object') {
      const single = String(value.mapping_type ?? value.mappingType ?? value.type ?? '').trim();
      return single ? [single] : [];
    }
    return String(value ?? '')
      .split(';')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  _enableConditionChildrenType(scenarioId, conditionId) {
    return enableConditionChildrenType(this, scenarioId, conditionId);
  }

  _disableConditionChildrenType(scenarioId, conditionId) {
    return disableConditionChildrenType(this, scenarioId, conditionId);
  }

  _enableConditionChildrenDirectType(scenarioId, conditionId) {
    return enableConditionChildrenDirectType(this, scenarioId, conditionId);
  }

  _disableConditionChildrenDirectType(scenarioId, conditionId) {
    return disableConditionChildrenDirectType(this, scenarioId, conditionId);
  }

  _addCondition(scenarioId) {
    return addCondition(this, scenarioId);
  }

  _removeCondition(scenarioId, conditionId) {
    return removeCondition(this, scenarioId, conditionId);
  }

  _addScenario() {
    return addScenario(this);
  }

  _scrollScenarioIntoView(id) {
    return scrollScenarioIntoView(this, id);
  }

  _removeScenario(id) {
    return removeScenario(this, id);
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
      theme: this._config.theme,
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
      this._applyTheme();
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
      this._applyTheme();
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
    if (!root) return;
    const on = createEventBinder(root);
    bindPanelActions(this, root, on);
    bindPanelFields(this, root, on);
  }

  async _resetCommandsCache() {
    const base = String(this._config.base_url ?? '').trim().replace(/\/$/, '');
    if (!base) {
      this._error = 'Заполните Base URL во вкладке Settings.';
      this._status = '';
      this._render();
      return;
    }

    this._error = '';
    this._status = '';
    this._render();
    const url = `${base}/api/setting/commands`;
    const headers = {};
    if (this._config.timer_alarm_token) {
      headers.Authorization = this._config.timer_alarm_token;
    }
    headers['Content-Type'] = 'application/json';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({ clientId: String(this._config.client_id ?? '').trim() }),
      });
      if (response.status === 405 || response.status === 404) {
        response = await fetch(url, {
          method: 'GET',
          headers: this._config.timer_alarm_token ? { Authorization: this._config.timer_alarm_token } : {},
        });
      }
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      this._status = 'Кэш команд сброшен.';
    } catch (error) {
      this._error = error?.message || 'Не удалось сбросить кэш команд.';
    } finally {
      this._render();
    }
  }

  _renderScenarios() {
    return renderScenarios(this);
  }

  _renderLogs() {
    return renderLogs(this);
  }

  _renderTimerAlarm() {
    return renderTimerAlarm(this);
  }

  _renderJsonTools() {
    return renderJsonTools(this);
  }

  _renderYandexScenarios() {
    return renderYandexScenarios(this);
  }

  _renderCreateScenario() {
    return renderCreateScenario();
  }

  _renderActiveTopLevelPage() {
    return renderActiveTopLevelPage(this);
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
              <button type="button" class="tab-button ${this._activeTab === 'yandex-scenarios' ? 'active' : ''}" data-tab="yandex-scenarios">Яндекс сценарии</button>
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
    this._syncEmbeddedTimerAlarmHass();
  }

  _syncEmbeddedTimerAlarmHass() {
    if (!this._hass || !this.shadowRoot) {
      return;
    }
    const timerAlarmElement = this.shadowRoot.querySelector('dialog-custom-ui-timer-alarm');
    if (timerAlarmElement) {
      timerAlarmElement.hass = this._hass;
      timerAlarmElement.config = { theme: this._config.theme };
    }
  }
}

if (!customElements.get('dialog-custom-ui-panel')) {
  customElements.define('dialog-custom-ui-panel', DialogCustomUiPanel);
}




