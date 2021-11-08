<template>
  <div>
    <h1>Profile</h1>
    <div>
      <pre>{{ user }}</pre>
    </div>
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
