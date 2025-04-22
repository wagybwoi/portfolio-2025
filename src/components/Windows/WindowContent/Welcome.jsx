import React from "react";

const Welcome = ({ close }) => {
  return (
    <div className="p-6 md:p-8 text-[1.25rem] md:text-3xl leading-[100%] max-w-[351px] md:max-w-[457px] mx-auto">
      <h3 className="mb-4 md:mb-7">
        My name is <span className="text-magenta">Ahmed Wageh</span>
      </h3>
      <p className="mb-5 md:mb-7 leading-[100%]">
        I'm a <span className="text-magenta">fullstack developer</span> based in{" "}
        <span className="text-magenta">Toronto</span>.
      </p>
      <button className="button uppercase" onClick={close}>
        Cool
      </button>
    </div>
  );
};

export default Welcome;
