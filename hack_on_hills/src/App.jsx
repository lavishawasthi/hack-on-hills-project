import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './Components/LandingPage'
import './App.css'
import LoginPage from './pages/Login.jsx'
import Sidebar from './Components/UI/SideBar'
import Navbar from './Components/UI/Navbar'
import Layout from './Components/Layout'
import MyProjects from './pages/Dashboard.jsx'

function App() {

  return (
    <div>
    {/* <div className="min-h-screen w-full flex items-center justify-center bg-[#c9defa]">
      <LoginPage />
    </div> */}
      {/* <LandingPage/> */}
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      <Layout/>
      {/* <MyProjects/> */}
    </div>
  )
}

export default App