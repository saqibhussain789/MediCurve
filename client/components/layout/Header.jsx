import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center">
      
      {/* <h2 className="text-xl font-semibold text-gray-700">MediCurve</h2> */}

      {/* Center - Search Bar */}
      <div className="relative w-1/2 max-w-sm">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-md border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex items-center gap-4">
        
        <FaUserCircle className="text-3xl text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
