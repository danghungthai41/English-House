import React, {
  MouseEvent,
  useState,
  useEffect,
  useTransition,
  useCallback,
} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
interface Props {
  // onClick: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  item: number;
}

const Card = (props: Props) => {
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
    <Link to={`${pathname}/${props.item}`}>
      <div
        className={`w-[194px] h-[253px] border-1 flex flex-col justify-between rounded-lg hover:scale-105 duration-300  bg-yellow-card shadow-card 
       cursor-pointer rotate-${randomNum()}`}
      >
        <div className="p-5 text-2xl text-[#3d405b]">
          Essential <br />
          English for IT
        </div>

        <div className="w-full ">
          <svg
            className="sc-7v08c9-9 itVPGs"
            viewBox="0 0 196 58"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Onboarding" fill="none" fillRule="evenodd">
              <path
                d="M0 7.316c29.064-5.713 57.327-8.08 84.788-7.1C122.55 1.561 159.621 7.547 196 18.172v39H0V7.316z"
                id="Rectangle"
                fill="#FF9D6F"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Card;
