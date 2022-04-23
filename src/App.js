import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Homepage } from "./components/Homepage/Homepage";
import { Footer } from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
