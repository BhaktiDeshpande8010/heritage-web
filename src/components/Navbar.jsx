import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import SignInModal from "../pages/SignInModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center relative justify-between">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <FaHome className="text-[#a67d4b] text-xl" />
            <span className="text-xl font-bold text-[#a67d4b]">
              Heritage <span className="text-gray-800">Stays</span>
            </span>
          </div>

          {/* Center Nav Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-800">
            <Link to="/" className="hover:text-[#a67d4b] transition">Home</Link>
            <Link to="/explore" className="hover:text-[#a67d4b] transition">Explore</Link>
            <Link to="/about" className="hover:text-[#a67d4b] transition">About</Link>
          </div>

          {/* Right: Hamburger Menu + Sign In */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Icon (Mobile Only) */}
            <button
              className="md:hidden text-2xl text-[#a67d4b]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sign In Button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#a67d4b] hover:bg-[#8a6232] text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-4 px-4 py-4 text-gray-800 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </div>
          </div>
        )}
      </nav>

      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
