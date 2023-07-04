import LogoMark from "../images/LogoMark.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer footerGrid mobileGrid footerGridPadding">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="a"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0" stop-color="red">
              <animate
                attributeName="stop-color"
                values="#20123E"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset=".5" stop-color="purple">
              <animate
                attributeName="stop-color"
                values="#8A26A0"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1" stop-color="blue">
              <animate
                attributeName="stop-color"
                values="#E5D6FC"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 .5 .5"
              to="360 .5 .5"
              dur="20s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <linearGradient
            id="b"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="1"
            x2="1"
            y2="1"
          >
            <stop offset="0" stop-color="red">
              <animate
                attributeName="stop-color"
                values="#4A2A93"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1" stop-color="purple" stop-opacity="0">
              <animate
                attributeName="stop-color"
                values="#20123E"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              values="360 .5 .5;0 .5 .5"
              class="ignore"
              dur="10s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <rect fill="url(#a)" width="100%" height="100%" />
        <rect fill="url(#b)" width="100%" height="100%" />
      </svg>
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
          <Link to="/Consult" className="navLink">
            Consult
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
