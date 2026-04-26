import { escapeHtml } from '../utils.jsx';

const renderSubItemsEditor = (ctx, type, title, maxCount = 999) => {
  const key = type === 'subVoice' ? 'subVoice' : 'subCommands';
  const items = Array.isArray(ctx._yandexDraft?.[key]) ? ctx._yandexDraft[key] : [];
  const canAdd = items.length < maxCount;
  const isOpen = Boolean(ctx._yandexSubEditorsOpen?.[key]);
  const openedItemId = String(ctx._yandexSubItemOpen?.[key] ?? '');
  return `
    <details class="condition-card" data-yandex-sub-accordion="${key}" ${isOpen ? 'open' : ''}>
      <summary class="condition-title">${title}</summary>
      <div class="condition-body yandex-sub-body">
        ${items.length ? items.map((item, index) => {
    const itemId = String(item?.id ?? `${key}_${index}`);
    const itemOpen = openedItemId === itemId;
    return `
            <details class="yandex-item-accordion" data-yandex-sub-item-accordion="${key}" data-yandex-sub-item-id="${escapeHtml(itemId)}" ${itemOpen ? 'open' : ''}>
              <summary class="condition-title">text ${index + 1}</summary>
              <div class="yandex-sub-item-body">
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
              </div>
            </details>
          `;
  }).join('') : '<div class="condition-preview">Пусто</div>'}
      </div>
    </details>
    <div class="yandex-sub-add-row">
      <button
        type="button"
        class="secondary yandex-sub-add-button"
        data-action="add-yandex-sub"
        data-sub-type="${key}"
        ${canAdd ? '' : 'disabled'}
      >
        Добавить
      </button>
    </div>
  `;
};

const renderScenarioTabs = (ctx, scenarios) => {
  const active = String(ctx._yandexActiveScenarioKey ?? '').trim();
  const dropdown = `
    <div class="yandex-tabs-toolbar">
      <label class="yandex-scenario-select">
        <span>Сценарий</span>
        <select data-action="select-yandex-tab-dropdown">
          ${scenarios.map((scenario, index) => {
    const key = String(scenario.mainCommand ?? '').trim();
    const label = scenario.mainCommand || `Сценарий ${index + 1}`;
    return `<option value="${escapeHtml(key)}" ${active === key ? 'selected' : ''}>${escapeHtml(label)}</option>`;
  }).join('')}
          <option value="__new__" ${active === '__new__' ? 'selected' : ''}>Новый сценарий</option>
        </select>
      </label>
      <button type="button" class="subtab-button" data-action="create-yandex-tab" data-yandex-tab="__new__">+ Новый</button>
    </div>
  `;

  return `
    <section class="hero-card">
      ${dropdown}
    </section>
  `;
};

const renderEditor = (ctx) => {
  const isNew = String(ctx._yandexActiveScenarioKey ?? '') === '__new__';
  const title = isNew
    ? 'Новый сценарий'
    : String(ctx._yandexDraft?.mainCommand ?? '').trim() || 'Сценарий';
  const isOpen = Boolean(ctx._yandexEditorOpen);

  return `
    <section class="scenario-card expanded">
      <button type="button" class="condition-header" data-action="toggle-yandex-editor">
        <div class="condition-heading">
          <span class="condition-title">${isNew ? 'Создание' : 'Редактирование'}</span>
          <span class="scenario-title">${escapeHtml(title)}</span>
        </div>
        <span class="condition-accordion-icon">${isOpen ? '−' : '+'}</span>
      </button>
      <div class="condition-body ${isOpen ? 'open' : 'hidden'}">
        <div class="condition-grid">
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
        <div class="toolbar">
          <button type="button" class="primary" data-action="save-yandex-scenario" ${ctx._yandexSaving ? 'disabled' : ''}>${ctx._yandexSaving ? 'Сохранение...' : 'Сохранить'}</button>
          ${isNew ? '' : `<button type="button" class="ghost" data-action="delete-yandex-scenario" ${ctx._yandexSaving ? 'disabled' : ''}>Удалить</button>`}
        </div>
      </div>
    </section>
  `;
};

export const renderYandexScenarios = (ctx) => {
  const scenarios = Array.isArray(ctx._yandexScenarios) ? ctx._yandexScenarios : [];
  return `
    <section class="hero-card">
      <h1>Яндекс сценарии</h1>
      <p>Источник: <code>homeassistant/yandex_intents.yaml</code>. Выберите сценарий во вкладке и отредактируйте его в аккордеоне ниже.</p>
      <div class="toolbar">
        <button type="button" class="ghost" data-action="reload-yandex-scenarios" ${ctx._yandexLoading ? 'disabled' : ''}>${ctx._yandexLoading ? 'Обновление...' : 'Обновить'}</button>
      </div>
      ${ctx._yandexStatus ? `<div class="status ok">${escapeHtml(ctx._yandexStatus)}</div>` : ''}
      ${ctx._yandexError ? `<div class="status error">${escapeHtml(ctx._yandexError)}</div>` : ''}
    </section>
    ${renderScenarioTabs(ctx, scenarios)}
    ${renderEditor(ctx)}
  `;
};
