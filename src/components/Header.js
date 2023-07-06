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
    if (window.scrollY > lastScrollY && lastScrollY >= 0) {
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
          <div
            className="hamburgerGridItem"
            onClick={() => {
              setOpen(!open);
              setNavBackground(true);
            }}
          >
            <div className="hamburger">
              <span className={open ? "bar bar1 spin" : "bar bar1"}></span>
              <span className={open ? "bar bar2 spin" : "bar bar2"}></span>
            </div>
          </div>
        </div>
        <div
          className="navOverlay"
          style={{
            top: open ? "0" : "-110%",
            transitionDelay: open ? "0s" : "0.3s",
          }}
        >
          <ul className="navMenu">
            <li className="navItem navPadding">
              <Link
                to="/"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.7s" : "0s",
                }}
              >
                Home
              </Link>
              <div className="navLink-wrapper"></div>
            </li>
            <li className="navItem navPadding">
              <Link
                to="/services"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.8s" : "0s",
                }}
              >
                Services
              </Link>
              <div className="navLink-wrapper"></div>
            </li>
            <li className="navItem navPadding">
              <Link
                to="/consult"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.9s" : "0s",
                }}
              >
                Consult
              </Link>
              <div className="navLink-wrapper"></div>
            </li>
            <li className="navItem navPadding">
              <Link
                to="/aboutme"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "1s" : "0s",
                }}
              >
                About me
              </Link>
              <div className="navLink-wrapper"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
