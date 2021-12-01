export default {
  path: "/auth",
  component: () =>
    import(
      /* webpackChunkName: 'Auth' */
      "@/modules/auth/Auth"
    ),
  children: [
    {
      path: "login",
      component: () =>
        import(
          /* webpackChunkName: 'Auth' */
          "@/modules/auth/pages/Login"
        ),
    },
    {
      path: "signup",
      component: () =>
        import(
          /* webpackChunkName: 'Auth' */
          "@/modules/auth/pages/Signup"
        ),
    },
    {
      path: "profile",
      component: () =>
        import(
          /* webpackChunkName: 'Auth' */
          "@/modules/auth/pages/Profile"
        ),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "dashboard",
      component: () =>
        import(
          /* webpackChunkName: 'Auth' */
          "@/modules/auth/pages/Dashboard"
        ),
      meta: {
        requiresAuth: true,
      },
    },
  ],
};
