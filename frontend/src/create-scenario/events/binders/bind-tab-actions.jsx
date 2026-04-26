export const bindTabActions = (ctx, root, on) => {
  root.querySelectorAll('[data-tab]').forEach((element) => {
    on(element, 'click', () => {
      if (ctx._hasAnyModalOpen?.()) {
        return;
      }
      ctx._setTab(element.dataset.tab);
    });
  });

  on(root.querySelector('[data-action="reload"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._loadPage(ctx._pageByTab[ctx._tab] || 1, { force: true });
  });
  on(root.querySelector('[data-action="create"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._openCreateModal();
  });
  on(root.querySelector('[data-action="prev"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._loadPage((ctx._pageByTab[ctx._tab] || 1) - 1);
  });
  on(root.querySelector('[data-action="next"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._loadPage((ctx._pageByTab[ctx._tab] || 1) + 1);
  });
  root.querySelectorAll('[data-action="goto-page"]').forEach((element) => {
    on(element, 'click', () => {
      if (ctx._hasAnyModalOpen?.()) return;
      ctx._loadPage(Number(element.dataset.page) || 1);
    });
  });

  on(root.querySelector('[data-action="reload-direct"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._reloadDirectCommands();
  });
  on(root.querySelector('[data-action="create-direct"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._openCreateDirectModal();
  });
  on(root.querySelector('[data-action="reload-template"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._reloadTemplateCommands();
  });
  on(root.querySelector('[data-action="create-template"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._openCreateTemplateModal();
  });
  on(root.querySelector('[data-action="reload-defaults"]'), 'click', () => {
    if (ctx._hasAnyModalOpen?.()) return;
    ctx._reloadDefaultsCommands();
  });
  root.querySelectorAll('[data-action="open-defaults-item"]').forEach((element) => {
    on(element, 'click', () => {
      if (ctx._hasAnyModalOpen?.()) return;
      ctx._openDefaultsModal(element.dataset.defaultType);
    });
  });

  root.querySelectorAll('[data-action="edit"]').forEach((element) => {
    on(element, 'click', () => {
      if (ctx._hasAnyModalOpen?.()) return;
      ctx._openEditModal(element.dataset.commandId);
    });
  });
  root.querySelectorAll('[data-action="edit-direct"]').forEach((element) => {
    on(element, 'click', () => {
      if (ctx._hasAnyModalOpen?.()) return;
      ctx._openEditDirectModal(element.dataset.directId);
    });
  });
  root.querySelectorAll('[data-action="edit-template"]').forEach((element) => {
    on(element, 'click', () => {
      if (ctx._hasAnyModalOpen?.()) return;
      ctx._openEditTemplateModal(element.dataset.templateId);
    });
  });
  root.querySelectorAll('[data-direct-subtab]').forEach((element) => {
    on(element, 'click', () => {
      if (ctx._hasAnyModalOpen?.()) return;
      ctx._setDirectSubtab(element.dataset.directSubtab);
    });
  });
};
