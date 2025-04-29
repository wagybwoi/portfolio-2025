import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Three/Scene";
import Window from "./Windows/Window";
import WindowTypes from "./Windows/WindowContent/WindowTypes";

import aboutIcon from "../images/icons/about.png";
import socialsIcon from "../images/icons/socials.png";
import experimentsIcon from "../images/icons/experiments.png";
import contactIcon from "../images/icons/contact.png";

const windowData = {
  About: {
    title: "About Me",
    WindowContent: WindowTypes.Welcome,
    props: {
      theme: "black",
      inverted: false,
      className: "about-me",
    },
  },
  Experiments: {
    title: "Experiments",
    WindowContent: WindowTypes.Experiments,
    props: {
      theme: "blue",
      inverted: false,
      className: "experiments",
    },
  },
  Socials: {
    title: "Socials",
    WindowContent: WindowTypes.Socials,
    props: {
      theme: "red",
      inverted: false,
      className: "socials",
    },
  },
  Contact: {
    title: "Contact Me",
    WindowContent: WindowTypes.Contact,
    props: {
      theme: "yellow",
      inverted: true,
      className: "contact",
    },
  },
};

const mainIcons = [
  {
    name: "About",
    window: windowData["About"],
    iconSrc: aboutIcon,
  },
  {
    name: "Experiments",
    window: windowData["Experiments"],
    iconSrc: experimentsIcon,
  },
  {
    name: "Socials",
    window: windowData["Socials"],
    iconSrc: socialsIcon,
  },
  {
    name: "Contact",
    window: windowData["Contact"],
    iconSrc: contactIcon,
  },
];

function App() {
  const [windows, setWindows] = useState([]);

  // Trigger default Welcome window
  // TODO: make sure setTimeout is using the correct state
  // useEffect(() => {
  //   setTimeout(() => {
  //     setWindows([...windows, windowData.Experiments]);
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
      <div className="fullscreen background">
        <Canvas className="fullscreen" gl={{ antialias: false, alpha: true }}>
          <Scene />
        </Canvas>

        {/* Dimmed Background */}
        <div className="fullscreen bg-[rgba(0,0,0,0.6)]" />
      </div>

      {/* Interface */}
      <main className="fullscreen">
        {/* Desktop Icons */}
        <div className="desktop">
          {/* Animated Text */}
          <div className="bg-text">
            <div>
              <div>
                <span>Ahmed</span>
                <span>Ahmed</span>
              </div>
              <div>
                <span>Wageh</span>
                <span>Wageh</span>
              </div>
            </div>
          </div>

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
                    draggable="false"
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
