import LogoMark from "../images/LogoMark.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mobileGrid footerGridPadding">
      <div className="footerGridItemA">
        <img src={LogoMark} alt="Cosmic energy logo" className="footerBrand" />
      </div>

      <div className="footerGridItemB">
        <ul className="footerContact">
          <li className="contactItem textPadding">
            <a href="mailto:hello@cosmicenergywithaimee.com">
              hello@cosmicenergywithaimee.com
            </a>
          </li>
          {/* <li className="contactItem textPadding">+64 27 000 0000</li> */}
          <li className="contactItem textPadding">
            <Link to="https://www.instagram.com/cosmicenergywithaimee/">
              Instagram
            </Link>
          </li>
          <li className="contactItem textPadding">
            2023 Cosmic Energy with Aimee
          </li>
        </ul>
      </div>

      <ul className="footerLink footerGridItemC">
        <li className="footerItem textPadding">
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/services" className="navLink">
            Services
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/aboutme" className="navLink">
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
