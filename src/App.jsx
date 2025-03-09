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
        <div className="fullscreen" tw="bg-[rgba(0,0,0,0.6)]"></div>
      </div>
      {/* Interface */}
      <main className="fullscreen">
        <Window theme="blue" inverted={false} />
      </main>
    </>
  );
}

export default App;
