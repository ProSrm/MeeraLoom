import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Services = () => (
  <section className="py-10 px-6">
    <h2 className="text-3xl font-semibold text-center">Our Services</h2>
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Web Development",
          desc: "Building high-performance web applications.",
        },
        {
          title: "Cybersecurity",
          desc: "Protecting your digital assets with advanced security measures.",
        },
        {
          title: "Cloud Solutions",
          desc: "Optimized cloud services for better scalability.",
        },
      ].map((service, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4 mt-10">
    <p>&copy; 2025 IT Services. All rights reserved.</p>
  </footer>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
