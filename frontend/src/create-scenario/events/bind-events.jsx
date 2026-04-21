export const bindEvents = (ctx) => {
  const root = ctx.shadowRoot;
  if (!root) return;
  if (ctx._bindController?.abort) {
    ctx._bindController.abort();
  }
  if (ctx._legacyListeners.length) {
    ctx._legacyListeners.forEach(({ element, eventName, handler }) => {
      element.removeEventListener(eventName, handler);
    });
    ctx._legacyListeners = [];
  }
  const supportsAbortController = typeof AbortController !== 'undefined';
  ctx._bindController = supportsAbortController ? new AbortController() : null;
  const signal = ctx._bindController?.signal ?? null;
  const on = (element, eventName, handler) => {
    if (!element) return;
    try {
      if (signal) {
        element.addEventListener(eventName, handler, { signal });
      } else {
        element.addEventListener(eventName, handler);
        ctx._legacyListeners.push({ element, eventName, handler });
      }
    } catch {
      element.addEventListener(eventName, handler);
      ctx._legacyListeners.push({ element, eventName, handler });
    }
  };

  root.querySelectorAll('[data-tab]').forEach((element) => {
    on(element, 'click', () => ctx._setTab(element.dataset.tab));
  });

  on(root.querySelector('[data-action="reload"]'), 'click', () => ctx._loadPage(ctx._pageByTab[ctx._tab] || 1, { force: true }));
  on(root.querySelector('[data-action="create"]'), 'click', () => ctx._openCreateModal());
  on(root.querySelector('[data-action="prev"]'), 'click', () => ctx._loadPage((ctx._pageByTab[ctx._tab] || 1) - 1));
  on(root.querySelector('[data-action="next"]'), 'click', () => ctx._loadPage((ctx._pageByTab[ctx._tab] || 1) + 1));
  root.querySelectorAll('[data-action="goto-page"]').forEach((element) => {
    on(element, 'click', () => ctx._loadPage(Number(element.dataset.page) || 1));
  });
  on(root.querySelector('[data-action="reload-direct"]'), 'click', () => ctx._reloadDirectCommands());
  on(root.querySelector('[data-action="create-direct"]'), 'click', () => ctx._openCreateDirectModal());
  on(root.querySelector('[data-action="reload-template"]'), 'click', () => ctx._reloadTemplateCommands());
  on(root.querySelector('[data-action="create-template"]'), 'click', () => ctx._openCreateTemplateModal());
  on(root.querySelector('[data-action="reload-defaults"]'), 'click', () => ctx._reloadDefaultsCommands());
  root.querySelectorAll('[data-action="open-defaults-item"]').forEach((element) => {
    on(element, 'click', () => ctx._openDefaultsModal(element.dataset.defaultType));
  });
  root.querySelectorAll('[data-action="edit"]').forEach((element) => {
    on(element, 'click', () => ctx._openEditModal(element.dataset.commandId));
  });
  root.querySelectorAll('[data-action="edit-direct"]').forEach((element) => {
    on(element, 'click', () => ctx._openEditDirectModal(element.dataset.directId));
  });
  root.querySelectorAll('[data-action="edit-template"]').forEach((element) => {
    on(element, 'click', () => ctx._openEditTemplateModal(element.dataset.templateId));
  });
  root.querySelectorAll('[data-action="open-item-actions"]').forEach((element) => {
    on(element, 'click', (event) => {
      event.stopPropagation();
      ctx._openItemActionsModal({
        kind: element.dataset.itemKind,
        id: element.dataset.itemId,
        title: element.dataset.itemTitle,
        collection: element.dataset.itemCollection,
        status: String(element.dataset.itemStatus ?? '').toLowerCase() === 'true',
      });
    });
  });
  root.querySelectorAll('[data-direct-subtab]').forEach((element) => {
    on(element, 'click', () => ctx._setDirectSubtab(element.dataset.directSubtab));
  });

  root.querySelectorAll('[data-action="close"]').forEach((element) => {
    on(element, 'click', () => ctx._closeModal());
  });
  root.querySelectorAll('[data-action="close-direct"]').forEach((element) => {
    on(element, 'click', () => ctx._closeDirectModal());
  });
  root.querySelectorAll('[data-action="close-template"]').forEach((element) => {
    on(element, 'click', () => ctx._closeTemplateModal());
  });
  root.querySelectorAll('[data-action="close-defaults"]').forEach((element) => {
    on(element, 'click', () => ctx._closeDefaultsModal());
  });
  root.querySelectorAll('[data-action="close-item-actions"]').forEach((element) => {
    on(element, 'click', () => ctx._closeItemActionsModal());
  });
  on(root.querySelector('[data-action="save"]'), 'click', () => ctx._saveModal());
  on(root.querySelector('[data-action="save-direct"]'), 'click', () => ctx._saveDirectModal());
  on(root.querySelector('[data-action="save-template"]'), 'click', () => ctx._saveTemplateModal());
  on(root.querySelector('[data-action="save-defaults"]'), 'click', () => ctx._saveDefaultsModal());
  on(root.querySelector('[data-action="delete"]'), 'click', () => ctx._deleteModal());
  on(root.querySelector('[data-action="delete-direct"]'), 'click', () => ctx._deleteDirectModal());
  on(root.querySelector('[data-action="delete-template"]'), 'click', () => ctx._deleteTemplateModal());
  on(root.querySelector('[data-action="toggle-status"]'), 'click', () => ctx._toggleEditModalStatus());
  on(root.querySelector('[data-action="toggle-direct-status"]'), 'click', () => ctx._toggleDirectEditModalStatus());
  on(root.querySelector('[data-action="apply-item-status"]'), 'click', () => ctx._applyItemStatus());
  on(root.querySelector('[data-action="generate-uuid"]'), 'click', () => ctx._refreshUuid());
  on(root.querySelector('[data-action="generate-direct-uuid"]'), 'click', () => ctx._refreshDirectUuid());
  on(root.querySelector('[data-action="generate-template-uuid"]'), 'click', () => ctx._refreshTemplateUuid());
  on(root.querySelector('[data-action="add-voice-response-item"]'), 'click', () => ctx._addVoiceResponseItem());
  on(root.querySelector('[data-action="add-direct-control-item"]'), 'click', () => ctx._addDirectControlItem());
  on(root.querySelector('[data-action="add-next-action-item"]'), 'click', () => ctx._addNextActionItem());
  on(root.querySelector('[data-action="add-direct-sub-control-item"]'), 'click', () => ctx._addDirectSubControlItem());
  on(root.querySelector('[data-action="add-template-sub-control-item"]'), 'click', () => ctx._addTemplateSubControlItem());
  root.querySelectorAll('[data-action="remove-voice-response-item"]').forEach((element) => {
    on(element, 'click', () => ctx._removeVoiceResponseItem(element.dataset.responseItemId));
  });
  root.querySelectorAll('[data-action="remove-direct-control-item"]').forEach((element) => {
    on(element, 'click', () => ctx._removeDirectControlItem(element.dataset.directControlItemId));
  });
  root.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach((element) => {
    on(element, 'click', () => ctx._toggleDirectControlItem(element.dataset.directControlItemId));
  });
  root.querySelectorAll('[data-action="remove-next-action-item"]').forEach((element) => {
    on(element, 'click', () => ctx._removeNextActionItem(element.dataset.nextActionItemId));
  });
  root.querySelectorAll('[data-action="toggle-next-action-item"]').forEach((element) => {
    on(element, 'click', () => ctx._toggleNextActionItem(element.dataset.nextActionItemId));
  });
  root.querySelectorAll('[data-action="toggle-response-item"]').forEach((element) => {
    on(element, 'click', () => ctx._toggleResponseItem(element.dataset.responseItemId));
  });
  root.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach((element) => {
    on(element, 'click', () => ctx._removeDirectSubControlItem(element.dataset.directSubControlItemId));
  });
  root.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach((element) => {
    on(element, 'click', () => ctx._toggleDirectSubControlItem(element.dataset.directSubControlItemId));
  });
  root.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach((element) => {
    on(element, 'click', () => ctx._removeTemplateSubControlItem(element.dataset.templateSubControlItemId));
  });
  root.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach((element) => {
    on(element, 'click', () => ctx._toggleTemplateSubControlItem(element.dataset.templateSubControlItemId));
  });

  root.querySelectorAll('[data-action="select-search-result"]').forEach((element) => {
    on(element, 'click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const itemId = element.dataset.directControlItemId || element.dataset.nextActionItemId;
      const result = {
        uuid: element.dataset.resultUuid,
        title: element.dataset.resultTitle,
      };
      ctx._selectSearchResult(itemId, result);
    });
  });

  root.querySelectorAll('[data-field]').forEach((element) => {
    const field = element.dataset.field;
    const onInput = (event) => {
      const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
      ctx._updateDraft(field, value);
    };
    on(element, 'input', onInput);
    on(element, 'change', onInput);
  });
  root.querySelectorAll('[data-direct-field]').forEach((element) => {
    const field = element.dataset.directField;
    const onInput = (event) => {
      const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
      ctx._updateDirectDraft(field, value);
      if (field === 'typeData') {
        if (event.currentTarget.value !== 'command') {
          ctx._updateDirectDraft('manual', false);
          ctx._updateDirectDraft('voiceCommands', '');
        } else {
          ctx._searchResults = [];
          ctx._searchActiveType = null;
        }
      }
      if (field === 'subDirectControl' && value.length > 0) {
        ctx._performUuidSearch(value, 'subDirectControlSample');
      }
      if (element.type === 'checkbox' || element.tagName === 'SELECT') {
        ctx._render();
      }
    };
    on(element, 'input', onInput);
    on(element, 'change', onInput);
    if (field === 'subDirectControl') {
      on(element, 'focus', () => {
        if (!ctx._subDirectControlSampleOptions.length) {
          ctx._loadSubDirectControlSamples();
        }
      });
      on(element, 'click', () => {
        if (!ctx._subDirectControlSampleOptions.length) {
          ctx._loadSubDirectControlSamples();
        }
      });
    }
  });
  root.querySelectorAll('[data-template-field]').forEach((element) => {
    const field = element.dataset.templateField;
    const handler = (event) => ctx._updateTemplateDraft(field, event.currentTarget.value);
    on(element, 'input', handler);
    on(element, 'change', handler);
  });
  root.querySelectorAll('[data-defaults-field]').forEach((element) => {
    const field = element.dataset.defaultsField;
    const handler = (event) => {
      const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
      ctx._updateDefaultsDraft(field, value);
      const activeConfig = ctx._defaultConfig(ctx._defaultsActiveType);
      if (field === 'llmEnabled' && element.type === 'checkbox' && activeConfig.supportsLlm) {
        ctx._render();
      }
    };
    on(element, 'input', handler);
    if (element.type === 'checkbox' || element.tagName === 'SELECT') {
      on(element, 'change', handler);
    }
  });
  root.querySelectorAll('[data-response-item-id][data-response-item-field]').forEach((element) => {
    const itemId = element.dataset.responseItemId;
    const field = element.dataset.responseItemField;
    const onInput = (event) => {
      const value = element.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;
      ctx._updateVoiceResponseItem(itemId, field, value);
      if (element.type === 'checkbox') {
        ctx._render();
      }
    };
    on(element, 'input', onInput);
    if (element.type === 'checkbox') {
      on(element, 'change', onInput);
    }
  });
  root.querySelectorAll('[data-direct-control-item-id]').forEach((element) => {
    const itemId = element.dataset.directControlItemId;
    on(element, 'input', (event) => ctx._updateDirectControlItem(itemId, event.currentTarget.value));
    on(element, 'change', (event) => ctx._updateDirectControlItem(itemId, event.currentTarget.value));
  });
  root.querySelectorAll('[data-next-action-item-id][data-next-action-item-field]').forEach((element) => {
    const itemId = element.dataset.nextActionItemId;
    const field = element.dataset.nextActionItemField;
    const handler = (event) => ctx._updateNextActionItem(itemId, field, event.currentTarget.value);
    on(element, 'input', handler);
    on(element, 'change', handler);
  });
  root.querySelectorAll('[data-direct-sub-control-item-id][data-direct-sub-control-item-field]').forEach((element) => {
    const itemId = element.dataset.directSubControlItemId;
    const field = element.dataset.directSubControlItemField;
    const handler = (event) => ctx._updateDirectSubControlItem(itemId, field, event.currentTarget.value);
    on(element, 'input', handler);
    on(element, 'change', handler);
  });
  root.querySelectorAll('[data-template-sub-control-item-id][data-template-sub-control-item-field]').forEach((element) => {
    const itemId = element.dataset.templateSubControlItemId;
    const field = element.dataset.templateSubControlItemField;
    const handler = (event) => ctx._updateTemplateSubControlItem(itemId, field, event.currentTarget.value);
    on(element, 'input', handler);
    on(element, 'change', handler);
  });

  root.querySelectorAll('input, select, textarea').forEach((element) => {
    ['click', 'focusin'].forEach((eventName) => {
      on(element, eventName, (event) => ctx._swallowUiEvent(event));
    });
  });
};
