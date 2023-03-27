import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import "styles/style.scss";
import { BrowserRouter } from "react-router-dom";
import "styles/_reset.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
