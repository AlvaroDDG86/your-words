<template>
  <div class="top-8 relative min-h-screen pb-10">
    <div class="absolute top-0 inset-x-auto w-full z-10">
      <div class="w-full mx-auto shadow-md rounded-md p-4 bg-white">
        <div class="flex gap-2 flex-col md:flex-row center">
          <div class="relative flex-1">
            <input
              id="word"
              value=""
              name="word"
              type="text"
              class="
                peer
                h-10
                w-full
                border border-1.5
                rounded-md
                border-gray-300
                text-pink-900
                placeholder-transparent
                focus:outline-none focus:border-pink-600 focus:border-2
                p-3
              "
              placeholder="Word to search"
            />
            <label
              for="word"
              class="
                absolute
                left-2
                px-1
                -top-2.5
                bg-white
                text-pink-600 text-sm
                transition-all
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-pink-900
                peer-placeholder-shown:top-2
                peer-focus:-top-2.5 peer-focus:text-pink-600 peer-focus:text-sm
              "
              >Word or Expresion :</label
            >
          </div>
        </div>
        <div class="relative flex justify-center mt-6">
          <button
            class="
              bg-pink-900
              text-white
              font-extrabold
              text-lg
              rounded-full
              px-6
              py-3
            "
          >
            Search
          </button>
          <div class="absotule bottom-10 right-10">
            <toggle-button
              :value="true"
              :labels="{ checked: 'Favo', unchecked: 'Bar' }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full top-40 h-full mb-10">
      <Word
        :key="`word-${index}`"
        v-for="(word, index) in words"
        :word="word"
        :index="index"
        class="pt-10 border-b-2 border-gray-400 shadow-xl"
      />
    </div>
  </div>
</template>
<script>
import Word from "@/modules/words/components/Word";
import { mapGetters } from "vuex";
export default {
  name: "WordsNew",
  components: {
    Word,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("words", ["words"]),
  },
};
</script>
