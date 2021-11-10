import {
  SET_WORDS,
  SET_WORD,
  SET_FAVOURITE,
  SET_NEW_WORD,
  SET_NOT_FOUND_WORD,
  SET_FAV_FILTER,
  SET_ID_WORD,
} from "./mutations-types";
import WordsServices from "../services";

export default {
  getWords({ commit }) {
    WordsServices.getWords().then((doc) => {
      if (doc.docs) {
        const list =
          doc.docs.map((item) => {
            const obj = item.data();
            obj.id = item.id;
            return obj;
          }) || [];
        commit(SET_WORDS, list);
      } else {
        commit(SET_WORDS, []);
      }
    });
  },
  clearList({ commit }) {
    commit(SET_WORDS, []);
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
    return WordsServices.saveWord(state.word).then((res) => {
      commit(SET_ID_WORD, res.id);
    });
  },
  removeWord({ state }) {
    return WordsServices.removeWord(state.word);
  },
  updateWord({ state }) {
    return WordsServices.updateWord(state.word);
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
