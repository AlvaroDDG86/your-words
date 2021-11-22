<template>
  <div>
    <div class="text-white uppercase">
      Showing {{ filterList.paginator.total }} of
      {{ wordFullList.length }} items
    </div>
    <ul class="flex justify-center items-center py-2 w-full">
      <li
        @click="filterList.paginator.currentPage !== 1 && setPage(1)"
        :class="{
          'cursor-not-allowed bg-gray-400':
            filterList.paginator.currentPage === 1,
        }"
        class="
          cursor-pointer
          mx-1
          px-1
          py-1
          w-8
          bg-gray-200
          text-gray-700
          hover:bg-gray-700 hover:text-gray-200
          rounded-lg
          shadow-md
        "
      >
        <a class="flex items-center font-bold">
          <span class="mx-1"><v-icon name="angle-double-left" /></span>
        </a>
      </li>
      <li
        @click="
          filterList.paginator.currentPage !== 1 &&
            setPage(filterList.paginator.currentPage - 1)
        "
        :class="{
          'cursor-not-allowed bg-gray-400':
            filterList.paginator.currentPage === 1,
        }"
        class="
          cursor-pointer
          mx-1
          px-1
          py-1
          w-8
          bg-gray-200
          text-gray-700
          hover:bg-gray-700 hover:text-gray-200
          rounded-lg
          shadow-md
        "
      >
        <a class="flex justify-center items-center font-bold">
          <span class="mx-1"><v-icon name="angle-left" /></span>
        </a>
      </li>
      <li
        :key="`page-${index}`"
        @click="filterList.paginator.currentPage !== page && setPage(page)"
        v-for="(page, index) in pages"
        :class="{
          'cursor-not-allowed bg-gray-400':
            filterList.paginator.currentPage === page,
        }"
        class="
          cursor-pointer
          mx-1
          px-1
          py-1
          w-8
          text-gray-700
          bg-gray-200
          hover:bg-gray-700 hover:text-gray-200
          rounded-lg
          shadow-md
        "
      >
        <a class="font-bold">{{ page }}</a>
      </li>
      <li
        @click="
          filterList.paginator.currentPage !== pages[pages.length - 1] &&
            pages.length > 1 &&
            setPage(filterList.paginator.currentPage + 1)
        "
        :class="{
          'cursor-not-allowed bg-gray-400':
            filterList.paginator.currentPage === pages[pages.length - 1] ||
            pages.length === 1,
        }"
        class="
          cursor-pointer
          mx-1
          px-1
          py-1
          w-8
          bg-gray-200
          text-gray-700
          hover:bg-gray-700 hover:text-gray-200
          rounded-lg
          shadow-md
        "
      >
        <a class="flex justify-center items-center font-bold">
          <span class="mx-1"><v-icon name="angle-right" /></span>
        </a>
      </li>
      <li
        @click="
          filterList.paginator.currentPage !== pages[pages.length - 1] &&
            pages.length > 1 &&
            setPage(total)
        "
        :class="{
          'cursor-not-allowed bg-gray-400':
            filterList.paginator.currentPage === pages[pages.length - 1] ||
            pages.length === 1,
        }"
        class="
          cursor-pointer
          mx-1
          px-1
          py-1
          w-8
          bg-gray-200
          text-gray-700
          hover:bg-gray-700 hover:text-gray-200
          rounded-lg
          shadow-md
        "
      >
        <a class="flex items-center font-bold">
          <span class="mx-1"><v-icon name="angle-double-right" /></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      pages: [],
      total: 0,
    };
  },
  computed: {
    ...mapGetters("words", ["filterList", "wordFullList"]),
  },
  methods: {
    ...mapActions("words", ["setPage"]),
  },
  watch: {
    "filterList.paginator": {
      handler(newVal) {
        this.currentPage = 1;
        const total = Math.ceil(
          newVal.total / this.filterList.paginator.length
        );
        this.total = total;
        this.pages = Array.from(
          {
            length: total,
          },
          (_, i) => i + 1
        );
        if (total - this.filterList.paginator.currentPage >= 5) {
          this.pages = this.pages.splice(
            this.filterList.paginator.currentPage - 1,
            5
          );
        } else if (total > 5) {
          this.pages = this.pages.splice(total - 5, 5);
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
