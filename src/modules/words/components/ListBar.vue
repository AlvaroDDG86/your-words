<template>
  <div
    class="
      bg-blue-900
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
          w-96
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
        lg:mt-0
      "
      @click="setFavFilter(!filterList.onlyFavs)"
    >
      <span
        :class="{ 'text-yellow-300': filterList.onlyFavs }"
        class="text-xl font-mono inline text-gray-300"
      >
        <v-icon name="star"
      /></span>
      {{ filterList.onlyFavs ? "All words" : "Only FAVS" }}
    </button>
    <v-select
      class="w-60 bg-white mt-1 lg:mt-0 rounded"
      v-model="filterList.order"
      :options="orderOptions"
      :reduce="(order) => order.code"
      label="label"
      :clearable="false"
    >
      <template v-slot:option="option" class="flex justify-around items-center">
        <v-icon small x-small :name="option.icon" />
        {{ option.label }}
      </template>
    </v-select>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// icon: "brands/vuejs",
export default {
  name: "ListBar",
  data() {
    return {
      orderOptions: [
        // {
        //   label: "Newest",
        //   code: "new",
        //   icon: "sort-amount-up",
        // },
        // {
        //   label: "Oldest",
        //   code: "old",
        //   icon: "sort-amount-down",
        // },
        {
          label: "Alphabetical desc",
          code: "desc",
          icon: "sort-alpha-up",
        },
        {
          label: "Alphabetical asc",
          code: "asc",
          icon: "sort-alpha-up-alt",
        },
      ],
    };
  },
  methods: {
    ...mapActions("words", ["setFavFilter"]),
  },
  computed: {
    ...mapGetters("words", ["filterList"]),
  },
};
</script>
