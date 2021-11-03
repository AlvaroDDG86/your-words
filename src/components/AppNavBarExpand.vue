<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-teal p-6 header__nav"
  >
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-white text-xl tracking-tight"
        >Your Words!</span
      >
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-teal-lighter
          border-teal-light
          text-white
          hover:text-blue-200 hover:border-blue-200 hover:bg-blue-900
        "
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-sm sm:flex-grow">
        <router-link
          :to="{ path: link.path }"
          class="
            no-underline
            block
            mt-4
            sm:inline-block sm:mt-0
            text-teal-lighter
            hover:text-
            text-white
            mr-4
            text-xl
            font-bold
            uppercase
          "
          v-for="link in links"
          v-bind:key="link.name"
        >
          {{ link.name }}
        </router-link>
      </div>
      <div>
        <router-link
          to="/auth/login"
          class="
            no-underline
            inline-block
            text-sm
            px-2
            py-1
            leading-none
            border
            rounded
            text-white
            border-white
            hover:border-transparent hover:text-teal hover:bg-blue-900
            mt-4
            sm:mt-0
          "
        >
          Logout
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      open: false,
      links: [
        {
          name: "Mi List",
          path: "/words/list",
        },
        {
          name: "New Word",
          path: "/words/new",
        },
        {
          name: "My profile",
          path: "/auth/login",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
.header__nav {
  background-image: url("../assets/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
