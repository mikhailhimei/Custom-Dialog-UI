import { TABS } from '../../constants.jsx';
import { buildCommandPayloadFromDraft, buildDirectPayloadFromDraft } from '../../utils.jsx';

export const openItemActionsModal = (ctx, { kind, id, title, collection, status }) => {
  if (!id) {
    return;
  }
  ctx._addModalBackdrop();
  ctx._itemActionsModalOpen = true;
  ctx._itemActionsSaving = false;
  ctx._itemActionsKind = String(kind ?? '');
  ctx._itemActionsId = String(id ?? '');
  ctx._itemActionsTitle = String(title ?? '').trim();
  ctx._itemActionsCollection = String(collection ?? '');
  ctx._itemActionsStatus = Boolean(status);
  ctx._render();
};

export const closeItemActionsModal = (ctx) => {
  if (ctx._itemActionsSaving) {
    return;
  }
  ctx._removeModalBackdrop();
  ctx._itemActionsModalOpen = false;
  ctx._itemActionsSaving = false;
  ctx._itemActionsKind = '';
  ctx._itemActionsId = '';
  ctx._itemActionsTitle = '';
  ctx._itemActionsCollection = '';
  ctx._itemActionsStatus = false;
  ctx._render();
};

export const updateCommandStatusById = async (ctx, commandId, collection, nextStatus) => {
  const item = ctx._commands.find((command) => String(command._id ?? '') === String(commandId ?? ''));
  if (!item) {
    throw new Error('Команда не найдена.');
  }
  const draft = ctx._newDraft(item);
  const payload = buildCommandPayloadFromDraft(draft);
  if (collection === 'sub-commands') {
    delete payload.componentDialog;
  } else {
    delete payload.subComponentDialog;
  }
  payload.status = Boolean(nextStatus);
  const url = ctx._apiUrl(`/api/cms/${encodeURIComponent(collection)}/${encodeURIComponent(commandId)}`);
  const response = await fetch(url, {
    method: 'PUT',
    headers: ctx._apiHeaders(true),
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Ошибка изменения статуса: HTTP ${response.status}`);
  }
  ctx._commands = ctx._commands.map((command) => (
    String(command._id ?? '') === String(commandId ?? '')
      ? { ...command, status: Boolean(nextStatus) }
      : command
  ));
  if (String(ctx._editingId ?? '') === String(commandId ?? '')) {
    ctx._editingStatus = Boolean(nextStatus);
  }
};

export const updateDirectStatusById = async (ctx, directId, nextStatus) => {
  const item = ctx._directCommands.find((command) => String(command._id ?? '') === String(directId ?? ''));
  if (!item) {
    throw new Error('Direct-команда не найдена.');
  }
  const draft = ctx._newDirectDraft(item);
  const payload = {
    ...buildDirectPayloadFromDraft(draft),
    status: Boolean(nextStatus),
  };
  const url = ctx._apiUrl(`/api/cms/sub-direct-controls/${encodeURIComponent(directId)}`);
  const response = await fetch(url, {
    method: 'PUT',
    headers: ctx._apiHeaders(true),
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Ошибка изменения статуса direct-команды: HTTP ${response.status}`);
  }
  ctx._directCommands = ctx._directCommands.map((command) => (
    String(command._id ?? '') === String(directId ?? '')
      ? { ...command, status: Boolean(nextStatus) }
      : command
  ));
  if (String(ctx._directEditingId ?? '') === String(directId ?? '')) {
    ctx._directEditingStatus = Boolean(nextStatus);
  }
};

export const applyItemStatus = async (ctx) => {
  if (ctx._itemActionsSaving || !ctx._itemActionsId) {
    return;
  }
  const nextStatus = !ctx._itemActionsStatus;
  ctx._itemActionsSaving = true;
  ctx._error = '';
  ctx._directError = '';
  ctx._render();
  try {
    if (ctx._itemActionsKind === 'command') {
      await ctx._updateCommandStatusById(ctx._itemActionsId, ctx._itemActionsCollection || 'commands', nextStatus);
    } else if (ctx._itemActionsKind === 'direct') {
      await ctx._updateDirectStatusById(ctx._itemActionsId, nextStatus);
    } else {
      throw new Error('Неизвестный тип сценария.');
    }
    ctx._itemActionsStatus = nextStatus;
    ctx._status = nextStatus ? 'Сценарий опубликован.' : 'Сценарий скрыт.';
    ctx._closeItemActionsModal();
  } catch (error) {
    if (ctx._itemActionsKind === 'direct') {
      ctx._directError = error?.message || 'Не удалось изменить статус direct-команды.';
    } else {
      ctx._error = error?.message || 'Не удалось изменить статус сценария.';
    }
    ctx._itemActionsSaving = false;
    ctx._render();
  }
};

export const toggleEditModalStatus = async (ctx) => {
  if (ctx._modalSaving || !ctx._editingId) {
    return;
  }
  ctx._modalSaving = true;
  ctx._error = '';
  ctx._render();
  try {
    const nextStatus = !Boolean(ctx._editingStatus);
    const collection = ctx._tab === TABS.secondary ? 'sub-commands' : 'commands';
    await ctx._updateCommandStatusById(ctx._editingId, collection, nextStatus);
    ctx._editingStatus = nextStatus;
    ctx._status = nextStatus ? 'Сценарий опубликован.' : 'Сценарий скрыт.';
  } catch (error) {
    ctx._error = error?.message || 'Не удалось изменить статус сценария.';
  } finally {
    ctx._modalSaving = false;
    ctx._render();
  }
};
