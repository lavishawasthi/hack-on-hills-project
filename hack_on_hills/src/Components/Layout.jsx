import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./UI/SideBar";
import Navbar from "./UI/Navbar";
import MyProjects from "../pages/Dashboard";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64"> 
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-20 px-8 min-h-screen bg-gray-50">
          {/* <Outlet /> */}
          <MyProjects/>
        </main>
      </div>
    </div>
  );
};

export default Layout;
