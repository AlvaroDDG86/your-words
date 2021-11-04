<template>
  <div class="pt-10 border-b-1 border-gray-400 shadow-xl">
    <div class="text-blue-700 font-bold text-xl">
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
    <div
      :key="`meaning-${indexMean}`"
      v-for="(meaning, indexMean) in word.meanings"
      class="py-4"
    >
      <h3 v-if="meaning.definitions.length > 0" class="text-blue-900 text-3xl">
        {{ indexMean + 1 }}.
        <span>{{
          meaning.partOfSpeech ? meaning.partOfSpeech : "Definition"
        }}</span
        >:
      </h3>
      <ul class="list-decimal m-6">
        <li
          :key="`definition-${indexDef}`"
          v-for="(definition, indexDef) in meaning.definitions"
          class="text-left font-medium"
        >
          <span class="ml-4">{{ definition.definition }}</span>
          <div class="text-gray-400 ml-10 font-light italic">
            {{ definition.example }}
          </div>
          <div
            v-if="definition.synonyms.length > 0"
            class="flex justify-start items-center flex-col"
          >
            <span class="text-5x1 text-gray-500 font-bold mr-10"
              >Synonyms:
            </span>
            <div
              class="
                bg-gray-100
                p-1
                flex flex-wrap
                justify-start
                m-3
                rounded-2xl
                shadow-md
                w-full
              "
            >
              <span
                :key="`syn-${indexSyn}`"
                v-for="(syn, indexSyn) in definition.synonyms"
                class="py-1 px-1 text-blue-900 m-1"
                >{{ syn
                }}{{
                  definition.synonyms.length - 1 === indexSyn ? "." : ","
                }}</span
              >
            </div>
          </div>
          <div
            v-if="definition.antonyms.length > 0"
            class="flex flex-col justify-start items-center"
          >
            <span class="text-5x1 text-gray-500 font-bold mr-10"
              >Antonyms:
            </span>
            <div
              class="
                bg-gray-100
                p-1
                flex flex-wrap
                justify-start
                m-3
                rounded-2xl
                shadow-md
                w-full
              "
            >
              <span
                :key="`ant-${indexAnd}`"
                v-for="(ant, indexAnd) in definition.antonyms"
                class="py-1 px-1 text-blue-900 m-1"
                >{{ ant
                }}{{
                  definition.antonyms.length - 1 === indexAnd ? "." : ","
                }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Word",
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
