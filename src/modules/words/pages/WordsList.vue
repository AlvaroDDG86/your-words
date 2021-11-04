<template>
  <div class="h-full">
    <ListBar />
    <div class="flex flex-wrap m-4">
      <WordItem
        :word="word"
        :key="`word-${index}`"
        v-for="(word, index) in wordsList"
      />
    </div>
    <div v-if="wordsList.length === 0">no words found</div>
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
