import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./css/reset.scss";
import "./css/all.scss";
import "./css/home.scss";
import "./css/calendar.scss";
import "./css/footer.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
