<template>
  <div class="bg-gray-200 py-4 shadow-md rounded-2xl">
    <h3 class="text-3xl">Phonetics:</h3>
    <div
      :key="`phonetic-${indexPho}`"
      v-for="(phonetic, indexPho) in phonetics"
      class="
        flex flex-col
        sm:flex-row
        justify-center
        items-center
        mb-2
        sm:mb-0
        mt-2
      "
    >
      <span v-if="phonetic.audio" class="text-2xl">/{{ phonetic.text }}/</span>
      <audio
        class="hidden"
        v-if="phonetic.audio"
        :src="phonetic.audio"
        preload="auto"
        ref="audio"
        controls
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
      <div
        :class="{ 'text-gray-500 pulse-blue': current !== 0 }"
        class="
          flex
          justify-evenly
          w-16
          px-2
          py-2
          rounded-xl
          shadow-2xl
          bg-blue-900
          text-white
          dark:bg-gray-600
          mx-4
        "
      >
        <v-icon
          :class="{ 'text-gray-500 cursor-not-allowed': current !== 0 }"
          class="cursor-pointer"
          @click="current === 0 && play()"
          name="play"
          scale="1"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Audio",
  data() {
    return {
      current: 0,
    };
  },
  props: {
    phonetics: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    play() {
      const audio = this.$refs.audio[0];
      let times = 2;
      let seconds = 2000;
      this.current = 1;
      audio.play();
      audio.onended = () => {
        if (this.current !== times) {
          this.current++;
          setTimeout(() => {
            audio.play();
          }, seconds);
        } else {
          this.current = 0;
        }
      };
    },
  },
};
</script>
