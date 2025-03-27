import React from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";
import Window from "./Window";

import content from "./WindowContent";

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
        <Window title="Sketches" theme="black" pos={{ x: 800, y: 450 }}>
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
