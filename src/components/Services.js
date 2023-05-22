import { Link } from "react-router-dom";
import reiki from "../images/reiki.jpg";
import "./Services.css";
import { Reveal } from "./utils/Reveal";

const Services = () => {
  return (
    <main>
      <section className="servicesIntro servicesGrid">
        <div className="servicesIntroGridItem">
          <div className="gridItemA">
            <Reveal>
              <h1 className="heading textColourLightPurple servicesPadding">
                Services
              </h1>
            </Reveal>
          </div>
          <div className="gridItemB">
            <Reveal>
              <p className="textColourLightPurple">
                We offer a range of spiritual services designed to help you
                connect with your inner self, gain clarity and elevate your
                consciousness. Whether you're seeking to release tension, gain
                insight or find comfort, we invite you to explore our services
                and discover how Cosmic Energy can support your path towards
                self-discovery and transformation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="servicesReiki servicesGrid">
        <img
          src={reiki}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="reikiGridItemA image imagePadding"
        />
        <div className="reikiGridItemB servicesItemAlign">
          <Reveal>
            <h2 className="heading servicesTextAlign servicesPadding ">
              Reiki
            </h2>
          </Reveal>
          <Reveal>
            <p className="servicesTextAlign">
              A Japanese healing technique that promotes relaxation and balance
              in the body, mind and spirit. During a session, the practitioner
              will use light touch or hands hovering over your body to channel
              energy, which can help release tension, reduce stress and enhance
              overall wellbeing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="servicesOutro servicesGrid">
        <div className="outroGridItemA">
          <Reveal>
            <p className="servicesTextAlign contentPadding">
              Our services are tailored to your individual needs and
              preferences, and can be conducted in person, on video call or
              through email, for your convenience. If you are interested in any
              of these services please get in contact with me via the contact
              form provided.
            </p>
          </Reveal>
        </div>
        <div className="outroGridItemB ">
          <Reveal>
            <Link to="/contact" className="displayGrid">
              <button className="button">Contact</button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
