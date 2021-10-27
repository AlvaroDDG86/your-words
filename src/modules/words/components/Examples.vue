<template>
  <div class="bg-gray-100 mx-10 my-6 rounded-lg shadow-lg">
    <h5 class="text-sm font-medium text-gray-900 block mb-2 pt-2 font-bold">
      Your examples:
    </h5>
    <div
      class="
        h-100
        w-full
        flex
        items-center
        justify-center
        bg-teal-lightest
        font-sans
      "
    >
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
        <div class="mb-4">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              class="
                input
                appearance-none
                bg-transparent
                w-full
                text-gray-700
                mr-3
                py-1
                rounded-md
                px-2
                leading-tight
                focus:ring-pink500 focus:border-pink-500
              "
              v-model="exampleType"
              type="text"
              placeholder="Type your example"
            />
            <button
              class="
                flex-shrink-0
                bg-teal-500
                hover:bg-teal-700
                border-teal-500
                hover:border-teal-700
                text-sm
                border-4
                bg-pink-500
                text-white
                py-1
                px-2
                rounded
              "
              :disabled="exampleType === ''"
              @click="addExample"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <Example
            :key="`example-${indexEx}`"
            v-for="(example, indexEx) in examples"
            class="flex mb-4 items-center"
            :example="example"
            @remove="removeExample"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Example from "@/modules/words/components/Example";
export default {
  name: "Examples",
  components: {
    Example,
  },
  data() {
    return {
      exampleType: "",
    };
  },
  props: {
    word: {
      type: Object,
      require: true,
      default: () => {},
    },
    examples: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addExample() {
      console.log(this.exampleType);
      this.examples.unshift(this.exampleType);
      this.exampleType = "";
    },
    removeExample(example) {
      console.log(this.word, example);
      // call the action
    },
  },
};
</script>
