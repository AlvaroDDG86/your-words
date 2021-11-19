import {
  SET_WORDS,
  SET_WORD,
  SET_NEW_WORD,
  SET_FAVOURITE,
  SET_NOT_FOUND_WORD,
  SET_FAV_FILTER,
  SET_ID_WORD,
  SET_TRANSLATE,
} from "./mutations-types";
export default {
  [SET_WORDS]: (state, words) => {
    state.wordsList = words;
  },
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
  [SET_FAVOURITE]: (state, favourite) => {
    state.word = { ...state.word, favourite };
  },
  [SET_FAV_FILTER]: (state, fav) => {
    state.filterList.onlyFavs = fav;
  },
  [SET_ID_WORD]: (state, id) => {
    state.word = { ...state.word, id };
  },
  [SET_TRANSLATE]: (state, translation) => {
    state.word = {
      ...state.word,
      translation: state.word.translation
        ? `${state.word.translation}, ${translation}`
        : translation,
    };
  },
};
