import { useStore } from "@/store";
import React from "react";

type Props = {};

const WordList = (props: Props) => {
  const [state, dispatch] = useStore();
  console.log(state);
  return (
    <div>
      WordList
    </div>
  );
};

export default WordList;
