import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
