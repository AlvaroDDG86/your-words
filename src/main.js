import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";
import "./index.css";

// Tailwind
import "./assets/tailwind.css";

// Icons
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
Vue.component("v-icon", Icon);

// Vue-select
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

// Loader spinner
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(VueLoading, {
  color: "#1855E4",
  loader: "bars",
  backgroundColor: "#C8D7FA",
  height: 150,
  width: 150,
});

// importing the helper
import interceptorsSetup from "./helpers/interceptors";
interceptorsSetup();

// importing firebase config
import "@/helpers/firebase.js";

// vue-js-modal
import VModal from "vue-js-modal";
Vue.use(VModal);

// vue-notifications
import Notifications from "vue-notification";
Vue.use(Notifications);

// toogle button
import ToggleButton from "vue-js-toggle-button";
Vue.use(ToggleButton);

// vue-popove
import Popover from "vue-js-popover";
Vue.use(Popover);

// vee-validate
import VeeValidate from "vee-validate";

import "./registerServiceWorker";
Vue.use(VeeValidate, {
  events: "change",
});

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
