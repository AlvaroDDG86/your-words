<template>
  <div
    class="
      fixed
      bottom-0
      w-full
      bg-blue-600
      text-white
      py-4
      px-10
      flex
      justify-end
    "
  >
    <a
      :key="`social-${index}`"
      v-for="(button, index) in socialButtons"
      :href="button.link"
      target="_blank"
      class="
        text-blue-900
        bg-white
        font-extrabold
        text-lg
        rounded
        px-2
        py-1
        mx-1
        transition-all
        duration-200
        hover:text-blue-100 hover:bg-blue-900
      "
    >
      <v-icon small x-small :name="button.icon" />
    </a>
  </div>
</template>
<script>
export default {
  name: "AppFooter",
  data() {
    return {
      socialButtons: [
        {
          icon: "brands/facebook",
          link: "http://www.facebook.com",
        },
        {
          icon: "brands/linkedin",
          link: "http://www.linkedin.com",
        },
        {
          icon: "brands/instagram",
          link: "http://www.instagram.com",
        },
        {
          icon: "brands/google",
          link: "http://www.google.com",
        },
      ],
    };
  },
  methods: {
    saveWord() {
      console.log(true);
    },
  },
};
</script>
