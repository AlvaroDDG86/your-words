import Auth from "@/modules/auth/Auth";
import Login from "@/modules/auth/pages/Login";
import Signup from "@/modules/auth/pages/Signup";
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
      path: "signup",
      component: Signup,
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
