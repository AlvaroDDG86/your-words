<template>
  <div
    class="
      transition-all
      duration-200
      p-6
      text-gray-200
      bg-opacity-20 bg-blue-900
    "
  >
    <p v-if="showButtonSignup" class="mt-4">
      Don’t have an account yet?
      <span
        class="
          cursor-pointer
          transition-all
          duration-200
          text-xl
          font-bold
          text-blue-400
        "
        @click="$router.replace('/auth/signup')"
      >
        Create
      </span>
    </p>
    <p v-else-if="showButtonLogin" class="mt-4">
      Already have an account
      <span
        class="
          cursor-pointer
          transition-all
          duration-200
          text-xl
          font-bold
          text-blue-400
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
