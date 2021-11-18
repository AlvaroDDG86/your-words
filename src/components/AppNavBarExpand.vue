<template>
  <nav
    :class="{ animated: open }"
    class="
      flex
      items-center
      justify-between
      flex-wrap
      bg-teal
      px-6
      py-4
      bg-brand
      z-10
    "
  >
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <div
        @click="goLanding()"
        :class="{
          'absolute w-full top-24 flex justify-center items-center': open,
        }"
        class="font-semibold text-white text-xl tracking-tight cursor-pointer"
      >
        <img
          :class="{ 'max-h-40': open }"
          class="max-h-20"
          src="@/assets/logo.png"
          alt="Logo"
        />
      </div>
    </div>
    <div class="block lg:hidden">
      <button
        @click="toggle"
        class="
          flex
          items-center
          px-3
          py-2
          rounded
          text-teal-lighter text-white
          hover:text-blue-200 hover:bg-blue-900
        "
      >
        <v-icon :name="open ? 'times' : 'bars'" scale="2" />
      </button>
    </div>
    <div
      :class="
        open ? 'menu-all flex justify-center items-center flex-col' : 'hidden'
      "
      class="relative w-full lg:flex lg:items-center lg:w-auto"
    >
      <div v-if="user.loggedIn" class="text-sm lg:flex-grow mr-0 lg:mr-6">
        <router-link
          :to="{ path: link.path }"
          :class="{ 'my-8': open }"
          class="
            no-underline
            block
            lg:inline-block lg:mt-0
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
            lg:mt-0
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
            bg-green-200
            font-bold
            hover:border-transparent hover:text-white hover:bg-green-600
            mt-4
            lg:mt-0
            transition-all
            duration-200
          "
        >
          New Account
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
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      this.open = false;
    },
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
<style>
.menu-all {
  height: calc(100vh - 78px);
}
</style>
