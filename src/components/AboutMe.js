import { Link } from "react-router-dom";
import skyMoon from "../images/sky_moon.jpg";
import crystals from "../images/crystals.jpg";
import "./AboutMe.css";
import { Reveal } from "./utils/Reveal";

const AboutMe = () => {
  return (
    <main>
      <img
        src={crystals}
        alt="dreamy setting with crystals and statues"
        className="image aboutMeHeaderImage"
      />
      <section className="aboutMeSectionOne">
        <div className="aboutMeIntroductionPadding aboutMeIntroduction">
          <div className="aboutMeIntroductionGridItemA">
            <Reveal>
              <h1 className="aboutMeTitlePadding">Hi, I'm Aimee</h1>
            </Reveal>
            <Reveal>
              <p className="firstSectionText">
                I have consciously been on my own spiritual journey since I was
                17 years of age. Fast forward a few years and some losses later,
                I finally chose to answer the “call” to unlock who I really am
                after losing my Paternal grandmother back in 2008. I am
                passionate about being a catalyst for my clients to unlock their
                self-empowerment and clear blocks that are stopping their soul
                connection on their journey and who they want to be.
              </p>
            </Reveal>
          </div>
        </div>
        <img
          src={skyMoon}
          alt="ethereal sky setting with clouds and crecent moon"
          className="aboutMeSectionOneimage image"
        />
      </section>

      <div className="aboutMeSectionTwo aboutMeSectionPadding aboutMeGrid">
        <div className="aboutMeItemA">
          <Reveal>
            <p className="secondSectionText aboutMePadding">
              We often hear it nowadays don’t we - how we are all made up of
              energy, and that is true for everything in our world, so when your
              own internal energy system (the chakras) are out of sync, it
              really does have a profound effect on our reality and how we
              respond to things happening around us.
            </p>
          </Reveal>
        </div>
        <div className="aboutMeItemB">
          <Reveal>
            <p className="secondSectionText aboutMeTextPadding aboutMePadding">
              Here at It’s Cosmic Energy, my goal is to help you clear any
              blockages that are stopping you from aligning with your full
              potential and your higher self.
            </p>
          </Reveal>
        </div>
        <div className="aboutMeItemC">
          <Reveal>
            <Link to="/reservation" className="aboutMeItemC">
              <button className="button aboutMeButton">
                Book a consultation
              </button>
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
