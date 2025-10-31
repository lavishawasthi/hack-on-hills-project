import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './pages/LandingPage.jsx'
import './App.css'
import LoginPage from './pages/Login.jsx'
import Layout from './Components/Layout'
import MyProjects from './pages/Dashboard.jsx'
import Sidebar from './components/ui/SideBar'
import Navbar from './components/ui/Navbar'
import FYPPage from './pages/FYPage.jsx'
import ProfilePage from './pages/ProfileF.jsx'
import ProjectDetailsPage from './pages/Projectid.jsx'

function App() {
  
  return (
    <div>
      {/* <LoginPage /> */}
      {/* <LandingPage/> */}
      {/* <FYPPage/> */}
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      {/* <Layout/> */}
      {/* <ProfilePage /> */}
      <ProjectDetailsPage />

    </div>
  )
}

export default App