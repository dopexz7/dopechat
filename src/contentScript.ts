import { supabase } from "./lib/supabaseClient";
import { appToggles, storageSetValueSettingsData } from "./misc/dataForChecks";
import misc from "./misc/misc";
import colorUsernames from "./tweaks/colorUsernames";
import addEmoteMenuButton from "./tweaks/emoteMenu";
import setHighlightWords from "./tweaks/higlightWords";
import seperateChatMessages from "./tweaks/messageSeparate";
import addPopoutChatButton from "./tweaks/popoutChat";
import volumeScrollEnable from "./tweaks/volumeScroll";

const versionCheck: Function = async (): Promise<void> => {
    console.log("Checking dopeChat version...");
    const githubRepo = "dopexz7/dopechat";
    const fileToFetch = "package.json";
    const response: Response = await fetch(
        `https://raw.githubusercontent.com/${githubRepo}/main/${fileToFetch}`,
    );
    const data: any = await response.json();

    if (data.version !== chrome.runtime.getManifest().version) {
        console.log("New version available");

        chrome.runtime.sendMessage("updateAvailable", (response) => {
            if (response === "updated") {
                let k = document.createElement("div");
                k.id = "dopeChat-updateAvailable";
                k.className =
                    "bg-black bg-opacity-50 blur-updateavail !text-5xl text-main-white backdrop-blur-xl h-screen w-screen fixed top-0 left-0 z-50 flex items-center justify-center";
                k.textContent =
                    "dopeChat new version available! Refresh the page to finish the update.";
                for (let i = 0; i < data.changelog.length; i++) {
                    for (var j = 0; j < data.changelog[i].length; j++) {
                        console.log(data.changelog[i]);
                    }
                }
                const body = document.querySelector("body");
                if (body) body.prepend(k);
            }
        });
    } else {
        console.log("No new version available");
    }
};

const enableStyles: Function = (): void => {
    const customCSSLink: string =
        "https://dopexz7.github.io/emotes/content_new.css";

    misc();
    addEmoteMenuButton();
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
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};

versionCheck();

enableStyles();
initiate();
