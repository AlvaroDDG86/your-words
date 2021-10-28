<template>
  <div class="h-full">
    <ListBar />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <WordItem
        :word="word"
        :key="`word-${index}`"
        v-for="(word, index) in wordsList"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import WordItem from "@/modules/words/components/WordItem";
import ListBar from "@/modules/words/components/ListBar";
export default {
  name: "WordList",
  components: {
    WordItem,
    ListBar,
  },
  computed: {
    ...mapGetters("words", ["wordsList"]),
  },
};
</script>
