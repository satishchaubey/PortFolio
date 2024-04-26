import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
        exit={{ opacity: 0, y: -50 }} // Animation properties when component is unmounted
      >
        <HeroImg2 heading="PROJECTS." text="Some Of My Most Recent Works." />
        <PricingCard />
        <Work />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Project;
