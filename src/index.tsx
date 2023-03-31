import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import "styles/style.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "styles/_reset.scss";
import { store } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
