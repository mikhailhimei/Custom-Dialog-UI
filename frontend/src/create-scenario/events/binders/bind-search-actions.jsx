export const bindSearchActions = (ctx, root, on) => {
  root.querySelectorAll('[data-action="select-search-result"]').forEach((element) => {
    on(element, 'click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const itemId = element.dataset.directControlItemId || element.dataset.nextActionItemId;
      const result = {
        uuid: element.dataset.resultUuid,
        title: element.dataset.resultTitle,
        activeType: element.dataset.resultActiveType,
      };
      ctx._selectSearchResult(itemId, result);
    });
  });
};
