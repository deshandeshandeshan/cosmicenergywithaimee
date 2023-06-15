import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <div className="contactPage contactGrid">
        <h1 className="contactTitlePadding colourLightPurple contactFormItemA">
          Get in touch with me!
        </h1>
        <p className="contactIntro introPadding colourLightPurple contactFormItemB">
          Enquire here for a service and I’ll be in touch
        </p>
        <form
          className="contactForm colourLightPurple contactFormItemC"
          action="https://formsubmit.co/hello@cosmicenergywithaimee.com"
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
            className="messageField inputFieldMessage inputField"
          />

          <button
            className="button formButton formButtonMargin"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
