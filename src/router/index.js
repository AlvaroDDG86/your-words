import Vue from "vue";
import VueRouter from "vue-router";
import LoginRoute from "@/modules/auth/router";
import LandingRoute from "@/modules/landing/router";
import WordsRoute from "@/modules/words/router";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "*",
    redirect: "/",
  },
  LoginRoute,
  LandingRoute,
  WordsRoute,
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) next("/");
      else next();
    });
  } else {
    const user = firebase.auth().currentUser;
    if (
      user &&
      (to.fullPath === "/auth/login" || to.fullPath === "/auth/signup")
    ) {
      next("/");
    } else {
      next();
    }
  }
});

export default router;
