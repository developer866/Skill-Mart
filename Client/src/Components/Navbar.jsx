import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-[10%] bg-[#F7F7F7] navbar">
      <h1 className="md:text-2xl font-bold text-white">SkillMart</h1>
      <ul className="md:flex space-x-6 text-white font-medium  hidden">
        <li className="hover:underline cursor-pointer">Work</li>
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Learn</li>
      </ul>
      <div>
        <button className="bg-[#C9FF4D] text-black md:px-4 md:py-2 mx-2 rounded-full">
          register
        </button>
        <button className="bg-[#C9FF4D] text-black md:px-4 md:py-2  rounded-full">
          login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
