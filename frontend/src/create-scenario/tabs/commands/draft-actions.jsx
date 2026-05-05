import {
  createDirectControlItem,
  createNextActionItem,
  createVoiceResponseItem,
  createUuid,
} from '../../utils.jsx';

export const refreshUuid = (ctx) => {
  ctx._updateDraft('uuid', createUuid());
  ctx._render();
};

export const addVoiceResponseItem = (ctx) => {
  const nextItems = Array.isArray(ctx._draft.responseItems) ? ctx._draft.responseItems : [];
  const newItem = createVoiceResponseItem();
  ctx._draft = {
    ...ctx._draft,
    responseItems: [...nextItems, newItem],
  };
  ctx._openResponseItemIds.add(newItem.id);
  ctx._render();
};

export const removeVoiceResponseItem = (ctx, itemId) => {
  const nextItems = (Array.isArray(ctx._draft.responseItems) ? ctx._draft.responseItems : [])
    .filter((item) => item.id !== itemId);
  ctx._draft = {
    ...ctx._draft,
    responseItems: nextItems,
  };
  ctx._openResponseItemIds = new Set(
    [...ctx._openResponseItemIds].filter((id) => ctx._draft.responseItems.some((item) => item.id === id))
  );
  ctx._render();
};

export const updateVoiceResponseItem = (ctx, itemId, field, value) => {
  const nextItems = (Array.isArray(ctx._draft.responseItems) ? ctx._draft.responseItems : [])
    .map((item) => {
      if (item.id !== itemId) {
        return item;
      }
      return {
        ...item,
        [field]: value,
      };
    });
  ctx._draft = {
    ...ctx._draft,
    responseItems: nextItems,
  };
};

export const toggleResponseItem = (ctx, itemId) => {
  if (ctx._openResponseItemIds.has(itemId)) {
    ctx._openResponseItemIds.delete(itemId);
  } else {
    ctx._openResponseItemIds.add(itemId);
  }
  ctx._render();
};

export const addDirectControlItem = (ctx) => {
  const nextItems = Array.isArray(ctx._draft.directControlItems) ? ctx._draft.directControlItems : [];
  const newItem = createDirectControlItem();
  ctx._draft = {
    ...ctx._draft,
    directControlItems: [...nextItems, newItem],
  };
  ctx._openDirectControlItemIds.add(newItem.id);
  ctx._render();
};

export const removeDirectControlItem = (ctx, itemId) => {
  const nextItems = (Array.isArray(ctx._draft.directControlItems) ? ctx._draft.directControlItems : [])
    .filter((item) => item.id !== itemId);
  ctx._draft = {
    ...ctx._draft,
    directControlItems: nextItems,
  };
  ctx._openDirectControlItemIds = new Set(
    [...ctx._openDirectControlItemIds].filter((id) => nextItems.some((item) => item.id === id))
  );
  ctx._render();
};

export const updateDirectControlItem = (ctx, itemId, value, triggerSearch = true) => {
  const normalizedItemId = String(itemId ?? '').trim();
  const nextItems = (Array.isArray(ctx._draft.directControlItems) ? ctx._draft.directControlItems : [])
    .map((item) => {
      if (item.id !== normalizedItemId) {
        return item;
      }
      const nextUuid = String(value ?? '');
      const nextTrimmedUuid = nextUuid.trim();
      const currentTrimmedUuid = String(item.uuid ?? '').trim();
      return {
        ...item,
        uuid: nextUuid,
        displayValue: nextTrimmedUuid && nextTrimmedUuid === currentTrimmedUuid ? item.displayValue : '',
        mappingType: nextTrimmedUuid && nextTrimmedUuid === currentTrimmedUuid ? item.mappingType : '',
      };
    });
  ctx._draft = {
    ...ctx._draft,
    directControlItems: nextItems,
  };
  if (triggerSearch && value.length > 0) {
    ctx._debouncedPerformUuidSearch(value, 'directControl', normalizedItemId);
  }
};

export const toggleDirectControlItem = (ctx, itemId) => {
  if (ctx._openDirectControlItemIds.has(itemId)) {
    ctx._openDirectControlItemIds.delete(itemId);
  } else {
    ctx._openDirectControlItemIds.add(itemId);
  }
  ctx._render();
};

export const addNextActionItem = (ctx) => {
  const nextItems = Array.isArray(ctx._draft.nextActionItems) ? ctx._draft.nextActionItems : [];
  const newItem = createNextActionItem();
  ctx._draft = {
    ...ctx._draft,
    nextActionItems: [...nextItems, newItem],
  };
  ctx._openNextActionItemIds.add(newItem.id);
  ctx._render();
};

export const removeNextActionItem = (ctx, itemId) => {
  const nextItems = (Array.isArray(ctx._draft.nextActionItems) ? ctx._draft.nextActionItems : [])
    .filter((item) => item.id !== itemId);
  ctx._draft = {
    ...ctx._draft,
    nextActionItems: nextItems,
  };
  ctx._openNextActionItemIds = new Set(
    [...ctx._openNextActionItemIds].filter((id) => nextItems.some((item) => item.id === id))
  );
  ctx._render();
};

export const updateNextActionItem = (ctx, itemId, field, value, rerender = true, triggerSearch = true) => {
  const normalizedItemId = String(itemId ?? '').trim();
  const nextItems = (Array.isArray(ctx._draft.nextActionItems) ? ctx._draft.nextActionItems : [])
    .map((item) => {
      if (item.id !== normalizedItemId) {
        return item;
      }
      if (field === 'uuid') {
        const selectedMeta = ctx._lastSelectedNextActionUuid;
        if (
          selectedMeta
          && selectedMeta.itemId === normalizedItemId
          && Date.now() - Number(selectedMeta.at ?? 0) < 1000
          && String(value ?? '').trim() !== String(selectedMeta.uuid ?? '').trim()
        ) {
          return item;
        }
        const nextUuid = String(value ?? '');
        const nextTrimmedUuid = nextUuid.trim();
        const currentTrimmedUuid = String(item.uuid ?? '').trim();
        return {
          ...item,
          uuid: nextUuid,
          displayValue: nextTrimmedUuid && nextTrimmedUuid === currentTrimmedUuid ? item.displayValue : '',
          mappingType: nextTrimmedUuid && nextTrimmedUuid === currentTrimmedUuid ? item.mappingType : '',
          actionType: nextTrimmedUuid && nextTrimmedUuid === currentTrimmedUuid ? item.actionType : '',
        };
      }
      if (field === 'actionTypeComponent') {
        const nextComponent = String(value ?? '').trim();
        if (nextComponent === 'custom') {
          return { ...item, actionTypeComponent: nextComponent };
        }
        return {
          ...item,
          actionTypeComponent: nextComponent,
          actionType: '',
        };
      }
      return { ...item, [field]: value };
    });
  ctx._draft = {
    ...ctx._draft,
    nextActionItems: nextItems,
  };
  if (rerender || field === 'actionTypeComponent') {
    ctx._render();
  }
  if (triggerSearch && field === 'uuid' && value.length > 0) {
    ctx._debouncedPerformUuidSearch(value, 'nextAction', normalizedItemId);
  }
  if (field === 'uuid' && ctx._lastSelectedNextActionUuid?.itemId === normalizedItemId) {
    ctx._lastSelectedNextActionUuid = null;
  }
};

export const toggleNextActionItem = (ctx, itemId) => {
  if (ctx._openNextActionItemIds.has(itemId)) {
    ctx._openNextActionItemIds.delete(itemId);
  } else {
    ctx._openNextActionItemIds.add(itemId);
  }
  ctx._render();
};
