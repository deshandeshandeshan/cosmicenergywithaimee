import { Link } from "react-router-dom";
import reiki from "../images/reiki.jpg";

const Services = () => {
  return (
    <main>
      <div>
        <h1>Services</h1>
        <p>
          We offer a range of spiritual services designed to help you connect
          with your inner self, gain clarity and elevate your consciousness.
          Whether you're seeking to release tension, gain insight or find
          comfort, we invite you to explore our services and discover how Cosmic
          Energy can support your path towards self-discovery and
          transformation.
        </p>
      </div>

      <div>
        <img
          src={reiki}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          width="500"
        />

        <h2>Reiki</h2>
        <p>
          A Japanese healing technique that promotes relaxation and balance in
          the body, mind and spirit. During a session, the practitioner will use
          light touch or hands hovering over your body to channel energy, which
          can help release tension, reduce stress and enhance overall wellbeing.
        </p>
      </div>

      <div>
        <p>
          Our services are tailored to your individual needs and preferences,
          and can be conducted in person, on video call or through email, for
          your convenience. If you are interested in any of these services
          please get in contact with me via the contact form provided.
        </p>

        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </main>
  );
};

export default Services;
