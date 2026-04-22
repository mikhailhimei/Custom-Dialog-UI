import { DIRECT_SUBTABS } from '../../constants.jsx';
import { escapeHtml } from '../../utils.jsx';

export const renderDirectBasicSection = (ctx, listMarkup) => `
  <section class="hero-card">
    <h3>РћСЃРЅРѕРІРЅС‹Рµ</h3>
    <p>РЈРїСЂР°РІР»РµРЅРёРµ direct-РєРѕРјР°РЅРґР°РјРё.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-direct" ${ctx._directLoading ? 'disabled' : ''}>${ctx._directLoading ? 'РћР±РЅРѕРІР»РµРЅРёРµ...' : 'РћР±РЅРѕРІРёС‚СЊ'}</button>
      <button type="button" class="primary" data-action="create-direct">+ РЎРѕР·РґР°С‚СЊ</button>
    </div>
    ${ctx._directError ? `<div class="status error">${escapeHtml(ctx._directError)}</div>` : ''}
  </section>
  <section class="help-card command-list">
    ${listMarkup}
  </section>
`;

export const renderDirectTemplatesSection = (ctx, templateListMarkup) => `
  <section class="hero-card">
    <h3>РЁР°Р±Р»РѕРЅС‹</h3>
    <p>РЈРїСЂР°РІР»РµРЅРёРµ С€Р°Р±Р»РѕРЅР°РјРё subDirectControl.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-template" ${ctx._templateLoading ? 'disabled' : ''}>${ctx._templateLoading ? 'РћР±РЅРѕРІР»РµРЅРёРµ...' : 'РћР±РЅРѕРІРёС‚СЊ'}</button>
      <button type="button" class="primary" data-action="create-template">+ РЎРѕР·РґР°С‚СЊ</button>
    </div>
    ${ctx._templateError ? `<div class="status error">${escapeHtml(ctx._templateError)}</div>` : ''}
  </section>
  <section class="help-card command-list">
    ${templateListMarkup}
  </section>
`;

export const renderDirectCommandsTab = (ctx) => {
  const listMarkup = ctx._directLoading
    ? '<div class="empty">Р—Р°РіСЂСѓР·РєР° direct-РєРѕРјР°РЅРґ...</div>'
    : ctx._directCommands.length
      ? ctx._directCommands.map((item) => `
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit-direct" data-direct-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title || 'Р‘РµР· РЅР°Р·РІР°РЅРёСЏ')}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.directControl?.mappingType || item.directControl?.actionType || item.directControl?.type || 'actionType: -')}</span>
                <span>${escapeHtml(item.uuid || item.uuidDirect || 'uuid: -')}</span>
                <span>${escapeHtml(item.directControl?.valueType || item.directControl?.typeData || 'typeData: -')}</span>
                <span>${Boolean(item.status) ? 'РћРїСѓР±Р»РёРєРѕРІР°РЅ' : 'РЎРєСЂС‹С‚'}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="direct"
              data-item-id="${escapeHtml(item._id)}"
              data-item-title="${escapeHtml(item.title || 'Р‘РµР· РЅР°Р·РІР°РЅРёСЏ')}"
              data-item-status="${Boolean(item.status) ? 'true' : 'false'}"
              aria-label="Р”РµР№СЃС‚РІРёСЏ"
              title="Р”РµР№СЃС‚РІРёСЏ"
            >...</button>
          </div>
        `).join('')
      : '<div class="empty">Direct-РєРѕРјР°РЅРґ РїРѕРєР° РЅРµС‚.</div>';

  const templateListMarkup = ctx._templateLoading
    ? '<div class="empty">Р—Р°РіСЂСѓР·РєР° С€Р°Р±Р»РѕРЅРѕРІ...</div>'
    : ctx._templateCommands.length
      ? ctx._templateCommands.map((item) => `
          <button type="button" class="command-item-main" data-action="edit-template" data-template-id="${escapeHtml(item._id)}">
            <span class="command-item-title">${escapeHtml(item.title || 'Р‘РµР· РЅР°Р·РІР°РЅРёСЏ')}</span>
            <span class="command-item-meta">
              <span>subDirectControl: ${(Array.isArray(item.subDirectControl) ? item.subDirectControl.length : 0)}</span>
            </span>
          </button>
        `).join('')
      : '<div class="empty">РЁР°Р±Р»РѕРЅРѕРІ РїРѕРєР° РЅРµС‚.</div>';

  return `
    <section class="hero-card">
      <h2>РљРѕРјР°РЅРґС‹ РїСЂСЏРјРѕРіРѕ РІС‹РїРѕР»РЅРµРЅРёСЏ</h2>
      <div class="inner-subtabs">
        <button type="button" class="subtab-button ${ctx._directSubtab === DIRECT_SUBTABS.basic ? 'active' : ''}" data-direct-subtab="${DIRECT_SUBTABS.basic}">РћСЃРЅРѕРІРЅС‹Рµ</button>
        <button type="button" class="subtab-button ${ctx._directSubtab === DIRECT_SUBTABS.templates ? 'active' : ''}" data-direct-subtab="${DIRECT_SUBTABS.templates}">РЁР°Р±Р»РѕРЅС‹</button>
      </div>
    </section>
    ${ctx._directSubtab === DIRECT_SUBTABS.basic
      ? renderDirectBasicSection(ctx, listMarkup)
      : renderDirectTemplatesSection(ctx, templateListMarkup)}
  `;
};
