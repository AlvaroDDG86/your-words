<template>
  <div class="inset-x-auto w-full">
    <div class="w-full mx-auto shadow-md p-4 bg-blue-900">
      <div class="flex gap-2 flex-col md:flex-row center">
        <div class="relative flex-1">
          <input
            id="word"
            @keyup.enter="searchWord"
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
              border-blue-300
              text-blue-900
              focus:outline-none focus:border-blue-600 focus:border-2
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
              text-blue-600 text-sm
              transition-all
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-blue-900
              peer-placeholder-shown:top-2
              peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm
              rounded
            "
            >Word or Expresion :</label
          >
        </div>
      </div>
      <div class="flex justify-between items-center mt-6">
        <button
          class="
            bg-white
            text-blue-900
            font-extrabold
            text-lg
            rounded
            px-2
            py-1
          "
          @click="$router.push('/words/list')"
        >
          <v-icon name="arrow-circle-left" /> List
        </button>
        <button
          class="
            bg-white
            text-blue-900
            font-extrabold
            text-lg
            rounded
            px-2
            py-1
          "
          @click="searchWord"
        >
          Search
        </button>
        <div class="cursor-pointer">
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
