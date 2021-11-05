import { SET_LOGGED_IN, SET_USER } from "./mutations-types";

export default {
  [SET_LOGGED_IN]: (state, value) => {
    state.user.loggedIn = value;
  },
  [SET_USER]: (state, data) => {
    state.user.data = data;
  },
};
