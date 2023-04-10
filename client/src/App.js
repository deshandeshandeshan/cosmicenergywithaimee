import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Enquire from "./components/Enquire";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/enquire" element={<Enquire />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
