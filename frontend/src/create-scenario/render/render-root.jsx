import { TABS } from '../constants.jsx';
import { CREATE_SCENARIO_STYLES } from '../styles.jsx';
import { escapeHtml } from '../utils.jsx';

export const renderRoot = (ctx) => {
  const body = ctx._renderActiveTabBody();
  const markup = `
    ${CREATE_SCENARIO_STYLES}
    <section class="subtabs-dock">
      <div class="subtabs">
        <button type="button" class="subtab-button ${ctx._tab === TABS.primary ? 'active' : ''}" data-tab="${TABS.primary}">Основные команды</button>
        <button type="button" class="subtab-button ${ctx._tab === TABS.secondary ? 'active' : ''}" data-tab="${TABS.secondary}">Второстепенные команды</button>
        <button type="button" class="subtab-button ${ctx._tab === TABS.direct ? 'active' : ''}" data-tab="${TABS.direct}">Команды прямого выполнения</button>
        <button type="button" class="subtab-button ${ctx._tab === TABS.defaults ? 'active' : ''}" data-tab="${TABS.defaults}">Дефолтные команды</button>
      </div>
    </section>
    ${ctx._error ? `<div class="status error">${escapeHtml(ctx._error)}</div>` : ''}
    ${ctx._status ? `<div class="status ok">${escapeHtml(ctx._status)}</div>` : ''}
    ${body}
    ${ctx._renderModal()}
    ${ctx._renderDirectModal()}
    ${ctx._renderTemplateModal()}
    ${ctx._renderDefaultsModal()}
    ${ctx._renderItemActionsModal()}
  `;

  ctx._mountReact(markup);
  ctx._bind();
};
