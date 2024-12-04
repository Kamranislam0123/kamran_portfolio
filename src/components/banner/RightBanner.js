import React from "react";
import { profile } from "../../assets/index";

const RightBanner = () => {
  return (
    
      <div className="w-full lgl:w-1/2 hidden md:flex justify-center items-center relative">
      <img
        className="w-auto max-w-none h-auto object-contain transform scale-175 transition-transform duration-300 hover:scale-190"
        src={profile}
        alt="bannerImg"
      />
    </div>
    
  );
};

export default RightBanner;
