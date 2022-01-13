<template>
  <div
    class="base-select text-left w-48 relative mx-2 my-1"
    @blur="open = false"
  >
    <div
      class="
        font-extrabold
        rounded
        py-1
        px-2
        shadow-lg
        hover:shadow-md
        text-blue-900 text-lg
        bg-white
        cursor-pointer
      "
      :class="{ open: open }"
      @click="open = !open"
    >
      <template v-if="selected">
        <v-icon v-if="selected.icon" small x-small :name="selected.icon" />
        {{ selected.label }}
      </template>
      <span v-else> No options </span>
    </div>
    <div
      class="
        w-full
        absolute
        overflow-hidden
        z-10
        bg-white
        shadow-sm
        rounded
        mt-1
      "
      :class="{ hidden: !open }"
    >
      <div
        class="
          text-blue-900
          hover:text-gray-200 hover:bg-blue-900 hover:font-bold
          p-2
          text-lg
          border-1 border-t-blue-900
          cursor-pointer
        "
        v-for="(option, i) of options"
        :key="i"
        @click="() => emitInput(option)"
      >
        <v-icon
          class="mr-2"
          v-if="option.icon"
          small
          x-small
          :name="option.icon"
        />
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      require: true,
    },
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false,
    };
  },
  methods: {
    emitInput(option) {
      this.selected = option;
      this.open = false;
      this.$emit("input", this.selected.code);
    },
  },
};
</script>
