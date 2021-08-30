import Login from "@/modules/auth/Login";
import LoginPage from "@/modules/auth/pages/login-page";

export default {
  path: "/login",
  component: Login,
  children: [
    {
      path: "",
      name: "LoginPage",
      component: LoginPage,
    },
  ],
};
