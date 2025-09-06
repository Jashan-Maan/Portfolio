import React from "react";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Cards = ({ title, description, src, github, link, tag }) => {
  return (
    <div className="w-96 rounded-lg bg-gray-200 text-black text-base flex flex-col justify-center items-center gap-2  hover:scale-105 transition-all duration-300 cursor-pointer mt-2 shrink-0">
      <img
        className="rounded-tl-lg rounded-tr-lg w-full bg-cover bg-center"
        src={src}
        alt={title}
      />
      <div className="w-full text-center font-semibold text-2xl">
        <h1>{title}</h1>
      </div>
      <div
        id="scroll-bar"
        className="w-full text-center text-sm font-normal px-3 h-10 overflow-auto"
      >
        <p>{description}</p>
      </div>
      <div className="w-full flex justify-evenly items-center flex-wrap ">
        {tag.map((item, idx) => (
          <span
            className="bg-neutral-300 py-1 px-3 text-black rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            key={idx}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex justify-evenly gap-4 py-3 px-5 w-full">
        <button className="text-xl opacity-75 hover:opacity-100 hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer">
          <a href={link}>
            <CiShare1 />
          </a>
        </button>
        <button className="text-xl opacity-75 hover:opacity-100 hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer">
          <a href={github}>
            <FaGithub />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cards;
