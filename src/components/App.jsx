import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Three/Scene";
import Window from "./Windows/Window";

import WindowTypes from "./Windows/WindowContent/WindowTypes";

const windowData = {
  Welcome: {
    title: "Welcome",
    WindowContent: WindowTypes.Welcome,
    props: {
      theme: "black",
      inverted: false,
      pos: {
        x: 800,
        y: 450,
      },
    },
    iconSrc: "",
  },
  About: {
    title: "About Me",
    WindowContent: WindowTypes.Welcome,
    props: {
      theme: "black",
      inverted: false,
      pos: {
        x: 800,
        y: 450,
      },
    },
    iconSrc: "",
  },
  Sketches: {
    title: "Sketches",
    WindowContent: WindowTypes.Sketches,
    props: {
      theme: "blue",
      inverted: false,
      pos: {
        x: 400,
        y: 200,
      },
    },
    iconSrc: "",
  },
  Socials: {
    title: "Socials",
    WindowContent: WindowTypes.Socials,
    props: {
      theme: "red",
      inverted: false,
      pos: {
        x: 400,
        y: 200,
      },
    },
    iconSrc: "",
  },
  Contact: {
    title: "Contact Me",
    WindowContent: WindowTypes.Contact,
    props: {
      theme: "yellow",
      inverted: true,
      pos: {
        x: 100,
        y: 100,
      },
    },
    iconSrc: "",
  },
};

const mainIcons = [
  {
    name: "About",
    iconSrc: undefined,
    window: windowData["About"],
  },
  {
    name: "Sketches",
    iconSrc: undefined,
    window: windowData["Sketches"],
  },
  {
    name: "Socials",
    iconSrc: undefined,
    window: windowData["Socials"],
  },
  {
    name: "Contact",
    iconSrc: undefined,
    window: windowData["Contact"],
  },
];

function App() {
  const [windows, setWindows] = useState([]);

  // Trigger default Welcome window
  // TODO: make sure setTimeout is using the correct state
  // useEffect(() => {
  //   setTimeout(() => {
  //     setWindows([...windows, windowData.Sketches]);
  //   }, 1000);
  // }, []);

  const addWindow = (window) => {
    // Check if window is already in state
    if (!windows.some((w) => w.title === window.title)) {
      setWindows([...windows, window]);
    }
  };

  // Remove window from state
  const removeWindow = (windowTitle) => {
    setWindows(windows.filter((w) => w.title !== windowTitle));
  };

  return (
    <>
      {/* Background */}
      <div className="fullscreen">
        <Canvas className="fullscreen" gl={{ antialias: false, alpha: true }}>
          <Scene />
        </Canvas>
        <div className="fullscreen bg-[rgba(0,0,0,0.4)]"></div>
      </div>

      {/* Interface */}
      <main className="fullscreen">
        {/* Desktop Icons */}
        <div className="desktop">
          <div className="desktop-icons-main">
            {mainIcons.map((icon, index) => (
              <button
                className="desktop-icon"
                key={`main-icon-${index}`}
                onClick={() => {
                  addWindow(icon.window);
                }}
              >
                {icon?.iconSrc ? (
                  <img
                    src={icon.iconSrc}
                    alt=""
                    className="desktop-icon-image"
                  />
                ) : (
                  <div className="desktop-icon-missing" />
                )}
                <div className="desktop-icon-title">{icon.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Windows */}
        {windows.map((windowItem) => (
          <Window
            key={`window-${windowItem.title}`}
            title={windowItem.title}
            ChildComponent={windowItem.WindowContent}
            {...windowItem.props}
            removeWindow={removeWindow}
          />
        ))}
      </main>
    </>
  );
}

export default App;
