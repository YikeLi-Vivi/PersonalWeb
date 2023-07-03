import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Project from './pages/Project'
import CV from './pages/CV'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import React from 'react'

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Routes >
        <Route  path='/'  element={<Home />} />
        <Route  path='/Vivian-Li/'  element={<Home />} />
        <Route path='/Vivian-Li/home' element={<Home/>} />
        <Route path='/Vivian-Li/project' element={<Project/>} />
        <Route path='Vivian-Li/cv' element={<CV/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
