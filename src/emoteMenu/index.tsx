import App from "./App";
import "../css/emoteMenu.css";
import { createRoot } from "react-dom/client";

const body = document.querySelector("body");
const app = document.createElement("div");
app.id = "dopeChat";

if (body) {
    body.prepend(app);
}

const container = document.getElementById("dopeChat");
const root = createRoot(container!);

window.onload = () => {
    root.render(<App />);
};
