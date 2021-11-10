<template>
  <div class="h-full">
    <ListBar />
    <div class="flex justify-center lg:justify-start flex-wrap m-2 lg:m-4">
      <WordItem
        :word="word"
        :key="`word-${index}`"
        v-for="(word, index) in wordsList"
      />
    </div>
    <div
      v-if="wordsList.length === 0"
      class="flex flex-col justify-center items-center"
    >
      <p>no words found</p>
      <button
        type="submit"
        @click="$router.replace('/words/new')"
        class="px-3 py-2 my-2 font-semibold text-white bg-blue-600 rounded"
      >
        Search and create new word
      </button>
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
