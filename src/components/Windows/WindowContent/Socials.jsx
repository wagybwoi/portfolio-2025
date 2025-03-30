import React from "react";

const Socials = () => {
  return (
    <div className="p-4 text-5xl font-bold w-[350px]">
      <ul className="flex justify-center items-center gap-10 [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li]:hover:text-black [&>li]:hover:underline">
        <li>
          <a
            href="https://github.com/wagybwoi"
            rel="noopener noreferrer"
            target="_blank"
          >
            GH
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/wagybwoi"
            rel="noopener noreferrer"
            target="_blank"
          >
            IG
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmedwageh"
            rel="noopener noreferrer"
            target="_blank"
          >
            LI
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
