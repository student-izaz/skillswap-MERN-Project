// components/Sidebar.jsx
import React from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-100 bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Profile</h2>
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            className="w-20 h-20 rounded-full mx-auto"
            alt="user"
          />
          <h3 className="text-center font-bold mt-2">Aarav Mehta</h3>
          <p className="text-center text-sm text-gray-500">Full Stack Developer</p>

          <ul className="mt-6 space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer"><a href="/my-profile">Profile</a></li>
            <li className="hover:text-blue-600 cursor-pointer">Settings</li>
            <li className="hover:text-blue-600 cursor-pointer">Logout</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
