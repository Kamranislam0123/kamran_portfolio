// Projects.jsx
import React from 'react';
import Title from '../layouts/Title';
import { ecommerce,portfolio,lms,cns,library,rmj} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Library Management System"
          des="This is a library management system built using HTML, CSS, JavaScript, PHP, and MySQL. It allows you to add, remove, and update books in the library, search for books, and view book details."
          src={library}
          gitLink="https://github.com/Kamranislam0123/Library" // Replace with your GitHub URL
          liveLink="https://yourdomain.com/library-management-system" // Replace with your live site URL
        />
        <ProjectsCard
          title=" AI E-commerce Website"
          des=" ChatGPT enabled A full-featured e-commerce website with product listings, shopping cart, and secure checkout functionality."
          src={ecommerce}
          gitLink="https://github.com/yourusername/e-commerce-website" // Replace with your GitHub URL
          liveLink="https://www.ai-ecommerce.xyz/" // Replace with your live site URL
        />
        <ProjectsCard
          title="Buy Car Sell Application"
          des="This is a car selling website built using React, Tailwind CSS, and MongoDB. With Admin Panel and advanced search filter It allows you to add, remove, and update cars in the website, search for cars, and view car details."
          src={rmj}
          gitLink="https://github.com/yourusername/chatting-app" // Replace with your GitHub URL
          liveLink="https://yourdomain.com/chatting-app" // Replace with your live site URL
        />
        <ProjectsCard
          title="Campus Social Network Application"
          des="A social media platform clone with features like posts, likes, comments, and user profiles  specifically designed for college students to connect and share experiences."
          src={cns}
          gitLink="https://github.com/Kamranislam0123/CSN" // Replace with your GitHub URL
          liveLink="https://yourdomain.com/social-media-clone" // Replace with your live site URL
        />
        <ProjectsCard
          title="Portfolio Website"
          des="This is client Portfolio website built using NextJs, Tailwind CSS, and Framer Motion."
          src={portfolio}
          gitLink="https://github.com/Kamranislam0123/seeam-portfolio" // Replace with your GitHub URL
          liveLink="https://yourdomain.com/e-commerce-website-v2" // Replace with your live site URL
        />
        <ProjectsCard
          title="Learning Management Template"
          des="An enhanced version Learning Management Templat with additional features and improved UI."
          src={lms}
          gitLink="https://github.com/Kamranislam0123/lms" // Replace with your GitHub URL
          liveLink="https://yourdomain.com/chatting-app-v2" // Replace with your live site URL
        />
      </div>
    </section>
  );
};

export default Projects;
