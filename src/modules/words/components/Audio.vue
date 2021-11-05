<template>
  <div class="bg-gray-200 py-4 shadow-md rounded-2xl">
    <h3 class="text-3xl">Phonetics:</h3>
    <div
      :key="`phonetic-${indexPho}`"
      v-for="(phonetic, indexPho) in phonetics"
      class="flex justify-center items-center mt-2"
    >
      <span v-if="phonetic.audio" class="text-2xl mr-5">{{
        phonetic.text
      }}</span>
      <audio
        v-if="phonetic.audio"
        :src="phonetic.audio"
        preload="auto"
        ref="audio"
        controls
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </div>
  </div>
</template>
<script>
export default {
  name: "Audio",
  props: {
    phonetics: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
