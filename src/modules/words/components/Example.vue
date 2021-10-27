<template>
  <div class="flex mb-4 items-center">
    <p class="w-full text-left text-grey-darkest">
      {{ example }}
    </p>
    <button
      class="
        flex-shrink-0
        bg-teal-500
        hover:bg-teal-700
        border-teal-500
        hover:border-teal-700
        text-sm
        border-4
        bg-pink-800
        text-white
        py-1
        px-2
      "
      @click="removeExample"
    >
      <v-icon name="trash-alt" class="bg-pink-800" />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    example: {
      type: String,
      default: "",
    },
  },
  methods: {
    removeExample() {
      this.$emit("remove", this.example);
    },
  },
};
</script>
