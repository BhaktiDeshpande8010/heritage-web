import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PropertyDetails = () => {
  const location = useLocation();
  const property = location.state;

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fff8f0]">
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold text-red-500">Property not found</h1>
          <p className="text-gray-600 mt-2">
            Please go back to the Explore page and select a property.
          </p>
          <Link
            to="/Explore"
            className="mt-4 inline-block px-6 py-2 bg-[#a67d4b] text-white rounded-md hover:bg-[#8a6232]"
          >
            Back to Explore
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#fff8f0] text-gray-800">
      <Navbar />

      {/* Hero Image */}
      <div className="w-full h-[550px] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Info */}
      <div className="max-w-6xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg -mt-20 z-10 relative">
        <h1 className="text-4xl font-bold text-gray-900">{property.title}</h1>
        <p className="text-[#a67d4b] text-lg mt-2">{property.location}</p>

        <div className="mt-6 space-y-4 text-gray-700">
          <p>
            Step into the heart of India’s rich history and culture through this heritage stay.
            Nestled in the vibrant streets of {property.location}, this property beautifully blends
            traditional architecture with modern comforts.
          </p>
          <p>
            Whether you're here for the ornate wooden carvings, stunning courtyards, or a tranquil
            escape — this stay offers an authentic, unforgettable experience.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#a67d4b] mb-2">Highlights</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Authentic architecture with heritage interiors</li>
            <li>Spacious courtyards and rooftop views</li>
            <li>Local Rajasthani cuisine on request</li>
            <li>Easy access to City Palace and Hawa Mahal</li>
          </ul>
        </div>

        {/* Amenities */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#a67d4b] mb-2">Amenities</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
            <li>✔️ Free Wi-Fi</li>
            <li>✔️ Heritage Furniture</li>
            <li>✔️ Private Garden</li>
            <li>✔️ AC & Heating</li>
            <li>✔️ Guided Tours</li>
            <li>✔️ On-site Parking</li>
          </ul>
        </div>

        {/* Guest Reviews */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#a67d4b] mb-2">Guest Reviews</h2>
          <div className="space-y-4">
            <p className="italic">“A magical stay! The architecture is breathtaking and the hospitality unmatched.”<br /><span className="font-semibold">– Aarti S.</span></p>
            <p className="italic">“Felt like royalty. Perfect for heritage lovers.”<br /><span className="font-semibold">– Rahul K.</span></p>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#a67d4b] mb-2">Nearby Attractions</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>City Palace – 5 mins walk</li>
            <li>Hawa Mahal – 10 mins drive</li>
            <li>Jantar Mantar – 8 mins walk</li>
            <li>Local bazaar and food streets – 2 mins walk</li>
          </ul>
        </div>

        {/* Booking Section */}
        {/* Booking Section */}
        <div className="mt-12 bg-[#f8f4ec] p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#a67d4b]">Book Your Stay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Check-in Date"
              className="border border-gray-300 px-4 py-3 rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67d4b]"
            />
            <input
              type="date"
              placeholder="Check-out Date"
              className="border border-gray-300 px-4 py-3 rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67d4b]"
            />
            <input
              type="number"
              placeholder="Number of Guests"
              min="1"
              className="col-span-1 md:col-span-2 border border-gray-300 px-4 py-3 rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67d4b]"
            />
          </div>
          <button className="mt-6 bg-[#a67d4b] text-white px-8 py-3 rounded-md hover:bg-[#8a6232] transition shadow-md w-full md:w-auto">
            Book Now
          </button>
        </div>

      </div>


      {/* Map Section */}
      <section className="w-full bg-[#f8f4ec] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#a67d4b] mb-6">Property Location</h2>
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Google Map"
                width="100%"
                height="300"
                src="https://maps.google.com/maps?q=Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                className="w-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default PropertyDetails;
