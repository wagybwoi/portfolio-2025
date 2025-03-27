import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Window = ({ children, theme, inverted = false }) => {
  const [isOpen, setIsOpen] = useState(true);
  const scale = useSpring({ y: isOpen ? 1 : 0, config: { duration: 75 } });

  return (
    <animated.div className="window top-72 left-72" style={{ scaleY: scale.y }}>
      <div className="inner-bar">
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
      <div className="inner-window">{children}</div>
    </animated.div>
  );
};

export default Window;
