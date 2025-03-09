import React, { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  OrthographicCamera,
  RenderTexture,
  Text,
  useTexture,
} from "@react-three/drei";
import {
  Color,
  LinearFilter,
  NearestFilter,
  NearestMipMapNearestFilter,
  Texture,
} from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float u_time;
  uniform sampler2D u_renderTex;
  uniform sampler2D u_noiseTex1;
  uniform sampler2D u_noiseTex2;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  
  void main() {
    vec2 noiseOffset = vec2(
      fract(vUv.x/10.0 + u_time/20.0),
      fract(vUv.y/4.0 + u_time/20.0)
    );
    vec4 noiseTex1 = texture2D(u_noiseTex1, noiseOffset);
    
    vec4 noiseTex2 = texture2D(u_noiseTex2, vUv);
    
    vec2 offset = vec2(
      vUv.x + (noiseTex1.r - 0.5)/5.0,
      fract(
        vUv.y * 5.0 +
        (
          u_time/1.0 +
          (noiseTex1.y - 0.5)*5.0 +
          (noiseTex2.r - 0.5)*2.0
        )/2.0
      )
    );
    float renderTexR = texture2D(u_renderTex, offset+vec2(-0.01, -0.02)).r;
    float renderTexG = texture2D(u_renderTex, offset+vec2(0.01, 0.02)).g;
    float renderTexB = texture2D(u_renderTex, offset+vec2(-0.01, -0.02)).b;

    vec4 color = vec4(renderTexR, renderTexG, renderTexB, 1.0);

    if(color.r == 0.0 && color.g == 0.0 && color.b == 0.0) color = vec4(u_color1, 1.0);
    if(color.r == 0.0 && color.g == 1.0 && color.b == 0.0) color = vec4(u_color2, 1.0);

    gl_FragColor = color;
    // gl_FragColor = texture2D(u_renderTex, vUv);
  }
`;

const RadicalEffect = ({ assets }) => {
  const materialRef = useRef();
  const rtRef = useRef();
  const [smileyTex] = useTexture(["smiley.png"]);
  const uniforms = useMemo(
    () => ({
      u_time: {
        type: "f",
        value: 0.0,
      },
      u_renderTex: { type: "t", value: new Texture() },
      // u_renderTex: { type: "t", value: smileyTex },
      u_noiseTex1: { type: "t", value: assets.noiseMap1 },
      u_noiseTex2: { type: "t", value: assets.noiseMap2 },
      // u_color1: { value: new Color("#0026e6") },
      u_color1: { value: new Color("#10100E") },
      u_color2: { value: new Color("#01FDFF") },
    }),
    []
  );

  useEffect(() => {
    assets.noiseMap1.minFilter = LinearFilter;
  }, []);

  useFrame((state) => {
    materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
    materialRef.current.uniforms.u_renderTex.value = rtRef.current;
  });

  return (
    <shaderMaterial
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      ref={materialRef}
    >
      <RenderTexture ref={rtRef} anisotropy={16}>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 1]}
          left={-4.5}
          right={4.5}
          top={1}
          bottom={-1}
        />
        <color attach="background" args={["#000"]} />
        <mesh>
          <planeGeometry args={[10, 1.7]} rotation={[0, 0, 0]}></planeGeometry>
          <meshBasicMaterial map={smileyTex} />
        </mesh>
      </RenderTexture>
    </shaderMaterial>
  );
};

export default RadicalEffect;
