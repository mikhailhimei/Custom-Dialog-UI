import { TABS } from '../../constants.jsx';
import { renderCommandsTab } from '../shared/render-commands-tab.jsx';

export const renderSecondaryCommandsPage = (ctx) => renderCommandsTab(ctx, TABS.secondary);
