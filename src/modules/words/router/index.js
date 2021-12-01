export default {
  path: "/words",
  component: () =>
    import(/* webpackChunkName: 'Words' */ "@/modules/words/Words"),
  children: [
    {
      path: "new",
      component: () =>
        import(
          /* webpackChunkName: 'Words' */
          "@/modules/words/pages/WordsNew"
        ),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "list",
      component: () =>
        import(
          /* webpackChunkName: 'Words' */
          "@/modules/words/pages/WordsList"
        ),
      meta: {
        requiresAuth: true,
      },
    },
  ],
};
