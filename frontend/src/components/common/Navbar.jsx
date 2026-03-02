// // import { useState, useEffect, useRef } from "react";
// // import { useNavigate } f
// import React from 'react'

// function Navbar() {
//   return (
//     <div>
//       <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
//         <h1 className="text-2xl font-bold text-blue-600">
//           MasterDashboard
//         </h1>

//         <ul className="hidden md:flex gap-8 font-medium text-gray-700">
//           <li className="hover:text-blue-600 cursor-pointer">Home</li>
//           {/* <li className="hover:text-blue-600 cursor-pointer">Health</li>
//           <li className="hover:text-blue-600 cursor-pointer">Education</li>
//           <li className="hover:text-blue-600 cursor-pointer">MNREGA</li> */}
//         </ul>

//         <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
//           Contact
//         </button>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Strip */}
      <div className="bg-blue-900 text-white text-sm py-1 px-6 flex justify-between">
        <p>Government of India | District Monitoring Portal</p>
        <p className="cursor-pointer hover:underline" onClick={() => navigate("/login")}>
          Login
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Emblem"
            className="w-10"
          />
          <h1 className="text-xl font-bold text-blue-800">
            District Dashboard Portal
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-700 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 cursor-pointer">About</li>
          <li className="hover:text-blue-700 cursor-pointer">Departments</li>
          <li className="hover:text-blue-700 cursor-pointer">Reports</li>
        </ul>

        <button
          onClick={() => navigate("/contact")}
          className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
        >
          Contact
        </button>
      </nav>
    </>
  );
}

export default Navbar;