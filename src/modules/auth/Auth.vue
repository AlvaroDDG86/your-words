<template>
  <div class="dark:bg-gray-800 transition-all duration-200 p-6">
    <p v-if="showButtonSignup" class="mt-4 dark:text-gray-200">
      Are you new here?
      <span
        class="
          cursor-pointer
          transition-all
          duration-200
          text-xl
          font-bold
          text-blue-600
        "
        @click="$router.replace('/auth/signup')"
      >
        Create account
      </span>
    </p>
    <p v-else-if="showButtonLogin" class="mt-4 dark:text-gray-200">
      Have you got an account?
      <span
        class="
          cursor-pointer
          transition-all
          duration-200
          text-xl
          font-bold
          text-blue-600
        "
        @click="$router.replace('/auth/login')"
      >
        Login
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
      showButtonSignup: false,
      showButtonLogin: false,
    };
  },
  watch: {
    $route: {
      handler: function (to) {
        this.showButtonSignup = to.path.includes("login");
        this.showButtonLogin = to.path.includes("signup");
      },
      immediate: true,
    },
  },
};
</script>
