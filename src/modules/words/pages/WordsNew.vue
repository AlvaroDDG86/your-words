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
        items-center
        font-xl font-bold
        uppercase
        h-screen
      "
    >
      Search new Word
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
  data() {
    return {};
  },
  computed: {
    ...mapGetters("words", ["word"]),
  },
  destroyed() {
    this.setWord(null);
  },
  methods: {
    ...mapActions("words", ["setWord"]),
  },
};
</script>
