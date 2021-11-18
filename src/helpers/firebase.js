// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import store from "@/store";
const firebaseConfig = {
  apiKey: "AIzaSyDsAteKCFNFHJBys4j995EjHX5Yyujq3sQ",
  authDomain: "your-words-2021.firebaseapp.com",
  projectId: "your-words-2021",
  storageBucket: "your-words-2021.appspot.com",
  messagingSenderId: "1012918334405",
  appId: "1:1012918334405:web:e3034993b8cce3baeb51ac",
  measurementId: "G-44SY6CEN7W",
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("auth/fetchUser", user);
});
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
