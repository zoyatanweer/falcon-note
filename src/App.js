import { Routes, Route } from "react-router-dom";
import { Header, Homepage, Footer, NotesPage } from "./components";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
