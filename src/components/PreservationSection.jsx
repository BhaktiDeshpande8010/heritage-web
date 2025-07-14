import React from "react";
import preservationImage from "../assets/preservation.png"; // Make sure your image is here

const PreservationSection = () => {
  return (
    <section className="bg-[#f9f3e4] py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4">
            Preserving India's Architectural Soul
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
            Every heritage home on our platform is more than just accommodation—it’s a living museum, a testament to India’s rich architectural legacy. From the intricate stone carvings of Rajasthani havelis to the wooden galleries of Maharashtrian wadas, each property tells a unique story.
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
            By choosing to stay with us, you're not just experiencing luxury; you're supporting the preservation of these architectural treasures for future generations.
          </p>
          <button className="bg-[#c8102e] text-white px-5 py-2 rounded-md hover:bg-[#a00e26] transition">
            Learn Our Story
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={preservationImage}
            alt="Preserving Heritage"
            className="rounded-lg shadow-md max-h-[300px] w-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default PreservationSection;
