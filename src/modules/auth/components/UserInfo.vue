<template>
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
            :name="updateValue ? 'spinner' : 'camera-retro'"
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
      <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
        {{ user.data.displayName }}
      </h3>
      <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
        {{ user.data.email }}
      </div>
      <div class="mb-2 text-blueGray-600 mt-10">
        <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
        <span class="font-bold text-blue-700 dark:text-blue-200"
          >Last login:</span
        >
        {{ new Date(user.data.metadata.lastSignInTime).toLocaleString() }}
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
</template>

<script>
import { mapGetters } from "vuex";
import WordsServices from "@/modules/auth/services/index";
export default {
  data() {
    return {
      imageData: null,
      updateValue: 0,
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    getImage(user) {
      return user.data && user.data.photoURL
        ? `url(${user.data.photoURL})`
        : `url(${require("@/assets/avatar.png")})`;
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
  },
};
</script>
