<template>
  <div
    class="
      card
      m-2
      cursor-pointer
      border border-gray-400
      rounded-lg
      hover:shadow-md hover:border-opacity-0
      transform
      hover:-translate-y-1
      transition-all
      duration-200
      h-36
      max-h-36
      overflow-hidden
    "
  >
    <div class="m-3">
      <div class="flex justify-between">
        <h2 class="text-lg mb-2 text-pink-700 font-bold uppercase">
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
    </div>
  </div>
</template>
<script>
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
  },
};
</script>
