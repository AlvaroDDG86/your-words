import { SET_WORD, SET_FAV_FILTER } from "./mutations-types";

export default {
  setWord({ commit }, word) {
    commit(SET_WORD, word);
  },
  setFavFilter({ commit }, fav) {
    commit(SET_FAV_FILTER, fav);
  },
};
