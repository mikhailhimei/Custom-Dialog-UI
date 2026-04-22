import { escapeHtml } from '../utils.jsx';

export const renderSettings = (ctx) => {
  const deviceIds = ctx._normalizeTimerAlarmDeviceIdsForUi(ctx._config.timer_alarm_device_ids);
  const isDeviceAccordionOpen = ctx._deviceAccordionOpen;
  const deviceRows = deviceIds.map((deviceId, index) => `
      <div class="device-row">
        <label class="field-grow">
          <span>device_id ${index + 1}</span>
          <input
            data-timer-device-index="${index}"
            value="${escapeHtml(deviceId)}"
            placeholder="media_player.living_room"
          />
        </label>
        <button
          type="button"
          class="ghost device-remove-button"
          data-action="remove-device-id"
          data-timer-device-index="${index}"
          ${deviceIds.length === 1 ? 'disabled' : ''}
        >Удалить</button>
      </div>
    `).join('');

  return `
      <section class="hero-card">
        <h1>Settings</h1>
        <p>Общие параметры подключения для сценариев и timer/alarm: IP, client_id, token, timeout и список device_id.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${escapeHtml(ctx._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>Интеграция отправляет POST на <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
        <label>
          <span>Client ID</span>
          <input data-config-field="client_id" value="${escapeHtml(ctx._config.client_id)}" placeholder="user-123" />
          <small>Поле вводится вручную и уходит в тело запроса как <code>{"clientId":"..."}</code>.</small>
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
        </div>
        <section class="settings-accordion">
          <button type="button" class="settings-accordion-header" data-action="toggle-device-accordion">
            <span>Device</span>
            <span class="settings-accordion-icon">${isDeviceAccordionOpen ? '−' : '+'}</span>
          </button>
          <div class="settings-accordion-body ${isDeviceAccordionOpen ? 'open' : 'hidden'}">
            <p class="settings-accordion-note">Добавьте один или несколько <code>device_id</code>. В запрос на timer/alarm они уйдут массивом.</p>
            <div class="device-list">
              ${deviceRows}
            </div>
            <button type="button" class="secondary add-inline-button" data-action="add-device-id">+ Добавить device_id</button>
          </div>
        </section>
        <div class="toolbar">
          <button type="button" class="primary" data-action="save" ${ctx._saving ? 'disabled' : ''}>${ctx._saving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
        ${ctx._error ? `<div class="status error">${escapeHtml(ctx._error)}</div>` : ''}
        ${ctx._status ? `<div class="status ok">${escapeHtml(ctx._status)}</div>` : ''}
      </section>
    `;
};
