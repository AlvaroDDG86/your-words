<template>
  <div
    class="
      bg-brand
      text-white
      py-4
      px-10
      flex flex-col
      justify-around
      items-center
      lg:flex-row
    "
  >
    <div class="relative">
      <input
        id="word"
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
          text-blue-600 text-sm
          transition-all
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-blue-900
          peer-placeholder-shown:top-2
          peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm
          rounded
        "
        >Search Word:</label
      >
    </div>
    <div class="flex justify-between items-center">
      <AppButton @click="$modal.show('letters')">
        <span
          class="text-xl font-mono inline text-gray-300"
          :class="{ 'text-green-600': filterList.letters.length > 0 }"
        >
          <v-icon name="search-plus"
        /></span>
        <span class="hidden md:inline-block ml-2">By letters</span>
      </AppButton>
      <AppButton
        @click="setFavFilter(!filterList.onlyFavs)"
        size="s"
        classes="md:w-42"
        ><span
          :class="{ 'text-green-600': filterList.onlyFavs }"
          class="text-gray-300"
        >
          <v-icon name="bookmark"
        /></span>
        <span class="hidden md:inline-block ml-2">
          Marked words
        </span></AppButton
      >
      <app-select
        :options="orderOptions"
        v-model="filterList.order"
      ></app-select>
    </div>
    <modal name="letters" :adaptive="true" :height="'auto'">
      <div class="mx-2">
        <h2 class="text-2xl mt-4 text-black">Select letters to filter</h2>
        <div class="grid grid-autofit gap-x-4 p-2">
          <button
            @click="setLetterMethod(letter)"
            :class="
              filterList.letters.indexOf(letter) > -1
                ? 'text-white bg-blue-600 shadow-sm'
                : 'text-gray-700 bg-gray-200 shadow-2xl'
            "
            class="
              rounded-xl
              transition-all
              duration-200
              m-1
              p-1
              font-bold
              hover:shadow-sm
            "
            :key="`letter-${letter}`"
            v-for="letter in letters.split(',')"
          >
            {{ letter }}
          </button>
        </div>
        <button
          @click="$modal.hide('letters')"
          class="font-normal text-blue-500 m-4 px-2 py-1 rounded shadow-lg"
        >
          Close
        </button>
      </div>
    </modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { ORDER_OPTIONS, LETTERS } from "@/helpers/constants";
// icon: "brands/vuejs",
export default {
  name: "ListBar",
  methods: {
    ...mapActions("words", ["setFavFilter", "setLetter"]),
    setLetterMethod(letter) {
      this.setLetter(letter);
    },
  },
  computed: {
    ...mapGetters("words", ["filterList"]),
    orderOptions() {
      return ORDER_OPTIONS;
    },
    letters() {
      return LETTERS;
    },
  },
};
</script>
<style scoped>
.grid-autofit {
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
}
</style>
