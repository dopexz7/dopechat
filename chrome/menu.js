(function() {
    var ONSWITCH = document.getElementById("onswitch");
    chrome.storage.sync.get(['ON'], (function(result) {
        if (result.ON == 1) { //on if ON is set to 1
            ONSWITCH.checked = true;                     
        }
        else { //off if ON is set to 0 or undefined
            ONSWITCH.checked = false;
        }
    }));

    ONSWITCH.addEventListener('change', (function() { //toggle extension on and off
        if (this.checked) {
            chrome.storage.sync.set({ ON: 1 });
            chrome.tabs.query({}, (function(tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, { order: "start" }); //start emote insertions
                }
            }));
        }
        else {
            chrome.storage.sync.set({ ON: 0 });
            chrome.tabs.query({}, (function(tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, { order: "stop" }); //stop emote insertions
                }
            }));
        }
    }));

    document.getElementById("manage").addEventListener('click', (function() { 
        window.open(chrome.runtime.getURL('settings.html'));
    }));

}());
chrome.storage.local.get('using', function(result) {
    var element = document.getElementById('emote-h');
        if (result['using'] === 'useratedemotes') {
            document.getElementById('using-rateds').style.display = "block";
            element.innerText = "Using RatedEpicz's emote set";
        } else if (result['using'] === 'userameemotes') {
            document.getElementById('using-ramees').style.display = "block";
            element.innerText = "Using Ramee's emote set";

        } else if (result['using'] === 'usevaderemotes') {
            document.getElementById('using-vaders').style.display = "block";
            element.innerText = "Using Vader's emote set";

        } else {
            document.getElementById('using-none').style.display = "block";
            element.innerText = "No emote set installed";
        }
    });
document.getElementById('manage').addEventListener("mouseover", function() {
    document.getElementById('settings-h').style.opacity = "1";
    document.getElementById('settings-h').style.fontSize = "13px";
});

document.getElementById('manage').addEventListener("mouseout", function() {
    document.getElementById('settings-h').style.opacity = "0";
    document.getElementById('settings-h').style.fontSize = "6px";
});

document.getElementById('active-set').addEventListener("mouseover", function() {
    document.getElementById('emote-h').style.opacity = "1";
    document.getElementById('emote-h').style.fontSize = "13px";
});

document.getElementById('active-set').addEventListener("mouseout", function() {
    document.getElementById('emote-h').style.opacity = "0";
    document.getElementById('emote-h').style.fontSize = "6px";
});

