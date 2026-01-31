import { React, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//IMPORTED PAGES
import Homepage from './pages/homepage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes> 
      </Router>
    </>
  )
}

export default App
