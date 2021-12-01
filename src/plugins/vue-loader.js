// Loader spinner
import Vue from "vue";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(VueLoading, {
  color: "#1855E4",
  loader: "bars",
  backgroundColor: "#C8D7FA",
  height: 150,
  width: 150,
});
