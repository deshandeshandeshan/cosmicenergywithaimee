import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <div className="contactPage contactGrid">
        <h1 className="contactTitlePadding colourLightPurple contactFormItemA">
          Contact
        </h1>
        <p className="contactIntro introPadding colourLightPurple contactFormItemB">
          Enquire here for a service and I’ll be in touch
        </p>
        <form className="contactForm colourLightPurple contactFormItemC">
          <label for="name">Name:</label>
          <input
            className="formMargin inputField"
            type="text"
            id="name"
            name="name"
          />

          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            className="inputField formMargin"
          />

          <label for="service">Service:</label>
          <select
            className="inputField formMargin"
            name="services"
            id="service"
          >
            <option value="reiki">Reiki</option>
            <option value="oracle">Oracle card reading</option>
            <option value="medium">Mediumship reading</option>
          </select>

          <label for="message">Message:</label>
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
            form="form1"
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
