const resolveResultTitle = (result) => String(result?.title ?? result?.name ?? '').trim();

const resolveResultMappingType = (result) => String(
  result?.mappingType
  ?? result?.mapping_type
  ?? result?.actionType
  ?? result?.action_type
  ?? result?.type
  ?? ''
).trim();

export const performUuidSearch = async (ctx, searchText, searchType, itemId = null) => {
  if (!searchText || searchText.length === 0) {
    ctx._searchResults = [];
    ctx._searchActiveItemId = null;
    ctx._searchActiveType = null;
    ctx._render();
    return;
  }

  ctx._searchActiveItemId = itemId;
  ctx._searchActiveType = searchType;
  ctx._searchLoading = true;

  try {
    let collections = [];
    if (searchType === 'directControl') {
      collections = ['sub-direct-controls'];
    } else if (searchType === 'nextAction') {
      collections = ['sub-commands', 'commands'];
    } else if (searchType === 'subDirectControlSample') {
      collections = ['sub-direct-controls-sample'];
    }

    const results = await ctx._searchUuid(searchText, collections);
    ctx._searchResults = results;
    if (searchType === 'directControl' && itemId) {
      const normalizedSearchText = String(searchText ?? '').trim();
      const normalizedSearchLower = normalizedSearchText.toLowerCase();
      const exactMatch = results.find(
        (entry) => String(entry?.uuid ?? '').trim().toLowerCase() === normalizedSearchLower
      ) || (results.length === 1 ? results[0] : null);
      if (exactMatch && (exactMatch?.title || exactMatch?.mappingType || exactMatch?.actionType || exactMatch?.type || exactMatch?.uuid)) {
        const nextItems = (Array.isArray(ctx._draft.directControlItems) ? ctx._draft.directControlItems : [])
          .map((item) => (
            item.id === itemId
              ? {
                ...item,
                displayValue: resolveResultTitle(exactMatch) || String(item.displayValue ?? ''),
                mappingType: resolveResultMappingType(exactMatch),
              }
              : item
          ));
        ctx._draft = {
          ...ctx._draft,
          directControlItems: nextItems,
        };
      }
    }
  } catch (error) {
    ctx._searchResults = [];
  } finally {
    ctx._searchLoading = false;
    ctx._render();
  }
};

export const debouncedPerformUuidSearch = (ctx, searchText, searchType, itemId = null) => {
  if (ctx._searchDebounceTimer) {
    clearTimeout(ctx._searchDebounceTimer);
  }
  ctx._searchDebounceTimer = setTimeout(() => {
    ctx._performUuidSearch(searchText, searchType, itemId);
  }, 300);
};

export const selectSearchResult = (ctx, itemId, result) => {
  const normalizedItemId = String(itemId ?? '').trim();
  const activeType = ctx._searchActiveType;
  if (activeType === 'directControl') {
    const nextItems = (Array.isArray(ctx._draft.directControlItems) ? ctx._draft.directControlItems : [])
      .map((item) => (
        item.id === normalizedItemId
          ? {
            ...item,
            uuid: String(result.uuid ?? ''),
            displayValue: resolveResultTitle(result),
            mappingType: resolveResultMappingType(result),
          }
          : item
      ));
    ctx._draft = {
      ...ctx._draft,
      directControlItems: nextItems,
    };
  } else if (activeType === 'nextAction') {
    const resolvedMappingType = resolveResultMappingType(result);
    ctx._updateNextActionItem(normalizedItemId, 'displayValue', resolveResultTitle(result));
    ctx._updateNextActionItem(normalizedItemId, 'mappingType', resolvedMappingType);
    ctx._updateNextActionItem(normalizedItemId, 'actionType', resolvedMappingType);
    const nextItems = (Array.isArray(ctx._draft.nextActionItems) ? ctx._draft.nextActionItems : [])
      .map((item) => (item.id === normalizedItemId ? { ...item, uuid: result.uuid } : item));
    ctx._draft = {
      ...ctx._draft,
      nextActionItems: nextItems,
    };
  }
  ctx._searchResults = [];
  ctx._searchActiveItemId = null;
  ctx._searchActiveType = null;
  ctx._render();
};

export const searchUuid = async (ctx, searchText, collections) => {
  const baseUrl = String(ctx._config.base_url ?? '').trim().replace(/\/$/, '');
  if (!baseUrl) {
    return [];
  }
  try {
    const collectionsParam = Array.isArray(collections) ? collections.join(',') : String(collections);
    const url = `${baseUrl}/api/cms/search?collections=${encodeURIComponent(collectionsParam)}&text=${encodeURIComponent(searchText)}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: ctx._apiHeaders(false),
    });
    if (!response.ok) {
      return [];
    }
    const result = await response.json();
    const data = Array.isArray(result.data) ? result.data : Array.isArray(result) ? result : [];
    return data;
  } catch {
    return [];
  }
};

export const resolveTitleByUuid = async (ctx, uuid, collections) => {
  const normalizedUuid = String(uuid ?? '').trim();
  if (!normalizedUuid) {
    return '';
  }
  const results = await ctx._searchUuid(normalizedUuid, collections);
  const exactMatch = results.find((entry) => String(entry?.uuid ?? '').trim() === normalizedUuid);
  return String(exactMatch?.title ?? results[0]?.title ?? '').trim();
};

export const hydrateDirectControlTitles = async (ctx) => {
  const items = Array.isArray(ctx._draft.directControlItems) ? ctx._draft.directControlItems : [];
  if (!items.length) {
    return;
  }
  const updatedItems = await Promise.all(
    items.map(async (item) => {
      const uuid = String(item.uuid ?? '').trim();
      const displayValue = String(item.displayValue ?? '').trim();
      if (!uuid || displayValue) {
        return item;
      }
      const title = await ctx._resolveTitleByUuid(uuid, ['sub-direct-controls']);
      return {
        ...item,
        displayValue: title,
      };
    })
  );
  ctx._draft = {
    ...ctx._draft,
    directControlItems: updatedItems,
  };
  ctx._render();
};

export const hydrateNextActionTitles = async (ctx) => {
  const items = Array.isArray(ctx._draft.nextActionItems) ? ctx._draft.nextActionItems : [];
  if (!items.length) {
    return;
  }
  const updatedItems = await Promise.all(
    items.map(async (item) => {
      const uuid = String(item.uuid ?? '').trim();
      const displayValue = String(item.displayValue ?? '').trim();
      if (!uuid || displayValue) {
        return item;
      }
      const title = await ctx._resolveTitleByUuid(uuid, ['sub-commands', 'commands']);
      return {
        ...item,
        displayValue: title,
      };
    })
  );
  ctx._draft = {
    ...ctx._draft,
    nextActionItems: updatedItems,
  };
  ctx._render();
};

export const deleteItem = async (ctx, collection, uuid) => {
  const baseUrl = String(ctx._config.base_url ?? '').trim().replace(/\/$/, '');
  if (!baseUrl) {
    throw new Error('Заполните Base URL во вкладке Settings.');
  }
  const url = `${baseUrl}/api/cms/${encodeURIComponent(collection)}/${encodeURIComponent(uuid)}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: ctx._apiHeaders(true),
  });
  if (!response.ok) {
    throw new Error(`Ошибка удаления: HTTP ${response.status}`);
  }
};
