import { renderCreateScenario } from './render-create-scenario.jsx';
import { renderJsonTools } from './render-json-tools.jsx';
import { renderLogs } from './render-logs.jsx';
import { renderSettings } from './render-settings.jsx';
import { renderScenarios } from './render-scenarios.jsx';
import { renderTimerAlarm } from './render-timer-alarm.jsx';

export const renderActiveTopLevelPage = (ctx) => {
  if (ctx._activeTab === 'logs') {
    return renderLogs(ctx);
  }
  if (ctx._activeTab === 'scenarios') {
    return renderScenarios(ctx);
  }
  if (ctx._activeTab === 'create-scenario') {
    return renderCreateScenario();
  }
  if (ctx._activeTab === 'timer-alarm') {
    return renderTimerAlarm(ctx);
  }
  if (ctx._activeTab === 'json') {
    return renderJsonTools(ctx);
  }
  return renderSettings(ctx);
};
