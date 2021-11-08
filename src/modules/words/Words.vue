<template>
  <div class="pb-16">
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
