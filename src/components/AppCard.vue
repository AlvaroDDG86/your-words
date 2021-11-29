<template>
  <div
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
    "
  >
    <slot name="title" />
    <div class="flex justify-center items-center h-full">
      <slot />
    </div>
  </div>
</template>
