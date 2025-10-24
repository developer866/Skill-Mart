import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#111]">
      <nav className=" flex justify-between items-center py-4 text-white md:w-[90%] md:m-auto">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">SkillMart</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:text-[#C9FF4D] cursor-pointer transition-colors">
            Work
          </li>
          <li className="hover:text-[#C9FF4D] cursor-pointer transition-colors">
            Services
          </li>
          <li
            className="hover:text-[#C9FF4D] cursor-pointer transition-colors"
            id="about"
            href="#about"
          >
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#C9FF4D] cursor-pointer transition-colors">
            Learn
          </li>
        </ul>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <Link
            className="bg-[#C9FF4D] text-black px-3 py-1 rounded font-medium hover:bg-lime-300 transition-all"
            to="/register"
          >
            Register
          </Link>
          <Link
            className="bg-[#C9FF4D] text-black px-3 py-1 rounded font-medium hover:bg-lime-300 transition-all"
            to="/login"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-14 right-0 w-[70%] bg-[#111] text-center py-4 space-y-4 md:hidden">
            <li className="hover:text-[#C9FF4D] cursor-pointer ">
              <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#C9FF4D] cursor-pointer ">
              <Link to="/work" onClick={() => setMenuOpen(!menuOpen)}>
                Work
              </Link>
            </li>
            <ul className="flex flex-col space-y-4">
              <li className="hover:text-[#C9FF4D] cursor-pointer ">
                <Link to="/service" onClick={() => setMenuOpen(!menuOpen)}>
                  Service
                </Link>
              </li>

              <li className="hover:text-[#C9FF4D] cursor-pointer ">
                <Link to="/Contact" onClick={() => setMenuOpen(!menuOpen)}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="w-[70%] m-auto flex flex-col gap-3 mt-4">
              <Link
                className="bg-[#C9FF4D] text-black px-3 py-2 rounded"
                to="/register"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Register
              </Link>
              <Link
                className="bg-[#C9FF4D] text-black px-3 py-2 rounded"
                to="/login"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}

export default Navbar;
