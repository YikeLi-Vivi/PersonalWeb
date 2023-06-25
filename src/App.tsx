import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Project from './pages/Project'
import CV from './pages/CV'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import styled from "styled-components"



function App() {

  return (
    <>
    <Router>
        <NavBar />
        <Routes >
        <Route  path='/'  element={<Home />} />
        <Route  path='/Vivian-Li/'  element={<Home />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/cv' element={<CV/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
