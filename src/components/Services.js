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
      <div className="services servicesGrid">
        <img
          src={incense}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="spiritReadingsItemA mobileCentring image imagePadding"
        />
        <div className="spiritReadingsItemB">
          <Reveal>
            <h2 className="heading servicesTextAlign servicesPadding ">
              Spiritual Intuitive Readings
            </h2>
          </Reveal>
          <Reveal>
            <p className="servicesTextAlign buttonPadding">
              This service is provided over email where I connect in with your
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
        </div>
        <div className="spiritReadingsItemC">
          <Reveal>
            <Link to="/email-service-booking" className="displayGrid">
              <button className="button">Book a consultation</button>
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default Services;
