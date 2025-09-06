import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-neutral-800 sticky top-0 w-full h-20 flex  justify-between rounded items-center gap-4  py-5 text-lg font-semibold px-16 text-white z-10">
      <div>
        <a href="#Hero" className="text-2xl font-bold font-[cursive]">
          Jashan Maan
        </a>
      </div>
      <div className="flex gap-4">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">My Work</a>
      </div>
      <button className="bg-emerald-500 text-white px-4 py-1 rounded-full font-normal hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-95 ">
        <a className="flex gap-2 items-center hover:gap-3" href="#Contacts">
          Hire Me!
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
