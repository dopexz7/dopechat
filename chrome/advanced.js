chrome.storage.local.get('SET', function(result){
    document.getElementById('emoteCount').innerText = result.SET.length;
});

function listremove(s, i, el) { //add functionality to the emote delete buttons
        el.addEventListener('click', (function rmv() {
            s.splice(i, 1); //remove the element at the given index from the given set
            chrome.storage.local.set({ SET: s }, (function() {
                showemotes(); //update emote table
                setswap(); //use changed emote set
            })); //save the changed set
            el.removeEventListener('click', rmv, false);
        }), false);
    }

    function showemotes() { //show table with all emotes
        chrome.storage.local.get(['SET', 'setDate'], (function(result) {
            var emotes = result.SET;
            var table = document.getElementById("emotetablex");   
            while (table.firstChild) {
                table.removeChild(table.firstChild); //clears emotes
            }
            
            var list = document.createDocumentFragment();
            for (var i = 0; i < emotes.length; i++) {

	        	var item = document.createElement("div"); //table row
	            box = document.createElement("div"); //table node
	            box.className = "emotetable-img";
	            var img = document.createElement("img"); //table node
	            img.src = emotes[i].src;
	            box.appendChild(img);
	            item.appendChild(box);
	            box = document.createElement("div"); //table node
	            box.className = "emotetable-img";
	            var box = document.createElement("div"); //table node
	            box.textContent = emotes[i].code;
	            box.className = "emotetable-code";
	            item.className = "emotetable-div";
	            item.id = emotes[i].code;
	            item.appendChild(box);
	            var lbl = document.createElement("label"); //emote remove button label
	            lbl.className = "emotetable-remove";
	            lbl.title = "remove";
	            lbl.textContent = "Remove";       
	            var btn = document.createElement("input"); //emote remove button
	            btn.type = "button";
	            btn.className = "hide";
	            listremove(emotes, i, btn); //make button remove adjacent emote
	            var datetime = document.createElement('div');
	            datetime.className = "datetime-emotes";
	            if (emotes[i].date === undefined) {
	            	datetime.textContent = result.setDate;
	            } else {
	            	datetime.textContent = emotes[i].date;

	            }
	            
	            lbl.appendChild(btn);
	            box.appendChild(lbl);
	            
	            item.appendChild(box);
	            item.appendChild(datetime);
	            list.appendChild(item);   
                }
                table.appendChild(list);
            
        }));
    }

    function autocc() {
    var input, filter, ul, i, txtValue, count=0;
    input = document.getElementById("emoteInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("emotetable-div");
    for (i=0; i<ul.length; i++) {
        txtValue = ul[i].id;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
            count += 1;
        } else {
            ul[i].style.display = "none";
        }
        document.getElementById('emoteCount').innerText = count;
    }
}
showemotes();

                    


document.getElementById('emoteInput').addEventListener("keyup", autocc);

document.getElementById("import").addEventListener('change', (function(event) { //import emote set file
        var reader = new FileReader();
        reader.onload = function() {
            try {
                var loaded = JSON.parse(reader.result);
                if (loaded && typeof loaded === "object") {
                    chrome.storage.local.set({ SET: loaded }, (function() { //set emote reference object array
                        document.getElementById("feedback1").textContent = "Import successful.";
                        document.getElementById("feedback2").textContent = "";
                        document.getElementById("found").className = "hide";
                        setTimeout(function() {
                        	document.getElementById("feedback1").textContent = "";
                        }, 2000);
                        setswap(); //use changed emote set
                    }));
                }
            }
            catch (e) {
                document.getElementById("feedback1").textContent = "Import failed.";
            }
        };
        reader.readAsText(event.target.files[0]);
        document.getElementById("import").value = ""; //clears loaded file so it can be selected again
    }));

    var savelink = null; //null by default
    document.getElementById("export").addEventListener('click', (function() { //export emote set file
        chrome.storage.local.get(['SET'], (function(result) { //check for custom emotes at page load
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
                setTimeout(function() {
                            document.getElementById("feedback1").textContent = "";
                }, 2000);
            }
        }));
    }));

    document.getElementById("add").addEventListener('click', (function() { //add emote to set
        chrome.storage.local.get(['SET'], (function(result) { //check for custom emotes
            var emotes = result.SET;
            if (emotes == null) {
                document.getElementById("feedback2").textContent = "No emote set to add to (default should be set on installation).";
            }
            else {
                var c = document.getElementById("code").value;
                if (c == "") {//if code field is blank
                    document.getElementById("feedback2").textContent = "No code given.";

                    document.getElementById("found").className = "hide";

                    setTimeout(function() {
                        	document.getElementById("feedback2").textContent = "";
                    }, 2000);
                }
                else if (c.match("^[A-Za-z0-9:_]+$")) { //allowed characters
                    var found = false;
                    for (var i = 0; i < emotes.length; i++) {
                        if (c == emotes[i].code) {
                            document.getElementById("feedback2").textContent = "Code already in use as";
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
                            document.getElementById("feedback2").textContent = "Emote not found.";
                            document.getElementById("found").className = "hide";
                            setTimeout(function() {
                        		document.getElementById("feedback2").textContent = "";
                    		}, 2000);
                        }
                        else {
                        	var d = new Date().toLocaleString('en-US');
                            emotes.push({ code: c, src: s, date: d }); //append new emote to array for emotes
                            chrome.storage.local.set({ SET: emotes }, (function() { //set emote reference object array
                                document.getElementById("feedback2").textContent = "Emote added with image:";
                                
                                document.getElementById("addedimg").src = s;
                                setremove(c); //make button remove new emote
                                document.getElementById("found").className = "show";
                                setswap(); //use changed emote set
                                setTimeout(function() {
                        			document.getElementById("feedback2").textContent = "";
                    			}, 2000);

                            }));
                        }
                    }
                }
                else {
                    document.getElementById("feedback2").textContent = "Code contains invalid characters.";
                    setTimeout(function() {
                        	document.getElementById("feedback2").textContent = "";
                    }, 2000);
                }
            }
        }));
    }));

    function setremove(c) { //add functionality to the emote delete button
        var rmvbtn = document.getElementById("del");
        rmvbtn.addEventListener('click', (function rmv() {
            document.getElementById("found").className = "hide";
            chrome.storage.local.get(['SET'], (function(result) { //check for custom emotes
                var emotes = result.SET;
                for (var i = 0; i < emotes.length; i++) {
                    if (c == emotes[i].code) {
                        emotes.splice(i, 1); //remove the emote at the given index from the given set
                        chrome.storage.local.set({ SET: emotes }, (function() { //save the changed set

                                showemotes(); //update emote table
                            
                            setswap(); //use changed emote set
                        }));
                        break;
                    }
                }
            }));
            document.getElementById("feedback2").textContent = "Emote removed.";
            setTimeout(function() {
                            document.getElementById("feedback2").textContent = "";
                    }, 2000);
            rmvbtn.removeEventListener('click', rmv, false);
        }), false);

    }

    function setswap() { //use changed emote set in current tabs
        chrome.tabs.query({}, (function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, { newemotes: "change" });
            }
        }));
    }



