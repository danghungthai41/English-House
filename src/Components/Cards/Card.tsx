import { Lesson } from "@/Core/Models/Lesson.type";
import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardLessonIcon } from "@/Theme/Icon";

interface Props {
  item: Lesson;
}

const Card = ({ item }: Props) => {
  const { pathname } = useLocation();

  const randomNum = useCallback(() => {
    let random = Math.random() * (-4 - 4);

    switch (Math.round(random) + 4) {
      case 1:
        return "first";
      case 2:
        return "second";
      case 3:
        return "third";
      case 4:
        return "fourth";
      case -1:
        return "-first";
      case -2:
        return "-second";
      case -3:
        return "-third";
      case -4:
        return "-fourth";
      default:
        return "zero";
    }
  }, []);

  return (
    <Link
      to={`${pathname}/unit/${item.id}`}
      className={item.isLock ? `cursor-pointer` : `pointer-events-none`}
    >
      <div
        className={`w-[194px] h-[253px] border-1 flex flex-col justify-between rounded-lg hover:scale-105 duration-300  bg-yellow-card shadow-card 
       cursor-pointer rotate-${randomNum()} relative`}
      >
        <div className="p-6 text-2xl text-[#3d405b] ">
          <span>{item.title}</span>
        </div>

        <div className="w-full ">
          <div className="relative">
            {item.isLock ? (
              <CardLessonIcon color="#FF9D6F" />
            ) : (
              <CardLessonIcon color="#e5e5e5" />
            )}

            <p className="absolute top-4 left-6 text-xl ">Lesson {item.id}</p>
          </div>
        </div>
        {item.isLock ? (
          ""
        ) : (
          <span className="absolute top-1 left-1">
            <FontAwesomeIcon icon={faLock} size="lg" />
          </span>
        )}
      </div>
    </Link>
  );
};

export default Card;
