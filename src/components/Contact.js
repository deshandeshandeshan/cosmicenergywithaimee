import "./Contact.css";
import { Reveal } from "./utils/Reveal";

const Contact = () => {
  return (
    <main>
      <section className="contactPage contactGrid">
        <div className="contactFormItemA">
          <Reveal>
            <h1 className="contactTitlePadding colourLightPurple">
              Get in touch with me!
            </h1>
          </Reveal>
        </div>
        <div className="contactFormItemB">
          <Reveal>
            <p className="contactIntro introPadding colourLightPurple">
              Enquire here for a service and I’ll be in touch
            </p>
          </Reveal>
        </div>
        <div className="contactFormItemC">
          <Reveal>
            <form
              className="contactForm colourLightPurple"
              action="https://formsubmit.co/deshan.mclachlan0@gmail.com"
              method="POST"
            >
              <label htmlFor="name">Name:</label>
              <input
                className="formMargin inputField"
                type="text"
                id="name"
                name="name"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="inputField formMargin"
              />

              <label htmlFor="service">Service:</label>
              <select
                className="inputField formMargin"
                name="services"
                id="service"
              >
                <option value="reiki">Reiki</option>
                <option value="oracle">Oracle card reading</option>
                <option value="medium">Mediumship reading</option>
              </select>

              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                id="message"
                name="message"
                cols="60"
                rows="8"
                className="inputFieldMessage inputField"
              />

              <button
                className="formButton formButtonMargin"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
