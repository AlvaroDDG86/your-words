import axios from "axios";
import firebase from "firebase/compat/app";
import { db } from "@/helpers/firebase";

const WordsServices = {
  getWords() {
    console.log(firebase.auth().currentUser.uid);
    const userData = db
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
    return userData.get();
  },
  async saveWord(word) {
    const userData = db
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
    userData.update({
      wordList: firebase.firestore.FieldValue.arrayUnion(word),
    });
  },
  async removeWord(word) {
    const userData = db
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
    userData.update({
      wordList: firebase.firestore.FieldValue.arrayRemove(word),
    });
  },
  getWord(word) {
    return axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch(() => {
        return {
          error: "NOT_FOUND",
          message:
            "Sorry, we couldn't find definitions for the word you were looking for.",
          status: 404,
          word: word,
        };
      });
  },
};

export default WordsServices;
