import "./heroImgStyles.css";
import React from "react";
import IntoImg from '../assets/intro-bg.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <motion.img
          src={IntoImg}
          alt="IntoImg"
          className="intro-img"
          initial={{ opacity: 0, y: -50 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
          exit={{ opacity: 0, y: -50 }}
        />
      </div>
      <div className="content">
        <motion.div
          className="box"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 360, 360, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <p>Satish Kumar Chaubey</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 0.4, delay: 1 }}
        >MERN STACK DEVELOPER</motion.h1>
        <div className="link_motion_div">
          <motion.div
            whileHover={{ scale: 1.1 }} // Increase scale on hover
            whileTap={{ scale: 1 }}   // Decrease scale on tap
          >
            <Link to="/project" className="btn">PROJECTS</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }} // Increase scale on hover
            whileTap={{ scale: 0.4 }}
          >
            <Link to="/contact" className="btn_two btn-light">CONTACT</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
