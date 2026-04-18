import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

const ShadowMarkup = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const COMMANDS_PAGE_SIZE = 20;
const TABS = {
  primary: 'primary',
  secondary: 'secondary',
  direct: 'direct',
  defaults: 'defaults',
};
const DIRECT_SUBTABS = {
  basic: 'basic',
  templates: 'templates',
};
const TYPE_COMPONENT_OPTIONS = ['children', 'children_error', 'custom'];
const DIRECT_TYPE_DATA_OPTIONS = ['all', 'string', 'int', 'time', 'date', 'command'];
const DEFAULT_COMMANDS_API_PATH = '/api/cms/default_commands';
const DEFAULT_COMMAND_CONFIGS = [
  {
    type: 'default_main',
    title: 'дефолтная ошибка комманда не найдено',
    supportsLlm: true,
    hasModal: true,
  },
  {
    type: 'not_understand',
    title: 'дефолтная ошибка второстепенная  не найдена',
    supportsLlm: false,
    hasModal: true,
  },
  {
    type: 'finish_miss',
    title: 'дефолтная ошибка начать сначала',
    supportsLlm: false,
    hasModal: false,
  },
  {
    type: 'default_search',
    title: 'Исправление текста с помощью ИИ',
    supportsLlm: true,
    hasModal: true,
  },
];

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const createUuid = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `uuid_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`;
};

const createVoiceResponseItem = (item = {}) => {
  const llmEnabled = Boolean(item.llm)
    || Boolean(String(item.system ?? '').trim())
    || Boolean(String(item.model ?? '').trim());

  return {
    id: createUuid(),
    type: String(item.type ?? ''),
    voiceResponse: String(item.voiceResponse ?? ''),
    llmEnabled,
    system: String(item.system ?? ''),
    model: String(item.model ?? ''),
  };
};

const createDirectControlItem = (item = {}) => ({
  id: createUuid(),
  uuid: String(item.uuid ?? ''),
});

const createNextActionItem = (item = {}) => ({
  id: createUuid(),
  typeComponent: String(item.typeComponent ?? item.type ?? 'children'),
  uuid: String(item.uuid ?? ''),
});

const createDirectSubControlItem = (item = {}) => ({
  id: createUuid(),
  subType: String(item.subType ?? ''),
  subVoiceCommands: String(item.subVoiceCommands ?? ''),
});

class DialogCustomUiCreateScenario extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._reactRoot = null;
    this._hass = null;
    this._config = { base_url: '', timer_alarm_token: '' };

    this._tab = TABS.primary;
    this._commands = [];
    this._page = 1;
    this._total = 0;
    this._loading = false;
    this._error = '';
    this._status = '';

    this._modalOpen = false;
    this._modalMode = 'create';
    this._modalSaving = false;
    this._editingId = '';
    this._openResponseItemIds = new Set();
    this._openDirectControlItemIds = new Set();
    this._openNextActionItemIds = new Set();
    this._bindController = null;
    this._draft = this._newDraft();

    this._directSubtab = DIRECT_SUBTABS.basic;
    this._directCommands = [];
    this._directLoading = false;
    this._directError = '';
    this._directModalOpen = false;
    this._directModalMode = 'create';
    this._directModalSaving = false;
    this._directEditingId = '';
    this._openDirectSubControlItemIds = new Set();
    this._directDraft = this._newDirectDraft();

    this._templateCommands = [];
    this._templateLoading = false;
    this._templateError = '';
    this._templateModalOpen = false;
    this._templateModalMode = 'create';
    this._templateModalSaving = false;
    this._templateEditingId = '';
    this._openTemplateSubControlItemIds = new Set();
    this._templateDraft = this._newTemplateDraft();

    this._defaultsLoading = false;
    this._defaultsError = '';
    this._defaultsModalOpen = false;
    this._defaultsModalSaving = false;
    this._defaultsByType = this._newDefaultsState();
    this._defaultsActiveType = DEFAULT_COMMAND_CONFIGS[0].type;
    this._defaultsActiveId = '';
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  set config(config) {
    const nextConfig = {
      base_url: String(config?.base_url ?? '').trim(),
      timer_alarm_token: String(config?.timer_alarm_token ?? '').trim(),
    };
    const changed = nextConfig.base_url !== this._config.base_url
      || nextConfig.timer_alarm_token !== this._config.timer_alarm_token;
    this._config = nextConfig;
    if (changed && (this._tab === TABS.primary || this._tab === TABS.secondary) && !this._loading) {
      this._loadPage(1);
      return;
    }
    if (changed && this._tab === TABS.defaults && !this._defaultsLoading) {
      this._reloadDefaultsCommands();
      return;
    }
    this._render();
  }

  connectedCallback() {
    this._render();
    if ((this._tab === TABS.primary || this._tab === TABS.secondary) && !this._commands.length && !this._loading) {
      this._loadPage(1);
    }
  }

  disconnectedCallback() {
    if (this._reactRoot) {
      this._reactRoot.unmount();
      this._reactRoot = null;
    }
  }

  _mountReact(markup) {
    if (!this._reactRoot) {
      this._reactRoot = createRoot(this.shadowRoot);
    }
    flushSync(() => {
      this._reactRoot.render(<ShadowMarkup html={markup} />);
    });
  }

  _swallowUiEvent(event) {
    event.stopPropagation();
  }

  _newDraft(source = null) {
    const item = source ?? {};
    const componentDialog = typeof item.componentDialog === 'object' && item.componentDialog
      ? item.componentDialog
      : {};
    const responseItems = Array.isArray(componentDialog.voiceResponseArray)
      ? componentDialog.voiceResponseArray
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => createVoiceResponseItem(entry))
      : [];
    const directControlItems = Array.isArray(componentDialog.nextDirectControl)
      ? componentDialog.nextDirectControl
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => createDirectControlItem(entry))
      : [];
    const nextActionItems = Array.isArray(componentDialog.nextAction)
      ? componentDialog.nextAction
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => createNextActionItem(entry))
      : [];

    return {
      title: String(item.title ?? ''),
      uuidDialog: String(item.uuidDialog ?? ''),
      type: String(componentDialog.type ?? ''),
      endStatus: Boolean(componentDialog.endStatus),
      forwardText: Boolean(componentDialog.forwardText),
      answerType: String(componentDialog.answerType ?? 'default'),
      voiceCommands: typeof componentDialog.voiceCommands === 'string'
        ? componentDialog.voiceCommands
        : componentDialog.voiceCommands == null
          ? ''
          : JSON.stringify(componentDialog.voiceCommands),
      responseItems,
      directControlItems,
      nextActionItems,
    };
  }

  _newDirectDraft(source = null) {
    const item = source ?? {};
    const directControl = typeof item.directControl === 'object' && item.directControl
      ? item.directControl
      : {};
    const subDirectControlItems = Array.isArray(directControl.subDirectControl)
      ? directControl.subDirectControl
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => createDirectSubControlItem(entry))
      : [];

    return {
      title: String(item.title ?? ''),
      uuidDirect: String(item.uuidDirect ?? ''),
      type: String(directControl.type ?? ''),
      typeData: DIRECT_TYPE_DATA_OPTIONS.includes(String(directControl.typeData ?? 'all'))
        ? String(directControl.typeData ?? 'all')
        : 'all',
      voiceCommands: directControl.voiceCommands == null
        ? ''
        : String(directControl.voiceCommands),
      manual: Boolean(directControl.manual),
      subDirectControlItems,
      subDirectControlArray: String(directControl.subDirectControlArray ?? ''),
    };
  }

  _newTemplateDraft(source = null) {
    const item = source ?? {};
    const subDirectControlItems = Array.isArray(item.subDirectControl)
      ? item.subDirectControl
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => createDirectSubControlItem(entry))
      : [];

    return {
      title: String(item.title ?? ''),
      subDirectControlItems,
    };
  }

  _defaultConfig(type) {
    return DEFAULT_COMMAND_CONFIGS.find((item) => item.type === type) ?? DEFAULT_COMMAND_CONFIGS[0];
  }

  _newDefaultsDraft(type, source = null) {
    const item = source ?? {};
    const config = this._defaultConfig(type);
    return {
      _id: String(item._id ?? ''),
      type: config.type,
      title: config.title,
      endStatus: Boolean(item.endStatus),
      llmEnabled: config.supportsLlm ? Boolean(item.llmEnabled ?? item.llm) : false,
      message: String(item.message ?? ''),
      system: config.supportsLlm ? String(item.system ?? '') : '',
      model: config.supportsLlm ? String(item.model ?? '') : '',
    };
  }

  _newDefaultsState() {
    return DEFAULT_COMMAND_CONFIGS.reduce((acc, config) => {
      acc[config.type] = this._newDefaultsDraft(config.type);
      return acc;
    }, {});
  }

  _apiHeaders(withJson = false) {
    const headers = {};
    if (withJson) {
      headers['Content-Type'] = 'application/json';
    }
    if (this._config.timer_alarm_token) {
      headers.Authorization = this._config.timer_alarm_token;
    }
    return headers;
  }

  _apiUrl(path) {
    const base = String(this._config.base_url ?? '').trim().replace(/\/$/, '');
    if (!base) {
      return '';
    }
    return `${base}${path}`;
  }

  async _loadPage(page = 1) {
    if (this._tab !== TABS.primary && this._tab !== TABS.secondary) {
      return;
    }
    const pageNumber = Math.max(1, Number(page) || 1);
    const url = this._apiUrl(
      `/api/cms/commands?page=${encodeURIComponent(pageNumber)}&pageSize=${COMMANDS_PAGE_SIZE}`
    );
    if (!url) {
      this._error = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

    this._loading = true;
    this._error = '';
    this._render();
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: this._apiHeaders(false),
      });
      if (!response.ok) {
        throw new Error(`Ошибка загрузки команд: HTTP ${response.status}`);
      }
      const result = await response.json();
      const data = Array.isArray(result.data) ? result.data : [];
      const total = Number(result.total ?? result.count ?? result.meta?.total ?? result.pagination?.total ?? 0);
      this._commands = data;
      this._page = pageNumber;
      this._total = Number.isFinite(total) && total > 0
        ? total
        : pageNumber * COMMANDS_PAGE_SIZE + (data.length === COMMANDS_PAGE_SIZE ? 1 : 0);
      this._status = `Команды загружены: ${data.length}.`;
    } catch (error) {
      this._commands = [];
      this._error = error?.message || 'Не удалось загрузить команды.';
    } finally {
      this._loading = false;
      this._render();
    }
  }

  _setTab(tab) {
    this._tab = tab;
    this._error = '';
    this._status = '';
    if ((tab === TABS.primary || tab === TABS.secondary) && !this._loading) {
      this._loadPage(this._page || 1);
      return;
    }
    if (tab === TABS.defaults && !this._defaultsLoading) {
      this._reloadDefaultsCommands();
      return;
    }
    this._render();
  }

  _openCreateModal() {
    this._modalOpen = true;
    this._modalMode = 'create';
    this._editingId = '';
    this._draft = this._newDraft();
    this._openResponseItemIds = new Set();
    this._openDirectControlItemIds = new Set();
    this._openNextActionItemIds = new Set();
    this._error = '';
    this._render();
  }

  _openEditModal(commandId) {
    const item = this._commands.find((command) => String(command._id ?? '') === String(commandId ?? ''));
    if (!item) {
      this._error = 'Команда не найдена.';
      this._render();
      return;
    }
    this._modalOpen = true;
    this._modalMode = 'edit';
    this._editingId = String(item._id ?? '');
    this._draft = this._newDraft(item);
    this._openResponseItemIds = new Set();
    this._openDirectControlItemIds = new Set();
    this._openNextActionItemIds = new Set();
    this._error = '';
    this._render();
  }

  _closeModal() {
    if (this._modalSaving) {
      return;
    }
    this._modalOpen = false;
    this._modalMode = 'create';
    this._editingId = '';
    this._openResponseItemIds = new Set();
    this._openDirectControlItemIds = new Set();
    this._openNextActionItemIds = new Set();
    this._draft = this._newDraft();
    this._render();
  }

  _updateDraft(field, value) {
    this._draft = {
      ...this._draft,
      [field]: value,
    };
  }

  _buildPayload() {
    const title = String(this._draft.title ?? '').trim();
    const uuidDialog = String(this._draft.uuidDialog ?? '').trim();
    const type = String(this._draft.type ?? '').trim();
    const answerTypeRaw = String(this._draft.answerType ?? 'default').trim().toLowerCase();
    const answerType = answerTypeRaw === 'redis' ? 'redis' : 'default';

    if (!title) {
      throw new Error('Title - обязательное поле.');
    }
    if (!uuidDialog) {
      throw new Error('uuidDialog - обязательное поле.');
    }
    if (!type) {
      throw new Error('type - обязательное поле.');
    }

    const responseItems = Array.isArray(this._draft.responseItems) ? this._draft.responseItems : [];
    const voiceResponseArray = responseItems.map((item) => {
      const normalized = {
        type: String(item.type ?? '').trim(),
        voiceResponse: String(item.voiceResponse ?? '').trim(),
      };
      if (item.llmEnabled) {
        normalized.llm = true;
        normalized.system = String(item.system ?? '').trim();
        normalized.model = String(item.model ?? '').trim();
      }
      return normalized;
    });
    const nextDirectControl = (Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [])
      .map((item) => ({
        uuid: String(item.uuid ?? '').trim(),
      }))
      .filter((item) => item.uuid);
    const nextAction = (Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : [])
      .map((item) => ({
        typeComponent: TYPE_COMPONENT_OPTIONS.includes(String(item.typeComponent ?? '').trim())
          ? String(item.typeComponent ?? '').trim()
          : 'children',
        uuid: String(item.uuid ?? '').trim(),
      }))
      .filter((item) => item.uuid);

    return {
      title,
      uuidDialog,
      componentDialog: {
        endStatus: Boolean(this._draft.endStatus),
        type,
        forwardText: Boolean(this._draft.forwardText),
        answerType,
        voiceCommands: String(this._draft.voiceCommands ?? ''),
        nextDirectControl,
        voiceResponseArray,
        nextAction,
      },
    };
  }

  _refreshUuid() {
    this._updateDraft('uuidDialog', createUuid());
    this._render();
  }

  _addVoiceResponseItem() {
    const nextItems = Array.isArray(this._draft.responseItems) ? this._draft.responseItems : [];
    const newItem = createVoiceResponseItem();
    this._draft = {
      ...this._draft,
      responseItems: [...nextItems, newItem],
    };
    this._openResponseItemIds.add(newItem.id);
    this._render();
  }

  _removeVoiceResponseItem(itemId) {
    const nextItems = (Array.isArray(this._draft.responseItems) ? this._draft.responseItems : [])
      .filter((item) => item.id !== itemId);
    this._draft = {
      ...this._draft,
      responseItems: nextItems,
    };
    this._openResponseItemIds = new Set(
      [...this._openResponseItemIds].filter((id) => this._draft.responseItems.some((item) => item.id === id))
    );
    this._render();
  }

  _updateVoiceResponseItem(itemId, field, value) {
    const nextItems = (Array.isArray(this._draft.responseItems) ? this._draft.responseItems : [])
      .map((item) => {
        if (item.id !== itemId) {
          return item;
        }
        return {
          ...item,
          [field]: value,
        };
      });
    this._draft = {
      ...this._draft,
      responseItems: nextItems,
    };
  }

  _toggleResponseItem(itemId) {
    if (this._openResponseItemIds.has(itemId)) {
      this._openResponseItemIds.delete(itemId);
    } else {
      this._openResponseItemIds.add(itemId);
    }
    this._render();
  }

  _addDirectControlItem() {
    const nextItems = Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [];
    const newItem = createDirectControlItem();
    this._draft = {
      ...this._draft,
      directControlItems: [...nextItems, newItem],
    };
    this._openDirectControlItemIds.add(newItem.id);
    this._render();
  }

  _removeDirectControlItem(itemId) {
    const nextItems = (Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [])
      .filter((item) => item.id !== itemId);
    this._draft = {
      ...this._draft,
      directControlItems: nextItems,
    };
    this._openDirectControlItemIds = new Set(
      [...this._openDirectControlItemIds].filter((id) => nextItems.some((item) => item.id === id))
    );
    this._render();
  }

  _updateDirectControlItem(itemId, value) {
    const nextItems = (Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [])
      .map((item) => (item.id === itemId ? { ...item, uuid: value } : item));
    this._draft = {
      ...this._draft,
      directControlItems: nextItems,
    };
  }

  _toggleDirectControlItem(itemId) {
    if (this._openDirectControlItemIds.has(itemId)) {
      this._openDirectControlItemIds.delete(itemId);
    } else {
      this._openDirectControlItemIds.add(itemId);
    }
    this._render();
  }

  _addNextActionItem() {
    const nextItems = Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : [];
    const newItem = createNextActionItem();
    this._draft = {
      ...this._draft,
      nextActionItems: [...nextItems, newItem],
    };
    this._openNextActionItemIds.add(newItem.id);
    this._render();
  }

  _removeNextActionItem(itemId) {
    const nextItems = (Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : [])
      .filter((item) => item.id !== itemId);
    this._draft = {
      ...this._draft,
      nextActionItems: nextItems,
    };
    this._openNextActionItemIds = new Set(
      [...this._openNextActionItemIds].filter((id) => nextItems.some((item) => item.id === id))
    );
    this._render();
  }

  _updateNextActionItem(itemId, field, value) {
    const nextItems = (Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : [])
      .map((item) => (item.id === itemId ? { ...item, [field]: value } : item));
    this._draft = {
      ...this._draft,
      nextActionItems: nextItems,
    };
  }

  _toggleNextActionItem(itemId) {
    if (this._openNextActionItemIds.has(itemId)) {
      this._openNextActionItemIds.delete(itemId);
    } else {
      this._openNextActionItemIds.add(itemId);
    }
    this._render();
  }

  _setDirectSubtab(subtab) {
    this._directSubtab = subtab;
    this._directError = '';
    this._render();
  }

  _reloadDirectCommands() {
    this._directLoading = true;
    this._directError = '';
    this._render();
    window.setTimeout(() => {
      this._directLoading = false;
      this._status = `Direct-команды загружены: ${this._directCommands.length}.`;
      this._render();
    }, 200);
  }

  _openCreateDirectModal() {
    this._directModalOpen = true;
    this._directModalMode = 'create';
    this._directEditingId = '';
    this._directDraft = this._newDirectDraft();
    this._openDirectSubControlItemIds = new Set();
    this._directError = '';
    this._render();
  }

  _openEditDirectModal(commandId) {
    const item = this._directCommands.find((command) => String(command._id ?? '') === String(commandId ?? ''));
    if (!item) {
      this._directError = 'Direct-команда не найдена.';
      this._render();
      return;
    }
    this._directModalOpen = true;
    this._directModalMode = 'edit';
    this._directEditingId = String(item._id ?? '');
    this._directDraft = this._newDirectDraft(item);
    this._openDirectSubControlItemIds = new Set();
    this._directError = '';
    this._render();
  }

  _closeDirectModal() {
    if (this._directModalSaving) {
      return;
    }
    this._directModalOpen = false;
    this._directModalMode = 'create';
    this._directEditingId = '';
    this._openDirectSubControlItemIds = new Set();
    this._directDraft = this._newDirectDraft();
    this._render();
  }

  _updateDirectDraft(field, value) {
    this._directDraft = {
      ...this._directDraft,
      [field]: value,
    };
  }

  _refreshDirectUuid() {
    this._updateDirectDraft('uuidDirect', createUuid());
    this._render();
  }

  _addDirectSubControlItem() {
    const nextItems = Array.isArray(this._directDraft.subDirectControlItems) ? this._directDraft.subDirectControlItems : [];
    const newItem = createDirectSubControlItem();
    this._directDraft = {
      ...this._directDraft,
      subDirectControlItems: [...nextItems, newItem],
    };
    this._openDirectSubControlItemIds.add(newItem.id);
    this._render();
  }

  _removeDirectSubControlItem(itemId) {
    const nextItems = (Array.isArray(this._directDraft.subDirectControlItems) ? this._directDraft.subDirectControlItems : [])
      .filter((item) => item.id !== itemId);
    this._directDraft = {
      ...this._directDraft,
      subDirectControlItems: nextItems,
    };
    this._openDirectSubControlItemIds = new Set(
      [...this._openDirectSubControlItemIds].filter((id) => nextItems.some((item) => item.id === id))
    );
    this._render();
  }

  _toggleDirectSubControlItem(itemId) {
    if (this._openDirectSubControlItemIds.has(itemId)) {
      this._openDirectSubControlItemIds.delete(itemId);
    } else {
      this._openDirectSubControlItemIds.add(itemId);
    }
    this._render();
  }

  _updateDirectSubControlItem(itemId, field, value) {
    const nextItems = (Array.isArray(this._directDraft.subDirectControlItems) ? this._directDraft.subDirectControlItems : [])
      .map((item) => (item.id === itemId ? { ...item, [field]: value } : item));
    this._directDraft = {
      ...this._directDraft,
      subDirectControlItems: nextItems,
    };
  }

  _buildDirectPayload() {
    const title = String(this._directDraft.title ?? '').trim();
    const uuidDirect = String(this._directDraft.uuidDirect ?? '').trim();
    const type = String(this._directDraft.type ?? '').trim();
    const typeData = DIRECT_TYPE_DATA_OPTIONS.includes(String(this._directDraft.typeData ?? 'all'))
      ? String(this._directDraft.typeData ?? 'all')
      : 'all';
    const manual = Boolean(this._directDraft.manual);

    if (!title) {
      throw new Error('Title - обязательное поле.');
    }
    if (!uuidDirect) {
      throw new Error('uuidDirect - обязательное поле.');
    }
    if (!type) {
      throw new Error('type - обязательное поле.');
    }

    const payload = {
      title,
      uuidDirect,
      directControl: {
        type,
        typeData,
      },
    };

    if (typeData === 'command') {
      const voiceCommandsRaw = String(this._directDraft.voiceCommands ?? '').trim();
      payload.directControl.voiceCommands = voiceCommandsRaw || null;
      payload.directControl.manual = manual;
      if (manual) {
        payload.directControl.subDirectControl = (Array.isArray(this._directDraft.subDirectControlItems)
          ? this._directDraft.subDirectControlItems
          : []
        )
          .map((item, index) => {
            const subType = String(item.subType ?? '').trim();
            const subVoiceCommandsRaw = String(item.subVoiceCommands ?? '').trim();
            return {
              id: Number(item.id) || index + 1,
              subType: subType || null,
              title: null,
              subVoiceCommands: subVoiceCommandsRaw || null,
            };
          })
          .filter((item) => item.subType || item.subVoiceCommands);
      } else {
        payload.directControl.subDirectControlArray = String(this._directDraft.subDirectControlArray ?? '').trim();
      }
    }

    return payload;
  }

  async _saveDirectModal() {
    const base = this._apiUrl('');
    if (!base) {
      this._directError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

    let payload;
    try {
      payload = this._buildDirectPayload();
    } catch (error) {
      this._directError = error?.message || 'Ошибка валидации direct-команды.';
      this._render();
      return;
    }

    this._directModalSaving = true;
    this._directError = '';
    this._render();
    try {
      const isEdit = this._directModalMode === 'edit' && this._directEditingId;
      const directBasePath = '/api/cms/direct_commands';
      const url = isEdit
        ? this._apiUrl(`${directBasePath}/${encodeURIComponent(this._directEditingId)}`)
        : this._apiUrl(directBasePath);
      const method = isEdit ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: this._apiHeaders(true),
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Ошибка сохранения direct-команды: HTTP ${response.status}`);
      }

      let savedItem = null;
      try {
        savedItem = await response.json();
      } catch {
        savedItem = null;
      }

      if (isEdit) {
        this._directCommands = this._directCommands.map((item) => (
          String(item._id ?? '') === String(this._directEditingId)
            ? { ...item, ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: this._directEditingId }
            : item
        ));
      } else {
        const createdId = String(savedItem?._id ?? createUuid());
        this._directCommands = [
          { ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: createdId },
          ...this._directCommands,
        ];
      }

      this._status = isEdit ? 'Direct-команда обновлена.' : 'Direct-команда создана.';
      this._directModalOpen = false;
      this._directModalMode = 'create';
      this._directEditingId = '';
      this._openDirectSubControlItemIds = new Set();
      this._directDraft = this._newDirectDraft();
    } finally {
      this._directModalSaving = false;
      this._render();
    }
  }

  _reloadTemplateCommands() {
    this._templateLoading = true;
    this._templateError = '';
    this._render();
    window.setTimeout(() => {
      this._templateLoading = false;
      this._status = `Шаблоны загружены: ${this._templateCommands.length}.`;
      this._render();
    }, 200);
  }

  _openCreateTemplateModal() {
    this._templateModalOpen = true;
    this._templateModalMode = 'create';
    this._templateEditingId = '';
    this._templateDraft = this._newTemplateDraft();
    this._openTemplateSubControlItemIds = new Set();
    this._templateError = '';
    this._render();
  }

  _openEditTemplateModal(templateId) {
    const item = this._templateCommands.find((command) => String(command._id ?? '') === String(templateId ?? ''));
    if (!item) {
      this._templateError = 'Шаблон не найден.';
      this._render();
      return;
    }
    this._templateModalOpen = true;
    this._templateModalMode = 'edit';
    this._templateEditingId = String(item._id ?? '');
    this._templateDraft = this._newTemplateDraft(item);
    this._openTemplateSubControlItemIds = new Set();
    this._templateError = '';
    this._render();
  }

  _closeTemplateModal() {
    if (this._templateModalSaving) {
      return;
    }
    this._templateModalOpen = false;
    this._templateModalMode = 'create';
    this._templateEditingId = '';
    this._openTemplateSubControlItemIds = new Set();
    this._templateDraft = this._newTemplateDraft();
    this._render();
  }

  _updateTemplateDraft(field, value) {
    this._templateDraft = {
      ...this._templateDraft,
      [field]: value,
    };
  }

  _addTemplateSubControlItem() {
    const nextItems = Array.isArray(this._templateDraft.subDirectControlItems) ? this._templateDraft.subDirectControlItems : [];
    const newItem = createDirectSubControlItem();
    this._templateDraft = {
      ...this._templateDraft,
      subDirectControlItems: [...nextItems, newItem],
    };
    this._openTemplateSubControlItemIds.add(newItem.id);
    this._render();
  }

  _removeTemplateSubControlItem(itemId) {
    const nextItems = (Array.isArray(this._templateDraft.subDirectControlItems) ? this._templateDraft.subDirectControlItems : [])
      .filter((item) => item.id !== itemId);
    this._templateDraft = {
      ...this._templateDraft,
      subDirectControlItems: nextItems,
    };
    this._openTemplateSubControlItemIds = new Set(
      [...this._openTemplateSubControlItemIds].filter((id) => nextItems.some((item) => item.id === id))
    );
    this._render();
  }

  _toggleTemplateSubControlItem(itemId) {
    if (this._openTemplateSubControlItemIds.has(itemId)) {
      this._openTemplateSubControlItemIds.delete(itemId);
    } else {
      this._openTemplateSubControlItemIds.add(itemId);
    }
    this._render();
  }

  _updateTemplateSubControlItem(itemId, field, value) {
    const nextItems = (Array.isArray(this._templateDraft.subDirectControlItems) ? this._templateDraft.subDirectControlItems : [])
      .map((item) => (item.id === itemId ? { ...item, [field]: value } : item));
    this._templateDraft = {
      ...this._templateDraft,
      subDirectControlItems: nextItems,
    };
  }

  _buildTemplatePayload() {
    const title = String(this._templateDraft.title ?? '').trim();
    if (!title) {
      throw new Error('Title - обязательное поле.');
    }

    return {
      title,
      subDirectControl: (Array.isArray(this._templateDraft.subDirectControlItems)
        ? this._templateDraft.subDirectControlItems
        : []
      )
        .map((item, index) => {
          const subType = String(item.subType ?? '').trim();
          const subVoiceCommandsRaw = String(item.subVoiceCommands ?? '').trim();
          return {
            id: Number(item.id) || index + 1,
            subType: subType || null,
            title: null,
            subVoiceCommands: subVoiceCommandsRaw || null,
          };
        })
        .filter((item) => item.subType || item.subVoiceCommands),
    };
  }

  async _saveTemplateModal() {
    let payload;
    try {
      payload = this._buildTemplatePayload();
    } catch (error) {
      this._templateError = error?.message || 'Ошибка валидации шаблона.';
      this._render();
      return;
    }

    this._templateModalSaving = true;
    this._templateError = '';
    this._render();
    try {
      const isEdit = this._templateModalMode === 'edit' && this._templateEditingId;
      if (isEdit) {
        this._templateCommands = this._templateCommands.map((item) => (
          String(item._id ?? '') === String(this._templateEditingId)
            ? { ...item, ...payload, _id: this._templateEditingId }
            : item
        ));
      } else {
        this._templateCommands = [
          { ...payload, _id: createUuid() },
          ...this._templateCommands,
        ];
      }
      this._status = isEdit ? 'Шаблон обновлен.' : 'Шаблон создан.';
      this._templateModalOpen = false;
      this._templateModalMode = 'create';
      this._templateEditingId = '';
      this._openTemplateSubControlItemIds = new Set();
      this._templateDraft = this._newTemplateDraft();
    } finally {
      this._templateModalSaving = false;
      this._render();
    }
  }

  _reloadDefaultsCommands() {
    const url = this._apiUrl(DEFAULT_COMMANDS_API_PATH);
    if (!url) {
      this._defaultsError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

    this._defaultsLoading = true;
    this._defaultsError = '';
    this._render();
    fetch(url, {
      method: 'GET',
      headers: this._apiHeaders(false),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки дефолтных команд: HTTP ${response.status}`);
        }
        const result = await response.json();
        const items = Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
        const nextState = this._newDefaultsState();
        items.forEach((item) => {
          const type = String(item?.type ?? '').trim();
          if (!type || !nextState[type]) {
            return;
          }
          nextState[type] = this._newDefaultsDraft(type, item);
        });
        this._defaultsByType = nextState;
        this._status = 'Дефолтные команды загружены.';
      })
      .catch((error) => {
        this._defaultsError = error?.message || 'Не удалось загрузить дефолтные команды.';
      })
      .finally(() => {
        this._defaultsLoading = false;
        this._render();
      });
  }

  _openDefaultsModal(type) {
    const config = this._defaultConfig(type);
    if (!config.hasModal) {
      this._saveDefaultsType(config.type, false);
      return;
    }
    this._defaultsActiveType = config.type;
    this._defaultsActiveId = String(this._defaultsByType[config.type]?._id ?? '');
    this._defaultsModalOpen = true;
    this._defaultsError = '';
    this._render();
  }

  _closeDefaultsModal() {
    if (this._defaultsModalSaving) {
      return;
    }
    this._defaultsModalOpen = false;
    this._render();
  }

  _updateDefaultsDraft(field, value) {
    const type = this._defaultsActiveType;
    const current = this._defaultsByType[type] ?? this._newDefaultsDraft(type);
    this._defaultsByType = {
      ...this._defaultsByType,
      [type]: {
        ...current,
        [field]: value,
      },
    };
  }

  _buildDefaultsPayload() {
    const type = this._defaultsActiveType;
    const config = this._defaultConfig(type);
    const draft = this._defaultsByType[type] ?? this._newDefaultsDraft(type);
    const payload = {
      type,
      title: config.title,
      endStatus: Boolean(draft.endStatus),
      message: String(draft.message ?? '').trim() || null,
    };
    if (config.supportsLlm) {
      payload.llm = Boolean(draft.llmEnabled);
      payload.system = payload.llm ? (String(draft.system ?? '').trim() || null) : null;
      payload.model = payload.llm ? (String(draft.model ?? '').trim() || null) : null;
    }
    return payload;
  }

  async _saveDefaultsType(type, closeModal = false) {
    const config = this._defaultConfig(type);
    this._defaultsActiveType = config.type;
    this._defaultsActiveId = String(this._defaultsByType[config.type]?._id ?? '');

    const base = this._apiUrl('');
    if (!base) {
      this._defaultsError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

    let payload;
    try {
      payload = this._buildDefaultsPayload();
    } catch (error) {
      this._defaultsError = error?.message || 'Ошибка валидации дефолтной команды.';
      this._render();
      return;
    }

    this._defaultsModalSaving = closeModal;
    this._defaultsLoading = !closeModal;
    this._defaultsError = '';
    this._render();
    try {
      const isEdit = Boolean(this._defaultsActiveId);
      const url = isEdit
        ? this._apiUrl(`${DEFAULT_COMMANDS_API_PATH}/${encodeURIComponent(this._defaultsActiveId)}`)
        : this._apiUrl(DEFAULT_COMMANDS_API_PATH);
      const method = isEdit ? 'PATCH' : 'POST';
      const response = await fetch(url, {
        method,
        headers: this._apiHeaders(true),
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Ошибка сохранения дефолтной команды: HTTP ${response.status}`);
      }

      let savedItem = null;
      try {
        savedItem = await response.json();
      } catch {
        savedItem = null;
      }

      const type = this._defaultsActiveType;
      const current = this._defaultsByType[type] ?? this._newDefaultsDraft(type);
      const nextId = String(savedItem?._id ?? current._id ?? this._defaultsActiveId ?? '');
      this._defaultsByType = {
        ...this._defaultsByType,
        [type]: {
          ...current,
          ...payload,
          _id: nextId,
          llmEnabled: payload.llm ?? current.llmEnabled,
        },
      };
      this._defaultsActiveId = nextId;
      this._status = 'Дефолтная команда обновлена.';
      if (closeModal) {
        this._defaultsModalOpen = false;
      }
    } catch (error) {
      this._defaultsError = error?.message || 'Не удалось сохранить дефолтную команду.';
    } finally {
      this._defaultsModalSaving = false;
      this._defaultsLoading = false;
      this._render();
    }
  }

  async _saveDefaultsModal() {
    await this._saveDefaultsType(this._defaultsActiveType, true);
  }

  async _saveModal() {
    const base = this._apiUrl('');
    if (!base) {
      this._error = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

    let payload;
    try {
      payload = this._buildPayload();
    } catch (error) {
      this._error = error?.message || 'Ошибка валидации.';
      this._render();
      return;
    }

    const isEdit = this._modalMode === 'edit' && this._editingId;
    const url = isEdit
      ? this._apiUrl(`/api/cms/commands/${encodeURIComponent(this._editingId)}`)
      : this._apiUrl('/api/cms/commands');
    const method = isEdit ? 'PATCH' : 'POST';

    this._modalSaving = true;
    this._error = '';
    this._render();
    try {
      const response = await fetch(url, {
        method,
        headers: this._apiHeaders(true),
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Ошибка сохранения: HTTP ${response.status}`);
      }

      this._status = isEdit ? 'Сценарий обновлен.' : 'Сценарий создан.';
      this._modalOpen = false;
      this._modalMode = 'create';
      this._editingId = '';
      this._draft = this._newDraft();
      await this._loadPage(this._page || 1);
    } catch (error) {
      this._error = error?.message || 'Не удалось сохранить сценарий.';
      this._render();
    } finally {
      this._modalSaving = false;
      this._render();
    }
  }

  _renderCommandsTab() {
    const isSecondaryTab = this._tab === TABS.secondary;
    const tabTitle = isSecondaryTab ? 'Второстепенные команды' : 'Основные команды';
    const queryHint = '/api/cms/commands?page=1&pageSize=20';
    const totalPages = Math.max(1, Math.ceil((this._total || 1) / COMMANDS_PAGE_SIZE));
    const listMarkup = this._loading
      ? '<div class="empty">Загрузка команд...</div>'
      : this._commands.length
        ? this._commands.map((item) => `
            <button type="button" class="command-item" data-action="edit" data-command-id="${escapeHtml(item._id)}">
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
        <h2>${tabTitle}</h2>
        <p>Запрос: <code>${queryHint}</code></p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload" ${this._loading ? 'disabled' : ''}>${this._loading ? 'Обновление...' : 'Обновить'}</button>
          <button type="button" class="primary" data-action="create">+ Создать сценарий</button>
        </div>
      </section>
      <section class="help-card command-list">
        ${listMarkup}
        <div class="command-pagination">
          <button type="button" class="ghost" data-action="prev" ${this._page <= 1 || this._loading ? 'disabled' : ''}>Назад</button>
          <span>Страница ${this._page} из ${totalPages}</span>
          <button type="button" class="ghost" data-action="next" ${this._page >= totalPages || this._loading ? 'disabled' : ''}>Вперед</button>
        </div>
      </section>
    `;
  }

  _renderDirectCommandsTab() {
    const listMarkup = this._directLoading
      ? '<div class="empty">Загрузка direct-команд...</div>'
      : this._directCommands.length
        ? this._directCommands.map((item) => `
            <button type="button" class="command-item" data-action="edit-direct" data-direct-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title || 'Без названия')}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.directControl?.type || 'type: -')}</span>
                <span>${escapeHtml(item.uuidDirect || 'uuidDirect: -')}</span>
                <span>${escapeHtml(item.directControl?.typeData || 'typeData: -')}</span>
              </span>
            </button>
          `).join('')
        : '<div class="empty">Direct-команд пока нет.</div>';
    const templateListMarkup = this._templateLoading
      ? '<div class="empty">Загрузка шаблонов...</div>'
      : this._templateCommands.length
        ? this._templateCommands.map((item) => `
            <button type="button" class="command-item" data-action="edit-template" data-template-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title || 'Без названия')}</span>
              <span class="command-item-meta">
                <span>subDirectControl: ${(Array.isArray(item.subDirectControl) ? item.subDirectControl.length : 0)}</span>
              </span>
            </button>
          `).join('')
        : '<div class="empty">Шаблонов пока нет.</div>';

    return `
      <section class="hero-card">
        <h2>Команды прямого выполнения</h2>
        <div class="inner-subtabs">
          <button type="button" class="subtab-button ${this._directSubtab === DIRECT_SUBTABS.basic ? 'active' : ''}" data-direct-subtab="${DIRECT_SUBTABS.basic}">Основные</button>
          <button type="button" class="subtab-button ${this._directSubtab === DIRECT_SUBTABS.templates ? 'active' : ''}" data-direct-subtab="${DIRECT_SUBTABS.templates}">Шаблоны</button>
        </div>
      </section>
      ${this._directSubtab === DIRECT_SUBTABS.basic ? `
        <section class="hero-card">
          <h3>Основные</h3>
          <p>Управление direct-командами.</p>
          <div class="toolbar">
            <button type="button" class="secondary" data-action="reload-direct" ${this._directLoading ? 'disabled' : ''}>${this._directLoading ? 'Обновление...' : 'Обновить'}</button>
            <button type="button" class="primary" data-action="create-direct">+ Создать</button>
          </div>
          ${this._directError ? `<div class="status error">${escapeHtml(this._directError)}</div>` : ''}
        </section>
        <section class="help-card command-list">
          ${listMarkup}
        </section>
      ` : `
        <section class="hero-card">
          <h3>Шаблоны</h3>
          <p>Управление шаблонами subDirectControl.</p>
          <div class="toolbar">
            <button type="button" class="secondary" data-action="reload-template" ${this._templateLoading ? 'disabled' : ''}>${this._templateLoading ? 'Обновление...' : 'Обновить'}</button>
            <button type="button" class="primary" data-action="create-template">+ Создать</button>
          </div>
          ${this._templateError ? `<div class="status error">${escapeHtml(this._templateError)}</div>` : ''}
        </section>
        <section class="help-card command-list">
          ${templateListMarkup}
        </section>
      `}
    `;
  }

  _renderStub(title, description) {
    return `
      <section class="hero-card">
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(description)}</p>
      </section>
      <section class="help-card">
        <div class="empty">Раздел подготовлен.</div>
      </section>
    `;
  }

  _renderDirectModal() {
    if (!this._directModalOpen) {
      return '';
    }
    const title = this._directModalMode === 'edit' ? 'Редактировать direct-команду' : 'Создать direct-команду';
    const isCommandType = this._directDraft.typeData === 'command';
    const subItems = Array.isArray(this._directDraft.subDirectControlItems) ? this._directDraft.subDirectControlItems : [];
    return `
      <div class="modal-backdrop" data-action="close-direct"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
        <div class="modal-header">
          <h3>${escapeHtml(title)}</h3>
          <button type="button" class="ghost" data-action="close-direct" ${this._directModalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
        <div class="modal-grid">
          <label>
            <span>title</span>
            <input data-direct-field="title" value="${escapeHtml(this._directDraft.title)}" />
          </label>
          <label>
            <span>uuidDirect</span>
            <div class="field-inline field-inline-icon">
              <input data-direct-field="uuidDirect" value="${escapeHtml(this._directDraft.uuidDirect)}" />
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-direct-uuid"
                aria-label="Обновить uuidDirect"
                title="Обновить uuidDirect"
                ${this._directModalSaving ? 'disabled' : ''}
              >↻</button>
            </div>
          </label>
          <label>
            <span>directControl.type</span>
            <input data-direct-field="type" value="${escapeHtml(this._directDraft.type)}" />
          </label>
          <label>
            <span>directControl.typeData</span>
            <select data-direct-field="typeData">
              ${DIRECT_TYPE_DATA_OPTIONS.map((option) => `
                <option value="${option}" ${this._directDraft.typeData === option ? 'selected' : ''}>${option}</option>
              `).join('')}
            </select>
          </label>
          ${isCommandType ? `
            <label class="field-span-2">
              <span>voiceCommands</span>
              <textarea rows="3" data-direct-field="voiceCommands">${escapeHtml(this._directDraft.voiceCommands)}</textarea>
            </label>
            <label class="field-span-2">
              <span>manual</span>
              <div class="switch-control">
                <input type="checkbox" data-direct-field="manual" ${this._directDraft.manual ? 'checked' : ''} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${this._directDraft.manual ? 'Включено' : 'Выключено'}</span>
              </div>
            </label>
            ${this._directDraft.manual ? `
              <section class="field-span-2 array-builder">
                <div class="array-builder-header">
                  <span>subDirectControl</span>
                  <button type="button" class="secondary compact-button" data-action="add-direct-sub-control-item">+ Добавить</button>
                </div>
                <div class="array-builder-list">
                  ${subItems.map((item, index) => {
                    const isOpen = this._openDirectSubControlItemIds.has(item.id);
                    return `
                      <section class="response-item-card ${isOpen ? 'open' : ''}">
                        <button
                          type="button"
                          class="response-item-toggle"
                          data-action="toggle-direct-sub-control-item"
                          data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                        >
                          <span>Элемент ${index + 1}</span>
                          <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                        </button>
                        ${isOpen ? `
                          <div class="response-item-grid">
                            <label>
                              <span>subType</span>
                              <input
                                data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                                data-direct-sub-control-item-field="subType"
                                value="${escapeHtml(item.subType)}"
                              />
                            </label>
                            <label>
                              <span>subVoiceCommands</span>
                              <textarea
                                rows="3"
                                data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                                data-direct-sub-control-item-field="subVoiceCommands"
                              >${escapeHtml(item.subVoiceCommands)}</textarea>
                            </label>
                            <div class="response-item-actions">
                              <button
                                type="button"
                                class="ghost compact-delete-button"
                                data-action="remove-direct-sub-control-item"
                                data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                              >Удалить элемент</button>
                            </div>
                          </div>
                        ` : ''}
                      </section>
                    `;
                  }).join('')}
                  ${subItems.length === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
                </div>
              </section>
            ` : `
              <label class="field-span-2">
                <span>subDirectControlArray</span>
                <select data-direct-field="subDirectControlArray">
                  <option value="" ${this._directDraft.subDirectControlArray ? '' : 'selected'}>Пока пусто (добавим позже)</option>
                </select>
              </label>
            `}
          ` : ''}
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-direct" ${this._directModalSaving ? 'disabled' : ''}>Отмена</button>
          <button type="button" class="primary" data-action="save-direct" ${this._directModalSaving ? 'disabled' : ''}>${this._directModalSaving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
    `;
  }

  _renderTemplateModal() {
    if (!this._templateModalOpen) {
      return '';
    }
    const title = this._templateModalMode === 'edit' ? 'Редактировать шаблон' : 'Создать шаблон';
    const subItems = Array.isArray(this._templateDraft.subDirectControlItems) ? this._templateDraft.subDirectControlItems : [];
    return `
      <div class="modal-backdrop" data-action="close-template"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
        <div class="modal-header">
          <h3>${escapeHtml(title)}</h3>
          <button type="button" class="ghost" data-action="close-template" ${this._templateModalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
        <div class="modal-grid">
          <label class="field-span-2">
            <span>title</span>
            <input data-template-field="title" value="${escapeHtml(this._templateDraft.title)}" />
          </label>
          <section class="field-span-2 array-builder">
            <div class="array-builder-header">
              <span>subDirectControl</span>
              <button type="button" class="secondary compact-button" data-action="add-template-sub-control-item">+ Добавить</button>
            </div>
            <div class="array-builder-list">
              ${subItems.map((item, index) => {
                const isOpen = this._openTemplateSubControlItemIds.has(item.id);
                return `
                  <section class="response-item-card ${isOpen ? 'open' : ''}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-template-sub-control-item"
                      data-template-sub-control-item-id="${escapeHtml(item.id)}"
                    >
                      <span>Элемент ${index + 1}</span>
                      <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                    </button>
                    ${isOpen ? `
                      <div class="response-item-grid">
                        <label>
                          <span>subType</span>
                          <input
                            data-template-sub-control-item-id="${escapeHtml(item.id)}"
                            data-template-sub-control-item-field="subType"
                            value="${escapeHtml(item.subType)}"
                          />
                        </label>
                        <label>
                          <span>subVoiceCommands</span>
                          <textarea
                            rows="3"
                            data-template-sub-control-item-id="${escapeHtml(item.id)}"
                            data-template-sub-control-item-field="subVoiceCommands"
                          >${escapeHtml(item.subVoiceCommands)}</textarea>
                        </label>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-template-sub-control-item"
                            data-template-sub-control-item-id="${escapeHtml(item.id)}"
                          >Удалить элемент</button>
                        </div>
                      </div>
                    ` : ''}
                  </section>
                `;
              }).join('')}
              ${subItems.length === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-template" ${this._templateModalSaving ? 'disabled' : ''}>Отмена</button>
          <button type="button" class="primary" data-action="save-template" ${this._templateModalSaving ? 'disabled' : ''}>${this._templateModalSaving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
    `;
  }

  _renderDefaultsTab() {
    const listMarkup = DEFAULT_COMMAND_CONFIGS.map((config, index) => {
      const draft = this._defaultsByType[config.type] ?? this._newDefaultsDraft(config.type);
      const metaParts = [
        `type: ${config.type}`,
        `endStatus: ${draft.endStatus ? 'on' : 'off'}`,
      ];
      if (config.supportsLlm) {
        metaParts.push(`LLM: ${draft.llmEnabled ? 'on' : 'off'}`);
      }

      return `
        <button type="button" class="command-item" data-action="open-defaults-item" data-default-type="${escapeHtml(config.type)}" ${this._defaultsLoading ? 'disabled' : ''}>
          <span class="command-item-title">${index + 1}. ${escapeHtml(config.title)}</span>
          <span class="command-item-meta">
            ${metaParts.map((part) => `<span>${escapeHtml(part)}</span>`).join('')}
          </span>
        </button>
      `;
    }).join('');

    return `
      <section class="hero-card">
        <h2>Дефолтные команды</h2>
        <p>Настройка дефолтной реакции, если команда не найдена.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload-defaults" ${this._defaultsLoading ? 'disabled' : ''}>${this._defaultsLoading ? 'Обновление...' : 'Обновить'}</button>
        </div>
        ${this._defaultsError ? `<div class="status error">${escapeHtml(this._defaultsError)}</div>` : ''}
      </section>
      <section class="help-card command-list">
        ${listMarkup}
      </section>
    `;
  }

  _renderDefaultsModal() {
    if (!this._defaultsModalOpen) {
      return '';
    }
    const type = this._defaultsActiveType;
    const config = this._defaultConfig(type);
    const draft = this._defaultsByType[type] ?? this._newDefaultsDraft(type);
    return `
      <div class="modal-backdrop" data-action="close-defaults"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(config.title)}">
        <div class="modal-header">
          <h3>${escapeHtml(config.title)}</h3>
          <button type="button" class="ghost" data-action="close-defaults" ${this._defaultsModalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
        <div class="modal-grid">
          <label class="field-span-2">
            <span>title</span>
            <input data-defaults-field="title" value="${escapeHtml(config.title)}" disabled />
          </label>
          <label>
            <span>endStatus</span>
            <div class="switch-control">
              <input type="checkbox" data-defaults-field="endStatus" ${draft.endStatus ? 'checked' : ''} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${draft.endStatus ? 'Включено' : 'Выключено'}</span>
            </div>
          </label>
          ${config.supportsLlm ? `
            <label>
              <span>LLM</span>
              <div class="switch-control">
                <input type="checkbox" data-defaults-field="llmEnabled" ${draft.llmEnabled ? 'checked' : ''} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${draft.llmEnabled ? 'Включено' : 'Выключено'}</span>
              </div>
            </label>
          ` : ''}
          <label class="field-span-2">
            <span>message</span>
            <input data-defaults-field="message" value="${escapeHtml(draft.message)}" />
          </label>
          ${config.supportsLlm && draft.llmEnabled ? `
            <label class="field-span-2">
              <span>system</span>
              <textarea rows="6" data-defaults-field="system">${escapeHtml(draft.system)}</textarea>
            </label>
            <label class="field-span-2">
              <span>model</span>
              <input data-defaults-field="model" value="${escapeHtml(draft.model)}" />
            </label>
          ` : ''}
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-defaults" ${this._defaultsModalSaving ? 'disabled' : ''}>Отмена</button>
          <button type="button" class="primary" data-action="save-defaults" ${this._defaultsModalSaving ? 'disabled' : ''}>${this._defaultsModalSaving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
    `;
  }

  _renderModal() {
    if (!this._modalOpen) {
      return '';
    }
    const title = this._modalMode === 'edit' ? 'Редактировать сценарий' : 'Создать сценарий';
    return `
      <div class="modal-backdrop" data-action="close"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
        <div class="modal-header">
          <h3>${escapeHtml(title)}</h3>
          <button type="button" class="ghost" data-action="close" ${this._modalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
        <div class="modal-grid">
          <label><span>Title</span><input data-field="title" value="${escapeHtml(this._draft.title)}" /></label>
          <label>
            <span>uuidDialog</span>
            <div class="field-inline field-inline-icon">
              <input data-field="uuidDialog" value="${escapeHtml(this._draft.uuidDialog)}" />
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-uuid"
                aria-label="Обновить uuidDialog"
                title="Обновить uuidDialog"
                ${this._modalSaving ? 'disabled' : ''}
              >↻</button>
            </div>
          </label>
          <label><span>type</span><input data-field="type" value="${escapeHtml(this._draft.type)}" /></label>
          <label>
            <span>answerType</span>
            <select data-field="answerType">
              <option value="default" ${this._draft.answerType === 'default' ? 'selected' : ''}>default</option>
              <option value="redis" ${this._draft.answerType === 'redis' ? 'selected' : ''}>redis</option>
            </select>
          </label>
          <div class="response-inline-row field-span-2">
            <label>
              <span>endStatus</span>
              <div class="switch-control">
                <input type="checkbox" data-field="endStatus" ${this._draft.endStatus ? 'checked' : ''} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${this._draft.endStatus ? 'Включено' : 'Выключено'}</span>
              </div>
            </label>
            <label>
              <span>forwardText</span>
              <div class="switch-control">
                <input type="checkbox" data-field="forwardText" ${this._draft.forwardText ? 'checked' : ''} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${this._draft.forwardText ? 'Включено' : 'Выключено'}</span>
              </div>
            </label>
          </div>
          <label class="field-span-2">
            <span>voiceCommands (string)</span>
            <textarea rows="6" class="voice-commands-field" data-field="voiceCommands">${escapeHtml(this._draft.voiceCommands)}</textarea>
          </label>
          <section class="field-span-2 response-accordion open">
            <div class="response-accordion-head-static">
              <span class="response-accordion-title">voiceResponseArray</span>
            </div>
            <div class="response-accordion-body">
              <div class="response-items">
                ${(Array.isArray(this._draft.responseItems) ? this._draft.responseItems : []).map((responseItem, index) => {
                  const isOpen = this._openResponseItemIds.has(responseItem.id);
                  return `
                    <section class="response-item-card ${isOpen ? 'open' : ''}">
                      <button
                        type="button"
                        class="response-item-toggle"
                        data-action="toggle-response-item"
                        data-response-item-id="${escapeHtml(responseItem.id)}"
                      >
                        <span>Элемент ${index + 1}</span>
                        <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                      </button>
                      ${isOpen ? `
                        <div class="response-item-grid">
                          <div class="response-inline-row">
                            <label>
                              <span>type</span>
                              <input
                                data-response-item-id="${escapeHtml(responseItem.id)}"
                                data-response-item-field="type"
                                value="${escapeHtml(responseItem.type)}"
                                placeholder="default"
                              />
                            </label>
                            <label>
                              <span>LLM</span>
                              <div class="switch-control">
                                <input
                                  type="checkbox"
                                  data-response-item-id="${escapeHtml(responseItem.id)}"
                                  data-response-item-field="llmEnabled"
                                  ${responseItem.llmEnabled ? 'checked' : ''}
                                />
                                <span class="switch-slider" aria-hidden="true"></span>
                                <span class="switch-label">${responseItem.llmEnabled ? 'Включено' : 'Выключено'}</span>
                              </div>
                            </label>
                          </div>
                          <label>
                            <span>voiceResponse</span>
                            <textarea
                              rows="3"
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                              data-response-item-field="voiceResponse"
                            >${escapeHtml(responseItem.voiceResponse)}</textarea>
                          </label>
                          ${responseItem.llmEnabled ? `
                            <label>
                              <span>system</span>
                              <textarea
                                rows="3"
                                data-response-item-id="${escapeHtml(responseItem.id)}"
                                data-response-item-field="system"
                              >${escapeHtml(responseItem.system)}</textarea>
                            </label>
                            <label>
                              <span>model</span>
                              <input
                                data-response-item-id="${escapeHtml(responseItem.id)}"
                                data-response-item-field="model"
                                value="${escapeHtml(responseItem.model)}"
                              />
                            </label>
                          ` : ''}
                          ${(this._draft.responseItems?.length || 0) > 1 ? `
                            <div class="response-item-actions">
                              <button
                                type="button"
                                class="ghost compact-delete-button"
                                data-action="remove-voice-response-item"
                                data-response-item-id="${escapeHtml(responseItem.id)}"
                              >Удалить элемент</button>
                            </div>
                          ` : ''}
                        </div>
                      ` : ''}
                    </section>
                  `;
                }).join('')}
              </div>
              <button type="button" class="secondary compact-button" data-action="add-voice-response-item">+ Добавить элемент</button>
            </div>
          </section>
          <section class="field-span-2 array-builder">
            <div class="array-builder-header">
              <span>nextDirectControl</span>
              <button type="button" class="secondary compact-button" data-action="add-direct-control-item">+ Добавить элемент</button>
            </div>
            <div class="array-builder-list">
              ${(Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : []).map((item, index) => {
                const isOpen = this._openDirectControlItemIds.has(item.id);
                return `
                  <section class="response-item-card ${isOpen ? 'open' : ''}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-direct-control-item"
                      data-direct-control-item-id="${escapeHtml(item.id)}"
                    >
                      <span>Элемент ${index + 1}</span>
                      <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                    </button>
                    ${isOpen ? `
                      <div class="response-item-grid">
                        <label>
                          <span>uuid</span>
                          <input
                            data-direct-control-item-id="${escapeHtml(item.id)}"
                            value="${escapeHtml(item.uuid)}"
                            placeholder="uuid"
                          />
                        </label>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-direct-control-item"
                            data-direct-control-item-id="${escapeHtml(item.id)}"
                          >Удалить элемент</button>
                        </div>
                      </div>
                    ` : ''}
                  </section>
                `;
              }).join('')}
              ${(this._draft.directControlItems?.length || 0) === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
            </div>
          </section>
          <section class="field-span-2 array-builder">
            <div class="array-builder-header">
              <span>nextAction</span>
              <button type="button" class="secondary compact-button" data-action="add-next-action-item">+ Добавить элемент</button>
            </div>
            <div class="array-builder-list">
              ${(Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : []).map((item, index) => {
                const isOpen = this._openNextActionItemIds.has(item.id);
                return `
                  <section class="response-item-card ${isOpen ? 'open' : ''}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-next-action-item"
                      data-next-action-item-id="${escapeHtml(item.id)}"
                    >
                      <span>Элемент ${index + 1}</span>
                      <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                    </button>
                    ${isOpen ? `
                      <div class="response-item-grid">
                        <div class="response-inline-row">
                          <label>
                            <span>typeComponent</span>
                            <select data-next-action-item-id="${escapeHtml(item.id)}" data-next-action-item-field="typeComponent">
                              ${TYPE_COMPONENT_OPTIONS.map((option) => `
                                <option value="${option}" ${item.typeComponent === option ? 'selected' : ''}>${option}</option>
                              `).join('')}
                            </select>
                          </label>
                          <label>
                            <span>uuid</span>
                            <input
                              data-next-action-item-id="${escapeHtml(item.id)}"
                              data-next-action-item-field="uuid"
                              value="${escapeHtml(item.uuid)}"
                              placeholder="uuid"
                            />
                          </label>
                        </div>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-next-action-item"
                            data-next-action-item-id="${escapeHtml(item.id)}"
                          >Удалить элемент</button>
                        </div>
                      </div>
                    ` : ''}
                  </section>
                `;
              }).join('')}
              ${(this._draft.nextActionItems?.length || 0) === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close" ${this._modalSaving ? 'disabled' : ''}>Отмена</button>
          <button type="button" class="primary" data-action="save" ${this._modalSaving ? 'disabled' : ''}>${this._modalSaving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
    `;
  }

  _bind() {
    const root = this.shadowRoot;
    if (this._bindController) {
      this._bindController.abort();
    }
    this._bindController = new AbortController();
    const { signal } = this._bindController;
    const on = (element, eventName, handler) => {
      element?.addEventListener(eventName, handler, { signal });
    };

    root.querySelectorAll('[data-tab]').forEach((element) => {
      on(element, 'click', () => this._setTab(element.dataset.tab));
    });

    on(root.querySelector('[data-action="reload"]'), 'click', () => this._loadPage(this._page || 1));
    on(root.querySelector('[data-action="create"]'), 'click', () => this._openCreateModal());
    on(root.querySelector('[data-action="prev"]'), 'click', () => this._loadPage(this._page - 1));
    on(root.querySelector('[data-action="next"]'), 'click', () => this._loadPage(this._page + 1));
    on(root.querySelector('[data-action="reload-direct"]'), 'click', () => this._reloadDirectCommands());
    on(root.querySelector('[data-action="create-direct"]'), 'click', () => this._openCreateDirectModal());
    on(root.querySelector('[data-action="reload-template"]'), 'click', () => this._reloadTemplateCommands());
    on(root.querySelector('[data-action="create-template"]'), 'click', () => this._openCreateTemplateModal());
    on(root.querySelector('[data-action="reload-defaults"]'), 'click', () => this._reloadDefaultsCommands());
    root.querySelectorAll('[data-action="open-defaults-item"]').forEach((element) => {
      on(element, 'click', () => this._openDefaultsModal(element.dataset.defaultType));
    });
    root.querySelectorAll('[data-action="edit"]').forEach((element) => {
      on(element, 'click', () => this._openEditModal(element.dataset.commandId));
    });
    root.querySelectorAll('[data-action="edit-direct"]').forEach((element) => {
      on(element, 'click', () => this._openEditDirectModal(element.dataset.directId));
    });
    root.querySelectorAll('[data-action="edit-template"]').forEach((element) => {
      on(element, 'click', () => this._openEditTemplateModal(element.dataset.templateId));
    });
    root.querySelectorAll('[data-direct-subtab]').forEach((element) => {
      on(element, 'click', () => this._setDirectSubtab(element.dataset.directSubtab));
    });

    root.querySelectorAll('[data-action="close"]').forEach((element) => {
      on(element, 'click', () => this._closeModal());
    });
    root.querySelectorAll('[data-action="close-direct"]').forEach((element) => {
      on(element, 'click', () => this._closeDirectModal());
    });
    root.querySelectorAll('[data-action="close-template"]').forEach((element) => {
      on(element, 'click', () => this._closeTemplateModal());
    });
    root.querySelectorAll('[data-action="close-defaults"]').forEach((element) => {
      on(element, 'click', () => this._closeDefaultsModal());
    });
    on(root.querySelector('[data-action="save"]'), 'click', () => this._saveModal());
    on(root.querySelector('[data-action="save-direct"]'), 'click', () => this._saveDirectModal());
    on(root.querySelector('[data-action="save-template"]'), 'click', () => this._saveTemplateModal());
    on(root.querySelector('[data-action="save-defaults"]'), 'click', () => this._saveDefaultsModal());
    on(root.querySelector('[data-action="generate-uuid"]'), 'click', () => this._refreshUuid());
    on(root.querySelector('[data-action="generate-direct-uuid"]'), 'click', () => this._refreshDirectUuid());
    on(root.querySelector('[data-action="add-voice-response-item"]'), 'click', () => this._addVoiceResponseItem());
    on(root.querySelector('[data-action="add-direct-control-item"]'), 'click', () => this._addDirectControlItem());
    on(root.querySelector('[data-action="add-next-action-item"]'), 'click', () => this._addNextActionItem());
    on(root.querySelector('[data-action="add-direct-sub-control-item"]'), 'click', () => this._addDirectSubControlItem());
    on(root.querySelector('[data-action="add-template-sub-control-item"]'), 'click', () => this._addTemplateSubControlItem());
    root.querySelectorAll('[data-action="remove-voice-response-item"]').forEach((element) => {
      on(element, 'click', () => this._removeVoiceResponseItem(element.dataset.responseItemId));
    });
    root.querySelectorAll('[data-action="remove-direct-control-item"]').forEach((element) => {
      on(element, 'click', () => this._removeDirectControlItem(element.dataset.directControlItemId));
    });
    root.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach((element) => {
      on(element, 'click', () => this._toggleDirectControlItem(element.dataset.directControlItemId));
    });
    root.querySelectorAll('[data-action="remove-next-action-item"]').forEach((element) => {
      on(element, 'click', () => this._removeNextActionItem(element.dataset.nextActionItemId));
    });
    root.querySelectorAll('[data-action="toggle-next-action-item"]').forEach((element) => {
      on(element, 'click', () => this._toggleNextActionItem(element.dataset.nextActionItemId));
    });
    root.querySelectorAll('[data-action="toggle-response-item"]').forEach((element) => {
      on(element, 'click', () => this._toggleResponseItem(element.dataset.responseItemId));
    });
    root.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach((element) => {
      on(element, 'click', () => this._removeDirectSubControlItem(element.dataset.directSubControlItemId));
    });
    root.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach((element) => {
      on(element, 'click', () => this._toggleDirectSubControlItem(element.dataset.directSubControlItemId));
    });
    root.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach((element) => {
      on(element, 'click', () => this._removeTemplateSubControlItem(element.dataset.templateSubControlItemId));
    });
    root.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach((element) => {
      on(element, 'click', () => this._toggleTemplateSubControlItem(element.dataset.templateSubControlItemId));
    });

    root.querySelectorAll('[data-field]').forEach((element) => {
      const field = element.dataset.field;
      const onInput = (event) => {
        const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
        this._updateDraft(field, value);
      };
      on(element, 'input', onInput);
      if (element.type === 'checkbox' || element.tagName === 'SELECT') {
        on(element, 'change', onInput);
      }
    });
    root.querySelectorAll('[data-direct-field]').forEach((element) => {
      const field = element.dataset.directField;
      const onInput = (event) => {
        const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
        this._updateDirectDraft(field, value);
        if (field === 'typeData' && event.currentTarget.value !== 'command') {
          this._updateDirectDraft('manual', false);
          this._updateDirectDraft('voiceCommands', '');
        }
        if (element.type === 'checkbox' || element.tagName === 'SELECT') {
          this._render();
        }
      };
      on(element, 'input', onInput);
      if (element.type === 'checkbox' || element.tagName === 'SELECT') {
        on(element, 'change', onInput);
      }
    });
    root.querySelectorAll('[data-template-field]').forEach((element) => {
      const field = element.dataset.templateField;
      const handler = (event) => this._updateTemplateDraft(field, event.currentTarget.value);
      on(element, 'input', handler);
      on(element, 'change', handler);
    });
    root.querySelectorAll('[data-defaults-field]').forEach((element) => {
      const field = element.dataset.defaultsField;
      const handler = (event) => {
        const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
        this._updateDefaultsDraft(field, value);
        const activeConfig = this._defaultConfig(this._defaultsActiveType);
        if (field === 'llmEnabled' && element.type === 'checkbox' && activeConfig.supportsLlm) {
          this._render();
        }
      };
      on(element, 'input', handler);
      if (element.type === 'checkbox' || element.tagName === 'SELECT') {
        on(element, 'change', handler);
      }
    });
    root.querySelectorAll('[data-response-item-id][data-response-item-field]').forEach((element) => {
      const itemId = element.dataset.responseItemId;
      const field = element.dataset.responseItemField;
      const onInput = (event) => {
        const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
        this._updateVoiceResponseItem(itemId, field, value);
        if (element.type === 'checkbox') {
          this._render();
        }
      };
      on(element, 'input', onInput);
      if (element.type === 'checkbox') {
        on(element, 'change', onInput);
      }
    });
    root.querySelectorAll('[data-direct-control-item-id]').forEach((element) => {
      const itemId = element.dataset.directControlItemId;
      on(element, 'input', (event) => this._updateDirectControlItem(itemId, event.currentTarget.value));
      on(element, 'change', (event) => this._updateDirectControlItem(itemId, event.currentTarget.value));
    });
    root.querySelectorAll('[data-next-action-item-id][data-next-action-item-field]').forEach((element) => {
      const itemId = element.dataset.nextActionItemId;
      const field = element.dataset.nextActionItemField;
      const handler = (event) => this._updateNextActionItem(itemId, field, event.currentTarget.value);
      on(element, 'input', handler);
      on(element, 'change', handler);
    });
    root.querySelectorAll('[data-direct-sub-control-item-id][data-direct-sub-control-item-field]').forEach((element) => {
      const itemId = element.dataset.directSubControlItemId;
      const field = element.dataset.directSubControlItemField;
      const handler = (event) => this._updateDirectSubControlItem(itemId, field, event.currentTarget.value);
      on(element, 'input', handler);
      on(element, 'change', handler);
    });
    root.querySelectorAll('[data-template-sub-control-item-id][data-template-sub-control-item-field]').forEach((element) => {
      const itemId = element.dataset.templateSubControlItemId;
      const field = element.dataset.templateSubControlItemField;
      const handler = (event) => this._updateTemplateSubControlItem(itemId, field, event.currentTarget.value);
      on(element, 'input', handler);
      on(element, 'change', handler);
    });

    root.querySelectorAll('input, select, button, textarea').forEach((element) => {
      ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'focusin'].forEach((eventName) => {
        on(element, eventName, (event) => this._swallowUiEvent(event));
      });
    });
  }

  _render() {
    const body = this._tab === TABS.primary
      ? this._renderCommandsTab()
      : this._tab === TABS.secondary
        ? this._renderCommandsTab()
      : this._tab === TABS.direct
        ? this._renderDirectCommandsTab()
        : this._renderDefaultsTab();

    const markup = `
      <style>
        :host {
          --ui-border: rgba(34, 45, 67, 0.14);
          --ui-text: #1b2432;
          --ui-muted: #5c667a;
          --ui-accent: #234f7d;
          --ui-accent-warm: #a64b2a;
          display: grid;
          gap: 12px;
          color: var(--ui-text);
        }
        * { box-sizing: border-box; min-width: 0; }
        .hero-card, .help-card {
          background: linear-gradient(175deg, rgba(255,255,255,.94), rgba(255,255,255,.86));
          border: 1px solid var(--ui-border);
          border-radius: 20px;
          box-shadow: 0 12px 28px rgba(31, 41, 55, 0.07);
          backdrop-filter: blur(6px);
        }
        .hero-card { padding: 24px; }
        h2,h3 { margin:0; }
        p { margin: 6px 0 0; color: var(--ui-muted); }
        .subtabs-dock {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          width: 100%;
          padding: 8px 0 2px;
          border-radius: 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }
        .subtabs { display:flex; flex-wrap:wrap; gap:10px; width: 100%; }
        .inner-subtabs { margin-top: 14px; display:flex; flex-wrap:wrap; gap:10px; }
        .subtab-button {
          border: 1px solid var(--ui-border);
          border-radius: 999px;
          background: rgba(255,255,255,.86);
          color: var(--ui-muted);
          padding: 10px 16px;
          cursor: pointer;
          font-weight: 600;
          transition: transform .12s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
        }
        .subtab-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 7px 16px rgba(31,41,55,.12);
          background: rgba(255,255,255,.98);
        }
        .subtab-button.active {
          color: #fff;
          background: linear-gradient(135deg, var(--ui-accent), #4c78a8);
          border-color: transparent;
          box-shadow: 0 10px 20px rgba(35,79,125,.34);
        }
        .toolbar { margin-top:16px; display:flex; gap:10px; flex-wrap:wrap; }
        button {
          border:none;
          border-radius:999px;
          padding:11px 16px;
          font:inherit;
          cursor:pointer;
          transition: transform .12s ease, box-shadow .2s ease, opacity .2s ease;
        }
        button:hover { transform: translateY(-1px); }
        .primary {
          color:#fff;
          background:linear-gradient(135deg,var(--ui-accent-warm),#d4743d);
          box-shadow: 0 8px 18px rgba(166,75,42,.3);
        }
        .secondary {
          color:#fff;
          background:linear-gradient(135deg,var(--ui-accent),#4c78a8);
          box-shadow: 0 8px 18px rgba(35,79,125,.25);
        }
        .ghost { background:rgba(34,45,67,.08); color:var(--ui-text); }
        button:disabled { opacity: .55; cursor: not-allowed; transform: none; box-shadow: none; }
        .status {
          padding: 11px 14px;
          border-radius: 12px;
          border: 1px solid transparent;
          box-shadow: 0 6px 14px rgba(31,41,55,.05);
        }
        .status.error {
          background: rgba(180,43,43,.09);
          color: #8a2323;
          border-color: rgba(180,43,43,.24);
        }
        .status.ok {
          background: rgba(35,111,73,.1);
          color: #155c3a;
          border-color: rgba(35,111,73,.24);
        }
        .help-card { padding:20px; }
        .command-list { display:grid; gap:10px; }
        .command-item {
          display:grid;
          gap:8px;
          width:100%;
          text-align:left;
          border:1px solid var(--ui-border);
          border-radius:14px;
          background:rgba(255,255,255,.84);
          color:var(--ui-text);
          padding:14px;
          transition: transform .12s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .command-item:hover {
          transform: translateY(-1px);
          border-color: rgba(35,79,125,.3);
          box-shadow: 0 9px 20px rgba(31,41,55,.1);
        }
        .command-item-title { font-size:16px; font-weight:700; }
        .command-item-meta { display:flex; flex-wrap:wrap; gap:8px; color:var(--ui-muted); font-size:13px; }
        .command-pagination { display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:8px; }
        .empty {
          padding: 18px 6px;
          color: var(--ui-muted);
          text-align: center;
          border: 1px dashed rgba(34,45,67,.2);
          border-radius: 12px;
          background: rgba(255,255,255,.56);
        }
        label { display:grid; gap:8px; }
        label span { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--ui-accent); }
        input, select, textarea {
          width:100%;
          border:1px solid var(--ui-border);
          border-radius:14px;
          padding:12px 14px;
          font:inherit;
          background:rgba(255,255,255,.95);
          color:var(--ui-text);
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: rgba(35,79,125,.48);
          box-shadow: 0 0 0 3px rgba(35,79,125,.12);
        }
        textarea { resize: vertical; }
        .switch-control {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 6px 0;
        }
        .switch-control input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .switch-slider {
          position: relative;
          width: 54px;
          height: 30px;
          border-radius: 999px;
          background: rgba(34, 45, 67, 0.2);
          border: 1px solid rgba(34, 45, 67, 0.15);
          transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .switch-slider::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 3px 8px rgba(15, 23, 42, 0.25);
          transition: transform .2s ease;
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider {
          background: linear-gradient(135deg, var(--ui-accent), #4c78a8);
          border-color: transparent;
          box-shadow: 0 8px 18px rgba(35,79,125,.28);
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider::after {
          transform: translateX(24px);
        }
        .switch-label {
          font-weight: 600;
          color: var(--ui-muted);
        }
        .voice-commands-field {
          min-height: 140px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .voice-commands-field::-webkit-scrollbar { width: 0; height: 0; }
        .response-accordion {
          border: 1px solid var(--ui-border);
          border-radius: 16px;
          background: rgba(255,255,255,.72);
          overflow: hidden;
        }
        .response-accordion-head-static {
          padding: 12px 14px;
          border-bottom: 1px solid var(--ui-border);
        }
        .response-accordion-title {
          text-transform: uppercase;
          letter-spacing: .08em;
          font-size: 13px;
          color: var(--ui-accent);
        }
        .response-accordion-icon {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: rgba(34,45,67,.08);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          line-height: 1;
        }
        .response-accordion-body {
          display: grid;
          gap: 12px;
          padding: 14px;
        }
        .response-items {
          display: grid;
          gap: 12px;
        }
        .response-item-card {
          display: grid;
          gap: 0;
          border: 1px solid var(--ui-border);
          border-radius: 14px;
          background: rgba(255,255,255,.86);
        }
        .response-item-toggle {
          width: 100%;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 11px 12px;
          font-weight: 700;
          text-align: left;
          color: var(--ui-text);
        }
        .response-item-card.open .response-item-toggle {
          border-bottom: 1px solid var(--ui-border);
        }
        .response-item-grid {
          display: grid;
          gap: 10px;
          padding: 12px;
        }
        .response-inline-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          align-items: start;
        }
        .response-item-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: 2px;
        }
        .array-builder {
          display: grid;
          gap: 10px;
          padding: 12px;
          border: 1px solid var(--ui-border);
          border-radius: 14px;
          background: rgba(255,255,255,.72);
        }
        .array-builder-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }
        .array-builder-header > span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: var(--ui-accent);
        }
        .array-builder-list {
          display: grid;
          gap: 10px;
        }
        .array-item-row {
          display: flex;
          align-items: end;
          gap: 10px;
        }
        .array-item-row .field-grow {
          flex: 1 1 auto;
        }
        .array-item-row-2 {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
          align-items: end;
          gap: 10px;
        }
        .compact-delete-button {
          padding: 7px 12px;
          font-size: 12px;
        }
        .modal-backdrop { position:fixed; inset:0; background:rgba(15,23,42,.5); z-index:40; }
        .modal {
          position:fixed;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:min(860px,calc(100vw - 32px));
          max-height:calc(100vh - 40px);
          overflow:auto;
          padding:18px;
          border-radius:20px;
          border:1px solid var(--ui-border);
          background:rgba(255,255,255,.98);
          z-index:41;
          display:grid;
          gap:14px;
          box-shadow: 0 24px 60px rgba(15,23,42,.24);
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .modal::-webkit-scrollbar { width: 0; height: 0; }
        .modal-header, .modal-footer { display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .modal-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
        .field-inline { display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center; }
        .field-inline-icon {
          position: relative;
          display: block;
        }
        .field-inline-icon input {
          padding-right: 48px;
        }
        .inline-icon-button {
          position: absolute;
          top: 50%;
          right: 8px;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          font-size: 17px;
          line-height: 1;
        }
        .inline-icon-button:hover,
        .inline-icon-button:focus-visible {
          transform: translateY(-50%);
        }
        .field-span-2 { grid-column:1 / -1; }
        @media (max-width: 900px) {
          .modal-grid { grid-template-columns:1fr; }
          .response-inline-row { grid-template-columns: 1fr; }
          .array-item-row-2 { grid-template-columns: 1fr; }
          .array-item-row { flex-direction: column; align-items: stretch; }
        }
        @media (max-width: 700px) {
          .modal { inset:0; transform:none; width:100vw; height:100vh; max-height:none; border-radius:0; border:none; padding:16px; }
        }
      </style>
      <section class="subtabs-dock">
        <div class="subtabs">
          <button type="button" class="subtab-button ${this._tab === TABS.primary ? 'active' : ''}" data-tab="${TABS.primary}">Основные команды</button>
          <button type="button" class="subtab-button ${this._tab === TABS.secondary ? 'active' : ''}" data-tab="${TABS.secondary}">Второстепенные команды</button>
          <button type="button" class="subtab-button ${this._tab === TABS.direct ? 'active' : ''}" data-tab="${TABS.direct}">Команды прямого выполнения</button>
          <button type="button" class="subtab-button ${this._tab === TABS.defaults ? 'active' : ''}" data-tab="${TABS.defaults}">Дефолтные команды</button>
        </div>
      </section>
      ${this._error ? `<div class="status error">${escapeHtml(this._error)}</div>` : ''}
      ${this._status ? `<div class="status ok">${escapeHtml(this._status)}</div>` : ''}
      ${body}
      ${this._renderModal()}
      ${this._renderDirectModal()}
      ${this._renderTemplateModal()}
      ${this._renderDefaultsModal()}
    `;

    this._mountReact(markup);
    this._bind();
  }
}

if (!customElements.get('dialog-custom-ui-create-scenario')) {
  customElements.define('dialog-custom-ui-create-scenario', DialogCustomUiCreateScenario);
}
