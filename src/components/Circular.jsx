import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const Circular = () => {
  return (
    <>
      <Canvas className="-mt-20" flat camera={{ fov: 30 }}>
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} intensity={1.5} />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1.2} // The bloom intensity.
            luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div className="w-full flex justify-center gap-8 items-center -mt-14 relative z-10">
        <a
          href="#Projects"
          className="bg-emerald-600 px-6 py-2 rounded-full text-lg font-semibold text-white hover:bg-white hover:text-emerald-600 hover:border-2 hover:border-emerald-600 hover:scale-95 transition-all duration-100 cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#Contacts"
          className="bg-blue-600 px-6 py-2 rounded-full text-lg font-semibold text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:scale-95 transition-all duration-100 cursor-pointer"
        >
          Contact Me
        </a>
      </div>
    </>
  );
};

export default Circular;
