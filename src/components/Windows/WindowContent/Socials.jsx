import React from "react";

import instagramIcon from "../../../images/icons/instagram.png";
import linkedinIcon from "../../../images/icons/linkedin.png";
import githubIcon from "../../../images/icons/github.png";

const Socials = () => {
  return (
    <div className="py-3 px-5 xs:py-4 xs:px-6 text-black text-md xs:text-2xl font-bold max-w-[351px] mx-auto xs:max-w-none">
      <ul className="flex justify-center items-center gap-10 [&>li]:shrink-0 [&>li]:grow-0 [&>li>a]:flex [&>li>a]:flex-col [&>li>a]:justify-center [&>li>a]:items-center">
        <li>
          <a
            href="https://github.com/wagybwoi"
            rel="noopener noreferrer"
            target="_blank"
            className="group"
          >
            <img
              src={githubIcon}
              alt="Github"
              className="w-[60px] xs:w-[80px] md:group-hover:scale-[1.2] md:group-hover:rotate-[-10deg] transition-[scale_0.2s_ease,_rotate_0.2s_ease-out] bg-white rounded-full overflow-clip"
            />
            <div className="text-center z-5">Github</div>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/wagybwoi"
            rel="noopener noreferrer"
            target="_blank"
            className="group"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-[60px] xs:w-[80px] md:group-hover:scale-[1.2] md:group-hover:rotate-[-10deg] transition-[scale_0.2s_ease,_rotate_0.2s_ease-out] bg-white rounded-full overflow-clip"
            />
            <div className="text-center z-5">Instagram</div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmedwageh"
            rel="noopener noreferrer"
            target="_blank"
            className="group"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-[60px] xs:w-[80px] md:group-hover:scale-[1.2] md:group-hover:rotate-[-10deg] transition-[scale_0.2s_ease,_rotate_0.2s_ease-out] bg-white rounded-full overflow-clip"
            />
            <div className="text-center z-5">LinkedIn</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
