import { escapeHtml } from '../utils.jsx';

export const renderSettings = (ctx) => {
  return `
      <section class="hero-card">
        <h1>Settings</h1>
        <p>Общие параметры подключения для сценариев: IP, client_id, token, timeout, тема и служебные действия.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${escapeHtml(ctx._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>Интеграция отправляет POST на <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
          <label>
            <span>Client ID</span>
            <input data-config-field="client_id" value="${escapeHtml(ctx._config.client_id)}" placeholder="user-123" />
            <small>Поле уходит в тело запроса как <code>{"clientId":"..."}</code>.</small>
          </label>
          <label>
            <span>Authorization token</span>
            <input data-config-field="timer_alarm_token" value="${escapeHtml(ctx._config.timer_alarm_token)}" placeholder="Bearer xxx" />
            <small>Значение отправляется в заголовке <code>Authorization</code> как есть.</small>
          </label>
          <label class="field-narrow">
            <span>Timeout, секунд</span>
            <input data-config-field="timeout" type="number" min="1" value="${escapeHtml(ctx._config.timeout)}" />
          </label>
          <label class="field-narrow">
            <span>Тема</span>
            <div class="switch-control">
              <input
                type="checkbox"
                data-config-field="theme"
                data-config-bool="true"
                ${ctx._config.theme === 'dark' ? 'checked' : ''}
              />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${ctx._config.theme === 'dark' ? 'Dark' : 'Light'}</span>
            </div>
          </label>
        </div>
        <div class="toolbar">
          <button type="button" class="ghost" data-action="reset-commands-cache">Сбросить кэш</button>
          <button type="button" class="primary" data-action="save" ${ctx._saving ? 'disabled' : ''}>${ctx._saving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
        ${ctx._error ? `<div class="status error">${escapeHtml(ctx._error)}</div>` : ''}
        ${ctx._status ? `<div class="status ok">${escapeHtml(ctx._status)}</div>` : ''}
      </section>
    `;
};
