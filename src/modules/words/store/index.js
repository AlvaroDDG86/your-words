import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    wordsList: [],
    notFound: null,
    word: {
      list: null,
      examples: null,
      annotations: null,
    },
    filterList: {
      onlyFavs: false,
      word: "",
      order: "asc",
    },
  },
  getters,
  actions,
  mutations,
};
