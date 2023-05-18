import { Link } from "react-router-dom";
import tree from "../images/tree.jpg";
import reiki from "../images/reiki.jpg";
import aboutMe from "../images/about_me.jpg";
import HomepageSvgGradient from "./HomepageSvgGradient";
import "./Homepage.css";

const Homepage = () => {
  return (
    <main>
      <div>
        <HomepageSvgGradient />
      </div>
      <div className="homepageSectionOne">
        <div className="homepageIntroduction sectionOnegridPadding gridCentered">
          <p className="textColourCream textCentred homepageIntroductionGridItem">
            Cosmic Energy is a spiritual company founded by Aimee. Our services
            are designed to help you connect with your inner self and elevate
            your consciousness. We value openness, oneness and spiritual growth,
            and strive to empower you on your journey with kindness and
            authenticity. Our goal is to support your path towards
            self-discovery and transformation.
          </p>
        </div>

        <img
          src={tree}
          alt="Misty scene with a single tree in the middle"
          className="image homepageSectionOneImage"
        />
      </div>

      <div className="homepageServices grid homepageServicesGrid">
        <h2 className="heading textColourCream textCentred servicesItemA servicesTitlePadding contentPadding">
          Services
        </h2>

        <img
          src={reiki}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="image servicesItemB imagePadding"
        />

        <p className="textColourCream textCentred servicesItemC contentPadding">
          At Cosmic Energy, we offer spiritual services that aim to help you
          connect with your inner self, elevate your consciousness and enhance
          your overall wellbeing. Our services include Reiki, Oracle Card
          Readings and Mediumship Readings.
        </p>

        <p className="textColourCream textCentred servicesItemD contentPadding">
          Whether you're seeking to release tension, gain insight or find
          comfort, our services are tailored to your individual needs and
          preferences and can be conducted in person, on video call or through
          email. We invite you to explore our offerings and discover how Cosmic
          Energy can support your spiritual journey.
        </p>

        <Link to="/services" className="servicesButtonItem displayGrid">
          <button className="button">View Services</button>
        </Link>
      </div>

      <div className="grid homepageAboutMe homepageAboutMeGrid">
        <h2 className="heading aboutMeItemA textCentred aboutMeTitlePadding contentPadding">
          Hi, I'm Aimee
        </h2>

        <img
          src={aboutMe}
          alt="Someone Viewing a glowing green sky"
          className="image aboutMeItemB imagePadding"
        />

        <p className="aboutMeItemC textCentred contentPadding">
          I have consciously been on my own spiritual journey since I was 17
          years of age. Fast forward a few years and some losses later, I
          finally chose to answer the “call” to unlock who I really am after
          losing my Paternal grandmother back in 2008. I am passionate about
          being a catalyst for my clients to unlock their self-empowerment and
          clear blocks that are stopping their soul connection on their journey
          and who they want to be.
        </p>
        <Link to="/aboutme" className="aboutMeButtonItem displayGrid">
          <button className="button">More about me</button>
        </Link>
      </div>
    </main>
  );
};

export default Homepage;
