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
      h-10
    "
  >
    <p class="text-left text-grey-darkest">
      {{ example }}
    </p>
    <AppButton type="danger" size="s" @click="removeExample"
      ><v-icon name="trash-alt"
    /></AppButton>
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
