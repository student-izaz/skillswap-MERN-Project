import React from "react";
import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi"; // feather message icon
import UserCards from "../components/UserCards";
import { assets } from "../assets/assets";
import Sidebar from "./Sidebar";


const HomePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-10">
        <img
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
          onClick={() => setIsSidebarOpen(true)}
        />

        <input
          type="text"
          placeholder="Search..."
          className="flex-1 mx-4 px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <FiMessageCircle className="text-xl text-gray-700" />
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Banner */}
      <section className="w-full h-40 bg-blue-300 flex items-center justify-center text-white text-lg font-semibold">
        <img src={assets.topBanner} alt="" />
      </section>

      {/* Main Content - User Cards */}
      <main className="flex-1 p-4 space-y-4">
        <UserCards/>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-sm py-3 shadow-inner">
        &copy; 2025 SkillSwap. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
