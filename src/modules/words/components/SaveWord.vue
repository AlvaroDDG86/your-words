<template>
  <div
    :class="{ 'justify-between': word.id, 'justify-end': !word.id }"
    class="bg-brand text-white py-4 px-10 flex"
  >
    <InfoDate
      v-if="word.id"
      :created="word.dateCreation"
      :updated="word.dateUpdate"
      :id="_uid"
    />
    <div>
      <button
        v-if="word.id"
        class="text-blue-900 bg-white font-extrabold text-lg rounded px-2 py-1"
        @click="$router.replace('/words/list')"
      >
        <v-icon name="arrow-circle-left" />
        <span class="hidden md:inline-block ml-2">List</span>
      </button>
      <button
        v-if="word.id"
        class="
          text-red-600
          bg-white
          font-extrabold
          text-lg
          rounded
          px-2
          py-1
          ml-4
        "
        @click="$modal.show('delete')"
      >
        <v-icon name="trash-alt" />
        <span class="hidden md:inline-block ml-2">Remove Word</span>
      </button>
      <button
        v-if="word.id"
        class="
          text-blue-900
          bg-white
          font-extrabold
          text-lg
          rounded
          px-2
          py-1
          ml-4
        "
        @click="saveUpdateWord"
      >
        <v-icon name="save" />
        <span class="hidden md:inline-block ml-2">Save Word</span>
      </button>
      <button
        v-else
        class="
          text-blue-900
          bg-white
          font-extrabold
          text-lg
          rounded
          px-2
          py-1
          ml-4
        "
        @click="addNewWord"
      >
        <v-icon name="save" />
        <span class="hidden md:inline-block ml-2">Add Word</span>
      </button>
    </div>
    <modal
      name="delete"
      class="my-notification"
      :adaptive="true"
      :height="'auto'"
      @before-close="removeCurrentWord"
    >
      <div>
        <h2 class="text-2xl mt-4 text-black">
          Delete word:
          <span class="font-bold text-blue-600">{{ wordComputed }}</span>
        </h2>
        <h3 class="text-xl text-black">Are you sure?</h3>
        <button
          @click="$modal.hide('delete', false)"
          class="
            font-normal
            text-white
            bg-blue-500
            m-4
            px-2
            py-1
            rounded
            shadow-lg
          "
        >
          Cancel
        </button>
        <button
          @click="$modal.hide('delete', true)"
          class="
            font-normal
            text-white
            bg-red-500
            m-4
            px-2
            py-1
            rounded
            shadow-lg
          "
        >
          Delete word
        </button>
      </div>
    </modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import InfoDate from "@/modules/words/components/InfoDate";
export default {
  name: "SaveWord",
  components: {
    InfoDate,
  },
  methods: {
    ...mapActions("words", [
      "saveWord",
      "updateWord",
      "removeWord",
      "getWords",
    ]),
    async addNewWord() {
      await this.saveWord();
      await this.getWords();
      // using options
      this.$notify({
        title: "Success",
        text: "New word has been added",
      });
    },
    async saveUpdateWord() {
      await this.updateWord();
      await this.getWords();
      this.$notify({
        title: "Success",
        text: "Word saved!",
        duration: 2000,
      });
    },
    async removeCurrentWord(event) {
      if (event.params) {
        await this.removeWord();
        await this.getWords();
        this.$router.replace("/words/list");
        this.$notify({
          title: "Success",
          text: `The Word ${this.wordComputed} has been removed!`,
          duration: 4000,
        });
      }
    },
  },
  computed: {
    ...mapGetters("words", ["word"]),
    wordComputed() {
      return this.word.list[0].word;
    },
  },
};
</script>
