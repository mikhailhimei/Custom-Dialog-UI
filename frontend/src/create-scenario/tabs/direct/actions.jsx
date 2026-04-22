import { COMMANDS_PAGE_SIZE, DIRECT_SUBTABS } from '../../constants.jsx';
import { createUuid, createDirectSubControlItem } from '../../utils.jsx';

export const setDirectSubtab = (ctx, subtab) => {
  ctx._directSubtab = subtab;
  ctx._directError = '';
  if (subtab === DIRECT_SUBTABS.basic && !ctx._directCommands.length && !ctx._directLoading) {
    ctx._loadDirectCommands();
  } else if (subtab === DIRECT_SUBTABS.templates && !ctx._templateCommands.length && !ctx._templateLoading) {
    ctx._loadTemplateCommands();
  }
  ctx._render();
};

export const loadDirectCommands = async (ctx) => {
  const url = ctx._apiUrl('/api/cms/sub-direct-controls?page=1&pageSize=' + COMMANDS_PAGE_SIZE);
  if (!url) {
    ctx._directError = 'Заполните Base URL во вкладке Settings.';
    ctx._render();
    return;
  }
  ctx._directLoading = true;
  ctx._directError = '';
  ctx._render();
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: ctx._apiHeaders(false),
    });
    if (!response.ok) {
      throw new Error(`Ошибка загрузки direct-команд: HTTP ${response.status}`);
    }
    const result = await response.json();
    const data = Array.isArray(result.data) ? result.data : [];
    ctx._directCommands = data;
    ctx._status = `Direct-команды загружены: ${data.length}.`;
  } catch (error) {
    ctx._directCommands = [];
    ctx._directError = error?.message || 'Не удалось загрузить direct-команды.';
  } finally {
    ctx._directLoading = false;
    ctx._render();
  }
};

export const loadTemplateCommands = async (ctx) => {
  const url = ctx._apiUrl('/api/cms/sub-direct-controls-sample?page=1&pageSize=' + COMMANDS_PAGE_SIZE);
  if (!url) {
    ctx._templateError = 'Заполните Base URL во вкладке Settings.';
    ctx._render();
    return;
  }
  ctx._templateLoading = true;
  ctx._templateError = '';
  ctx._render();
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: ctx._apiHeaders(false),
    });
    if (!response.ok) {
      throw new Error(`Ошибка загрузки шаблонов: HTTP ${response.status}`);
    }
    const result = await response.json();
    const data = Array.isArray(result.data) ? result.data : [];
    ctx._templateCommands = data;
    ctx._status = `Шаблоны загружены: ${data.length}.`;
  } catch (error) {
    ctx._templateCommands = [];
    ctx._templateError = error?.message || 'Не удалось загрузить шаблоны.';
  } finally {
    ctx._templateLoading = false;
    ctx._render();
  }
};

export const reloadDirectCommands = (ctx) => {
  if (ctx._directLoading) return;
  ctx._directCommands = [];
  ctx._loadDirectCommands();
};

export const reloadTemplateCommands = (ctx) => {
  if (ctx._templateLoading) return;
  ctx._templateCommands = [];
  ctx._loadTemplateCommands();
};

export const openCreateDirectModal = (ctx) => {
  ctx._addModalBackdrop();
  ctx._directModalOpen = true;
  ctx._directModalMode = 'create';
  ctx._directEditingId = '';
  ctx._directDraft = ctx._newDirectDraft();
  ctx._openDirectSubControlItemIds = new Set();
  ctx._directError = '';
  ctx._render();
};

export const openEditDirectModal = (ctx, commandId) => {
  ctx._addModalBackdrop();
  const item = ctx._directCommands.find((command) => String(command._id ?? '') === String(commandId ?? ''));
  if (!item) {
    ctx._directError = 'Direct-команда не найдена.';
    ctx._render();
    return;
  }
  ctx._directModalOpen = true;
  ctx._directModalMode = 'edit';
  ctx._directEditingId = String(item._id ?? '');
  ctx._directEditingStatus = Boolean(item.status);
  ctx._directDraft = ctx._newDirectDraft(item);
  ctx._openDirectSubControlItemIds = new Set();
  ctx._directError = '';
  ctx._render();
  ctx._hydrateSelectedSubDirectControlSample();
};

export const closeDirectModal = (ctx) => {
  if (ctx._directModalSaving) {
    return;
  }
  ctx._removeModalBackdrop();
  ctx._directModalOpen = false;
  ctx._directModalMode = 'create';
  ctx._directEditingId = '';
  ctx._directEditingStatus = false;
  ctx._openDirectSubControlItemIds = new Set();
  ctx._directDraft = ctx._newDirectDraft();
  ctx._searchResults = [];
  ctx._searchActiveItemId = null;
  ctx._searchActiveType = null;
  ctx._subDirectControlSampleOptions = [];
  ctx._render();
};

export const updateDirectDraft = (ctx, field, value) => {
  ctx._directDraft = {
    ...ctx._directDraft,
    [field]: value,
  };
};

export const hydrateSelectedSubDirectControlSample = async (ctx) => {
  const isCommandType = ctx._directDraft.typeData === 'command';
  const isManual = Boolean(ctx._directDraft.manual);
  const selectedUuid = String(ctx._directDraft.subDirectControl ?? '').trim();
  if (!isCommandType || isManual || !selectedUuid) {
    return;
  }
  const hasSelected = (Array.isArray(ctx._subDirectControlSampleOptions) ? ctx._subDirectControlSampleOptions : [])
    .some((item) => String(item?.uuid ?? '').trim() === selectedUuid);
  if (hasSelected) {
    return;
  }
  const results = await ctx._searchUuid(selectedUuid, ['sub-direct-controls-sample']);
  const selected = results.find((item) => String(item?.uuid ?? '').trim() === selectedUuid);
  if (!selected) {
    return;
  }
  const option = {
    ...selected,
    uuid: String(selected.uuid ?? '').trim(),
    title: String(selected.title ?? '').trim(),
  };
  ctx._subDirectControlSampleOptions = [option, ...(Array.isArray(ctx._subDirectControlSampleOptions) ? ctx._subDirectControlSampleOptions : [])];
  ctx._render();
};

export const refreshDirectUuid = (ctx) => {
  ctx._updateDirectDraft('uuid', createUuid());
  ctx._render();
};

export const refreshTemplateUuid = (ctx) => {
  ctx._updateTemplateDraft('uuid', createUuid());
  ctx._render();
};

export const addDirectSubControlItem = (ctx) => {
  const nextItems = Array.isArray(ctx._directDraft.subDirectControlItems) ? ctx._directDraft.subDirectControlItems : [];
  const newItem = createDirectSubControlItem();
  ctx._directDraft = {
    ...ctx._directDraft,
    subDirectControlItems: [...nextItems, newItem],
  };
  ctx._openDirectSubControlItemIds.add(newItem.id);
  ctx._render();
};

export const removeDirectSubControlItem = (ctx, itemId) => {
  const nextItems = (Array.isArray(ctx._directDraft.subDirectControlItems) ? ctx._directDraft.subDirectControlItems : [])
    .filter((item) => item.id !== itemId);
  ctx._directDraft = {
    ...ctx._directDraft,
    subDirectControlItems: nextItems,
  };
  ctx._openDirectSubControlItemIds = new Set(
    [...ctx._openDirectSubControlItemIds].filter((id) => nextItems.some((item) => item.id === id))
  );
  ctx._render();
};

export const toggleDirectSubControlItem = (ctx, itemId) => {
  if (ctx._openDirectSubControlItemIds.has(itemId)) {
    ctx._openDirectSubControlItemIds.delete(itemId);
  } else {
    ctx._openDirectSubControlItemIds.add(itemId);
  }
  ctx._render();
};

export const updateDirectSubControlItem = (ctx, itemId, field, value) => {
  const nextItems = (Array.isArray(ctx._directDraft.subDirectControlItems) ? ctx._directDraft.subDirectControlItems : [])
    .map((item) => (item.id === itemId ? { ...item, [field]: value } : item));
  ctx._directDraft = {
    ...ctx._directDraft,
    subDirectControlItems: nextItems,
  };
};

export const loadSubDirectControlSamples = async (ctx) => {
  if (ctx._searchLoading) {
    return;
  }
  ctx._searchLoading = true;
  ctx._searchActiveType = 'subDirectControlSample';
  ctx._searchActiveItemId = null;
  ctx._render();
  try {
    const results = await ctx._searchUuid('', ['sub-direct-controls-sample']);
    ctx._subDirectControlSampleOptions = results;
  } catch {
    ctx._subDirectControlSampleOptions = [];
  } finally {
    ctx._searchLoading = false;
    ctx._render();
  }
};

export const toggleDirectEditModalStatus = async (ctx) => {
  if (ctx._directModalSaving || !ctx._directEditingId) {
    return;
  }
  ctx._directModalSaving = true;
  ctx._directError = '';
  ctx._render();
  try {
    const nextStatus = !Boolean(ctx._directEditingStatus);
    await ctx._updateDirectStatusById(ctx._directEditingId, nextStatus);
    ctx._directEditingStatus = nextStatus;
    ctx._status = nextStatus ? 'Direct-команда опубликована.' : 'Direct-команда скрыта.';
  } catch (error) {
    ctx._directError = error?.message || 'Не удалось изменить статус direct-команды.';
  } finally {
    ctx._directModalSaving = false;
    ctx._render();
  }
};

export const saveDirectModal = async (ctx) => {
  const base = ctx._apiUrl('');
  if (!base) {
    ctx._directError = 'Заполните Base URL во вкладке Settings.';
    ctx._render();
    return;
  }

  let payload;
  try {
    payload = ctx._buildDirectPayload();
  } catch (error) {
    ctx._directError = error?.message || 'Ошибка валидации direct-команды.';
    ctx._render();
    return;
  }

  ctx._directModalSaving = true;
  ctx._directError = '';
  ctx._render();
  try {
    const isEdit = ctx._directModalMode === 'edit' && ctx._directEditingId;
    const collection = 'sub-direct-controls';
    const url = isEdit
      ? ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._directEditingId)}`)
      : ctx._apiUrl(`/api/cms/${collection}`);
    const method = isEdit ? 'PUT' : 'POST';
    const response = await fetch(url, {
      method,
      headers: ctx._apiHeaders(true),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Ошибка сохранения direct-команды: HTTP ${response.status}`);
    }

    const result = await response.json().catch(() => null);
    const savedItem = result?.data && typeof result.data === 'object' ? result.data : result && typeof result === 'object' ? result : null;
    if (isEdit) {
      ctx._directCommands = ctx._directCommands.map((item) => (
        String(item._id ?? '') === String(ctx._directEditingId)
          ? { ...item, ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: ctx._directEditingId }
          : item
      ));
    } else {
      const tempId = String(savedItem?._id ?? savedItem?.id ?? payload.uuid ?? payload.uuidDirect ?? Date.now());
      ctx._directCommands = [
        { ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: tempId },
        ...ctx._directCommands,
      ];
    }
    await ctx._loadDirectCommands();
    ctx._status = isEdit ? 'Direct-команда обновлена.' : 'Direct-команда создана.';
    ctx._removeModalBackdrop();
    ctx._directModalOpen = false;
    ctx._directModalMode = 'create';
    ctx._directEditingId = '';
    ctx._directEditingStatus = false;
    ctx._openDirectSubControlItemIds = new Set();
    ctx._directDraft = ctx._newDirectDraft();
  } catch (error) {
    ctx._directError = error?.message || 'Не удалось сохранить direct-команду.';
  } finally {
    ctx._directModalSaving = false;
    ctx._render();
  }
};

export const deleteDirectModal = async (ctx) => {
  if (!ctx._directEditingId) {
    return;
  }
  if (!confirm('Вы уверены, что хотите удалить эту direct-команду?')) {
    return;
  }
  ctx._directModalSaving = true;
  ctx._directError = '';
  ctx._render();
  try {
    await ctx._deleteItem('sub-direct-controls', ctx._directEditingId);
    ctx._directCommands = ctx._directCommands.filter((item) => String(item._id ?? '') !== String(ctx._directEditingId));
    ctx._status = 'Direct-команда удалена.';
    ctx._removeModalBackdrop();
    ctx._directModalOpen = false;
    ctx._directModalMode = 'create';
    ctx._directEditingId = '';
    ctx._directEditingStatus = false;
    ctx._openDirectSubControlItemIds = new Set();
    ctx._directDraft = ctx._newDirectDraft();
  } catch (error) {
    ctx._directError = error?.message || 'Не удалось удалить direct-команду.';
  } finally {
    ctx._directModalSaving = false;
    ctx._render();
  }
};

export const openCreateTemplateModal = (ctx) => {
  ctx._addModalBackdrop();
  ctx._templateModalOpen = true;
  ctx._templateModalMode = 'create';
  ctx._templateEditingId = '';
  ctx._templateDraft = ctx._newTemplateDraft();
  ctx._openTemplateSubControlItemIds = new Set();
  ctx._templateError = '';
  ctx._render();
};

export const openEditTemplateModal = (ctx, templateId) => {
  ctx._addModalBackdrop();
  const item = ctx._templateCommands.find((command) => String(command._id ?? '') === String(templateId ?? ''));
  if (!item) {
    ctx._templateError = 'Шаблон не найден.';
    ctx._render();
    return;
  }
  ctx._templateModalOpen = true;
  ctx._templateModalMode = 'edit';
  ctx._templateEditingId = String(item._id ?? '');
  ctx._templateDraft = ctx._newTemplateDraft(item);
  ctx._openTemplateSubControlItemIds = new Set();
  ctx._templateError = '';
  ctx._render();
};

export const closeTemplateModal = (ctx) => {
  if (ctx._templateModalSaving) {
    return;
  }
  ctx._removeModalBackdrop();
  ctx._templateModalOpen = false;
  ctx._templateModalMode = 'create';
  ctx._templateEditingId = '';
  ctx._openTemplateSubControlItemIds = new Set();
  ctx._templateDraft = ctx._newTemplateDraft();
  ctx._render();
};

export const updateTemplateDraft = (ctx, field, value) => {
  ctx._templateDraft = {
    ...ctx._templateDraft,
    [field]: value,
  };
};

export const addTemplateSubControlItem = (ctx) => {
  const nextItems = Array.isArray(ctx._templateDraft.subDirectControlItems) ? ctx._templateDraft.subDirectControlItems : [];
  const newItem = createDirectSubControlItem();
  ctx._templateDraft = {
    ...ctx._templateDraft,
    subDirectControlItems: [...nextItems, newItem],
  };
  ctx._openTemplateSubControlItemIds.add(newItem.id);
  ctx._render();
};

export const removeTemplateSubControlItem = (ctx, itemId) => {
  const nextItems = (Array.isArray(ctx._templateDraft.subDirectControlItems) ? ctx._templateDraft.subDirectControlItems : [])
    .filter((item) => item.id !== itemId);
  ctx._templateDraft = {
    ...ctx._templateDraft,
    subDirectControlItems: nextItems,
  };
  ctx._openTemplateSubControlItemIds = new Set(
    [...ctx._openTemplateSubControlItemIds].filter((id) => nextItems.some((item) => item.id === id))
  );
  ctx._render();
};

export const toggleTemplateSubControlItem = (ctx, itemId) => {
  if (ctx._openTemplateSubControlItemIds.has(itemId)) {
    ctx._openTemplateSubControlItemIds.delete(itemId);
  } else {
    ctx._openTemplateSubControlItemIds.add(itemId);
  }
  ctx._render();
};

export const updateTemplateSubControlItem = (ctx, itemId, field, value) => {
  const nextItems = (Array.isArray(ctx._templateDraft.subDirectControlItems) ? ctx._templateDraft.subDirectControlItems : [])
    .map((item) => (item.id === itemId ? { ...item, [field]: value } : item));
  ctx._templateDraft = {
    ...ctx._templateDraft,
    subDirectControlItems: nextItems,
  };
};

export const saveTemplateModal = async (ctx) => {
  const base = ctx._apiUrl('');
  if (!base) {
    ctx._templateError = 'Заполните Base URL во вкладке Settings.';
    ctx._render();
    return;
  }

  let payload;
  try {
    payload = ctx._buildTemplatePayload();
  } catch (error) {
    ctx._templateError = error?.message || 'Ошибка валидации шаблона.';
    ctx._render();
    return;
  }

  ctx._templateModalSaving = true;
  ctx._templateError = '';
  ctx._render();
  try {
    const isEdit = ctx._templateModalMode === 'edit' && ctx._templateEditingId;
    const collection = 'sub-direct-controls-sample';
    const url = isEdit
      ? ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._templateEditingId)}`)
      : ctx._apiUrl(`/api/cms/${collection}`);
    const method = isEdit ? 'PUT' : 'POST';
    const response = await fetch(url, {
      method,
      headers: ctx._apiHeaders(true),
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Ошибка сохранения шаблона: HTTP ${response.status}`);
    }
    const result = await response.json().catch(() => null);
    const savedItem = result?.data && typeof result.data === 'object' ? result.data : result && typeof result === 'object' ? result : null;
    if (isEdit) {
      ctx._templateCommands = ctx._templateCommands.map((item) => (
        String(item._id ?? '') === String(ctx._templateEditingId)
          ? { ...item, ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: ctx._templateEditingId }
          : item
      ));
    } else {
      const tempId = String(savedItem?._id ?? savedItem?.id ?? payload.uuid ?? Date.now());
      ctx._templateCommands = [
        { ...(savedItem && typeof savedItem === 'object' ? savedItem : payload), _id: tempId },
        ...ctx._templateCommands,
      ];
    }
    await ctx._loadTemplateCommands();
    ctx._status = isEdit ? 'Шаблон обновлен.' : 'Шаблон создан.';
    ctx._removeModalBackdrop();
    ctx._templateModalOpen = false;
    ctx._templateModalMode = 'create';
    ctx._templateEditingId = '';
    ctx._openTemplateSubControlItemIds = new Set();
    ctx._templateDraft = ctx._newTemplateDraft();
  } catch (error) {
    ctx._templateError = error?.message || 'Не удалось сохранить шаблон.';
  } finally {
    ctx._templateModalSaving = false;
    ctx._render();
  }
};

export const deleteTemplateModal = async (ctx) => {
  if (!ctx._templateEditingId) {
    return;
  }
  if (!confirm('Вы уверены, что хотите удалить этот шаблон?')) {
    return;
  }
  ctx._templateModalSaving = true;
  ctx._templateError = '';
  ctx._render();
  try {
    await ctx._deleteItem('sub-direct-controls-sample', ctx._templateEditingId);
    ctx._templateCommands = ctx._templateCommands.filter((item) => String(item._id ?? '') !== String(ctx._templateEditingId));
    ctx._status = 'Шаблон удален.';
    ctx._removeModalBackdrop();
    ctx._templateModalOpen = false;
    ctx._templateModalMode = 'create';
    ctx._templateEditingId = '';
    ctx._openTemplateSubControlItemIds = new Set();
    ctx._templateDraft = ctx._newTemplateDraft();
  } catch (error) {
    ctx._templateError = error?.message || 'Не удалось удалить шаблон.';
  } finally {
    ctx._templateModalSaving = false;
    ctx._render();
  }
};
