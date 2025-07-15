import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import SignInModal from "../pages/SignInModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center relative">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <FaHome className="text-[#a67d4b] text-xl" />
            <span className="text-xl font-bold text-[#a67d4b]">
              Heritage <span className="text-gray-800">Stays</span>
            </span>
          </div>

          {/* Center Nav Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 font-medium text-gray-800">
            <Link to="/" className="hover:text-[#a67d4b] transition">Home</Link>
            <Link to="/explore" className="hover:text-[#a67d4b] transition">Explore</Link>
            <a href="#" className="hover:text-[#a67d4b] transition">Experiences</a>
            <a href="#" className="hover:text-[#a67d4b] transition">About</a>
          </div>

          {/* Right: Sign In */}
          <div className="ml-auto flex items-center space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#a67d4b] hover:bg-[#8a6232] text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Use SignInModal component */}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
