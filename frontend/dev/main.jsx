import { createMockHass } from './mock-hass.js';
import '../src/dialog-custom-ui-panel.jsx';

const root = document.getElementById('app');
const panel = document.createElement('dialog-custom-ui-panel');
root.appendChild(panel);

const hass = createMockHass();
panel.hass = hass;

const normalizeTab = (value) => String(value ?? '')
  .trim()
  .toLowerCase()
  .replaceAll('_', '-')
  .replaceAll(' ', '-');

const tabAliases = new Map([
  ['scenarios', 'scenarios'],
  ['scenario', 'scenarios'],
  ['create-scenario', 'create-scenario'],
  ['create-scenarios', 'create-scenario'],
  ['create-scenario-page', 'create-scenario'],
  ['create', 'create-scenario'],
  ['timer-alarm', 'timer-alarm'],
  ['timer', 'timer-alarm'],
  ['alarm', 'timer-alarm'],
  ['json', 'json'],
  ['logs', 'logs'],
  ['log', 'logs'],
  ['settings', 'settings'],
  ['setting', 'settings'],
]);

const searchTab = new URLSearchParams(window.location.search).get('tab');
const hashTab = window.location.hash ? window.location.hash.slice(1) : '';
const requestedTab = normalizeTab(searchTab || hashTab);
const initialTab = tabAliases.get(requestedTab) || 'scenarios';

const applyInitialTab = () => {
  const tryApply = () => {
    if (typeof panel._setActiveTab === 'function') {
      panel._setActiveTab(initialTab);
      return true;
    }
    const tabButton = panel.shadowRoot?.querySelector(`.tabs [data-tab="${initialTab}"]`)
      || panel.shadowRoot?.querySelector(`[data-tab="${initialTab}"]`);
    if (tabButton) {
      tabButton.click();
      return true;
    }
    return false;
  };

  if (tryApply()) {
    return;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (tryApply() || attempts >= 40) {
      window.clearInterval(timer);
    }
  }, 50);
};

window.setTimeout(applyInitialTab, 0);
