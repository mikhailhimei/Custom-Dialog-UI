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
    type: String(item.type ?? ''),
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
});

export const createNextActionItem = (item = {}) => ({
  id: createUuid(),
  typeComponent: String(item.typeComponent ?? item.type ?? 'children'),
  uuid: String(item.uuid ?? ''),
  displayValue: String(item.displayValue ?? ''),
});

export const createDirectSubControlItem = (item = {}) => ({
  id: createUuid(),
  subType: String(item.subType ?? ''),
  subVoiceCommands: String(item.subVoiceCommands ?? ''),
});
