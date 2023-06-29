import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./Header.css";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
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
    <header>
      <nav className={`navBar ${showNav && "nav--hidden"}`}>
        <div className="navGrid">
          <Link to="/" className="logoNavLink">
            <img
              src={Logo}
              alt="Cosmic energy logo"
              width="200"
              className="navBrand navBrandPadding"
            />
          </Link>
          <div className="hamburgerGridItem">
            <div
              className="hamburger hamburgerGridItem"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
            </div>
          </div>
        </div>

        <ul
          className={`navMenu navPadding textDelay ${
            open ? "active" : "inactive"
          }`}
        >
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
      </nav>
    </header>
  );
};

export default Header;
