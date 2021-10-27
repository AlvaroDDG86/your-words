<template>
  <div class="mx-10 my-6">
    <label
      for="annotation"
      class="text-sm font-medium text-gray-900 block mb-2 font-bold"
      >Your annotations:</label
    >
    <textarea
      id="annotation"
      rows="4"
      class="
        bg-gray-50
        border border-pink-300
        text-gray-900
        sm:text-sm
        rounded-lg
        focus:ring-pink500 focus:border-pink-500
        block
        w-full
      "
      placeholder="Leave your annotations..."
    ></textarea>
  </div>
</template>
<script>
export default {
  name: "Annotation",
  props: {
    word: {
      type: Object,
      require: true,
    },
  },
};
</script>
