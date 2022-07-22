import browser from "webextension-polyfill";
import App from "./App";
import "../css/options.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("options")!);
browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    root.render(<App />);
});
