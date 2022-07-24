import ChatSettings from "./pages/ChatSettings";
import Main from "./pages/Main";
import About from "./pages/About";
import HighlightingSettings from "./pages/HighlightingSettings";
import OtherSettings from "./pages/OtherSettings";
import ReadabilitySettings from "./pages/ReadabilitySettings";
import TextSettings from "./pages/TextSettings";
import UsernamesSettings from "./pages/UsernamesSettings";
import {
    AboutIcon,
    ChatIcon,
    HighlightIcon,
    HomeIcon,
    OtherSettingsIcon,
    ReadabilityIcon,
    TextIcon,
    UsernameIcon,
} from "./comps/Icons";

export const reactRoutes = [
    {
        title: "Main",
        path: "/",
        element: <Main />,
        icon: <HomeIcon />,
        id: "main",
    },
    {
        title: "Chat settings",
        path: "chat-settings",
        element: <ChatSettings />,
        icon: <ChatIcon />,
        id: "chat",
    },
    {
        title: "Text settings",
        path: "text-settings",
        element: <TextSettings />,
        icon: <TextIcon />,
        id: "text",
    },
    {
        title: "Usernames settings",
        path: "usernames-settings",
        element: <UsernamesSettings />,
        icon: <UsernameIcon />,
        id: "usernames",
    },
    {
        title: "Readability settings",
        path: "readability-settings",
        element: <ReadabilitySettings />,
        icon: <ReadabilityIcon />,
        id: "readability",
    },
    {
        title: "Highlighting settings",
        path: "highlighting-settings",
        element: <HighlightingSettings />,
        icon: <HighlightIcon />,
        id: "highlighting",
    },
    {
        title: "Other settings",
        path: "other-settings",
        element: <OtherSettings />,
        icon: <OtherSettingsIcon />,
        id: "other",
    },
    {
        title: "About",
        path: "about",
        element: <About />,
        icon: <AboutIcon />,
        id: "about",
    },
];
