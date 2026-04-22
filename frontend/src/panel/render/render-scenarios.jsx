import { EXAMPLE_PAYLOAD } from '../constants.jsx';
import { escapeHtml } from '../utils.jsx';

export const renderScenarios = (ctx) => {
  const scripts = ctx._scripts();
  const scenarioMarkup = ctx._config.scenarios.length
    ? ctx._config.scenarios.map((scenario, index) => {
      const isExpanded = ctx._expandedScenarios.has(scenario.id);
      const conditionsMarkup = scenario.conditions.map((condition, conditionIndex) => `
            ${(() => {
          const isConditionExpanded = ctx._expandedConditions.has(condition.id);
          const previewParts = [];
          if (condition.parent_type) {
            previewParts.push(`Parent: ${escapeHtml(condition.parent_type)}`);
          }
          if (condition.children_type_enabled && condition.children_type) {
            previewParts.push(`Children: ${escapeHtml(condition.children_type)}`);
          }
          if (condition.children_direct_type_enabled && condition.children_direct_type) {
            previewParts.push(`Children Direct: ${escapeHtml(condition.children_direct_type)}`);
          }
          const preview = previewParts.join(' • ') || 'Пустое условие';
          return `
            <div class="condition-card ${isConditionExpanded ? 'expanded' : 'collapsed'}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${escapeHtml(condition.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">Условие ${conditionIndex + 1}</span>
                  <span class="condition-preview">${preview}</span>
                </span>
                <span class="condition-header-side">
                  <span class="condition-accordion-icon">${isConditionExpanded ? '−' : '+'}</span>
                </span>
              </button>
              <div class="condition-body ${isConditionExpanded ? 'open' : 'hidden'}">
                <div class="condition-actions">
                  ${scenario.conditions.length > 1 ? `
                    <button
                      type="button"
                      class="ghost remove-inline-button"
                      data-scenario-id="${escapeHtml(scenario.id)}"
                      data-remove-condition-id="${escapeHtml(condition.id)}"
                    >Удалить условие</button>
                  ` : ''}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${escapeHtml(scenario.id)}"
                      data-condition-id="${escapeHtml(condition.id)}"
                      data-condition-field="parent_type"
                      value="${escapeHtml(condition.parent_type)}"
                      placeholder="status_door"
                    />
                    <small>Обязателен только если не задан children_type в этом же условии.</small>
                  </div>
                  ${condition.children_type_enabled ? `
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-type"
                          data-scenario-id="${escapeHtml(scenario.id)}"
                          data-condition-id="${escapeHtml(condition.id)}"
                        >Удалить</button>
                      </div>
                      <input
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                        data-condition-field="children_type"
                        value="${escapeHtml(condition.children_type ?? '')}"
                        placeholder="some_subcommand"
                      />
                      <small>Необязателен. <code>all</code> означает любой непустой children_type именно для этого условия.</small>
                    </div>
                  ` : `
                    <div class="scenario-type-field field-placeholder">
                      <div class="field-title-row">
                        <span>Children Type</span>
                      </div>
                      <button
                        type="button"
                        class="ghost add-inline-button"
                        data-action="enable-condition-children-type"
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                      >Добавить children_type</button>
                      <small>Если не добавлять, условие будет проверяться только по parent_type.</small>
                    </div>
                  `}
                  ${condition.children_direct_type_enabled ? `
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-direct-type"
                          data-scenario-id="${escapeHtml(scenario.id)}"
                          data-condition-id="${escapeHtml(condition.id)}"
                        >Удалить</button>
                      </div>
                      <input
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                        data-condition-field="children_direct_type"
                        value="${escapeHtml(condition.children_direct_type ?? '')}"
                        placeholder="direct_subcommand"
                      />
                      <small>Необязателен. Если direct type не пришел во входящем payload, это условие просто не ограничивается по нему.</small>
                    </div>
                  ` : `
                    <div class="scenario-type-field field-placeholder">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                      </div>
                      <button
                        type="button"
                        class="ghost add-inline-button"
                        data-action="enable-condition-children-direct-type"
                        data-scenario-id="${escapeHtml(scenario.id)}"
                        data-condition-id="${escapeHtml(condition.id)}"
                      >Добавить children_direct_type</button>
                      <small>Если не добавлять, условие будет проверяться без учета direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `;
        })()}
          `).join('');
      return `
            <section class="scenario-card ${isExpanded ? 'expanded' : 'collapsed'}" data-scenario-card-id="${escapeHtml(scenario.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${escapeHtml(scenario.id)}">
                  <span class="scenario-toggle-icon">${isExpanded ? '−' : '+'}</span>
                  <span>
                    <span class="scenario-kicker">Сценарий ${index + 1}</span>
                    <span class="scenario-title">${escapeHtml(scenario.name || 'Без названия')}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${escapeHtml(scenario.id)}">Удалить</button>
              </div>
              <div class="scenario-body ${isExpanded ? 'open' : 'hidden'}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>Название блока</span>
                    <input data-scenario-id="${escapeHtml(scenario.id)}" data-scenario-field="name" value="${escapeHtml(scenario.name)}" placeholder="Например: Проверить дверь" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">Условия</span>
                        <small>Через <code>+</code> можно добавить ещё пару <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. Если в <code>Parent Type</code> указать несколько значений через <code>;</code>, после сохранения они автоматически разложатся на отдельные условия.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${escapeHtml(scenario.id)}">+ Добавить условие</button>
                    </div>
                    <div class="conditions-list">${conditionsMarkup}</div>
                  </div>
                  <label class="field-span-2">
                    <span>Скрипт Home Assistant</span>
                    <select data-scenario-id="${escapeHtml(scenario.id)}" data-scenario-field="script_entity_id">
                      <option value="">Выберите script.*</option>
                      ${scripts.map((script) => {
          const selected = script.entity_id === scenario.script_entity_id ? 'selected' : '';
          const label = script.attributes.friendly_name || script.entity_id;
          return `<option value="${escapeHtml(script.entity_id)}" ${selected}>${escapeHtml(label)} (${escapeHtml(script.entity_id)})</option>`;
        }).join('')}
                    </select>
                  </label>
                </div>
              </div>
            </section>
          `;
    }).join('')
    : '<div class="empty">Сценарии пока не добавлены. Нажмите плюс и создайте первое правило маршрутизации.</div>';

  return `
      <section class="hero-card">
        <h1>Scenarios</h1>
        <p>Здесь редактируются правила сценариев. Подключение вынесено во вкладку настроек.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="add-scenario">+ Добавить сценарий</button>
          <button type="button" class="primary" data-action="save" ${ctx._saving ? 'disabled' : ''}>${ctx._saving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
        ${ctx._error ? `<div class="status error">${escapeHtml(ctx._error)}</div>` : ''}
        ${ctx._status ? `<div class="status ok">${escapeHtml(ctx._status)}</div>` : ''}
      </section>
      <div class="scenario-list">${scenarioMarkup}</div>
      <section class="help-card">
        <div><strong>Внешний запрос</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check \
  -H "Content-Type: application/json" \
  -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>Что передается в скрипт</strong></div>
        <div>При совпадении правила вызывается выбранный <code>script.*</code> и получает переменные: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${escapeHtml(EXAMPLE_PAYLOAD)}</code></pre>
      </section>
    `;
};
