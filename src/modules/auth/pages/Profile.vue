<template>
  <div>
    <h1>Profile</h1>
    <p>
      <span>{{ user }}</span>
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>
