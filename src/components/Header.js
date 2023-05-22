import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./Header.css";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Reveal from "./utils/Reveal";

const Header = () => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div>
      <header ref={ref}>
        <nav className="navBar">
          <img
            src={Logo}
            alt="Cosmic energy logo"
            width="200"
            className="navBrand navBrandPadding"
          />

          <motion.ul
            className="navMenu navPadding"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <li className="navItem navPadding">
              <Link to="/" className="navLink">
                Homepage
              </Link>
            </li>
            <li className="navItem navPadding">
              <Link to="/services" className="navLink">
                Services
              </Link>
            </li>
            <li className="navItem navPadding">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
            <li className="navItem navPadding">
              <Link to="/aboutme" className="navLink">
                About me
              </Link>
            </li>
          </motion.ul>

          {/* <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
