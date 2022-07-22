chrome.runtime.onInstalled.addListener(
    (details: chrome.runtime.InstalledDetails) => {
        if (details.reason == "install") {
            chrome.storage.local.get(["SET"], (r: { [key: string]: any }) => {
                if (r.SET == null) {
                    var emotes: object[] = [];
                    chrome.storage.local.set({ SET: emotes });
                }
            });
            chrome.tabs.create({ url: "https://dopechat.ddns.net/" });
        } else if (details.reason == "update") {
            chrome.storage.local.get("vers11", (r: { [key: string]: any }) => {
                if (!r.vers11) {
                    chrome.tabs.create({ url: "https://dopechat.ddns.net/" });
                    chrome.storage.local.set({ vers11: "dontdisplaythisshit" });
                }
            });
        }
    },
);
