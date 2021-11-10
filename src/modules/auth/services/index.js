import { db } from "@/helpers/firebase";

const WordsServices = {
  async setNewUser(user) {
    const userJson = user.toJSON();
    Object.keys(userJson).forEach((key) => {
      userJson[key] === undefined ? delete userJson[key] : {};
    });
    // userJson.wordList = firstWords;
    await db.collection("users").doc(user.uid).set(userJson, { merge: true });
  },
};

export default WordsServices;
