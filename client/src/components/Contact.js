const Enquire = () => {
  return (
    <main>
      <div>
        <h1>Enquire</h1>
        <p>Enquire here for a service and I’ll get in contact</p>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label for="email">Email:</label>
          <input type="text" id="email" name="email" />

          <label for="service">Service:</label>
          <select name="services" id="service">
            <option value="reiki">Reiki</option>
            <option value="oracle">Oracle card reading</option>
            <option value="medium">Mediumship reading</option>
          </select>

          <label for="message">Message:</label>
          <input type="text" id="message" name="message" />
        </form>
      </div>
    </main>
  );
};

export default Enquire;
