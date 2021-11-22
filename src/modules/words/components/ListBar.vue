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
        >Search Word or Expresion :</label
      >
    </div>
    <div class="flex justify-between items-center">
      <button
        @click="$modal.show('letters')"
        :class="
          filterList.letters.length > 0
            ? 'text-white bg-blue-600'
            : 'text-blue-900 bg-white'
        "
        class="
          font-extrabold
          text-sm
          rounded
          px-2
          py-1
          mt-1
          mr-2
          lg:mt-0
          md:w-32
          transition-all
          duration-200
        "
      >
        <span class="text-xl font-mono inline text-gray-300">
          <v-icon name="search-plus"
        /></span>
        <span class="hidden md:inline-block ml-2">By letters</span>
      </button>
      <button
        class="
          text-blue-900
          bg-white
          font-extrabold
          text-sm
          rounded
          px-2
          py-1
          mt-1
          mr-2
          lg:mt-0
          md:w-36
        "
        @click="setFavFilter(!filterList.onlyFavs)"
      >
        <span
          :class="{ 'text-green-600': filterList.onlyFavs }"
          class="text-xl font-mono inline text-gray-300"
        >
          <v-icon name="bookmark"
        /></span>
        <span class="hidden md:inline-block ml-2"> Marked words </span>
      </button>
      <v-select
        class="w-56 bg-white mt-1 lg:mt-0 rounded"
        v-model="filterList.order"
        :options="orderOptions"
        :reduce="(order) => order.code"
        label="label"
        :clearable="false"
      >
        <template
          v-slot:option="option"
          class="flex justify-around items-center"
        >
          <v-icon small x-small :name="option.icon" />
          {{ option.label }}
        </template>
      </v-select>
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
