import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import words from "./dumbs/words.js";

export default {
  namespaced: true,
  state: {
    wordsList: words,
    word: {
      list: null,
      examples: null,
      annotations: null,
    },
    filterList: {
      onlyFavs: false,
      word: "",
      order: "last",
    },
  },
  getters,
  actions,
  mutations,
};
