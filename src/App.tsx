// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </Router>
  );
};

export default App;
