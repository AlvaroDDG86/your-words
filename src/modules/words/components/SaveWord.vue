<template>
  <div class="bg-pink-900 text-white py-4 px-10 flex justify-end">
    <button
      class="
        text-pink-900
        bg-white
        font-extrabold
        text-lg
        rounded-full
        px-6
        py-3
      "
      @click="saveWord"
    >
      Add Word
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    saveWord() {
      console.log(true);
    },
  },
};
</script>
