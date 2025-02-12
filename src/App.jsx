import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services"
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => (
  <Router>
    <Navbar />
    <Home />
    <Services />
    <AboutUs />
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
