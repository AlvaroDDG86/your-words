import Auth from "@/modules/auth/Auth";
import Login from "@/modules/auth/pages/Login";
import Singup from "@/modules/auth/pages/Singup";
import Profile from "@/modules/auth/pages/Profile";

export default {
  path: "/auth",
  component: Auth,
  children: [
    {
      path: "login",
      component: Login,
    },
    {
      path: "singup",
      component: Singup,
    },
    {
      path: "profile",
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
  ],
};
