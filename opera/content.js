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
                        //var currentUsername = usernameElement.textContent;
                        userNameColors[usernameElement[i].textContent] = randomGeneratedColor;

                        //console.log(usernameElement[i].textContent);
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
                

                
                var userNameColors = {};

                var fireOnHashChangesToo = true;
                var pageURLCheckTimer = setInterval (function () {
                	try { usernameElementInterval();
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
        var elements = nodes.querySelectorAll("span:not(.emote_wrapper):not(.tooltiptext), div:not(.tw-tooltip):not(.bttv-tooltip):not(.ffz__tooltip--inner), p, h1, h2, h3:not(.item-name), h4, h5, h6, a, b, strong, em, i, th, td, li, blockquote");
        for (var i = 0; i < elements.length; i++) {
            for (var j = 0; j < elements[i].childNodes.length; j++) {
                var node = elements[i].childNodes[j];
                if (node.nodeType === 3) { //if the node is a text node
                    var text = node.nodeValue.split(" "); //split text by spaces
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