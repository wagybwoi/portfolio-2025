import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

import CloseButtonIcon from "./CloseButtonIcon";

const Window = ({
  children,
  ChildComponent = null,
  pos,
  title,
  theme = "black",
  inverted = false,
  removeWindow,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: pos?.x || 0, y: pos?.y || 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const scale = useSpring({
    y: isOpen ? 1 : 0,
    config: {
      duration: 75,
    },
    onRest: (e) => {
      // Once window is visually closed, remove from App state
      if (e.value.y === 0) {
        removeWindow(title);
      }
    },
  });

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

  const close = () => {
    setIsOpen(false);
  };

  return (
    <animated.div
      className={`window theme-${theme}${inverted ? " inverted" : ""}`}
      style={{ ...move, scaleY: scale.y }}
      ref={windowRef}
    >
      <div
        className={`inner-bar ${isDragging ? "grabbing" : ""}`}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <h2 className="mr-6">{title}</h2>
        <button className="close-button" onClick={close}>
          <CloseButtonIcon />
        </button>
      </div>
      <div className="inner-window">
        {children || <ChildComponent close={close} />}
      </div>
    </animated.div>
  );
};

export default Window;
