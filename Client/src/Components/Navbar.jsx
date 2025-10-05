import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between items-center p-[10px] navbar">
      <h1 className="md:text-xl font-bold text-white">
        <Link to="/">SkillMart</Link>
      </h1>
      <ul className="md:flex space-x-6 text-white font-medium  hidden">
        <li className="hover:underline cursor-pointer">Work</li>
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Learn</li>
      </ul>
      <div className="flex gap-4">
        <Link
          className="bg-[#C9FF4D] text-black p-1 rounded"
          to="/register"
        >
          Register
        </Link>

        <Link
          className="bg-[#C9FF4D] text-black p-1   rounded"
          to="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
