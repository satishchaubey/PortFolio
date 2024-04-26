import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";
import { motion } from 'framer-motion';

const Contact = () => {
  return <div>
    <Navbar />
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
      exit={{ opacity: 0, y: -50 }} // Animation properties when component is unmounted
    >
      <HeroImg2 heading="CONTACT" text="Lets have a Chat With Me.." />
      <Form />
    </motion.div>

    <Footer />
  </div>;
};

export default Contact;
