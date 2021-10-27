import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import words from "./dumbs/words.js";

export default {
  namespaced: true,
  state: {
    wordsList: words,
    word: [],
  },
  getters,
  actions,
  mutations,
};
