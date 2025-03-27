import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Window = ({ children, title, theme, inverted = false }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState({ x: 400, y: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const scale = useSpring({ y: isOpen ? 1 : 0, config: { duration: 75 } });
  const move = useSpring({
    transform: `translate(${position.x}px, ${position.y}px)`,
    config: { tension: 500 },
  });

  const handleDragStart = (clientX, clientY) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
      setIsDragging(true);
      document.querySelector("body").style.cursor = "grabbing";
    }
  };

  const handleDragMove = (clientX, clientY) => {
    if (isDragging) {
      setPosition({
        x: clientX - dragOffset.x,
        y: clientY - dragOffset.y,
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    document.querySelector("body").style.removeProperty("cursor");
  };

  // Mouse event handlers
  const onMouseDown = (e) => {
    handleDragStart(e.clientX, e.clientY);
  };

  // Touch event handlers
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      handleDragMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      const touch = e.touches[0];
      handleDragMove(touch.clientX, touch.clientY);
    };

    const onMouseUp = () => {
      handleDragEnd();
    };

    const onTouchEnd = () => {
      handleDragEnd();
    };

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, dragOffset]);

  return (
    <animated.div
      className="window"
      style={{ ...move, scaleY: scale.y }}
      ref={windowRef}
    >
      <div
        className={`inner-bar ${isDragging ? "grabbing" : ""}`}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <h2 className="select-none mr-6">{title}</h2>
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
