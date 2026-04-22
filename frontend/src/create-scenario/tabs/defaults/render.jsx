import { DEFAULT_COMMAND_CONFIGS } from '../../constants.jsx';
import { escapeHtml } from '../../utils.jsx';

export const renderDefaultsTab = (ctx) => {
  const listMarkup = DEFAULT_COMMAND_CONFIGS.map((config, index) => {
    const draft = ctx._defaultsByType[config.type] ?? ctx._newDefaultsDraft(config.type);
    const displayTitle = String(draft.title || config.title || config.type).trim();
    const metaParts = [
      `actionType: ${config.type}`,
      `endStatus: ${draft.endStatus ? 'on' : 'off'}`,
    ];
    if (config.supportsLlm) {
      metaParts.push(`LLM: ${draft.llmEnabled ? 'on' : 'off'}`);
    }

    return `
      <button type="button" class="command-item-main" data-action="open-defaults-item" data-default-type="${escapeHtml(config.type)}" ${ctx._defaultsLoading ? 'disabled' : ''}>
        <span class="command-item-title">${index + 1}. ${escapeHtml(displayTitle)}</span>
        <span class="command-item-meta">
          ${metaParts.map((part) => `<span>${escapeHtml(part)}</span>`).join('')}
        </span>
      </button>
    `;
  }).join('');

  return `
    <section class="hero-card">
      <h2>Р”РµС„РѕР»С‚РЅС‹Рµ РєРѕРјР°РЅРґС‹</h2>
      <p>РќР°СЃС‚СЂРѕР№РєР° РґРµС„РѕР»С‚РЅРѕР№ СЂРµР°РєС†РёРё, РµСЃР»Рё РєРѕРјР°РЅРґР° РЅРµ РЅР°Р№РґРµРЅР°.</p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload-defaults" ${ctx._defaultsLoading ? 'disabled' : ''}>${ctx._defaultsLoading ? 'РћР±РЅРѕРІР»РµРЅРёРµ...' : 'РћР±РЅРѕРІРёС‚СЊ'}</button>
      </div>
      ${ctx._defaultsError ? `<div class="status error">${escapeHtml(ctx._defaultsError)}</div>` : ''}
    </section>
    <section class="help-card command-list">
      ${listMarkup}
    </section>
  `;
};
