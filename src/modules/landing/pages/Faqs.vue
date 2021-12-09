<template>
  <div>
    <AppAccordion
      :key="`mainfaq-${index}`"
      v-for="(faq, index) in faqs"
      :title="faq.title"
      :list="faq.list"
    />
  </div>
</template>

<script>
import AppAccordion from "@/components/AppAccordion";
export default {
  components: {
    AppAccordion,
  },
  data() {
    return {
      faqs: [
        {
          title: "Main features",
          list: [
            {
              question: "How does it work?",
              answer:
                "Easy! search a word, read the explanation, examples, synonyms and antonyms. Listen the audio, write your examples, annotations and traductions, if you don't know, only click in Translate button.",
            },
            {
              question: "Collection",
              answer:
                "Filter your collection by letter, marked, words and order it by last modicated, newest, oldest and alphabetically",
            },
            {
              question: "Marked words",
              answer:
                "Set a word as marked, easy to find and review, once you know it well, unset and keep it in your collection",
            },
          ],
        },
        {
          title: "Configuration",
          list: [
            {
              question: "Profile picture",
              answer: "Select your profile picture, always less than 500kb",
            },
            {
              question: "Language",
              answer: "Select the language of your traductions",
            },
            {
              question: "Pagination",
              answer: "Set how much words you want to see for each page",
            },
            {
              question: "Audio options",
              answer:
                "When the word has audios, you can listen the times you have set, repeat for practicing and automaticly the word plays again",
            },
            {
              question: "Dark mode",
              answer:
                "Easy to read when you are studing, or light mode when it's too sunny!",
            },
            {
              question: "Grid mode/ Table mode",
              answer:
                "Autofit words for every screen, or a table with the word and first meaning",
            },
          ],
        },
      ],
    };
  },
};
</script>
