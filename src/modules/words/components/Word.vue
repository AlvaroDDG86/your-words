<template>
  <div
    class="
      pt-10
      border-b-1 border-gray-400
      shadow-xl
      px-4
      sm:px-8
      lg:px-48
      transition-all
      duration-200
    "
  >
    <div
      class="
        text-blue-700
        dark:text-blue-400
        font-bold
        text-xl
        transition-all
        duration-200
      "
    >
      definition of '{{ word.word }}'
    </div>
    <h1
      class="
        text-5xl
        font-bold
        py-4
        dark:text-white
        transition-all
        duration-200
      "
    >
      {{ computedIndex }}. {{ word.word }}
      <small v-show="word.phonetic" class="font-light text-gray-600"
        >/{{ word.phonetic }}/</small
      >
    </h1>
    <Phonetics
      v-if="word.phonetics.length > 0 && word.phonetics[0].text"
      :phonetics="word.phonetics"
    />
    <div
      :key="`meaning-${indexMean}`"
      v-for="(meaning, indexMean) in word.meanings"
      class="py-4"
    >
      <h3
        v-if="meaning.definitions.length > 0"
        class="
          text-blue-900 text-3xl
          dark:text-white
          transition-all
          duration-200
        "
      >
        {{ indexMean + 1 }}.
        <span>{{
          meaning.partOfSpeech ? meaning.partOfSpeech : "Definition"
        }}</span
        >:
      </h3>
      <ul class="list-decimal m-2 sm:m-6">
        <li
          :key="`definition-${indexDef}`"
          v-for="(definition, indexDef) in meaning.definitions"
          class="
            text-left
            font-medium
            dark:text-white
            transition-all
            duration-200
          "
        >
          <span class="ml-4">{{ definition.definition }}</span>
          <div class="text-gray-600 ml-10 font-light italic">
            {{ definition.example }}
          </div>
          <TitleWithBox
            v-if="definition.synonyms.length > 0"
            title="Synonyms"
            :list="definition.synonyms"
          />
          <TitleWithBox
            v-if="definition.antonyms.length > 0"
            title="Antonyms"
            :list="definition.antonyms"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TitleWithBox from "@/modules/words/components/TitleWithBox";
import Phonetics from "@/modules/words/components/Phonetics";

export default {
  name: "Word",
  components: {
    TitleWithBox,
    Phonetics,
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
