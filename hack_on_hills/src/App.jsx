import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#c9defa]">
      <LoginPage />
    </div>
  )
}

export default App
