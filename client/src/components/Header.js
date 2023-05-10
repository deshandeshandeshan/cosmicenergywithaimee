import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Header = () => {
  return (
    <main>
      <div>
        <img src={Logo} alt="Cosmic energy logo" width="200" />
      </div>

      <ul>
        <Link to="/" classname="list">
          Homepage
        </Link>
        <Link to="/services" classname="list">
          Services
        </Link>
        <Link to="/contact" classname="list">
          Contact
        </Link>
        <Link to="/aboutme" classname="list">
          About me
        </Link>
      </ul>
    </main>
  );
};

export default Header;
