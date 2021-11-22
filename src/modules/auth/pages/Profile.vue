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
          text-gray-800
          dark:bg-gray-400 dark:text-gray-200
          w-full
          shadow-xl
          rounded-lg
        "
      >
        <div class="px-6">
          <UserInfo />
          <Settings />
          <Collection />
          <ProfileButtons />
        </div>
      </div>
    </div>
  </section>
  <div v-else>No user logged</div>
</template>
<script>
import { mapGetters } from "vuex";
import UserInfo from "@/modules/auth/components/UserInfo.vue";
import Settings from "@/modules/auth/components/Settings.vue";
import Collection from "@/modules/auth/components/Collection.vue";
import ProfileButtons from "@/modules/auth/components/ProfileButtons.vue";
export default {
  name: "Profile",
  components: {
    UserInfo,
    Settings,
    Collection,
    ProfileButtons,
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("words", ["wordFullList"]),
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
