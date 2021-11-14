import { db } from "@/helpers/firebase";
import firebase from "firebase/app";
import "firebase/auth";

const WordsServices = {
  async setNewUser(user) {
    const userJson = user.toJSON();
    Object.keys(userJson).forEach((key) => {
      userJson[key] === undefined ? delete userJson[key] : {};
    });
    // userJson.wordList = firstWords;
    await db.collection("users").doc(user.uid).set(userJson, { merge: true });
  },
  async updateUser() {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        dark: true,
        grid: true,
      })
      .then(() => {
        // Update successful
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
    // return db.collection("users").doc(firebase.auth().currentUser.uid).set(
    //   {
    //     dark: user.dark,
    //     grid: user.grid,
    //   },
    //   {
    //     merge: true,
    //   }
    // );
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
