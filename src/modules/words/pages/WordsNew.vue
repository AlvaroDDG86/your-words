<template>
  <div class="top-8 relative min-h-screen pb-10">
    <SearchWord />
    <Word
      :key="`word-${index}`"
      v-for="(word, index) in wordList"
      :word="word"
      :index="index"
    />
    <Examples :examples="examples" />
    <Annotation :annotations="annotations" />
  </div>
</template>
<script>
import Word from "@/modules/words/components/Word";
import SearchWord from "@/modules/words/components/SearchWord";
import Examples from "@/modules/words/components/Examples";
import Annotation from "@/modules/words/components/Annotation";
import { mapGetters } from "vuex";
export default {
  name: "WordsNew",
  components: {
    Word,
    SearchWord,
    Examples,
    Annotation,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("words", ["wordList", "examples", "annotations"]),
  },
};
</script>
