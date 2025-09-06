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
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1.5} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div className="w-full flex justify-center gap-8 items-center -mt-14 relative z-9">
        <button className="bg-emerald-600 px-6 py-2 rounded-full text-lg font-semibold text-white hover:bg-white hover:text-emerald-600 hover:border-2 hover:border-emerald-600 hover:scale-95 transition-all duration-100 cursor-pointer ">
          <a href="#Projects">Projects</a>
        </button>
        <button className="bg-blue-600 px-6 py-2 rounded-full text-lg font-semibold text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:scale-95 transition-all duration-100 cursor-pointer">
          <a href="#Contacts">Contact Me</a>
        </button>
      </div>
    </>
  );
};

export default Circular;
