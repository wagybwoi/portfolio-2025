import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <main className="relative w-full h-full">
        <div className="absolute w-full h-full top-0 left-0">
          <Canvas gl={{ antialias: false, alpha: true }}>
            {/* <Scene /> */}
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default App;
