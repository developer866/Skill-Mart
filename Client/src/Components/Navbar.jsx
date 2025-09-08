import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-[10%] bg-[#F7F7F7] navbar ">
      <h1 className="text-4xl font-bold text-white">SkillMart</h1>
      <ul className="flex space-x-6 text-white font-medium text-2xl">
        <li className="hover:underline cursor-pointer">Work</li>
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Learn</li>
      </ul>
      <button className="bg-[#C9FF4D] text-black px-4 py-2 rounded-full font-semibold text-2xl">
        Start project
      </button>
    </nav>
  );
}

export default Navbar;
