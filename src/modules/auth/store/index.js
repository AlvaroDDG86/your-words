import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    user: {
      loggedIn: false,
      data: null,
      conf: {
        dark: false,
        grid: false,
        lang: "EN",
        audio: {
          times: 2,
          seconds: 2,
        },
      },
    },
  },
  getters,
  actions,
  mutations,
};
