import React from "react";
import mainImage from "../assets/main.jpeg";

const Hero = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url(/Main.jpg)" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-left animate-[fadeInUp_1s_ease-out_forwards]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            Experience India's Living Heritage
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Stay in authentic Wadas, Havelis, and Portuguese villas that tell stories of centuries past.
          </p>

          {/* Horizontal Search Bar */}
          <form className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Location"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Property Type</option>
              <option value="wada">Wada</option>
              <option value="haveli">Haveli</option>
              <option value="portuguese">Portuguese Villa</option>
            </select>
            <input
              type="number"
              placeholder="Guests"
              min="1"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition w-full md:w-auto"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
