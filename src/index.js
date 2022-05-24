import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./context/NoteContext";
// import { makeServer } from "./server";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <App />
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// document.getElementById("root")
// );
