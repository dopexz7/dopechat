chrome.runtime.onUpdateAvailable.addListener(() => chrome.runtime.reload());

chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage && chrome.runtime.openOptionsPage();
});

chrome.runtime.onInstalled.addListener(({ reason }: { reason: string }) => {
    if (reason == "install") {
        chrome.tabs.create({ url: "https://dopechat.ddns.net/" });
    }
});
