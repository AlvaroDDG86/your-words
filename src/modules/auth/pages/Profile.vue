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
                  border-4 border-blue-400
                  bg-black bg-no-repeat bg-center bg-cover
                "
              ></div>
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
            <div class="flex justify-center">
              <a
                href="javascript:void(0);"
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
                Contact Us
              </a>
              <a
                href="javascript:void(0);"
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
              </a>
              <a
                href="javascript:void(0);"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div v-else>No user logged</div>
  <!-- <div>
    <h1>Profile</h1>
    <div>
      <pre>{{ user }}</pre>
    </div>
  </div> -->
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("words", ["wordsList"]),
    wordsData() {
      return {
        length: this.wordsList.length,
        favourites: this.wordsList.filter((item) => item.favourite).length,
      };
    },
  },
  methods: {
    ...mapActions("words", ["setFavFilter"]),
    ...mapActions("auth", ["updateUser"]),
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
      console.log(this.user.conf.dark);
      this.user.conf = { ...this.user.conf, dark: value };
      this.updateUser();
    },
    updateGrid({ value }) {
      this.user.conf = { ...this.user.conf, grid: value };
      this.updateUser();
    },
  },
};
</script>
