import { OrderList } from "@/utils/orders";

export default {
  wordsList: (state) => {
    const listFiltered = state.wordsList.filter((item) => {
      return (
        item.list[0].word.includes(state.filterList.word) &&
        (!state.filterList.onlyFavs ||
          (state.filterList.onlyFavs && item.favourite))
      );
    });

    return OrderList(listFiltered, state.filterList.order);
  },
  word: (state) => state.word,
  notFound: (state) => state.notFound,
  filterList: (state) => state.filterList,
  isFavourite: (state) => state.word.favourite,
};
