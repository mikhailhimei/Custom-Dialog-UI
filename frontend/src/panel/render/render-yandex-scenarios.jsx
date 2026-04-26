import { escapeHtml } from '../utils.jsx';

const renderScenarioCard = (scenario, index) => {
  const subVoice = Array.isArray(scenario.subVoice) ? scenario.subVoice : [];
  const subCommands = Array.isArray(scenario.subCommands) ? scenario.subCommands : [];
  return `
    <article class="scenario-card">
      <div class="scenario-header">
        <div>
          <span class="scenario-kicker">Yandex Scenario ${index + 1}</span>
          <span class="scenario-title">${escapeHtml(scenario.mainCommand || '')}</span>
        </div>
      </div>
      ${scenario.voiceResponse ? `<div class="condition-preview">voiceResponse: ${escapeHtml(scenario.voiceResponse)}</div>` : ''}
      ${scenario.accounts ? `<div class="condition-preview">accounts: ${escapeHtml(scenario.accounts)}</div>` : ''}
      <div class="conditions-list">
        <details class="condition-card" ${subVoice.length ? 'open' : ''}>
          <summary class="condition-title">subVoice (${subVoice.length})</summary>
          <div class="condition-body open">
            ${subVoice.length ? subVoice.map((item, subIndex) => `<div class="condition-preview">${subIndex + 1}. ${escapeHtml(item.text || '')}</div>`).join('') : '<div class="condition-preview">Нет данных</div>'}
          </div>
        </details>
        <details class="condition-card" ${subCommands.length ? 'open' : ''}>
          <summary class="condition-title">subCommands (${subCommands.length})</summary>
          <div class="condition-body open">
            ${subCommands.length ? subCommands.map((item, subIndex) => `<div class="condition-preview">${subIndex + 1}. ${escapeHtml(item.text || '')}</div>`).join('') : '<div class="condition-preview">Нет данных</div>'}
          </div>
        </details>
      </div>
    </article>
  `;
};

const renderSubItemsEditor = (ctx, type, title, maxCount = 999) => {
  const key = type === 'subVoice' ? 'subVoice' : 'subCommands';
  const items = Array.isArray(ctx._yandexDraft?.[key]) ? ctx._yandexDraft[key] : [];
  const canAdd = items.length < maxCount;
  return `
    <details class="condition-card" open>
      <summary class="condition-title">${title}</summary>
      <div class="condition-body open">
        ${items.length ? items.map((item, index) => `
          <div class="device-row">
            <label class="field-grow">
              <span>text</span>
              <input
                data-yandex-sub-field="text"
                data-yandex-sub-type="${key}"
                data-yandex-sub-index="${index}"
                value="${escapeHtml(item.text || '')}"
                placeholder="Введите текст"
              />
            </label>
            <button type="button" class="ghost device-remove-button" data-action="remove-yandex-sub" data-sub-type="${key}" data-sub-index="${index}">Удалить</button>
          </div>
        `).join('') : '<div class="condition-preview">Пусто</div>'}
        <button
          type="button"
          class="secondary compact-button"
          data-action="add-yandex-sub"
          data-sub-type="${key}"
          ${canAdd ? '' : 'disabled'}
        >
          Добавить
        </button>
      </div>
    </details>
  `;
};

const renderModal = (ctx) => {
  if (!ctx._yandexModalOpen) {
    return '';
  }

  return `
    <div class="command-modal-backdrop" data-action="close-yandex-modal"></div>
    <section class="command-modal" role="dialog" aria-modal="true">
      <div class="command-modal-header">
        <h2>Создать сценарий</h2>
        <button type="button" class="ghost compact-button" data-action="close-yandex-modal">Закрыть</button>
      </div>
      <div class="command-modal-grid">
        <label>
          <span>mainCommand *</span>
          <input data-yandex-field="mainCommand" value="${escapeHtml(ctx._yandexDraft?.mainCommand || '')}" placeholder="Включи распознавание лица" />
        </label>
        <label>
          <span>voiceResponse</span>
          <input data-yandex-field="voiceResponse" value="${escapeHtml(ctx._yandexDraft?.voiceResponse || '')}" placeholder="Опционально" />
        </label>
        <label class="field-span-2">
          <span>accounts (через ;)</span>
          <input data-yandex-field="accounts" value="${escapeHtml(ctx._yandexDraft?.accounts || '')}" placeholder="mihailhimei;another_account" />
        </label>
      </div>
      ${renderSubItemsEditor(ctx, 'subVoice', 'subVoice (до 3)', 3)}
      ${renderSubItemsEditor(ctx, 'subCommands', 'subCommands')}
      <div class="command-modal-footer">
        <button type="button" class="primary" data-action="save-yandex-scenario" ${ctx._yandexSaving ? 'disabled' : ''}>${ctx._yandexSaving ? 'Сохранение...' : 'Сохранить'}</button>
      </div>
      ${ctx._yandexError ? `<div class="status error">${escapeHtml(ctx._yandexError)}</div>` : ''}
    </section>
  `;
};

export const renderYandexScenarios = (ctx) => {
  const scenarios = Array.isArray(ctx._yandexScenarios) ? ctx._yandexScenarios : [];
  return `
    <section class="hero-card">
      <h1>Яндекс сценарии</h1>
      <p>Источник: <code>homeassistant/yandex_intents.yaml</code>. Данные читаются из файла и после сохранения полностью перезаписываются.</p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="open-yandex-modal">Создать сценарий</button>
        <button type="button" class="ghost" data-action="reload-yandex-scenarios" ${ctx._yandexLoading ? 'disabled' : ''}>${ctx._yandexLoading ? 'Обновление...' : 'Обновить'}</button>
      </div>
      ${ctx._yandexStatus ? `<div class="status ok">${escapeHtml(ctx._yandexStatus)}</div>` : ''}
      ${ctx._yandexError ? `<div class="status error">${escapeHtml(ctx._yandexError)}</div>` : ''}
    </section>
    <section class="scenario-list">
      ${scenarios.length ? scenarios.map((scenario, index) => renderScenarioCard(scenario, index)).join('') : '<div class="empty">Сценарии не найдены.</div>'}
    </section>
    ${renderModal(ctx)}
  `;
};
