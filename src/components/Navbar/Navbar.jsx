import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="bg-white text-white p-4 shadow-black shadow-lg inline-flex w-full justify-between items-center">
      <MdOutlineSegment className="text-black w-8 h-8" />
      <div className="flex items-center gap-2 p-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <div className="text-gray-400">
            <FaRegUser />
          </div>
        </div>
        <span className="text-gray-700 text-lg">Wasif</span>
      </div>
    </header>
  );
};

export default Navbar;
