import { Canvas } from "@react-three/fiber";
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const Circular = () => {
  return (
    <>
      <Canvas
        className="w-full h-[60vh] md:h-[80vh] -mt-16 md:-mt-20"
        flat
        camera={{ fov: 30 }}
      >
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
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 -mt-20 sm:-mt-16 relative z-10">
        <a
          href="#Projects"
          className="shadow-lg transform transition-all duration-300 bg-emerald-600 px-6 py-2 rounded-full text-base sm:text-lg font-semibold text-white hover:bg-emerald-700 hover:scale-105 hover:shadow-emerald-500/50"
        >
          Projects
        </a>
        <a
          href="#Contacts"
          className="shadow-lg transform transition-all duration-300 bg-blue-600 px-6 py-2 rounded-full text-base sm:text-lg font-semibold text-white hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/50"
        >
          Contact Me
        </a>
      </div>
    </>
  );
};

export default Circular;
