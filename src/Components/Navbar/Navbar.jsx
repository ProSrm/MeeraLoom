import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold">
          MyBrand
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-800 p-4 rounded-md mt-2">
          <Link to="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-400">
            About
          </Link>
          <Link to="/services" className="block hover:text-gray-400">
            Services
          </Link>
          <Link to="/contact" className="block hover:text-gray-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

// const Navbar = () => (
//   <nav className="bg-blue-500 p-4 text-white flex justify-between">
//     <h1 className="text-lg font-bold">IT Services</h1>
//     <div>
//       <Link className="px-4" to="/">
//         Home
//       </Link>
//       <Link className="px-4" to="/services">
//         Services
//       </Link>
//       <Link className="px-4" to="/about">
//         About
//       </Link>
//       <Link className="px-4" to="/contact">
//         Contact
//       </Link>
//     </div>
//   </nav>
// );
