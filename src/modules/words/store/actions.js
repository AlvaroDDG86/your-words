import {
  SET_WORDS,
  SET_WORD,
  SET_FAVOURITE,
  SET_NEW_WORD,
  SET_NOT_FOUND_WORD,
  SET_FAV_FILTER,
} from "./mutations-types";
import WordsServices from "../services";

export default {
  getWords({ commit }) {
    WordsServices.getWords().then((doc) => {
      if (doc.exists) {
        commit(SET_WORDS, doc.data().wordList);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  },
  getWord({ commit }, word) {
    WordsServices.getWord(word).then((res) => {
      if (!res.error) {
        commit(SET_NEW_WORD, res);
      } else {
        commit(SET_NOT_FOUND_WORD, res);
      }
    });
  },
  saveWord({ commit, state }) {
    WordsServices.saveWord(state.word).then((res) => {
      if (!res.error) {
        commit();
      } else {
        commit(SET_NOT_FOUND_WORD, res);
      }
    });
  },
  setFavourite({ commit }, value) {
    commit(SET_FAVOURITE, value);
  },
  setWord({ commit }, word) {
    commit(SET_WORD, word);
    commit(SET_NOT_FOUND_WORD, null);
  },
  setFavFilter({ commit }, fav) {
    commit(SET_FAV_FILTER, fav);
  },
};
