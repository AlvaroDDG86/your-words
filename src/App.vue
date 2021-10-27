<template>
  <div id="app" class="flex flex-col justify-between items-stretch">
    <app-nav-bar />
    <div class="flex-grow pt-10">
      <router-view />
    </div>
    <!-- <app-footer /> -->
  </div>
</template>
<script>
import AppNavBar from "@/components/AppNavBar.vue";
// import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    "app-nav-bar": AppNavBar,
    // "app-footer": AppFooter,
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
