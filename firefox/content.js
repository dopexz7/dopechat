(function() { 
    var yourUsernameColor = "#000";
    var hideChatProfilePictures = true; 
    var topBarStyle = true; 
    var showThreeDots = false; 
    var userNameColor = "random"; 
    var topBarColor = "#18181b";   
    document.documentElement.style.setProperty('--usernamecolor', yourUsernameColor);
    document.documentElement.style.setProperty('--chatwidth', '310px'); 
    document.documentElement.style.setProperty('--chattopbarcolor', '#18181b'); 



    function enableStyles(){
        
        var a = browser.runtime.getURL("content_new.css");
        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = a;

        head.appendChild(link);


        
        var yourUsername = "Dopexz";
                var storage = chrome.storage.local;
                storage.get('chatBackground', function(result) {
                    
                    if (result['chatBackground']) {
                    document.documentElement.style.setProperty('--chatbg', result['chatBackground']); 
                    } else {
                       document.documentElement.style.setProperty('--chatbg', '#18181b');  
                    } 
                })
                storage.get('chatTextSize', function(result) {
                    document.documentElement.style.setProperty('--textsize', result['chatTextSize']);
                })
                storage.get('chatTextColor', function(result) {
                    if (result['chatTextColor']) {
                        document.documentElement.style.setProperty('--textcolor', result['chatTextColor']);
                    } else {
                        document.documentElement.style.setProperty('--textcolor', '#FFF');  
                    }

                })
                storage.get('topbarColor', function(result) {
                    if (result['topbarColor']) {
                    document.documentElement.style.setProperty('--topbarcolor', result['topbarColor']);
                    } else {
                       document.documentElement.style.setProperty('--topbarcolor', '#18181b');  
                    }
                })
                storage.get('chattopbarColor', function(result) {
                    if (result['chattopbarColor']) {
                    document.documentElement.style.setProperty('--chattopbarcolor', result['chattopbarColor']); 
                    } else {
                       document.documentElement.style.setProperty('--chattopbarcolor', '#18181b');  
                    }
                })

                storage.get('changefont', function(result) {
                    if (result['changefont']) {
                    document.documentElement.style.setProperty('--fontfamily', result['changefont']); 
                    } else {
                       document.documentElement.style.setProperty('--fontfamily', 'Roboto');  
                    }
                })
                storage.get('changeChatWidth', function(result) {
                    if (result['changeChatWidth']) {
                    document.documentElement.style.setProperty('--chatwidth', result['changeChatWidth']); 
                    } else {
                       document.documentElement.style.setProperty('--chatwidth', '310px');  
                    }
                })

                storage.get('messageStyle', function(result) {
                    if (result['messageStyle'] === '2') {
                        document.documentElement.style.setProperty('--messagestyle', ''); 
                    } else if (result['messageStyle'] === '1') {
                       document.documentElement.style.setProperty('--messagestyle', 'left');  
                    }
                    else {
                        document.documentElement.style.setProperty('--messagestyle', 'left'); 
                    }
                })

                storage.get('hideChatProfilePictures', function(result) {
                    if (result['hideChatProfilePictures'] === 'hide') {
                        document.documentElement.style.setProperty('--pfpdisplay', 'none');
                    } else if (result['hideChatProfilePictures'] === 'show') {
                        document.documentElement.style.setProperty('--pfpdisplay', 'block');
                    }
                })


                storage.get('threedots', function(result) {
                    if (result['threedots'] === 'hide') {
                        document.getElementsByClassName("pgctjfs5").style.display = "none";
                    } 
                })
                
                // Random Colors func
                function getRandomColor(){
                    return "hsl(" + 360 * Math.random() + ',' + (50 + 50 * Math.random()) + '%,' + (40 + 40 * Math.random()) + '%)';
                }

                var usernameElement = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p oo9gr5id");
                
                var userNameColors = {};
                storage.get(['yourUsername', 'yourUsernameColor'], function(result) {
                    yourUsername = result['yourUsername'];
                    yourUsernameColor = result['yourUsernameColor']
                    userNameColors[yourUsername] = yourUsernameColor;

                })
                

                var fireOnHashChangesToo = true;
                var pageURLCheckTimer = setInterval (
                function () {
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
                , 10
            );
    }


    var emotes = []; //array for emote objects
    chrome.storage.local.get(['SET'], function(result) { //get custom emotes at page load
        emotes = result.SET; //used saved emote set
    });

    var hostnames = []; //array for hostname objects
    chrome.storage.sync.get(['HOSTS'], function(result) { //get custom hostnames at page load
        hostnames = result.HOSTS; //used saved hostname set
    });

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
    document.addEventListener("contextmenu", function(event) {
        target = event.target;
    });

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
        if (request.sitelist == "get") {
            if (window.top == window.self) {
                var hn = window.top.location.hostname; //get hostname of top frame
                sendResponse({ hostname: hn });
            }
        }
        if (request.context == "add") {
            if (typeof target.alt !== "undefined") {
                sendResponse({ alt: target.alt, src: target.src });
            }
        }
    });
}());