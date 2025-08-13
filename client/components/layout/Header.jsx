import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch logged-in user name from localStorage or API
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Example storage
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center">
      
      {/* Search Bar */}
      <div className="relative w-1/2 max-w-sm">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-md border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Profile Dropdown */}
      <div className="relative flex items-center gap-2" ref={dropdownRef}>
        <span className="text-gray-700 font-medium hidden sm:block">{userName}</span>
        <FaUserCircle
          className="text-3xl text-gray-500 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />

        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-md border border-gray-100">
            <button
              onClick={() => navigate("/profile")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              User Profile
            </button>
            <button
              onClick={() => navigate("/settings")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              Settings
            </button>
            <hr className="my-1" />
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
