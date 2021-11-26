<template>
  <button
    v-show="show"
    :class="`${btnClasses} ${classes}`"
    class="
      font-extrabold
      rounded
      px-2
      py-1
      mx-2
      my-1
      shadow-lg
      hover:shadow-md
      min-w-8
    "
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "secondary", "danger"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "m",
      validator: function (value) {
        return ["s", "m", "l"].indexOf(value) !== -1;
      },
    },
    classes: {
      type: String,
      default: "",
    },
  },
  computed: {
    btnClasses() {
      let classes = "text-blue-900 bg-white";
      switch (this.type) {
        case "secondary":
          classes = "text-white bg-blue-900";
          break;
        case "danger":
          classes = "text-red-600 bg-white";
          break;
      }
      classes = `${classes} text-lg`;
      switch (this.size) {
        case "s":
          classes = `${classes} text-sm`;
          break;
        case "l":
          classes = `${classes} text-xl`;
          break;
      }
      return classes;
    },
  },
};
</script>
