import axios from "axios";
import Vue from "vue";
// import store from "your/store/path/store";
let loader = null;

export default function setup() {
  // REQUEST
  axios.interceptors.request.use(
    function (config) {
      //   const token = store.getters.token;
      //   if (token) {
      //     config.headers.Authorization = `Bearer ${token}`;
      //   }
      loader = Vue.prototype.$loading.show();
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  // RESPONSE
  axios.interceptors.response.use(
    function (response) {
      loader.hide();
      return response;
    },
    function (error) {
      loader.hide();
      return Promise.reject(error);
    }
  );
}
