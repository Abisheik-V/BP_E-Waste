import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WhatWeDo from './components/What-we-do';
import './App.css';

function App() {
  return (
    <Router basename="/BP_E-Waste">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
      </Routes>
    </Router>
  );
}

export default App;
