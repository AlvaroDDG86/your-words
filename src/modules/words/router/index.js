import Words from "@/modules/words/Words";
import WordsNew from "@/modules/words/pages/WordsNew";
import WordsList from "@/modules/words/pages/WordsList";

export default {
  path: "/words",
  component: Words,
  children: [
    {
      path: "new",
      component: WordsNew,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "list",
      component: WordsList,
      meta: {
        requiresAuth: true,
      },
    },
  ],
};
