// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Folder, CreditCard, Settings, LogOut } from "lucide-react";

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
    // fixed so it touches the left edge of the viewport
    <aside className="fixed left-0 top-0 h-screen w-64 
  bg-[linear-gradient(135deg,_#50589C_0%,_#5E63AA_40%,_#B7B8E3_75%,_#DADBF3_100%)]
  text-white flex flex-col justify-between px-4 py-6 z-40">




      {/* PROFILE AT TOP */}
      <div className="mb-6">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium">
            A
          </div>
          <div>
            <div className="text-sm font-semibold">Ashish</div>
            <div className="text-xs text-white/80">Creator</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                  ${isActive ? "bg-white text-[#7030DE] font-semibold shadow-md" : "text-white/95 hover:bg-white/10"}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={`flex items-center justify-center w-8 h-8 rounded-md
                  ${isActive ? "bg-white/80 text-[#7030DE]" : "bg-white/0 text-white/90"}`}>
                  {item.icon}
                </span>

                <span className="text-sm">{item.name}</span>

                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-md bg-white" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout at bottom */}
      <div className="mt-6 pt-6 border-t border-white/20 px-2">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
