import {
  Billboard,
  Environment,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { Heart } from "./Heart";

export const Experience = () => {
  const biki = useTexture("/images/biki.png");

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <Heart scale={0.1} />
        <Billboard scale={0.5}>
          <mesh>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={biki} transparent />
          </mesh>
        </Billboard>
      </Float>

      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
