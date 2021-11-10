<template>
  <div
    class="
      flex
      mb-4
      justify-between
      items-center
      max-w-full
      truncate
      relative
      h-8
    "
  >
    <p class="text-left text-grey-darkest">
      {{ example }}
    </p>
    <button
      class="
        bg-blue-900
        text-white
        font-extrabold
        text-sm
        rounded
        px-2
        py-1
        absolute
        right-2
        top-1
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
