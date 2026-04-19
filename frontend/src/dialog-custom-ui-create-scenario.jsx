import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  COMMANDS_PAGE_SIZE,
  DEFAULT_COMMAND_CONFIGS,
  DEFAULT_COMMANDS_API_PATH,
  DIRECT_SUBTABS,
  DIRECT_TYPE_DATA_OPTIONS,
  TABS,
  TYPE_COMPONENT_OPTIONS,
} from './create-scenario/constants.jsx';
import { CREATE_SCENARIO_STYLES } from './create-scenario/styles.jsx';
import {
  createDirectControlItem,
  createDirectSubControlItem,
  createNextActionItem,
  createVoiceResponseItem,
  createUuid,
  escapeHtml,
} from './create-scenario/utils.jsx';

const ShadowMarkup = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

class DialogCustomUiCreateScenario extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._reactRoot = null;
    this._hass = null;
    this._config = { base_url: '', timer_alarm_token: '' };

    // Add global style for modal backdrop
    if (typeof document !== 'undefined') {
      let modalStyle = document.getElementById('dialog-custom-ui-modal-style');
      if (!modalStyle) {
        modalStyle = document.createElement('style');
        modalStyle.id = 'dialog-custom-ui-modal-style';
        modalStyle.textContent = 'body.modal-open { overflow: hidden; }';
        document.head.appendChild(modalStyle);
      }
    }

    this._tab = TABS.primary;
    this._commands = [];
    this._pageByTab = {
      [TABS.primary]: 1,
      [TABS.secondary]: 1,
    };
    this._totalByTab = {
      [TABS.primary]: 0,
      [TABS.secondary]: 0,
    };
    this._totalPagesByTab = {
      [TABS.primary]: 1,
      [TABS.secondary]: 1,
    };
    this._lastLoadedTab = TABS.primary;
    this._lastLoadPageKey = '';
    this._inFlightPageKey = '';
    this._lastLoadedPageKey = '';
    this._lastLoadedPageAt = 0;
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
    this._legacyListeners = [];
    this._draft = this._newDraft();

    // Search state for UUID inputs
    this._searchActiveItemId = null;
    this._searchActiveType = null; // 'directControl' or 'nextAction'
    this._searchResults = [];
    this._searchLoading = false;
    this._searchDebounceTimer = null;
    this._modalScrollTop = 0;

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
    this._subDirectControlSampleOptions = [];

    this._defaultsLoading = false;
    this._defaultsError = '';
    this._defaultsModalOpen = false;
    this._defaultsModalSaving = false;
    this._defaultsByType = this._newDefaultsState();
    this._defaultsActiveType = DEFAULT_COMMAND_CONFIGS[0].type;
    this._defaultsActiveId = '';
    this._modalCount = 0;
  }

  set hass(hass) {
    const firstAttach = !this._hass;
    this._hass = hass;
    if (firstAttach || !this.shadowRoot?.innerHTML) {
      this._render();
    }
  }

  set config(config) {
    const nextConfig = {
      base_url: String(config?.base_url ?? '').trim(),
      timer_alarm_token: String(config?.timer_alarm_token ?? '').trim(),
    };
    const changed = nextConfig.base_url !== this._config.base_url
      || nextConfig.timer_alarm_token !== this._config.timer_alarm_token;
    if (!changed) {
      if (!this.shadowRoot?.innerHTML) {
        this._render();
      }
      return;
    }
    this._config = nextConfig;
    if (
      changed
      && (this._tab === TABS.primary || this._tab === TABS.secondary)
      && !this._loading
      && nextConfig.base_url
    ) {
      this._error = '';
      this._loadPage(this._pageByTab[this._tab] || 1, { force: true });
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
    if (this._tab === TABS.direct && !this._directCommands.length && !this._directLoading && this._directSubtab === DIRECT_SUBTABS.basic) {
      this._loadDirectCommands();
    }
    if (this._tab === TABS.direct && !this._templateCommands.length && !this._templateLoading && this._directSubtab === DIRECT_SUBTABS.templates) {
      this._loadTemplateCommands();
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
    const modal = this.shadowRoot.querySelector('.modal');
    if (modal) {
      this._modalScrollTop = modal.scrollTop;
    }
    flushSync(() => {
      this._reactRoot.render(<ShadowMarkup html={markup} />);
    });
    const newModal = this.shadowRoot.querySelector('.modal');
    if (newModal) {
      newModal.scrollTop = this._modalScrollTop;
    }
  }

  _addModalBackdrop() {
    this._modalCount++;
    if (this._modalCount === 1 && typeof document !== 'undefined' && document.body) {
      document.body.classList.add('modal-open');
    }
  }

  _removeModalBackdrop() {
    this._modalCount--;
    if (this._modalCount === 0 && typeof document !== 'undefined' && document.body) {
      document.body.classList.remove('modal-open');
    }
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
      voiceCommands: Array.isArray(componentDialog.voiceCommands)
        ? componentDialog.voiceCommands.join('; ')
        : String(componentDialog.voiceCommands ?? ''),
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
      voiceCommands: Array.isArray(directControl.voiceCommands)
        ? directControl.voiceCommands.join('; ')
        : String(directControl.voiceCommands ?? ''),
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
      uuid: String(item.uuid ?? ''),
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
      title: String(item.title ?? config.title),
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

  async _loadPage(page = 1, options = {}) {
    if (this._tab !== TABS.primary && this._tab !== TABS.secondary) {
      return;
    }
    const { force = false } = options ?? {};
    const tab = this._tab;
    const pageNumber = Math.max(1, Number(page) || 1);
    const requestKey = `${tab}:${pageNumber}`;
    if (this._inFlightPageKey === requestKey) {
      return;
    }
    const now = Date.now();
    if (!force && this._lastLoadedPageKey === requestKey && now - this._lastLoadedPageAt < 1500) {
      return;
    }
    const isSecondaryTab = tab === TABS.secondary;
    const endpoint = isSecondaryTab ? '/api/cms/sub-commands' : '/api/cms/commands';
    const url = this._apiUrl(
      `${endpoint}?page=${encodeURIComponent(pageNumber)}&pageSize=${COMMANDS_PAGE_SIZE}`
    );
    if (!url) {
      this._error = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }
    this._lastLoadPageKey = requestKey;
    this._inFlightPageKey = requestKey;

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
      const pagination = result?.meta?.pagination ?? result?.pagination ?? {};
      const total = Number(
        pagination.total
        ?? result.total
        ?? result.count
        ?? result.meta?.total
        ?? 0
      );
      const responsePage = Number(pagination.page ?? pageNumber) || pageNumber;
      const responsePageSize = Number(pagination.pageSize ?? COMMANDS_PAGE_SIZE) || COMMANDS_PAGE_SIZE;
      const responseTotalPages = Number(pagination.totalPages ?? pagination.pageCount ?? 0);
      const resolvedTotalPages = Number.isFinite(responseTotalPages) && responseTotalPages > 0
        ? responseTotalPages
        : Math.max(1, Math.ceil((Number.isFinite(total) && total > 0 ? total : data.length) / responsePageSize));
      this._commands = data;
      this._lastLoadedTab = tab;
      this._pageByTab[tab] = Math.max(1, responsePage);
      this._totalPagesByTab[tab] = Math.max(1, resolvedTotalPages);
      this._totalByTab[tab] = Number.isFinite(total) && total > 0
        ? total
        : (
          Number.isFinite(responseTotalPages) && responseTotalPages > 0
            ? responseTotalPages * responsePageSize
            : pageNumber * COMMANDS_PAGE_SIZE + (data.length === COMMANDS_PAGE_SIZE ? 1 : 0)
        );
      this._status = `Команды загружены: ${data.length}.`;
      this._lastLoadedPageKey = requestKey;
      this._lastLoadedPageAt = Date.now();
    } catch (error) {
      this._commands = [];
      this._error = error?.message || 'Не удалось загрузить команды.';
    } finally {
      if (this._inFlightPageKey === requestKey) {
        this._inFlightPageKey = '';
      }
      this._loading = false;
      this._render();
    }
  }

  _setTab(tab) {
    this._tab = tab;
    this._error = '';
    this._status = '';
    this._render();
    if (tab === TABS.primary || tab === TABS.secondary) {
      const page = this._pageByTab[tab] || 1;
      if (!this._loading || this._lastLoadedTab !== tab) {
        this._loadPage(page);
      }
    }
    if (tab === TABS.direct) {
      if (this._directSubtab === DIRECT_SUBTABS.basic && !this._directCommands.length && !this._directLoading) {
        this._loadDirectCommands();
      }
      if (this._directSubtab === DIRECT_SUBTABS.templates && !this._templateCommands.length && !this._templateLoading) {
        this._loadTemplateCommands();
      }
    }
    if (tab === TABS.defaults && !this._defaultsLoading) {
      this._reloadDefaultsCommands();
    }
  }

  _buildPaginationItems(currentPage, totalPages) {
    const current = Math.max(1, Number(currentPage) || 1);
    const total = Math.max(1, Number(totalPages) || 1);
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 4) {
      return [1, 2, 3, 4, 'ellipsis', total];
    }
    if (current >= total - 3) {
      return [1, 'ellipsis', total - 3, total - 2, total - 1, total];
    }
    return [1, 'ellipsis', current - 1, current, current + 1, 'ellipsis', total];
  }

  _openCreateModal() {
    this._addModalBackdrop();
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
    this._addModalBackdrop();
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
    this._hydrateDirectControlTitles();
    this._hydrateNextActionTitles();
  }

  _closeModal() {
    if (this._modalSaving) {
      return;
    }
    this._removeModalBackdrop();
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
        voiceCommands: String(this._draft.voiceCommands ?? '').split(';').map(s => s.trim()).filter(s => s),
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
    itemId = itemId.trim();
    const nextItems = (Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [])
      .map((item) => {
        if (item.id !== itemId) {
          return item;
        }
        const nextUuid = String(value ?? '');
        const nextTrimmedUuid = nextUuid.trim();
        const currentTrimmedUuid = String(item.uuid ?? '').trim();
        return {
          ...item,
          uuid: nextUuid,
          displayValue: nextTrimmedUuid && nextTrimmedUuid === currentTrimmedUuid ? item.displayValue : '',
        };
      });
    this._draft = {
      ...this._draft,
      directControlItems: nextItems,
    };
    // Trigger search if input has length
    if (value.length > 0) {
      this._debouncedPerformUuidSearch(value, 'directControl', itemId);
    }
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
    itemId = itemId.trim();
    const nextItems = (Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : [])
      .map((item) => {
        if (item.id !== itemId) {
          return item;
        }
        if (field === 'uuid') {
          const nextUuid = String(value ?? '');
          const nextTrimmedUuid = nextUuid.trim();
          const currentTrimmedUuid = String(item.uuid ?? '').trim();
          return {
            ...item,
            uuid: nextUuid,
            displayValue: nextTrimmedUuid && nextTrimmedUuid === currentTrimmedUuid ? item.displayValue : '',
          };
        }
        return { ...item, [field]: value };
      });
    this._draft = {
      ...this._draft,
      nextActionItems: nextItems,
    };
    // Trigger search if uuid field and has length
    if (field === 'uuid' && value.length > 0) {
      this._debouncedPerformUuidSearch(value, 'nextAction', itemId);
    }
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
    if (subtab === DIRECT_SUBTABS.basic && !this._directCommands.length && !this._directLoading) {
      this._loadDirectCommands();
    } else if (subtab === DIRECT_SUBTABS.templates && !this._templateCommands.length && !this._templateLoading) {
      this._loadTemplateCommands();
    }
    this._render();
  }

  async _loadDirectCommands() {
    const url = this._apiUrl('/api/cms/sub-direct-controls?page=1&pageSize=' + COMMANDS_PAGE_SIZE);
    if (!url) {
      this._directError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }
    this._directLoading = true;
    this._directError = '';
    this._render();
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: this._apiHeaders(false),
      });
      if (!response.ok) {
        throw new Error(`Ошибка загрузки direct-команд: HTTP ${response.status}`);
      }
      const result = await response.json();
      const data = Array.isArray(result.data) ? result.data : [];
      this._directCommands = data;
      this._status = `Direct-команды загружены: ${data.length}.`;
    } catch (error) {
      this._directCommands = [];
      this._directError = error?.message || 'Не удалось загрузить direct-команды.';
    } finally {
      this._directLoading = false;
      this._render();
    }
  }

  async _loadTemplateCommands() {
    const url = this._apiUrl('/api/cms/sub-direct-controls-sample?page=1&pageSize=' + COMMANDS_PAGE_SIZE);
    if (!url) {
      this._templateError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }
    this._templateLoading = true;
    this._templateError = '';
    this._render();
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: this._apiHeaders(false),
      });
      if (!response.ok) {
        throw new Error(`Ошибка загрузки шаблонов: HTTP ${response.status}`);
      }
      const result = await response.json();
      const data = Array.isArray(result.data) ? result.data : [];
      this._templateCommands = data;
      this._status = `Шаблоны загружены: ${data.length}.`;
    } catch (error) {
      this._templateCommands = [];
      this._templateError = error?.message || 'Не удалось загрузить шаблоны.';
    } finally {
      this._templateLoading = false;
      this._render();
    }
  }

  _reloadDirectCommands() {
    if (this._directLoading) return;
    this._directCommands = [];
    this._loadDirectCommands();
  }

  _reloadTemplateCommands() {
    if (this._templateLoading) return;
    this._templateCommands = [];
    this._loadTemplateCommands();
  }

  _openCreateDirectModal() {
    this._addModalBackdrop();
    this._directModalOpen = true;
    this._directModalMode = 'create';
    this._directEditingId = '';
    this._directDraft = this._newDirectDraft();
    this._openDirectSubControlItemIds = new Set();
    this._directError = '';
    this._render();
  }

  _openEditDirectModal(commandId) {
    this._addModalBackdrop();
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
    this._hydrateSelectedSubDirectControlSample();
  }

  _closeDirectModal() {
    if (this._directModalSaving) {
      return;
    }
    this._removeModalBackdrop();
    this._directModalOpen = false;
    this._directModalMode = 'create';
    this._directEditingId = '';
    this._openDirectSubControlItemIds = new Set();
    this._directDraft = this._newDirectDraft();
    this._searchResults = [];
    this._searchActiveType = null;
    this._subDirectControlSampleOptions = [];
    this._render();
  }

  _updateDirectDraft(field, value) {
    this._directDraft = {
      ...this._directDraft,
      [field]: value,
    };
  }

  async _hydrateSelectedSubDirectControlSample() {
    const isCommandType = this._directDraft.typeData === 'command';
    const isManual = Boolean(this._directDraft.manual);
    const selectedUuid = String(this._directDraft.subDirectControlArray ?? '').trim();
    if (!isCommandType || isManual || !selectedUuid) {
      return;
    }
    const hasSelected = (Array.isArray(this._subDirectControlSampleOptions) ? this._subDirectControlSampleOptions : [])
      .some((item) => String(item?.uuid ?? '').trim() === selectedUuid);
    if (hasSelected) {
      return;
    }
    const results = await this._searchUuid(selectedUuid, ['sub-direct-controls-sample']);
    const exactMatch = results.find((item) => String(item?.uuid ?? '').trim() === selectedUuid);
    const option = exactMatch
      ? { uuid: String(exactMatch.uuid ?? selectedUuid), title: String(exactMatch.title ?? '').trim() || selectedUuid }
      : { uuid: selectedUuid, title: selectedUuid };
    this._subDirectControlSampleOptions = [option, ...(Array.isArray(this._subDirectControlSampleOptions) ? this._subDirectControlSampleOptions : [])];
    this._render();
  }

  _refreshDirectUuid() {
    this._updateDirectDraft('uuidDirect', createUuid());
    this._render();
  }

  _refreshTemplateUuid() {
    this._updateTemplateDraft('uuid', createUuid());
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
      payload.directControl.voiceCommands = voiceCommandsRaw ? voiceCommandsRaw.split(';').map(s => s.trim()).filter(s => s) : null;
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

  async _loadSubDirectControlSamples() {
    if (this._searchLoading) {
      return;
    }
    this._searchActiveType = 'subDirectControlSample';
    this._searchLoading = true;
    this._render();

    try {
      const results = await this._searchUuid('', ['sub-direct-controls-sample']);
      this._searchResults = results;
      this._subDirectControlSampleOptions = results;
    } catch (error) {
      this._searchResults = [];
      this._subDirectControlSampleOptions = [];
    } finally {
      this._searchLoading = false;
      this._render();
    }
  }

  async _performUuidSearch(searchText, searchType, itemId = null) {
    if (!searchText || searchText.length === 0) {
      this._searchResults = [];
      this._searchActiveItemId = null;
      this._searchActiveType = null;
      this._render();
      return;
    }

    this._searchActiveItemId = itemId;
    this._searchActiveType = searchType;
    this._searchLoading = true;
    // Removed _render() to prevent scroll jumping

    try {
      let collections = [];
      if (searchType === 'directControl') {
        collections = ['sub-direct-controls'];
      } else if (searchType === 'nextAction') {
        collections = ['sub-commands', 'commands'];
      } else if (searchType === 'subDirectControlSample') {
        collections = ['sub-direct-controls-sample'];
      }

      const results = await this._searchUuid(searchText, collections);
      this._searchResults = results;
      if (searchType === 'directControl' && itemId) {
        const normalizedSearchText = String(searchText ?? '').trim();
        const exactMatch = results.find(
          (entry) => String(entry?.uuid ?? '').trim() === normalizedSearchText
        );
        if (exactMatch?.title) {
          const nextItems = (Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [])
            .map((item) => (
              item.id === itemId
                ? { ...item, displayValue: String(exactMatch.title) }
                : item
            ));
          this._draft = {
            ...this._draft,
            directControlItems: nextItems,
          };
        }
      }
    } catch (error) {
      this._searchResults = [];
    } finally {
      this._searchLoading = false;
      this._render();
    }
  }

  _debouncedPerformUuidSearch(searchText, searchType, itemId = null) {
    if (this._searchDebounceTimer) {
      clearTimeout(this._searchDebounceTimer);
    }
    this._searchDebounceTimer = setTimeout(() => {
      this._performUuidSearch(searchText, searchType, itemId);
    }, 300); // 300ms delay
  }

  _selectSearchResult(itemId, result) {
    itemId = itemId.trim();
    const activeType = this._searchActiveType;
    if (activeType === 'directControl') {
      const nextItems = (Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [])
        .map((item) => (
          item.id === itemId
            ? { ...item, uuid: String(result.uuid ?? ''), displayValue: String(result.title ?? '') }
            : item
        ));
      this._draft = {
        ...this._draft,
        directControlItems: nextItems,
      };
    } else if (activeType === 'nextAction') {
      this._updateNextActionItem(itemId, 'displayValue', result.title);
      // Also set uuid
      const nextItems = (Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : [])
        .map((item) => (item.id === itemId ? { ...item, uuid: result.uuid } : item));
      this._draft = {
        ...this._draft,
        nextActionItems: nextItems,
      };
    }
    // Clear search state
    this._searchResults = [];
    this._searchActiveItemId = null;
    this._searchActiveType = null;
    this._render();
  }

  async _searchUuid(searchText, collections) {
    const baseUrl = String(this._config.base_url ?? '').trim().replace(/\/$/, '');
    if (!baseUrl) {
      return [];
    }
    try {
      const collectionsParam = Array.isArray(collections) ? collections.join(',') : String(collections);
      const url = `${baseUrl}/api/cms/search?collections=${encodeURIComponent(collectionsParam)}&text=${encodeURIComponent(searchText)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: this._apiHeaders(false),
      });
      if (!response.ok) {
        return [];
      }
      const result = await response.json();
      const data = Array.isArray(result.data) ? result.data : Array.isArray(result) ? result : [];
      return data;
    } catch (error) {
      return [];
    }
  }

  async _resolveTitleByUuid(uuid, collections) {
    const normalizedUuid = String(uuid ?? '').trim();
    if (!normalizedUuid) {
      return '';
    }
    const results = await this._searchUuid(normalizedUuid, collections);
    const exactMatch = results.find((entry) => String(entry?.uuid ?? '').trim() === normalizedUuid);
    return String(exactMatch?.title ?? results[0]?.title ?? '').trim();
  }

  async _hydrateDirectControlTitles() {
    const items = Array.isArray(this._draft.directControlItems) ? this._draft.directControlItems : [];
    if (!items.length) {
      return;
    }
    const updatedItems = await Promise.all(
      items.map(async (item) => {
        const uuid = String(item.uuid ?? '').trim();
        const displayValue = String(item.displayValue ?? '').trim();
        if (!uuid || displayValue) {
          return item;
        }
        const title = await this._resolveTitleByUuid(uuid, ['sub-direct-controls']);
        return {
          ...item,
          displayValue: title,
        };
      })
    );
    this._draft = {
      ...this._draft,
      directControlItems: updatedItems,
    };
    this._render();
  }

  async _hydrateNextActionTitles() {
    const items = Array.isArray(this._draft.nextActionItems) ? this._draft.nextActionItems : [];
    if (!items.length) {
      return;
    }
    const updatedItems = await Promise.all(
      items.map(async (item) => {
        const uuid = String(item.uuid ?? '').trim();
        const displayValue = String(item.displayValue ?? '').trim();
        if (!uuid || displayValue) {
          return item;
        }
        const title = await this._resolveTitleByUuid(uuid, ['sub-commands', 'commands']);
        return {
          ...item,
          displayValue: title,
        };
      })
    );
    this._draft = {
      ...this._draft,
      nextActionItems: updatedItems,
    };
    this._render();
  }

  async _deleteItem(collection, uuid) {
    const baseUrl = String(this._config.base_url ?? '').trim().replace(/\/$/, '');
    if (!baseUrl) {
      throw new Error('Заполните Base URL во вкладке Settings.');
    }
    const url = `${baseUrl}/api/cms/${encodeURIComponent(collection)}/${encodeURIComponent(uuid)}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: this._apiHeaders(true),
    });
    if (!response.ok) {
      throw new Error(`Ошибка удаления: HTTP ${response.status}`);
    }
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
      const collection = 'sub-direct-controls';
      const url = isEdit
        ? this._apiUrl(`/api/cms/${collection}/${encodeURIComponent(this._directEditingId)}`)
        : this._apiUrl(`/api/cms/${collection}`);
      const method = isEdit ? 'PUT' : 'POST';

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

      await this._loadDirectCommands();
      this._status = isEdit ? 'Direct-команда обновлена.' : 'Direct-команда создана.';
      this._directModalOpen = false;
      this._directModalMode = 'create';
      this._directEditingId = '';
      this._openDirectSubControlItemIds = new Set();
      this._directDraft = this._newDirectDraft();
    } catch (error) {
      this._directError = error?.message || 'Не удалось сохранить direct-команду.';
    } finally {
      this._directModalSaving = false;
      this._render();
    }
  }

  async _deleteDirectModal() {
    if (!this._directEditingId) {
      return;
    }
    if (!confirm('Вы уверены, что хотите удалить эту direct-команду?')) {
      return;
    }
    this._directModalSaving = true;
    this._directError = '';
    this._render();
    try {
      await this._deleteItem('sub-direct-controls', this._directEditingId);
      this._directCommands = this._directCommands.filter((item) => String(item._id ?? '') !== String(this._directEditingId));
      this._status = 'Direct-команда удалена.';
      this._removeModalBackdrop();
      this._directModalOpen = false;
      this._directModalMode = 'create';
      this._directEditingId = '';
      this._openDirectSubControlItemIds = new Set();
      this._directDraft = this._newDirectDraft();
    } catch (error) {
      this._directError = error?.message || 'Не удалось удалить direct-команду.';
    } finally {
      this._directModalSaving = false;
      this._render();
    }
  }

  _openCreateTemplateModal() {
    this._addModalBackdrop();
    this._templateModalOpen = true;
    this._templateModalMode = 'create';
    this._templateEditingId = '';
    this._templateDraft = this._newTemplateDraft();
    this._openTemplateSubControlItemIds = new Set();
    this._templateError = '';
    this._render();
  }

  _openEditTemplateModal(templateId) {
    this._addModalBackdrop();
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
    this._removeModalBackdrop();
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

    let uuid = String(this._templateDraft.uuid ?? '').trim();
    if (!uuid) {
      uuid = createUuid();
    }

    if (!uuid) {
      throw new Error('uuid - обязательное поле.');
    }

    return {
      title,
      uuid,
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
    const base = this._apiUrl('');
    if (!base) {
      this._templateError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

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
      const collection = 'sub-direct-controls-sample';
      const url = isEdit
        ? this._apiUrl(`/api/cms/${collection}/${encodeURIComponent(this._templateEditingId)}`)
        : this._apiUrl(`/api/cms/${collection}`);
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: this._apiHeaders(true),
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Ошибка сохранения шаблона: HTTP ${response.status}`);
      }

      let savedItem = null;
      try {
        savedItem = await response.json();
      } catch {
        savedItem = null;
      }

      if (isEdit) {
        this._templateCommands = this._templateCommands.map((item) => (
          String(item._id ?? '') === String(this._templateEditingId)
            ? { ...item, ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: this._templateEditingId }
            : item
        ));
      } else {
        const createdId = String(savedItem?._id ?? createUuid());
        this._templateCommands = [
          { ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: createdId },
          ...this._templateCommands,
        ];
      }

      await this._loadTemplateCommands();
      this._status = isEdit ? 'Шаблон обновлен.' : 'Шаблон создан.';
      this._templateModalOpen = false;
      this._templateModalMode = 'create';
      this._templateEditingId = '';
      this._openTemplateSubControlItemIds = new Set();
      this._templateDraft = this._newTemplateDraft();
    } catch (error) {
      this._templateError = error?.message || 'Не удалось сохранить шаблон.';
    } finally {
      this._templateModalSaving = false;
      this._render();
    }
  }

  async _deleteTemplateModal() {
    if (!this._templateEditingId) {
      return;
    }
    if (!confirm('Вы уверены, что хотите удалить этот шаблон?')) {
      return;
    }
    this._templateModalSaving = true;
    this._templateError = '';
    this._render();
    try {
      await this._deleteItem('sub-direct-controls-sample', this._templateEditingId);
      this._templateCommands = this._templateCommands.filter((item) => String(item._id ?? '') !== String(this._templateEditingId));
      this._status = 'Шаблон удален.';
      this._removeModalBackdrop();
      this._templateModalOpen = false;
      this._templateModalMode = 'create';
      this._templateEditingId = '';
      this._openTemplateSubControlItemIds = new Set();
      this._templateDraft = this._newTemplateDraft();
    } catch (error) {
      this._templateError = error?.message || 'Не удалось удалить шаблон.';
    } finally {
      this._templateModalSaving = false;
      this._render();
    }
  }

  _reloadDefaultsCommands() {
    const url = this._apiUrl('/api/cms/search?type=default_search,default_main,not_understand,finish_miss&collections=settings-dialog');
    if (!url) {
      this._defaultsError = 'Заполните Base URL во вкладке Settings.';
      this._render();
      return;
    }

    this._defaultsLoading = true;
    this._defaultsError = '';
    this._render();
    return fetch(url, {
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
        const usedTypes = new Set();
        const fallbackOrder = DEFAULT_COMMAND_CONFIGS.map((config) => config.type);

        const resolveType = (item, index) => {
          const directType = String(
            item?.type
            ?? item?.componentDialog?.type
            ?? ''
          ).trim();
          if (directType && nextState[directType] && !usedTypes.has(directType)) {
            return directType;
          }

          const byTitle = DEFAULT_COMMAND_CONFIGS.find((config) => (
            String(config.title).trim() === String(item?.title ?? '').trim()
            && !usedTypes.has(config.type)
          ));
          if (byTitle?.type && nextState[byTitle.type]) {
            return byTitle.type;
          }

          const byIndex = fallbackOrder[index];
          if (byIndex && nextState[byIndex] && !usedTypes.has(byIndex)) {
            return byIndex;
          }

          return '';
        };

        items.forEach((item, index) => {
          const type = resolveType(item, index);
          if (!type) {
            return;
          }
          usedTypes.add(type);
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
    this._addModalBackdrop();
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
    this._removeModalBackdrop();
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
    this._defaultsActiveId = String(this._defaultsByType[config.type]?._id ?? this._defaultsActiveId ?? '');

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
      const collection = 'settings-dialog';
      const url = isEdit
        ? this._apiUrl(`/api/cms/${collection}/${encodeURIComponent(this._defaultsActiveId)}`)
        : this._apiUrl(`/api/cms/${collection}`);
      const method = isEdit ? 'PUT' : 'POST';
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
      const savedPayload = savedItem?.data && typeof savedItem.data === 'object'
        ? savedItem.data
        : savedItem;

      const type = this._defaultsActiveType;
      const current = this._defaultsByType[type] ?? this._newDefaultsDraft(type);
      const nextId = String(savedPayload?._id ?? current._id ?? this._defaultsActiveId ?? '');
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
      await this._reloadDefaultsCommands();
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
    const collection = this._tab === TABS.secondary ? 'sub-commands' : 'commands';
    const url = isEdit
      ? this._apiUrl(`/api/cms/${collection}/${encodeURIComponent(this._editingId)}`)
      : this._apiUrl(`/api/cms/${collection}`);
    const method = isEdit ? 'PUT' : 'POST';

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
      await this._loadPage(this._pageByTab[this._tab] || 1);
    } catch (error) {
      this._error = error?.message || 'Не удалось сохранить сценарий.';
      this._render();
    } finally {
      this._modalSaving = false;
      this._render();
    }
  }

  async _deleteModal() {
    if (!this._editingId) {
      return;
    }
    if (!confirm('Вы уверены, что хотите удалить этот сценарий?')) {
      return;
    }
    const collection = this._tab === TABS.secondary ? 'sub-commands' : 'commands';
    this._modalSaving = true;
    this._error = '';
    this._render();
    try {
      await this._deleteItem(collection, this._editingId);
      this._commands = this._commands.filter((item) => String(item._id ?? '') !== String(this._editingId));
      this._status = 'Сценарий удален.';
      this._removeModalBackdrop();
      this._modalOpen = false;
      this._modalMode = 'create';
      this._editingId = '';
      this._draft = this._newDraft();
    } catch (error) {
      this._error = error?.message || 'Не удалось удалить сценарий.';
    } finally {
      this._modalSaving = false;
      this._render();
    }
  }

  _renderCommandsTab(tabKey) {
    const isSecondaryTab = tabKey === TABS.secondary;
    const activePage = this._pageByTab[tabKey] || 1;
    const activeTotal = this._totalByTab[tabKey] || 0;
    const activeTotalPages = this._totalPagesByTab[tabKey] || 1;
    const tabTitle = isSecondaryTab ? 'Второстепенные команды' : 'Основные команды';
    const queryHint = '/api/cms/commands?page=1&pageSize=20';
    const totalPages = Math.max(1, activeTotalPages || Math.ceil((activeTotal || 1) / COMMANDS_PAGE_SIZE));
    const paginationItems = this._buildPaginationItems(activePage, totalPages);
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
          <button type="button" class="ghost" data-action="prev" ${activePage <= 1 || this._loading ? 'disabled' : ''}>&lt;</button>
          <div class="pagination-pages">
            ${paginationItems.map((item) => (
              item === 'ellipsis'
                ? '<span class="pagination-ellipsis">...</span>'
                : `<button type="button" class="ghost pagination-page ${item === activePage ? 'active' : ''}" data-action="goto-page" data-page="${item}" ${this._loading ? 'disabled' : ''}>${item}</button>`
            )).join('')}
          </div>
          <button type="button" class="ghost" data-action="next" ${activePage >= totalPages || this._loading ? 'disabled' : ''}>&gt;</button>
        </div>
      </section>
    `;
  }

  _renderPrimaryCommandsPage() {
    return this._renderCommandsTab(TABS.primary);
  }

  _renderSecondaryCommandsPage() {
    return this._renderCommandsTab(TABS.secondary);
  }

  _renderDirectBasicSection(listMarkup) {
    return `
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
    `;
  }

  _renderDirectTemplatesSection(templateListMarkup) {
    return `
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
      ${this._directSubtab === DIRECT_SUBTABS.basic
        ? this._renderDirectBasicSection(listMarkup)
        : this._renderDirectTemplatesSection(templateListMarkup)}
    `;
  }

  _renderActiveTabBody() {
    if (this._tab === TABS.primary) {
      return this._renderPrimaryCommandsPage();
    }
    if (this._tab === TABS.secondary) {
      return this._renderSecondaryCommandsPage();
    }
    if (this._tab === TABS.direct) {
      return this._renderDirectCommandsTab();
    }
    return this._renderDefaultsTab();
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
    const isEditMode = this._directModalMode === 'edit';
    const canRefreshDirectUuid = !isEditMode && !String(this._directDraft.uuidDirect ?? '').trim();
    const subItems = Array.isArray(this._directDraft.subDirectControlItems) ? this._directDraft.subDirectControlItems : [];
    const sampleOptions = Array.isArray(this._subDirectControlSampleOptions) ? this._subDirectControlSampleOptions : [];
    const selectedSampleUuid = String(this._directDraft.subDirectControlArray ?? '').trim();
    const hasSelectedSample = sampleOptions.some((item) => String(item?.uuid ?? '').trim() === selectedSampleUuid);
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
              <input data-direct-field="uuidDirect" value="${escapeHtml(this._directDraft.uuidDirect)}" ${isEditMode ? 'readonly' : ''} />
              ${canRefreshDirectUuid ? `
                <button
                  type="button"
                  class="ghost inline-icon-button"
                  data-action="generate-direct-uuid"
                  aria-label="Обновить uuidDirect"
                  title="Обновить uuidDirect"
                  ${this._directModalSaving ? 'disabled' : ''}
                >↻</button>
              ` : ''}
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
                  <option value="">Пока пусто (добавим позже)</option>
                  ${selectedSampleUuid && !hasSelectedSample ? `
                    <option value="${escapeHtml(selectedSampleUuid)}" selected>${escapeHtml(selectedSampleUuid)}</option>
                  ` : ''}
                  ${sampleOptions.map((result) => `
                    <option value="${escapeHtml(result.uuid)}" ${this._directDraft.subDirectControlArray === result.uuid ? 'selected' : ''}>${escapeHtml(result.title)} (${escapeHtml(result.uuid)})</option>
                  `).join('')}
                </select>
              </label>
            `}
          ` : ''}
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-direct" ${this._directModalSaving ? 'disabled' : ''}>Отмена</button>
          ${this._directModalMode === 'edit' ? `<button type="button" class="ghost compact-delete-button" data-action="delete-direct" ${this._directModalSaving ? 'disabled' : ''}>Удалить</button>` : ''}
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
    const isEditMode = this._templateModalMode === 'edit';
    const canRefreshTemplateUuid = !isEditMode && !String(this._templateDraft.uuid ?? '').trim();
    const subItems = Array.isArray(this._templateDraft.subDirectControlItems) ? this._templateDraft.subDirectControlItems : [];
    return `
      <div class="modal-backdrop" data-action="close-template"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
        <div class="modal-header">
          <h3>${escapeHtml(title)}</h3>
          <button type="button" class="ghost" data-action="close-template" ${this._templateModalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
        <div class="modal-grid">
          <label>
            <span>title</span>
            <input data-template-field="title" value="${escapeHtml(this._templateDraft.title)}" />
          </label>
          <label>
            <span>uuid</span>
            <div class="field-inline field-inline-icon">
              <input data-template-field="uuid" value="${escapeHtml(this._templateDraft.uuid)}" ${isEditMode ? 'readonly' : ''} />
              ${canRefreshTemplateUuid ? `
                <button
                  type="button"
                  class="ghost inline-icon-button"
                  data-action="generate-template-uuid"
                  aria-label="Обновить uuid"
                  title="Обновить uuid"
                  ${this._templateModalSaving ? 'disabled' : ''}
                >↻</button>
              ` : ''}
            </div>
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
          ${this._templateModalMode === 'edit' ? `<button type="button" class="ghost compact-delete-button" data-action="delete-template" ${this._templateModalSaving ? 'disabled' : ''}>Удалить</button>` : ''}
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
    const isEditMode = this._modalMode === 'edit';
    const canRefreshUuid = !isEditMode && !String(this._draft.uuidDialog ?? '').trim();
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
              <input data-field="uuidDialog" value="${escapeHtml(this._draft.uuidDialog)}" ${isEditMode ? 'readonly' : ''} />
              ${canRefreshUuid ? `
                <button
                  type="button"
                  class="ghost inline-icon-button"
                  data-action="generate-uuid"
                  aria-label="Обновить uuidDialog"
                  title="Обновить uuidDialog"
                  ${this._modalSaving ? 'disabled' : ''}
                >↻</button>
              ` : ''}
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
          <label>
            <span>endStatus</span>
            <div class="switch-control">
              <input type="checkbox" data-field="endStatus" ${this._draft.endStatus ? 'checked' : ''} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${this._draft.endStatus ? 'Включено' : 'Выключено'}</span>
            </div>
          </label>
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
                      <span>${escapeHtml(item.uuid ? (item.displayValue || item.uuid) : `Элемент ${index + 1}`)}</span>
                      <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                    </button>
                    ${isOpen ? `
                      <div class="response-item-grid">
                        <label>
                          <span>uuid</span>
                          <div class="dropdown-container">
                            <input
                              data-direct-control-item-id="${escapeHtml(item.id)}"
                              value="${escapeHtml(item.uuid)}"
                              placeholder="uuid"
                            />
                            ${this._searchActiveType === 'directControl' && this._searchActiveItemId === item.id && this._searchResults.length > 0 ? `
                              <div class="dropdown-options">
                                ${this._searchResults.map((result) => `
                                  <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${escapeHtml(item.id)}" data-result-uuid="${escapeHtml(result.uuid)}" data-result-title="${escapeHtml(result.title)}">
                                    ${escapeHtml(result.title)} (${escapeHtml(result.uuid)})
                                  </div>
                                `).join('')}
                              </div>
                            ` : ''}
                          </div>
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
                      <span>${escapeHtml(item.uuid ? (item.displayValue || item.uuid) : `Элемент ${index + 1}`)}</span>
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
                            <div class="dropdown-container">
                              <input
                                data-next-action-item-id="${escapeHtml(item.id)}"
                                data-next-action-item-field="uuid"
                                value="${escapeHtml(item.uuid)}"
                                placeholder="uuid"
                              />
                              ${this._searchActiveType === 'nextAction' && this._searchActiveItemId === item.id && this._searchResults.length > 0 ? `
                                <div class="dropdown-options">
                                  ${this._searchResults.map((result) => `
                                    <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${escapeHtml(item.id)}" data-result-uuid="${escapeHtml(result.uuid)}" data-result-title="${escapeHtml(result.title)}">
                                      ${escapeHtml(result.title)} (${escapeHtml(result.uuid)})
                                    </div>
                                  `).join('')}
                                </div>
                              ` : ''}
                            </div>
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
          ${this._modalMode === 'edit' ? `<button type="button" class="ghost compact-delete-button" data-action="delete" ${this._modalSaving ? 'disabled' : ''}>Удалить</button>` : ''}
          <button type="button" class="primary" data-action="save" ${this._modalSaving ? 'disabled' : ''}>${this._modalSaving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
    `;
  }

  _swallowUiEvent(event) {
    event.stopPropagation();
  }

  _bind() {
    const root = this.shadowRoot;
    if (!root) return;
    if (this._bindController?.abort) {
      this._bindController.abort();
    }
    if (this._legacyListeners.length) {
      this._legacyListeners.forEach(({ element, eventName, handler }) => {
        element.removeEventListener(eventName, handler);
      });
      this._legacyListeners = [];
    }
    const supportsAbortController = typeof AbortController !== 'undefined';
    this._bindController = supportsAbortController ? new AbortController() : null;
    const signal = this._bindController?.signal ?? null;
    const on = (element, eventName, handler) => {
      if (!element) return;
      try {
        if (signal) {
          element.addEventListener(eventName, handler, { signal });
        } else {
          element.addEventListener(eventName, handler);
          this._legacyListeners.push({ element, eventName, handler });
        }
      } catch {
        element.addEventListener(eventName, handler);
        this._legacyListeners.push({ element, eventName, handler });
      }
    };

    root.querySelectorAll('[data-tab]').forEach((element) => {
      on(element, 'click', () => this._setTab(element.dataset.tab));
    });

    on(root.querySelector('[data-action="reload"]'), 'click', () => this._loadPage(this._pageByTab[this._tab] || 1, { force: true }));
    on(root.querySelector('[data-action="create"]'), 'click', () => this._openCreateModal());
    on(root.querySelector('[data-action="prev"]'), 'click', () => this._loadPage((this._pageByTab[this._tab] || 1) - 1));
    on(root.querySelector('[data-action="next"]'), 'click', () => this._loadPage((this._pageByTab[this._tab] || 1) + 1));
    root.querySelectorAll('[data-action="goto-page"]').forEach((element) => {
      on(element, 'click', () => this._loadPage(Number(element.dataset.page) || 1));
    });
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
    on(root.querySelector('[data-action="delete"]'), 'click', () => this._deleteModal());
    on(root.querySelector('[data-action="delete-direct"]'), 'click', () => this._deleteDirectModal());
    on(root.querySelector('[data-action="delete-template"]'), 'click', () => this._deleteTemplateModal());
    on(root.querySelector('[data-action="generate-uuid"]'), 'click', () => this._refreshUuid());
    on(root.querySelector('[data-action="generate-direct-uuid"]'), 'click', () => this._refreshDirectUuid());
    on(root.querySelector('[data-action="generate-template-uuid"]'), 'click', () => this._refreshTemplateUuid());
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

    // Handle search result selection
    root.querySelectorAll('[data-action="select-search-result"]').forEach((element) => {
      on(element, 'click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const itemId = element.dataset.directControlItemId || element.dataset.nextActionItemId;
        const result = {
          uuid: element.dataset.resultUuid,
          title: element.dataset.resultTitle,
        };
        this._selectSearchResult(itemId, result);
      });
    });

    root.querySelectorAll('[data-field]').forEach((element) => {
      const field = element.dataset.field;
      const onInput = (event) => {
        const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
        this._updateDraft(field, value);
      };
      on(element, 'input', onInput);
      on(element, 'change', onInput);
    });
    root.querySelectorAll('[data-direct-field]').forEach((element) => {
      const field = element.dataset.directField;
      const onInput = (event) => {
        const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
        this._updateDirectDraft(field, value);
        if (field === 'typeData') {
          if (event.currentTarget.value !== 'command') {
            this._updateDirectDraft('manual', false);
            this._updateDirectDraft('voiceCommands', '');
          } else {
            this._searchResults = [];
            this._searchActiveType = null;
          }
        }
        if (field === 'subDirectControlArray' && value.length > 0) {
          this._performUuidSearch(value, 'subDirectControlSample');
        }
        if (element.type === 'checkbox' || element.tagName === 'SELECT') {
          this._render();
        }
      };
      on(element, 'input', onInput);
      on(element, 'change', onInput);
      if (field === 'subDirectControlArray') {
        on(element, 'focus', () => {
          if (!this._subDirectControlSampleOptions.length) {
            this._loadSubDirectControlSamples();
          }
        });
        on(element, 'click', () => {
          if (!this._subDirectControlSampleOptions.length) {
            this._loadSubDirectControlSamples();
          }
        });
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

    root.querySelectorAll('input, select, textarea').forEach((element) => {
      ['click', 'focusin'].forEach((eventName) => {
        on(element, eventName, (event) => this._swallowUiEvent(event));
      });
    });
  }

  _render() {
    const body = this._renderActiveTabBody();

    const markup = `
      ${CREATE_SCENARIO_STYLES}
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
