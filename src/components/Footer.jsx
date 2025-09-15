import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-6 relative bottom-0 left-0 px-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-2 md:mb-0">
          Made with love by Jashan Maan | &copy; {new Date().getFullYear()} .
          All rights reserved.
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/Jashan-Maan"
            target="_blank"
            rel="noreferrer"
            className="text-xl opacity-75 hover:opacity-100
            hover:scale-110 transition "
          >
            <FaGithub />
          </a>
          <a
            href="mailto:jashanmaan521@gmail.com"
            className="text-xl opacity-75 hover:opacity-100
            hover:scale-110 transition"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/jashan-maan/"
            target="_blank"
            rel="noreferrer"
            className="text-xl opacity-75 hover:opacity-100
            hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
