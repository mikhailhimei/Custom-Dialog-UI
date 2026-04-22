export const bindListItemActions = (ctx, root, on) => {
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
};
