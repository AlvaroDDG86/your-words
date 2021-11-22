<template>
  <div class="dark:bg-gray-800 transition-all duration-200">
    <SearchWord />
    <template v-if="word.list">
      <div class="h-full bg-gray-300 dark:bg-gray-800">
        <Word
          :key="`word-${index}`"
          v-for="(word, index) in word.list"
          :word="word"
          :index="index"
        />
      </div>
      <Examples :examples="word.examples" />
      <Annotation
        :annotations="word.annotations"
        @updateValue="word.annotations = $event"
      />
      <Translations
        :translation="word.translation"
        @updateValue="word.translation = $event"
      />
      <SaveWord />
    </template>
    <div
      v-else
      class="
        flex
        justify-center
        flex-col
        items-center
        font-xl font-bold
        uppercase
        pt-32
        transition-all
        duration-200
        text-gray-200
      "
    >
      <h1 v-if="notFound" class="text-5xl text-gray-200 font-bold">
        {{ notFound.word }}
      </h1>
      {{ notFound ? notFound.message : "Search new Word" }}
    </div>
  </div>
</template>
<script>
import Word from "@/modules/words/components/Word";
import SearchWord from "@/modules/words/components/SearchWord";
import Examples from "@/modules/words/components/Examples";
import Annotation from "@/modules/words/components/Annotation";
import Translations from "@/modules/words/components/Translations";
import SaveWord from "@/modules/words/components/SaveWord";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "WordsNew",
  components: {
    Word,
    SearchWord,
    Examples,
    Annotation,
    SaveWord,
    Translations,
  },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("words", ["word", "notFound"]),
  },
  destroyed() {
    this.setWord(null);
  },
  methods: {
    ...mapActions("words", ["setWord"]),
  },
};
</script>
