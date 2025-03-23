import React from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";
import Window from "./Window";

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
        <Window theme="black"></Window>
      </main>
    </>
  );
}

export default App;
