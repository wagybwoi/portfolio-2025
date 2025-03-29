import React from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Three/Scene";
import Window from "./Windows/Window";

import content from "./Windows/WindowContent/WindowContent";

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
        <Window title="Welcome" theme="black" pos={{ x: 800, y: 450 }}>
          {content.welcome.markup}
        </Window>
        <Window title="Socials" theme="red" pos={{ x: 400, y: 200 }}>
          {content.socials.markup}
        </Window>
      </main>
    </>
  );
}

export default App;
