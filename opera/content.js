(function() { 
	var yourUsernameColor = "#000";
    var userNameColor = "random";  
    document.documentElement.style.setProperty('--usernamecolor', yourUsernameColor);
    document.documentElement.style.setProperty('--fontfamily', 'Roboto');
    document.documentElement.style.setProperty('--chatwidth', '310px'); 
    document.documentElement.style.setProperty('--chattopbarcolor', '#18181b'); 
    document.documentElement.style.setProperty('--pfppadleft', '0');
    document.documentElement.style.setProperty('--pfpmargleft', '18%'); 
    document.documentElement.style.setProperty('--pfpwidth', '82%'); 
    document.documentElement.style.setProperty('--messagestyle', 'left');
    document.documentElement.style.setProperty('--currentvolon', '0');



    let body = document.documentElement || document.body || document.getElementsByTagName("body")[0];
    let settings = {
        volume: 20,
        volumeIncrement: 3,
    };

    let handleScroll = function (element, video) {
        if (!Boolean(video.webkitAudioDecodedByteCount)) //video has audio. If not stops volume scrolling
            return;

        let volume = 1;

        if (video.volume > settings.volumeIncrement / 100 || (video.volume === settings.volumeIncrement / 100 && event.deltaY < 0)) {
            volume = video.volume + (settings.volumeIncrement / 100) * (event.deltaY / 100 * -1); //deltaY is how much the wheel scrolled, 100 up, -100 down. Divided by 100 to only get direction, then inverted

            //Rounding the volume to the nearest increment, in case the original volume was not on the increment.
            volume = volume * 100;
            volume = volume / settings.volumeIncrement;
            volume = Math.round(volume);
            volume = volume * settings.volumeIncrement;
            volume = volume / 100;
        } else {
            volume = video.volume + (1 / 100) * (event.deltaY / 100 * -1);
        }

        //Limiting the volume to between 0-1
        if (volume < 0) {
            volume = 0;

        } else if (volume > 1) {
            volume = 1;
        }

        video.muted = volume <= 0;

        video.volume = volume;
        video.dataset.volume = volume;

        let currentvol = Math.round(video.volume * 100); 
        //document.querySelector('.k4urcfbm.j9ispegn.pmk7jnqg.pcp91wgn.iuny7tx3.p8fzw8mz.ipjc6fyt.rq0escxv.pqc7ok08').style.opacity = '0';
        document.querySelector('.k4urcfbm.pmk7jnqg.i09qtzwb.qttc61fc.ihh4hy1g.kdgqqoy6.jk6sbkaj.bogkn74s').style['height'] = currentvol + '%';

        
        
    }

    let onScroll = function (event) {
        let elements = document.elementsFromPoint(event.clientX, event.clientY);
        for (const element of elements) {
            if (element.tagName === "VIDEO") {
                event.preventDefault();
                handleScroll(element, element);
                document.documentElement.style.setProperty('--currentvolon', "1");
                document.documentElement.style.setProperty('--currentvolonb', "block");
                setTimeout(function(){
                    document.documentElement.style.setProperty('--currentvolon', "0");
                    document.documentElement.style.setProperty('--currentvolonb', "none");
                }, 3000);
            }
        }


    }

    let handleDefaultVolume = function (video) {
        video.volume = settings.volume / 100;
        video.dataset.volume = settings.volume / 100;

        let change = function () {
            if (!(video.volume == video.dataset.volume - settings.volumeIncrement || video.volume == video.dataset.volume + settings.volumeIncrement || video.volume == video.dataset.volume)) { //Checks to see if the registered change in volume is equal to the increment. If it is not then it is denied.
                video.volume = video.dataset.volume;
            }
        };

        video.addEventListener("volumechange", change);
    };

    let setAudio = function (mutations) {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.tagName !== "VIDEO")
                    continue;

                let video = node;

                handleDefaultVolume(video);
            }
        }
    }

    

    function enableStyles(){
        var a = chrome.runtime.getURL("content_new.css");
        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = a;

        head.appendChild(link);


        
        var yourUsername = "Dopexz Ed";
       	var storage = chrome.storage.local;
        
        storage.get('volumeScrollCheck', (function(result) {
                if (result['volumeScrollCheck'] === 'on') {
                    document.addEventListener("wheel", onScroll, {passive: false});
                    }
            }));

        function storageSetValueSettings(resultValue, styleRootValue, defaultValue) {
        	storage.get(resultValue, (function(result) {
		        if (result[resultValue]) {
		            document.documentElement.style.setProperty(styleRootValue, result[resultValue]); 
		            } else {
		                document.documentElement.style.setProperty(styleRootValue, defaultValue);  
		                } 
	        }));
        }

        function storageSetValueSettingsConditional(resultValue, styleRootValue, defaultValue, firstValue, firstCond, secondCond) {
        	storage.get(resultValue, (function(result) {
		        if (result[resultValue] === firstCond) {
		            document.documentElement.style.setProperty(styleRootValue, firstValue); 

		            } else if (result[resultValue] === secondCond) {
		                document.documentElement.style.setProperty(styleRootValue, defaultValue);  
		                } 
	        }));
        }
        function storageSetValueInterval() {
        	storageSetValueSettings('chatBackground', '--chatbg', '#18181b');
		    storageSetValueSettings('chatTextSize', '--textsize', '13px');
		    storageSetValueSettings('chatTextColor', '--textcolor', '#FFF');
		    storageSetValueSettings('topbarColor', '--topbarcolor', '#18181b');
		    storageSetValueSettings('chattopbarColor', '--chattopbarcolor', '#18181b');
		    storageSetValueSettings('changefont', '--fontfamily', 'Roboto');
		   	storageSetValueSettings('changeChatWidth', '--chatwidth', '310px');



		    storageSetValueSettingsConditional('hideChatProfilePictures', '--pfpdisplay', 'block', 'none', 'hide', 'show');

        	storage.get('hideChatProfilePictures', (function(result) {
		        if (result['hideChatProfilePictures'] === 'hide') {
		            document.documentElement.style.setProperty('--pfppadleft', '5px');
				    document.documentElement.style.setProperty('--pfpmargleft', '0px'); 
				    document.documentElement.style.setProperty('--pfpwidth', ''); 
		        } else if (result['hideChatProfilePictures'] === 'show') {
		                document.documentElement.style.setProperty('--pfppadleft', '0');
					    document.documentElement.style.setProperty('--pfpmargleft', '18%'); 
					    document.documentElement.style.setProperty('--pfpwidth', '82%'); 
		        } 
	        }));

		    storageSetValueSettingsConditional('messageStyle', '--messagestyle', 'left', 'none', '2', '1');


		    storage.get('messageStyle', (function(result) {
		        if (result['messageStyle'] === '1') {
		            document.documentElement.style.setProperty('--messagestyle', 'left');
		        } else if (result['messageStyle'] === '2') {
		                document.documentElement.style.setProperty('--messagestyle', 'none');
		        } 
	        }));

            storage.get('volumeScrollCheck', (function(result) {
                if (result['volumeScrollCheck'] === 'on') {
                    scrollwheelvolume = true;
                } else if (result['messageStyle'] === 'off') {
                        scrollwheelvolume = false;
                } 
            }));


        }

        function setHighlightWords() {
            var newc = [];
            storage.get(['highlightKeywords', 'highlightColor', 'highlightOpacity'],  function(result) {
                if (result['highlightKeywords'] && result['highlightColor']) {
                    newc = result['highlightKeywords'].split(",");
                    for (var x=0; x<messageElement.length; x++) {
                        messageElement[x].style.backgroundColor = 'transparent';
                        messageElement[x].style.opacity = '1';
                        messageElement[x].style.transform = "none";
                        var textassplit = messageElement[x].textContent.split(" ");
                        for (var l=0; l<textassplit.length; l++) {
                            for (var j=0; j<newc.length; j++) {
                                if (textassplit[l].includes(newc[j])) {
                                    messageElement[x].style.transform = "scale(1.02)";
                                    messageElement[x].style.opacity = result['highlightOpacity'];
                                    messageElement[x].style.backgroundColor = result['highlightColor'];

                                }
                            }  
                        }      
                    }          
                }          
            })
        }




        function usernameElementInterval() {
            storage.get(['yourUsername', 'yourUsernameColor'], function(result) {
                    if (result['yourUsername'] && result['yourUsernameColor']) {
                        yourUsername = result['yourUsername'];
                        yourUsernameColor = result['yourUsernameColor'];
                        userNameColors[yourUsername] = yourUsernameColor;
                    } else{
                        yourUsername = 'Dopexz Ed';
                        yourUsernameColor = 'blue';
                        userNameColors[yourUsername] = yourUsernameColor;
                    }

                })
                   for(var i = 0; i < usernameElement.length; i++) {
                    if(userNameColor != undefined && userNameColor != "random") {
                            usernameElement[i].style.color = userNameColor;
                    }else{
                        if (usernameElement[i].textContent in userNameColors) {
                            usernameElement[i].style.color = userNameColors[usernameElement[i].textContent];
                        } else{
                        
                        var randomGeneratedColor = getRandomColor();
                        usernameElement[i].style.color = randomGeneratedColor;
                        userNameColors[usernameElement[i].textContent] = randomGeneratedColor;
                        }
                        }
                    }  
        }
        
        var fireOnHashChangesToo = true;
        var pageURLCheckTimer = setInterval (
        	function () {
        		try {
		        storageSetValueInterval();
                
                  } catch(e){
        			console.log(e);
   					 }  
            }
                , 1000
            );
                // Random Colors func
                function getRandomColor(){
                    return "hsl(" + 360 * Math.random() + ',' + (50 + 50 * Math.random()) + '%,' + (40 + 40 * Math.random()) + '%)';
                }

                var usernameElement = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p oo9gr5id");
                var messageElement = document.getElementsByClassName("l9j0dhe7 ll8tlv6m rq0escxv j83agx80 pfnyh3mw e5nlhep0 hv4rvrfc dati1w0a ecm0bbzt btwxx1t3 lzcic4wl");
                var textonlyElement = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
                

                
                var userNameColors = {};

                var fireOnHashChangesToo = true;
                var pageURLCheckTimer = setInterval (function () {
                	try { usernameElementInterval();
                        setHighlightWords();
                	} catch(e){
        			console.log(e);
        			}                   
                }
                , 1000
            );
    }


    var emotes = []; //array for emote objects
    chrome.storage.local.get(['SET'], function(result) { //get custom emotes at page load
        emotes = result.SET; //used saved emote set
    });

    var hostnames = ["www.facebook.com"]; //array for hostname objects

    function substitute(nodes) { //substitutes text patterns in generally visible text elements with assigned inline images
        var elements = nodes.querySelectorAll("div:not(.tw-tooltip):not(.bttv-tooltip):not(.ffz__tooltip--inner)");
        for (var i = 0; i < elements.length; i++) {
            for (var j = 0; j < elements[i].childNodes.length; j++) {
                var node = elements[i].childNodes[j];
                if (node.nodeType === 3) { //if the node is a text node
                    var text = node.nodeValue.split(" "); //split text by spaces
                    if (text.length < 38) {
                        var new_node = document.createDocumentFragment();
                        for (var k = 0; k < text.length; k++) {
                            var found = false;
                            for (var l = 0; l < emotes.length; l++) {
                                if (text[k] == emotes[l].code) { //if emote match is found
                                    found = true;
                                    var wrapper = document.createElement("span");
                                    wrapper.className = "emote_wrapper";
                                    var icon = document.createElement("img");
                                    icon.className = "inserted_emote";
                                    icon.src = emotes[l].src; //emote image source
                                    icon.alt = emotes[l].code; //alternate text (for copy/paste)
                                    var tip = document.createElement("span");
                                    tip.className = "tooltiptext";
                                    tip.textContent = emotes[l].code;
                                    wrapper.appendChild(icon);
                                    wrapper.appendChild(tip);
                                    new_node.appendChild(wrapper);
                                    break; //break loop when a match is found (only one emote can match)
                                }
                            }
                            if (found == false) { //if no emote match has been found
                                new_node.appendChild(document.createTextNode(text[k])); //re-insert word
                            }
                            if (k < text.length - 1) { //miss last word
                                new_node.appendChild(document.createTextNode(" ")); //add a space
                            }
                        }
                        new_node.normalize(); //concatenate adjacent text nodes
                        elements[i].replaceChild(new_node, node); //replace text node with fragment including inserted emotes
                    }
                    else {
                        break
                    }
                }
            }
        }
    }

    var observer = new MutationObserver(function(mutations) { //checks nodes that are subjected to change after initial page load
        mutations.forEach(function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
	                if (mutation.addedNodes[i].childNodes.length) {
	                	substitute(mutation.addedNodes[i]); //subsequent substitutions
	                	} 
            }
        });
    });

    function initiate() {
        var hn = window.location.hostname; //get hostname of frame
        for (var i = 0; i < hostnames.length; i++) {
            if (hn == hostnames[i]) { //if hostname included
                substitute(document.body); //activated substitution
                observer.observe(document.body, { //start checking
                    childList: true, subtree: true
                });
                break;
            }
        }
    }

    chrome.storage.sync.get(['ON'], function(result) { //check if the extension is on at page load
        if (result.ON == 1) {
            enableStyles();
           	initiate();

        }
    });

    var target = null;

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { //menu actions
        if (request.order == "stop") { //switch extension off
            observer.disconnect(); //stop checking
        }
        else if (request.order == "start") { //switch extension on
            initiate();
        }
        if (request.newemotes == "change") { //use new custom emotes set
            chrome.storage.local.get(['SET'], function(result) {
                emotes = result.SET;
                chrome.storage.sync.get(['ON'], function(result) {
                    if (result.ON == 1) {
                        var hn = window.location.hostname; //get hostname of frame
                        for (var i = 0; i < hostnames.length; i++) {
                            if (hn == hostnames[i]) { //if hostname included
                                substitute(document.body); //activated substitution
                                break;
                            }
                        }
                    }
                });
            });
        }
        if (request.context == "add") {
            if (typeof target.alt !== "undefined") {
                sendResponse({ alt: target.alt, src: target.src });
            }
        }
    });
}());