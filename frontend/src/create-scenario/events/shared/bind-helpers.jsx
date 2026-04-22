export const prepareEventBinding = (ctx) => {
  const root = ctx.shadowRoot;
  if (!root) {
    return null;
  }

  if (ctx._bindController?.abort) {
    ctx._bindController.abort();
  }

  if (ctx._legacyListeners.length) {
    ctx._legacyListeners.forEach(({ element, eventName, handler }) => {
      element.removeEventListener(eventName, handler);
    });
    ctx._legacyListeners = [];
  }

  const supportsAbortController = typeof AbortController !== 'undefined';
  ctx._bindController = supportsAbortController ? new AbortController() : null;
  const signal = ctx._bindController?.signal ?? null;
  const on = (element, eventName, handler) => {
    if (!element) return;
    try {
      if (signal) {
        element.addEventListener(eventName, handler, { signal });
      } else {
        element.addEventListener(eventName, handler);
        ctx._legacyListeners.push({ element, eventName, handler });
      }
    } catch {
      element.addEventListener(eventName, handler);
      ctx._legacyListeners.push({ element, eventName, handler });
    }
  };

  return { root, on };
};
