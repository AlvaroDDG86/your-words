<template>
  <ul class="w-full text-right p-4 pr-4 font-semibold bg-gray-100">
    <router-link
      :to="{ path: link.path }"
      class="inline mx-2 text-pink-600 hover:text-pink-400 cursor-pointer"
      v-for="link in links"
      v-bind:key="link.name"
    >
      {{ link.name }}
    </router-link>
    <router-link
      :to="{ path: '/auth/login' }"
      class="inline mx-2 text-pink-600 hover:text-pink-400 cursor-pointer"
    >
      Logout
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
      ],
    };
  },
};
</script>

<style></style>
