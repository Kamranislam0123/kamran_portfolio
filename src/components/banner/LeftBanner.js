import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front End Developer.", "UI/UX Designer.", "Product Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col ">
      <div className="flex flex-col gap-5 py-12">
        <h1 className="text-6xl font-bold text-white pt-10">
          Hi, I'm <span className="text-designColor capitalize">Md Kamranul Islam</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#7695FF"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          CSE graduate with 1.7 years experience in programming HTML, CSS, Bootstrap, JavaScript, React
          NextJs and database management with MongoDB and MySQL. Additionally my design proficiency
          extends to Figma, where I craft user-centric interfaces for a delightful experience. I'm eager to
          contribute to innovative projects for full time employment.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner