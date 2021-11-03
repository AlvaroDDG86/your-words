<template>
  <div class="bg-blue-900 text-white py-4 px-10 flex justify-end">
    <button
      class="text-blue-900 bg-white font-extrabold text-lg rounded px-2 py-1"
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
