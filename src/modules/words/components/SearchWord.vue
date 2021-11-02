<template>
  <div class="inset-x-auto w-full">
    <div class="w-full mx-auto shadow-md rounded-md p-4 bg-white">
      <div class="flex gap-2 flex-col md:flex-row center">
        <div class="relative flex-1">
          <input
            id="word"
            v-model="word"
            name="word"
            type="text"
            class="
              peer
              h-10
              w-full
              rounded-md
              border border-1.5
              placeholder-transparent
              border-pink-300
              text-pink-900
              focus:outline-none focus:border-pink-600 focus:border-2
              p-3
            "
            placeholder="Word to search"
          />
          <label
            for="word"
            class="
              absolute
              left-2
              px-1
              -top-2.5
              bg-white
              text-pink-600 text-sm
              transition-all
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-pink-900
              peer-placeholder-shown:top-2
              peer-focus:-top-2.5 peer-focus:text-pink-600 peer-focus:text-sm
            "
            >Word or Expresion :</label
          >
        </div>
      </div>
      <div class="relative mt-6">
        <button
          class="
            bg-pink-900
            text-white
            font-extrabold
            text-lg
            rounded-full
            px-6
            py-3
          "
          @click="searchWord"
        >
          Search
        </button>
        <div class="absolute bottom-1 right-10 w-4 hover:cursor-pointer">
          <span
            :class="{ 'text-yellow-300': isFavourite }"
            class="text-gray-300"
          >
            <v-icon name="star" scale="3"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchWord",
  data() {
    return {
      word: "",
    };
  },
  methods: {
    searchWord() {
      this.$store.dispatch("words/setWord", null);
      this.$store.dispatch("words/getWord", this.word);
    },
  },
  computed: {
    ...mapGetters("words", ["isFavourite"]),
  },
};
</script>
