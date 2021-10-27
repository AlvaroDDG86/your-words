export default {
  wordsList: (state) => [
    ...state.wordsList,
    ...state.wordsList,
    ...state.wordsList,
    ...state.wordsList,
    ...state.wordsList,
    ...state.wordsList,
    ...state.wordsList,
    ...state.wordsList,
  ],
  wordList: (state) => state.wordsList[0].list,
  examples: (state) => state.wordsList[0].examples,
  annotations: (state) => state.wordsList[0].annotations,
};
