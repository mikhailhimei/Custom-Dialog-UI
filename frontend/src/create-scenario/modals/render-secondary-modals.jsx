import { DIRECT_TYPE_DATA_OPTIONS } from '../constants.jsx';
import { escapeHtml } from '../utils.jsx';

export const renderDirectModal = (ctx) => {
  if (!ctx._directModalOpen) {
    return '';
  }
  const title = ctx._directModalMode === 'edit' ? 'Редактировать direct-команду' : 'Создать direct-команду';
  const isCommandType = ctx._directDraft.typeData === 'command';
  const isEditMode = ctx._directModalMode === 'edit';
  const canRefreshDirectUuid = !isEditMode && !String(ctx._directDraft.uuid ?? '').trim();
  const subItems = Array.isArray(ctx._directDraft.subDirectControlItems) ? ctx._directDraft.subDirectControlItems : [];
  const sampleOptions = Array.isArray(ctx._subDirectControlSampleOptions) ? ctx._subDirectControlSampleOptions : [];
  const selectedSampleUuid = String(ctx._directDraft.subDirectControl ?? '').trim();
  const hasSelectedSample = sampleOptions.some((item) => String(item?.uuid ?? '').trim() === selectedSampleUuid);
  return `
    <div class="modal-backdrop" data-action="close-direct"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="modal-header">
        <h3>${escapeHtml(title)}</h3>
        <div class="modal-header-actions">
          ${ctx._directModalMode === 'edit' ? `
            <button type="button" class="secondary" data-action="toggle-direct-status" ${ctx._directModalSaving ? 'disabled' : ''}>
              ${ctx._directEditingStatus ? 'Скрыть' : 'Опубликовать'}
            </button>
          ` : ''}
          <button type="button" class="ghost" data-action="close-direct" ${ctx._directModalSaving ? 'disabled' : ''}>Закрыть</button>
        </div>
      </div>
      <div class="modal-grid">
        <label>
          <span>title</span>
          <input data-direct-field="title" value="${escapeHtml(ctx._directDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-direct-field="uuid" value="${escapeHtml(ctx._directDraft.uuid)}" ${isEditMode ? 'readonly' : ''} />
            ${canRefreshDirectUuid ? `
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-direct-uuid"
                aria-label="Обновить uuid"
                title="Обновить uuid"
                ${ctx._directModalSaving ? 'disabled' : ''}
              >↻</button>
            ` : ''}
          </div>
        </label>
        <label>
          <span>directControl.mappingType</span>
          <input data-direct-field="type" value="${escapeHtml(ctx._directDraft.type)}" />
        </label>
        <label>
          <span>directControl.valueType</span>
          <select data-direct-field="typeData">
            ${DIRECT_TYPE_DATA_OPTIONS.map((option) => `
              <option value="${option}" ${ctx._directDraft.typeData === option ? 'selected' : ''}>${option}</option>
            `).join('')}
          </select>
        </label>
        ${isCommandType ? `
          <label class="field-span-2">
            <span>voiceCommands</span>
            <textarea rows="3" data-direct-field="voiceCommands">${escapeHtml(ctx._directDraft.voiceCommands)}</textarea>
          </label>
          <label class="field-span-2">
            <span>manual</span>
            <div class="switch-control">
              <input type="checkbox" data-direct-field="manual" ${ctx._directDraft.manual ? 'checked' : ''} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${ctx._directDraft.manual ? 'Включено' : 'Выключено'}</span>
            </div>
          </label>
          ${ctx._directDraft.manual ? `
            <section class="field-span-2 array-builder">
              <div class="array-builder-header">
                <span>subDirectControl</span>
                <button type="button" class="secondary compact-button" data-action="add-direct-sub-control-item">+ Добавить</button>
              </div>
              <div class="array-builder-list">
                ${subItems.map((item, index) => {
                  const isOpen = ctx._openDirectSubControlItemIds.has(item.id);
                  return `
                    <section class="response-item-card ${isOpen ? 'open' : ''}">
                      <button
                        type="button"
                        class="response-item-toggle"
                        data-action="toggle-direct-sub-control-item"
                        data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                      >
                        <span>Элемент ${index + 1}</span>
                        <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                      </button>
                      ${isOpen ? `
                        <div class="response-item-grid">
                          <label>
                            <span>subMappingType</span>
                            <input
                              data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                              data-direct-sub-control-item-field="subType"
                              value="${escapeHtml(item.subType)}"
                            />
                          </label>
                          <label>
                            <span>subVoiceCommands</span>
                            <textarea
                              rows="3"
                              data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                              data-direct-sub-control-item-field="subVoiceCommands"
                            >${escapeHtml(item.subVoiceCommands)}</textarea>
                          </label>
                          <div class="response-item-actions">
                            <button
                              type="button"
                              class="ghost compact-delete-button"
                              data-action="remove-direct-sub-control-item"
                              data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                            >Удалить элемент</button>
                          </div>
                        </div>
                      ` : ''}
                    </section>
                  `;
                }).join('')}
                ${subItems.length === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
              </div>
            </section>
          ` : `
            <label class="field-span-2">
              <span>subDirectControl</span>
              <select data-direct-field="subDirectControl">
                <option value="">Пока пусто (добавим позже)</option>
                ${selectedSampleUuid && !hasSelectedSample ? `
                  <option value="${escapeHtml(selectedSampleUuid)}" selected>${escapeHtml(selectedSampleUuid)}</option>
                ` : ''}
                ${sampleOptions.map((result) => `
                  <option value="${escapeHtml(result.uuid)}" ${ctx._directDraft.subDirectControl === result.uuid ? 'selected' : ''}>${escapeHtml(result.title)} (${escapeHtml(result.uuid)})</option>
                `).join('')}
              </select>
            </label>
          `}
        ` : ''}
      </div>
      <div class="modal-footer">
        ${ctx._directModalMode === 'edit' ? `<button type="button" class="ghost compact-delete-button" data-action="delete-direct" ${ctx._directModalSaving ? 'disabled' : ''}>Удалить</button>` : ''}
        <button type="button" class="primary" data-action="save-direct" ${ctx._directModalSaving ? 'disabled' : ''}>${ctx._directModalSaving ? 'Сохранение...' : 'Сохранить'}</button>
      </div>
    </section>
  `;
};

export const renderTemplateModal = (ctx) => {
  if (!ctx._templateModalOpen) {
    return '';
  }
  const title = ctx._templateModalMode === 'edit' ? 'Редактировать шаблон' : 'Создать шаблон';
  const isEditMode = ctx._templateModalMode === 'edit';
  const canRefreshTemplateUuid = !isEditMode && !String(ctx._templateDraft.uuid ?? '').trim();
  const subItems = Array.isArray(ctx._templateDraft.subDirectControlItems) ? ctx._templateDraft.subDirectControlItems : [];
  return `
    <div class="modal-backdrop" data-action="close-template"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="modal-header">
        <h3>${escapeHtml(title)}</h3>
        <button type="button" class="ghost" data-action="close-template" ${ctx._templateModalSaving ? 'disabled' : ''}>Закрыть</button>
      </div>
      <div class="modal-grid">
        <label>
          <span>title</span>
          <input data-template-field="title" value="${escapeHtml(ctx._templateDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-template-field="uuid" value="${escapeHtml(ctx._templateDraft.uuid)}" ${isEditMode ? 'readonly' : ''} />
            ${canRefreshTemplateUuid ? `
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-template-uuid"
                aria-label="Обновить uuid"
                title="Обновить uuid"
                ${ctx._templateModalSaving ? 'disabled' : ''}
              >↻</button>
            ` : ''}
          </div>
        </label>
        <section class="field-span-2 array-builder">
          <div class="array-builder-header">
            <span>subDirectControl</span>
            <button type="button" class="secondary compact-button" data-action="add-template-sub-control-item">+ Добавить</button>
          </div>
          <div class="array-builder-list">
            ${subItems.map((item, index) => {
              const isOpen = ctx._openTemplateSubControlItemIds.has(item.id);
              return `
                <section class="response-item-card ${isOpen ? 'open' : ''}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-template-sub-control-item"
                    data-template-sub-control-item-id="${escapeHtml(item.id)}"
                  >
                    <span>Элемент ${index + 1}</span>
                    <span class="response-accordion-icon">${isOpen ? '−' : '+'}</span>
                  </button>
                  ${isOpen ? `
                    <div class="response-item-grid">
                      <label>
                        <span>subMappingType</span>
                        <input
                          data-template-sub-control-item-id="${escapeHtml(item.id)}"
                          data-template-sub-control-item-field="subType"
                          value="${escapeHtml(item.subType)}"
                        />
                      </label>
                      <label>
                        <span>subVoiceCommands</span>
                        <textarea
                          rows="3"
                          data-template-sub-control-item-id="${escapeHtml(item.id)}"
                          data-template-sub-control-item-field="subVoiceCommands"
                        >${escapeHtml(item.subVoiceCommands)}</textarea>
                      </label>
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-template-sub-control-item"
                          data-template-sub-control-item-id="${escapeHtml(item.id)}"
                        >Удалить элемент</button>
                      </div>
                    </div>
                  ` : ''}
                </section>
              `;
            }).join('')}
            ${subItems.length === 0 ? '<div class="empty">Элементов пока нет.</div>' : ''}
          </div>
        </section>
      </div>
      <div class="modal-footer">
        ${ctx._templateModalMode === 'edit' ? `<button type="button" class="ghost compact-delete-button" data-action="delete-template" ${ctx._templateModalSaving ? 'disabled' : ''}>Удалить</button>` : ''}
        <button type="button" class="primary" data-action="save-template" ${ctx._templateModalSaving ? 'disabled' : ''}>${ctx._templateModalSaving ? 'Сохранение...' : 'Сохранить'}</button>
      </div>
    </section>
  `;
};

export const renderDefaultsModal = (ctx) => {
  if (!ctx._defaultsModalOpen) {
    return '';
  }
  const type = ctx._defaultsActiveType;
  const config = ctx._defaultConfig(type);
  const draft = ctx._defaultsByType[type] ?? ctx._newDefaultsDraft(type);
  return `
    <div class="modal-backdrop" data-action="close-defaults"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(config.title)}">
      <div class="modal-header">
        <h3>${escapeHtml(config.title)}</h3>
        <button type="button" class="ghost" data-action="close-defaults" ${ctx._defaultsModalSaving ? 'disabled' : ''}>Закрыть</button>
      </div>
      <div class="modal-grid">
        <label class="field-span-2">
          <span>title</span>
          <input data-defaults-field="title" value="${escapeHtml(draft.title || config.title)}" disabled />
        </label>
        <label>
          <span>endStatus</span>
          <div class="switch-control">
            <input type="checkbox" data-defaults-field="endStatus" ${draft.endStatus ? 'checked' : ''} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${draft.endStatus ? 'Включено' : 'Выключено'}</span>
          </div>
        </label>
        ${config.supportsLlm ? `
          <label>
            <span>LLM</span>
            <div class="switch-control">
              <input type="checkbox" data-defaults-field="llmEnabled" ${draft.llmEnabled ? 'checked' : ''} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${draft.llmEnabled ? 'Включено' : 'Выключено'}</span>
            </div>
          </label>
        ` : ''}
        <label class="field-span-2">
          <span>message</span>
          <input data-defaults-field="message" value="${escapeHtml(draft.message)}" />
        </label>
        ${config.supportsLlm && draft.llmEnabled ? `
          <label class="field-span-2">
            <span>system</span>
            <textarea rows="6" data-defaults-field="system">${escapeHtml(draft.system)}</textarea>
          </label>
          <label class="field-span-2">
            <span>model</span>
            <input data-defaults-field="model" value="${escapeHtml(draft.model)}" />
          </label>
        ` : ''}
      </div>
      <div class="modal-footer">
        <button type="button" class="primary" data-action="save-defaults" ${ctx._defaultsModalSaving ? 'disabled' : ''}>${ctx._defaultsModalSaving ? 'Сохранение...' : 'Сохранить'}</button>
      </div>
    </section>
  `;
};

export const renderItemActionsModal = (ctx) => {
  if (!ctx._itemActionsModalOpen) {
    return '';
  }
  const actionLabel = ctx._itemActionsStatus ? 'Скрыть' : 'Опубликовать';
  const statusLabel = ctx._itemActionsStatus ? 'Сейчас: опубликован' : 'Сейчас: скрыт';
  const targetTitle = ctx._itemActionsTitle || 'Сценарий';
  return `
    <div class="modal-backdrop" data-action="close-item-actions"></div>
    <section class="modal modal-compact modal-item-actions" role="dialog" aria-modal="true" aria-label="Действия сценария">
      <div class="modal-header">
        <h3>${escapeHtml(targetTitle)}</h3>
        <button type="button" class="ghost item-actions-close" aria-label="Закрыть" title="Закрыть" data-action="close-item-actions" ${ctx._itemActionsSaving ? 'disabled' : ''}>×</button>
      </div>
      <div class="item-actions-body">
        <p class="item-actions-status">${statusLabel}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="secondary" data-action="apply-item-status" ${ctx._itemActionsSaving ? 'disabled' : ''}>
          ${ctx._itemActionsSaving ? 'Сохранение...' : actionLabel}
        </button>
      </div>
    </section>
  `;
};
