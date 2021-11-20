<template>
  <div class="bg-gray-200 py-4 shadow-md rounded-2xl relative">
    <div
      @click="$router.replace('/auth/profile')"
      class="
        text-sm
        absolute
        top-3
        right-5
        bg-gray-600
        text-white
        py-1
        px-4
        rounded-xl
        shadow-xl
        cursor-pointer
      "
    >
      <span class="mr-4"><v-icon name="redo-alt" /> {{ times }}</span>
      <span><v-icon name="hourglass-half" /> {{ seconds }}</span>
    </div>
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
        v-if="phonetic.audio && phonetic.text"
        :src="phonetic.audio"
        preload="auto"
        ref="audio"
        controls
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
      <div
        v-if="phonetic.audio && phonetic.text"
        :class="{ 'text-gray-500 pulse-blue': current !== 0 }"
        class="
          flex
          justify-evenly
          items-center
          w-16
          px-2
          py-2
          rounded-xl
          shadow-2xl
          bg-blue-600
          text-white
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
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters("auth", ["user"]),
    times() {
      return parseInt(this.user.conf.audio.times);
    },
    seconds() {
      return this.user.conf.audio.seconds;
    },
  },
  methods: {
    play() {
      const audio = this.$refs.audio[0];
      let seconds = this.seconds * 1000;
      this.current = 1;
      audio.play();
      audio.onended = () => {
        if (this.current !== this.times) {
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
