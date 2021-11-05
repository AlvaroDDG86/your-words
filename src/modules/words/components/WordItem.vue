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
      lg:w-3/12
      xl:w-2/12
      w-11/12
      m-4
      bg-gray-100
    "
    @click="navigate"
  >
    <div class="m-3">
      <div class="flex justify-between">
        <h2 class="text-2xl text-blue-700 font-bold uppercase">
          {{ title }}
        </h2>
        <span
          :class="{ 'text-yellow-300': word.favourite }"
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
          <v-icon name="star"
        /></span>
      </div>
      <p
        class="
          font-light font-mono
          text-sm text-gray-700
          hover:text-gray-900
          transition-all
          duration-200
          text-left
        "
      >
        {{ firstDefinition }}
      </p>
      <div class="text-left mt-1">
        <span
          :key="`part-${index}`"
          v-for="(part, index) in partsOfSpeech"
          class="
            bg-gray-200
            rounded
            text-gray-900
            ml-2
            px-4
            uppercase
            shadow-sm
            font-bold
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
