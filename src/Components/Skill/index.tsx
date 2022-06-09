import React from "react";
import { Link } from "react-router-dom";

type Props = {
  item: number;
  translate: () => string;
};

const Skill = ({ item, translate }: Props) => {
  return (
    <Link to={`/vocabulary-page/1`}>
      <div
        className={`w-64 h-64 bg-lessonBox rounded-3xl shadow-2xl ${translate()} duration-700 ease-in-out relative hover:rotate-y-180 mx-10 flex justify-center items-center group`}
      >
        <div className=" text-white px-7">
          <h1 className="text-4xl group-hover:hidden"> Vocabulary Practice</h1>
          <h4 className="leading-tight group-hover:hidden">
            Practice your vocabulary and explore the language
          </h4>
          <h4 className=" hidden leading-tight group-hover:block rotate-y-180">
            Học từ vựng một cách dễ dàng!
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Skill;
