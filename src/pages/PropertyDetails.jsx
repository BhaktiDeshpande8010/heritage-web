import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PropertyDetails = () => {
  return (
    <div className="bg-[#fbf8f2] text-gray-800 pt-16">
      <Navbar />

      {/* Banner Image */}
      <div className="relative w-full h-[70vh]">
        <img
          src="/images/explore-1.png"
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white">Rajasthani Haveli</h1>
          <div className="flex items-center text-gray-200 mt-2 gap-4 text-base">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#a67d4b]" />
              Jaipur, Rajasthan
            </span>
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              4.9 Rating
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* Left Column */}
        <div className="bg-white p-8 rounded-xl shadow">
          {/* About */}
          <h2 className="text-3xl font-semibold mb-4">About the Property</h2>
          <p className="text-gray-700 text-[17px] leading-relaxed mb-8">
            This majestic Rajasthani Haveli dates back to the 18th century and showcases intricate
            jharokhas, marble floors, and sandstone carvings. Experience royal living with modern
            comforts in the heart of Jaipur.
          </p>

          {/* Highlights */}
          <h3 className="text-2xl font-semibold mb-2 text-[#a67d4b]">Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 text-[16px] space-y-1 mb-8">
            <li>Authentic architecture with heritage interiors</li>
            <li>Spacious courtyards and rooftop views</li>
            <li>Local Rajasthani cuisine on request</li>
            <li>Easy access to City Palace and Hawa Mahal</li>
          </ul>

          {/* Amenities */}
          <h3 className="text-2xl font-semibold mb-2 text-[#a67d4b]">Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-800 text-[15px] mt-2 mb-8">
            <span>✔️ Free Wi-Fi</span>
            <span>✔️ Heritage Furniture</span>
            <span>✔️ Private Garden</span>
            <span>✔️ AC & Heating</span>
            <span>✔️ Guided Tours</span>
            <span>✔️ On-site Parking</span>
          </div>

          {/* Image Gallery */}
          <h3 className="text-2xl font-semibold text-[#a67d4b] mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <img src="/images/explore-2.png" alt="Gallery 1" className="rounded-md h-48 w-full object-cover" />
            <img src="/images/explore-3.png" alt="Gallery 2" className="rounded-md h-48 w-full object-cover" />
            <img src="/images/explore-4.png" alt="Gallery 3" className="rounded-md h-48 w-full object-cover" />
          </div>

          {/* Reviews */}
          <h3 className="text-2xl font-semibold text-[#a67d4b] mb-4">Guest Reviews</h3>
          <div className="space-y-6 mb-12">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-sm italic">“A magical stay! The architecture is breathtaking and the hospitality unmatched.”</p>
              <p className="text-sm text-right font-semibold mt-2">– Aarti S.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-sm italic">“Felt like royalty. Perfect for heritage lovers.”</p>
              <p className="text-sm text-right font-semibold mt-2">– Rahul K.</p>
            </div>
          </div>

          {/* Nearby Attractions */}
          <h3 className="text-2xl font-semibold text-[#a67d4b] mb-4">Nearby Attractions</h3>
          <ul className="list-disc list-inside text-gray-700 text-[16px] space-y-2">
            <li>City Palace – 5 mins walk</li>
            <li>Hawa Mahal – 10 mins drive</li>
            <li>Jantar Mantar – 8 mins walk</li>
            <li>Local bazaar and food streets – 2 mins walk</li>
          </ul>
        </div>

        {/* Booking Sidebar */}
        <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-28">
          <h3 className="text-2xl font-bold text-[#a67d4b] mb-6">₹8,500 / night</h3>

          <div className="flex flex-col gap-4 mb-6">
            <input
              type="date"
              className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input
              type="date"
              className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input
              type="number"
              placeholder="Guests"
              className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
              min="1"
            />
          </div>

          <button className="bg-[#a67d4b] w-full py-3 rounded-md text-white font-semibold text-sm hover:bg-[#8a6232] transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Relocated Map Section - Below Main Content */}
      {/* Relocated Map Section - Styled White Container */}
      <section className="w-[80%] mx-auto mt-10 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-[#a67d4b] mb-4">Property Location</h3>
          <div className="rounded-xl overflow-hidden">
            <iframe
              title="property-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.181857362495!2d75.81957321490383!3d26.912433283123894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43c7bdc59cd%3A0x3f38ec2a4019a2db!2sCity%20Palace%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1652934003543!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              className="border-none w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
