import React from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Three/Scene";
import Window from "./Windows/Window";

import Content from "./Windows/WindowContent/WindowContent";

function App() {
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
        <Window
          title="Welcome"
          theme="black"
          pos={{ x: 800, y: 450 }}
          ChildComponent={Content.Welcome}
        />
        {/* <Window title="Socials" theme="red" pos={{ x: 400, y: 200 }}>
          <Content.Socials />
        </Window> */}
        <Window title="Sketches" theme="blue" pos={{ x: 400, y: 200 }}>
          <Content.Sketches />
        </Window>
        <Window
          title="Contact Me"
          theme="yellow"
          inverted
          pos={{ x: 100, y: 100 }}
        >
          <Content.Contact />
        </Window>
      </main>
    </>
  );
}

export default App;
