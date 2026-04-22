import { escapeHtml } from '../utils.jsx';

export const renderLogs = (ctx) => {
  const logMarkup = ctx._logs.length
    ? ctx._logs.map((item) => `
          <div class="log-item ${escapeHtml(item.level)}">
            <div class="log-meta">
              <span class="log-time">${escapeHtml(item.ts)}</span>
              <span class="log-level">${escapeHtml(item.level)}</span>
            </div>
            <div class="log-message">${escapeHtml(item.message)}</div>
          </div>
        `).join('')
    : '<div class="empty">Логов пока нет.</div>';

  return `
      <section class="hero-card">
        <h1>Logs</h1>
        <p>Показываются только последние 10 событий: отправка запроса, 204, ошибки, совпадение сценария и запуск скрипта.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="refresh-logs" ${ctx._loadingLogs ? 'disabled' : ''}>${ctx._loadingLogs ? 'Обновление...' : 'Обновить'}</button>
        </div>
      </section>
      <section class="help-card logs-card">
        ${logMarkup}
      </section>
    `;
};
