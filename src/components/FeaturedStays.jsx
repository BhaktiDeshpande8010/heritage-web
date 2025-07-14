import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

// Import images from assets
import wada1 from "../assets/cart_1.png";
import wada2 from "../assets/cart_2.png";
import villa1 from "../assets/cart_3.png";

const stays = [
  {
    id: 1,
    type: "Haveli",
    name: "Shinde Wada, Satara",
    description: "18th-century royal residence with wooden columns",
    price: "₹8,500",
    rating: 4.9,
    image: wada1,
    color: "bg-yellow-600",
  },
  {
    id: 2,
    type: "Wada",
    name: "Casa Colonial, Goa",
    description: "Historic Maratha wada with traditional balconies",
    price: "₹6,200",
    rating: 4.8,
    image: wada2,
    color: "bg-orange-500",
  },
  {
    id: 3,
    type: "Villa",
    name: "Peshwa Wada, Pune",
    description: "Coastal heritage villa with sea breeze ambiance",
    price: "₹7,800",
    rating: 4.7,
    image: villa1,
    color: "bg-purple-700",
  },
];

const FeaturedStays = () => {
  return (
    <section className="bg-[#faf1dc] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Featured Heritage Stays
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Handpicked properties that showcase Maharashtra's architectural legacy
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {stays.map((stay, index) => (
            <div
              key={stay.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-56 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-sm text-white rounded-full ${stay.color}`}
                >
                  {stay.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {stay.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {stay.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-red-600 font-bold text-lg">
                    {stay.price}
                    <span className="text-sm font-normal text-gray-600">/night</span>
                  </span>
                  <span className="flex items-center text-yellow-600 font-semibold">
                    <StarIcon className="w-5 h-5 mr-1" />
                    {stay.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStays;
