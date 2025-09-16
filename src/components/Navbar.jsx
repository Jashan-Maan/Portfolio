import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#Home"
              className="text-2xl font-bold font-[cursive] text-white"
            >
              Jashan Maan
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#Home"
              className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold"
            >
              My Work
            </a>
            <a
              href="#Contacts"
              className="bg-emerald-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
            >
              Hire Me!
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a
              href="#Home"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#About"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#Projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              My Work
            </a>
            <a
              href="#Contacts"
              onClick={() => setIsMenuOpen(false)}
              className="bg-emerald-500 text-white block w-1/2 mx-auto mt-4 px-3 py-2 rounded-full text-base font-medium"
            >
              Hire Me!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
