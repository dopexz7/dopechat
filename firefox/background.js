(function() {
    chrome.runtime.onInstalled.addListener(function(details) {
        if (details.reason == "install") {
            chrome.storage.local.get(['SET'], function(result) { //check for custom emotes at install
                if (result.SET == null) { //if no emote set is saved
                    var emotes = [];
                    chrome.storage.local.set({ SET: emotes }); //save default set
                }
            });  
        } else if(details.reason == 'update') {
            chrome.storage.local.get('vers033', function(result){
                if(!result.vers033) {
                    chrome.tabs.create({url: "update.html"});
                    chrome.storage.local.set({ vers033: 'dontdisplaythisshit' });
                }
                
            });
            
        }       
    });

}());
