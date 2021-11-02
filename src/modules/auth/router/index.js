import Auth from "@/modules/auth/Auth";
import Login from "@/modules/auth/pages/Login";
import Singup from "@/modules/auth/pages/Singup";

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
  ],
};
