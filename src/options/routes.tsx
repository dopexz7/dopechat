import ChatSettings from "./pages/ChatSettings";
import Main from "./pages/Main";
import About from "./pages/About";
import HighlightingSettings from "./pages/HighlightingSettings";
import OtherSettings from "./pages/OtherSettings";
import ReadabilitySettings from "./pages/ReadabilitySettings";
import TextSettings from "./pages/TextSettings";
import UsernamesSettings from "./pages/UsernamesSettings";

export const reactRoutes = [
    {
        path: "*",
        element: <Main />,
    },
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/chat-settings",
        element: <ChatSettings />,
    },
    {
        path: "/text-settings",
        element: <TextSettings />,
    },
    {
        path: "/readability-settings",
        element: <ReadabilitySettings />,
    },
    {
        path: "/other-settings",
        element: <OtherSettings />,
    },
    {
        path: "/highlighting-settings",
        element: <HighlightingSettings />,
    },
    {
        path: "/usernames-settings",
        element: <UsernamesSettings />,
    },
    {
        path: "/about",
        element: <About />,
    },
];
