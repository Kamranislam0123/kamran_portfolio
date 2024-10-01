import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,

  FaWhatsapp,
} from "react-icons/fa";

const Media = () => {
  return (
    <section>
        <div className="pb-10">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/kamran.islam.7796"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/kamran-islam/"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Kamranislam0123" className="bannerIcon">
              <FaGithub />
            </a>
            <a href=" https://wa.me/1771971072" className="bannerIcon">
              <FaWhatsapp />
            </a>
          </div>
        </div>
    </section>
    
  );
};

export default Media;
