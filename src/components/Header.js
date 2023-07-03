import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./Header.css";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBackground, setNavBackground] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setLastScrollY(window.scrollY);
  };

  const closeNavOnScroll = () => {
    if (window.scrollY > lastScrollY) {
      setOpen(false);
    }

    setLastScrollY(window.scrollY);
  };

  const removeBackgroundOnScroll = () => {
    if (window.scrollY > 200) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    window.addEventListener("scroll", closeNavOnScroll);
    window.addEventListener("scroll", removeBackgroundOnScroll);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
      window.addEventListener("scroll", closeNavOnScroll);
      window.addEventListener("scroll", removeBackgroundOnScroll);
    };
  });

  return (
    <header>
      <nav
        className={`navBar ${showNav ? "nav--active" : "nav--hidden"} ${
          navBackground ? "navBackground--active" : "navBackground--hidden"
        }`}
      >
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
                setNavBackground(true);
              }}
            >
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
            </div>
          </div>
        </div>

        <ul className={`navMenu navPadding ${open ? "active" : "inactive"}`}>
          <li className="navItem navPadding">
            <Link
              to="/"
              className="navLink"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Home
            </Link>
          </li>
          <li className="navItem navPadding">
            <Link
              to="/services"
              className="navLink"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Services
            </Link>
          </li>
          <li className="navItem navPadding">
            <Link
              to="/consult"
              className="navLink"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Consult
            </Link>
          </li>
          <li className="navItem navPadding">
            <Link
              to="/aboutme"
              className="navLink"
              onClick={() => {
                setOpen(!open);
              }}
            >
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
