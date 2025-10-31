<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/Login.jsx";
import FYPPage from "./pages/FYPage.jsx";
import ProfilePage from "./pages/ProfileF.jsx";
import ProjectDetailsPage from "./pages/Projectid.jsx";
import DashboardPage from "./pages/DashboardF.jsx";
import NotificationPage from "./pages/NotificationF.jsx";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './pages/LandingPage.jsx'
import './App.css'
import LoginPage from './pages/Login.jsx'
import Layout from './Components/Layout'
import MyProjects from './pages/MyProjects.jsx'
import Sidebar from './components/ui/SideBar'
import Navbar from './components/ui/Navbar'
import FYPPage from './pages/FYPage.jsx'
import ProfilePage from './pages/ProfileF.jsx'
import ProjectDetailsPage from './pages/Projectid.jsx'
>>>>>>> 52fa473fd83470ff489cd7d57fab707044798c9c

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/fyp" element={<FYPPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/project/:id" element={<ProjectDetailsPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
    </Routes>
  );
=======
    <div>
      {/* <LoginPage /> */}
      {/* <LandingPage/> */}
      {/* <FYPPage/> */}
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      <Layout/>
      {/* <ProfilePage /> */}
      {/* <ProjectDetailsPage /> */}

    </div>
  )
>>>>>>> 52fa473fd83470ff489cd7d57fab707044798c9c
}

export default App;
