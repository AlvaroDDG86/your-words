import axios from "axios";

const WordsServices = {
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
