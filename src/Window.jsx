import React from "react";
import tw from "twin.macro";

const baseWindowStyle = tw`absolute border-[5px] rounded-[5px] p-[7px] pt-[10px] flex flex-col`;

const themes = {
  black: {
    regular: tw`bg-white border-black text-black [&>.inner-bar]:text-black [&>.inner-window]:bg-black [&>.inner-window]:text-white`,
    inverted: tw`bg-black border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:text-black`,
  },
  blue: {
    regular: tw`bg-white border-blue text-blue [&>.inner-bar]:text-blue [&>.inner-window]:bg-blue [&>.inner-window]:text-white`,
    inverted: tw`bg-blue border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:text-blue`,
  },
  yellow: {
    regular: tw`bg-white border-yellow text-yellow [&>.inner-bar]:text-yellow [&>.inner-window]:bg-yellow [&>.inner-window]:text-white`,
    inverted: tw`bg-yellow border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:text-yellow`,
  },
  red: {
    regular: tw`bg-white border-red text-red [&>.inner-bar]:text-red [&>.inner-window]:bg-red [&>.inner-window]:text-white`,
    inverted: tw`bg-red border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:text-red`,
  },
  cyan: {
    regular: tw`bg-white border-cyan text-cyan [&>.inner-bar]:text-cyan [&>.inner-window]:bg-cyan [&>.inner-window]:text-white`,
    inverted: tw`bg-cyan border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:text-cyan`,
  },
  magenta: {
    regular: tw`bg-white border-magenta text-magenta [&>.inner-bar]:text-magenta [&>.inner-window]:bg-magenta [&>.inner-window]:text-white`,
    inverted: tw`bg-magenta border-white text-white [&>.inner-bar]:text-white [&>.inner-window]:bg-white [&>.inner-window]:text-magenta`,
  },
};

const Window = ({ children, theme, inverted = false }) => {
  return (
    <div
      tw="absolute border-[5px] rounded-[5px] p-[7px] pt-[10px] flex flex-col"
      css={[
        baseWindowStyle,
        themes[theme][inverted ? "inverted" : "regular"],
        tw`top-72 left-72`,
      ]}
    >
      <div
        className="inner-bar"
        tw="flex items-end justify-between text-[2rem] leading-[70%] font-medium"
      >
        <h2 tw="mr-6">SKETCHES</h2>
        <button
          onClick={() => {
            console.log("close window");
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 23.6002V18.0002H4.5V13.5002H9V10.2502H4.5V5.8002H0V0.200195H5.5V4.7002H9.95V9.0502H13.55V4.7002H18V0.200195H23.55V5.8002H19V10.2502H14.5V13.5002H19V18.0002H23.55V23.6002H18V19.1502H13.55V14.7002H9.95V19.1502H5.5V23.6002H0Z"
              tw="fill-blue"
            />
          </svg>
        </button>
      </div>
      <div className="inner-window" tw="w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Window;
