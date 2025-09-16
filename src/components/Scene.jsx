import { Cylinder, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  let tex = useTexture("./3d.png");
  let cylinder = useRef(null);

  const { viewport } = useThree();

  useFrame((state, delta) => {
    cylinder.current.rotation.y += delta * 0.5;
  });
  return (
    <group
      scale={Math.min(viewport.width, viewport.height) / 2.5}
      rotation={[0, 1.4, 0.5]}
    >
      <mesh ref={cylinder}>
        <Cylinder args={[1, 1, 1, 180, 180, true]}>
          <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </Cylinder>
      </mesh>
    </group>
  );
};

export default Scene;
