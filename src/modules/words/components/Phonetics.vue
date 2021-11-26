<template>
  <div class="bg-gray-200 py-4 shadow-md rounded-2xl relative">
    <div
      @click="$router.replace('/auth/profile')"
      class="
        hidden
        sm:block
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
      <Audio
        v-if="phonetic.audio && phonetic.text"
        :audio="phonetic.audio"
        :times="times"
        :seconds="seconds"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Audio from "@/modules/words/components/Audio";
export default {
  name: "Phonetics",
  components: {
    Audio,
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
