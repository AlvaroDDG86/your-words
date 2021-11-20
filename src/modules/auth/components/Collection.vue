<template>
  <div class="mt-6 shadow-2xl p-2 rounded-xl bg-gray-100 dark:bg-gray-700">
    <h3 class="font-bold text-2xl flex justify-center items-center">
      <v-icon name="th" class="mr-2" /> Collection:
    </h3>
    <div class="flex justify-center py-4 lg:pt-4 pt-8">
      <div
        class="
          mr-4
          p-3
          text-center
          cursor-pointer
          hover:text-blue-600 hover:shadow-xl
          w-20
          h-20
          rounded-lg
        "
        @click="goToWords(false)"
      >
        <span
          class="
            text-xl
            font-bold
            block
            uppercase
            tracking-wide
            text-blueGray-600
          "
        >
          {{ wordsData.length }}
        </span>
        <span class="text-sm text-blueGray-400">Words</span>
      </div>
      <div
        class="
          mr-4
          p-3
          text-center
          cursor-pointer
          hover:text-blue-600 hover:shadow-xl
          w-20
          h-20
          rounded-lg
        "
        @click="goToWords(true)"
      >
        <span
          class="
            text-xl
            font-bold
            block
            uppercase
            tracking-wide
            text-blueGray-600
          "
        >
          {{ wordsData.favourites }}
        </span>
        <span class="text-sm text-blueGray-400">Marked</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("words", ["wordFullList"]),
    wordsData() {
      return {
        length: this.wordFullList.length,
        favourites: this.wordFullList.filter((item) => item.favourite).length,
      };
    },
  },
  methods: {
    ...mapActions("words", ["setFavFilter", "clearList"]),
    goToWords(fav) {
      this.setFavFilter(fav);
      this.$router.push("/words/list");
    },
  },
};
</script>
