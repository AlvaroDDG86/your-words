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
    <button
      type="button"
      @click="submitGoogle"
      class="
        w-full
        px-4
        py-2
        mb-6
        self-stretch
        font-semibold
        bg-white
        rounded
        flex
        justify-center
        items-center
      "
    >
      <img class="w-7" :src="require('@/assets/icons8-google-48.png')" alt="" />
    </button>
    <h1 class="font-bold font-sans text-4xl text-center">New Account</h1>
    <div class="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>
    <form action="#" @submit.prevent="submit">
      <div class="flex flex-col my-5">
        <label class="my-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-validate="'required|email'"
          v-model="form.email"
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
        <span
          v-show="errors.has('email')"
          class="text-red-600 upercase font-bold"
          >{{ errors.first("email") }}</span
        >
        <label class="my-2" for="name">User Name</label>
        <input
          type="text"
          id="name"
          name="name"
          v-validate="'required'"
          v-model="form.name"
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
        <span
          v-show="errors.has('name')"
          class="text-red-600 upercase font-bold"
          >{{ errors.first("name") }}</span
        >
        <label class="my-2" for="psw">Password</label>
        <input
          type="password"
          name="password"
          v-model="form.password"
          v-validate="'required'"
          ref="password"
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
        <span
          v-show="errors.has('password')"
          class="text-red-600 upercase font-bold"
          >{{ errors.first("password") }}</span
        >
        <label class="my-2" for="psw">Password Confirmation</label>
        <input
          type="password"
          v-validate="'required|confirmed:password'"
          name="password_confirmation"
          v-model="form.repeatPassword"
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
        <span
          v-show="errors.has('password_confirmation')"
          class="text-red-600 upercase font-bold"
          >{{ errors.first("password_confirmation") }}</span
        >
        <p class="text-left">
          By registering you agree to our
          <span class="text-bold cursor-pointer underline">Privacy Policy</span>
          and
          <span class="text-bold cursor-pointer underline"
            >Terms & Conditions.</span
          >
        </p>
      </div>
      <div class="flex flex-col items-center text-center mt-3">
        <button
          type="submit"
          class="
            px-3
            py-3
            my-2
            self-stretch
            font-semibold
            text-white
            bg-green-500
            rounded
          "
        >
          Submit
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
  name: "Signup",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      error: null,
    };
  },
  methods: {
    ...mapActions("auth", ["setNewUser"]),
    submit() {
      this.$validator.validate().then((valid) => {
        if (valid) {
          const loader = this.$loading.show();
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then((data) => {
              data.user
                .updateProfile({
                  displayName: this.form.name,
                })
                .then(() => {
                  loader.hide();
                  this.setNewUser();
                  this.$router.push("/words/list");
                });
            })
            .catch((err) => {
              loader.hide();
              this.error = err.message;
            });
        }
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
          this.setNewUser();
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
