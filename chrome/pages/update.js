document.getElementById("update-settings-id").addEventListener("click",function(){window.open(chrome.runtime.getURL("pages/settings.html"),"_self")}),document.getElementById("updateCurrentVersion").textContent=chrome.runtime.getManifest().version;