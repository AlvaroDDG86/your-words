<template>
  <div class="flex justify-start items-center flex-col">
    <span class="text-5x1 text-gray-500 font-bold mr-10">{{ title }}: </span>
    <div
      class="
        bg-gray-100
        p-1
        flex flex-wrap
        justify-start
        m-3
        rounded-2xl
        shadow-md
        w-full
      "
    >
      <span
        :key="`itemList-${index}`"
        v-for="(itemList, index) in list"
        class="py-1 px-1 text-blue-900 m-1"
        >{{ itemList }}{{ list.length - 1 === index ? "." : "," }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  ame: "TitleWithBox",
  props: {
    title: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
