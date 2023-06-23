import { Link } from "react-router-dom";
import reiki from "../images/reiki.jpg";
import oracleCards from "../images/oracle_cards.jpg";
import incense from "../images/incense.jpg";
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

      <section className="services servicesGrid">
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

      <div className="services servicesGrid">
        <img
          src={oracleCards}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="oracleGridItemA image imagePadding"
        />
        <div className="oracleGridItemB servicesItemAlign">
          <Reveal>
            <h2 className="heading servicesTextAlign servicesPadding ">
              Oracle card readings
            </h2>
          </Reveal>
          <Reveal>
            <p className="servicesTextAlign">
              A divination practice that uses oracle cards to provide guidance,
              insight and clarity. The practitioner will help you select cards
              that resonate with your questions or intentions, and offer
              interpretation and guidance based on the symbolism and messages of
              the cards.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="services servicesGrid">
        <img
          src={incense}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="mediumshipGridItemA image imagePadding"
        />
        <div className="mediumshipGridItemB servicesItemAlign">
          <Reveal>
            <h2 className="heading servicesTextAlign servicesPadding ">
              Mediumship readings
            </h2>
          </Reveal>
          <Reveal>
            <p className="servicesTextAlign">
              A communication practice that connects you with loved ones who
              have passed away. The practitioner will act as a medium or channel
              between you and the spirit world, relaying messages and providing
              comfort and closure.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="servicesOutro servicesGrid">
        <p className="outroGridItemA servicesTextAlign contentPadding">
          Our services are tailored to your individual needs and preferences,
          and can be conducted in person, on video call or through email, for
          your convenience. If you are interested in any of these services
          please get in contact with me via the consult page or through email.
        </p>

        <Link to="/reservation" className="outroGridItemB displayGrid">
          <button className="button">Book a consultation</button>
        </Link>
      </div>
    </main>
  );
};

export default Services;
