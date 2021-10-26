import Auth from "@/modules/auth/Auth";
import Login from "@/modules/auth/pages/Login";
import Signup from "@/modules/auth/pages/Signup";

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
  ],
};
