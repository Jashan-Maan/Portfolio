import React from "react";

const Home = () => {
  return (
    <section
      id="Home"
      className="flex  items-center justify-center h-screen w-full  mt-4 flex-wrap px-16"
    >
      <div className="h-3/5 w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-amber-200 mb-6 drop-shadow-lg text-center">
          Jashan Maan - Full Stack Developer
        </h1>
        <p className="text-lg text-amber-50 max-w-xl  px-4 text-center mt-4 drop-shadow-lg">
          Crafting intuitive and beautiful digital experiences with a passion
          for user-centric design.
        </p>
      </div>
      <div className="h-3/5 w-1/2 flex items-center justify-center">
        <img
          className=" object-cover rounded-full h-80 w-80 shadow "
          src="./pfp.png"
          alt=""
        />
      </div>
      <div className=" w-full flex flex-col items-center justify-center">
        <button className="mt-8 shadow bg-blue-600 px-6 py-2 rounded-full text-lg font-semibold text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:scale-95 transition-all duration-100 cursor-pointer">
          <a href="#Contacts">Contact Me</a>
        </button>
      </div>
    </section>
  );
};

export default Home;
