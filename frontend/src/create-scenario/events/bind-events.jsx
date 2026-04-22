import { bindFieldActions } from './binders/bind-field-actions.jsx';
import { bindListItemActions } from './binders/bind-list-item-actions.jsx';
import { bindModalActions } from './binders/bind-modal-actions.jsx';
import { bindSearchActions } from './binders/bind-search-actions.jsx';
import { bindTabActions } from './binders/bind-tab-actions.jsx';
import { bindUiGuard } from './binders/bind-ui-guard.jsx';
import { prepareEventBinding } from './shared/bind-helpers.jsx';

export const bindEvents = (ctx) => {
  const binding = prepareEventBinding(ctx);
  if (!binding) return;

  const { root, on } = binding;
  bindTabActions(ctx, root, on);
  bindModalActions(ctx, root, on);
  bindListItemActions(ctx, root, on);
  bindSearchActions(ctx, root, on);
  bindFieldActions(ctx, root, on);
  bindUiGuard(ctx, root, on);
};
