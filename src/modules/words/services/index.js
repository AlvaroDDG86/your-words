import axios from "axios";
import firebase from "firebase/compat/app";
import { db } from "@/helpers/firebase";

const WordsServices = {
  getWords() {
    const userData = db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("wordList");
    return userData.get();
  },
  async saveWord(word) {
    return db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("wordList")
      .add(word);
  },
  async removeWord(word) {
    return db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("wordList")
      .doc(word.id)
      .delete();
  },
  async updateWord(word) {
    if (!word.translation) word.translation = ""; // catch undefined for words which don't have new field "translation"
    return db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("wordList")
      .doc(word.id)
      .set(
        {
          annotations: word.annotations,
          translation: word.translation,
          favourite: word.favourite,
          examples: [...word.examples],
          dateUpdate: word.dateUpdate,
        },
        {
          merge: true,
        }
      );
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
  getTranslate(word) {
    const lang = "ES";
    const url = `https://api-free.deepl.com/v2/translate?auth_key=5c0df8ad-8137-94e7-f839-44c1200ba2e0:fx&text=${word}&target_lang=${lang}`;
    return axios
      .post(url)
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
