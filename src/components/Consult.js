import "./Consult.css";

const Consult = () => {
  return (
    <main className="consultContainer">
      <h1 className="consultHeader">Lets begin the journey!</h1>
      <div className="consultItems consultGrid">
        <div className="consultItemA consultItem">
          <h2 className="paddingBottom">
            Introductory meeting + consultation package
          </h2>
          <p className="paddingBottom">
            This service includes a 30 minute introductory consultation as well
            as an hour consultation focussing on a service of your choosing.
          </p>
          <p className="paddingBottom">
            The introductory meeting is 30 minutes and is aimed at getting
            familiar with each other as well as having a chat about some of your
            goals for the service
          </p>
          <p className="">
            After this introductory call we can then proceed to book you in for
            an hour consultation focussing on the service of your choosing.
          </p>
          <button className="button cosultButton">Book a consultation</button>
        </div>
        <div className="consultItemB consultItem">
          <h2 className="paddingBottom">Introductory meeting only</h2>
          <p className="paddingBottom">
            This service is a 30 minute meeting aimed to get familiar with each
            other as well as chat about some of your goals for the service. The
            aim for this introductory meeting will be to figure out if this is a
            service that suits your needs
          </p>
          <p className="">
            After this introductory call we can then proceed to book you in for
            an hour consultation focussing on the service of your choosing.
          </p>
          <button className="button cosultButton">Book a consultation</button>
        </div>
      </div>
      <p>
        This service is a 30 minute meeting aimed to get familiar with each
        other as well as chat about some of your goals for the service. The aim
        for this introductory meeting will be to figure out if this is a service
        that suits your needs
      </p>
    </main>
  );
};

export default Consult;
