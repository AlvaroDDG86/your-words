<template>
  <div class="flex justify-center items-center">
    <AppButton @click="logout">
      <v-icon name="sign-out-alt" /> Logout
    </AppButton>
    <button
      @click="$router.replace('/auth/profile')"
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
  </div>
</template>
<script>
import { mapActions } from "vuex";
import firebase from "firebase/compat/app";
export default {
  name: "UserButton",
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
        });
    },
  },
};
</script>
