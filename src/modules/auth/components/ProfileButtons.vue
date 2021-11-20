<template>
  <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
    <div class="flex flex-col md:flex-row justify-center">
      <button
        @click="$modal.show('new-password')"
        class="
          font-normal
          text-white
          bg-blue-900
          m-4
          px-2
          py-1
          rounded
          shadow-lg
        "
      >
        Change password
      </button>
      <button
        @click="logout"
        class="
          font-normal
          text-white
          bg-blue-900
          m-4
          px-2
          py-1
          rounded
          shadow-lg
        "
      >
        Logout
      </button>
      <button
        class="
          font-normal
          text-white
          bg-red-500
          m-4
          px-2
          py-1
          rounded
          shadow-lg
        "
      >
        Remove Account
      </button>
    </div>
    <modal
      name="new-password"
      class="my-notification"
      :adaptive="true"
      :height="'auto'"
    >
      <div>
        <h2 class="text-2xl mt-4 text-black">Set new password</h2>
        <div class="flex flex-col px-16">
          <label class="my-2 text-gray-700" for="email">New password:</label>
          <input
            autocomplete="off"
            type="password"
            id="password"
            v-validate="'required'"
            v-model="password"
            name="password"
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
          <div class="text-gray-700 text-sm uppercase">
            {{ passwordMessage }}
          </div>
        </div>
        <button
          @click="closeModal"
          class="font-normal text-blue-500 m-4 px-2 py-1 rounded shadow-lg"
        >
          Close
        </button>
        <button
          @click="changePassword"
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
import { mapActions } from "vuex";
import WordsServices from "@/modules/auth/services/index";
export default {
  data() {
    return {
      password: "",
      passwordMessage: "",
    };
  },
  methods: {
    ...mapActions("words", ["clearList"]),
    changePassword() {
      if (this.password) {
        WordsServices.setNewPassword(this.password)
          .then(() => {
            this.password = "";
            this.passwordMessage = "You have set a new password";
            setTimeout(() => {
              this.closeModal();
            }, 3000);
          })
          .catch((error) => {
            this.passwordMessage = error.message;
          });
      }
    },
    closeModal() {
      this.password = "";
      this.passwordMessage = "";
      this.$modal.hide("new-password");
    },
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
