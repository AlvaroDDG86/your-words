import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./index.css";
import "./registerServiceWorker";
// Tailwind
import "./assets/tailwind.css";

// Plugins
import "./plugins/vue-select";
import "./plugins/vue-loader";
import "./plugins/vue-awesome";
import "./plugins/vue-js-modal";
import "./plugins/vue-notification";
import "./plugins/vue-toggle";
import "./plugins/vue-popover";
import "./plugins/vee-validate";
import "./plugins/apex-charts";

// importing the helper
import interceptorsSetup from "./helpers/interceptors";
interceptorsSetup();

// importing firebase config
import "@/helpers/firebase.js";

// Not necesary to load all components for now
import AppButton from "@/components/AppButton";
import AppSelect from "@/components/AppSelect.vue";
Vue.component("AppButton", AppButton);
Vue.component("AppSelect", AppSelect);
import AppCard from "@/components/AppCard";
Vue.component("AppCard", AppCard);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
