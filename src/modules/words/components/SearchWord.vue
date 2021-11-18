<template>
  <div class="inset-x-auto w-full">
    <div class="w-full mx-auto shadow-md p-4 bg-blue-900">
      <div class="flex gap-2 flex-col md:flex-row center">
        <div class="relative flex-1">
          <input
            id="word"
            @keyup.enter="searchWord"
            v-model="wordSearch"
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
          @click="$router.replace('/words/list')"
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
          <v-icon name="search" /> Search
        </button>
        <div v-if="word.list" class="cursor-pointer">
          <span
            :class="{ 'text-green-600': isFavourite }"
            class="text-gray-300"
            @click="setFavourite(!isFavourite)"
          >
            <v-icon name="bookmark" scale="3"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchWord",
  data() {
    return {
      wordSearch: "",
    };
  },
  methods: {
    ...mapActions("words", ["setFavourite"]),
    searchWord() {
      this.$store.dispatch("words/setWord", null);
      this.$store.dispatch("words/getWord", this.wordSearch);
    },
  },
  computed: {
    ...mapGetters("words", ["word", "isFavourite"]),
  },
};
</script>
