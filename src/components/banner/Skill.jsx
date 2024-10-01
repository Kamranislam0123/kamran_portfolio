import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFigma, SiHtml5, SiJavascript, SiTypescript, SiDjango, SiCss3, SiNodedotjs } from 'react-icons/si';

const Skill = () => {
  return (
   <div className='pt-20'>
     <div className="flex flex-col items-center justify-center">
      <h2 className="text-5xl uppercase font-titleFont mb-6 text-center">
        BEST SKILL ON
      </h2>
      <div className="flex gap-6">
        <span className="bannerIcon text-blue-500">
          <FaReact />
        </span>
        <span className="bannerIcon text-black">
          <SiNextdotjs />
        </span>
        <span className="bannerIcon text-cyan-400">
          <SiTailwindcss />
        </span>
        <span className="bannerIcon text-purple-500">
          <SiFigma />
        </span>
        <span className="bannerIcon text-orange-500">
          <SiHtml5 />
        </span>
        <span className="bannerIcon text-yellow-400">
          <SiJavascript />
        </span>
        <span className="bannerIcon text-blue-600">
          <SiTypescript />
        </span>
        <span className="bannerIcon text-green-600">
          <SiDjango />
        </span>
        <span className="bannerIcon text-blue-500">
          <SiCss3 />
        </span>
        <span className="bannerIcon text-green-600">
          <SiNodedotjs />
        </span>
      </div>
    </div>
   </div>
  );
};

export default Skill;