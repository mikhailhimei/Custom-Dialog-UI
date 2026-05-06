import { DEFAULT_COMMAND_CONFIGS } from '../../constants.jsx';

export const reloadDefaultsCommands = async (ctx) => {
  const url = ctx._apiUrl('/api/cms/settings-dialog');
  if (!url) {
    ctx._defaultsError = 'Заполните Base URL во вкладке Settings.';
    ctx._render();
    return;
  }
  ctx._defaultsLoading = true;
  ctx._defaultsError = '';
  ctx._render();
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: ctx._apiHeaders(false),
    });
    if (!response.ok) {
      throw new Error(`Ошибка загрузки дефолтных команд: HTTP ${response.status}`);
    }
    const result = await response.json();
    const items = Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
    const nextState = { ...ctx._defaultsByType };
    const usedTypes = new Set();
    const fallbackOrder = DEFAULT_COMMAND_CONFIGS.map((config) => config.type);

    const resolveType = (item, index) => {
      const directType = String(
        item?.actionType
        ?? item?.componentDialog?.actionType
        ?? ''
      ).trim();
      if (directType && nextState[directType] && !usedTypes.has(directType)) {
        return directType;
      }

      const byIndex = fallbackOrder[index];
      if (byIndex && nextState[byIndex] && !usedTypes.has(byIndex)) {
        return byIndex;
      }

      return '';
    };

    items.forEach((item, index) => {
      const type = resolveType(item, index);
      if (!type) {
        return;
      }
      usedTypes.add(type);
      nextState[type] = ctx._newDefaultsDraft(type, item);
    });
    ctx._defaultsByType = {
      ...ctx._newDefaultsState(),
      ...nextState,
    };
    ctx._status = 'Дефолтные команды загружены.';
  } catch (error) {
    ctx._defaultsError = error?.message || 'Не удалось загрузить дефолтные команды.';
  } finally {
    ctx._defaultsLoading = false;
    ctx._render();
  }
};

export const openDefaultsModal = (ctx, type) => {
  const config = ctx._defaultConfig(type);
  ctx._addModalBackdrop();
  ctx._defaultsActiveType = config.type;
  ctx._defaultsActiveId = String(ctx._defaultsByType[config.type]?._id ?? '');
  ctx._defaultsModalOpen = true;
  ctx._defaultsError = '';
  ctx._render();
};

export const closeDefaultsModal = (ctx) => {
  if (ctx._defaultsModalSaving) {
    return;
  }
  ctx._removeModalBackdrop();
  ctx._defaultsModalOpen = false;
  ctx._render();
};

export const updateDefaultsDraft = (ctx, field, value) => {
  const type = ctx._defaultsActiveType;
  const current = ctx._defaultsByType[type] ?? ctx._newDefaultsDraft(type);
  ctx._defaultsByType = {
    ...ctx._defaultsByType,
    [type]: {
      ...current,
      [field]: value,
    },
  };
};

export const saveDefaultsType = async (ctx, type, closeModal = false) => {
  const config = ctx._defaultConfig(type);
  ctx._defaultsActiveType = config.type;
  ctx._defaultsActiveId = String(ctx._defaultsByType[config.type]?._id ?? ctx._defaultsActiveId ?? '');

  const base = ctx._apiUrl('');
  if (!base) {
    ctx._defaultsError = 'Заполните Base URL во вкладке Settings.';
    ctx._render();
    return;
  }

  let payload;
  try {
    payload = ctx._buildDefaultsPayload();
  } catch (error) {
    ctx._defaultsError = error?.message || 'Ошибка валидации дефолтной команды.';
    ctx._render();
    return;
  }

  ctx._defaultsModalSaving = closeModal;
  ctx._defaultsLoading = !closeModal;
  ctx._defaultsError = '';
  ctx._render();
  try {
    const isEdit = Boolean(ctx._defaultsActiveId);
    const collection = 'settings-dialog';
    const url = isEdit
      ? ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._defaultsActiveId)}`)
      : ctx._apiUrl(`/api/cms/${collection}`);
    const method = isEdit ? 'PUT' : 'POST';
    const response = await fetch(url, {
      method,
      headers: ctx._apiHeaders(true),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Ошибка сохранения дефолтной команды: HTTP ${response.status}`);
    }

    const result = await response.json().catch(() => null);
    const savedPayload = result?.data && typeof result.data === 'object' ? result.data : result && typeof result === 'object' ? result : null;
    const nextType = ctx._defaultsActiveType;
    const current = ctx._defaultsByType[nextType] ?? ctx._newDefaultsDraft(nextType);
    const nextId = String(savedPayload?._id ?? current._id ?? ctx._defaultsActiveId ?? '');
    ctx._defaultsByType = {
      ...ctx._defaultsByType,
      [nextType]: {
        ...current,
        ...(savedPayload && typeof savedPayload === 'object' ? savedPayload : payload),
        _id: nextId,
      },
    };
    ctx._defaultsActiveId = nextId;
    await ctx._reloadDefaultsCommands();
    ctx._status = isEdit ? 'Дефолтная команда обновлена.' : 'Дефолтная команда создана.';
    if (closeModal) {
      ctx._removeModalBackdrop();
      ctx._defaultsModalOpen = false;
    }
  } catch (error) {
    ctx._defaultsError = error?.message || 'Не удалось сохранить дефолтную команду.';
  } finally {
    ctx._defaultsModalSaving = false;
    ctx._defaultsLoading = false;
    ctx._render();
  }
};

export const saveDefaultsModal = async (ctx) => {
  await ctx._saveDefaultsType(ctx._defaultsActiveType, true);
};
