import { ADD_WORD_LIST } from "./constant";

const addWordList = (payload: any): any => {
  return {
    type: ADD_WORD_LIST,
    payload,
  };
};

export { addWordList };
