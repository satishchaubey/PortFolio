import "./FooterStyles.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Description from "./Description";
import { Link } from "react-router-dom";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the Footer is in view
    triggerOnce: true, // Trigger animation only once
  });

  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Add prevScrollPos state

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset; // Move this inside useEffect
      const isScrolledUp = prevScrollPos > currentScrollPos;

      const isInView = ref.current
        ? currentScrollPos >= ref.current.offsetTop - window.innerHeight * 0.5
        : false;

      if (isInView || isScrolledUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, prevScrollPos, inView, isVisible]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 3 }}
        className="footer"
      >
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <h4>
                <FaHome
                  style={{ color: "white", marginRight: "2rem", marginTop: "0.3rem" }}
                  size={20}
                />
                <div>
                  <p className="discription_footer">Kasya Kushinagar.</p>
                  <p className="discription_footer">India</p>
                </div>
              </h4>
            </div>
            <div className="phone">
              <FaPhone
                style={{ color: "white", marginRight: "2rem", marginTop: "0.3rem" }}
                size={20}
                className="discription_footer"
              />
              {/* For calling, use the tel protocol */}
              <a href="tel:+918299805407" className="discription_footer">8299805407</a>
            </div>
            <div className="email">
              <FaMailBulk
                style={{ color: "white", marginRight: "2rem", marginTop: "0.3rem" }}
                size={20}
              />
              <a href="mailto:satishchaubey02@gmail.com" className="discription_footer">satishchaubey02@gmail.com</a>
            </div>
          </div>
          <div className="right">
            <motion.h4
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 3, delay: 0.2 }}
            >
              About Me
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 2, delay: 0.4 }}
              className="discription_footer"
            >
              I'm React Js developer. And I built many Projects.
            </motion.p>
            <motion.div
              className="social"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 3, delay: 0.6 }}
            >
              {/* Social media links */}
              <a href="https://www.facebook.com/cyrus.chaubey?mibextid=ZbWKwL">
                <FaFacebook style={{ color: "white", marginRight: "1rem" }} size={30} />
              </a>
              <a href="https://x.com/satish659712?t=tijJjMMHaEE4vdMPZXr6Ew&s=08">
                <FaTwitter style={{ color: "white", marginRight: "1rem" }} size={30} />
              </a>
              <a href="https://www.linkedin.com/in/satish-chaubey-381930171/">
                <FaLinkedin style={{ color: "white", marginRight: "1rem" }} size={30} />
              </a>
              <a href="https://github.com/satishchaubey/PortFolio">
                <FaGithub style={{ color: "white", marginRight: "1rem" }} size={30} />
              </a>
              <a href="https://www.instagram.com/__.cyrus25.__?igsh=MWxwb2dzZTI0MW9pMw==">
                <FaInstagram style={{ color: "white", marginRight: "1rem" }} size={30} />
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/8299805407">
                <FaWhatsapp style={{ color: "white", marginRight: "1rem" }} size={30} />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Description/>
    </div>
  );
};

export default Footer;
