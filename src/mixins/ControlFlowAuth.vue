<script>
import firebase from "firebase/compat/app";
export default {
  beforeRouteEnter(routeTo, routeFrom, next) {
    const user = firebase.auth().currentUser;
    if (user) {
      next("/");
    } else {
      next();
    }
  },
};
</script>
