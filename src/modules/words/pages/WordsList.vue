<template>
  <div>
    <!-- <pre class="text-indigo-400">{{ user.conf.grid }}</pre> -->
    <ListBar />
    <GridLayout v-if="user.conf.grid" :list="wordsList" />
    <Table v-else :list="wordsList" />
    <div
      v-if="wordsList.length === 0"
      class="
        flex flex-col
        justify-center
        items-center
        dark:text-gray-200
        uppercase
        pt-32
      "
    >
      <p>No words found</p>
      <button
        type="submit"
        @click="$router.replace('/words/new')"
        class="px-3 py-2 my-2 font-semibold text-white bg-blue-600 rounded"
      >
        Search and create new word
      </button>
    </div>
    <button
      @click="$router.replace('/words/new')"
      class="
        fixed
        bottom-32
        right-12
        bg-green-600
        text-white
        w-14
        h-14
        rounded-full
        shadow-md
        cursor-pointer
        hover:bg-blue-800 hover:shadow-md
        transition-all
        duration-200
        block
        lg:hidden
        z-10
      "
    >
      <v-icon name="plus" />
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ListBar from "@/modules/words/components/ListBar";
import Table from "@/modules/words/components/Table";
import GridLayout from "@/modules/words/components/GridLayout";
export default {
  name: "WordList",
  components: {
    ListBar,
    Table,
    GridLayout,
  },
  computed: {
    ...mapGetters("words", ["wordsList"]),
    ...mapGetters("auth", ["user"]),
  },
};
</script>
