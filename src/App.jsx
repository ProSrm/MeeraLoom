import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <section className="text-center py-20 bg-gray-100">
    <h1 className="text-4xl font-bold">Welcome to Our IT Solutions</h1>
    <p className="mt-4 text-gray-600">
      Providing cutting-edge technology services for businesses worldwide.
    </p>
    <Link
      to="/services"
      className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg"
    >
      View Services
    </Link>
  </section>
);

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

const About = () => (
  <section className="text-center py-20">
    <h2 className="text-3xl font-semibold">About Us</h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      We are a team of experts dedicated to providing top-notch IT services,
      ensuring businesses stay ahead in the digital era.
    </p>
  </section>
);

const Contact = () => (
  <section className="text-center py-20 bg-gray-100">
    <h2 className="text-3xl font-semibold">Contact Us</h2>
    <p className="mt-4 text-gray-600">
      Email: contact@itservices.com | Phone: +91 9876543210
    </p>
  </section>
);

const Navbar = () => (
  <nav className="bg-blue-500 p-4 text-white flex justify-between">
    <h1 className="text-lg font-bold">IT Services</h1>
    <div>
      <Link className="px-4" to="/">
        Home
      </Link>
      <Link className="px-4" to="/services">
        Services
      </Link>
      <Link className="px-4" to="/about">
        About
      </Link>
      <Link className="px-4" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
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
