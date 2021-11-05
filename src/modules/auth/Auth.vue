<template>
  <div class="flex flex-col justify-center items-center">
    <p v-if="showButton" class="mt-4">
      Are you new here?
      <span
        class="text-blue-700 cursor-pointer transition-all duration-200 text-lg"
        @click="$router.replace('/auth/singup')"
      >
        Create account
      </span>
    </p>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Auth",
  data() {
    return {
      showButton: false,
    };
  },
  watch: {
    $route: {
      handler: function (to) {
        this.showButton = to.path.includes("login");
      },
      immediate: true,
    },
  },
};
</script>
