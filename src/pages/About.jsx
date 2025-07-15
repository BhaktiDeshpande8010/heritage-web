import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-[#fff8f0] text-gray-800">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-4xl font-bold text-center text-[#a67d4b] mb-6">
            About Us
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <span className="text-[#a67d4b] font-semibold">Heritage Stays</span> is built with love to help you
            explore India’s timeless architecture and history — through handpicked traditional homes that offer a blend of comfort, culture, and charm.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Every stay tells a story — from royal havelis and wooden wadas to colonial bungalows and temple towns.
            Our goal is to preserve the heritage and help you experience it meaningfully.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Whether you’re a solo explorer or a family seeking soulful vacations, Heritage Stays makes your journey historic and memorable.
          </p>

          <div className="mt-8 text-center italic text-[#8a6232] bg-[#fff8f0] p-4 rounded-md">
            “Travel through time — one stay at a time.”
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
