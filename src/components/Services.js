import { Link } from "react-router-dom";
import reiki from "../images/reiki.jpg";
import "./Services.css";

const Services = () => {
  return (
    <main>
      <div className="servicesIntro servicesGrid">
        <div className="servicesIntroGridItem">
          <h1 className="heading gridItemA textColourLightPurple servicesPadding">
            Services
          </h1>
          <p className="gridItemB textColourLightPurple">
            We offer a range of spiritual services designed to help you connect
            with your inner self, gain clarity and elevate your consciousness.
            Whether you're seeking to release tension, gain insight or find
            comfort, we invite you to explore our services and discover how
            Cosmic Energy can support your path towards self-discovery and
            transformation.
          </p>
        </div>
      </div>

      <div className="servicesReiki servicesGrid">
        <img
          src={reiki}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="reikiGridItemA image imagePadding"
        />
        <div className="reikiGridItemB servicesItemAlign">
          <h2 className="heading servicesTextAlign servicesPadding ">Reiki</h2>
          <p className="servicesTextAlign">
            A Japanese healing technique that promotes relaxation and balance in
            the body, mind and spirit. During a session, the practitioner will
            use light touch or hands hovering over your body to channel energy,
            which can help release tension, reduce stress and enhance overall
            wellbeing.
          </p>
        </div>
      </div>

      <div className="servicesOutro servicesGrid">
        <p className="outroGridItemA servicesTextAlign contentPadding">
          Our services are tailored to your individual needs and preferences,
          and can be conducted in person, on video call or through email, for
          your convenience. If you are interested in any of these services
          please get in contact with me via the contact form provided.
        </p>

        <Link to="/contact" className="outroGridItemB displayGrid">
          <button className="button">Contact</button>
        </Link>
      </div>
    </main>
  );
};

export default Services;