import React from "react";
import { Bell, MessageSquare } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 bg-white shadow-md 
      flex items-center justify-between px-10 z-30"
    >
      {/* 🔹 Left: Project Name */}
      <h1
        className="text-2xl font-bold tracking-wide 
        bg-gradient-to-b from-[#7030DE] to-[#A38CF2]
        bg-clip-text text-transparent"
      >
        FreeChain
      </h1>

      {/* 🔹 Right: Icons */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative hover:scale-105 transition">
          <Bell className="text-[#7030DE] w-6 h-6" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Message Icon */}
        <button className="hover:scale-105 transition">
          <MessageSquare className="text-[#7030DE] w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
