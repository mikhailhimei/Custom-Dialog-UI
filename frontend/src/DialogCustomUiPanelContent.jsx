import React from 'react';
import { renderScenarios } from './panel/render/render-scenarios.jsx';
import { renderSettings } from './panel/render/render-settings.jsx';
import { renderLogs } from './panel/render/render-logs.jsx';
import { renderTimerAlarm } from './panel/render/render-timer-alarm.jsx';
import { renderJsonTools } from './panel/render/render-json-tools.jsx';
import { renderYandexScenarios } from './panel/render/render-yandex-scenarios.jsx';
import { renderCreateScenario } from './panel/render/render-create-scenario.jsx';

const DialogCustomUiPanelContent = ({ ctx }) => {
  const activeTab = ctx._resolveAllowedTab(ctx._activeTab);

  const tabs = ctx._isCurrentUserAdmin()
    ? [
        { id: 'scenarios', label: 'Scenarios' },
        { id: 'create-scenario', label: 'Create Scenario' },
        { id: 'timer-alarm', label: 'Timer / Alarm' },
        { id: 'settings', label: 'Settings' },
        { id: 'json-tools', label: 'JSON Tools' },
        { id: 'logs', label: 'Logs' },
        { id: 'yandex-scenarios', label: 'Yandex Scenarios' },
      ]
    : [
        { id: 'scenarios', label: 'Scenarios' },
        { id: 'create-scenario', label: 'Create Scenario' },
        { id: 'timer-alarm', label: 'Timer / Alarm' },
        { id: 'logs', label: 'Logs' },
      ];

  const content = (() => {
    switch (activeTab) {
      case 'scenarios':
        return renderScenarios(ctx);
      case 'create-scenario':
        return renderCreateScenario(ctx);
      case 'timer-alarm':
        return renderTimerAlarm(ctx);
      case 'settings':
        return renderSettings(ctx);
      case 'json-tools':
        return renderJsonTools(ctx);
      case 'logs':
        return renderLogs(ctx);
      case 'yandex-scenarios':
        return renderYandexScenarios(ctx);
      default:
        return renderScenarios(ctx);
    }
  })();

  const tabsMarkup = tabs.map((tab) => (
    <button
      key={tab.id}
      type="button"
      className={tab.id === activeTab ? 'primary' : 'ghost'}
      onClick={() => ctx._setActiveTab(tab.id)}
    >
      {tab.label}
    </button>
  ));

  return (
    <div className="panel">
      <style>{ctx._styles()}</style>
      <div className="panel-content">
        <section className="tabs-section">
          <div className="tabs">
            {tabsMarkup}
          </div>
          {content}
        </section>
      </div>
    </div>
  );
};

export default DialogCustomUiPanelContent;