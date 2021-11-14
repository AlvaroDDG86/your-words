<template>
  <div class="min-h-screen dark:bg-gray-800 transition-all duration-200">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Word",
  created() {
    this.getWords();
  },
  methods: {
    ...mapActions("words", ["getWords"]),
  },
};
</script>
