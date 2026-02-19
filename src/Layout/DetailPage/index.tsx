import React, { useState } from "react";
import {Button, Header} from "@/Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const DetailLayout: React.FC<Props> = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { pathname } = useLocation();
  const navTitle = ["Vocabulary", "Reading", "Listening", "Multiple-Choice"];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="DetailLayout w-full h-full ">
      <div className="flex relative">
        {collapsed ? (
          <nav
            className={`flex flex-col p-0 w-1/6 justify-start bg-[#2B3647] fixed h-full top-16`}
          >
            {navTitle.map((title, index) => (
              <Button
                key={index}
                to={`/${title.toLowerCase()}-page/1`}
                className={`w-full px-5 py-3 text-left text-xl text-white ${
                  pathname === `/${title.toLowerCase()}-page/1`
                    ? "bg-yellow-title text-primary-color duration-300"
                    : ""
                }`}
              >
                {title}
              </Button>
            ))}
          </nav>
        ) : (
          ""
        )}
        <span
          className={`relative top-20 cursor-pointer ${
            collapsed ? "left-64" : "left-5"
          } duration-300 ease-in-out`}
          onClick={toggleCollapsed}
        >
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </span>
        <Header/>
        <div className={`p-10 w-5/6 ${collapsed ? "ml-64" : "ml-28"}`}>{children}</div>
      </div>
    </div>
  );
};

export default DetailLayout;
