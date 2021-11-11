<template>
  <div class="h-full dark:bg-gray-800 transition-all duration-200">
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
    <button
      v-popover:add.left
      @click="$router.replace('/words/new')"
      class="
        fixed
        bottom-28
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
      "
    >
      <v-icon name="plus" />
      <popover name="add" event="hover">
        <div
          class="
            text-black
            dark:text-gray-300
            text-xs
            font-bold
            transition-all
            duration-200
          "
        >
          Search or Add new word
        </div>
      </popover>
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
