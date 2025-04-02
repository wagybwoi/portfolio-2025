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
    title: "About",
    iconSrc: undefined,
    window: windowData["About"],
  },
  {
    title: "Sketches",
    iconSrc: undefined,
    window: windowData["Sketches"],
  },
  {
    title: "Socials",
    iconSrc: undefined,
    window: windowData["Socials"],
  },
  {
    title: "Contact",
    iconSrc: undefined,
    window: windowData["Contact"],
  },
];

function App() {
  const [windows, setWindows] = useState([]);

  useEffect(() => {
    console.log(windows);
  }, [windows]);

  // Trigger default Welcome window
  // TODO: make sure setTimeout is using the correct state
  useEffect(() => {
    setTimeout(() => {
      setWindows([...windows, windowData.Sketches]);
    }, 1000);
  }, []);

  const openWindow = (window) => {
    setWindows([...windows, window]);
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
                  openWindow(icon.window);
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
                <div className="desktop-icon-title">{icon.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Windows */}
        {windows.map((windowItem, index) => (
          <Window
            title={windowItem.title}
            key={index}
            ChildComponent={windowItem.WindowContent}
            {...windowItem.props}
          />
        ))}

        {/* <Window
          title="Welcome"
          theme="black"
          pos={{ x: 800, y: 450 }}
          ChildComponent={WindowTypes.Welcome}
        /> */}

        {/* <Window title="Socials" theme="red" pos={{ x: 400, y: 200 }}>
          <WindowTypes.Socials />
        </Window> */}

        {/* <Window title="Sketches" theme="blue" pos={{ x: 400, y: 200 }}>
          <WindowTypes.Sketches />
        </Window> */}

        {/* <Window
          title="Contact"
          theme="yellow"
          inverted
          pos={{ x: 100, y: 100 }}
        >
          <WindowTypes.Contact />
        </Window> */}
      </main>
    </>
  );
}

export default App;
