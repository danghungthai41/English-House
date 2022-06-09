import { useMemo, useState } from "react";
import img from "@/Theme";
import Button from "@/Components/Button";
import { useLocation } from "react-router-dom";
interface Props {}

interface Title {
  title: string;
  to?: string;
}

const Header = (props: Props) => {
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const titles: Title[] = useMemo(
    () => [
      {
        title: "Lessons",
        to: "/lessons",
      },
      {
        title: "Flashcard",
        to: "/flash-cards",
      },
      {
        title: "Word List",
        to: "/word-list",
      },
      {
        title: "Profile",
        to: "/profile",
      },
      {
        title: "Logout",
      },
    ],
    []
  );

  return (
    <div className="h-16  w-100 flex justify-center border-b-1 border-white shadow-lg bg-[#2B3647] text-white">
      <div className="container flex justify-between items-center h-full">
        <div className="w-28">
          <Button to="/">
            <img src={img.engHouseLogo} alt="" className="w-full h-full" />
          </Button>
        </div>
        {isLogin ? (
          <div className="flex justify-around items-center">
            {titles.map(({ title, to }, index) => (
              <Button
                key={index}
                classNameChild="text-xl"
                className={`px-5 py-6 ${
                  `/${pathname.split("/")[1]}` === to
                    ? " text-yellow-title border-b-[2px]"
                    : ""
                }`}
                to={to}
              >
                {title}
              </Button>
            ))}
          </div>
        ) : (
          <Button>Log In</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
