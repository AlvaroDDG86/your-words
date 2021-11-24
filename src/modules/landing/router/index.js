import Landing from "@/modules/landing/Landing";
import Main from "@/modules/landing/pages/Main";
import Faqs from "@/modules/landing/pages/Faqs";

export default {
  path: "/landing",
  component: Landing,
  redirect: "/landing/main",
  children: [
    {
      path: "main",
      component: Main,
    },
    {
      path: "faqs",
      component: Faqs,
    },
  ],
};
