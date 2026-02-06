import { React, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//IMPORTED PAGES
import Homepage from './pages/homepage.jsx'
import Projects from './pages/projects.jsx'

//IMPORTED COMPONENTS
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import CursorTrail from './components/cursortrail.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <CursorTrail />
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App