import { supabase } from "./lib/supabaseClient";
import { appToggles, storageSetValueSettingsData } from "./misc/dataForChecks";
import misc from "./misc/misc";
import colorUsernames from "./tweaks/colorUsernames";
import addEmoteMenuButton from "./tweaks/emoteMenu";
import setHighlightWords from "./tweaks/higlightWords";
import seperateChatMessages from "./tweaks/messageSeparate";
import addPipButton from "./tweaks/pip";
import addPopoutChatButton from "./tweaks/popoutChat";
import volumeScrollEnable from "./tweaks/volumeScroll";

const enableStyles: Function = (): void => {
    const customCSSLink: string =
        "https://dopexz7.github.io/emotes/content_new.css";

    misc();
    if (process.env.BROWSER !== "firefox") {
        addEmoteMenuButton();
    }
    addPipButton();
    addPopoutChatButton();

    chrome.storage.local.get("experimentalCSS", (r: { [key: string]: any }) => {
        let head: HTMLHeadElement = document.head;
        let link: HTMLLinkElement = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        if (r.experimentalCSS === true) {
            link.href = customCSSLink;
        } else {
            link.href = chrome.runtime.getURL("css/content_new.css");
        }
        head.appendChild(link);
        console.log("dopeChat: Styles loaded");
    });

    const chatAppToggles: Function = (): void => {
        appToggles.forEach((v) => {
            chrome.storage.local.get(v.name, (r: { [key: string]: any }) => {
                if (r[v.name] === true) {
                    document.documentElement.style.setProperty(
                        v.cssValue,
                        "none",
                    );
                } else {
                    document.documentElement.style.setProperty(
                        v.cssValue,
                        v.display,
                    );
                }
            });
        });
    };

    const storageSetValueSettings: Function = (): void => {
        storageSetValueSettingsData.forEach((v) => {
            chrome.storage.local.get(
                v.name,
                (r: { [key: string]: any }): void => {
                    if (r[v.name]) {
                        document.documentElement.style.setProperty(
                            v.cssValue,
                            v.name === "changeChatWidth"
                                ? r[v.name] + "px"
                                : "secondValue" in v
                                ? v.secondValue
                                : r[v.name],
                        );
                    } else {
                        document.documentElement.style.setProperty(
                            v.cssValue,
                            v.value,
                        );
                    }
                },
            );
        });
    };

    let obvpage: MutationObserver = new MutationObserver(
        (mutations: MutationRecord[]): void => {
            mutations.forEach((mutation: MutationRecord): void => {
                if (mutation.addedNodes.length) {
                    chatAppToggles();
                    storageSetValueSettings();
                    volumeScrollEnable();
                    colorUsernames();
                    setHighlightWords();
                    seperateChatMessages();
                }
            });
        },
    );
    obvpage.observe(document.body, { childList: true, subtree: true });
};

const gettingUserEmotes: Function = async (): Promise<any> =>
    await supabase.from("useremotes").select("*");

gettingUserEmotes().then((res: any): void => {
    let userEmotes = res?.data.filter(
        (v: any) =>
            v?.name?.toLowerCase() ===
            window.location.pathname.split("/")[1].toLowerCase(),
    )[0]?.emotes;
    let globalEmotes = res?.data.filter((v: any) => v.name === "global")[0]
        .emotes;
    let fullEmotes: any[] = [];

    if (userEmotes) {
        fullEmotes = userEmotes.concat(globalEmotes);
    } else {
        fullEmotes = globalEmotes;
    }
    chrome.storage.local.set({ FULLSET: fullEmotes });
    console.log(
        `dopeChat: Fetched ${fullEmotes.length} emotes (${globalEmotes.length} are global)`,
    );
    console.log(
        `For streamer's full emotes list go to https://dopechat.ddns.net/dashboard/set/${
            window.location.pathname.split("/")[1]
        }`,
    );
});

const substitute: Function = (nodes: any) => {
    let elements: HTMLElement | any = nodes?.querySelectorAll(
        "div:not(.tw-tooltip):not(.bttv-tooltip):not(.ffz__tooltip--inner)",
    );
    let emotes: any[] = [];

    chrome.storage.local.get("FULLSET", (r: { [key: string]: any }) => {
        emotes = r.FULLSET;
        for (let i = 0; i < elements?.length; i++) {
            for (let j = 0; j < elements[i].childNodes.length; j++) {
                let node: Node | any = elements[i].childNodes[j];
                if (node.nodeType === 3) {
                    let text: string[] = node.nodeValue.split(" ");
                    if (text.length < 38) {
                        let new_node: DocumentFragment =
                            document.createDocumentFragment();
                        for (let k = 0; k < text.length; k++) {
                            let found: boolean = false;
                            for (let l = 0; l < emotes?.length; l++) {
                                if (text[k] === emotes[l].code) {
                                    console.log(
                                        `dopeChat: Replacing ${text[k]} with ${emotes[l].src}`,
                                    );
                                    found = true;
                                    let wrapper: HTMLSpanElement =
                                        document.createElement("span");
                                    wrapper.className = "emote_wrapper";
                                    let icon: HTMLImageElement =
                                        document.createElement("img");
                                    icon.className = "inserted_emote";
                                    icon.src = emotes[l].src;
                                    icon.alt = emotes[l].code;
                                    let tip: HTMLSpanElement =
                                        document.createElement("span");
                                    tip.className = "tooltiptext";
                                    tip.textContent = emotes[l].code;
                                    wrapper.appendChild(icon);
                                    wrapper.appendChild(tip);
                                    new_node.appendChild(wrapper);
                                    break;
                                }
                            }
                            if (found === false) {
                                new_node.appendChild(
                                    document.createTextNode(text[k]),
                                );
                            }
                            if (k < text.length - 1) {
                                new_node.appendChild(
                                    document.createTextNode(" "),
                                );
                            }
                        }
                        new_node.normalize();
                        elements[i].replaceChild(new_node, node);
                    } else {
                        break;
                    }
                }
            }
        }
    });
};

let observer: MutationObserver = new MutationObserver(
    (mutations: MutationRecord[]): void => {
        mutations.forEach((mutation: MutationRecord) => {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                if (mutation.addedNodes[i].childNodes.length) {
                    substitute(mutation.addedNodes[i]);
                }
            }
        });
    },
);

const initiate: Function = (): void => {
    substitute(document.body);
    console.log("dopeChat: Replacing emotes");
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};

const dopeChat_init = () => {
    console.log("dopeChat: Initiating...");
    enableStyles();
    initiate();
};

dopeChat_init();
