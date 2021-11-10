
    var first = document.getElementById('chatset');
    var second = document.getElementById('textset');
    var third = document.getElementById('otherset');

    document.getElementById("chatsettings").addEventListener("click", (function() {
        if (first.style.display !== 'inline') {
            first.style.display = "inline";
            second.style.display = "none";
            third.style.display = "none";
        } else{
            first.style.display = "none";

            
        }

        
    }));
    document.getElementById("textsettings").addEventListener("click", (function() {
        if (second.style.display !== 'inline') {
            second.style.display = "inline";
            first.style.display = "none";
            third.style.display = "none";
        } else{
            second.style.display = "none"
            
        }

        
    }));

    document.getElementById("othersettings").addEventListener("click", (function() {
        if (third.style.display !== 'inline') {
            third.style.display = "inline";
            first.style.display = "none";
            second.style.display = "none";
        } else{
            third.style.display = "none"
            
        }

        
    }));




(function() {

    var storage = chrome.storage.local;
    var obj = {};

    


        const timeout = document.getElementById("feedback6");


        function setValueSettings(addusername, usernm, resultUsername) {
            document.getElementById(addusername).addEventListener('click', (function() {
                var c = document.getElementById(usernm).value;
                    timeout.style.display = 'block';
                    if (c == "") {
                        document.getElementById("feedback6").textContent = "Nothing given.";
                        setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                       
                            }
                        document.getElementById("found").className = "hide";
                    } else {
                        obj[resultUsername] = c;
                        storage.set(obj);
                        document.getElementById("feedback6").textContent = "Successfully set.";
                        
                          setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                       
                            }
                    }
            }));
        }

        
        setValueSettings("addchatBG", "chatbg", "chatBackground");
        setValueSettings("addyourucolor", "usernmc", "yourUsernameColor");
        setValueSettings("addusername", "usernm", "yourUsername");
        setValueSettings("addtextsize", "textsize", "chatTextSize");
        setValueSettings("addtextcolor", "textcolor", "chatTextColor");
        setValueSettings("addtopbar", "topbarx", "topbarColor");
        setValueSettings("addchattopbar", "chattopbarx", "chattopbarColor");
        setValueSettings("addpfp", "pfp", "hideChatProfilePictures");
        setValueSettings("addfont", "font", "changefont");
        setValueSettings("addchatwidth", "chatwidth", "changeChatWidth");
        setValueSettings("addmessagestyle", "messagestyle", "messageStyle");


    document.getElementById("close").addEventListener('click', function(event) { 
        window.close();
    });

    document.getElementById("hints").addEventListener('click', function(event) { 
        var matches = document.querySelectorAll(".help");
        for (var i = 0; i < matches.length; i++) {
            matches[i].classList.remove("hide");
        }
    });

    document.getElementById("import").addEventListener('change', function(event) { //import emote set file
        var reader = new FileReader();
        reader.onload = function() {
            try {
                var loaded = JSON.parse(reader.result);
                if (loaded && typeof loaded === "object") {
                    chrome.storage.local.set({ SET: loaded }, function() { //set emote reference object array
                        document.getElementById("feedback1").textContent = "Import successful.";
                        document.getElementById("feedback2").textContent = "";
                        document.getElementById("found").className = "hide";
                        document.getElementById("feedback3").textContent = "";
                        document.getElementById("alltable1").style.display = "none";
                        setswap(); //use changed emote set
                    });
                }
            }
            catch (e) {
                document.getElementById("feedback1").textContent = "Import failed.";
            }
        };
        reader.readAsText(event.target.files[0]);
        document.getElementById("import").value = ""; //clears loaded file so it can be selected again
    });

    var savelink = null; //null by default
    document.getElementById("export").addEventListener('click', function() { //export emote set file
        chrome.storage.local.get(['SET'], function(result) { //check for custom emotes at page load
            if (result.SET == null) {
                document.getElementById("feedback1").textContent = "No emote set to export (default should be set on installation).";
            }
            else {
                if (savelink) {
                    URL.revokeObjectURL(savelink); //releases blob (not done immediately so link has enough time)
                }
                var blob = new Blob([JSON.stringify(result.SET)], { type: "text/plain;charset=utf-8" });
                savelink = URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.setAttribute("href", savelink);
                a.setAttribute("download", "my.emotes");
                document.body.appendChild(a); //must append or certain browsers will not click()
                a.click(); //activates download
                a.remove();
                document.getElementById("feedback1").textContent = "Emote set exported.";
            }
        });
    });

    document.getElementById("add").addEventListener('click', function() { //add emote to set
        chrome.storage.local.get(['SET'], function(result) { //check for custom emotes
            var emotes = result.SET;
            if (emotes == null) {
                document.getElementById("feedback2").textContent = "No emote set to add to (default should be set on installation).";
            }
            else {
                var c = document.getElementById("code").value;
                if (c == "") {//if code field is blank
                    document.getElementById("feedback2").textContent = "No code given.";
                    document.getElementById("found").className = "hide";
                }
                else if (c.match("^[A-Za-z0-9:_]+$")) { //allowed characters
                    var found = false;
                    for (var i = 0; i < emotes.length; i++) {
                        if (c == emotes[i].code) {
                            document.getElementById("feedback2").textContent = "Code already in use as:";
                            found = true;
                            document.getElementById("addedimg").src = emotes[i].src;
                            setremove(c); //make button remove found emote
                            document.getElementById("found").className = "show";
                            break;
                        }
                    }
                    if (found == false) {
                        var s = document.getElementById("src").value;
                        if (s == "") { //if source field is blank
                            document.getElementById("feedback2").textContent = "Code not found.";
                            document.getElementById("found").className = "hide";
                        }
                        else {
                            emotes.push({ code: c, src: s }); //append new emote to array for emotes
                            chrome.storage.local.set({ SET: emotes }, function() { //set emote reference object array
                                document.getElementById("feedback2").textContent = "Code added with image:";
                                document.getElementById("addedimg").src = s;
                                setremove(c); //make button remove new emote
                                document.getElementById("found").className = "show";
                                setswap(); //use changed emote set
                            });
                        }
                    }
                }
                else {
                    document.getElementById("feedback2").textContent = "Code contains invalid characters.";
                }
            }
        });
    });

    function setremove(c) { //add functionality to the emote delete button
        var rmvbtn = document.getElementById("del");
        rmvbtn.addEventListener('click', function rmv() {
            document.getElementById("found").className = "hide";
            chrome.storage.local.get(['SET'], function(result) { //check for custom emotes
                var emotes = result.SET;
                for (var i = 0; i < emotes.length; i++) {
                    if (c == emotes[i].code) {
                        emotes.splice(i, 1); //remove the emote at the given index from the given set
                        chrome.storage.local.set({ SET: emotes }, function() { //save the changed set
                            if (document.getElementById("alltable1").style.display == "block") {
                                showemotes(); //update emote table
                            }
                            setswap(); //use changed emote set
                        });
                        break;
                    }
                }
            });
            document.getElementById("feedback2").textContent = "Emote removed.";
            rmvbtn.removeEventListener('click', rmv, false);
        }, false);
    }

    function setswap() { //use changed emote set in current tabs
        chrome.tabs.query({}, function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, { newemotes: "change" });
            }
        });
    }

    function listremove(s, i, el) { //add functionality to the emote delete buttons
        el.addEventListener('click', function rmv() {
            s.splice(i, 1); //remove the element at the given index from the given set
            chrome.storage.local.set({ SET: s }, function() {
                showemotes(); //update emote table
                setswap(); //use changed emote set
            }); //save the changed set
            el.removeEventListener('click', rmv, false);
        }, false);
    }

    function showemotes() { //show table with all emotes
        chrome.storage.local.get(['SET'], function(result) {
            var emotes = result.SET;
            var table = document.getElementById("emotetable");
            document.getElementById("alltable1").style.display = "block";
            while (table.firstChild) {
                table.removeChild(table.firstChild); //clears emotes
            }
            if (emotes == null) {
                document.getElementById("feedback3").textContent = "No emote set to show (default will be set on first webpage load).";
            }
            else {
                document.getElementById("feedback3").textContent = "Your set has " + emotes.length + " emote(s):";
                var list = document.createDocumentFragment();
                for (var i = 0; i < emotes.length; i++) {
                    var item = document.createElement("tr"); //table row
                    var box = document.createElement("td"); //table node
                    box.textContent = emotes[i].code;
                    item.appendChild(box);
                    box = document.createElement("td"); //table node
                    var img = document.createElement("img"); //table node
                    img.src = emotes[i].src;
                    box.appendChild(img);
                    item.appendChild(box);
                    box = document.createElement("td"); //table node
                    var lbl = document.createElement("label"); //emote remove button label
                    lbl.className = "btn red";
                    lbl.title = "remove";
                    lbl.textContent = "X";
                    btn = document.createElement("input"); //emote remove button
                    btn.type = "button";
                    btn.className = "hide";
                    listremove(emotes, i, btn); //make button remove adjacent emote
                    lbl.appendChild(btn);
                    box.appendChild(lbl);
                    item.appendChild(box);
                    list.appendChild(item);
                }
                table.appendChild(list);
            }
        });
    }
    document.getElementById("see").addEventListener('click', showemotes);
}());