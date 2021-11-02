import {
  SET_WORD,
  SET_NEW_WORD,
  SET_NOT_FOUND_WORD,
  SET_FAV_FILTER,
} from "./mutations-types";
export default {
  [SET_WORD]: (state, id) => {
    const word = state.wordsList.find((word) => word.id === id);
    state.word = { ...word };
  },
  [SET_NEW_WORD]: (state, wordList) => {
    const newWord = {
      list: wordList,
      examples: [],
      annotations: "",
      favourite: false,
    };
    state.word = { ...newWord };
  },
  [SET_NOT_FOUND_WORD]: (state, notFound) => {
    state.notFound = notFound;
  },
  [SET_FAV_FILTER]: (state, fav) => {
    state.filterList.onlyFavs = fav;
  },
};
