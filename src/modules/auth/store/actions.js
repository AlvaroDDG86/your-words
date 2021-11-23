import { SET_LOGGED_IN, SET_USER, SET_USER_CONF } from "./mutations-types";
import AuthService from "../services";
export default {
  fetchUser({ commit }, user) {
    commit(SET_LOGGED_IN, user !== null);
    if (user) {
      commit(SET_USER, user);
    } else {
      commit(SET_USER, null);
    }
  },
  getUserConf({ commit, rootState }, uid) {
    AuthService.getUserConf(uid).then((doc) => {
      if (doc) {
        const data = doc.data();
        rootState.words.filterList.paginator.length = data.pagination;
        const userConf = {
          dark: data.dark,
          grid: data.grid,
          lang: data.lang,
          audio: {
            times: data.audio.times,
            seconds: data.audio.seconds,
          },
          pagination: data.pagination,
        };
        commit(SET_USER_CONF, userConf);
      } else {
        commit(SET_USER_CONF, {
          dark: false,
          grid: false,
          lang: "EN",
          audio: {
            times: 2,
            seconds: 2,
          },
          pagination: 20,
        });
      }
    });
  },
  getUserConfig() {
    AuthService.getUserConfig((res) => {
      console.log(res);
    });
  },
  setNewUser({ state }) {
    AuthService.setNewUser(state.user.data);
  },
  async updateUser({ state, rootState }) {
    const res = await AuthService.updateUser(state.user);
    console.log(res);
    rootState.words.filterList.paginator.length = parseInt(
      state.user.conf.pagination
    );
    rootState.words.filterList.paginator.currentPage = 1;
  },
};
