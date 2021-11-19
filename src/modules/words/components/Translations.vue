<template>
  <div class="mx-2 sm:mx-10 my-6">
    <label
      for="translation"
      class="text-s text-gray-900 dark:text-gray-200 block mb-2 font-bold"
      >Translate to your languaje:</label
    >
    <textarea
      id="translation"
      rows="4"
      :value="translation"
      @change="updateVal"
      class="
        bg-gray-50
        border border-blue-300
        text-gray-900
        sm:text-sm
        rounded-lg
        focus:ring-blue500 focus:border-blue-500
        block
        w-full
      "
      placeholder="Your translation..."
    ></textarea>
    <button
      @click="getTranslate"
      class="text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-xl mt-2"
    >
      Translate <span class="font-bold">({{ user.conf.lang }})</span>
    </button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Annotation",
  props: {
    translation: {
      type: String,
      require: true,
    },
  },
  methods: {
    ...mapActions("words", ["getTranslate"]),
    updateVal(event) {
      this.$emit("updateValue", event.target.value);
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>
