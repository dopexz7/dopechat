(function() {
    chrome.runtime.onInstalled.addListener(function(details) {
        if (details.reason == "install") {
            chrome.storage.local.get(['SET'], function(result) { //check for custom emotes at install
                if (result.SET == null) { //if no emote set is saved
                    var emotes = [];
                    chrome.storage.local.set({ SET: emotes }); //save default set
                }
            });  
        chrome.tabs.create({url: chrome.runtime.getURL('install.html')}, function (tab) {});
        } else if(details.reason == "update") {
            chrome.tabs.create({url: chrome.runtime.getURL('update.html')}, function (tab) {});
        }
        
        
    });

}());
