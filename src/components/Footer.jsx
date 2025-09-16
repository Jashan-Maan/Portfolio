import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-sm">
          Made with ❤️ by Jashan Maan &copy; {new Date().getFullYear()}. All
          rights reserved.
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/Jashan-Maan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-2xl text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:jashanmaan521@gmail.com"
            aria-label="Send an Email"
            className="text-2xl text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/jashan-maan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-2xl text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
