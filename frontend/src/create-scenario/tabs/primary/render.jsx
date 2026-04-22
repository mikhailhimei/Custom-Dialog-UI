import { TABS } from '../../constants.jsx';
import { renderCommandsTab } from '../shared/render-commands-tab.jsx';

export const renderPrimaryCommandsPage = (ctx) => renderCommandsTab(ctx, TABS.primary);
