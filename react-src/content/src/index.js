import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const body = document.querySelector("body");

const app = document.createElement("div");

app.id = "dopeChat";

if (body) {
  body.prepend(app);
}

window.onload = function () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("dopeChat")
  );
};
