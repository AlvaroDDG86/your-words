import { SET_LOGGED_IN, SET_USER, SET_USER_CONF } from "./mutations-types";

export default {
  [SET_LOGGED_IN]: (state, value) => {
    state.user.loggedIn = value;
  },
  [SET_USER]: (state, data) => {
    state.user.data = data;
  },
  [SET_USER_CONF]: (state, data) => {
    state.user.conf = { ...data };
  },
};
