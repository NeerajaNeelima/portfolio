/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from "./Routes/Home"
import About from './Routes/About';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/project" element={<Project />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
