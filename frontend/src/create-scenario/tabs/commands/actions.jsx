import { TABS } from '../../constants.jsx';

export const openCreateModal = (ctx) => {
  ctx._addModalBackdrop();
  ctx._modalOpen = true;
  ctx._modalMode = 'create';
  ctx._editingId = '';
  ctx._draft = ctx._newDraft();
  ctx._openResponseItemIds = new Set();
  ctx._openDirectControlItemIds = new Set();
  ctx._openNextActionItemIds = new Set();
  ctx._error = '';
  ctx._render();
};

export const openEditModal = (ctx, commandId) => {
  ctx._addModalBackdrop();
  const item = ctx._commands.find((command) => String(command._id ?? '') === String(commandId ?? ''));
  if (!item) {
    ctx._error = 'Команда не найдена.';
    ctx._render();
    return;
  }
  ctx._modalOpen = true;
  ctx._modalMode = 'edit';
  ctx._editingId = String(item._id ?? '');
  ctx._editingStatus = Boolean(item.status);
  ctx._draft = ctx._newDraft(item);
  ctx._openResponseItemIds = new Set();
  ctx._openDirectControlItemIds = new Set();
  ctx._openNextActionItemIds = new Set();
  ctx._error = '';
  ctx._render();
  ctx._hydrateDirectControlTitles();
  ctx._hydrateNextActionTitles();
};

export const closeModal = (ctx) => {
  if (ctx._modalSaving) {
    return;
  }
  ctx._removeModalBackdrop();
  ctx._modalOpen = false;
  ctx._modalMode = 'create';
  ctx._editingId = '';
  ctx._editingStatus = false;
  ctx._openResponseItemIds = new Set();
  ctx._openDirectControlItemIds = new Set();
  ctx._openNextActionItemIds = new Set();
  if (ctx._modalMode !== 'create' || ctx._editingId || ctx._draft?.title || ctx._draft?.message) {
    ctx._draft = ctx._newDraft();
  }
  ctx._render();
};

export const saveModal = async (ctx) => {
  const activeElement = ctx.shadowRoot?.activeElement;
  if (activeElement instanceof HTMLElement && typeof activeElement.blur === 'function') {
    activeElement.blur();
  }
  const base = ctx._apiUrl('');
  if (!base) {
    ctx._error = 'Заполните Base URL во вкладке Settings.';
    ctx._render();
    return;
  }

  let payload;
  try {
    payload = ctx._buildPayload();
  } catch (error) {
    ctx._error = error?.message || 'Ошибка валидации.';
    ctx._render();
    return;
  }

  const isEdit = ctx._modalMode === 'edit' && ctx._editingId;
  if (!isEdit && !ctx._isCurrentUserAdmin()) {
    payload.account = ctx._getCurrentUserId();
  }
  const collection = ctx._tab === TABS.secondary ? 'sub-commands' : 'commands';
  const url = isEdit
    ? ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._editingId)}`)
    : ctx._apiUrl(`/api/cms/${collection}`);
  const method = isEdit ? 'PUT' : 'POST';

  ctx._modalSaving = true;
  ctx._error = '';
  ctx._render();
  try {
    const response = await fetch(url, {
      method,
      headers: ctx._apiHeaders(true),
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Ошибка сохранения: HTTP ${response.status}`);
    }

    ctx._status = isEdit ? 'Сценарий обновлен.' : 'Сценарий создан.';
    ctx._removeModalBackdrop();
    ctx._modalOpen = false;
    ctx._modalMode = 'create';
    ctx._editingId = '';
    ctx._editingStatus = false;
    ctx._draft = ctx._newDraft();
    await ctx._loadPage(ctx._pageByTab[ctx._tab] || 1);
  } catch (error) {
    ctx._error = error?.message || 'Не удалось сохранить сценарий.';
    ctx._render();
  } finally {
    ctx._modalSaving = false;
    ctx._render();
  }
};

export const deleteModal = async (ctx) => {
  if (!ctx._editingId) {
    return;
  }
  if (!confirm('Вы уверены, что хотите удалить этот сценарий?')) {
    return;
  }
  const collection = ctx._tab === TABS.secondary ? 'sub-commands' : 'commands';
  ctx._modalSaving = true;
  ctx._error = '';
  ctx._render();
  try {
    await ctx._deleteItem(collection, ctx._editingId);
    ctx._commands = ctx._commands.filter((item) => String(item._id ?? '') !== String(ctx._editingId));
    ctx._status = 'Сценарий удален.';
    ctx._removeModalBackdrop();
    ctx._modalOpen = false;
    ctx._modalMode = 'create';
    ctx._editingId = '';
    ctx._editingStatus = false;
    ctx._draft = ctx._newDraft();
  } catch (error) {
    ctx._error = error?.message || 'Не удалось удалить сценарий.';
  } finally {
    ctx._modalSaving = false;
    ctx._render();
  }
};
