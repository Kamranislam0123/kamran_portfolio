import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFigma, SiHtml5, SiJavascript, SiTypescript, SiDjango, SiCss3, SiNodedotjs } from 'react-icons/si';

const SkillIcon = ({ Icon, title, color }) => (
  <div className="flex flex-col items-center">
    <span className={`bannerIcon ${color}`}>
      <Icon />
    </span>
    <p className="text-sm mt-2">{title}</p>
  </div>
);

const Skill = () => {
  return (
   <div className='pt-20'>
     <div className="flex flex-col items-center justify-center">
      <h2 className="text-5xl uppercase font-titleFont mb-6 text-center">
        BEST SKILL ON
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <SkillIcon Icon={FaReact} title="React" color="text-blue-500" />
        <SkillIcon Icon={SiNextdotjs} title="Next.js" color="text-black" />
        <SkillIcon Icon={SiTailwindcss} title="Tailwind" color="text-cyan-400" />
        <SkillIcon Icon={SiFigma} title="Figma" color="text-purple-500" />
        <SkillIcon Icon={SiHtml5} title="HTML5" color="text-orange-500" />
        <SkillIcon Icon={SiJavascript} title="JavaScript" color="text-yellow-400" />
        <SkillIcon Icon={SiTypescript} title="TypeScript" color="text-blue-600" />
        <SkillIcon Icon={SiDjango} title="Django" color="text-green-600" />
        <SkillIcon Icon={SiCss3} title="CSS3" color="text-blue-500" />
        <SkillIcon Icon={SiNodedotjs} title="Node.js" color="text-green-600" />
      </div>
    </div>
   </div>
  );
};

export default Skill;