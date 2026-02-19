import Header from "@/Components/Header";
import React, { useEffect } from "react";
import img from "@/Theme";
import { Button } from "@/Components";

import { useAppDispatch } from "@/Redux/hook";
import { getBanners } from "@/Redux/Slices/BannerSlice";
interface Props {}

const HomePage = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, []);

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
