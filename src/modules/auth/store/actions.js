import { SET_LOGGED_IN, SET_USER } from "./mutations-types";
import AuthServices from "../services";
export default {
  fetchUser({ commit }, user) {
    commit(SET_LOGGED_IN, user !== null);
    if (user) {
      AuthServices.setNewUser(user);
      commit(SET_USER, user);
    } else {
      commit(SET_USER, null);
    }
  },
};
