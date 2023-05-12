import LogoMark from "../images/LogoMark.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer footerGrid mobileGrid gridPadding">
      <div className="footerGridItemA">
        <img
          src={LogoMark}
          alt="Cosmic energy logo"
          width="50"
          className="navBrand"
        />

        <ul className="footerContact">
          <li className="contactItem textPadding">aimee@cosmicenergy.co.nz</li>
          <li className="contactItem textPadding">+64 27 000 0000</li>
          <li className="contactItem textPadding">Instagram</li>
          <li className="contactItem textPadding">TikTok</li>
          <li className="contactItem textPadding">
            2023 Cosmic Energy with Aimee
          </li>
        </ul>
      </div>

      <ul className="footerLink footerGridItemB">
        <li className="footerItem textPadding">
          <Link to="/" className="navLink">
            Homepage
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/services" className="navLink">
            Services
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/aboutme" className="navLink">
            About me
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
