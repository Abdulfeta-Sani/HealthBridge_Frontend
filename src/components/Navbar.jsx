import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="text-teal-600">Health</span>Bridge
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-teal-500">Home</Link>
          <Link to="/about" className="hover:text-teal-500">About Us</Link>
          <Link to="/features" className="hover:text-teal-500">Features</Link>
          <Link to="/how-it-works" className="hover:text-teal-500">How It Works</Link>
          <Link to="/contact" className="hover:text-teal-500">Contact Us</Link>
        </div>

        {/* Desktop Login & Sign-up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link to="/" className="hover:text-teal-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-teal-500" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/features" className="hover:text-teal-500" onClick={() => setIsOpen(false)}>Features</Link>
            <Link to="/how-it-works" className="hover:text-teal-500" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link to="/contact" className="hover:text-teal-500" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <hr />
            <Link to="/login" className="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 text-center" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/signup" className="text-white bg-teal-600 rounded-lg px-4 py-2 text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
