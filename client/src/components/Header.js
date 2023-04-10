import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main>
      <h1>Cosmic Energy with Aimee</h1>
      <ul>
        <Link to="/" classname="list">
          Homepage
        </Link>
        <Link to="/services" classname="list">
          Services
        </Link>
        <Link to="/enquire" classname="list">
          Enqire
        </Link>
        <Link to="/aboutme" classname="list">
          About me
        </Link>
      </ul>
    </main>
  );
};

export default Header;
