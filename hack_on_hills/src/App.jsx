import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './Components/LandingPage'
import './App.css'
import LoginPage from './pages/Login.jsx'
import Sidebar from './Components/UI/SideBar'
import Navbar from './Components/UI/Navbar'
import Layout from './Components/UI/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <div className="min-h-screen w-full flex items-center justify-center bg-[#c9defa]">
      <LoginPage />
    </div> */}
      <LandingPage/>
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      {/* <Layout/> */}
    </div>
  )
}

export default App