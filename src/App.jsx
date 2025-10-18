import React from 'react'
import Projects from './pages/Projects'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default App