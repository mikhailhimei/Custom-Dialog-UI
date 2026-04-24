import {
  DEFAULT_COMMAND_CONFIGS,
  DIRECT_TYPE_DATA_OPTIONS,
  TYPE_COMPONENT_OPTIONS,
} from './constants.jsx';

export const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

export const createUuid = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `uuid_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`;
};

export const createVoiceResponseItem = (item = {}) => {
  const llmEnabled = Boolean(item.llm)
    || Boolean(String(item.system ?? '').trim())
    || Boolean(String(item.model ?? '').trim());

  return {
    id: createUuid(),
    type: String(item.type ?? item.actionType ?? ''),
    voiceResponse: String(item.voiceResponse ?? ''),
    llmEnabled,
    system: String(item.system ?? ''),
    model: String(item.model ?? ''),
  };
};

export const createDirectControlItem = (item = {}) => ({
  id: createUuid(),
  uuid: String(item.uuid ?? ''),
  displayValue: String(item.displayValue ?? ''),
  mappingType: String(item.mappingType ?? ''),
});

export const createNextActionItem = (item = {}) => ({
  id: createUuid(),
  actionTypeComponent: String(
    item.actionTypeComponent
    ?? (String(item.actionType ?? item.mappingType ?? '').trim() ? 'custom' : 'children')
  ),
  actionType: String(item.actionType ?? item.mappingType ?? ''),
  mappingType: String(item.mappingType ?? item.actionType ?? ''),
  uuid: String(item.uuid ?? ''),
  displayValue: String(item.displayValue ?? ''),
});

export const createDirectSubControlItem = (item = {}) => ({
  id: createUuid(),
  subType: String(item.subType ?? item.subMappingType ?? ''),
  subVoiceCommands: String(item.subVoiceCommands ?? ''),
});

const objectEntries = (value) => (Array.isArray(value) ? value : [])
  .filter((entry) => entry && typeof entry === 'object');

export const getDefaultCommandConfig = (type) =>
  DEFAULT_COMMAND_CONFIGS.find((item) => item.type === type) ?? DEFAULT_COMMAND_CONFIGS[0];

export const createCommandDraft = (source = null) => {
  const item = source ?? {};
  const componentDialog = typeof item.componentDialog === 'object' && item.componentDialog
    ? item.componentDialog
    : typeof item.subComponentDialog === 'object' && item.subComponentDialog
      ? item.subComponentDialog
    : {};

  return {
    title: String(item.title ?? ''),
    uuid: String(item.uuid ?? item.uuidDialog ?? ''),
    type: String(componentDialog.actionType ?? ''),
    endStatus: Boolean(componentDialog.endStatus),
    forwardText: Boolean(componentDialog.forwardText),
    answerType: String(componentDialog.answerType ?? 'default'),
    voiceCommands: Array.isArray(componentDialog.voiceCommands)
      ? componentDialog.voiceCommands.join('; ')
      : String(componentDialog.voiceCommands ?? ''),
    responseItems: objectEntries(componentDialog.voiceResponseArray).map((entry) => createVoiceResponseItem(entry)),
    directControlItems: objectEntries(componentDialog.nextDirectControl).map((entry) => createDirectControlItem(entry)),
    nextActionItems: objectEntries(componentDialog.nextAction).map((entry) => createNextActionItem(entry)),
  };
};

export const createDirectCommandDraft = (source = null) => {
  const item = source ?? {};
  const directControl = typeof item.directControl === 'object' && item.directControl
    ? item.directControl
    : {};
  const manual = Boolean(directControl.manual);
  const rawSubDirectControl = directControl.subDirectControl;

  return {
    title: String(item.title ?? ''),
    uuid: String(item.uuid ?? item.uuidDirect ?? ''),
    type: String(directControl.mappingType ?? directControl.actionType ?? ''),
    typeData: DIRECT_TYPE_DATA_OPTIONS.includes(String(directControl.valueType ?? directControl.typeData ?? 'all'))
      ? String(directControl.valueType ?? directControl.typeData ?? 'all')
      : 'all',
    voiceCommands: Array.isArray(directControl.voiceCommands)
      ? directControl.voiceCommands.join('; ')
      : String(directControl.voiceCommands ?? ''),
    manual,
    subDirectControlItems: manual ? objectEntries(rawSubDirectControl).map((entry) => createDirectSubControlItem(entry)) : [],
    subDirectControl: manual
      ? ''
      : String(
        (typeof rawSubDirectControl === 'string' ? rawSubDirectControl : '')
        || directControl.subDirectControlArray
        || ''
      ),
  };
};

export const createTemplateCommandDraft = (source = null) => {
  const item = source ?? {};

  return {
    title: String(item.title ?? ''),
    uuid: String(item.uuid ?? ''),
    subDirectControlItems: objectEntries(item.subDirectControl).map((entry) => createDirectSubControlItem(entry)),
  };
};

export const createDefaultsDraft = (type, source = null) => {
  const item = source ?? {};
  const config = getDefaultCommandConfig(type);
  return {
    _id: String(item._id ?? ''),
    type: config.type,
    title: String(item.title ?? config.title),
    endStatus: Boolean(item.endStatus),
    llmEnabled: config.supportsLlm ? Boolean(item.llmEnabled ?? item.LLM ?? item.llm) : false,
    message: String(item.message ?? ''),
    system: config.supportsLlm ? String(item.system ?? '') : '',
    model: config.supportsLlm ? String(item.model ?? '') : '',
  };
};

export const createDefaultsState = () => DEFAULT_COMMAND_CONFIGS.reduce((acc, config) => {
  acc[config.type] = createDefaultsDraft(config.type);
  return acc;
}, {});

export const buildCommandPayloadFromDraft = (draft = {}) => {
  const title = String(draft.title ?? '').trim();
  const uuid = String(draft.uuid ?? '').trim();
  const type = String(draft.type ?? '').trim();
  const answerTypeRaw = String(draft.answerType ?? 'default').trim().toLowerCase();
  const answerType = answerTypeRaw === 'redis' ? 'redis' : 'default';

  if (!title) {
    throw new Error('Title - обязательное поле.');
  }
  if (!uuid) {
    throw new Error('uuid - обязательное поле.');
  }
  if (!type) {
    throw new Error('actionType - обязательное поле.');
  }

  const responseItems = Array.isArray(draft.responseItems) ? draft.responseItems : [];
  const voiceResponseArray = responseItems.map((item) => {
    const normalized = {
      actionType: String(item.type ?? item.actionType ?? '').trim(),
      voiceResponse: String(item.voiceResponse ?? '').trim(),
    };
    if (item.llmEnabled) {
      normalized.llm = true;
      normalized.system = String(item.system ?? '').trim();
      normalized.model = String(item.model ?? '').trim();
    }
    return normalized;
  });
  const nextDirectControl = (Array.isArray(draft.directControlItems) ? draft.directControlItems : [])
    .map((item) => ({
      uuid: String(item.uuid ?? '').trim(),
    }))
    .filter((item) => item.uuid);
  const nextAction = (Array.isArray(draft.nextActionItems) ? draft.nextActionItems : [])
    .map((item) => ({
      actionTypeComponent: TYPE_COMPONENT_OPTIONS.includes(String(item.actionTypeComponent ?? '').trim())
        ? String(item.actionTypeComponent ?? '').trim()
        : 'children',
      actionType: String(item.actionType ?? item.mappingType ?? '').trim(),
      uuid: String(item.uuid ?? '').trim(),
    }))
    .filter((item) => item.uuid)
    .map((item) => (
      item.actionTypeComponent === 'custom'
        ? item
        : { ...item, actionType: '' }
    ));

  const dialogPayload = {
    endStatus: Boolean(draft.endStatus),
    actionType: type,
    forwardText: Boolean(draft.forwardText),
    answerType,
    voiceCommands: String(draft.voiceCommands ?? '').split(';').map((s) => s.trim()).filter((s) => s),
    nextDirectControl,
    voiceResponseArray,
    nextAction,
  };

  return {
    title,
    uuid,
    componentDialog: dialogPayload,
    subComponentDialog: dialogPayload,
  };
};

export const buildDirectPayloadFromDraft = (draft = {}) => {
  const title = String(draft.title ?? '').trim();
  const uuid = String(draft.uuid ?? '').trim();
  const type = String(draft.type ?? draft.mappingType ?? '').trim();
  const typeData = DIRECT_TYPE_DATA_OPTIONS.includes(String(draft.typeData ?? 'all'))
    ? String(draft.typeData ?? 'all')
    : 'all';
  const manual = Boolean(draft.manual);

  if (!title) {
    throw new Error('Title - обязательное поле.');
  }
  if (!uuid) {
    throw new Error('uuid - обязательное поле.');
  }
  if (!type) {
    throw new Error('actionType - обязательное поле.');
  }

  const payload = {
    title,
    uuid,
    directControl: {
      mappingType: type,
      valueType: typeData,
    },
  };

  if (typeData === 'command') {
    const voiceCommandsRaw = String(draft.voiceCommands ?? '').trim();
    payload.directControl.voiceCommands = voiceCommandsRaw ? voiceCommandsRaw.split(';').map((s) => s.trim()).filter((s) => s) : null;
    payload.directControl.manual = manual;
    if (manual) {
      payload.directControl.subDirectControl = (Array.isArray(draft.subDirectControlItems)
        ? draft.subDirectControlItems
        : []
      )
        .map((item, index) => {
          const subType = String(item.subType ?? item.subMappingType ?? '').trim();
          const subVoiceCommandsRaw = String(item.subVoiceCommands ?? '').trim();
          return {
            id: Number(item.id) || index + 1,
            subMappingType: subType || null,
            title: null,
            subVoiceCommands: subVoiceCommandsRaw || null,
          };
        })
        .filter((item) => item.subMappingType || item.subVoiceCommands);
    } else {
      payload.directControl.subDirectControl = String(draft.subDirectControl ?? '').trim();
    }
  }

  return payload;
};

export const buildTemplatePayloadFromDraft = (draft = {}) => {
  const title = String(draft.title ?? '').trim();
  if (!title) {
    throw new Error('Title - обязательное поле.');
  }

  let uuid = String(draft.uuid ?? '').trim();
  if (!uuid) {
    uuid = createUuid();
  }

  if (!uuid) {
    throw new Error('uuid - обязательное поле.');
  }

  return {
    title,
    uuid,
    subDirectControl: (Array.isArray(draft.subDirectControlItems)
      ? draft.subDirectControlItems
      : []
    )
      .map((item, index) => {
        const subType = String(item.subType ?? item.subMappingType ?? '').trim();
        const subVoiceCommandsRaw = String(item.subVoiceCommands ?? '').trim();
        return {
          id: Number(item.id) || index + 1,
          subMappingType: subType || null,
          title: null,
          subVoiceCommands: subVoiceCommandsRaw || null,
        };
      })
      .filter((item) => item.subMappingType || item.subVoiceCommands),
  };
};

export const buildDefaultsPayloadFromDraft = (type, draft = {}) => {
  const config = getDefaultCommandConfig(type);
  const payload = {
    actionType: config.type,
    title: String(draft.title ?? config.title).trim() || config.title,
    endStatus: Boolean(draft.endStatus),
    message: String(draft.message ?? '').trim() || null,
  };
  if (config.supportsLlm) {
    payload.LLM = Boolean(draft.llmEnabled);
    payload.llm = payload.LLM; // backward compatibility
    payload.system = payload.LLM ? (String(draft.system ?? '').trim() || null) : null;
    payload.model = payload.LLM ? (String(draft.model ?? '').trim() || null) : null;
  }
  return payload;
};
