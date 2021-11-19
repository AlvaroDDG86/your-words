<template>
  <div class="mx-2 sm:mx-10 my-6">
    <label
      for="annotation"
      class="
        text-s
        font-medium
        text-gray-900
        dark:text-gray-200
        block
        mb-2
        font-bold
      "
      >Your annotations:</label
    >
    <textarea
      id="annotation"
      rows="4"
      :value="annotations"
      @change="updateVal"
      class="
        bg-gray-50
        border border-blue-300
        text-gray-900
        sm:text-sm
        rounded-lg
        focus:ring-blue500 focus:border-blue-500
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
    annotations: {
      type: String,
      require: true,
    },
  },
  methods: {
    updateVal(event) {
      this.$emit("updateValue", event.target.value);
    },
  },
};
</script>
