<template>
  <div
    class="bg-pink-900 text-white py-4 px-10 flex justify-around items-center"
  >
    <div class="flex gap-1 flex-col md:flex-row center">
      <div class="relative">
        <input
          id="word"
          value=""
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
          v-model="filterList.word"
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
            rounded
          "
          >Search Word or Expresion :</label
        >
      </div>
    </div>
    <button
      class="
        text-pink-900
        bg-white
        font-extrabold
        text-sm
        rounded-full
        px-6
        py-3
        w-40
      "
      @click="setFavFilter(!filterList.onlyFavs)"
    >
      <span
        :class="{ 'text-yellow-300': filterList.onlyFavs }"
        class="text-xl font-mono inline px-2 text-gray-300"
      >
        <v-icon name="star"
      /></span>
      {{ filterList.onlyFavs ? "All words" : "Only FAVS" }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListBar",
  methods: {
    ...mapActions("words", ["setFavFilter"]),
  },
  computed: {
    ...mapGetters("words", ["filterList"]),
  },
};
</script>
