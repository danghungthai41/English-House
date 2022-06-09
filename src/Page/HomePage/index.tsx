import Header from "@/Components/Header";
import React from "react";
import img from "@/Theme";
import Button from "@/Components/Button";
interface Props {}

const HomePage = (props: Props) => {
  return (
      <div
        className=" w-full h-[660px]  bg-cover "
        style={{ background: `url(${img.bgLogin})` }}
      >
        <div className="flex justify-around border-none text-4xl py-6">
          <Button className="">Learning English Effectively</Button>
          <Button className="bg-[#FFB702] rounded-xl px-16 py-2" to="/lessons">
            <span className="tracking-[15px] text-3xl ">Start</span>
          </Button>
        </div>
      </div>
  );
};

export default HomePage;
