<template>
  <div
    class="
      mx-2
      p-2
      sm:mx-10
      my-6
      bg-gray-200
      dark:bg-gray-800
      rounded-lg
      shadow-lg
    "
  >
    <label
      for="annotation"
      class="text-s text-gray-900 dark:text-gray-200 block mb-2 font-bold"
      >Your annotations:</label
    >
    <div class="bg-white">
      <vue-editor
        :value="annotations"
        :editor-toolbar="customToolbar"
        @input="updateVal"
        placeholder="Type your annotations"
      ></vue-editor>
    </div>
  </div>
</template>
<script>
export default {
  name: "Annotation",
  data() {
    return {
      customToolbar: [
        ["bold", "italic", "underline"],
        ["blockquote", "code-block"],
        [
          {
            color: [
              "blue",
              "red",
              "green",
              "orange",
              "pink",
              "chartreuse",
              "yellow",
            ],
          },
        ],
        [
          {
            align: "",
          },
          {
            align: "center",
          },
          {
            align: "right",
          },
          {
            align: "justify",
          },
        ],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    };
  },
  props: {
    annotations: {
      type: String,
      require: true,
    },
  },
  methods: {
    updateVal(event) {
      this.$emit("updateValue", event);
    },
  },
};
</script>
