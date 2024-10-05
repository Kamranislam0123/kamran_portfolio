import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center"
    >
      {/* part one */}
      <div className=''>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Stamford University Bangladesh (2018 - 2023)"
            result="3.25/4.00"
            des="A renowned institution known for its commitment to providing quality education and fostering a conducive learning environment."
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="Islamia College Kushtia (2015 - 2017)"
            result="3.42/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Kushtia Zilla School (2015)"
            result="4.83/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Dotpot iT - (2023 Dec - Present)"
            result="Bangladesh/On-site"
            des="Developed the frontend architecture for a large-scale e-commerce platform with open AI.
Collaborated with backend developers to ensure seamless API integration of frontend and
backend functionalities.
Involved in full software development lifecycle from requirements gathering to deployment and
maintenance."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Dotpot iT  (2023 Dec - 2024 March)"
            result="Bangladesh/On-site"
            des="Developed and maintained the company's website, ensuring a seamless user experience and optimizing website performance."
          />
          <ResumeCard
            title="Web Developer"
            subTitle=" Zeaim Tech -(2023 Mar - 2023 dec)"
            result="Bangladesh/Remote"
              des="Coordinate with a team of developers to design scalable database applications for clients,
conduct code changes in HTML and CSS, and develop websites.
Identify solutions to technical issues to enhance website functionality."
            />
        </div>
      </div>
    </motion.div>
  );
}

export default Education