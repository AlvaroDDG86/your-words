import { OrderList } from "@/utils/orders";

export default {
  wordsList: (state) => {
    let listFiltered = state.wordsList.filter((item) => {
      return (
        item.list[0].word.includes(state.filterList.word) &&
        (!state.filterList.onlyFavs ||
          (state.filterList.onlyFavs && item.favourite))
      );
    });
    if (state.filterList.letters.length) {
      listFiltered = listFiltered.filter((item) => {
        const firstLetter = item.list[0].word[0];
        return state.filterList.letters.indexOf(firstLetter) > -1;
      });
    }
    const startFrom =
      state.filterList.paginator.currentPage === 1
        ? state.filterList.paginator.currentPage
        : state.filterList.paginator.currentPage *
            state.filterList.paginator.length -
          state.filterList.paginator.length;
    const returnList = OrderList(listFiltered, state.filterList.order);
    state.filterList.paginator.total = returnList.length;
    return state.filterList.paginator.total > state.filterList.paginator.length
      ? returnList.splice(startFrom, state.filterList.paginator.length)
      : returnList;
  },
  wordFullList: (state) => state.wordsList,
  word: (state) => state.word,
  notFound: (state) => state.notFound,
  filterList: (state) => state.filterList,
  isFavourite: (state) => state.word.favourite,
};
