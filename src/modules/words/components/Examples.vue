<template>
  <div
    class="
      bg-gray-200
      dark:bg-gray-800
      mx-2
      sm:mx-10
      my-6
      rounded-lg
      shadow-lg
      transition-all
      duration-200
    "
  >
    <h5
      class="
        text-s
        dark:text-white
        text-gray-900
        block
        mb-2
        pt-2
        transition-all
        duration-200
        font-bold
      "
    >
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
      <div class="bg-white rounded shadow p-6 m-4 w-full">
        <div class="mb-4">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              @keyup.enter="addExample"
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
                focus:ring-blue500 focus:border-blue-500
              "
              v-model="exampleType"
              type="text"
              placeholder="Type your example"
            />
            <AppButton
              :disabled="exampleType === ''"
              type="secondary"
              size="s"
              @click="addExample"
            >
              <v-icon name="plus" />
            </AppButton>
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
      if (this.exampleType === "") return;
      this.examples.unshift(this.exampleType);
      this.exampleType = "";
    },
    removeExample(example) {
      this.examples.splice(this.examples.indexOf(example), 1);
    },
  },
};
</script>
