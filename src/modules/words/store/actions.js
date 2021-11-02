import {
  SET_WORD,
  SET_NEW_WORD,
  SET_NOT_FOUND_WORD,
  SET_FAV_FILTER,
} from "./mutations-types";
import WordsServices from "../services";

export default {
  getWord({ commit }, word) {
    WordsServices.getWord(word).then((res) => {
      if (!res.error) {
        commit(SET_NEW_WORD, res);
      } else {
        commit(SET_NOT_FOUND_WORD, res);
      }
    });
  },
  setWord({ commit }, word) {
    commit(SET_WORD, word);
    commit(SET_NOT_FOUND_WORD, null);
  },
  setFavFilter({ commit }, fav) {
    commit(SET_FAV_FILTER, fav);
  },
};
