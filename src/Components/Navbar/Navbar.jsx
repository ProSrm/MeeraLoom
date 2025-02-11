import { useState } from "react";
import "../../css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold">
          MeeraLoom
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ">
          <a href="#" className="hover:text-gray-300 ListDesign">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 ListDesign">
            About
          </a>
          <a href="#" className="hover:text-gray-300 ListDesign">
            Services
          </a>
          <a href="#" className="hover:text-gray-300 ListDesign">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <a href="#" className="block py-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            About
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            Services
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
