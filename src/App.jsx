import { React, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//IMPORTED PAGES
import Homepage from './pages/homepage.jsx'

//IMPORTED COMPONENTS
import Header from './components/header.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes> 
      </Router>
    </>
  )
}

export default App
