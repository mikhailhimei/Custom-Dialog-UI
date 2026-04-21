import { COMMANDS_PAGE_SIZE, DEFAULT_COMMAND_CONFIGS, DIRECT_SUBTABS, TABS } from '../constants.jsx';
import { escapeHtml } from '../utils.jsx';

export const renderCommandsTab = (ctx, tabKey) => {
  const isSecondaryTab = tabKey === TABS.secondary;
  const activePage = ctx._pageByTab[tabKey] || 1;
  const activeTotal = ctx._totalByTab[tabKey] || 0;
  const activeTotalPages = ctx._totalPagesByTab[tabKey] || 1;
  const tabTitle = isSecondaryTab ? 'Второстепенные команды' : 'Основные команды';
  const queryHint = '/api/cms/commands?page=1&pageSize=20';
  const totalPages = Math.max(1, activeTotalPages || Math.ceil((activeTotal || 1) / COMMANDS_PAGE_SIZE));
  const paginationItems = ctx._buildPaginationItems(activePage, totalPages);
  const listMarkup = ctx._loading
    ? '<div class="empty">Загрузка команд...</div>'
    : ctx._commands.length
      ? ctx._commands.map((item) => `
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit" data-command-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title || 'Без названия')}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.componentDialog?.actionType || item.subComponentDialog?.actionType || item.componentDialog?.type || item.subComponentDialog?.type || 'actionType: -')}</span>
                <span>${escapeHtml(item.uuid || item.uuidDialog || 'uuid: -')}</span>
                <span>${Boolean(item.status) ? 'Опубликован' : 'Скрыт'}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="command"
              data-item-id="${escapeHtml(item._id)}"
              data-item-title="${escapeHtml(item.title || 'Без названия')}"
              data-item-collection="${isSecondaryTab ? 'sub-commands' : 'commands'}"
              data-item-status="${Boolean(item.status) ? 'true' : 'false'}"
              aria-label="Действия"
              title="Действия"
            >...</button>
          </div>
        `).join('')
      : '<div class="empty">Команд пока нет.</div>';

  return `
    <section class="hero-card">
      <h2>${tabTitle}</h2>
      <p>Запрос: <code>${queryHint}</code></p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload" ${ctx._loading ? 'disabled' : ''}>${ctx._loading ? 'Обновление...' : 'Обновить'}</button>
        <button type="button" class="primary" data-action="create">+ Создать сценарий</button>
      </div>
    </section>
    <section class="help-card command-list">
      ${listMarkup}
      <div class="command-pagination">
        <button type="button" class="ghost" data-action="prev" ${activePage <= 1 || ctx._loading ? 'disabled' : ''}>&lt;</button>
        <div class="pagination-pages">
          ${paginationItems.map((item) => (
            item === 'ellipsis'
              ? '<span class="pagination-ellipsis">...</span>'
              : `<button type="button" class="ghost pagination-page ${item === activePage ? 'active' : ''}" data-action="goto-page" data-page="${item}" ${ctx._loading ? 'disabled' : ''}>${item}</button>`
          )).join('')}
        </div>
        <button type="button" class="ghost" data-action="next" ${activePage >= totalPages || ctx._loading ? 'disabled' : ''}>&gt;</button>
      </div>
    </section>
  `;
};

export const renderPrimaryCommandsPage = (ctx) => renderCommandsTab(ctx, TABS.primary);

export const renderSecondaryCommandsPage = (ctx) => renderCommandsTab(ctx, TABS.secondary);

export const renderDirectBasicSection = (ctx, listMarkup) => `
  <section class="hero-card">
    <h3>Основные</h3>
    <p>Управление direct-командами.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-direct" ${ctx._directLoading ? 'disabled' : ''}>${ctx._directLoading ? 'Обновление...' : 'Обновить'}</button>
      <button type="button" class="primary" data-action="create-direct">+ Создать</button>
    </div>
    ${ctx._directError ? `<div class="status error">${escapeHtml(ctx._directError)}</div>` : ''}
  </section>
  <section class="help-card command-list">
    ${listMarkup}
  </section>
`;

export const renderDirectTemplatesSection = (ctx, templateListMarkup) => `
  <section class="hero-card">
    <h3>Шаблоны</h3>
    <p>Управление шаблонами subDirectControl.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-template" ${ctx._templateLoading ? 'disabled' : ''}>${ctx._templateLoading ? 'Обновление...' : 'Обновить'}</button>
      <button type="button" class="primary" data-action="create-template">+ Создать</button>
    </div>
    ${ctx._templateError ? `<div class="status error">${escapeHtml(ctx._templateError)}</div>` : ''}
  </section>
  <section class="help-card command-list">
    ${templateListMarkup}
  </section>
`;

export const renderDirectCommandsTab = (ctx) => {
  const listMarkup = ctx._directLoading
    ? '<div class="empty">Загрузка direct-команд...</div>'
    : ctx._directCommands.length
      ? ctx._directCommands.map((item) => `
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit-direct" data-direct-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title || 'Без названия')}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.directControl?.mappingType || item.directControl?.actionType || item.directControl?.type || 'actionType: -')}</span>
                <span>${escapeHtml(item.uuid || item.uuidDirect || 'uuid: -')}</span>
                <span>${escapeHtml(item.directControl?.valueType || item.directControl?.typeData || 'typeData: -')}</span>
                <span>${Boolean(item.status) ? 'Опубликован' : 'Скрыт'}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="direct"
              data-item-id="${escapeHtml(item._id)}"
              data-item-title="${escapeHtml(item.title || 'Без названия')}"
              data-item-status="${Boolean(item.status) ? 'true' : 'false'}"
              aria-label="Действия"
              title="Действия"
            >...</button>
          </div>
        `).join('')
      : '<div class="empty">Direct-команд пока нет.</div>';

  const templateListMarkup = ctx._templateLoading
    ? '<div class="empty">Загрузка шаблонов...</div>'
    : ctx._templateCommands.length
      ? ctx._templateCommands.map((item) => `
          <button type="button" class="command-item-main" data-action="edit-template" data-template-id="${escapeHtml(item._id)}">
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
        <button type="button" class="subtab-button ${ctx._directSubtab === DIRECT_SUBTABS.basic ? 'active' : ''}" data-direct-subtab="${DIRECT_SUBTABS.basic}">Основные</button>
        <button type="button" class="subtab-button ${ctx._directSubtab === DIRECT_SUBTABS.templates ? 'active' : ''}" data-direct-subtab="${DIRECT_SUBTABS.templates}">Шаблоны</button>
      </div>
    </section>
    ${ctx._directSubtab === DIRECT_SUBTABS.basic
      ? renderDirectBasicSection(ctx, listMarkup)
      : renderDirectTemplatesSection(ctx, templateListMarkup)}
  `;
};

export const renderActiveTabBody = (ctx) => {
  if (ctx._tab === TABS.primary) {
    return renderPrimaryCommandsPage(ctx);
  }
  if (ctx._tab === TABS.secondary) {
    return renderSecondaryCommandsPage(ctx);
  }
  if (ctx._tab === TABS.direct) {
    return renderDirectCommandsTab(ctx);
  }
  return renderDefaultsTab(ctx);
};

export const renderDefaultsTab = (ctx) => {
  const listMarkup = DEFAULT_COMMAND_CONFIGS.map((config, index) => {
    const draft = ctx._defaultsByType[config.type] ?? ctx._newDefaultsDraft(config.type);
    const displayTitle = String(draft.title || config.title || config.type).trim();
    const metaParts = [
      `actionType: ${config.type}`,
      `endStatus: ${draft.endStatus ? 'on' : 'off'}`,
    ];
    if (config.supportsLlm) {
      metaParts.push(`LLM: ${draft.llmEnabled ? 'on' : 'off'}`);
    }

    return `
      <button type="button" class="command-item-main" data-action="open-defaults-item" data-default-type="${escapeHtml(config.type)}" ${ctx._defaultsLoading ? 'disabled' : ''}>
        <span class="command-item-title">${index + 1}. ${escapeHtml(displayTitle)}</span>
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
        <button type="button" class="secondary" data-action="reload-defaults" ${ctx._defaultsLoading ? 'disabled' : ''}>${ctx._defaultsLoading ? 'Обновление...' : 'Обновить'}</button>
      </div>
      ${ctx._defaultsError ? `<div class="status error">${escapeHtml(ctx._defaultsError)}</div>` : ''}
    </section>
    <section class="help-card command-list">
      ${listMarkup}
    </section>
  `;
};

export const renderStub = (title, description) => `
  <section class="hero-card">
    <h2>${escapeHtml(title)}</h2>
    <p>${escapeHtml(description)}</p>
  </section>
  <section class="help-card">
    <div class="empty">Раздел подготовлен.</div>
  </section>
`;
