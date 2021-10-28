<template>
  <div class="flex mb-4 items-center">
    <p class="w-full text-left text-grey-darkest">
      {{ example }}
    </p>
    <button
      class="
        bg-pink-900
        text-white
        font-extrabold
        text-sm
        rounded-full
        px-3
        py-1
      "
      @click="removeExample"
    >
      <v-icon name="trash-alt" />
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
