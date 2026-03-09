import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Strip */}
      <div className="bg-blue-900 text-white text-sm py-1 px-6 flex justify-between">
        <p>Government of India | District Monitoring Portal</p>
        <p>logout</p>
      </div>
     

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Emblem"
            className="w-10"
          />

          <h1 className="text-xl font-bold text-blue-800">
            DC Dashboard
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Search Bar */}
          <div className="flex items-center border rounded-lg px-3 py-1 bg-gray-100">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          {/* Message Icon */}
          <div className="relative cursor-pointer">
            <FaEnvelope className="text-xl text-gray-600 hover:text-blue-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </div>

          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <FaBell className="text-xl text-gray-600 hover:text-blue-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              5
            </span>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm font-medium text-gray-700">
              DC Admin
            </span>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-9 h-9 rounded-full border-2 border-blue-600"
            />
            
            
          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;