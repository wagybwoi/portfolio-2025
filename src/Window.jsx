import React from "react";
import tw from "twin.macro";

const baseWindowStyle = tw`absolute border-[5px] rounded-[5px] p-[7px] pt-[10px] flex flex-col`;

const themes = {
  blue: {
    regular: tw`bg-white border-[#0212FE] text-[#0212FE] [&>.inner-bar]:text-[#0212FE] [&>.inner-window]:bg-[#0212FE] [&>.inner-window]:text-white`,
    inverted: tw`bg-[#0212FE] border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:text-[#0212FE]`,
  },
};

const Window = ({ children, theme, inverted = false }) => {
  return (
    <div
      tw="absolute border-[5px] rounded-[5px] p-[7px] pt-[10px] flex flex-col"
      css={[
        baseWindowStyle,
        themes[theme][inverted ? "inverted" : "regular"],
        tw`top-72 left-72 w-[400px] h-[170px]`,
      ]}
    >
      <div
        className="inner-bar"
        tw="pb-[7px] h-6 text-[1.5rem] leading-[70%] font-medium"
      >
        SKETCHES
      </div>
      <div className="inner-window" tw="h-full">
        {children}
      </div>
    </div>
  );
};

export default Window;
