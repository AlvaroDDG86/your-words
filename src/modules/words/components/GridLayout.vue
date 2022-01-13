<template>
  <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-x-4 p-2">
    <WordItem
      :word="word"
      :key="`word-${index}`"
      v-for="(word, index) in list"
    />
  </div>
</template>
<script>
import WordItem from "@/modules/words/components/WordItem";
export default {
  name: "GridLayout",
  components: {
    WordItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
