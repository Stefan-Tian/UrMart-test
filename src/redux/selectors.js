const getSearchResult = (store) => store.searchResult;

export const getSearchResultByPage = (store, page) => {
  const result = getSearchResult(store);
  const pageIndex = page - 1;
  return result.items[pageIndex] ? result.items[pageIndex] : [];
};
