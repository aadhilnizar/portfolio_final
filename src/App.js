import { useEffect } from 'react'

import { Route, Routes, } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import Skills from './components/Skills'
import './App.scss'

function App() {
  // Log for debugging
  useEffect(() => {
    console.log('App component mounted')
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        {/* Add a catch-all route for GitHub Pages */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App