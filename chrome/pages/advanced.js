function listremove(e,t,n){n.addEventListener("click",function o(){e.splice(t,1),chrome.storage.local.set({SET:e},function(){showemotes(),setswap()}),n.removeEventListener("click",o,!1)},!1)}function showemotes(){chrome.storage.local.get(["SET","setDate"],function(e){for(var t=e.SET,n=document.getElementById("emotetablex");n.firstChild;)n.removeChild(n.firstChild);for(var o=document.createDocumentFragment(),d=0;d<t.length;d++){var c=document.createElement("div");(m=document.createElement("div")).className="emotetable-img";var a=document.createElement("img");a.src=t[d].src,m.appendChild(a),c.appendChild(m),(m=document.createElement("div")).className="emotetable-img";var m=document.createElement("div");m.textContent=t[d].code,m.className="emotetable-code",c.className="emotetable-div",c.id=t[d].code,c.appendChild(m);var l=document.createElement("label");l.className="emotetable-remove",l.title="remove",l.textContent="Remove";var s=document.createElement("input");s.type="button",s.className="hide",listremove(t,d,s);var i=document.createElement("div");i.className="datetime-emotes",void 0===t[d].date?i.textContent=e.setDate:i.textContent=t[d].date,l.appendChild(s),m.appendChild(l),c.appendChild(m),c.appendChild(i),o.appendChild(c)}n.appendChild(o)})}function autocc(){var e,t,n,o=0;for(e=document.getElementById("emoteInput").value.toUpperCase(),t=document.getElementsByClassName("emotetable-div"),n=0;n<t.length;n++)t[n].id.toUpperCase().indexOf(e)>-1?(t[n].style.display="",o+=1):t[n].style.display="none",document.getElementById("emoteCount").innerText=o}chrome.storage.local.get("SET",function(e){document.getElementById("emoteCount").innerText=e.SET.length}),showemotes(),document.getElementById("emoteInput").addEventListener("keyup",autocc),document.getElementById("import").addEventListener("change",function(e){var t=new FileReader;t.onload=function(){try{var e=JSON.parse(t.result);e&&"object"==typeof e&&chrome.storage.local.set({SET:e},function(){document.getElementById("feedback1").textContent="Import successful.",document.getElementById("feedback2").textContent="",document.getElementById("found").className="hide",setTimeout(function(){document.getElementById("feedback1").textContent=""},2e3),setswap()})}catch(e){document.getElementById("feedback1").textContent="Import failed."}},t.readAsText(e.target.files[0]),document.getElementById("import").value=""});var savelink=null;function setremove(e){var t=document.getElementById("del");t.addEventListener("click",function n(){document.getElementById("found").className="hide",chrome.storage.local.get(["SET"],function(t){for(var n=t.SET,o=0;o<n.length;o++)if(e==n[o].code){n.splice(o,1),chrome.storage.local.set({SET:n},function(){showemotes(),setswap()});break}}),document.getElementById("feedback2").textContent="Emote removed.",setTimeout(function(){document.getElementById("feedback2").textContent=""},2e3),t.removeEventListener("click",n,!1)},!1)}function setswap(){chrome.tabs.query({},function(e){for(var t=0;t<e.length;t++)chrome.tabs.sendMessage(e[t].id,{newemotes:"change"})})}document.getElementById("export").addEventListener("click",function(){chrome.storage.local.get(["SET"],function(e){if(null==e.SET)document.getElementById("feedback1").textContent="No emote set to export (default should be set on installation).";else{savelink&&URL.revokeObjectURL(savelink);var t=new Blob([JSON.stringify(e.SET)],{type:"text/plain;charset=utf-8"});savelink=URL.createObjectURL(t);var n=document.createElement("a");n.setAttribute("href",savelink),n.setAttribute("download","my.emotes"),document.body.appendChild(n),n.click(),n.remove(),document.getElementById("feedback1").textContent="Emote set exported.",setTimeout(function(){document.getElementById("feedback1").textContent=""},2e3)}})}),document.getElementById("add").addEventListener("click",function(){chrome.storage.local.get(["SET"],function(e){var t=e.SET;if(null==t)document.getElementById("feedback2").textContent="No emote set to add to (default should be set on installation).";else{var n=document.getElementById("code").value;if(""==n)document.getElementById("feedback2").textContent="No code given.",document.getElementById("found").className="hide",setTimeout(function(){document.getElementById("feedback2").textContent=""},2e3);else if(n.match("^[A-Za-z0-9:_]+$")){for(var o=!1,d=0;d<t.length;d++)if(n==t[d].code){document.getElementById("feedback2").textContent="Code already in use as",o=!0,document.getElementById("addedimg").src=t[d].src,setremove(n),document.getElementById("found").className="show";break}if(0==o){var c=document.getElementById("src").value;if(""==c)document.getElementById("feedback2").textContent="Emote not found.",document.getElementById("found").className="hide",setTimeout(function(){document.getElementById("feedback2").textContent=""},2e3);else{var a=(new Date).toLocaleString("en-US");t.push({code:n,src:c,date:a}),chrome.storage.local.set({SET:t},function(){document.getElementById("feedback2").textContent="Emote added with image:",document.getElementById("addedimg").src=c,setremove(n),document.getElementById("found").className="show",setswap(),setTimeout(function(){document.getElementById("feedback2").textContent=""},2e3)})}}}else document.getElementById("feedback2").textContent="Code contains invalid characters.",setTimeout(function(){document.getElementById("feedback2").textContent=""},2e3)}})});