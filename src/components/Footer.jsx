import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0e2c] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400">Heritage Stays</h3>
          <p className="text-sm mt-2 text-gray-300">
            Connecting travelers with India's architectural heritage through authentic stays.
          </p>
          <div className="flex gap-4 mt-4 text-lg text-white">
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Explore</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="hover:text-white cursor-pointer">Havelis</li>
            <li className="hover:text-white cursor-pointer">Wadas</li>
            <li className="hover:text-white cursor-pointer">Portuguese Villas</li>
            <li className="hover:text-white cursor-pointer">Palaces</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Support</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Safety Information</li>
            <li className="hover:text-white cursor-pointer">Cancellation Options</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Host */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Host</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="hover:text-white cursor-pointer">List Your Property</li>
            <li className="hover:text-white cursor-pointer">Host Resources</li>
            <li className="hover:text-white cursor-pointer">Community Forum</li>
            <li className="hover:text-white cursor-pointer">Heritage Guidelines</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2024 Heritage Stays. Preserving India's architectural legacy, one stay at a time.
      </div>
    </footer>
  );
};

export default Footer;
