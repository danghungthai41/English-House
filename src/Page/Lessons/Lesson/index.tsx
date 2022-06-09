import Skill from "@/Components/Skill";
import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Lesson = (props: Props) => {
  const a: any = useParams;

  const calcTranslate = (index: number) => (): string => {
    if (index % 2 === 0) {
      return "-top-10";
    }
    return "";
  };
  return (
    <div className="relative">
      <div className="container min-h-660  items-center flex justify-center ">
        <div className="flex  justify-center items-center h-full">
          <div className="h-full w-full absolute ">
            <div className="absolute top-72 left-0 bg-[#F8F4E1] w-96 h-80 -z-10"></div>
            <div className="absolute top-0 right-0 bg-[#DBF6E9] w-96 h-96 -z-10"></div>
            <div className="h-1/2 bg-[#F8F4E1] rounded-br-full z-10"></div>
            <div className="h-1/2 bg-[#DBF6E9] rounded-tl-full z-10"></div>
          </div>
          {[1, 2, 3, 4].map((item, index) => (
            <Skill item={item} key={index} translate={calcTranslate(index)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
