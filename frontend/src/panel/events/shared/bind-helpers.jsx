export const createEventBinder = (root) => (element, eventName, handler) => {
  if (!element) return;
  element.addEventListener(eventName, handler);
};
