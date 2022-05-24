import { Routes, Route } from "react-router-dom";
// import { Editor } from "@tinymce/tinymce-react";

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
      {/* <Editor
        apiKey="4dmm3xu40at1e9gl89degd7yj4wr9ikpwsnini9r1rc616pn"
        plugins="wordcount"
      /> */}
      <Footer />
    </>
  );
}

export default App;
