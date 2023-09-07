import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Rb13";

const CanvasContainer = ({ driverRef }) => {
  return (
    <Canvas
      camera={{
        position: [
          -0.03982619235154236, 0.7374456005157746, 4.9451580218111095,
        ],
      }}
    >
      <ambientLight intensity={2} color="white" />
      <directionalLight position={[0, 0, 3]} />
      <pointLight position={[0, 0, 5]} />
      <pointLight position={[5, 0, 0]} />
      <directionalLight position={[5, 0, 0]} />
      <directionalLight />
      <OrbitControls enableZoom={false} />
      <Model driverRef={driverRef} />
    </Canvas>
  );
};

export default CanvasContainer;
