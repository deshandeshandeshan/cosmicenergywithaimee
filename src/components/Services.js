import { Link } from "react-router-dom";
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
                My services designed to help you connect with your inner self,
                gain clarity and elevate your consciousness. Whether you're
                seeking to release tension, gain insight or find comfort, we
                invite you to explore our services and discover how Cosmic
                Energy can support your path towards self-discovery and
                transformation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <section className="services servicesGrid">
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
      </div> */}

      <div className="services servicesGrid">
        <img
          src={incense}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="spiritReadingsItemA mobileCentring image imagePadding"
        />
        <div className="spiritReadingsItemB servicesItemAlign">
          <Reveal>
            <h2 className="heading servicesTextAlign servicesPadding ">
              Spiritual Intuitive Readings
            </h2>
          </Reveal>
          <Reveal>
            <p className="servicesTextAlign buttonPadding">
              this service is provided over email where I connect in with your
              energy, your Spirit Team (yes, we all have one!) and your Higher
              Self to bring through information for you to access your highest
              possible timeline. You are can ask three questions with this
              service, which you can include when completing your booking. An
              email reading allows for the messages from Spirit to flow through
              uninterrupted giving you the freedom and space to absorb and go
              through the channel received in your own time as many times as you
              feel called.
            </p>
          </Reveal>
          <Reveal>
            <div className="spiritReadingsButton mobileCentring">
              <Link to="/email-service-booking">
                <button className=" button">Book a consultation</button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* <div className="servicesOutro servicesGrid">
        <p className="outroGridItemA servicesTextAlign servicesContentPadding">
          Our services are tailored to your individual needs and preferences,
          and can be conducted in person, on video call or through email, for
          your convenience. If you are interested in any of these services
          please get in contact with me via the consult page or through email.
        </p>
      </div> */}
    </main>
  );
};

export default Services;
