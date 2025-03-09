import React from "react";

const baseWindowStyle =
  "absolute border-[5px] rounded-[5px] p-[7px] pt-[10px] flex flex-col";

const themes = {
  blue: {
    regular:
      "bg-white border-[#0212FE] text-[#0212FE] [&>.inner-bar]:text-[#0212FE] [&>.inner-window]:bg-[#0212FE] [&>.inner-window]:text-white",
    inverted:
      "bg-[#0212FE] border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:color-[#0212FE]",
  },
};

const Window = ({ children, theme, inverted = false }) => {
  return (
    <div
      className={`${baseWindowStyle} ${
        themes[theme][inverted ? "inverted" : "regular"]
      } top-70 left-70 w-[400px] h-[170px]`}
    >
      <div className="inner-bar pb-[7px] text-[1.5rem] leading-[70%] font-medium">
        SKETCHES
      </div>
      <div className="inner-window h-full">{children}</div>
    </div>
  );
};

export default Window;
