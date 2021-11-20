<template>
  <div class="mt-6 shadow-2xl p-2 rounded-xl bg-gray-100 dark:bg-gray-700">
    <h3 class="font-bold text-2xl flex justify-center items-center">
      <v-icon name="cogs" class="mr-2" /> Setting:
    </h3>
    <div class="py-2">
      <div class="py-2 mb-5 shadow-xl">
        <div class="text-xl">
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
      </div>
      <div class="py-2 mb-5 shadow-xl">
        <div class="text-xl">Audio Settings:</div>
        <div class="flex flex-col md:flex-row justify-evenly items-center">
          <div class="flex flex-col items-center justify-center">
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
              <v-icon name="redo-alt" class="mr-2" />
              Repeat: {{ times }}</span
            >
            <v-select
              class="w-56 bg-white mt-1 lg:mt-0 rounded"
              v-model="user.conf.audio.times"
              :options="audioOptions"
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
          <div class="flex flex-col items-center justify-center">
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
              <v-icon name="hourglass-half" class="mr-2" />
              Lapse: {{ user.conf.audio.seconds }} Second/s</span
            >
            <v-select
              class="w-56 bg-white mt-1 lg:mt-0 rounded"
              v-model="user.conf.audio.seconds"
              :options="audioOptions"
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
        </div>
      </div>
      <div class="py-2 mb-5 shadow-xl">
        <div class="text-xl">
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
            <v-icon :name="user.conf.dark ? 'moon' : 'sun'" class="mr-2" />
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
      </div>
      <div class="py-2">
        <div class="text-xl">
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
            <v-icon :name="user.conf.grid ? 'th' : 'table'" class="mr-2" />
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
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { TRANSLATE_OPTIONS, AUDIO_OPTIONS } from "@/helpers/constants";

export default {
  computed: {
    ...mapGetters("auth", ["user"]),
    translateOptions() {
      return TRANSLATE_OPTIONS;
    },
    audioOptions() {
      return AUDIO_OPTIONS;
    },
    times() {
      return this.user.conf.audio.times == 1
        ? "Once"
        : this.user.conf.audio.times == 2
        ? "Twice"
        : `${this.user.conf.audio.times} times`;
    },
  },
  methods: {
    ...mapActions("auth", ["updateUser"]),
    updateDarkMode({ value }) {
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
