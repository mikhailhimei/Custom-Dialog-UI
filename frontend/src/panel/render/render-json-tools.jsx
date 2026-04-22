import { escapeHtml } from '../utils.jsx';

export const renderJsonTools = (ctx) => {
  const payload = ctx._buildConfigPayload();

  return `
      <section class="hero-card">
        <h1>JSON</h1>
        <p>Можно скачать текущую конфигурацию в файл или загрузить свой JSON обратно в форму.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="download-json">Скачать JSON</button>
          <button type="button" class="primary" data-action="upload-json">Загрузить JSON</button>
          <input type="file" accept=".json,application/json" data-action="import-json-input" hidden />
        </div>
        ${ctx._error ? `<div class="status error">${escapeHtml(ctx._error)}</div>` : ''}
        ${ctx._status ? `<div class="status ok">${escapeHtml(ctx._status)}</div>` : ''}
      </section>
      <section class="help-card">
        <div><strong>Предпросмотр текущего JSON</strong></div>
        <pre><code>${escapeHtml(JSON.stringify(payload, null, 2))}</code></pre>
      </section>
    `;
};
