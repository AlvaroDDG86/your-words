<template>
  <div>
    <ListBar />
    <div class="grid grid-autofit gap-x-4 p-2">
      <WordItem
        :word="word"
        :key="`word-${index}`"
        v-for="(word, index) in wordsList"
      />
    </div>
    <div
      v-if="wordsList.length === 0"
      class="
        flex flex-col
        justify-center
        items-center
        dark:text-gray-200
        uppercase
        pt-32
      "
    >
      <p>No words found</p>
      <button
        type="submit"
        @click="$router.replace('/words/new')"
        class="px-3 py-2 my-2 font-semibold text-white bg-blue-600 rounded"
      >
        Search and create new word
      </button>
    </div>
    <button
      @click="$router.replace('/words/new')"
      class="
        fixed
        bottom-16
        right-12
        bg-blue-600
        text-white
        w-14
        h-14
        rounded-full
        shadow-xl
        cursor-pointer
        hover:bg-blue-800 hover:shadow-md
        transition-all
        duration-200
        block
        md:hidden
      "
    >
      <v-icon name="plus" />
    </button>
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
<style>
.grid-autofit {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
