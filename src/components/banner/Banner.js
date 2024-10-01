import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import Skill from './Skill';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="lg:flex lg:flex-row w-full ">
        <LeftBanner />
        <RightBanner />
      </div>
      <Skill />
    </section>
  );
}

export default Banner