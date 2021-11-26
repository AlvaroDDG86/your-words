<template>
  <div>
    <audio class="hidden" :src="audio" preload="auto" ref="audio" controls>
      <p>Your browser does not support the <code>audio</code> element.</p>
    </audio>
    <div
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
    times: {
      type: Number,
      default: 1,
    },
    seconds: {
      type: String,
      default: "1",
    },
    audio: {
      type: String,
      required: true,
    },
  },
  methods: {
    play() {
      const audio = this.$refs.audio;
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
