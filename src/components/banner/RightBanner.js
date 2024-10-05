import React from "react";
import { profile } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 hidden md:flex justify-center items-center relative ">
      <img
        className="w-full h-auto pl-5 transform scale-125 transition-transform duration-300 hover:scale-135"
        src={profile}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
};

export default RightBanner;
