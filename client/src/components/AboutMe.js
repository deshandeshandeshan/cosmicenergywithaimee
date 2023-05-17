import { Link } from "react-router-dom";
import skyMoon from "../images/sky_moon.jpg";
import crystals from "../images/crystals.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <main>
      <img
        src={crystals}
        alt="dreamy setting with crystals and statues"
        width="100%"
      />
      <div className="aboutMeFirstSection aboutMeSectionPadding">
        <h1 className="firstSectionHeading">Hi, I'm Aimee</h1>
        <p className="firstSectionText">
          I have consciously been on my own spiritual journey since I was 17
          years of age. Fast forward a few years and some losses later, I
          finally chose to answer the “call” to unlock who I really am after
          losing my Paternal grandmother back in 2008. I am passionate about
          being a catalyst for my clients to unlock their self-empowerment and
          clear blocks that are stopping their soul connection on their journey
          and who they want to be.
        </p>
      </div>
      <img
        src={skyMoon}
        alt="ethereal sky setting with clouds and crecent moon"
        width="100%"
      />
      <div className="aboutMeSecondSection aboutMeSectionPadding">
        <p className="secondSectionText">
          We often hear it nowadays don’t we - how we are all made up of energy,
          and that is true for everything in our world, so when your own
          internal energy system (the chakras) are out of sync, it really does
          have a profound effect on our reality and how we respond to things
          happening around us.
        </p>
        <p className="secondSectionText aboutMeTextPadding">
          Here at It’s Cosmic Energy, my goal is to help you clear any blockages
          that are stopping you from aligning with your full potential and your
          higher self.
        </p>
        <Link to="/contact">
          <button className="button aboutMeButton">Contact</button>
        </Link>
      </div>
    </main>
  );
};

export default AboutMe;
