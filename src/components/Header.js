import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="navBar">
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
    </div>
  );
};

export default Header;
