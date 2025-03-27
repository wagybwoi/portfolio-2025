import React from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";
import Window from "./Window";
import Content from "./WindowContent";

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
        <Window title="Sketches" theme="black">
          {Content.intro.markup}
        </Window>
      </main>
    </>
  );
}

export default App;
