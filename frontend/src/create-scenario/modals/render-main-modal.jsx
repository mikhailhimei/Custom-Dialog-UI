import { TYPE_COMPONENT_OPTIONS } from '../constants.jsx';
import { escapeHtml } from '../utils.jsx';

export const renderMainModal = (ctx) => {
  if (!ctx._modalOpen) {
    return '';
  }
  const title = ctx._modalMode === 'edit' ? 'Редактировать сценарий' : 'Создать сценарий';
  const isEditMode = ctx._modalMode === 'edit';
  const canRefreshUuid = !isEditMode && !String(ctx._draft.uuid ?? '').trim();
  return `
    <div class="modal-backdrop" data-action="close"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="modal-header">
        <h3>${escapeHtml(title)}</h3>
        <div class="modal-header-actions">
          ${ctx._modalMode === 'edit' ? `
            <button type="button" class="secondary" data-action="toggle-status" ${ctx._modalSaving ? 'disabled' : ''}>
              ${ctx._editingStatus ? 'Скрыть' : 'Опубликовать'}
            </button>
          ` : ''}
          <button type="button" class="ghost" data-action="close" ${ctx._modalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
      </div>
      <div class="modal-grid">
        <label><span>Title</span><input data-field="title" value="${escapeHtml(ctx._draft.title)}" /></label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-field="uuid" value="${escapeHtml(ctx._draft.uuid)}" ${isEditMode ? 'readonly' : ''} />
            ${canRefreshUuid ? `
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-uuid"
                aria-label="Обновить uuid"
                title="Обновить uuid"
                ${ctx._modalSaving ? 'disabled' : ''}
              >↻</button>
            ` : ''}
          </div>
        </label>
        <label><span>actionType</span><input data-field="type" value="${escapeHtml(ctx._draft.type)}" /></label>
        <label>
          <span>answerType</span>
          <select data-field="answerType">
            <option value="default" ${ctx._draft.answerType === 'default' ? 'selected' : ''}>default</option>
            <option value="redis" ${ctx._draft.answerType === 'redis' ? 'selected' : ''}>redis</option>
          </select>
        </label>
        <label>
          <span>endStatus</span>
          <div class="switch-control">
            <input type="checkbox" data-field="endStatus" ${ctx._draft.endStatus ? 'checked' : ''} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${ctx._draft.endStatus ? 'Включено' : 'Выключено'}</span>
          </div>
        </label>
        <label>
          <span>forwardText</span>
          <div class="switch-control">
            <input type="checkbox" data-field="forwardText" ${ctx._draft.forwardText ? 'checked' : ''} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${ctx._draft.forwardText ? 'Включено' : 'Выключено'}</span>
          </div>
        </label>
        <label class="field-span-2">
          <span>voiceCommands (string)</span>
          <textarea rows="6" class="voice-commands-field" data-field="voiceCommands">${escapeHtml(ctx._draft.voiceCommands)}</textarea>
        </label>
        <section class="field-span-2 response-accordion open">
          <div class="response-accordion-head-static">
            <span class="response-accordion-title">voiceResponseArray</span>
          </div>
          <div class="response-accordion-body">
            <div class="response-items">
              ${(Array.isArray(ctx._draft.responseItems) ? ctx._draft.responseItems : []).map((responseItem, index) => {
                const isOpen = ctx._openResponseItemIds.has(responseItem.id);
                return `
                  <section class="response-item-card ${isOpen ? 'open' : ''}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-response-item"
                      data-response-item-id="${escapeHtml(responseItem.id)}"
                    >
                      <span>Элемент ${index + 1}</span>
                      <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                    </button>
                    ${isOpen ? `
                      <div class="response-item-grid">
                        <div class="response-inline-row">
                          <label>
                            <span>actionType</span>
                            <input
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                              data-response-item-field="type"
                              value="${escapeHtml(responseItem.type)}"
                              placeholder="default"
                            />
                          </label>
                          <label>
                            <span>LLM</span>
                            <div class="switch-control">
                              <input
                                type="checkbox"
                                data-response-item-id="${escapeHtml(responseItem.id)}"
                                data-response-item-field="llmEnabled"
                                ${responseItem.llmEnabled ? 'checked' : ''}
                              />
                              <span class="switch-slider" aria-hidden="true"></span>
                              <span class="switch-label">${responseItem.llmEnabled ? 'Включено' : 'Выключено'}</span>
                            </div>
                          </label>
                        </div>
                        <label>
                          <span>voiceResponse</span>
                          <textarea
                            rows="3"
                            data-response-item-id="${escapeHtml(responseItem.id)}"
                            data-response-item-field="voiceResponse"
                          >${escapeHtml(responseItem.voiceResponse)}</textarea>
                        </label>
                        ${responseItem.llmEnabled ? `
                          <label>
                            <span>system</span>
                            <textarea
                              rows="3"
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                              data-response-item-field="system"
                            >${escapeHtml(responseItem.system)}</textarea>
                          </label>
                          <label>
                            <span>model</span>
                            <input
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                              data-response-item-field="model"
                              value="${escapeHtml(responseItem.model)}"
                            />
                          </label>
                        ` : ''}
                        ${(ctx._draft.responseItems?.length || 0) > 1 ? `
                          <div class="response-item-actions">
                            <button
                              type="button"
                              class="ghost compact-delete-button"
                              data-action="remove-voice-response-item"
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                            >Удалить элемент</button>
                          </div>
                        ` : ''}
                      </div>
                    ` : ''}
                  </section>
                `;
              }).join('')}
            </div>
            <button type="button" class="secondary compact-button" data-action="add-voice-response-item">+ Добавить элемент</button>
          </div>
        </section>
        <section class="field-span-2 array-builder">
          <div class="array-builder-header">
            <span>nextAction</span>
            <button type="button" class="secondary compact-button" data-action="add-next-action-item">+ Добавить элемент</button>
          </div>
          <div class="array-builder-list">
            ${(Array.isArray(ctx._draft.nextActionItems) ? ctx._draft.nextActionItems : []).map((item, index) => {
              const isOpen = ctx._openNextActionItemIds.has(item.id);
              return `
                <section class="response-item-card ${isOpen ? 'open' : ''}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-next-action-item"
                    data-next-action-item-id="${escapeHtml(item.id)}"
                  >
                    <span>${escapeHtml(item.uuid ? (item.displayValue || item.uuid) : `Элемент ${index + 1}`)}</span>
                    <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                  </button>
                  ${isOpen ? `
                    <div class="response-item-grid">
                      <div class="response-inline-row">
                        <label>
                          <span>actionTypeComponent</span>
                          <select data-next-action-item-id="${escapeHtml(item.id)}" data-next-action-item-field="actionTypeComponent">
                            ${TYPE_COMPONENT_OPTIONS.map((option) => `
                              <option value="${option}" ${item.actionTypeComponent === option ? 'selected' : ''}>${option}</option>
                            `).join('')}
                          </select>
                        </label>
                        <label>
                          <span>uuid</span>
                          <div class="dropdown-container">
                            <input
                              data-next-action-item-id="${escapeHtml(item.id)}"
                              data-next-action-item-field="uuid"
                              value="${escapeHtml(item.uuid)}"
                              placeholder="uuid"
                            />
                            ${ctx._searchActiveType === 'nextAction' && ctx._searchActiveItemId === item.id && ctx._searchResults.length > 0 ? `
                              <div class="dropdown-options">
                                ${ctx._searchResults.map((result) => `
                                  <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${escapeHtml(item.id)}" data-result-uuid="${escapeHtml(result.uuid)}" data-result-title="${escapeHtml(result.title)}" data-result-mapping-type="${escapeHtml(result.mappingType ?? '')}">
                                    ${escapeHtml(result.title)} (${escapeHtml(result.uuid)})
                                  </div>
                                `).join('')}
                              </div>
                            ` : ''}
                          </div>
                        </label>
                      </div>
                      ${item.actionTypeComponent === 'custom' ? `
                        <label>
                          <span>actionType</span>
                          <input
                            data-next-action-item-id="${escapeHtml(item.id)}"
                            data-next-action-item-field="actionType"
                            value="${escapeHtml(item.actionType ?? item.mappingType ?? '')}"
                            placeholder="custom actionType"
                          />
                        </label>
                      ` : ''}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-next-action-item"
                          data-next-action-item-id="${escapeHtml(item.id)}"
                        >Удалить элемент</button>
                      </div>
                    </div>
                  ` : ''}
                </section>
              `;
            }).join('')}
            ${(ctx._draft.nextActionItems?.length || 0) === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
          </div>
        </section>
        <section class="field-span-2 array-builder">
          <div class="array-builder-header">
            <span>nextDirectControl</span>
            <button type="button" class="secondary compact-button" data-action="add-direct-control-item">+ Добавить элемент</button>
          </div>
          <div class="array-builder-list">
            ${(Array.isArray(ctx._draft.directControlItems) ? ctx._draft.directControlItems : []).map((item, index) => {
              const isOpen = ctx._openDirectControlItemIds.has(item.id);
              return `
                <section class="response-item-card ${isOpen ? 'open' : ''}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-direct-control-item"
                    data-direct-control-item-id="${escapeHtml(item.id)}"
                  >
                    <span>${escapeHtml(item.uuid ? (item.displayValue || item.uuid) : `Элемент ${index + 1}`)}</span>
                    <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                  </button>
                  ${isOpen ? `
                    <div class="response-item-grid">
                      <label>
                        <span>uuid</span>
                        <div class="dropdown-container">
                          <input
                            data-direct-control-item-id="${escapeHtml(item.id)}"
                            value="${escapeHtml(item.uuid)}"
                            placeholder="uuid"
                          />
                          ${ctx._searchActiveType === 'directControl' && ctx._searchActiveItemId === item.id && ctx._searchResults.length > 0 ? `
                            <div class="dropdown-options">
                              ${ctx._searchResults.map((result) => `
                                <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${escapeHtml(item.id)}" data-result-uuid="${escapeHtml(result.uuid)}" data-result-title="${escapeHtml(result.title)}" data-result-mapping-type="${escapeHtml(result.mappingType ?? '')}">
                                  ${escapeHtml(result.title)} (${escapeHtml(result.uuid)})
                                </div>
                              `).join('')}
                            </div>
                          ` : ''}
                        </div>
                      </label>
                      ${String(item.mappingType ?? '').trim() ? `
                        <label>
                          <span>mappingType</span>
                          <input value="${escapeHtml(item.mappingType)}" disabled />
                        </label>
                      ` : ''}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-direct-control-item"
                          data-direct-control-item-id="${escapeHtml(item.id)}"
                        >Удалить элемент</button>
                      </div>
                    </div>
                  ` : ''}
                </section>
              `;
            }).join('')}
            ${(ctx._draft.directControlItems?.length || 0) === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
          </div>
        </section>
      </div>
      <div class="modal-footer">
        ${ctx._modalMode === 'edit' ? `<button type="button" class="ghost compact-delete-button" data-action="delete" ${ctx._modalSaving ? 'disabled' : ''}>Удалить</button>` : ''}
        <button type="button" class="primary" data-action="save" ${ctx._modalSaving ? 'disabled' : ''}>${ctx._modalSaving ? 'Сохранение...' : 'Сохранить'}</button>
      </div>
    </section>
  `;
};
