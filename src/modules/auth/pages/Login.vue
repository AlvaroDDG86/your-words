<template>
  <div
    class="
      bg-brand
      w-80
      mx-auto
      my-4
      px-6
      py-6
      shadow-2xl
      rounded-2xl
      text-white
    "
  >
    <h1 class="font-bold font-sans text-4xl text-center">Login</h1>
    <div class="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>
    <form action="#" @submit.prevent="submit">
      <div class="flex flex-col my-5">
        <label class="my-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          name="email"
          required
          class="
            mt-1
            mb-3
            shadow-md
            border-none
            focus:ring-transparent
            rounded-sm
            bg-gray-100
            text-blue-500
          "
        />
        <label class="my-2" for="psw">Password</label>
        <input
          type="password"
          id="psw"
          name="psw"
          v-model="form.password"
          required
          class="
            mt-1
            mb-3
            shadow-md
            border-none
            focus:ring-transparent
            rounded-sm
            bg-gray-100
            text-blue-500
          "
        />
        <div class="text-right cursor-pointer text-sm">password recovery</div>
      </div>
      <div class="flex flex-col items-center text-center mt-3">
        <button
          type="submit"
          class="
            px-3
            py-2
            my-2
            self-stretch
            font-semibold
            text-gray-800
            bg-white
            rounded
          "
        >
          Submit
        </button>
        <button
          type="button"
          @click="submitGoogle"
          class="
            px-4
            py-2
            self-stretch
            font-semibold
            text-white
            bg-red-600
            rounded
          "
        >
          <v-icon name="brands/google" />
        </button>
      </div>
    </form>
    <div
      v-if="error"
      class="px4 py-2 text-red-900 rounded-md bg-red-300 mt-4 bg-opacity-80"
    >
      {{ error }}
    </div>
  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    ...mapActions("auth", ["loginGoogle"]),
    submit() {
      const loader = this.$loading.show();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
              loader.hide();
              this.$router.push("/words/list");
            });
        })
        .catch((err) => {
          loader.hide();
          this.error = err.message;
        });
    },
    submitGoogle() {
      const loader = this.$loading.show();
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          loader.hide();
          this.$router.push("/words/list");
        })
        .catch((err) => {
          loader.hide();
          this.error = err.message;
        });
    },
  },
};
</script>
<style lang="sass" scoped></style>
