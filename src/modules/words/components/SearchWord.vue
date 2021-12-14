<template>
  <div class="inset-x-auto w-full">
    <div class="w-full mx-auto shadow-md p-4 bg-brand">
      <div class="flex gap-2 flex-col md:flex-row center">
        <v-select
          class="bg-white mt-1 lg:mt-0 rounded w-full"
          label="Word or Expresion"
          v-model="wordSearch"
          :filterable="false"
          :options="options"
          @search="onSearch"
          @option:selected="searchWord"
        >
          <template slot="no-options">
            type to search words or expressions.
          </template>
        </v-select>
      </div>
      <div class="flex justify-between items-center mt-6">
        <AppButton @click="$router.replace('/words/list')">
          <v-icon name="arrow-circle-left" /> List
        </AppButton>
        <AppButton @click="searchWord">
          <v-icon name="search" /> Search
        </AppButton>
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
      options: [],
    };
  },
  methods: {
    ...mapActions("words", ["setFavourite"]),
    searchWord() {
      this.wordSearch && this.$store.dispatch("words/getWord", this.wordSearch);
    },
    async onSearch(search, loading) {
      if (!search) {
        this.options = [];
        return;
      }
      loading(true);
      // Avoid axios in order to avoid global loader
      fetch(`https://api.datamuse.com/words?sp=${escape(search)}*`).then(
        (res) => {
          res.json().then((json) => {
            this.options = json.map((item) => item.word).slice(0, 15);
          });
          loading(false);
        }
      );
    },
  },
  computed: {
    ...mapGetters("words", ["word", "isFavourite"]),
  },
};
</script>
