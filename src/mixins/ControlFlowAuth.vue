<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showPage: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  watch: {
    user: {
      handler: function (user) {
        if (user) {
          this.$router.push("/auth/dashboard").catch(() => {});
        }
        this.showPage = true;
      },
      immediate: true,
    },
  },
};
</script>
