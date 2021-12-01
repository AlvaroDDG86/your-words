export default {
  path: "/landing",
  component: () =>
    import(
      /* webpackChunkName: 'Landing' */
      "@/modules/landing/Landing"
    ),
  redirect: "/landing/main",
  children: [
    {
      path: "main",
      component: () =>
        import(
          /* webpackChunkName: 'Landing' */
          "@/modules/landing/pages/Main"
        ),
    },
    {
      path: "faqs",
      component: () =>
        import(
          /* webpackChunkName: 'Landing' */
          "@/modules/landing/pages/Faqs"
        ),
    },
    {
      path: "about",
      component: () =>
        import(
          /* webpackChunkName: 'Landing' */
          "@/modules/landing/pages/About"
        ),
    },
  ],
};
