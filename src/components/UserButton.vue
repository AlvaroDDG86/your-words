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
