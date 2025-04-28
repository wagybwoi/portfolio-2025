import React from "react";

import instagramIcon from "../../../images/icons/instagram.png";
import linkedinIcon from "../../../images/icons/linkedin.png";
import githubIcon from "../../../images/icons/github.png";

const Socials = () => {
  return (
    <div className="px-4 py-6 xs:p-6 text-5xl font-bold max-w-[351px] mx-auto xs:max-w-none">
      <ul className="flex justify-center items-center gap-10 [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li]:hover:text-black [&>li]:hover:underline">
        <li>
          <a
            href="https://github.com/wagybwoi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={githubIcon} alt="Github" className="w-[120px]" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/wagybwoi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagramIcon} alt="Instagram" className="w-[120px]" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmedwageh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-[120px]" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
