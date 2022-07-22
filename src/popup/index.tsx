import browser from "webextension-polyfill";
import Popup from "./component";
import "../css/popup.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("popup")!);
browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    root.render(<Popup />);
});
