import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import AboutUs from "./AboutUs";
import Careers from './Careers';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="careers" element={<Careers />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
