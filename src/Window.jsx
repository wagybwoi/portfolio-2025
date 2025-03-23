import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const baseWindowStyle =
  "absolute border-[5px] rounded-[5px] p-[7px] pt-[10px] flex flex-col origin-center uppercase [& .close-button]:(min-w-0) [& button:not(.close-button)]:(min-w-[132px] mx-auto block text-[28px] uppercase leading-[80%] px-10 py-2 border-[5px] rounded-[5px])";

const themes = {
  black: {
    regular:
      "bg-white border-black text-black [&>.inner-bar]:text-black [&>.inner-bar>button>svg>path]:fill-black [&>.inner-window]:(bg-black text-white)",
    inverted:
      "bg-black border-white text-white [&>.inner-bar]:text-white [&>.inner-bar>button>svg>path]:fill-white [&>.inner-window]:(bg-white text-black)",
  },
  blue: {
    regular:
      "bg-white border-blue text-blue [&>.inner-bar]:text-blue [&>.inner-bar>button>svg>path]:fill-blue [&>.inner-window]:(bg-blue text-white)",
    inverted:
      "bg-blue border-white text-white [&>.inner-bar]:text-white [&>.inner-bar>button>svg>path]:fill-white [&>.inner-window]:(bg-white text-blue)",
  },
  yellow: {
    regular:
      "bg-white border-yellow text-yellow [&>.inner-bar]:text-yellow [&>.inner-bar>button>svg>path]:(fill-yellow) [&>.inner-window]:(bg-yellow text-white)",
    inverted:
      "bg-yellow border-white text-white [&>.inner-bar]:text-white [&>.inner-bar>button>svg>path]:fill-white [&>.inner-window]:(bg-white text-yellow)",
  },
  red: {
    regular:
      "bg-white border-red text-red [&>.inner-bar]:text-red [&>.inner-bar>button>svg>path]:fill-red [&>.inner-window]:(bg-red text-white)",
    inverted:
      "bg-red border-white text-white [&>.inner-bar]:text-white [&>.inner-bar>button>svg>path]:fill-white [&>.inner-window]:(bg-white text-red)",
  },
  cyan: {
    regular:
      "bg-white border-cyan text-cyan [&>.inner-bar]:text-cyan [&>.inner-bar>button>svg>path]:fill-cyan [&>.inner-window]:(bg-cyan text-white)",
    inverted:
      "bg-cyan border-white text-white [&>.inner-bar]:text-white [&>.inner-bar>button>svg>path]:fill-white [&>.inner-window]:(bg-white text-cyan)",
  },
  magenta: {
    regular:
      "bg-white border-magenta text-magenta [&>.inner-bar]:text-magenta [&>.inner-bar>button>svg>path]:fill-magenta [&>.inner-window]:(bg-magenta text-white)",
    inverted:
      "bg-magenta border-white text-white [&>.inner-bar]:text-white [&>.inner-bar>button>svg>path]:fill-white [&>.inner-window]:(bg-white text-magenta)",
  },
};

const Window = ({ children, theme, inverted = false }) => {
  const [isOpen, setIsOpen] = useState(true);
  const scale = useSpring({ y: isOpen ? 1 : 0, config: { duration: 75 } });

  return (
    <animated.div
      className="absolute border-[5px] rounded-[5px] p-[7px] pt-[10px] flex flex-col"
      css={[
        baseWindowStyle,
        themes[theme][inverted ? "inverted" : "regular"],
        "top-72 left-72",
      ]}
      style={{ scaleY: scale.y }}
    >
      <div className="inner-bar flex items-end justify-between text-[2rem] leading-[70%] font-medium mb-1.5">
        <h2 className="mr-6">SKETCHES</h2>
        <button
          className="close-button"
          onClick={() => {
            console.log("close window");
            setIsOpen(!isOpen);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 23.6002V18.0002H4.5V13.5002H9V10.2502H4.5V5.8002H0V0.200195H5.5V4.7002H9.95V9.0502H13.55V4.7002H18V0.200195H23.55V5.8002H19V10.2502H14.5V13.5002H19V18.0002H23.55V23.6002H18V19.1502H13.55V14.7002H9.95V19.1502H5.5V23.6002H0Z" />
          </svg>
        </button>
      </div>
      <div className="inner-window w-full h-full">{children}</div>
    </animated.div>
  );
};

export default Window;
