import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Biography from './Pages/Biography'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'




function App() {
  
  return (
    <>
      
      <Router>

          <Routes>
              <Route path="/" element={<Biography/>} />
              <Route path="/project" element={<Projects/>} />
              <Route path="/skills" element={<Skills/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
        
      </Router>

    </>
  )
}

export default App