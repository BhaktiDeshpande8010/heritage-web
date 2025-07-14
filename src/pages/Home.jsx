import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedStays from "../components/FeaturedStays";
import ExploreByArchitecture from "../components/ExploreByArchitecture";
import PreservationSection from "../components/PreservationSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedStays />
      <ExploreByArchitecture />
      <PreservationSection />
      <Footer />
      
    </>
  );
};

export default Home; // ✅ THIS LINE IS IMPORTANT
