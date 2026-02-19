import { SkillType } from "@/Core/Models/Skill.type";
import { Link } from "react-router-dom";

type Props = {
  item: SkillType;
  translate: () => string;
};

const Skill = ({ item, translate }: Props) => {

  const { title, descEng, descVie } = item;
  return (
    <Link to={`/${title.split(" ")[0].toLowerCase()}-page/1`}>
      <div
        className={`w-64 h-64 bg-lessonBox rounded-3xl shadow-2xl ${translate()} duration-700 ease-in-out relative hover:rotate-y-180 mx-10 flex justify-center items-center group`}
      >
        <div className=" text-white px-7">
          <h1 className="text-4xl group-hover:hidden"> {title}</h1>
          <h4 className="leading-tight group-hover:hidden">{descEng}</h4>
          <h4 className=" hidden leading-tight group-hover:block rotate-y-180">
            {descVie}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Skill;
