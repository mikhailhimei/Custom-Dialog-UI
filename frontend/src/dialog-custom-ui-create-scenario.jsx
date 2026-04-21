import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  COMMANDS_PAGE_SIZE,
  DEFAULT_COMMAND_CONFIGS,
  DEFAULT_COMMANDS_API_PATH,
  DIRECT_SUBTABS,
  TABS,
} from './create-scenario/constants.jsx';
import {
  buildCommandPayloadFromDraft,
  buildDefaultsPayloadFromDraft,
  buildDirectPayloadFromDraft,
  buildTemplatePayloadFromDraft,
  createCommandDraft,
  createDirectControlItem,
  createDefaultsDraft,
  createDefaultsState,
  createDirectCommandDraft,
  createDirectSubControlItem,
  createNextActionItem,
  createTemplateCommandDraft,
  createVoiceResponseItem,
  createUuid,
  getDefaultCommandConfig,
} from './create-scenario/utils.jsx';
import {
  renderActiveTabBody,
  renderCommandsTab,
  renderDirectBasicSection,
  renderDirectCommandsTab,
  renderDirectTemplatesSection,
  renderDefaultsTab,
  renderPrimaryCommandsPage,
  renderSecondaryCommandsPage,
  renderStub,
} from './create-scenario/tabs/render-tabs.jsx';
import { bindEvents } from './create-scenario/events/bind-events.jsx';
import { renderDefaultsModal, renderDirectModal, renderItemActionsModal, renderTemplateModal } from './create-scenario/modals/render-secondary-modals.jsx';
import { renderMainModal } from './create-scenario/modals/render-main-modal.jsx';
import { renderRoot } from './create-scenario/render/render-root.jsx';
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
    this._editingStatus = false;
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
    this._directEditingStatus = false;
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
    this._itemActionsModalOpen = false;
    this._itemActionsSaving = false;
    this._itemActionsId = '';
    this._itemActionsKind = '';
    this._itemActionsCollection = '';
    this._itemActionsStatus = false;
    this._itemActionsTitle = '';
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
    return createCommandDraft(source);
  }

  _newDirectDraft(source = null) {
    return createDirectCommandDraft(source);
  }

  _newTemplateDraft(source = null) {
    return createTemplateCommandDraft(source);
  }

  _defaultConfig(type) {
    return getDefaultCommandConfig(type);
  }

  _newDefaultsDraft(type, source = null) {
    return createDefaultsDraft(type, source);
  }

  _newDefaultsState() {
    return createDefaultsState();
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
    this._editingStatus = Boolean(item.status);
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
    this._editingStatus = false;
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
    const payload = buildCommandPayloadFromDraft(this._draft);
    if (this._tab === TABS.secondary) {
      delete payload.componentDialog;
      return payload;
    }
    delete payload.subComponentDialog;
    return payload;
  }

  _refreshUuid() {
    this._updateDraft('uuid', createUuid());
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
    this._directEditingStatus = Boolean(item.status);
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
    this._directEditingStatus = false;
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
    const selectedUuid = String(this._directDraft.subDirectControl ?? '').trim();
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
    this._updateDirectDraft('uuid', createUuid());
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
    return buildDirectPayloadFromDraft(this._directDraft);
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

  _openItemActionsModal({ kind, id, title, collection, status }) {
    if (!id) {
      return;
    }
    this._addModalBackdrop();
    this._itemActionsModalOpen = true;
    this._itemActionsSaving = false;
    this._itemActionsKind = String(kind ?? '');
    this._itemActionsId = String(id ?? '');
    this._itemActionsTitle = String(title ?? '').trim();
    this._itemActionsCollection = String(collection ?? '');
    this._itemActionsStatus = Boolean(status);
    this._render();
  }

  _closeItemActionsModal() {
    if (this._itemActionsSaving) {
      return;
    }
    this._removeModalBackdrop();
    this._itemActionsModalOpen = false;
    this._itemActionsSaving = false;
    this._itemActionsKind = '';
    this._itemActionsId = '';
    this._itemActionsTitle = '';
    this._itemActionsCollection = '';
    this._itemActionsStatus = false;
    this._render();
  }

  async _updateCommandStatusById(commandId, collection, nextStatus) {
    const item = this._commands.find((command) => String(command._id ?? '') === String(commandId ?? ''));
    if (!item) {
      throw new Error('Команда не найдена.');
    }
    const draft = this._newDraft(item);
    const payload = buildCommandPayloadFromDraft(draft);
    if (collection === 'sub-commands') {
      delete payload.componentDialog;
    } else {
      delete payload.subComponentDialog;
    }
    payload.status = Boolean(nextStatus);
    const url = this._apiUrl(`/api/cms/${encodeURIComponent(collection)}/${encodeURIComponent(commandId)}`);
    const response = await fetch(url, {
      method: 'PUT',
      headers: this._apiHeaders(true),
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Ошибка изменения статуса: HTTP ${response.status}`);
    }
    this._commands = this._commands.map((command) => (
      String(command._id ?? '') === String(commandId ?? '')
        ? { ...command, status: Boolean(nextStatus) }
        : command
    ));
    if (String(this._editingId ?? '') === String(commandId ?? '')) {
      this._editingStatus = Boolean(nextStatus);
    }
  }

  async _updateDirectStatusById(directId, nextStatus) {
    const item = this._directCommands.find((command) => String(command._id ?? '') === String(directId ?? ''));
    if (!item) {
      throw new Error('Direct-команда не найдена.');
    }
    const draft = this._newDirectDraft(item);
    const payload = {
      ...buildDirectPayloadFromDraft(draft),
      status: Boolean(nextStatus),
    };
    const url = this._apiUrl(`/api/cms/sub-direct-controls/${encodeURIComponent(directId)}`);
    const response = await fetch(url, {
      method: 'PUT',
      headers: this._apiHeaders(true),
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Ошибка изменения статуса direct-команды: HTTP ${response.status}`);
    }
    this._directCommands = this._directCommands.map((command) => (
      String(command._id ?? '') === String(directId ?? '')
        ? { ...command, status: Boolean(nextStatus) }
        : command
    ));
    if (String(this._directEditingId ?? '') === String(directId ?? '')) {
      this._directEditingStatus = Boolean(nextStatus);
    }
  }

  async _applyItemStatus() {
    if (this._itemActionsSaving || !this._itemActionsId) {
      return;
    }
    const nextStatus = !this._itemActionsStatus;
    this._itemActionsSaving = true;
    this._error = '';
    this._directError = '';
    this._render();
    try {
      if (this._itemActionsKind === 'command') {
        await this._updateCommandStatusById(this._itemActionsId, this._itemActionsCollection || 'commands', nextStatus);
      } else if (this._itemActionsKind === 'direct') {
        await this._updateDirectStatusById(this._itemActionsId, nextStatus);
      } else {
        throw new Error('Неизвестный тип сценария.');
      }
      this._itemActionsStatus = nextStatus;
      this._status = nextStatus ? 'Сценарий опубликован.' : 'Сценарий скрыт.';
      this._closeItemActionsModal();
    } catch (error) {
      if (this._itemActionsKind === 'direct') {
        this._directError = error?.message || 'Не удалось изменить статус direct-команды.';
      } else {
        this._error = error?.message || 'Не удалось изменить статус сценария.';
      }
      this._itemActionsSaving = false;
      this._render();
    }
  }

  async _toggleEditModalStatus() {
    if (this._modalSaving || !this._editingId) {
      return;
    }
    this._modalSaving = true;
    this._error = '';
    this._render();
    try {
      const nextStatus = !Boolean(this._editingStatus);
      const collection = this._tab === TABS.secondary ? 'sub-commands' : 'commands';
      await this._updateCommandStatusById(this._editingId, collection, nextStatus);
      this._editingStatus = nextStatus;
      this._status = nextStatus ? 'Сценарий опубликован.' : 'Сценарий скрыт.';
    } catch (error) {
      this._error = error?.message || 'Не удалось изменить статус сценария.';
    } finally {
      this._modalSaving = false;
      this._render();
    }
  }

  async _toggleDirectEditModalStatus() {
    if (this._directModalSaving || !this._directEditingId) {
      return;
    }
    this._directModalSaving = true;
    this._directError = '';
    this._render();
    try {
      const nextStatus = !Boolean(this._directEditingStatus);
      await this._updateDirectStatusById(this._directEditingId, nextStatus);
      this._directEditingStatus = nextStatus;
      this._status = nextStatus ? 'Direct-команда опубликована.' : 'Direct-команда скрыта.';
    } catch (error) {
      this._directError = error?.message || 'Не удалось изменить статус direct-команды.';
    } finally {
      this._directModalSaving = false;
      this._render();
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
      this._removeModalBackdrop();
      this._directModalOpen = false;
      this._directModalMode = 'create';
      this._directEditingId = '';
      this._directEditingStatus = false;
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
      this._directEditingStatus = false;
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
    return buildTemplatePayloadFromDraft(this._templateDraft);
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
      this._removeModalBackdrop();
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
    const actionTypes = DEFAULT_COMMAND_CONFIGS.map((config) => config.type).join(',');
    const url = this._apiUrl(`/api/cms/search?actionType=${encodeURIComponent(actionTypes)}&collections=settings-dialog`);
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
            item?.actionType
            ?? item?.componentDialog?.actionType
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
    const config = this._defaultConfig(type);
    if (!config.hasModal) {
      this._saveDefaultsType(config.type, false);
      return;
    }
    this._addModalBackdrop();
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
    const draft = this._defaultsByType[type] ?? this._newDefaultsDraft(type);
    return buildDefaultsPayloadFromDraft(type, draft);
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
          llmEnabled: payload.LLM ?? payload.llm ?? current.llmEnabled,
        },
      };
      this._defaultsActiveId = nextId;
      await this._reloadDefaultsCommands();
      this._status = 'Дефолтная команда обновлена.';
      if (closeModal) {
        this._removeModalBackdrop();
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
      this._removeModalBackdrop();
      this._modalOpen = false;
      this._modalMode = 'create';
      this._editingId = '';
      this._editingStatus = false;
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
      this._editingStatus = false;
      this._draft = this._newDraft();
    } catch (error) {
      this._error = error?.message || 'Не удалось удалить сценарий.';
    } finally {
      this._modalSaving = false;
      this._render();
    }
  }

  _renderCommandsTab(tabKey) {
    return renderCommandsTab(this, tabKey);
  }

  _renderPrimaryCommandsPage() {
    return renderPrimaryCommandsPage(this);
  }

  _renderSecondaryCommandsPage() {
    return renderSecondaryCommandsPage(this);
  }

  _renderDirectBasicSection(listMarkup) {
    return renderDirectBasicSection(this, listMarkup);
  }

  _renderDirectTemplatesSection(templateListMarkup) {
    return renderDirectTemplatesSection(this, templateListMarkup);
  }

  _renderDirectCommandsTab() {
    return renderDirectCommandsTab(this);
  }

  _renderActiveTabBody() {
    return renderActiveTabBody(this);
  }

  _renderStub(title, description) {
    return renderStub(title, description);
  }

  _renderDirectModal() {
    return renderDirectModal(this);
  }

  _renderTemplateModal() {
    return renderTemplateModal(this);
  }

  _renderDefaultsTab() {
    return renderDefaultsTab(this);
  }

  _renderDefaultsModal() {
    return renderDefaultsModal(this);
  }

  _renderModal() {
    return renderMainModal(this);
  }

  _renderItemActionsModal() {
    return renderItemActionsModal(this);
  }

  _swallowUiEvent(event) {
    event.stopPropagation();
  }

  _bind() {
    bindEvents(this);
  }

  _render() {
    renderRoot(this);
  }
}

if (!customElements.get('dialog-custom-ui-create-scenario')) {
  customElements.define('dialog-custom-ui-create-scenario', DialogCustomUiCreateScenario);
}
