export const bindModalActions = (ctx, root, on) => {
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
};
