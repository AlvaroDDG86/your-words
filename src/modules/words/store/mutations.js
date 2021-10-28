import { SET_WORD, SET_FAV_FILTER } from "./mutations-types";
export default {
  [SET_WORD]: (state, id) => {
    const word = state.wordsList.find((word) => word.id === id);
    state.word = { ...word };
  },
  [SET_FAV_FILTER]: (state, fav) => {
    state.filterList.onlyFavs = fav;
  },
};
