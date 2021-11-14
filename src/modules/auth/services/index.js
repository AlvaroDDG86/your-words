import { db } from "@/helpers/firebase";
import firebase from "firebase/app";
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

    user
      .updatePassword(newPassword)
      .then(() => {
        console.log("Successfully password reset");
      })
      .catch((error) => {
        console.log("Error updating the password", error);
      });
  },
};

export default WordsServices;
