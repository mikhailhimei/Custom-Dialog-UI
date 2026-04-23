import { DEFAULT_COMMAND_CONFIGS, DIRECT_SUBTABS, TABS } from '../constants.jsx';

export const ensureModalBackdropStyle = () => {
  if (typeof document === 'undefined') {
    return;
  }
  let modalStyle = document.getElementById('dialog-custom-ui-modal-style');
  if (!modalStyle) {
    modalStyle = document.createElement('style');
    modalStyle.id = 'dialog-custom-ui-modal-style';
    modalStyle.textContent = 'body.modal-open { overflow: hidden; }';
    document.head.appendChild(modalStyle);
  }
};

export const initializeCreateScenarioState = (ctx) => {
  ctx._reactRoot = null;
  ctx._hass = null;
  ctx._config = { base_url: '', timer_alarm_token: '', theme: 'light' };

  ctx._tab = TABS.primary;
  ctx._commands = [];
  ctx._pageByTab = {
    [TABS.primary]: 1,
    [TABS.secondary]: 1,
  };
  ctx._totalByTab = {
    [TABS.primary]: 0,
    [TABS.secondary]: 0,
  };
  ctx._totalPagesByTab = {
    [TABS.primary]: 1,
    [TABS.secondary]: 1,
  };
  ctx._lastLoadedTab = TABS.primary;
  ctx._lastLoadPageKey = '';
  ctx._inFlightPageKey = '';
  ctx._lastLoadedPageKey = '';
  ctx._lastLoadedPageAt = 0;
  ctx._loading = false;
  ctx._error = '';
  ctx._status = '';

  ctx._modalOpen = false;
  ctx._modalMode = 'create';
  ctx._modalSaving = false;
  ctx._editingId = '';
  ctx._editingStatus = false;
  ctx._openResponseItemIds = new Set();
  ctx._openDirectControlItemIds = new Set();
  ctx._openNextActionItemIds = new Set();
  ctx._bindController = null;
  ctx._legacyListeners = [];
  ctx._draft = ctx._newDraft();

  ctx._searchActiveItemId = null;
  ctx._searchActiveType = null;
  ctx._searchResults = [];
  ctx._searchLoading = false;
  ctx._searchDebounceTimer = null;
  ctx._modalScrollTop = 0;

  ctx._directSubtab = DIRECT_SUBTABS.basic;
  ctx._directCommands = [];
  ctx._directLoading = false;
  ctx._directError = '';
  ctx._directModalOpen = false;
  ctx._directModalMode = 'create';
  ctx._directModalSaving = false;
  ctx._directEditingId = '';
  ctx._directEditingStatus = false;
  ctx._openDirectSubControlItemIds = new Set();
  ctx._directDraft = ctx._newDirectDraft();

  ctx._templateCommands = [];
  ctx._templateLoading = false;
  ctx._templateError = '';
  ctx._templateModalOpen = false;
  ctx._templateModalMode = 'create';
  ctx._templateModalSaving = false;
  ctx._templateEditingId = '';
  ctx._openTemplateSubControlItemIds = new Set();
  ctx._templateDraft = ctx._newTemplateDraft();
  ctx._subDirectControlSampleOptions = [];

  ctx._defaultsLoading = false;
  ctx._defaultsError = '';
  ctx._defaultsModalOpen = false;
  ctx._defaultsModalSaving = false;
  ctx._defaultsByType = ctx._newDefaultsState();
  ctx._defaultsActiveType = DEFAULT_COMMAND_CONFIGS[0].type;
  ctx._defaultsActiveId = '';

  ctx._itemActionsModalOpen = false;
  ctx._itemActionsSaving = false;
  ctx._itemActionsId = '';
  ctx._itemActionsKind = '';
  ctx._itemActionsCollection = '';
  ctx._itemActionsStatus = false;
  ctx._itemActionsTitle = '';
  ctx._modalCount = 0;
};
