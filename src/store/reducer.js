import { ADD_WORD_LIST } from "./constant";

const initialState = {
  words: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD_LIST:
      const newWords = [...state.words];
      newWords.push(action.payload);
      state.words = newWords;

      return { ...state };
    default:
      throw new Error("Invalid Action");
  }
};

export { initialState };
export default reducer;
