import {
    emoteMenuIcon,
    pipIcon,
    popoutIcon,
    settingsIcon,
    theatreIcon,
} from "./icons";

let popoutchatFunction = () => {
    let myWindow: Window | any = window.open(
        window.location.href,
        "newWindow",
        "width=500,height=700",
    );
    let setChatPopout: NodeJS.Timer = setInterval((): void => {
        try {
            if (
                myWindow.document.querySelectorAll('[role="banner"]')[0] !==
                undefined
            ) {
                myWindow.document.querySelectorAll(
                    '[role="banner"]',
                )[0].style.display = "none";
                myWindow.document.querySelectorAll(
                    ".x78zum5.xdt5ytf.x1iyjqo2.x1gvwcb.x1qjc9v5.xl56j7k",
                )[0].style.display = "none";
                myWindow.document.documentElement.style.setProperty(
                    "--chatwidth",
                    "100%",
                );
                myWindow.document.querySelectorAll(
                    ".xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft.x1cvmir6",
                )[0].style.width = "100vw";
                myWindow.document.querySelectorAll(
                    ".x2bj2ny.x78zum5.x2lah0s.x1t2pt76.x1n2onr6.x1cvmir6",
                )[0].style.minHeight = "100vh";

                myWindow.document.querySelectorAll(".xxzkxad")[0].style.top =
                    "0";
                myWindow.document.getElementById(
                    "dopechat-popupbtn",
                ).style.display = "none";
                myWindow.document.querySelectorAll(
                    ".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn",
                )[0].style.paddingBottom = "0";

                clearInterval(setChatPopout);
            }
        } catch (e) {
            console.log(e);
        }
    }, 1);
};

const pipFunction = () => {
    let vid: any = document.querySelector("video.xh8yej3.x5yr21d.x1lliihq");
    if (document.pictureInPictureElement) document.exitPictureInPicture();
    else {
        if (document.pictureInPictureEnabled) vid.requestPictureInPicture();
    }
};

const theatreFunc = () => {
    if (
        document.querySelectorAll<HTMLElement>('[role="banner"]')[0].style
            .display !== "none"
    ) {
        document.querySelectorAll<HTMLElement>(
            '[role="banner"]',
        )[0].style.display = "none";
        document.querySelector<HTMLElement | any>(".xxzkxad").style.top = "0";
        document.querySelectorAll<HTMLElement>(
            ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
        )[0].style.top = "0";
        document.querySelectorAll<HTMLElement>(
            ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
        )[0].style.minHeight = "100vh";
        document.querySelectorAll<HTMLElement>(
            ".x78zum5.xdt5ytf.xtp0wl1",
        )[0].style.height = "100vh";
        document.querySelectorAll<HTMLElement>(
            ".x78zum5.xdt5ytf.x1n2onr6.xat3117.xxzkxad",
        )[0].style.minHeight = "100vh";
        document.querySelectorAll<HTMLElement>(
            ".x78zum5.xdt5ytf.xtp0wl1.x6ikm8r.x10wlt62",
        )[0].style.height = "100vh";
        document.querySelectorAll<HTMLElement>(
            ".xtp0wl1.x10wlt62",
        )[0].style.height = "100vh";
    } else {
        document.querySelectorAll<HTMLElement>(
            '[role="banner"]',
        )[0].style.display = "";
        document.querySelector<HTMLElement | any>(".xxzkxad").style.top = "";
        document.querySelectorAll<HTMLElement>(
            ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
        )[0].style.top = "";
        document.querySelectorAll<HTMLElement>(
            ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
        )[0].style.minHeight = "";
        document.querySelectorAll<HTMLElement>(
            ".x78zum5.xdt5ytf.xtp0wl1",
        )[0].style.height = "";
        document.querySelectorAll<HTMLElement>(
            ".x78zum5.xdt5ytf.x1n2onr6.xat3117.xxzkxad",
        )[0].style.minHeight = "";
        document.querySelectorAll<HTMLElement>(
            ".x78zum5.xdt5ytf.xtp0wl1.x6ikm8r.x10wlt62",
        )[0].style.height = "";
        document.querySelectorAll<HTMLElement>(
            ".xtp0wl1.x10wlt62",
        )[0].style.height = "";
    }
};

const altkey = navigator.userAgentData.platform.includes("Mac") ? "OPT" : "ALT";
const buttons = [
    {
        id: "dopechat-emotebutton",
        icon: emoteMenuIcon,
        title: "Emote menu",
        text: `Emote menu (${altkey}+E)`,
    },
    {
        id: "dopechat-popoutbtn",
        icon: popoutIcon,
        title: "Popout chat ",
        text: "Popout chat",
        function: () => popoutchatFunction(),
    },
    {
        id: "dopechat-pipbtn",
        icon: pipIcon,
        title: "Picture-In-Picture",
        text: `True Picture-In-Picture (${altkey}+P)`,
        function: () => pipFunction(),
    },
    {
        id: "dopechat-theatrebtn",
        icon: theatreIcon,
        title: "Theatre mode",
        text: `Theatre mode (${altkey}+T)`,
        function: () => theatreFunc(),
    },
    {
        id: "dopechat-settingsbtn",
        icon: settingsIcon,
        title: "Settings",
        text: "dopeChat Settings",
        function: () => window.open(chrome.runtime.getURL("options.html")),
    },
];

const addButtons: Function = (): void => {
    buttons.forEach((v) => {
        let wrapper = document.getElementById("dopechat-settingswrapper");
        let currentButton: HTMLElement | any = document.getElementById(v.id);
        if (wrapper && currentButton === null) {
            let newButton: HTMLElement | any = document.createElement("div");
            newButton.className =
                "text-sm py-1.5 flex items-center cursor-pointer text-white hover:text-main-purple duration-300";
            newButton.innerHTML = v.icon + v.text;
            newButton.setAttribute("title", v.title);
            newButton.id = v.id;
            if (v.function)
                newButton.addEventListener("click", () => v.function());
            wrapper.append(newButton);
        }
    });
};

export default addButtons;
