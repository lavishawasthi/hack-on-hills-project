import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Folder, CreditCard, Settings, LogOut } from "lucide-react";
import Profile from "../../assets/profile.jpg"

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={18} /> },
    { name: "My Projects", path: "/projects", icon: <Folder size={18} /> },
    { name: "Post Project", path: "/post-project", icon: <Folder size={18} /> },
    { name: "Payments", path: "/payments", icon: <CreditCard size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside
      className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64  
      bg-[linear-gradient(135deg,_#50589C_0%,_#5E63AA_45%,_#B7B8E3_85%,_#E6E7F6_130%)]
      text-white flex flex-col justify-between px-6 py-6 z-40
      border-r border-white/20 shadow-[0_4px_30px_rgba(80,88,156,0.25)]
      overflow-hidden"
    >
      {/* 🔹 Glossy Overlays (behind content) */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 mix-blend-overlay pointer-events-none z-0" />

      {/* 🔹 Sidebar Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        
        {/* Project Name + Profile Section */}
        <div className="flex flex-col items-center mt-2 mb-4">
          <div className="w-20 h-20 rounded-full border-4 border-[#7030DE] bg-white flex items-center justify-center shadow-md">
            <img
              src={Profile}
              alt="User"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-white">John Doe</h2>
          <p className="text-sm text-white/80">UI Designer</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-5 -mt-2 pl-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#7030DE] font-semibold shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
