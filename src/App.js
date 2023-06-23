import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Consult from "./components/Consult";
import ConsultationPackage from "./components/consultationBooking/ConsultationPackage";
import ConsultationIntroduction from "./components/consultationBooking/ConsultationIntroduction";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/consult" element={<Consult />} />
          <Route
            path="/consultationpackage"
            element={<ConsultationPackage />}
          />
          <Route
            path="/consultationintroduction"
            element={<ConsultationIntroduction />}
          />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
