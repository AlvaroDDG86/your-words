import { SET_LOGGED_IN, SET_USER } from "./mutations-types";

export default {
  fetchUser({ commit }, user) {
    commit(SET_LOGGED_IN, user !== null);
    if (user) {
      commit(SET_USER, {
        displayName: user.displayName,
        email: user.email,
      });
    } else {
      commit(SET_USER, null);
    }
  },
};
