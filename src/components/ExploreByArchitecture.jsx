import React from "react";

// Sample images (replace with actual paths from /assets)
import haveli from "../assets/image-3.jpeg";
import wada from "../assets/image-2.jpeg";
import villa from "../assets/image-1.jpeg";
import palace from "../assets/image-4.jpeg"; // <- Add this to your assets

const architectureStyles = [
  {
    name: "Havelis",
    caption: "Rajasthani Grandeur",
    image: haveli,
  },
  {
    name: "Wadas",
    caption: "Marathi Heritage",
    image: wada,
  },
  {
    name: "Courtyard Charm",
    caption: "Living Heritage",
    image: villa,
  },
  {
    name: "Palaces",
    caption: "Royal Splendor",
    image: palace,
  },
];

const ExploreByArchitecture = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore by Architecture
        </h2>
        <p className="text-gray-600 mt-2">
          Each region tells its own story through stone and time
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureStyles.map((style, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                <h3 className="text-lg font-semibold">{style.name}</h3>
                <p className="text-sm">{style.caption}</p>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByArchitecture;
