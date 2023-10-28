import { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Otp from './pages/Otp/Otp'
import Dashboard from './pages/Dashboard/Dashboard'

export const UserContext = createContext()

function App() {
  const songURL = ``
  const [isOtp, setIsOtp] = useState(false)
  const [isSongPlaying, setIsSongPlaying] = useState(false)
  const [songPlaylist, setSongPlaylist] = useState(songURL)

  return (
    <div className="App">
      <UserContext.Provider value={{ isOtp, setIsOtp, isSongPlaying, setIsSongPlaying, songPlaylist }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App
