<template>
  <div class="pt-10 border-b-2 border-gray-400 shadow-xl">
    <div class="text-pink-700 font-bold text-xl">
      definition of '{{ word.word }}'
    </div>
    <h1 class="text-5xl font-bold py-4">
      {{ computedIndex }}. {{ word.word }}
      <small v-show="word.phonetic" class="font-light text-gray-500"
        >/{{ word.phonetic }}/</small
      >
    </h1>
    <template v-if="word.phonetics.length > 0 && word.phonetics[0].text">
      <div class="bg-gray-200 py-4 shadow-md">
        <h3 class="text-3xl">Phonetics:</h3>
        <div
          :key="`phonetic-${indexPho}`"
          v-for="(phonetic, indexPho) in word.phonetics"
          class="flex justify-center items-center"
        >
          <span class="text-2xl mr-5">{{ phonetic.text }}</span>
          <audio :src="phonetic.audio" preload="auto" ref="audio" controls>
            <p>Your browser does not support the <code>audio</code> element.</p>
          </audio>
        </div>
      </div>
    </template>
    <div
      :key="`meaning-${indexMean}`"
      v-for="(meaning, indexMean) in word.meanings"
      class="py-4"
    >
      <h3 v-if="meaning.definitions.length > 0" class="text-3xl">
        Definition {{ indexMean + 1 }}:
      </h3>
      <ul class="list-decimal">
        <li
          :key="`definition-${indexDef}`"
          v-for="(definition, indexDef) in meaning.definitions"
          class="text-left ml-10 font-medium"
        >
          {{ definition.definition }}
          <div class="text-gray-400 ml-20 font-light italic">
            {{ definition.example }}
          </div>
          <div
            v-if="definition.synonyms.length > 0"
            class="flex justify-center items-center"
          >
            <span class="text-5x1 text-gray-500 font-bold mr-10"
              >Synonyms:
            </span>
            <div
              class="
                bg-gray-100
                p-1
                flex flex-wrap
                justify-center
                m-3
                rounded-2xl
                shadow-md
              "
            >
              <span
                :key="`syn-${indexSyn}`"
                v-for="(syn, indexSyn) in definition.synonyms"
                class="py-1 px-1 rounded-2xl border-gray-400 bg-white m-1"
                >{{ syn }}</span
              >
            </div>
          </div>
          <div
            v-if="definition.antonyms.length > 0"
            class="flex justify-center items-center"
          >
            <span class="text-5x1 text-gray-500 font-bold mr-10"
              >Antonyms:
            </span>
            <div class="bg-gray-100 p-1 flex flex-wrap justify-center">
              <span
                :key="`ant-${indexAnd}`"
                v-for="(ant, indexAnd) in definition.antonyms"
                class="py-1 px-1 rounded-2xl border-gray-400 bg-white m-1"
                >{{ ant }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Examples :word="word" :examples="[]" />
    <div class="mx-10 my-6">
      <label
        for="annotation"
        class="text-sm font-medium text-gray-900 block mb-2"
        >Your annotations for
        <span class="font-bold">'{{ word.word }}'</span>:</label
      >
      <textarea
        id="annotation"
        rows="4"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900
          sm:text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
        "
        placeholder="Leave your annotations..."
      ></textarea>
    </div>
  </div>
</template>
<script>
import Examples from "@/modules/words/components/Examples";
export default {
  components: {
    Examples,
  },
  props: {
    word: {
      type: Object,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
  },
  computed: {
    computedIndex() {
      return this.index + 1;
    },
  },
};
</script>
