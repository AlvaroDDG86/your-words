<template>
  <div class="inline-block">
    <button
      v-popover:user
      :style="{
        backgroundImage: image,
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
        group
      "
    ></button>
    <popover name="user" :pointer="true" :width="90">
      <div class="flex flex-col">
        <button
          class="
            font-bold
            text-blue-600
            h-10
            hover:bg-blue-500 hover:text-white
          "
          @click="toggle"
        >
          <span v-if="mode"><v-icon name="sun" /> Light</span>
          <span v-else><v-icon name="moon" /> Dark</span>
        </button>
        <button
          class="
            font-bold
            text-blue-600
            h-10
            hover:bg-blue-500 hover:text-white
          "
          @click="logout"
        >
          <v-icon name="sign-out-alt" /> Logout
        </button>
      </div>
    </popover>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import firebase from "firebase/compat/app";
export default {
  name: "UserButton",
  data() {
    return {
      mode: false,
    };
  },
  mounted() {
    if (localStorage.darkMode) {
      this.mode = localStorage.darkMode === "dark";
      if (this.mode) document.querySelector("html").classList.toggle("dark");
    }
  },
  watch: {
    mode: {
      handler: function (newValue) {
        console.log(newValue);
        localStorage.darkMode = newValue ? "dark" : "ligth";
      },
    },
  },
  props: {
    image: {
      type: String,
      require: true,
    },
  },
  methods: {
    ...mapActions("words", ["clearList"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.clearList();
          this.$router.push("/").catch(() => {});
        });
    },
    toggle() {
      this.mode = !this.mode;
      document.querySelector("html").classList.toggle("dark");
    },
  },
};
</script>
