import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4 mt-10">
    <p>&copy; 2025 IT Services. All rights reserved.</p>
  </footer>
);

const App = () => (
  <Router>
    <Navbar />
    <Home />
    <Services />
    <About />
    <Contact />
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}
    <Footer />
  </Router>
);

export default App;
