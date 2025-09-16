import React from "react";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Cards = ({ title, src, github, link, tag }) => {
  return (
    <div className="w-full h-full rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-300 flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
      <img
        className="w-full h-48 object-cover border-b border-slate-700"
        src={src}
        alt={title}
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-2xl text-amber-200 mb-2">{title}</h3>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tag.map((tag, idx) => (
            <span
              className="bg-gray-700 py-1 px-3 text-amber-200 rounded-full text-xs font-semibold"
              key={idx}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-auto pt-4 border-t border-slate-700">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
            className="text-3xl text-gray-400 hover:text-amber-200 transform transition-transform duration-300 hover:scale-125"
          >
            <CiShare1 />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-3xl text-gray-400 hover:text-amber-200 transform transition-transform duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
