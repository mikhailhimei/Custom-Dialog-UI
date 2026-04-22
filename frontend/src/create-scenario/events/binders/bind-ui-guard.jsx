export const bindUiGuard = (ctx, root, on) => {
  root.querySelectorAll('input, select, textarea').forEach((element) => {
    ['click', 'focusin'].forEach((eventName) => {
      on(element, eventName, (event) => ctx._swallowUiEvent(event));
    });
  });
};
