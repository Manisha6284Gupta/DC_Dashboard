
import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileSidebar({ isOpen }) {
  const navigate = useNavigate();

  const menuItems = [
    // const menuItems = [
  { name: "Dashboard Overview", path: "/dashboard-overview" },
  { name: "Submit MNREGA Work Data", path: "/submit-work-data" },
  { name: " Profile", path: "/admin-profile" },
  { name: "Settings", path: "/account-settings" },
  { name: "Logout", path: "/logout" },
// ];
  ];

  return (
    <div
      className={`fixed top-16 right-0 w-44 bg-blue-900 text-white 
      h-[calc(100vh-4rem)] shadow-lg 
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-6">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer hover:text-gray-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileSidebar;