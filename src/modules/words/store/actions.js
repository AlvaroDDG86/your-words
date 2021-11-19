import {
  SET_WORDS,
  SET_WORD,
  SET_FAVOURITE,
  SET_NEW_WORD,
  SET_NOT_FOUND_WORD,
  SET_FAV_FILTER,
  SET_ID_WORD,
  SET_TRANSLATE,
} from "./mutations-types";
import WordsServices from "../services";
import firebase from "firebase/compat/app";

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
  getTranslate({ commit, state, rootState }) {
    const word = state.word.list[0].word;
    const lang = rootState.auth.user.conf.lang;
    WordsServices.getTranslate(word, lang).then((res) => {
      if (!res.error) {
        commit(SET_TRANSLATE, res.translations.map((tr) => tr.text).join(","));
      }
    });
  },
  saveWord({ commit, state }) {
    state.word.dateCreation = firebase.firestore.Timestamp.fromDate(new Date());
    state.word.dateUpdate = firebase.firestore.Timestamp.fromDate(new Date());
    return WordsServices.saveWord(state.word).then((res) => {
      commit(SET_ID_WORD, res.id);
    });
  },
  removeWord({ state }) {
    return WordsServices.removeWord(state.word);
  },
  updateWord({ state }) {
    state.word.dateUpdate = firebase.firestore.Timestamp.fromDate(new Date());
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
  setLetter({ state }, letter) {
    const index = state.filterList.letters.indexOf(letter);
    if (index === -1) {
      state.filterList.letters.push(letter);
    } else {
      state.filterList.letters.splice(index, 1);
    }
  },
};
