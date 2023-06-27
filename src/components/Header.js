import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./Header.css";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setLastScrollY(window.scrollY);

    console.log(showNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  });

  return (
    <div>
      <header>
        <nav className={`navBar ${showNav && "nav--hidden"}`}>
          <Link to="/" className="navLink">
            <img
              src={Logo}
              alt="Cosmic energy logo"
              width="200"
              className="navBrand navBrandPadding"
            />
          </Link>

          <ul className="navMenu navPadding">
            <li className="navItem navPadding">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem navPadding">
              <Link to="/services" className="navLink">
                Services
              </Link>
            </li>
            <li className="navItem navPadding">
              <Link to="/consult" className="navLink">
                Consult
              </Link>
            </li>
            <li className="navItem navPadding">
              <Link to="/aboutme" className="navLink">
                About me
              </Link>
            </li>
          </ul>

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
