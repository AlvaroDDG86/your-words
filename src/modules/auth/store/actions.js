import { SET_LOGGED_IN, SET_USER } from "./mutations-types";
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
  setNewUser({ state }) {
    AuthService.setNewUser(state.user.data);
  },
  updateUser({ state }) {
    AuthService.updateUser(state.user.data);
  },
};
