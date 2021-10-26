import Vue from "vue";
import VueRouter from "vue-router";
import LoginRoute from "@/modules/auth/router";
import LandingRoute from "@/modules/landing/router";
import WordsRoute from "@/modules/words/router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "*",
    redirect: "/landing",
  },
  LoginRoute,
  LandingRoute,
  WordsRoute,
];

const router = new VueRouter({
  routes,
});

export default router;
