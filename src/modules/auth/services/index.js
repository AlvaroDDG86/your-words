import { db, storage } from "@/helpers/firebase";
import firebase from "firebase/compat/app";
import "firebase/auth";

const WordsServices = {
  async setNewUser(user) {
    const userJson = user.toJSON();
    Object.keys(userJson).forEach((key) => {
      userJson[key] === undefined ? delete userJson[key] : {};
    });
    userJson.dark = false;
    userJson.grid = false;

    await db.collection("users").doc(user.uid).set(userJson, { merge: true });
  },
  getUserConf(uid) {
    const userData = db.collection("users").doc(uid);
    return userData.get();
  },
  async updateUser(user) {
    return db.collection("users").doc(user.data.uid).set(
      {
        dark: user.conf.dark,
        grid: user.conf.grid,
        lang: user.conf.lang,
      },
      {
        merge: true,
      }
    );
  },
  deleteAccount() {
    const user = firebase.auth().currentUser;

    user
      .delete()
      .then(() => {
        console.log("Successfully user deleted");
      })
      .catch((error) => {
        console.log("Error deleting the user", error);
      });
  },
  setNewPassword(newPassword) {
    const user = firebase.auth().currentUser;

    return user.updatePassword(newPassword);
  },
  uploadImg(imageData) {
    const user = firebase.auth().currentUser;
    return storage.ref(user.uid).put(imageData);
  },
  updateImgProfile(photoURL) {
    const user = firebase.auth().currentUser;
    return user.updateProfile({
      photoURL,
    });
  },
  recoveryPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  },
};

export default WordsServices;
