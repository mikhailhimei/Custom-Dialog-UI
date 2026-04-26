import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  COMMANDS_PAGE_SIZE,
  DIRECT_SUBTABS,
  TABS,
} from './create-scenario/constants.jsx';
import {
  buildCommandPayloadFromDraft,
  buildDefaultsPayloadFromDraft,
  buildDirectPayloadFromDraft,
  buildTemplatePayloadFromDraft,
  createCommandDraft,
  createDefaultsDraft,
  createDefaultsState,
  createDirectCommandDraft,
  createTemplateCommandDraft,
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
} from './create-scenario/tabs/index.jsx';
import {
  closeModal,
  deleteModal,
  openCreateModal,
  openEditModal,
  saveModal,
} from './create-scenario/tabs/commands/actions.jsx';
import {
  addDirectControlItem as addCommandDirectControlItem,
  addNextActionItem,
  addVoiceResponseItem,
  refreshUuid,
  removeDirectControlItem as removeCommandDirectControlItem,
  removeNextActionItem,
  removeVoiceResponseItem,
  toggleDirectControlItem as toggleCommandDirectControlItem,
  toggleNextActionItem,
  toggleResponseItem,
  updateDirectControlItem as updateCommandDirectControlItem,
  updateNextActionItem,
  updateVoiceResponseItem,
} from './create-scenario/tabs/commands/draft-actions.jsx';
import {
  applyItemStatus,
  closeItemActionsModal,
  openItemActionsModal,
  toggleEditModalStatus,
  updateCommandStatusById,
  updateDirectStatusById,
} from './create-scenario/tabs/shared/status-actions.jsx';
import {
  addDirectSubControlItem,
  addTemplateSubControlItem,
  closeDirectModal,
  closeTemplateModal,
  deleteDirectModal,
  deleteTemplateModal,
  hydrateSelectedSubDirectControlSample,
  loadDirectCommands,
  loadSubDirectControlSamples,
  loadTemplateCommands,
  openCreateDirectModal,
  openCreateTemplateModal,
  openEditDirectModal,
  openEditTemplateModal,
  refreshDirectUuid,
  refreshTemplateUuid,
  reloadDirectCommands,
  reloadTemplateCommands,
  removeDirectSubControlItem,
  removeTemplateSubControlItem,
  saveDirectModal,
  saveTemplateModal,
  setDirectSubtab,
  toggleDirectEditModalStatus,
  toggleDirectSubControlItem,
  toggleTemplateSubControlItem,
  updateDirectDraft,
  updateDirectSubControlItem,
  updateTemplateDraft,
  updateTemplateSubControlItem,
} from './create-scenario/tabs/direct/actions.jsx';
import {
  debouncedPerformUuidSearch,
  deleteItem,
  hydrateDirectControlTitles,
  hydrateNextActionTitles,
  performUuidSearch,
  resolveTitleByUuid,
  searchUuid,
  selectSearchResult,
} from './create-scenario/api/actions.jsx';
import {
  closeDefaultsModal,
  openDefaultsModal,
  reloadDefaultsCommands,
  saveDefaultsModal,
  saveDefaultsType,
  updateDefaultsDraft,
} from './create-scenario/tabs/defaults/actions.jsx';
import { bindEvents } from './create-scenario/events/bind-events.jsx';
import { renderDefaultsModal, renderDirectModal, renderItemActionsModal, renderTemplateModal } from './create-scenario/modals/render-secondary-modals.jsx';
import { renderMainModal } from './create-scenario/modals/render-main-modal.jsx';
import { renderRoot } from './create-scenario/render/render-root.jsx';
import { ensureModalBackdropStyle, initializeCreateScenarioState } from './create-scenario/state/init-state.jsx';
const ShadowMarkup = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);
class DialogCustomUiCreateScenario extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    ensureModalBackdropStyle();
    initializeCreateScenarioState(this);
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
      theme: String(config?.theme ?? 'light').trim().toLowerCase() === 'dark' ? 'dark' : 'light',
    };
    const changed = nextConfig.base_url !== this._config.base_url
      || nextConfig.timer_alarm_token !== this._config.timer_alarm_token
      || nextConfig.theme !== this._config.theme;
    const endpointChanged = nextConfig.base_url !== this._config.base_url
      || nextConfig.timer_alarm_token !== this._config.timer_alarm_token;
    if (!changed) {
      if (!this.shadowRoot?.innerHTML) {
        this._render();
      }
      return;
    }
    this._config = nextConfig;
    this._applyTheme();
    if (
      endpointChanged
      && (this._tab === TABS.primary || this._tab === TABS.secondary)
      && !this._loading
      && nextConfig.base_url
    ) {
      this._error = '';
      this._loadPage(this._pageByTab[this._tab] || 1, { force: true });
      return;
    }
    if (endpointChanged && this._tab === TABS.defaults && !this._defaultsLoading) {
      this._reloadDefaultsCommands();
      return;
    }
    this._render();
  }

  connectedCallback() {
    this._applyTheme();
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
    this._modalCount = Math.max(0, this._modalCount - 1);
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
    return openCreateModal(this);
  }

  _applyTheme() {
    const theme = String(this._config?.theme ?? 'light').toLowerCase() === 'dark' ? 'dark' : 'light';
    this._config = { ...this._config, theme };
    this.setAttribute('data-theme', theme);
  }

  _openEditModal(commandId) {
    return openEditModal(this, commandId);
  }

  _closeModal() {
    return closeModal(this);
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
    return refreshUuid(this);
  }

  _addVoiceResponseItem() {
    return addVoiceResponseItem(this);
  }

  _removeVoiceResponseItem(itemId) {
    return removeVoiceResponseItem(this, itemId);
  }

  _updateVoiceResponseItem(itemId, field, value) {
    return updateVoiceResponseItem(this, itemId, field, value);
  }

  _toggleResponseItem(itemId) {
    return toggleResponseItem(this, itemId);
  }

  _addDirectControlItem() {
    return addCommandDirectControlItem(this);
  }

  _removeDirectControlItem(itemId) {
    return removeCommandDirectControlItem(this, itemId);
  }

  _updateDirectControlItem(itemId, value) {
    return updateCommandDirectControlItem(this, itemId, value);
  }

  _toggleDirectControlItem(itemId) {
    return toggleCommandDirectControlItem(this, itemId);
  }

  _addNextActionItem() {
    return addNextActionItem(this);
  }

  _removeNextActionItem(itemId) {
    return removeNextActionItem(this, itemId);
  }

  _updateNextActionItem(itemId, field, value) {
    return updateNextActionItem(this, itemId, field, value);
  }

  _toggleNextActionItem(itemId) {
    return toggleNextActionItem(this, itemId);
  }

  _setDirectSubtab(subtab) {
    return setDirectSubtab(this, subtab);
  }

  async _loadDirectCommands() {
    return loadDirectCommands(this);
  }

  async _loadTemplateCommands() {
    return loadTemplateCommands(this);
  }

  _reloadDirectCommands() {
    return reloadDirectCommands(this);
  }

  _reloadTemplateCommands() {
    return reloadTemplateCommands(this);
  }

  _openCreateDirectModal() {
    return openCreateDirectModal(this);
  }

  _openEditDirectModal(commandId) {
    return openEditDirectModal(this, commandId);
  }

  _closeDirectModal() {
    return closeDirectModal(this);
  }

  _updateDirectDraft(field, value) {
    return updateDirectDraft(this, field, value);
  }

  async _hydrateSelectedSubDirectControlSample() {
    return hydrateSelectedSubDirectControlSample(this);
  }

  _refreshDirectUuid() {
    return refreshDirectUuid(this);
  }

  _refreshTemplateUuid() {
    return refreshTemplateUuid(this);
  }

  _addDirectSubControlItem() {
    return addDirectSubControlItem(this);
  }

  _removeDirectSubControlItem(itemId) {
    return removeDirectSubControlItem(this, itemId);
  }

  _toggleDirectSubControlItem(itemId) {
    return toggleDirectSubControlItem(this, itemId);
  }

  _updateDirectSubControlItem(itemId, field, value) {
    return updateDirectSubControlItem(this, itemId, field, value);
  }

  _buildDirectPayload() {
    return buildDirectPayloadFromDraft(this._directDraft);
  }

  async _loadSubDirectControlSamples() {
    return loadSubDirectControlSamples(this);
  }

  async _performUuidSearch(searchText, searchType, itemId = null) {
    return performUuidSearch(this, searchText, searchType, itemId);
  }

  _debouncedPerformUuidSearch(searchText, searchType, itemId = null) {
    return debouncedPerformUuidSearch(this, searchText, searchType, itemId);
  }

  _selectSearchResult(itemId, result) {
    return selectSearchResult(this, itemId, result);
  }

  async _searchUuid(searchText, collections) {
    return searchUuid(this, searchText, collections);
  }

  async _resolveTitleByUuid(uuid, collections) {
    return resolveTitleByUuid(this, uuid, collections);
  }

  async _hydrateDirectControlTitles() {
    return hydrateDirectControlTitles(this);
  }

  async _hydrateNextActionTitles() {
    return hydrateNextActionTitles(this);
  }

  async _deleteItem(collection, uuid) {
    return deleteItem(this, collection, uuid);
  }

  _openItemActionsModal({ kind, id, title, collection, status }) {
    return openItemActionsModal(this, { kind, id, title, collection, status });
  }

  _closeItemActionsModal() {
    return closeItemActionsModal(this);
  }

  async _updateCommandStatusById(commandId, collection, nextStatus) {
    return updateCommandStatusById(this, commandId, collection, nextStatus);
  }

  async _updateDirectStatusById(directId, nextStatus) {
    return updateDirectStatusById(this, directId, nextStatus);
  }

  async _applyItemStatus() {
    return applyItemStatus(this);
  }

  async _toggleEditModalStatus() {
    return toggleEditModalStatus(this);
  }

  async _toggleDirectEditModalStatus() {
    return toggleDirectEditModalStatus(this);
  }

  async _saveDirectModal() {
    return saveDirectModal(this);
  }

  async _deleteDirectModal() {
    return deleteDirectModal(this);
  }

  _openCreateTemplateModal() {
    return openCreateTemplateModal(this);
  }

  _openEditTemplateModal(templateId) {
    return openEditTemplateModal(this, templateId);
  }

  _closeTemplateModal() {
    return closeTemplateModal(this);
  }

  _updateTemplateDraft(field, value) {
    return updateTemplateDraft(this, field, value);
  }

  _addTemplateSubControlItem() {
    return addTemplateSubControlItem(this);
  }

  _removeTemplateSubControlItem(itemId) {
    return removeTemplateSubControlItem(this, itemId);
  }

  _toggleTemplateSubControlItem(itemId) {
    return toggleTemplateSubControlItem(this, itemId);
  }

  _updateTemplateSubControlItem(itemId, field, value) {
    return updateTemplateSubControlItem(this, itemId, field, value);
  }

  _buildTemplatePayload() {
    return buildTemplatePayloadFromDraft(this._templateDraft);
  }

  async _saveTemplateModal() {
    return saveTemplateModal(this);
  }

  async _deleteTemplateModal() {
    return deleteTemplateModal(this);
  }

  _reloadDefaultsCommands() {
    return reloadDefaultsCommands(this);
  }

  _openDefaultsModal(type) {
    return openDefaultsModal(this, type);
  }

  _closeDefaultsModal() {
    return closeDefaultsModal(this);
  }

  _updateDefaultsDraft(field, value) {
    return updateDefaultsDraft(this, field, value);
  }

  _buildDefaultsPayload() {
    const type = this._defaultsActiveType;
    const draft = this._defaultsByType[type] ?? this._newDefaultsDraft(type);
    return buildDefaultsPayloadFromDraft(type, draft);
  }

  async _saveDefaultsType(type, closeModal = false) {
    return saveDefaultsType(this, type, closeModal);
  }

  async _saveDefaultsModal() {
    return saveDefaultsModal(this);
  }

  async _saveModal() {
    return saveModal(this);
  }

  async _deleteModal() {
    return deleteModal(this);
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

  _hasAnyModalOpen() {
    return Boolean(
      this._modalOpen
      || this._directModalOpen
      || this._templateModalOpen
      || this._defaultsModalOpen
      || this._itemActionsModalOpen
    );
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
