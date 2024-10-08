import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
// import { testimonialOne,testimonialTwo, quote } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* ================ Slider One ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col justify-between">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-bold text-designColor">Seeam Ahmod</h3>
                      <p className="text-base text-gray-400 mt-2">UI/UX Designer</p>
                      <h4 className="text-xl lgl:text-2xl font-medium tracking-wide mt-4">
                        Website Redesign Project
                      </h4>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Jan 15, 2023 - Mar 22, 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Working with this developer was a fantastic experience. Their attention to detail in implementing my UI designs was impeccable. They not only brought my vision to life but also suggested valuable improvements that enhanced the overall user experience. I'm extremely satisfied with the final product and would gladly collaborate again.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col justify-between">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-bold text-designColor">Mizanur Rahman</h3>
                      <p className="text-base text-gray-400 mt-2">Software Engineer</p>
                      <h4 className="text-xl lgl:text-2xl font-medium tracking-wide mt-4">
                        E-commerce Platform Development
                      </h4>
                      <p className="text-base text-gray-400 mt-3">
                        via LinkedIn - Apr 10, 2023 - Jul 5, 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I had the pleasure of working alongside this developer on a complex e-commerce project. Their expertise in both front-end and back-end technologies was evident throughout the development process. They consistently delivered high-quality code, met deadlines, and were always open to collaboration and problem-solving. Their work significantly contributed to the success of our project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col justify-between">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-bold text-designColor">Novojit Das</h3>
                      <p className="text-base text-gray-400 mt-2">Software Engineer</p>
                      <h4 className="text-xl lgl:text-2xl font-medium tracking-wide mt-4">
                        Mobile App Development
                      </h4>
                      <p className="text-base text-gray-400 mt-3">
                        via GitHub - Sep 1, 2023 - Nov 30, 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I collaborated with this developer on a challenging mobile app project, and I was thoroughly impressed with their skills and professionalism. They demonstrated a deep understanding of mobile development principles and best practices. Their code was clean, well-documented, and performant. They were also great at communication, always keeping the team updated on their progress. I would highly recommend them for any mobile development project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial