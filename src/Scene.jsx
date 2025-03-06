import React, { useMemo, useRef } from "react";
import Television from "./Television";
import { useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  RenderTexture,
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

const Scene = () => {
  const { viewport, size, gl, canvas, camera } = useThree();
  const planeRef = useRef();
  const pCamRef = useRef();

  return (
    <>
      {/* <OrbitControls /> */}
      <OrthographicCamera
        makeDefault
        left={-size.width / 2}
        right={size.width / 2}
        top={size.height / 2}
        bottom={-size.height / 2}
      />
      <mesh ref={planeRef} position={[0, 0, -2]}>
        {/* <planeGeometry args={[size.width, size.height]} />
        <meshBasicMaterial transparent>
          <RenderTexture
            width={size.width / 5}
            height={size.height / 5}
            // width={size.width}
            // height={size.height}
            minFilter={LinearFilter}
            magFilter={NearestFilter}
            samples={0}
            attach='map'
          >
            <PerspectiveCamera
              makeDefault
              fov={40}
              position={[
                0,
                0,
                pCamRef.current ? Math.abs((Math.max(size.width, size.height) / 4) * Math.tan(pCamRef?.current.fov * 2)) : 0,
              ]}
              ref={pCamRef}
              far={5000}
            />
            <Television />
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} />
          </RenderTexture>
        </meshBasicMaterial> */}
      </mesh>
    </>
  );
};

export default Scene;
