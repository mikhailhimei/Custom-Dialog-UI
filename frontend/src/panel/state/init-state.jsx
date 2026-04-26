export const initializePanelState = (ctx, defaultConfig) => {
  ctx._reactRoot = null;
  ctx._hass = null;
  ctx._config = { ...defaultConfig };
  ctx._logs = [];
  ctx._activeTab = 'scenarios';
  ctx._expandedScenarios = new Set();
  ctx._expandedConditions = new Set();
  ctx._scenariosPage = 1;
  ctx._scenariosPageSize = 20;
  ctx._loaded = false;
  ctx._loading = false;
  ctx._saving = false;
  ctx._loadingLogs = false;
  ctx._error = '';
  ctx._status = '';
  ctx._logsTimer = null;
  ctx._timerAlarmLoaded = false;
  ctx._timerAlarmLoading = false;
  ctx._timerAlarmLoadPromise = null;
  ctx._deviceAccordionOpen = true;
  ctx._addScenarioLockUntil = 0;
  ctx._yandexLoaded = false;
  ctx._yandexLoading = false;
  ctx._yandexSaving = false;
  ctx._yandexScenarios = [];
  ctx._yandexStatus = '';
  ctx._yandexError = '';
  ctx._yandexActiveScenarioKey = '';
  ctx._yandexEditorOpen = false;
  ctx._yandexDraft = {};
  ctx._yandexSubEditorsOpen = {
    subVoice: false,
    subCommands: false,
  };
  ctx._yandexSubItemOpen = {
    subVoice: '',
    subCommands: '',
  };
};
