<template>
  <div id="app" class="m-0 xl:mx-24">
    <app-nav-bar-expand />
    <transition name="fade">
      <router-view :key="$route.path" />
    </transition>
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
  min-width: 350px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
