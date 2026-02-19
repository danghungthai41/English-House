import {Skill} from "@/Components";
import { SkillType } from "@/Core/Models/Skill.type";
import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Lesson = (props: Props) => {
  const a: any = useParams;

  const skills: Array<SkillType> = [
    {
      id: 1,
      title: "Vocabulary Practice",
      descEng: "Practice your Vocabulary and explore the language",
      descVie: "Học từ vựng một cách dễ dàng",
    },
    {
      id: 2,
      title: "Reading Practice",
      descEng: "Practice your Reading and explore the language",
      descVie:
        "Cải thiện kĩ năng Reading, giúp bạn học thuộc từ vựng ở phần Vocabulary!",
    },
    {
      id: 3,
      title: "Listening Practice",
      descEng: "Practice your Listening and explore the language",
      descVie: "Cải thiện kĩ năng Listening bằng cách nghe và ghi lại đáp án!",
    },
    {
      id: 4,
      title: "Multiple-Choice Practice",
      descEng: "Practice your Multiple Choice and explore the language",
      descVie: "Luyện tập thông qua danh sách câu hỏi trắc nghiệm!",
    },
  ];

  const calcTranslate = (id: number) => (): string => {
    if (id % 2 !== 0) {
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
          {skills.map((item) => (
            <Skill item={item} key={item.id} translate={calcTranslate(item.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
