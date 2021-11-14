<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6 bg-brand">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span
        @click="goLanding()"
        class="font-semibold text-white text-xl tracking-tight cursor-pointer"
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
      class="
        w-full
        sm:flex sm:items-center sm:w-auto
        transition-all
        duration-200
      "
    >
      <div v-if="user.loggedIn" class="text-sm sm:flex-grow mr-0 sm:mr-6">
        <router-link
          :to="{ path: link.path }"
          class="
            no-underline
            block
            sm:inline-block sm:mt-0
            text-teal-lighter
            hover:text-blue-200 hover:bg-blue-900 hover:shadow-md
            text-white
            transition-all
            duration-200
            text-xl
            font-bold
            uppercase
            px-2
            py-1
            rounded
          "
          v-for="link in links"
          v-bind:key="link.name"
        >
          {{ link.name }}
        </router-link>
      </div>
      <UserButton v-if="user.loggedIn" :image="getImage(user)" />
      <!-- <button
        v-if="user.loggedIn"
        to="/auth/login"
        @click="logout"
        v-popover:user
        :style="{
          backgroundImage: getImage(user),
        }"
        class="
          no-underline
          inline-block
          leading-none
          border
          text-white
          border-white
          hover:border-transparent hover:text-teal hover:bg-blue-900
          sm:mt-0
          transition-all
          duration-200
          rounded-full
          bg-no-repeat bg-center bg-cover
          w-12
          h-12
        "
      /> -->
      <div v-else>
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
            font-bold
            transition-all
            duration-200
            mr-4
          "
        >
          Login
        </router-link>
        <router-link
          to="/auth/signup"
          class="
            no-underline
            inline-block
            text-sm
            px-2
            py-1
            leading-none
            border
            rounded
            text-black
            border-white
            bg-yellow-200
            font-bold
            hover:border-transparent hover:text-teal hover:bg-yellow-600
            mt-4
            sm:mt-0
            transition-all
            duration-200
          "
        >
          Register
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import UserButton from "@/components/UserButton";
export default {
  name: "AppNavbarExpand",
  components: {
    UserButton,
  },
  data() {
    return {
      open: false,
      links: [
        {
          name: "Collection",
          path: "/words/list",
        },
        {
          name: "New Word",
          path: "/words/new",
        },
        {
          name: "Profile",
          path: "/auth/profile",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    getImage(user) {
      return user.data && user.data.photoURL
        ? `url(${user.data.photoURL})`
        : `url(${require("@/assets/avatar.png")})`;
    },
    goLanding() {
      this.$router.push("/").catch(() => {});
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  watch: {
    $route: {
      handler: function () {
        this.open = false;
      },
      immediate: true,
    },
  },
};
</script>
