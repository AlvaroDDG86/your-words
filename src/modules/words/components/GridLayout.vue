<template>
  <div class="grid grid-autofit gap-x-4 p-2">
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
<style>
.grid-autofit {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
