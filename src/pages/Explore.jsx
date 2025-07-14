import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const allProperties = [
  {
    title: "Rajasthani Haveli",
    location: "Jaipur, Rajasthan",
    price: "₹8,500/night",
    rating: 4.9,
    image: "/images/explore-1.png",
  },
  {
    title: "Heritage Wada",
    location: "Pune, Maharashtra",
    price: "₹6,200/night",
    rating: 4.6,
    image: "/images/explore-2.png",
  },
  {
    title: "Portuguese Villa",
    location: "Goa",
    price: "₹12,000/night",
    rating: 4.9,
    image: "/images/explore-3.png",
  },
  {
    title: "Kerala Heritage Home",
    location: "Kochi, Kerala",
    price: "₹7,800/night",
    rating: 4.7,
    image: "/images/explore-4.png",
  },
  {
    title: "Royal Haveli Palace",
    location: "Jodhpur, Rajasthan",
    price: "₹15,000/night",
    rating: 5.0,
    image: "/images/explore-5.png",
  },
  {
    title: "Gujarati Heritage House",
    location: "Ahmedabad, Gujarat",
    price: "₹5,500/night",
    rating: 4.5,
    image: "/images/explore-6.png",
  },
  {
    title: "Chettinad Mansion",
    location: "Karaikudi, Tamil Nadu",
    price: "₹9,200/night",
    rating: 4.8,
    image: "/images/explore-7.png",
  },
  {
    title: "Colonial Heritage Villa",
    location: "Pondicherry",
    price: "₹11,500/night",
    rating: 4.9,
    image: "/images/explore-8.png",
  },
  {
    title: "Sawantwadi Palace",
    location: "Sawantwadi, Maharashtra",
    price: "₹9,500/night",
    rating: 4.8,
    image: "/images/explore-9.png",
  },
  {
    title: "Shaniwar Wada",
    location: "Pune, Maharashtra",
    price: "₹6,000/night",
    rating: 4.7,
    image: "/images/explore-10.png",
  },
  {
    title: "Kelkar Museum",
    location: "Pune, Maharashtra",
    price: "₹4,000/night",
    rating: 4.5,
    image: "/images/explore-11.png",
  },
  {
    title: "Rajasthani Haveli 2",
    location: "Jaipur, Rajasthan",
    price: "₹9,000/night",
    rating: 4.9,
    image: "/images/explore-1.png",
  },
];

const navigate = useNavigate();

const Explore = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Show first 8 cards initially

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4); // Load 4 more on each click
  };

  return (
    <div className="bg-[#fbf8f2] min-h-screen pt-16">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#ede2d3] px-4 py-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#a67d4b]">
          Discover Heritage Properties
        </h1>
        <p className="text-sm mt-2 text-gray-700 max-w-xl mx-auto">
          Experience the timeless beauty of traditional Indian architecture in carefully preserved heritage homes.
        </p>
      </section>

      {/* Property Cards */}
      <section className="px-4 md:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProperties.slice(0, visibleCount).map((prop, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={prop.image}
                alt={prop.title}
                className="w-full h-60 md:h-64 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full p-1 hover:bg-[#a67d4b] hover:text-white transition shadow-sm">
                <HeartIcon className="h-5 w-5 text-[#a67d4b]" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{prop.title}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                  <FaMapMarkerAlt className="text-[#a67d4b]" /> {prop.location}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm font-semibold text-gray-700">{prop.price}</span>
                  <span className="flex items-center text-yellow-500 text-sm font-bold">
                    <FaStar className="mr-1" /> {prop.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="bg-[#a67d4b] text-white px-6 py-2 rounded-md hover:bg-[#8a6232] transition"
          >
            Load More Properties
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explore;
