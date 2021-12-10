<template>
  <div
    :class="{ 'overflow-y-auto': scroll }"
    class="
      bg-gray-300
      dark:bg-gray-600
      rounded-2xl
      p-4
      shadow-lg
      m-4
      lg:m-0
      min-w-24
      overflow-hidden
      h-96
      min-h-24
      opacity-80
    "
  >
    <slot name="title" />
    <div class="grid ustify-items-stretch items-center h-full">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    scroll: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
