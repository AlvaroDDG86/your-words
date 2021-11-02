<template>
  <div>
    <SearchWord />
    <template v-if="word.list">
      <div class="h-full">
        <Word
          :key="`word-${index}`"
          v-for="(word, index) in word.list"
          :word="word"
          :index="index"
        />
      </div>
      <Examples :examples="word.examples" />
      <Annotation :annotations="word.annotations" />
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
      "
    >
      <h1 v-if="notFound" class="text-5xl text-gray-700 font-bold">
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
