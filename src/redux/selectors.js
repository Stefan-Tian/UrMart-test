const getSearchResult = (store) => store.searchResult;

export const getSearchResultByPage = (store, page) => {
  const { items } = getSearchResult(store);
  const pageIndex = page - 1;
  return items[pageIndex] ? items[pageIndex] : [];
};
