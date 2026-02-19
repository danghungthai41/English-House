import { Word } from "@/Components";
import { actions, useStore } from "@/store";
import React from "react";

type Props = {};

const ListeningPage = (props: Props) => {
  const [state, dispatch] = useStore();

  return (
    <div className="flex h-full justify-center">
      <Word word="software" />
    </div>
  );
};

export default ListeningPage;
