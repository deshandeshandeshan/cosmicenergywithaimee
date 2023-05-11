import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navBar">
          <img
            src={Logo}
            alt="Cosmic energy logo"
            width="200"
            className="navBrand"
          />

          <ul className="navMenu">
            <li className="navItem">
              <Link to="/" className="navLink">
                Homepage
              </Link>
            </li>
            <li className="navItem">
              <Link to="/services" className="navLink">
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
            <li className="navItem">
              <Link to="/aboutme" className="navLink">
                About me
              </Link>
            </li>
          </ul>

          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
