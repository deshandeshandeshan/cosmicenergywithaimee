import { Link } from "react-router-dom";
import tree from "../images/tree.jpg";
import reiki from "../images/reiki.jpg";
import aboutMe from "../images/about_me.jpg";
import "./Home.css";
import { Reveal } from "./utils/Reveal";

const Home = () => {
  return (
    <main>
      <section className="homepageHeaderGradient">
        <h1 className="headerGradientItemA headerGridPadding gradientGridAlign textColourCream featureText">
          Navigating
        </h1>
        <h1 className="headerGradientItemB headerGridPadding gradientGridAlign textColourCream featureText">
          from
        </h1>
        <h1 className="headerGradientItemC headerGridPadding gradientGridAlign textColourCream featureText">
          your
        </h1>
        <h1 className="headerGradientItemD headerGridPadding gradientGridAlign textColourLightPurple featureText">
          heartspace
        </h1>
      </section>

      <section className="homepageSectionOne">
        <div className="homepageIntroduction sectionOnegridPadding gridCentered">
          <div className="textAlign homepageIntroductionGridItem">
            <Reveal>
              <p className="textColourLightPurple">
                Cosmic Energy is a spiritual company where the services are
                designed to help you connect with your inner self and elevate
                your consciousness. I value openness, oneness and spiritual
                growth, and strive to empower you on your journey with kindness
                and authenticity. My goal is to support your path towards
                self-discovery and transformation.
              </p>
            </Reveal>
          </div>
        </div>

        <img
          src={tree}
          alt="Misty scene with a single tree in the middle"
          className="image homepageSectionOneImage"
        />
      </section>

      <section className="homepageServices grid homepageServicesGrid">
        <div className="textAlign servicesItemA servicesTitlePadding homepageTitlePadding">
          <Reveal>
            <h2 className="heading textColourDarkPurple">Services</h2>
          </Reveal>
        </div>
        <img
          src={reiki}
          alt="Side profile of someones face laying down as someone performs reiki on them"
          className="image imagePadding servicesItemB"
        />

        <div className="textAlign servicesItemC contentPadding">
          <Reveal>
            <p className="textColourDarkPurple">
              At Cosmic Energy, I offer spiritual services that aim to help you
              connect with your inner self, elevate your consciousness and
              enhance your overall wellbeing.
            </p>
          </Reveal>
        </div>
        <div className="textAlign servicesItemD">
          <Reveal>
            <p className="textColourDarkPurple">
              Whether you're seeking to release tension, gain insight or find
              comfort. I invite you to connect with me and discover how Cosmic
              Energy can support your spiritual journey.
            </p>
          </Reveal>
        </div>
        <div className="servicesButtonItem">
          <Reveal>
            <Link to="/services" className="displayGrid">
              <button className="button">View Services</button>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grid homepageAboutMe homepageAboutMeGrid">
        <div className="homepageAboutMeItemA textAlign homepageTitlePadding">
          <Reveal>
            <h2 className="heading textColourLightPurple">Hi, I'm Aimee</h2>
          </Reveal>
        </div>
        <img
          src={aboutMe}
          alt="Someone Viewing a glowing green sky"
          className="image imagePadding gradientGridAlign homepageAboutMeItemB"
        />
        <div className="homepageAboutMeItemC textAlign contentPadding textColourLightPurple">
          <Reveal>
            <p>
              I have consciously been on my own spiritual journey since I was 17
              years of age. Fast forward a few years and some losses later, I
              finally chose to answer the “call” to unlock who I really am after
              losing my Paternal grandmother back in 2008. I am passionate about
              being a catalyst for my clients to unlock their self-empowerment
              and clear blocks that are stopping their soul connection on their
              journey and who they want to be.
            </p>
          </Reveal>
        </div>
        <div className="aboutMeButtonItem">
          <Reveal>
            <Link to="/aboutme" className="displayGrid">
              <button className="button">More about me</button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
