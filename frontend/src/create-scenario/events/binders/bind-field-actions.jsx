export const bindFieldActions = (ctx, root, on) => {
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
};
