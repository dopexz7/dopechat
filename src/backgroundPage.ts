chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "updateAvailable") {
        sendResponse("updated");
        //chrome.runtime.requestUpdateCheck();
    }
});

chrome.runtime.onUpdateAvailable.addListener((details) => {
    chrome.runtime.reload();
});

chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage && chrome.runtime.openOptionsPage();
});

chrome.runtime.onInstalled.addListener(
    (details: chrome.runtime.InstalledDetails) => {
        if (details.reason == "install") {
            chrome.tabs.create({ url: "https://dopechat.ddns.net/" });
        }
    },
);
