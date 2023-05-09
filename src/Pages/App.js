import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import AboutUs from "./AboutUs";
import Careers from './Careers';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/gamingapp/" element={<Home />} />
        <Route path="/gamingapp/careers" element={<Careers />} />
        <Route path="/gamingapp/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
