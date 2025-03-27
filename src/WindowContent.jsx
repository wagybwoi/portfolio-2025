import React from "react";

const content = {
  welcome: {
    markup: (
      <>
        <div className="p-8 text-3xl w-[457px]">
          <h2 className="mb-7">
            My name is <span className="text-magenta">Ahmed Wageh</span>
          </h2>
          <p className="mb-7 leading-[100%]">
            I'm a <span className="text-magenta">fullstack developer</span>{" "}
            based in <span className="text-magenta">Toronto</span>.
          </p>
          <button className="uppercase">Cool</button>
        </div>
      </>
    ),
  },
  socials: {
    markup: (
      <>
        <div className="p-8 text-7xl font-bold w-[400px]">
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
      </>
    ),
  },
};

export default content;
