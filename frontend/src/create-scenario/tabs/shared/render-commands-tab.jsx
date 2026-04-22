import { COMMANDS_PAGE_SIZE, TABS } from '../../constants.jsx';
import { escapeHtml } from '../../utils.jsx';

export const renderCommandsTab = (ctx, tabKey) => {
  const isSecondaryTab = tabKey === TABS.secondary;
  const activePage = ctx._pageByTab[tabKey] || 1;
  const activeTotal = ctx._totalByTab[tabKey] || 0;
  const activeTotalPages = ctx._totalPagesByTab[tabKey] || 1;
  const tabTitle = isSecondaryTab ? 'Р’С‚РѕСЂРѕСЃС‚РµРїРµРЅРЅС‹Рµ РєРѕРјР°РЅРґС‹' : 'РћСЃРЅРѕРІРЅС‹Рµ РєРѕРјР°РЅРґС‹';
  const queryHint = '/api/cms/commands?page=1&pageSize=20';
  const totalPages = Math.max(1, activeTotalPages || Math.ceil((activeTotal || 1) / COMMANDS_PAGE_SIZE));
  const paginationItems = ctx._buildPaginationItems(activePage, totalPages);
  const listMarkup = ctx._loading
    ? '<div class="empty">Р—Р°РіСЂСѓР·РєР° РєРѕРјР°РЅРґ...</div>'
    : ctx._commands.length
      ? ctx._commands.map((item) => `
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit" data-command-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title || 'Р‘РµР· РЅР°Р·РІР°РЅРёСЏ')}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.componentDialog?.actionType || item.subComponentDialog?.actionType || item.componentDialog?.type || item.subComponentDialog?.type || 'actionType: -')}</span>
                <span>${escapeHtml(item.uuid || item.uuidDialog || 'uuid: -')}</span>
                <span>${Boolean(item.status) ? 'РћРїСѓР±Р»РёРєРѕРІР°РЅ' : 'РЎРєСЂС‹С‚'}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="command"
              data-item-id="${escapeHtml(item._id)}"
              data-item-title="${escapeHtml(item.title || 'Р‘РµР· РЅР°Р·РІР°РЅРёСЏ')}"
              data-item-collection="${isSecondaryTab ? 'sub-commands' : 'commands'}"
              data-item-status="${Boolean(item.status) ? 'true' : 'false'}"
              aria-label="Р”РµР№СЃС‚РІРёСЏ"
              title="Р”РµР№СЃС‚РІРёСЏ"
            >...</button>
          </div>
        `).join('')
      : '<div class="empty">РљРѕРјР°РЅРґ РїРѕРєР° РЅРµС‚.</div>';

  return `
    <section class="hero-card">
      <h2>${tabTitle}</h2>
      <p>Р—Р°РїСЂРѕСЃ: <code>${queryHint}</code></p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload" ${ctx._loading ? 'disabled' : ''}>${ctx._loading ? 'РћР±РЅРѕРІР»РµРЅРёРµ...' : 'РћР±РЅРѕРІРёС‚СЊ'}</button>
        <button type="button" class="primary" data-action="create">+ РЎРѕР·РґР°С‚СЊ СЃС†РµРЅР°СЂРёР№</button>
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
