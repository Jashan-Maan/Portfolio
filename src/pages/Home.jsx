import React from "react";
import Circular from "../components/Circular";

const Home = () => {
  return (
    <section
      id="Home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute -top-12 left-0 w-full h-full z-0">
        <Circular />
      </div>
      <div className="absolute top-30 left-0 w-full h-full z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:justify-between px-6 sm:px-10 lg:px-16">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-200 mb-4 text-center lg:text-left drop-shadow-lg">
            Jashan Maan
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center lg:text-left">
            Full Stack Developer
          </h2>
          <p className="text-lg text-amber-50 max-w-lg text-center lg:text-left mt-2 drop-shadow-md">
            Crafting intuitive and beautiful digital experiences with a passion
            for user-centric design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
