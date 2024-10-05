import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import Skill from './Skill';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full max-w-6xl mx-auto pt-10 pb-10 flex flex-col gap-5 xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-full flex flex-col lg:flex-row lg:justify-between">
        <LeftBanner />
        <RightBanner />
      </div>
      <Skill />
    </section>
  );
}

export default Banner