<template>
  <div
    v-if="showPage"
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
    <h1 class="font-bold font-sans text-4xl text-center">Login</h1>
    <div class="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>
    <form action="#" @submit.prevent="submit">
      <div class="flex flex-col my-5">
        <label class="my-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          v-validate="'required|email'"
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
        <span
          v-show="errors.has('email')"
          class="text-red-600 upercase font-bold"
          >{{ errors.first("email") }}</span
        >
        <label class="my-2" for="psw">Password</label>
        <input
          type="password"
          v-validate="'required'"
          id="psw"
          name="password"
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
        <span
          v-show="errors.has('password')"
          class="text-red-600 upercase font-bold"
          >{{ errors.first("password") }}</span
        >
        <div
          @click="$modal.show('recovery')"
          class="text-right cursor-pointer text-sm"
        >
          password recovery
        </div>
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
    <modal
      name="recovery"
      class="my-notification"
      :adaptive="true"
      :height="'auto'"
    >
      <div>
        <h2 class="text-2xl mt-4 text-black">Recovery password</h2>
        <div class="flex flex-col px-16">
          <label class="my-2 text-gray-700" for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-validate="'required|email'"
            v-model="emailRecovery"
            name="emailRecovery"
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
          <span
            v-show="errors.has('emailRecovery')"
            class="text-red-600 upercase font-bold"
            >{{ errors.first("emailRecovery") }}</span
          >
          <div class="text-gray-700 text-sm uppercase">
            {{ emailRecoveryMessage }}
          </div>
        </div>
        <button
          @click="closeModal"
          class="font-normal text-blue-500 m-4 px-2 py-1 rounded shadow-lg"
        >
          Close
        </button>
        <button
          @click="sendEmailRecovery"
          class="
            font-normal
            text-white
            bg-blue-500
            m-4
            px-2
            py-1
            rounded
            shadow-lg
          "
        >
          Send
        </button>
      </div>
    </modal>
  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import WordsServices from "@/modules/auth/services/index";
import ControlFlowAuth from "@/mixins/ControlFlowAuth";
import { mapActions } from "vuex";
export default {
  name: "Login",
  mixins: [ControlFlowAuth],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
      emailRecovery: "",
      emailRecoveryMessage: "",
    };
  },
  methods: {
    ...mapActions("auth", ["loginGoogle"]),
    submit() {
      this.$validator.validate().then((valid) => {
        if (valid) {
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
          this.$router.push("/words/list");
        })
        .catch((err) => {
          loader.hide();
          this.error = err.message;
        });
    },
    sendEmailRecovery() {
      if (this.emailRecovery) {
        WordsServices.recoveryPassword(this.emailRecovery)
          .then(() => {
            this.emailRecovery = "";
            this.emailRecoveryMessage =
              "We have send you an email with the instructions for recovery password";
            setTimeout(() => {
              this.closeModal();
            }, 3000);
          })
          .catch((error) => {
            this.emailRecoveryMessage = error.message;
          });
      }
    },
    closeModal() {
      this.emailRecovery = "";
      this.emailRecoveryMessage = "";
      this.$modal.hide("recovery");
    },
  },
};
</script>
<style lang="sass" scoped></style>
