<template>
  <div
    class="
      card
      cursor-pointer
      border border-gray-200
      rounded-lg
      hover:shadow-xl hover:border-opacity-0
      transform
      hover:-translate-y-1
      transition-all
      duration-200
      overflow-hidden
      break-inside
      bg-gray-100
      dark:bg-gray-400
      mb-2
    "
    @click="navigate"
  >
    <div class="m-3">
      <div class="flex lg:justify-end justify-between">
        <div class="block lg:hidden text-blue-800 dark:text-gray-100 text-xxs">
          <span class="font-bold text-blue-500">Created: </span
          >{{ word.dateCreation.toDate().toLocaleString() }}
          <span class="font-bold text-blue-500 ml-2">Updated: </span
          >{{ word.dateUpdate.toDate().toLocaleString() }}
        </div>
        <span
          :class="{ 'text-green-600': word.favourite }"
          class="
            text-sm text-teal-800
            font-mono
            bg-teal-100
            inline
            rounded-full
            px-2
            align-top
            float-right
            animate-pulse
            text-gray-300
          "
        >
          <v-icon name="bookmark"
        /></span>
      </div>
      <p
        class="
          font-light font-mono
          text-sm text-gray-700
          hover:text-gray-900
          dark:text-gray-100
          transition-all
          duration-200
          text-left
        "
      >
        <span
          class="
            text-xl
            lg:text-2xl
            text-blue-700
            dark:text-blue-600
            transition-all
            duration-200
            font-bold
            uppercase
          "
        >
          {{ title }}: </span
        >{{ firstDefinition }}
      </p>
      <div class="flex justify-start flex-wrap mt-1">
        <span
          :key="`part-${index}`"
          v-for="(part, index) in partsOfSpeech"
          class="
            bg-gray-200
            rounded
            text-gray-900
            ml-2
            mt-2
            px-4
            uppercase
            shadow-sm
            font-bold
            text-xs
          "
        >
          {{ part }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "WordItem",
  props: {
    word: {
      type: Object,
      require: true,
    },
  },
  computed: {
    title() {
      return this.word.list[0].word;
    },
    firstDefinition() {
      return this.word.list[0].meanings[0].definitions[0].definition;
    },
    partsOfSpeech() {
      return [
        ...new Set(
          this.word.list
            .map((word) => word.meanings.map((mean) => mean.partOfSpeech))
            .flat()
            .filter((part) => part)
        ),
      ];
    },
  },
  methods: {
    ...mapActions("words", ["setWord"]),
    navigate() {
      this.setWord(this.word.id);
      this.$nextTick(() => {
        this.$router.push({ path: "new" });
      });
    },
  },
};
</script>
