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
  getUserConf({ commit }, uid) {
    AuthService.getUserConf(uid).then((doc) => {
      if (doc) {
        const data = doc.data();
        const userConf = {
          dark: data.dark,
          grid: data.grid,
        };
        commit(SET_USER_CONF, userConf);
      } else {
        commit(SET_USER_CONF, {
          dark: false,
          grid: false,
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
  updateUser({ state }) {
    AuthService.updateUser(state.user);
  },
};
