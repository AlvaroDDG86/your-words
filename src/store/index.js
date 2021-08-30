import Vue from "vue";
import Vuex from "vuex";

//modules
import auth from "@/modules/auth/store";
import landing from "@/modules/landing/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    landing,
  },
});
