import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './Components/LandingPage'
import './App.css'
import Sidebar from './Components/UI/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <LandingPage/> */}
      <Sidebar/>
    </div>
  )
}

export default App
