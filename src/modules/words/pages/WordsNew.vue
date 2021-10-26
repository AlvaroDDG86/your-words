<template>
  <div class="top-8 relative min-h-screen pb-10">
    <div class="absolute top-0 inset-x-auto w-full z-10">
      <div class="w-full fixed mx-auto shadow-md rounded-md p-4 bg-white">
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
        <div class="flex justify-center mt-6">
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
        </div>
      </div>
    </div>
    <div class="absolute w-full top-40 h-full mb-10">
      <div
        :key="`word-${index}`"
        v-for="(word, index) in words"
        class="pt-10 border-b-2 border-gray-400 shadow-xl"
      >
        <div class="text-pink-700 font-bold text-xl">
          definition of '{{ word.word }}'
        </div>
        <h1 class="text-5xl font-bold py-4">
          {{ index + 1 }}. {{ word.word }}
          <small v-show="word.phonetic" class="font-light text-gray-500"
            >/{{ word.phonetic }}/</small
          >
        </h1>
        <template v-if="word.phonetics.length > 0 && word.phonetics[0].text">
          <div class="bg-gray-200 py-4 shadow-md">
            <h3 class="text-3xl">Phonetics</h3>
            <div
              :key="`phonetic-${indexPho}`"
              v-for="(phonetic, indexPho) in word.phonetics"
              class="flex justify-center items-center"
            >
              <span class="text-2xl mr-5">{{ phonetic.text }}</span>
              <audio :src="phonetic.audio" preload="auto" ref="audio" controls>
                <p>
                  Your browser does not support the <code>audio</code> element.
                </p>
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
            Definitions
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WordsNew",
  data() {
    return {
      words: [
        {
          word: "take out",
          phonetics: [{}],
          meanings: [
            {
              definitions: [
                {
                  definition:
                    "escort someone to a social event or place of entertainment.",
                  example: "I took her out to dinner the following night",
                  synonyms: [],
                  antonyms: [],
                },
                {
                  definition: "obtain an official document or service.",
                  example: "you can take out a loan for a specific purchase",
                  synonyms: [],
                  antonyms: [],
                },
                {
                  definition:
                    "relieve frustration or anger by attacking or mistreating a person or thing not responsible for such feelings.",
                  example: "my parents always take their anger out on me",
                  synonyms: [],
                  antonyms: [],
                },
                {
                  definition:
                    "buy food at a cafe or restaurant for eating elsewhere.",
                  example: "he ordered a lamb madras to take out",
                  synonyms: [],
                  antonyms: [],
                },
                {
                  definition: "kill, destroy, or disable someone or something.",
                  example: "some say the Mob took him out for crossing them",
                  synonyms: [
                    "kill",
                    "murder",
                    "assassinate",
                    "put to death",
                    "do away with",
                    "put an end to",
                    "get rid of",
                    "dispatch",
                    "execute",
                    "finish off",
                    "eliminate",
                    "exterminate",
                    "terminate",
                    "destroy",
                    "obliterate",
                    "annihilate",
                    "do in",
                    "bump off",
                    "rub out",
                    "wipe out",
                    "hit",
                    "mow down",
                    "top",
                    "slay",
                  ],
                  antonyms: [],
                },
                {
                  definition:
                    "respond to a bid or double by one's partner by bidding a different suit.",
                  example:
                    "most players would take their partners out into 4♥ on these hands",
                  synonyms: [],
                  antonyms: [],
                },
              ],
            },
          ],
        },
        {
          word: "takeout",
          phonetic: "ˈteɪkaʊt",
          phonetics: [
            {
              text: "ˈteɪkaʊt",
              audio:
                "//ssl.gstatic.com/dictionary/static/sounds/20200429/takeout--_gb_1.mp3",
            },
          ],
          meanings: [
            {
              partOfSpeech: "noun",
              definitions: [
                {
                  definition:
                    "food that is cooked and sold by a restaurant or store to be eaten elsewhere; takeaway.",
                  synonyms: [],
                  antonyms: [],
                },
                {
                  definition:
                    "a bid (in a different suit) made in response to a bid or double by one's partner.",
                  example:
                    "I doubled for takeout, eliciting a 4NT reply from Robson",
                  synonyms: [],
                  antonyms: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
