<template>
  <ul
    class="
      sticky
      top-0
      w-full
      text-right
      p-4
      pr-4
      font-semibold
      bg-gray-100
      z-20
    "
  >
    <router-link
      :to="{ path: link.path }"
      class="inline mx-2 text-blue-600 hover:text-blue-400 cursor-pointer"
      v-for="link in links"
      v-bind:key="link.name"
    >
      {{ link.name }}
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
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
          name: "Logout",
          path: "/auth/login",
        },
      ],
    };
  },
};
</script>

<style></style>
