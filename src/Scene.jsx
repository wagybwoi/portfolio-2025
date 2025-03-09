import React, { useRef } from "react";
import { useThree } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  RenderTexture,
  useTexture,
} from "@react-three/drei";
import {
  Color,
  LinearFilter,
  NearestFilter,
  RGBAFormat,
  RGBFormat,
  Texture,
  Vector3,
  WebGLRenderer,
} from "three";
import RadicalEffect from "./RadicalEffect.jsx";

const Scene = () => {
  const { viewport, size, gl, canvas, camera } = useThree();
  const planeRef = useRef();
  const pCamRef = useRef();
  const [noiseMap1, noiseMap2] = useTexture([
    "seamless_colored_noise_1.png",
    "seamless_colored_noise_2.jpg",
  ]);

  return (
    <>
      <OrthographicCamera
        makeDefault
        left={-size.width / 2}
        right={size.width / 2}
        top={size.height / 2}
        bottom={-size.height / 2}
      />
      <mesh ref={planeRef} position={[0, 0, -2]}>
        <planeGeometry args={[size.width, size.height]} />
        <meshBasicMaterial transparent>
          <RenderTexture
            width={size.width / 15}
            height={size.height / 15}
            // width={size.width}
            // height={size.height}
            minFilter={LinearFilter}
            magFilter={NearestFilter}
            samples={0}
            attach="map"
          >
            <OrthographicCamera
              makeDefault
              left={-size.width / 2}
              right={size.width / 2}
              top={size.height / 2}
              bottom={-size.height / 2}
            />
            <mesh position={[0, 0, -2]}>
              <planeGeometry
                args={[
                  Math.max(size.width, size.height),
                  Math.max(size.width, size.height),
                ]}
              />
              <RadicalEffect
                assets={{ noiseMap1: noiseMap1, noiseMap2: noiseMap2 }}
              />
            </mesh>
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </>
  );
};

export default Scene;
