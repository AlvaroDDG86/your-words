<template>
  <div id="app">
    <app-nav-bar-expand />
    <router-view />
    <app-footer />
    <notifications />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AppNavBarExpand from "@/components/AppNavBarExpand.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    "app-nav-bar-expand": AppNavBarExpand,
    "app-footer": AppFooter,
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    ...mapActions("words", ["getWords"]),
  },
  watch: {
    "user.loggedIn": {
      handler: function (newValue) {
        if (newValue) {
          this.$store.dispatch("auth/getUserConf", this.user.data.uid);
          this.$store.dispatch("words/getWords");
        }
      },
    },
    "user.conf.dark": {
      handler: function (val) {
        if (val) document.querySelector("html").classList.add("dark");
        else document.querySelector("html").classList.remove("dark");
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 400px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
