import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import { motion } from 'framer-motion';

const About = () => {
  return <div>
    <Navbar />
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
      exit={{ opacity: 0, y: -50 }} // Animation properties when component is unmounted
    >
      <HeroImg2 heading="ABOUT" text="I'm MERN STACK DEVELOPER." />
      <AboutContent />
    </motion.div>
    <Footer />
  </div>;
};

export default About;
