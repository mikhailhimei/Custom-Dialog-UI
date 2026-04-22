import { TABS } from '../constants.jsx';
import { renderCommandsTab } from './shared/render-commands-tab.jsx';
import { renderPrimaryCommandsPage } from './primary/render.jsx';
import { renderSecondaryCommandsPage } from './secondary/render.jsx';
import { renderDirectBasicSection, renderDirectCommandsTab, renderDirectTemplatesSection } from './direct/render.jsx';
import { renderDefaultsTab } from './defaults/render.jsx';
import { renderStub } from './stub/render.jsx';

export const renderActiveTabBody = (ctx) => {
  if (ctx._tab === TABS.primary) {
    return renderPrimaryCommandsPage(ctx);
  }
  if (ctx._tab === TABS.secondary) {
    return renderSecondaryCommandsPage(ctx);
  }
  if (ctx._tab === TABS.direct) {
    return renderDirectCommandsTab(ctx);
  }
  return renderDefaultsTab(ctx);
};

export {
  renderCommandsTab,
  renderDirectBasicSection,
  renderDirectCommandsTab,
  renderDirectTemplatesSection,
  renderDefaultsTab,
  renderPrimaryCommandsPage,
  renderSecondaryCommandsPage,
  renderStub,
};
