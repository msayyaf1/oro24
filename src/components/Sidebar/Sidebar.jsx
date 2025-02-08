import React from "react";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-white p-4">
      <Image
        src="/assets/oro_logo.png"
        alt="Login"
        width={150}
        height={48}
        priority
      />
      <div>
        <ul className="flex flex-col">
          <li className="mb-2 inline-flex justify-start items-center cursor-pointer hover:text-gray-500 text-white">
            <FaTachometerAlt className="mr-1" /> Dashboard
          </li>
          <li className="mb-2 inline-flex justify-start items-center cursor-pointer hover:text-gray-500 text-white">
            <FaBuilding className="mr-1" /> Units
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
