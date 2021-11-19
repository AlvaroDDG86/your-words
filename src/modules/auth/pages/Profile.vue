<template>
  <section v-if="user.data">
    <div class="w-full px-2">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          bg-white
          dark:bg-gray-400 dark:text-gray-200
          w-full
          shadow-xl
          rounded-lg
        "
      >
        <div class="px-6">
          <div
            class="
              mt-16
              shadow-2xl
              p-2
              rounded-xl
              bg-gray-100
              dark:bg-gray-700
              flex flex-wrap
              justify-center
            "
          >
            <div class="relative w-full px-4 flex justify-center">
              <div
                :style="{
                  backgroundImage: getImage(user),
                }"
                class="
                  shadow-xl
                  rounded-full
                  align-middle
                  absolute
                  -m-16
                  -ml-16
                  w-40
                  h-40
                  max-w-200-px
                  border-4 border-blue-600
                  bg-black bg-no-repeat bg-center bg-cover
                "
              >
                <label
                  class="
                    text-blue-600
                    bg-white
                    hover:text-white hover:bg-blue-600
                    transition-all
                    duration-200
                    px-2
                    py-1
                    cursor-pointer
                    rounded-full
                    absolute
                    bottom-1
                    right-1
                    z-10
                  "
                  for="picture"
                >
                  <v-icon
                    :name="updateValue ? 'spinner' : 'pen'"
                    :spin="!!updateValue"
                  />
                </label>
                <input
                  class="hidden"
                  id="picture"
                  type="file"
                  accept="image/*"
                  @change="onUpload"
                />
              </div>
            </div>
            <div class="w-full px-4 text-center mt-32">
              <h3
                class="
                  text-xl
                  font-semibold
                  leading-normal
                  mb-2
                  text-blueGray-700
                "
              >
                {{ user.data.displayName }}
              </h3>
              <div
                class="
                  text-sm
                  leading-normal
                  mt-0
                  mb-2
                  text-blueGray-400
                  font-bold
                "
              >
                <i
                  class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                ></i>
                {{ user.data.email }}
              </div>
              <div class="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                <span class="font-bold text-blue-700 dark:text-blue-200"
                  >Last login:</span
                >
                {{
                  new Date(user.data.metadata.lastSignInTime).toLocaleString()
                }}
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                <span class="font-bold text-blue-700 dark:text-blue-200"
                  >User from:</span
                >
                {{ new Date(user.data.metadata.creationTime).toLocaleString() }}
              </div>
            </div>
          </div>
          <div
            class="mt-6 shadow-2xl p-2 rounded-xl bg-gray-100 dark:bg-gray-700"
          >
            <h3 class="font-bold text-2xl flex justify-center items-center">
              <v-icon name="cogs" class="mr-2" /> Setting:
            </h3>
            <div class="">
              <div class="text-xl mb-2">
                Translate languaje:
                <span
                  class="
                    text-blue-600
                    dark:text-blue-200
                    text-bold
                    flex
                    justify-center
                    items-center
                  "
                >
                  <v-icon name="language" scale="2" class="mr-2" />
                  {{ user.conf.lang }}</span
                >
              </div>
              <div class="flex justify-center">
                <v-select
                  class="w-56 bg-white mt-1 lg:mt-0 rounded"
                  v-model="user.conf.lang"
                  :options="translateOptions"
                  :reduce="(order) => order.code"
                  label="label"
                  :clearable="false"
                  @input="updateUser"
                >
                  <template
                    v-slot:option="option"
                    class="flex justify-around items-center"
                  >
                    {{ option.label }}
                  </template>
                </v-select>
              </div>
              <div class="text-xl mb-2">
                Dark mode:
                <span
                  class="
                    text-blue-600
                    dark:text-blue-200
                    text-bold
                    flex
                    justify-center
                    items-center
                  "
                >
                  <v-icon
                    :name="user.conf.dark ? 'moon' : 'sun'"
                    class="mr-2"
                  />
                  {{ user.conf.dark ? "ON" : "OFF" }}</span
                >
              </div>
              <toggle-button
                :width="75"
                :height="27"
                :sync="true"
                :switch-color="{
                  checked: '#2559FF',
                  unchecked: '#FFFB15',
                }"
                :color="{
                  checked: '#111111',
                  unchecked: '#111111',
                }"
                :value="user.conf.dark"
                :labels="{ checked: 'OFF', unchecked: 'ON' }"
                @change="updateDarkMode"
              />
              <div class="text-xl mt-4 mb-2">
                Display collection:
                <span
                  class="
                    text-blue-600
                    dark:text-blue-200
                    text-bold
                    flex
                    justify-center
                    items-center
                  "
                >
                  <v-icon
                    :name="user.conf.grid ? 'th' : 'table'"
                    class="mr-2"
                  />
                  {{ user.conf.grid ? "GRID" : "TABLE" }}
                </span>
              </div>
              <toggle-button
                :width="75"
                :height="27"
                :sync="true"
                :switch-color="{
                  checked: '#CDD9FF',
                  unchecked: '#CDD9FF',
                }"
                :color="{
                  checked: '#111111',
                  unchecked: '#111111',
                }"
                :value="user.conf.grid"
                :labels="{ checked: 'TABLE', unchecked: 'GRID' }"
                @change="updateGrid"
              />
            </div>
          </div>
          <div
            class="mt-6 shadow-2xl p-2 rounded-xl bg-gray-100 dark:bg-gray-700"
          >
            <h3 class="font-bold text-2xl flex justify-center items-center">
              <v-icon name="th" class="mr-2" /> Collection:
            </h3>
            <div class="flex justify-center py-4 lg:pt-4 pt-8">
              <div
                class="
                  mr-4
                  p-3
                  text-center
                  cursor-pointer
                  hover:text-blue-600 hover:shadow-xl
                  w-20
                  h-20
                  rounded-lg
                "
                @click="goToWords(false)"
              >
                <span
                  class="
                    text-xl
                    font-bold
                    block
                    uppercase
                    tracking-wide
                    text-blueGray-600
                  "
                >
                  {{ wordsData.length }}
                </span>
                <span class="text-sm text-blueGray-400">Words</span>
              </div>
              <div
                class="
                  mr-4
                  p-3
                  text-center
                  cursor-pointer
                  hover:text-blue-600 hover:shadow-xl
                  w-20
                  h-20
                  rounded-lg
                "
                @click="goToWords(true)"
              >
                <span
                  class="
                    text-xl
                    font-bold
                    block
                    uppercase
                    tracking-wide
                    text-blueGray-600
                  "
                >
                  {{ wordsData.favourites }}
                </span>
                <span class="text-sm text-blueGray-400">Favs</span>
              </div>
              <!-- <div class="lg:mr-4 p-3 text-center">
                  <span
                    class="
                      text-xl
                      font-bold
                      block
                      uppercase
                      tracking-wide
                      text-blueGray-600
                    "
                  >
                    89
                  </span>
                  <span class="text-sm text-blueGray-400">Learned</span>
                </div> -->
            </div>
          </div>
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
          </div>
        </div>
      </div>
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
  </section>
  <div v-else>No user logged</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import WordsServices from "@/modules/auth/services/index";
import firebase from "firebase/compat/app";
import { TRANSLATE_OPTIONS } from "@/helpers/constants";
export default {
  name: "Profile",
  data() {
    return {
      password: "",
      passwordMessage: "",
      imageData: null,
      updateValue: 0,
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("words", ["wordFullList"]),
    wordsData() {
      return {
        length: this.wordFullList.length,
        favourites: this.wordFullList.filter((item) => item.favourite).length,
      };
    },
    translateOptions() {
      return TRANSLATE_OPTIONS;
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    ...mapActions("words", ["setFavFilter", "clearList"]),
    ...mapActions("auth", ["updateUser", "setNewPassword"]),
    getImage(user) {
      return user.data && user.data.photoURL
        ? `url(${user.data.photoURL})`
        : `url(${require("@/assets/avatar.png")})`;
    },
    goToWords(fav) {
      this.setFavFilter(fav);
      this.$router.push("/words/list");
    },
    updateDarkMode({ value }) {
      this.user.conf = { ...this.user.conf, dark: value };
      this.updateUser();
    },
    updateGrid({ value }) {
      this.user.conf = { ...this.user.conf, grid: value };
      this.updateUser();
    },
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
    async onUpload(event) {
      this.imageData = event.target.files[0];
      if (this.imageData.size > 500000) {
        this.$notify({
          title: "Error",
          text: "Max size 500 KB",
        });
        return;
      }
      this.updateValue = 1;
      const storageRef = WordsServices.uploadImg(this.imageData);
      if (storageRef) {
        storageRef.on(
          "state_changed",
          (sns) => {
            this.updateValue = (sns.bytesTransferred / sns.totalBytes) * 100;
          },
          (err) => {
            this.$notify({
              title: "Error",
              text: err,
            });
          },
          async () => {
            const imgUrl = await storageRef.snapshot.ref.getDownloadURL();
            this.updateValue = 0;
            WordsServices.updateImgProfile(imgUrl).catch((err) => {
              this.updateValue = 0;
              this.$notify({
                title: "Error",
                text: err,
              });
            });
          }
        );
      }
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
