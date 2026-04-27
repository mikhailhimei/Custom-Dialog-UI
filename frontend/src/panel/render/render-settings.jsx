import { escapeHtml } from '../utils.jsx';

const renderSecretField = (ctx, field, title, value, placeholder = '') => {
  const visible = ctx._isSecretVisible(field);
  return `
    <label>
      <span>${title}</span>
      <div class="secret-field">
        <input
          data-config-field="${field}"
          type="${visible ? 'text' : 'password'}"
          value="${escapeHtml(value ?? '')}"
          placeholder="${escapeHtml(placeholder)}"
          autocomplete="off"
          spellcheck="false"
        />
        <button
          type="button"
          class="ghost secret-toggle-button"
          data-action="toggle-secret"
          data-secret-field="${field}"
          title="${visible ? 'Скрыть' : 'Показать'}"
          aria-label="${visible ? 'Скрыть' : 'Показать'}"
        >${visible ? 'Hide' : 'Show'}</button>
      </div>
    </label>
  `;
};

export const renderSettings = (ctx) => {
  return `
      <section class="hero-card">
        <h1>Settings</h1>
        <p>Общие параметры подключения для сценариев и Yandex TTS: IP, client_id, токены, timeout, voice/speed/folderId и служебные действия.</p>
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
          ${renderSecretField(ctx, 'timer_alarm_token', 'Authorization token', ctx._config.timer_alarm_token, 'Bearer xxx')}
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
          <label class="field-narrow">
            <span>Доступ не-админам</span>
            <div class="switch-control">
              <input
                type="checkbox"
                data-config-field="allow_non_admin_panel"
                data-config-bool="true"
                ${ctx._config.allow_non_admin_panel ? 'checked' : ''}
              />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${ctx._config.allow_non_admin_panel ? 'Включен' : 'Выключен'}</span>
            </div>
          </label>
          <div class="field-span-2 settings-subsection">
            <div class="section-label">Yandex TTS</div>
            <div class="config-grid">
              ${renderSecretField(ctx, 'yandex_tts_api_key', 'API Key', ctx._config.yandex_tts_api_key, 'AQVN...')}
              <label>
                <span>folderId</span>
                <input data-config-field="yandex_tts_folder_id" value="${escapeHtml(ctx._config.yandex_tts_folder_id)}" placeholder="b1g..." />
              </label>
              <label>
                <span>Voice</span>
                <select data-config-field="yandex_tts_voice">
                  ${['oksana', 'jane', 'omazh', 'zahar', 'ermil', 'silaerkan', 'erkanyavas', 'alyss', 'nick', 'alena', 'filipp']
                    .map((voice) => `<option value="${voice}" ${String(ctx._config.yandex_tts_voice ?? '') === voice ? 'selected' : ''}>${voice}</option>`).join('')}
                </select>
              </label>
              <label>
                <span>Speed</span>
                <input data-config-field="yandex_tts_speed" type="number" min="0.1" max="3" step="0.1" value="${escapeHtml(ctx._config.yandex_tts_speed)}" />
              </label>
              <label>
                <span>Language</span>
                <select data-config-field="yandex_tts_lang">
                  ${['ru-RU', 'en-US', 'tr-TR']
                    .map((lang) => `<option value="${lang}" ${String(ctx._config.yandex_tts_lang ?? '') === lang ? 'selected' : ''}>${lang}</option>`).join('')}
                </select>
              </label>
              <label>
                <span>Codec</span>
                <select data-config-field="yandex_tts_codec">
                  ${['oggopus', 'wav', 'lpcm']
                    .map((codec) => `<option value="${codec}" ${String(ctx._config.yandex_tts_codec ?? '') === codec ? 'selected' : ''}>${codec}</option>`).join('')}
                </select>
              </label>
              <label>
                <span>Emotion</span>
                <select data-config-field="yandex_tts_emotion">
                  ${['good', 'neutral', 'evil']
                    .map((emotion) => `<option value="${emotion}" ${String(ctx._config.yandex_tts_emotion ?? '') === emotion ? 'selected' : ''}>${emotion}</option>`).join('')}
                </select>
              </label>
              <div class="field-span-2 toolbar">
                <button type="button" class="ghost" data-action="download-yandex-tts-files">Скачать файлы /homeassistant/tts</button>
                <button type="button" class="ghost" data-action="upload-yandex-tts-files">Загрузить файлы в /homeassistant/tts</button>
                <input type="file" accept=".zip,application/zip" data-action="import-yandex-tts-input" style="display:none" />
              </div>
            </div>
          </div>
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
