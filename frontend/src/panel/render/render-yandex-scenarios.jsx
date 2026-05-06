import React from 'react';

const renderSubItemsEditor = (ctx, type, title, maxCount = 999) => {
  const key = type === 'subVoice' ? 'subVoice' : 'subCommands';
  const items = Array.isArray(ctx._yandexDraft?.[key]) ? ctx._yandexDraft[key] : [];
  const canAdd = items.length < maxCount;
  const openedItemId = String(ctx._yandexSubItemOpen?.[key] ?? '');

  const itemElements = items.length
    ? items.map((item, index) => {
        const itemId = String(item?.id ?? `${key}_${index}`);
        const itemOpen = openedItemId === itemId;
        const itemTitle = String(item?.text ?? '').trim() || 'text';
        return (
          <details
            key={itemId}
            className="yandex-item-accordion"
            open={itemOpen}
            onToggle={(e) => ctx._setYandexSubItemOpen(type, itemOpen ? '' : itemId)}
          >
            <summary className="condition-title">{itemTitle}</summary>
            <div className="yandex-sub-item-body">
              <div className="device-row">
                <label className="field-grow">
                  <span>text</span>
                  <input
                    data-yandex-sub-field="text"
                    data-yandex-sub-type={key}
                    data-yandex-sub-index={index}
                    value={item.text || ''}
                    placeholder="Введите текст"
                    onChange={(e) => ctx._updateYandexDraftSubItem(type, index, 'text', e.target.value, true)}
                  />
                </label>
                <button
                  type="button"
                  className="ghost device-remove-button"
                  onClick={() => ctx._removeYandexDraftSubItem(type, index)}
                >
                  Удалить
                </button>
              </div>
            </div>
          </details>
        );
      })
    : <div className="condition-preview">Пусто</div>;

  return (
    <section className="condition-card">
      <div className="condition-title">{title}</div>
      <div className="condition-body open">
        {itemElements}
        <div className="yandex-sub-add-row">
          <button
            type="button"
            className="secondary yandex-sub-add-button"
            onClick={() => ctx._addYandexDraftSubItem(type)}
            disabled={!canAdd}
          >
            Добавить
          </button>
        </div>
      </div>
    </section>
  );
};

const renderScenarioTabs = (ctx, scenarios) => {
  const active = String(ctx._yandexActiveScenarioKey ?? '').trim();

  const dropdown = (
    <div className="yandex-tabs-toolbar">
      <label className="yandex-scenario-select">
        <span>Сценарий</span>
        <select
          value={active}
          onChange={(e) => ctx._setYandexActiveScenario(e.target.value)}
        >
          {scenarios.map((scenario, index) => {
            const key = String(scenario.mainCommand ?? '').trim();
            const label = scenario.mainCommand || `Сценарий ${index + 1}`;
            return (
              <option key={key} value={key}>{label}</option>
            );
          })}
          <option value="__new__">Новый сценарий</option>
        </select>
      </label>
      <button
        type="button"
        className="subtab-button"
        onClick={() => ctx._setYandexActiveScenario('__new__')}
      >
        + Новый
      </button>
    </div>
  );

  return (
    <section className="hero-card">
      {dropdown}
    </section>
  );
};

const renderEditor = (ctx) => {
  const isNew = String(ctx._yandexActiveScenarioKey ?? '') === '__new__';
  const title = isNew
    ? 'Новый сценарий'
    : String(ctx._yandexDraft?.mainCommand ?? '').trim() || 'Сценарий';

  return (
    <section className="scenario-card expanded">
      <div className="condition-header">
        <div className="condition-heading">
          <span className="condition-title">{isNew ? 'Создание' : 'Редактирование'}</span>
          <span className="scenario-title">{title}</span>
        </div>
      </div>
      <div className="condition-body open">
        <div className="condition-grid">
          <label>
            <span>mainCommand *</span>
            <input
              data-yandex-field="mainCommand"
              value={ctx._yandexDraft?.mainCommand || ''}
              placeholder="Включи распознавание лица"
              onChange={(e) => ctx._updateYandexDraftField('mainCommand', e.target.value, true)}
            />
          </label>
          <label>
            <span>voiceResponse</span>
            <input
              data-yandex-field="voiceResponse"
              value={ctx._yandexDraft?.voiceResponse || ''}
              placeholder="Опционально"
              onChange={(e) => ctx._updateYandexDraftField('voiceResponse', e.target.value, true)}
            />
          </label>
          <label className="field-span-2">
            <span>accounts (через ;)</span>
            <input
              data-yandex-field="accounts"
              value={ctx._yandexDraft?.accounts || ''}
              placeholder="mihailhimei;another_account"
              onChange={(e) => ctx._updateYandexDraftField('accounts', e.target.value, true)}
            />
          </label>
        </div>
        {renderSubItemsEditor(ctx, 'subVoice', 'subVoice (до 3)', 3)}
        {renderSubItemsEditor(ctx, 'subCommands', 'subCommands')}
        <div className="toolbar">
          <button
            type="button"
            className="primary"
            onClick={() => ctx._saveYandexScenarioFromModal()}
            disabled={ctx._yandexSaving}
          >
            {ctx._yandexSaving ? 'Сохранение...' : 'Сохранить'}
          </button>
          {!isNew && (
            <button
              type="button"
              className="ghost"
              onClick={() => ctx._deleteActiveYandexScenario()}
              disabled={ctx._yandexSaving}
            >
              Удалить
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export const renderYandexScenarios = (ctx) => {
  const scenarios = Array.isArray(ctx._yandexScenarios) ? ctx._yandexScenarios : [];

  return (
    <>
      <section className="hero-card">
        <h1>Яндекс сценарии</h1>
        <p>Источник: <code>homeassistant/yandex_intents.yaml</code>. Выберите сценарий во вкладке и отредактируйте его в форме ниже.</p>
        <div className="toolbar">
          <button
            type="button"
            className="ghost"
            onClick={() => ctx._loadYandexScenarios()}
            disabled={ctx._yandexLoading}
          >
            {ctx._yandexLoading ? 'Обновление...' : 'Обновить'}
          </button>
        </div>
        {ctx._yandexStatus && <div className="status ok">{ctx._yandexStatus}</div>}
        {ctx._yandexError && <div className="status error">{ctx._yandexError}</div>}
      </section>
      {renderScenarioTabs(ctx, scenarios)}
      {renderEditor(ctx)}
    </>
  );
};
